<script>
import Layout from "../../layouts/main";
import PageHeader from "../../../components/Page-header";
import adminApi from "../../../api/adminAxios";
import Switches from "vue-switches";
import { required, minLength, maxLength, integer } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import ErrorMessage from "../../../components/widgets/errorMessage";
import loader from "../../../components/loader";
import { dynamicSortString, dynamicSortNumber } from "../../../helper/tableSort";
import Multiselect from "vue-multiselect";
import Country from "../../../components/country.vue";
import Governate from "../../../components/governate.vue";
import {formatDateOnly} from "../../../helper/startDate";
import translation from "../../../helper/translation-mixin";

/**
 * Advanced Table component
 */
export default {
  page: {
    title: "City",
    meta: [{ name: "description", content: "City" }],
  },
  mixins: [translation],
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            if (vm.$store.state.auth.work_flow_trees.includes('city')) {
                return true;
            } else {
                return vm.$router.push({ name: "home" });
            }
        });
    },
  updated() {
    $(function () {
      $(".englishInput").keypress(function (event) {
        var ew = event.which;
        if (ew == 32) return true;
        if (48 <= ew && ew <= 57) return true;
        if (65 <= ew && ew <= 90) return true;
        if (97 <= ew && ew <= 122) return true;
        return false;
      });
      $(".arabicInput").keypress(function (event) {
        var ew = event.which;
        if (ew == 32) return false;
        if (48 <= ew && ew <= 57) return true;
        if (65 <= ew && ew <= 90) return false;
        if (97 <= ew && ew <= 122) return false;
        return true;
      });
    });
  },
  components: {
    Layout,
    PageHeader,
    Switches,
    Multiselect,
    ErrorMessage,
    loader,
    Country,
    Governate,
  },
  data() {
    return {
      per_page: 50,
      search: "",
      debounce: {},
      citiesPagination: {},
      cities: [],
      isLoader: false,
      create: {
        name: "",
        name_e: "",
        country_id: null,
        governorate_id: null,
        is_active: 1,
      },
      edit: {
        name: "",
        name_e: "",
        country_id: null,
        governorate_id: null,
        is_active: 1,
      },
      setting: {
            name: true,
            name_e: true,
            country_id: true,
            governorate_id: true,
            is_active: true
      },
      errors: {},
      dropDownSenders: [],
      isCheckAll: false,
      checkAll: [],
      current_page: 1,
      filterSetting: [
          "name", "name_e",
          this.$i18n.locale  == 'ar'?'country.name':'country.name_e',
          this.$i18n.locale  == 'ar'?'governorate.name':'governorate.name_e',
          "governorate_id"
      ],
      countries: [],
      governorates: [],
      is_disabled: false,
        Tooltip: '',
        mouseEnter: null
    };
  },
  validations: {
    create: {
      name: { required, minLength: minLength(2), maxLength: maxLength(100) },
      name_e: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(100),
      },
      country_id: { required },
      governorate_id: { required },
      is_active: { required, integer },
    },
    edit: {
      name: { required, minLength: minLength(2), maxLength: maxLength(100) },
      name_e: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(100),
      },
      country_id: { required },
      governorate_id: { required },
      is_active: { required, integer },
    },
  },
  watch: {
    /**
     * watch per_page
     */
    per_page(after, befour) {
      this.getData();
    },
    /**
     * watch search
     */
    search(after, befour) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.getData();
      }, 400);
    },
    /**
     * watch check All table
     */
    isCheckAll(after, befour) {
      if (after) {
        this.cities.forEach((el) => {
          if (!this.checkAll.includes(el.id)) {
            this.checkAll.push(el.id);
          }
        });
      } else {
        this.checkAll = [];
      }
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    showGovernateModal() {
      if (this.create.governorate_id == 0) {
        this.$bvModal.show("governate-create");
        this.create.governorate_id = null;
      }
    },
    showEditGovernateModal() {
      if (this.edit.governorate_id == 0) {
        this.$bvModal.show("governate-create");
        this.edit.governorate_id = null;
      }
    },
    resetForm() {
      this.create = {
        name: "",
        name_e: "",
        country_id: null,
        governorate_id: null,
        is_active: 1,
      };
      this.is_disabled = false;

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },

    /**
     *  start get Data countrie && pagination
     */
    getData(page = 1) {
      this.isLoader = true;
        let filter = '';
        for (let i = 0; i < this.filterSetting.length; ++i) {
            filter += `columns[${i}]=${this.filterSetting[i]}&`;
        }

      adminApi
        .get(`/cities?page=${page}&per_page=${this.per_page}&search=${this.search}&columns=${filter}`)
        .then((res) => {
          let l = res.data;
          this.cities = l.data;
          this.citiesPagination = l.pagination;
          this.current_page = l.pagination.current_page;
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: `${this.$t("general.Error")}`,
            text: `${this.$t("general.Thereisanerrorinthesystem")}`,
          });
        })
        .finally(() => {
          this.isLoader = false;
        });
    },
    getDataCurrentPage(page = 1) {
      if (
        this.current_page <= this.citiesPagination.last_page &&
        this.current_page != this.citiesPagination.current_page &&
        this.current_page
      ) {
        this.isLoader = true;
          let filter = '';
          for (let i = 0; i < this.filterSetting.length; ++i) {
              filter += `columns[${i}]=${this.filterSetting[i]}&`;
          }

        adminApi
          .get(
            `/cities?page=${page}&per_page=${this.per_page}&search=${this.search}&columns=${filter}`
          )
          .then((res) => {
            let l = res.data;
            this.cities = l.data;
            this.citiesPagination = l.pagination;
            this.current_page = l.pagination.current_page;
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: `${this.$t("general.Error")}`,
              text: `${this.$t("general.Thereisanerrorinthesystem")}`,
            });
          })
          .finally(() => {
            this.isLoader = false;
          });
      }
    },
    /**
     *  end get Data countrie && pagination
     */
    /**
     *  start delete countrie
     */
   deleteCity(id, index) {
      if (Array.isArray(id)) {
        Swal.fire({
          title: `${this.$t("general.Areyousure")}`,
          text: `${this.$t("general.Youwontbeabletoreverthis")}`,
          type: "warning",
          showCancelButton: true,
          confirmButtonText: `${this.$t("general.Yesdeleteit")}`,
          cancelButtonText: `${this.$t("general.Nocancel")}`,
          confirmButtonClass: "btn btn-success mt-2",
          cancelButtonClass: "btn btn-danger ml-2 mt-2",
          buttonsStyling: false,
        }).then((result) => {
          if (result.value) {
            this.isLoader = true;
            adminApi
              .post(`/cities/bulk-delete`, { ids: id })
              .then((res) => {
                this.checkAll = [];
                this.getData();
                Swal.fire({
                  icon: "success",
                  title: `${this.$t("general.Deleted")}`,
                  text: `${this.$t("general.Yourrowhasbeendeleted")}`,
                  showConfirmButton: false,
                  timer: 1500,
                });
              })
              .catch((err) => {
                if (err.response.status == 400) {
                  Swal.fire({
                    icon: "error",
                    title: `${this.$t("general.Error")}`,
                    text: `${this.$t("general.CantDeleteRelation")}`,
                  });
                  this.getData();
                } else {
                  Swal.fire({
                    icon: "error",
                    title: `${this.$t("general.Error")}`,
                    text: `${this.$t("general.Thereisanerrorinthesystem")}`,
                  });
                }
              })
              .finally(() => {
                this.isLoader = false;
              });
          }
        });
      } else {
        Swal.fire({
          title: `${this.$t("general.Areyousure")}`,
          text: `${this.$t("general.Youwontbeabletoreverthis")}`,
          type: "warning",
          showCancelButton: true,
          confirmButtonText: `${this.$t("general.Yesdeleteit")}`,
          cancelButtonText: `${this.$t("general.Nocancel")}`,
          confirmButtonClass: "btn btn-success mt-2",
          cancelButtonClass: "btn btn-danger ml-2 mt-2",
          buttonsStyling: false,
        }).then((result) => {
          if (result.value) {
            this.isLoader = true;

            adminApi
              .delete(`/cities/${id}`)
              .then((res) => {
                this.checkAll = [];
                this.getData();
                Swal.fire({
                  icon: "success",
                  title: `${this.$t("general.Deleted")}`,
                  text: `${this.$t("general.Yourrowhasbeendeleted")}`,
                  showConfirmButton: false,
                  timer: 1500,
                });
              })

              .catch((err) => {
                if (err.response.status == 400) {
                  Swal.fire({
                    icon: "error",
                    title: `${this.$t("general.Error")}`,
                    text: `${this.$t("general.CantDeleteRelation")}`,
                  });
                } else {
                  Swal.fire({
                    icon: "error",
                    title: `${this.$t("general.Error")}`,
                    text: `${this.$t("general.Thereisanerrorinthesystem")}`,
                  });
                }
              })
              .finally(() => {
                this.isLoader = false;
              });
          }
        });
      }
    },
    /**
     *  end delete countrie
     */
    /**
     *  reset Modal (create)
     */
    resetModalHidden() {
      this.create = {
        name: "",
        name_e: "",
        country_id: null,
        governorate_id: null,
        is_active: 1,
      };
      this.governorates = [];
      this.countries = [];
      this.$nextTick(() => {
        this.$v.$reset();
      });
      this.errors = {};
      this.$bvModal.hide(`create`);
    },
    /**
     *  hidden Modal (create)
     */
    async resetModal() {
        await this.getCategory();
      this.create = {
        name: "",
        name_e: "",
        country_id: null,
        governorate_id: null,
        is_active: 1,
      };
       this.is_disabled = false;
      this.governorates = [
        { id: 0, name: "اضف محافظة جديدة", name_e: "Add new governorate" },
      ];
      this.$nextTick(() => {
        this.$v.$reset();
      });
      this.errors = {};
    },
    /**
     *  create countrie
     */

    AddSubmit() {
      if (this.create.name || this.create.name_e) {
        this.create.name = this.create.name ? this.create.name : this.create.name_e;
        this.create.name_e = this.create.name_e ? this.create.name_e : this.create.name;
      }
      this.$v.create.$touch();

      if (this.$v.create.$invalid) {
        return;
      } else {
        this.isLoader = true;
        this.errors = {};
        this.is_disabled = false;

        adminApi
          .post(`/cities`, this.create)
          .then((res) => {
            this.getData();
            this.is_disabled = true;
            setTimeout(() => {
              Swal.fire({
                icon: "success",
                text: `${this.$t("general.Addedsuccessfully")}`,
                showConfirmButton: false,
                timer: 1500,
              });
            }, 500);
          })
          .catch((err) => {
            if (err.response.data) {
              this.errors = err.response.data.errors;
            } else {
              Swal.fire({
                icon: "error",
                title: `${this.$t("general.Error")}`,
                text: `${this.$t("general.Thereisanerrorinthesystem")}`,
              });
            }
          })
          .finally(() => {
            this.isLoader = false;
          });
      }
    },
    /**
     *  edit countrie
     */
    editSubmit(id) {
      if (this.edit.name || this.edit.name_e) {
        this.edit.name = this.edit.name ? this.edit.name : this.edit.name_e;
        this.edit.name_e = this.edit.name_e ? this.edit.name_e : this.edit.name;
      }
      this.$v.edit.$touch();
      if (this.$v.edit.$invalid) {
        return;
      } else {
        this.isLoader = true;
        this.errors = {};
        adminApi
          .put(`/cities/${id}`, this.edit)
          .then((res) => {
            this.$bvModal.hide(`modal-edit-${id}`);
            this.getData();
            setTimeout(() => {
              Swal.fire({
                icon: "success",
                text: `${this.$t("general.Editsuccessfully")}`,
                showConfirmButton: false,
                timer: 1500,
              });
            }, 500);
          })
          .catch((err) => {
            if (err.response.data) {
              this.errors = err.response.data.errors;
            } else {
              Swal.fire({
                icon: "error",
                title: `${this.$t("general.Error")}`,
                text: `${this.$t("general.Thereisanerrorinthesystem")}`,
              });
            }
          })
          .finally(() => {
            this.isLoader = false;
          });
      }
    },
    /**
     *   show Modal (edit)
     */
    async resetModalEdit(id) {
      let city = this.cities.find((e) => id == e.id);
      await this.getCategory();
      await this.getGovernorate(city.country.id);
      this.edit.name = city.name;
      this.edit.name_e = city.name_e;
      this.edit.is_active = city.is_active ? 1 : 0;
      this.edit.country_id = city.country.id;
      this.edit.governorate_id = city.governorate.id;
      this.errors = {};
    },
    /**
     *  hidden Modal (edit)
     */
    resetModalHiddenEdit(id) {
      this.errors = {};
      this.edit = {
        name: "",
        name_e: "",
        country_id: null,
        governorate_id: null,
        is_active: 1,
      };
      this.governorates = [];
      this.countries = [];
    },
    /**
     *  start  dynamicSortString
     */
    sortString(value) {
      return dynamicSortString(value);
    },
    SortNumber(value) {
      return dynamicSortNumber(value);
    },
    /**
     *  start  ckeckRow
     */
    checkRow(id) {
      if (!this.checkAll.includes(id)) {
        this.checkAll.push(id);
      } else {
        let index = this.checkAll.indexOf(id);
        this.checkAll.splice(index, 1);
      }
    },
    /**
     *  end  ckeckRow
     */
    moveInput(tag, c, index) {
      document.querySelector(`${tag}[data-${c}='${index}']`).focus();
    },
    async getCategory() {
      this.countries = [];
      this.governorates = [];
      this.create.governorate_id = null;
      this.edit.governorate_id = null;
      this.create.city_id = null;
      this.edit.city_id = null;
      await adminApi
        .get(`/countries?is_active=active`)
        .then((res) => {
          let l = res.data.data;
          l.unshift({ id: 0, name: "اضف دولة", name_e: "Add Country" });
          this.countries = l;
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: `${this.$t("general.Error")}`,
            text: `${this.$t("general.Thereisanerrorinthesystem")}`,
          });
        });
    },
    async getGovernorate(id) {
      if (id == 0) {
        this.$bvModal.show("country-create");
        this.create.country_id = null;
        this.edit.country_id = null;
      }
      if (!id) {
        return;
      }
      this.governorates = [];
      this.create.city_id = null;
      this.edit.city_id = null;
      this.create.governorate_id = null;
      this.edit.governorate_id = null;
      await adminApi
        .get(`/governorates?country_id=${id}`)
        .then((res) => {
          let l = res.data.data;
          l.unshift({id:0,name:"اضف محافظه",name_e:"Add Governorate"})
          this.governorates = l;
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: `${this.$t("general.Error")}`,
            text: `${this.$t("general.Thereisanerrorinthesystem")}`,
          });
        });
    },
      formatDate(value) {
          return formatDateOnly(value);
      },
      log(id) {
          if(this.mouseEnter != id){
              this.Tooltip = "";
              this.mouseEnter = id;
              adminApi
                  .get(`/cities/logs/${id}`)
                  .then((res) => {
                      let l = res.data.data;
                      l.forEach((e) => {
                          this.Tooltip += `Created By: ${e.causer_type}; Event: ${
                              e.event
                          }; Description: ${e.description} ;Created At: ${this.formatDate(
                              e.created_at
                          )} \n`;
                      });
                      $(`#tooltip-${id}`).tooltip();
                  })
                  .catch((err) => {
                      Swal.fire({
                          icon: "error",
                          title: `${this.$t("general.Error")}`,
                          text: `${this.$t("general.Thereisanerrorinthesystem")}`,
                      });
                  });
          }
      },
  },
};
</script>

<template>
  <Layout>
    <PageHeader />
    <Country @created="getCategory" />
    <Governate />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <!-- start search -->
            <div class="row justify-content-between align-items-center mb-2">
              <h4 class="header-title">{{ $t("city.citiesTable") }}</h4>
              <div class="col-xs-10 col-md-9 col-lg-7" style="font-weight: 500">
                <div class="d-inline-block" style="width: 22.2%">
                  <!-- Basic dropdown -->
                  <b-dropdown
                    variant="primary"
                    :text="$t('general.searchSetting')"
                    ref="dropdown"
                    class="btn-block setting-search"
                  >
                    <b-form-checkbox v-model="filterSetting" value="name" class="mb-1">{{
                      getCompanyKey('city_name_ar')
                    }}</b-form-checkbox>
                    <b-form-checkbox
                      v-model="filterSetting"
                      value="name_e"
                      class="mb-1"
                      >{{ getCompanyKey('city_name_en') }}</b-form-checkbox
                    >
                    <b-form-checkbox
                      v-model="filterSetting"
                      :value="$i18n.locale  == 'ar'?'country.name':'country.name_e'"
                      class="mb-1"
                      >{{ getCompanyKey('country') }}</b-form-checkbox
                    >
                    <b-form-checkbox
                      v-model="filterSetting"
                      :value="$i18n.locale  == 'ar'?'governorate.name':'governorate.name_e'"
                      class="mb-1"
                      >{{ getCompanyKey('governorate') }}</b-form-checkbox
                    >
                  </b-dropdown>
                  <!-- Basic dropdown -->
                </div>

                <div class="d-inline-block position-relative" style="width: 77%">
                  <span
                    :class="[
                      'search-custom position-absolute',
                      $i18n.locale == 'ar' ? 'search-custom-ar' : '',
                    ]"
                  >
                    <i class="fe-search"></i>
                  </span>
                  <input
                    class="form-control"
                    style="display: block; width: 93%; padding-top: 3px"
                    type="text"
                    v-model.trim="search"
                    :placeholder="`${$t('general.Search')}...`"
                  />
                </div>
              </div>
            </div>
            <!-- end search -->

            <div class="row justify-content-between align-items-center mb-2 px-1">
              <div class="col-md-3 d-flex align-items-center mb-1 mb-xl-0">
                <!-- start create and printer -->
                <b-button
                  v-b-modal.create
                  variant="primary"
                  class="btn-sm mx-1 font-weight-bold"
                >
                  {{ $t("general.Create") }}
                  <i class="fas fa-plus"></i>
                </b-button>
                <div class="d-inline-flex">
                  <button class="custom-btn-dowonload">
                    <i class="fas fa-file-download"></i>
                  </button>
                  <button class="custom-btn-dowonload">
                    <i class="fe-printer"></i>
                  </button>
                  <button
                    class="custom-btn-dowonload"
                    @click="$bvModal.show(`edit-${checkAll[0]}`)"
                    v-if="checkAll.length == 1"
                  >
                    <i class="mdi mdi-square-edit-outline"></i>
                  </button>
                  <!-- start mult delete  -->
                  <button
                    class="custom-btn-dowonload"
                    v-if="checkAll.length > 1"
                    @click.prevent="deleteCity(checkAll)"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </button>
                  <!-- end mult delete  -->
                  <!--  start one delete  -->
                  <button
                    class="custom-btn-dowonload"
                    v-if="checkAll.length == 1"
                    @click.prevent="deleteCity(checkAll[0])"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </button>
                  <!--  end one delete  -->
                </div>
                <!-- end create and printer -->
              </div>
              <div
                class="col-xs-10 col-md-9 col-lg-7 d-flex align-items-center justify-content-end"
              >
                <div class="d-fex">
                  <!-- start filter and setting -->
                  <div class="d-inline-block">
                    <b-button class="mx-1 custom-btn-background">
                      {{ $t("general.filter") }}
                      <i class="fas fa-filter"></i>
                    </b-button>
                    <b-button class="mx-1 custom-btn-background">
                      {{ $t("general.group") }}
                      <i class="fe-menu"></i>
                    </b-button>
                      <!-- Basic dropdown -->
                      <b-dropdown variant="primary"
                                  :html="`${$t('general.setting')} <i class='fe-settings'></i>`"
                                  ref="dropdown" class="dropdown-custom-ali">
                          <b-form-checkbox v-model="setting.name" class="mb-1">{{
                                  getCompanyKey('city_name_ar')
                              }}
                          </b-form-checkbox>
                          <b-form-checkbox v-model="setting.name_e" class="mb-1">
                              {{ getCompanyKey('city_name_en') }}
                          </b-form-checkbox>
                          <b-form-checkbox v-model="setting.country_id" class="mb-1">
                              {{ getCompanyKey('country') }}
                          </b-form-checkbox>
                          <b-form-checkbox v-model="setting.governorate_id" class="mb-1">
                              {{ getCompanyKey('governorate') }}
                          </b-form-checkbox>
                          <b-form-checkbox v-model="setting.is_active" class="mb-1">
                              {{ getCompanyKey('city_status') }}
                          </b-form-checkbox>
                          <div class="d-flex justify-content-end">
                              <a href="javascript:void(0)" class="btn btn-primary btn-sm">Apply</a>
                          </div>
                      </b-dropdown>
                      <!-- Basic dropdown -->
                  </div>
                  <!-- end filter and setting -->

                  <!-- start Pagination -->
                  <div class="d-inline-flex align-items-center pagination-custom">
                    <div class="d-inline-block" style="font-size: 13px">
                      {{ citiesPagination.from }}-{{ citiesPagination.to }} /
                      {{ citiesPagination.total }}
                    </div>
                    <div class="d-inline-block">
                      <a
                        href="javascript:void(0)"
                        :style="{
                          'pointer-events':
                            citiesPagination.current_page == 1 ? 'none' : '',
                        }"
                        @click.prevent="getData(citiesPagination.current_page - 1)"
                      >
                        <span>&lt;</span>
                      </a>
                      <input
                        type="text"
                        @keyup.enter="getDataCurrentPage()"
                        v-model="current_page"
                        class="pagination-current-page"
                      />
                      <a
                        href="javascript:void(0)"
                        :style="{
                          'pointer-events':
                            citiesPagination.last_page == citiesPagination.current_page
                              ? 'none'
                              : '',
                        }"
                        @click.prevent="getData(citiesPagination.current_page + 1)"
                      >
                        <span>&gt;</span>
                      </a>
                    </div>
                  </div>
                  <!-- end Pagination -->
                </div>
              </div>
            </div>

            <!--  create   -->
            <b-modal
              id="create"
              :title="getCompanyKey('city_create_form')"
              title-class="font-18"
              size="lg"
              body-class="p-4 "
              :hide-footer="true"
              @show="resetModal"
              @hidden="resetModalHidden"
            >
              <form>
                <div class="mb-3 d-flex justify-content-end">
                  <b-button
                    variant="success"
                    :disabled="!is_disabled"
                    @click.prevent="resetForm"
                    type="button"
                    :class="['font-weight-bold px-2', is_disabled ? 'mx-2' : '']"
                  >
                    {{ $t("general.AddNewRecord") }}
                  </b-button>
                  <template v-if="!is_disabled">
                    <b-button
                      variant="success"
                      type="submit"
                      class="mx-1"
                      v-if="!isLoader"
                      @click.prevent="AddSubmit"
                    >
                      {{ $t("general.Add") }}
                    </b-button>

                    <b-button variant="success" class="mx-1" disabled v-else>
                      <b-spinner small></b-spinner>
                      <span class="sr-only">{{ $t("login.Loading") }}...</span>
                    </b-button>
                  </template>
                  <b-button
                    @click.prevent="$bvModal.hide(`create`)"
                    variant="danger"
                    type="button"
                  >
                    {{ $t("general.Cancel") }}
                  </b-button>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group position-relative">
                      <label class="control-label">
                        {{ getCompanyKey('country') }}
                        <span class="text-danger">*</span>
                      </label>
                      <multiselect
                        @input="getGovernorate(create.country_id)"
                        v-model="create.country_id"
                        :options="countries.map((type) => type.id)"
                        :custom-label="(opt) => countries.find((x) => x.id == opt).name"
                      >
                      </multiselect>
                      <div
                        v-if="$v.create.country_id.$error || errors.country_id"
                        class="text-danger"
                      >
                        {{ $t("general.fieldIsRequired") }}
                      </div>
                      <template v-if="errors.country_id">
                        <ErrorMessage
                          v-for="(errorMessage, index) in errors.country_id"
                          :key="index"
                          >{{ errorMessage }}</ErrorMessage
                        >
                      </template>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group position-relative">
                      <label class="control-label">
                        {{ getCompanyKey('governorate') }}
                        <span class="text-danger">*</span>
                      </label>
                      <multiselect
                        @input="showGovernateModal"
                        v-model="create.governorate_id"
                        :options="governorates.map((type) => type.id)"
                        :custom-label="
                          (opt) => governorates.find((x) => x.id == opt).name
                        "
                      >
                      </multiselect>
                      <div
                        v-if="$v.create.governorate_id.$error || errors.governorate_id"
                        class="text-danger"
                      >
                        {{ $t("general.fieldIsRequired") }}
                      </div>
                      <template v-if="errors.governorate_id">
                        <ErrorMessage
                          v-for="(errorMessage, index) in errors.governorate_id"
                          :key="index"
                          >{{ errorMessage }}</ErrorMessage
                        >
                      </template>
                    </div>
                  </div>
                  <div class="col-md-6 direction" dir="rtl">
                    <div class="form-group">
                      <label for="field-1" class="control-label">
                        {{ getCompanyKey('city_name_ar') }}
                        <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control arabicInput"
                        data-create="1"
                        @keypress.enter="moveInput('input', 'create', 2)"
                        v-model="$v.create.name.$model"
                        :class="{
                          'is-invalid': $v.create.name.$error || errors.name,
                          'is-valid': !$v.create.name.$invalid && !errors.name,
                        }"
                        id="field-1"
                      />
                      <div v-if="!$v.create.name.minLength" class="invalid-feedback">
                        {{ $t("general.Itmustbeatleast") }}
                        {{ $v.create.name.$params.minLength.min }}
                        {{ $t("general.letters") }}
                      </div>
                      <div v-if="!$v.create.name.maxLength" class="invalid-feedback">
                        {{ $t("general.Itmustbeatmost") }}
                        {{ $v.create.name.$params.maxLength.max }}
                        {{ $t("general.letters") }}
                      </div>
                      <template v-if="errors.name">
                        <ErrorMessage
                          v-for="(errorMessage, index) in errors.name"
                          :key="index"
                          >{{ errorMessage }}</ErrorMessage
                        >
                      </template>
                    </div>
                  </div>
                  <div class="col-md-6 direction-ltr" dir="ltr">
                    <div class="form-group">
                      <label for="field-2" class="control-label">
                        {{ getCompanyKey('city_name_en') }}
                        <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control englishInput"
                        data-create="2"
                        @keypress.enter="moveInput('select', 'create', 5)"
                        v-model="$v.create.name_e.$model"
                        :class="{
                          'is-invalid': $v.create.name_e.$error || errors.name_e,
                          'is-valid': !$v.create.name_e.$invalid && !errors.name_e,
                        }"
                        id="field-2"
                      />
                      <div v-if="!$v.create.name_e.minLength" class="invalid-feedback">
                        {{ $t("general.Itmustbeatleast") }}
                        {{ $v.create.name_e.$params.minLength.min }}
                        {{ $t("general.letters") }}
                      </div>
                      <div v-if="!$v.create.name_e.maxLength" class="invalid-feedback">
                        {{ $t("general.Itmustbeatmost") }}
                        {{ $v.create.name_e.$params.maxLength.max }}
                        {{ $t("general.letters") }}
                      </div>
                      <template v-if="errors.name_e">
                        <ErrorMessage
                          v-for="(errorMessage, index) in errors.name_e"
                          :key="index"
                          >{{ errorMessage }}</ErrorMessage
                        >
                      </template>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="mr-2" for="inlineFormCustomSelectPref">
                        {{ getCompanyKey('city_status') }}
                        <span class="text-danger">*</span>
                      </label>
                      <select
                        class="custom-select mr-sm-2"
                        id="inlineFormCustomSelectPref"
                        data-create="5"
                        @keypress.enter.prevent="moveInput('input', 'create', 1)"
                        v-model="$v.create.is_active.$model"
                        :class="{
                          'is-invalid': $v.create.is_active.$error || errors.is_active,
                          'is-valid': !$v.create.is_active.$invalid && !errors.is_active,
                        }"
                      >
                        <option value="" selected>{{ $t("general.Choose") }}...</option>
                        <option value="1">{{ $t("general.Active") }}</option>
                        <option value="0">{{ $t("general.Inactive") }}</option>
                      </select>
                      <template v-if="errors.is_active">
                        <ErrorMessage
                          v-for="(errorMessage, index) in errors.is_active"
                          :key="index"
                          >{{ errorMessage }}</ErrorMessage
                        >
                      </template>
                    </div>
                  </div>
                </div>
              </form>
            </b-modal>
            <!--  /create   -->

            <!-- start .table-responsive-->
            <div class="table-responsive mb-3 custom-table-theme position-relative">
              <!--       start loader       -->
              <loader size="large" v-if="isLoader" />
              <!--       end loader       -->

              <table class="table table-borderless table-hover table-centered m-0">
                <thead>
                  <tr>
                    <th scope="col" style="width: 0">
                      <div class="form-check custom-control">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          v-model="isCheckAll"
                          style="width: 17px; height: 17px"
                        />
                      </div>
                    </th>
                    <th v-if="setting.name">
                      <div class="d-flex justify-content-center">
                        <span>{{ getCompanyKey('city_name_ar') }}</span>
                        <div class="arrow-sort">
                          <i
                            class="fas fa-arrow-up"
                            @click="cities.sort(sortString('name'))"
                          ></i>
                          <i
                            class="fas fa-arrow-down"
                            @click="cities.sort(sortString('-name'))"
                          ></i>
                        </div>
                      </div>
                    </th>
                    <th v-if="setting.name_e">
                      <div class="d-flex justify-content-center">
                        <span>{{ getCompanyKey('city_name_en') }}</span>
                        <div class="arrow-sort">
                          <i
                            class="fas fa-arrow-up"
                            @click="cities.sort(sortString('name_e'))"
                          ></i>
                          <i
                            class="fas fa-arrow-down"
                            @click="cities.sort(sortString('-name_e'))"
                          ></i>
                        </div>
                      </div>
                    </th>
                    <th v-if="setting.country_id">
                      <div class="d-flex justify-content-center">
                        <span>{{ getCompanyKey('country') }}</span>
                        <div class="arrow-sort">
                          <i
                            class="fas fa-arrow-up"
                            @click="cities.sort(SortNumber('country_id'))"
                          ></i>
                          <i
                            class="fas fa-arrow-down"
                            @click="cities.sort(SortNumber('-country_id'))"
                          ></i>
                        </div>
                      </div>
                    </th>
                    <th v-if="setting.governorate_id">
                      <div class="d-flex justify-content-center">
                        <span>{{ getCompanyKey('governorate') }}</span>
                        <div class="arrow-sort">
                          <i
                            class="fas fa-arrow-up"
                            @click="cities.sort(SortNumber('governorate_id'))"
                          ></i>
                          <i
                            class="fas fa-arrow-down"
                            @click="cities.sort(SortNumber('-governorate_id'))"
                          ></i>
                        </div>
                      </div>
                    </th>
                    <th v-if="setting.is_active">
                      <div class="d-flex justify-content-center">
                        <span>{{ getCompanyKey('city_status') }}</span>
                        <div class="arrow-sort">
                          <i
                            class="fas fa-arrow-up"
                            @click="cities.sort(sortString('name_e'))"
                          ></i>
                          <i
                            class="fas fa-arrow-down"
                            @click="cities.sort(sortString('-name_e'))"
                          ></i>
                        </div>
                      </div>
                    </th>
                    <th>
                      {{ $t("general.Action") }}
                    </th>
                    <th><i class="fas fa-ellipsis-v"></i></th>
                  </tr>
                </thead>
                <tbody v-if="cities.length > 0">
                  <tr
                    @click.capture="checkRow(data.id)"
                    @dblclick.prevent="$bvModal.show(`modal-edit-${data.id}`)"
                    v-for="(data, index) in cities"
                    :key="data.id"
                    :class="['body-tr-custom ', data.id]"
                  >
                    <td>
                      <div class="form-check custom-control" style="min-height: 1.9em">
                        <input
                          style="width: 17px; height: 17px"
                          class="form-check-input"
                          type="checkbox"
                          :value="data.id"
                          v-model="checkAll"
                        />
                      </div>
                    </td>
                    <td v-if="setting.name">
                      <h5 class="m-0 font-weight-normal">{{ data.name }}</h5>
                    </td>
                    <td v-if="setting.name_e">
                      <h5 class="m-0 font-weight-normal">{{ data.name_e }}</h5>
                    </td>
                    <td v-if="setting.country_id">
                      {{ $i18n.locale == "ar" ? data.country.name : data.country.name_e }}
                    </td>
                    <td v-if="setting.governorate_id">
                      {{
                        $i18n.locale == "ar"
                          ? data.governorate.name
                          : data.governorate.name_e
                      }}
                    </td>
                    <td v-if="setting.is_active">
                      <span
                        :class="[
                          data.is_active == 'active' ? 'text-success' : 'text-danger',
                          'badge',
                        ]"
                      >
                        {{
                          data.is_active == "active"
                            ? `${$t("general.Active")}`
                            : `${$t("general.Inactive")}`
                        }}
                      </span>
                    </td>
                    <td>
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm dropdown-toggle dropdown-coustom"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {{ $t("general.commands") }}
                          <i class="fas fa-angle-down"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-custom">
                          <a
                            class="dropdown-item"
                            href="#"
                            @click.prevent="$bvModal.show(`modal-edit-${data.id}`)"
                          >
                            <div
                              class="d-flex justify-content-between align-items-center text-black"
                            >
                              <span>{{ $t("general.edit") }}</span>
                              <i class="mdi mdi-square-edit-outline text-info"></i>
                            </div>
                          </a>
                          <a
                            class="dropdown-item text-black"
                            href="#"
                            @click.prevent="deleteCity(data.id)"
                          >
                            <div
                              class="d-flex justify-content-between align-items-center text-black"
                            >
                              <span>{{ $t("general.delete") }}</span>
                              <i class="fas fa-times text-danger"></i>
                            </div>
                          </a>
                        </div>
                      </div>

                      <!--  edit   -->
                      <b-modal
                        :id="`modal-edit-${data.id}`"
                        :title="getCompanyKey('city_edit_form')"
                        title-class="font-18"
                        body-class="p-4"
                        size="lg"
                        :hide-footer="true"
                        @show="resetModalEdit(data.id)"
                        @hidden="resetModalHiddenEdit(data.id)"
                      >
                        <form>
                          <div class="mb-3 d-flex justify-content-end">
                            <!-- Emulate built in modal footer ok and cancel button actions -->
                            <b-button
                              variant="success"
                              type="submit"
                              class="mx-1"
                              v-if="!isLoader"
                              @click.prevent="editSubmit(data.id)"
                            >
                              {{ $t("general.Edit") }}
                            </b-button>

                            <b-button variant="success" class="mx-1" disabled v-else>
                              <b-spinner small></b-spinner>
                              <span class="sr-only">{{ $t("login.Loading") }}...</span>
                            </b-button>

                            <b-button
                              variant="danger"
                              type="button"
                              @click.prevent="$bvModal.hide(`modal-edit-${data.id}`)"
                            >
                              {{ $t("general.Cancel") }}
                            </b-button>
                          </div>

                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group position-relative">
                                <label class="control-label">
                                  {{ getCompanyKey('country') }}
                                  <span class="text-danger">*</span>
                                </label>
                                <multiselect
                                  @input="getGovernorate(edit.country_id)"
                                  v-model="edit.country_id"
                                  :options="countries.map((type) => type.id)"
                                  :custom-label="
                                    (opt) => countries.find((x) => x.id == opt).name
                                  "
                                >
                                </multiselect>
                                <div
                                  v-if="$v.edit.country_id.$error || errors.country_id"
                                  class="text-danger"
                                >
                                  {{ $t("general.fieldIsRequired") }}
                                </div>
                                <template v-if="errors.country_id">
                                  <ErrorMessage
                                    v-for="(errorMessage, index) in errors.country_id"
                                    :key="index"
                                    >{{ errorMessage }}</ErrorMessage
                                  >
                                </template>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group position-relative">
                                <label class="control-label">
                                  {{ getCompanyKey('governorate') }}
                                  <span class="text-danger">*</span>
                                </label>
                                <multiselect
                                  @input="showEditGovernateModal"
                                  v-model="edit.governorate_id"
                                  :options="governorates.map((type) => type.id)"
                                  :custom-label="
                                    (opt) => governorates.find((x) => x.id == opt).name
                                  "
                                >
                                </multiselect>
                                <div
                                  v-if="$v.edit.governorate_id.$error || errors.governorate_id"
                                  class="text-danger"
                                >
                                  {{ $t("general.fieldIsRequired") }}
                                </div>
                                <template v-if="errors.governorate_id">
                                  <ErrorMessage
                                    v-for="(errorMessage, index) in errors.governorate_id"
                                    :key="index"
                                    >{{ errorMessage }}</ErrorMessage
                                  >
                                </template>
                              </div>
                            </div>
                            <div class="col-md-6 direction" dir="rtl">
                              <div class="form-group">
                                <label for="edit-1" class="control-label">
                                  {{ getCompanyKey('city_name_ar') }}
                                  <span class="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  class="form-control arabicInput"
                                  data-edit="1"
                                  @keypress.enter="moveInput('input', 'edit', 2)"
                                  v-model="$v.edit.name.$model"
                                  :class="{
                                    'is-invalid': $v.edit.name.$error || errors.name,
                                    'is-valid': !$v.edit.name.$invalid && !errors.name,
                                  }"
                                  id="edit-1"
                                />
                                <div
                                  v-if="!$v.edit.name.minLength"
                                  class="invalid-feedback"
                                >
                                  {{ $t("general.Itmustbeatleast") }}
                                  {{ $v.edit.name.$params.minLength.min }}
                                  {{ $t("general.letters") }}
                                </div>
                                <div
                                  v-if="!$v.edit.name.maxLength"
                                  class="invalid-feedback"
                                >
                                  {{ $t("general.Itmustbeatmost") }}
                                  {{ $v.edit.name.$params.maxLength.max }}
                                  {{ $t("general.letters") }}
                                </div>
                                <template v-if="errors.name">
                                  <ErrorMessage
                                    v-for="(errorMessage, index) in errors.name"
                                    :key="index"
                                    >{{ errorMessage }}</ErrorMessage
                                  >
                                </template>
                              </div>
                            </div>
                            <div class="col-md-6 direction-ltr" dir="ltr">
                              <div class="form-group">
                                <label for="edit-2" class="control-label">
                                  {{ getCompanyKey('city_name_en') }}
                                  <span class="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  class="form-control englishInput"
                                  data-edit="2"
                                  @keypress.enter="moveInput('input', 'edit', 5)"
                                  v-model="$v.edit.name_e.$model"
                                  :class="{
                                    'is-invalid': $v.edit.name_e.$error || errors.name_e,
                                    'is-valid':
                                      !$v.edit.name_e.$invalid && !errors.name_e,
                                  }"
                                  id="edit-2"
                                />
                                <div
                                  v-if="!$v.edit.name_e.minLength"
                                  class="invalid-feedback"
                                >
                                  {{ $t("general.Itmustbeatleast") }}
                                  {{ $v.edit.name_e.$params.minLength.min }}
                                  {{ $t("general.letters") }}
                                </div>
                                <div
                                  v-if="!$v.edit.name_e.maxLength"
                                  class="invalid-feedback"
                                >
                                  {{ $t("general.Itmustbeatmost") }}
                                  {{ $v.edit.name_e.$params.maxLength.max }}
                                  {{ $t("general.letters") }}
                                </div>
                                <template v-if="errors.name_e">
                                  <ErrorMessage
                                    v-for="(errorMessage, index) in errors.name_e"
                                    :key="index"
                                    >{{ errorMessage }}</ErrorMessage
                                  >
                                </template>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="mr-2" for="edit-5">
                                  {{ getCompanyKey('city_status') }}
                                  <span class="text-danger">*</span>
                                </label>
                                <select
                                  class="custom-select mr-sm-2"
                                  id="edit-5"
                                  data-edit="9"
                                  @keypress.enter.prevent="moveInput('input', 'edit', 1)"
                                  v-model="$v.edit.is_active.$model"
                                  :class="{
                                    'is-invalid':
                                      $v.edit.is_active.$error || errors.is_active,
                                    'is-valid':
                                      !$v.edit.is_active.$invalid && !errors.is_active,
                                  }"
                                >
                                  <option value="" selected>
                                    {{ $t("general.Choose") }}...
                                  </option>
                                  <option value="1">{{ $t("general.Active") }}</option>
                                  <option value="0">{{ $t("general.Inactive") }}</option>
                                </select>
                                <template v-if="errors.is_active">
                                  <ErrorMessage
                                    v-for="(errorMessage, index) in errors.is_active"
                                    :key="index"
                                    >{{ errorMessage }}</ErrorMessage
                                  >
                                </template>
                              </div>
                            </div>
                          </div>
                        </form>
                      </b-modal>
                      <!--  /edit   -->
                    </td>
                    <td>
                        <button
                            @mousemove="log(data.id)"
                            @mouseover="log(data.id)"
                            type="button"
                            class="btn"
                            :id="`tooltip-${data.id}`"
                            :data-placement="$i18n.locale == 'en' ? 'left' : 'right'"
                            :title="Tooltip"
                        >
                            <i class="fe-info" style="font-size: 22px"></i>
                        </button>
                    </td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr>
                    <th class="text-center" colspan="11">
                      {{ $t("general.notDataFound") }}
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- end .table-responsive-->
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

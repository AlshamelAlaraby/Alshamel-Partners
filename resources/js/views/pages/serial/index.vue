<script>
import Layout from "../../layouts/main";
import PageHeader from "../../../components/Page-header";
import adminApi from "../../../api/adminAxios";
import Switches from "vue-switches";
import { required, minLength, maxLength, integer } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import ErrorMessage from "../../../components/widgets/errorMessage";
import loader from "../../../components/loader";
import alphaArabic from "../../../helper/alphaArabic";
import alphaEnglish from "../../../helper/alphaEnglish";
import { dynamicSortString, dynamicSortNumber } from "../../../helper/tableSort";
import senderHoverHelper from "../../../helper/senderHoverHelper";
import Multiselect from "vue-multiselect";
import { formatDateOnly } from "../../../helper/startDate";

/**
 * Advanced Table component
 */
export default {
  page: {
    title: "Serial",
    meta: [{ name: "description", content: "Serial" }],
  },
  components: {
    Layout,
    PageHeader,
    Switches,
    ErrorMessage,
    loader,
    Multiselect,
  },
  data() {
    return {
      per_page: 1,
      search: "",
      debounce: {},
      serialsPagination: {},
      serials: [],
      is_disabled: false,
      isLoader: false,
      Tooltip: "",
      mouseEnter: "",

      create: {
        start_no: null,
        perfix: "",
        suffix: "",
        restart_period: "",
        branch_id: null,
        store_id: null,
        is_default: "active",
      },
      edit: {
        start_no: null,
        perfix: "",
        suffix: "",
        restart_period: "",
        branch_id: null,
        store_id: null,
        is_default: "active",
      },
      setting: {
        start_no: true,
        perfix: true,
        suffix: true,
        restart_period: true,
        branch_id: true,
        store_id: true,
        is_default: true,
      },
      company_id: 1,
      errors: {},
      isCheckAll: false,
      checkAll: [],
      branches: [],
      stores: [],
      current_page: 1,
      filterSetting: ["perfix", "suffix", "start_no",
          this.$i18n.locale  == 'ar'?'branch.name':'branch.name_e',
          this.$i18n.locale  == 'ar'?'store.name':'store.name_e'
      ],
    };
  },
  validations: {
    create: {
      start_no: { required, maxLength: maxLength(20) },
      suffix: { required, maxLength: maxLength(200) },
      perfix: { required, maxLength: maxLength(200) },
      restart_period: { required, minLength: minLength(1), maxLength: maxLength(200) },
      branch_id: { required },
      store_id: { required },
      is_default: { required },
    },
    edit: {
      start_no: { required, maxLength: maxLength(20) },
      suffix: { required, maxLength: maxLength(200) },
      perfix: { required, maxLength: maxLength(200) },
      restart_period: { required, minLength: minLength(1), maxLength: maxLength(200) },
      branch_id: { required },
      store_id: { required },
      is_default: { required },
    },
  },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            if (vm.$store.state.auth.work_flow_trees.includes('serial')) {
                return true;
            } else {
                return vm.$router.push({ name: "home" });
            }
        });
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
        this.serials.forEach((el) => {
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
    this.company_id = this.$store.getters["auth/company_id"];
    this.getData();
  },
  methods: {
    formatDate(value) {
      return formatDateOnly(value);
    },
    log(id) {
      if (this.mouseEnter != id) {
        this.Tooltip = "";
        this.mouseEnter = id;
        adminApi
          .get(`/serials/logs/${id}`)
          .then((res) => {
            let l = res.data.data;
            l.forEach((e) => {
              this.Tooltip += `Created By: ${e.causer_type}; Event: ${
                e.event
              }; Description: ${e.description} ;Created At: ${this.formatDate(
                e.created_at
              )} \n`;
            });
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: `${this.$t("general.Error")}`,
              text: `${this.$t("general.Thereisanerrorinthesystem")}`,
            });
          });
      } else {
      }
    },
    resetForm() {
      this.create = {
        start_no: null,
        perfix: "",
        suffix: "",
        restart_period: "",
        branch_id: null,
        store_id: null,
        is_default: "active",
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
      this.is_disabled = false;
    },

    /**
     *  start get Data countrie && pagination
     */
    getData(page = 1) {
      this.isLoader = true;
      let filter = "";
      for (let i = 0; i < this.filterSetting.length; ++i) {
        filter += `columns[${i}]=${this.filterSetting[i]}&`;
      }
      adminApi
        .get(
          `/serials?page=${page}&per_page=${this.per_page}&company_id=${this.company_id}&search=${this.search}&${filter}`
        )
        .then((res) => {
          let l = res.data;
          this.serials = l.data;
          this.serialsPagination = l.pagination;
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
        this.current_page <= this.serialsPagination.last_page &&
        this.current_page != this.serialsPagination.current_page &&
        this.current_page
      ) {
        this.isLoader = true;
        let filter = "";
        for (let i = 0; i < this.filterSetting.length; ++i) {
          filter += `columns[${i}]=${this.filterSetting[i]}&`;
        }
        adminApi
          .get(
            `/serials?page=${this.current_page}&per_page=${this.per_page}&company_id=${this.company_id}&search=${this.search}&${filter}`
          )
          .then((res) => {
            let l = res.data;
            this.serials = l.data;
            this.serialsPagination = l.pagination;
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
    deleteBranch(id) {
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
            .delete(`/serials/${id}`)
            .then((res) => {
              this.getData();
              this.checkAll = [];
              Swal.fire({
                icon: "success",
                title: `${this.$t("general.Deleted")}`,
                text: `${this.$t("general.Yourrowhasbeendeleted")}`,
                showConfirmButton: false,
                timer: 1500,
              });
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
      });
    },
    /**
     *  end delete countrie
     */
    /**
     *  reset Modal (create)
     */
    resetModalHidden() {
      this.create = {
        start_no: null,
        perfix: "",
        suffix: "",
        restart_period: "",
        branch_id: null,
        store_id: null,
        is_default: "active",
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
      this.errors = {};
      this.stores = [];
      this.branches = [];
    },
    /**
     *  hidden Modal (create)
     */
    resetModal() {
      this.create = {
        start_no: null,
        perfix: "",
        suffix: "",
        restart_period: "",
        branch_id: null,
        store_id: null,
        is_default: "active",
      };
      this.getBranch(this.company_id);
      this.$nextTick(() => {
        this.$v.$reset();
      });
      this.is_disabled = false;
      this.errors = {};
    },
    /**
     *  create countrie
     */

    AddSubmit() {
      this.$v.create.$touch();

      if (this.$v.create.$invalid) {
        return;
      } else {
        this.isLoader = true;
        this.errors = {};
        this.is_disabled = false;

        adminApi
          .post(`/serials`, { ...this.create, company_id: this.company_id })
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
      this.$v.edit.$touch();

      if (this.$v.edit.$invalid) {
        return;
      } else {
        this.isLoader = true;
        this.errors = {};
        adminApi
          .put(`/serials/${id}`, this.edit)
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
      await this.getBranch(this.company_id);
      let serial = this.serials.find((e) => id == e.id);
      this.edit.start_no = serial.start_no;
      this.edit.perfix = serial.perfix;
      this.edit.suffix = serial.suffix;
      this.edit.restart_period = serial.restart_period;
      this.edit.branch_id = serial.branch_id;
      this.edit.is_default = serial.is_default;
      await this.getStore(this.edit.branch_id);
      this.edit.store_id = serial.store_id;
      this.errors = {};
    },
    /**
     *  hidden Modal (edit)
     */
    resetModalHiddenEdit(id) {
      this.errors = {};
      this.edit = {
        start_no: null,
        perfix: "",
        suffix: "",
        restart_period: "",
        branch_id: null,
        store_id: null,
        is_default: "active",
      };
      this.branches = [];
      this.stores = [];
    },
    /*
     *  start  dynamicSortString
     */
    sortString(value) {
      return dynamicSortString(value);
    },
    sortNumber(value) {
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
    async getBranch(id) {
      this.isLoader = true;
      await adminApi
        .get(`/branches?company_id=${this.company_id}`)
        .then((res) => {
          let l = res.data;
          this.branches = l.data;
          this.create.branch_id = null;
          this.edit.branch_id = null;
          this.create.store_id = null;
          this.edit.store_id = null;
          this.stores = [];
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
    async getStore(id) {
      this.isLoader = true;

      await adminApi
        .get(`/stores?branch_id=${id}`)
        .then((res) => {
          let l = res.data;
          this.stores = l.data;
          this.create.store_id = null;
          this.edit.store_id = null;
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
  },
};
</script>

<template>
  <Layout>
    <PageHeader />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <!-- start search -->
            <div class="row justify-content-between align-items-center mb-2">
              <h4 class="header-title">{{ $t("serial.serialsTable") }}</h4>
              <div class="col-xs-10 col-md-9 col-lg-7" style="font-weight: 500">
                <div class="d-inline-block" style="width: 22.2%">
                  <!-- Basic dropdown -->
                  <b-dropdown
                    variant="primary"
                    :text="$t('general.searchSetting')"
                    ref="dropdown"
                    class="btn-block setting-search"
                  >
                    <b-form-checkbox
                      v-model="filterSetting"
                      value="perfix"
                      class="mb-1"
                      >{{ $t("general.Perfix") }}</b-form-checkbox
                    >
                    <b-form-checkbox
                      v-model="filterSetting"
                      value="suffix"
                      class="mb-1"
                      >{{ $t("general.Suffix") }}</b-form-checkbox>
                    <b-form-checkbox
                      v-model="filterSetting"
                      value="start_no"
                      class="mb-1"
                      >{{ $t("general.StartNo") }}</b-form-checkbox>
                      <b-form-checkbox
                          v-model="filterSetting"
                          :value="$i18n.locale  == 'ar'?'branch.name':'branch.name_e'"
                          class="mb-1"
                      >{{ $t("general.Branch") }}</b-form-checkbox>
                      <b-form-checkbox
                          v-model="filterSetting"
                          :value="$i18n.locale  == 'ar'?'store.name':'store.name_e'"
                          class="mb-1"
                      >{{ $t("general.Store") }}</b-form-checkbox>
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
                    @click="$bvModal.show(`modal-edit-${checkAll[0]}`)"
                    v-if="checkAll.length == 1"
                  >
                    <i class="mdi mdi-square-edit-outline"></i>
                  </button>
                  <!-- start mult delete  -->
                  <button
                    class="custom-btn-dowonload"
                    v-if="checkAll.length > 1"
                    @click.prevent="deleteBranch(checkAll)"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </button>
                  <!-- end mult delete  -->
                  <!--  start one delete  -->
                  <button
                    class="custom-btn-dowonload"
                    v-if="checkAll.length == 1"
                    @click.prevent="deleteBranch(checkAll)"
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
                    <b-dropdown
                      variant="primary"
                      :html="`${$t('general.setting')} <i class='fe-settings'></i>`"
                      ref="dropdown"
                      class="dropdown-custom-ali"
                    >
                      <b-form-checkbox v-model="setting.start_no" class="mb-1"
                        >{{ $t("general.StartNo") }}
                      </b-form-checkbox>
                      <b-form-checkbox v-model="setting.perfix" class="mb-1">
                        {{ $t("general.Perfix") }}
                      </b-form-checkbox>
                      <b-form-checkbox v-model="setting.suffix" class="mb-1">
                        {{ $t("general.Suffix") }}
                      </b-form-checkbox>
                      <b-form-checkbox v-model="setting.restart_period" class="mb-1">
                        {{ $t("general.RestartPeriod") }}
                      </b-form-checkbox>
                      <b-form-checkbox v-model="setting.branch_id" class="mb-1">
                        {{ $t("general.Branch") }}
                      </b-form-checkbox>
                      <b-form-checkbox v-model="setting.store_id" class="mb-1">
                        {{ $t("general.Store") }}
                      </b-form-checkbox>
                      <b-form-checkbox v-model="setting.is_default" class="mb-1">
                        {{ $t("general.Default") }}
                      </b-form-checkbox>
                      <div class="d-flex justify-content-end">
                        <a href="javascript:void(0)" class="btn btn-primary btn-sm">{{
                          $t("general.Apply")
                        }}</a>
                      </div>
                    </b-dropdown>
                    <!-- Basic dropdown -->
                  </div>
                  <!-- start Pagination -->
                  <div class="d-inline-flex align-items-center pagination-custom">
                    <div class="d-inline-block" style="font-size: 13px">
                      {{ serialsPagination.from }}-{{ serialsPagination.to }} /
                      {{ serialsPagination.total }}
                    </div>
                    <div class="d-inline-block">
                      <a
                        href="javascript:void(0)"
                        :style="{
                          'pointer-events':
                            serialsPagination.current_page == 1 ? 'none' : '',
                        }"
                        @click.prevent="getData(serialsPagination.current_page - 1)"
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
                            serialsPagination.last_page == serialsPagination.current_page
                              ? 'none'
                              : '',
                        }"
                        @click.prevent="getData(serialsPagination.current_page + 1)"
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
              :title="$t('serial.addserial')"
              title-class="font-18"
              body-class="p-4 "
              size="lg"
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
                  <!-- Emulate built in modal footer ok and cancel button actions -->
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
                    variant="danger"
                    type="button"
                    @click.prevent="$bvModal.hide('create')"
                  >
                    {{ $t("general.Cancel") }}
                  </b-button>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group position-relative">
                      <label class="control-label">
                        {{ $t("general.Branch") }}
                        <span class="text-danger">*</span>
                      </label>
                      <multiselect
                        v-model="create.branch_id"
                        @select="getStore"
                        :options="branches.map((type) => type.id)"
                        :custom-label="
                          (opt) =>
                            $i18n.locale == 'ar'
                              ? branches.find((x) => x.id == opt).name
                              : branches.find((x) => x.id == opt).name_e
                        "
                      >
                      </multiselect>
                      <div
                        v-if="$v.create.branch_id.$error || errors.branch_id"
                        class="text-danger"
                      >
                        {{ $t("general.fieldIsRequired") }}
                      </div>
                      <template v-if="errors.branch_id">
                        <ErrorMessage
                          v-for="(errorMessage, index) in errors.branch_id"
                          :key="index"
                          >{{ errorMessage }}</ErrorMessage
                        >
                      </template>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group position-relative">
                      <label class="control-label">
                        {{ $t("general.Store") }}
                        <span class="text-danger">*</span>
                      </label>
                      <multiselect
                        v-model="create.store_id"
                        :options="stores.map((type) => type.id)"
                        :custom-label="
                          (opt) =>
                            $i18n.locale == 'ar'
                              ? stores.find((x) => x.id == opt).name
                              : stores.find((x) => x.id == opt).name_e
                        "
                      >
                      </multiselect>
                      <div
                        v-if="$v.create.store_id.$error || errors.store_id"
                        class="text-danger"
                      >
                        {{ $t("general.fieldIsRequired") }}
                      </div>
                      <template v-if="errors.store_id">
                        <ErrorMessage
                          v-for="(errorMessage, index) in errors.store_id"
                          :key="index"
                          >{{ errorMessage }}</ErrorMessage
                        >
                      </template>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="field-15" class="control-label">
                        {{ $t("general.StartNo") }}
                        <span class="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        data-create="1"
                        @keypress.enter="moveInput('input', 'create', 2)"
                        v-model="$v.create.start_no.$model"
                        :class="{
                          'is-invalid': $v.create.start_no.$error || errors.start_no,
                          'is-valid': !$v.create.start_no.$invalid && !errors.start_no,
                        }"
                        id="field-15"
                      />
                      <div v-if="!$v.create.start_no.maxLength" class="invalid-feedback">
                        {{ $t("general.Itmustbeatmost") }}
                        {{ $v.create.start_no.$params.maxLength.max }}
                        {{ $t("general.letters") }}
                      </div>
                      <template v-if="errors.start_no">
                        <ErrorMessage
                          v-for="(errorMessage, index) in errors.start_no"
                          :key="index"
                          >{{ errorMessage }}</ErrorMessage
                        >
                      </template>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="field-1" class="control-label">
                        {{ $t("general.Suffix") }}

                        <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        data-create="2"
                        @keypress.enter="moveInput('input', 'create', 3)"
                        v-model="$v.create.suffix.$model"
                        :class="{
                          'is-invalid': $v.create.suffix.$error || errors.suffix,
                          'is-valid': !$v.create.suffix.$invalid && !errors.suffix,
                        }"
                        id="field-1"
                      />
                      <div v-if="!$v.create.suffix.maxLength" class="invalid-feedback">
                        {{ $t("general.Itmustbeatmost") }}
                        {{ $v.create.suffix.$params.maxLength.max }}
                        {{ $t("general.letters") }}
                      </div>
                      <template v-if="errors.suffix">
                        <ErrorMessage
                          v-for="(errorMessage, index) in errors.suffix"
                          :key="index"
                          >{{ errorMessage }}</ErrorMessage
                        >
                      </template>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="field-2" class="control-label">
                        {{ $t("general.Perfix") }}
                        <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        data-create="3"
                        @keypress.enter="moveInput('input', 'create', 4)"
                        v-model="$v.create.perfix.$model"
                        :class="{
                          'is-invalid': $v.create.perfix.$error || errors.perfix,
                          'is-valid': !$v.create.perfix.$invalid && !errors.perfix,
                        }"
                        id="field-2"
                      />
                      <div v-if="!$v.create.perfix.maxLength" class="invalid-feedback">
                        {{ $t("general.Itmustbeatmost") }}
                        {{ $v.create.perfix.$params.maxLength.max }}
                        {{ $t("general.letters") }}
                      </div>
                      <template v-if="errors.perfix">
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
                      <label for="field-88" class="control-label">
                        {{ $t("general.RestartPeriod") }}
                        <span class="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="3"
                        class="form-control"
                        data-create="4"
                        @keypress.enter="moveInput('select', 'create', 7)"
                        v-model="$v.create.restart_period.$model"
                        :class="{
                          'is-invalid':
                            $v.create.restart_period.$error || errors.restart_period,
                          'is-valid':
                            !$v.create.restart_period.$invalid && !errors.restart_period,
                        }"
                        id="field-88"
                      />
                      <div
                        v-if="!$v.create.restart_period.minLength"
                        class="invalid-feedback"
                      >
                        {{ $t("general.Itmustbeatleast") }}
                        {{ $v.create.restart_period.$params.minLength.min }}
                        {{ $t("general.letters") }}
                      </div>
                      <div
                        v-if="!$v.create.restart_period.maxLength"
                        class="invalid-feedback"
                      >
                        {{ $t("general.Itmustbeatmost") }}
                        {{ $v.create.restart_period.$params.maxLength.max }}
                        {{ $t("general.letters") }}
                      </div>
                      <template v-if="errors.restart_period">
                        <ErrorMessage
                          v-for="(errorMessage, index) in errors.restart_period"
                          :key="index"
                          >{{ errorMessage }}</ErrorMessage
                        >
                      </template>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="mr-2">
                        {{ $t("general.Default") }}
                        <span class="text-danger">*</span>
                      </label>
                      <select
                        class="custom-select mr-sm-2"
                        data-create="7"
                        @keypress.enter.prevent="moveInput('input', 'create', 1)"
                        v-model="$v.create.is_default.$model"
                        :class="{
                          'is-invalid': $v.create.is_default.$error || errors.is_default,
                          'is-valid':
                            !$v.create.is_default.$invalid && !errors.is_default,
                        }"
                      >
                        <option value="" selected>{{ $t("general.Choose") }}...</option>
                        <option value="active">{{ $t("general.Default") }}</option>
                        <option value="inactive">{{ $t("general.Nondefault") }}</option>
                      </select>
                      <template v-if="errors.is_default">
                        <ErrorMessage
                          v-for="(errorMessage, index) in errors.is_default"
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
                    <th v-if="setting.start_no">
                      <div class="d-flex justify-content-center">
                        <span>{{ $t("general.StartNo") }}</span>
                        <div class="arrow-sort">
                          <i
                            class="fas fa-arrow-up"
                            @click="serials.sort(sortNumber('start_no'))"
                          ></i>
                          <i
                            class="fas fa-arrow-down"
                            @click="serials.sort(sortNumber('-start_no'))"
                          ></i>
                        </div>
                      </div>
                    </th>
                    <th v-if="setting.perfix">
                      <div class="d-flex justify-content-center">
                        <span>{{ $t("general.Perfix") }}</span>
                        <div class="arrow-sort">
                          <i
                            class="fas fa-arrow-up"
                            @click="serials.sort(sortString('perfix'))"
                          ></i>
                          <i
                            class="fas fa-arrow-down"
                            @click="serials.sort(sortString('-perfix'))"
                          ></i>
                        </div>
                      </div>
                    </th>
                    <th v-if="setting.suffix">
                      <div class="d-flex justify-content-center">
                        <span>{{ $t("general.Suffix") }}</span>
                        <div class="arrow-sort">
                          <i
                            class="fas fa-arrow-up"
                            @click="serials.sort(sortString('suffix'))"
                          ></i>
                          <i
                            class="fas fa-arrow-down"
                            @click="serials.sort(sortString('-suffix'))"
                          ></i>
                        </div>
                      </div>
                    </th>
                    <th v-if="setting.restart_period">
                      <div class="d-flex justify-content-center">
                        <span>{{ $t("general.RestartPeriod") }}</span>
                        <div class="arrow-sort">
                          <i
                            class="fas fa-arrow-up"
                            @click="serials.sort(sortNumber('restart_period'))"
                          ></i>
                          <i
                            class="fas fa-arrow-down"
                            @click="serials.sort(sortNumber('-restart_period'))"
                          ></i>
                        </div>
                      </div>
                    </th>
                    <th v-if="setting.branch_id">
                      <div class="d-flex justify-content-center">
                        <span>{{ $t("general.Branch") }}</span>
                        <div class="arrow-sort">
                          <i
                            class="fas fa-arrow-up"
                            @click="
                              serials.sort(
                                sortString(($i18n.locale = 'ar' ? 'name' : 'name_e'))
                              )
                            "
                          ></i>
                          <i
                            class="fas fa-arrow-down"
                            @click="
                              serials.sort(
                                sortString(($i18n.locale = 'ar' ? '-name' : '-name_e'))
                              )
                            "
                          ></i>
                        </div>
                      </div>
                    </th>
                    <th v-if="setting.store_id">
                      <div class="d-flex justify-content-center">
                        <span>{{ $t("general.Store") }}</span>
                        <div class="arrow-sort">
                          <i
                            class="fas fa-arrow-up"
                            @click="
                              serials.sort(
                                sortString(($i18n.locale = 'ar' ? 'name' : 'name_e'))
                              )
                            "
                          ></i>
                          <i
                            class="fas fa-arrow-down"
                            @click="
                              serials.sort(
                                sortString($i18n.locale == 'ar' ? '-name' : '-name_e')
                              )
                            "
                          ></i>
                        </div>
                      </div>
                    </th>
                    <th v-if="setting.is_default">
                      <div class="d-flex justify-content-center">
                        <span>{{ $t("general.Default") }}</span>
                      </div>
                    </th>
                    <th>
                      {{ $t("general.Action") }}
                    </th>
                    <th><i class="fas fa-ellipsis-v"></i></th>
                  </tr>
                </thead>
                <tbody v-if="serials.length > 0">
                  <tr
                    @click.capture="checkRow(data.id)"
                    @dblclick.prevent="$bvModal.show(`modal-edit-${data.id}`)"
                    v-for="(data, index) in serials"
                    :key="data.id"
                    class="body-tr-custom"
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
                    <td v-if="setting.start_no">
                      <h5 class="m-0 font-weight-normal">{{ data.start_no }}</h5>
                    </td>
                    <td v-if="setting.perfix">
                      <h5 class="m-0 font-weight-normal">{{ data.perfix }}</h5>
                    </td>
                    <td v-if="setting.suffix">
                      <h5 class="m-0 font-weight-normal">{{ data.suffix }}</h5>
                    </td>
                    <td v-if="setting.restart_period">
                      <h5 class="m-0 font-weight-normal">{{ data.restart_period }}</h5>
                    </td>
                    <td v-if="setting.branch_id">
                      <h5 class="m-0 font-weight-normal">
                        {{ $i18n.locale == "ar" ? data.branch.name : data.branch.name_e }}
                      </h5>
                    </td>
                    <td v-if="setting.store_id">
                      <h5 class="m-0 font-weight-normal">
                        {{ $i18n.locale == "ar" ? data.store.name : data.store.name_e }}
                      </h5>
                    </td>
                    <td v-if="setting.is_default">
                      <span
                        :class="[
                          data.is_default == 'active' ? 'text-success' : 'text-danger',
                          'badge',
                        ]"
                      >
                        {{
                          data.is_default == "active"
                            ? `${$t("general.Yes")}`
                            : `${$t("general.No")}`
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
                            @click="$bvModal.show(`modal-edit-${data.id}`)"
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
                            @click.prevent="deleteBranch(data.id)"
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
                        :title="$t('serial.editserial')"
                        title-class="font-18"
                        body-class="p-4"
                        size="lg"
                        :ref="`edit-${data.id}`"
                        :hide-footer="true"
                        @show="resetModalEdit(data.id)"
                        @hidden="resetModalHiddenEdit(data.id)"
                      >
                        <form>
                          <div class="mb-3 d-flex justify-content-end">
                            <!-- Emulate built in modal footer ok and cancel button actions -->
                            <b-button
                              variant="success"
                              @click.prevent="editSubmit(data.id)"
                              type="button"
                              class="mx-1 font-weight-bold px-3"
                              v-if="!isLoader"
                            >
                              {{ $t("general.Edit") }}
                            </b-button>

                            <b-button variant="success" class="mx-1" disabled v-else>
                              <b-spinner small></b-spinner>
                              <span class="sr-only">{{ $t("login.Loading") }}...</span>
                            </b-button>

                            <b-button
                              variant="danger"
                              class="font-weight-bold"
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
                                  {{ $t("general.Branch") }}
                                  <span class="text-danger">*</span>
                                </label>
                                <multiselect
                                  @select="getStore"
                                  v-model="edit.branch_id"
                                  :options="branches.map((type) => type.id)"
                                  :custom-label="
                                    (opt) =>
                                      $i18n.locale == 'ar'
                                        ? branches.find((x) => x.id == opt).name
                                        : branches.find((x) => x.id == opt).name_e
                                  "
                                >
                                </multiselect>
                                <div
                                  v-if="$v.edit.branch_id.$error || errors.branch_id"
                                  class="text-danger"
                                >
                                  {{ $t("general.fieldIsRequired") }}
                                </div>
                                <template v-if="errors.branch_id">
                                  <ErrorMessage
                                    v-for="(errorMessage, index) in errors.branch_id"
                                    :key="index"
                                    >{{ errorMessage }}</ErrorMessage
                                  >
                                </template>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group position-relative">
                                <label class="control-label">
                                  {{ $t("general.Store") }}
                                  <span class="text-danger">*</span>
                                </label>
                                <multiselect
                                  v-model="edit.store_id"
                                  :options="stores.map((type) => type.id)"
                                  :custom-label="
                                    (opt) =>
                                      $i18n.locale == 'ar'
                                        ? stores.find((x) => x.id == opt).name
                                        : stores.find((x) => x.id == opt).name_e
                                  "
                                >
                                </multiselect>
                                <div
                                  v-if="$v.edit.store_id.$error || errors.store_id"
                                  class="text-danger"
                                >
                                  {{ $t("general.fieldIsRequired") }}
                                </div>
                                <template v-if="errors.store_id">
                                  <ErrorMessage
                                    v-for="(errorMessage, index) in errors.store_id"
                                    :key="index"
                                    >{{ errorMessage }}</ErrorMessage
                                  >
                                </template>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label for="field-15" class="control-label">
                                  {{ $t("general.StartNo") }}
                                  <span class="text-danger">*</span>
                                </label>
                                <input
                                  type="number"
                                  class="form-control"
                                  data-edit="1"
                                  @keypress.enter="moveInput('input', 'edit', 2)"
                                  v-model="$v.edit.start_no.$model"
                                  :class="{
                                    'is-invalid':
                                      $v.edit.start_no.$error || errors.start_no,
                                    'is-valid':
                                      !$v.edit.start_no.$invalid && !errors.start_no,
                                  }"
                                  id="edit-15"
                                />
                                <div
                                  v-if="!$v.edit.start_no.maxLength"
                                  class="invalid-feedback"
                                >
                                  {{ $t("general.Itmustbeatmost") }}
                                  {{ $v.edit.start_no.$params.maxLength.max }}
                                  {{ $t("general.letters") }}
                                </div>
                                <template v-if="errors.start_no">
                                  <ErrorMessage
                                    v-for="(errorMessage, index) in errors.start_no"
                                    :key="index"
                                    >{{ errorMessage }}</ErrorMessage
                                  >
                                </template>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label for="field-1" class="control-label">
                                  {{ $t("general.Suffix") }}
                                  <span class="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  data-edit="2"
                                  @keypress.enter="moveInput('input', 'edit', 3)"
                                  v-model="$v.edit.suffix.$model"
                                  :class="{
                                    'is-invalid': $v.edit.suffix.$error || errors.suffix,
                                    'is-valid':
                                      !$v.edit.suffix.$invalid && !errors.suffix,
                                  }"
                                  id="edit-1"
                                />
                                <div
                                  v-if="!$v.edit.suffix.maxLength"
                                  class="invalid-feedback"
                                >
                                  {{ $t("general.Itmustbeatmost") }}
                                  {{ $v.edit.suffix.$params.maxLength.max }}
                                  {{ $t("general.letters") }}
                                </div>
                                <template v-if="errors.suffix">
                                  <ErrorMessage
                                    v-for="(errorMessage, index) in errors.suffix"
                                    :key="index"
                                    >{{ errorMessage }}</ErrorMessage
                                  >
                                </template>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label for="field-2" class="control-label">
                                  {{ $t("general.Perfix") }}
                                  <span class="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  data-edit="3"
                                  @keypress.enter="moveInput('input', 'edit', 4)"
                                  v-model="$v.edit.perfix.$model"
                                  :class="{
                                    'is-invalid': $v.edit.perfix.$error || errors.perfix,
                                    'is-valid':
                                      !$v.edit.perfix.$invalid && !errors.perfix,
                                  }"
                                  id="edit-2"
                                />
                                <div
                                  v-if="!$v.edit.perfix.maxLength"
                                  class="invalid-feedback"
                                >
                                  {{ $t("general.Itmustbeatmost") }}
                                  {{ $v.edit.perfix.$params.maxLength.max }}
                                  {{ $t("general.letters") }}
                                </div>
                                <template v-if="errors.perfix">
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
                                <label for="edit-88" class="control-label">
                                  {{ $t("general.RestartPeriod") }}
                                  <span class="text-danger">*</span>
                                </label>
                                <input
                                  type="number"
                                  min="0"
                                  max="3"
                                  class="form-control"
                                  data-edit="4"
                                  @keypress.enter="moveInput('select', 'edit', 7)"
                                  v-model="$v.edit.restart_period.$model"
                                  :class="{
                                    'is-invalid':
                                      $v.edit.restart_period.$error ||
                                      errors.restart_period,
                                    'is-valid':
                                      !$v.edit.restart_period.$invalid &&
                                      !errors.restart_period,
                                  }"
                                  id="edit-88"
                                />
                                <div
                                  v-if="!$v.edit.restart_period.minLength"
                                  class="invalid-feedback"
                                >
                                  {{ $t("general.Itmustbeatleast") }}
                                  {{ $v.edit.restart_period.$params.minLength.min }}
                                  {{ $t("general.letters") }}
                                </div>
                                <div
                                  v-if="!$v.edit.restart_period.maxLength"
                                  class="invalid-feedback"
                                >
                                  {{ $t("general.Itmustbeatmost") }}
                                  {{ $v.edit.restart_period.$params.maxLength.max }}
                                  {{ $t("general.letters") }}
                                </div>
                                <template v-if="errors.restart_period">
                                  <ErrorMessage
                                    v-for="(errorMessage, index) in errors.restart_period"
                                    :key="index"
                                    >{{ errorMessage }}</ErrorMessage
                                  >
                                </template>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="mr-2">
                                  {{ $t("general.Default") }}
                                  <span class="text-danger">*</span>
                                </label>
                                <select
                                  class="custom-select mr-sm-2"
                                  data-edit="7"
                                  @keypress.enter.prevent="moveInput('input', 'edit', 1)"
                                  v-model="$v.edit.is_default.$model"
                                  :class="{
                                    'is-invalid':
                                      $v.edit.is_default.$error || errors.is_default,
                                    'is-valid':
                                      !$v.edit.is_default.$invalid && !errors.is_default,
                                  }"
                                >
                                  <option value="" selected>
                                    {{ $t("general.Choose") }}...
                                  </option>
                                  <option value="active">
                                    {{ $t("general.Default") }}
                                  </option>
                                  <option value="inactive">
                                    {{ $t("general.Nondefault") }}
                                  </option>
                                </select>
                                <template v-if="errors.is_default">
                                  <ErrorMessage
                                    v-for="(errorMessage, index) in errors.is_default"
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
                        @mouseover="log(data.id)"
                        @mousemove="log(data.id)"
                        type="button"
                        class="btn"
                        data-toggle="tooltip"
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

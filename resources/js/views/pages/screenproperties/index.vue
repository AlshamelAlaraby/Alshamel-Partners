<script>
import Layout from "../../layouts/main";
import PageHeader from "../../../components/Page-header";
import adminApi from "../../../api/adminAxios";
import outerAxios from "../../../api/outerAxios";
import { required } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import ErrorMessage from "../../../components/widgets/errorMessage";
import loader from "../../../components/loader";
import { dynamicSortString } from "../../../helper/tableSort";
import Multiselect from "vue-multiselect";

/**
 * Advanced Table component
 */
export default {
  page: {
    title: "Screen properties",
    meta: [{ name: "description", content: "Screen properties" }],
  },
  components: {
    Layout,
    PageHeader,
    ErrorMessage,
    loader,
    Multiselect,
  },
  data() {
    return {
      per_page: 50,
      search: "",
      debounce: {},
      screenPropertiesPagination: {},
      screenProperties: [],
      screens: [],
      properties: [],
      enabled3: false,
      isLoader: false,
      create: {
        screen_id: null,
        property_id: null,
      },
      edit: {
        screen_id: null,
        property_id: null,
      },
      setting: {
        screen_id: true,
        property_id: true,
      },
      filterSetting: ["screen_id", "property_id"],
      errors: {},
      isCheckAll: false,
      checkAll: [],
      is_disabled: false,
      current_page: 1,
      company_id: 48,
    };
  },
  validations: {
    create: {
      screen_id: { required },
      property_id: { required },
    },
    edit: {
      screen_id: { required },
      property_id: { required },
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
        this.screenProperties.forEach((el) => {
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
    /**
     *  get Data screenProperties
     */
    getData(page = 1) {
      this.isLoader = true;

      let filter = "";
      for (let i = 0; i > this.filterSetting.length; ++i) {
        filter += `columns[${i}]=${this.filterSetting[i]}&`;
      }
      adminApi
        .get(
          `/screen-tree-properties?page=${page}&per_page=${this.per_page}&search=${this.search}&${filter}`
        )
        .then((res) => {
          let l = res.data;
          this.screenProperties = l.data;
          this.screenPropertiesPagination = l.pagination;
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
    getDataCurrentPage() {
      if (
        this.current_page <= this.screenPropertiesPagination.last_page &&
        this.current_page != this.screenPropertiesPagination.current_page &&
        this.current_page
      ) {
        this.isLoader = true;
        let filter = "";
        for (let i = 0; i > this.filterSetting.length; ++i) {
          filter += `columns[${i}]=${this.filterSetting[i]}&`;
        }

        adminApi
          .get(
            `/screen-tree-properties?page=${this.current_page}&per_page=${this.per_page}&search=${this.search}&${filter}`
          )
          .then((res) => {
            let l = res.data;
            this.screenProperties = l.data;
            this.screenPropertiesPagination = l.pagination;
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
     *  delete screen button
     */
    deleteScreenButton(id) {
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
            .delete(`/screen-tree-properties/${id}`)
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
     *  reset Modal (create)
     */
    resetModalHidden() {
      this.create = { screen_id: null, property_id: null };
      this.$nextTick(() => {
        this.$v.$reset();
      });
      this.errors = {};
      this.screens=[];
      this.properties=[];
    },
    /**
     *  hidden Modal (create)
     */
    async resetModal() {
      await this.getScreens();
      await this.getProperties();
      this.create ={ screen_id: null, property_id: null };
      this.is_disabled = false;
      this.$nextTick(() => {
        this.$v.$reset();
      });
      this.errors = {};
    },
    /**
     *  create screen
     */
    resetForm() {
      this.create = { screen_id: null, property_id: null };
      this.is_disabled = false;
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    AddSubmit() {
      if (this.$v.create.$invalid) {
        this.$v.create.$touch();
        return;
      } else {
        this.isLoader = true;
        this.errors = {};
        this.is_disabled = false;
        adminApi
          .post(`/screen-tree-properties`, this.create)
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
     *  edit screen
     */
    editSubmit(id) {
      this.$v.edit.$touch();
      if (this.$v.edit.$invalid) {
        return;
      } else {
        this.isLoader = true;
        this.errors = {};
        adminApi
          .put(`/screen-tree-properties/${id}`, this.edit)
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
     *  get workflows
     */
    async getScreens() {
      await outerAxios
        .get(`/screens`)
        .then((res) => {
          this.screens = res.data.data;
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: `${this.$t("general.Error")}`,
            text: `${this.$t("general.Thereisanerrorinthesystem")}`,
          });
        });
    },

    async getProperties() {
      await adminApi
        .get(`/tree-properties`)
        .then((res) => {
          this.properties = res.data.data;
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: `${this.$t("general.Error")}`,
            text: `${this.$t("general.Thereisanerrorinthesystem")}`,
          });
        });
    },
    /**
     *   show Modal (edit)
     */
    async resetModalEdit(id) {
      let screenProperty = this.screenProperties.find((e) => id == e.id);
      await this.getScreens();
      await this.getProperties();
      this.edit.screen_id = screenProperty.screen_id;
      this.edit.property_id = screenProperty.property_id;
      this.errors = {};
    },
    /**
     *  hidden Modal (edit)
     */
    resetModalHiddenEdit(id) {
      this.errors = {};
      this.edit = {
        screen_id: null,
        property_id: null,
      };
    },

    /**
     *  start  dynamicSortString
     */
    sortString(value) {
      return dynamicSortString(value);
    },
    checkRow(id) {
      if (!this.checkAll.includes(id)) {
        this.checkAll.push(id);
      } else {
        let index = this.checkAll.indexOf(id);
        this.checkAll.splice(index, 1);
      }
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
            <div class="row justify-content-between align-items-center mb-2">
              <h4 class="header-title">{{ $t("general.ScreenPropertiesTable") }}</h4>
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
                      value="screen_id"
                      class="mb-1"
                      >{{ $t("general.Screen") }}</b-form-checkbox
                    >
                    <b-form-checkbox
                      v-model="filterSetting"
                      value="property_id"
                      class="mb-1"
                      >{{ $t("general.Property") }}</b-form-checkbox
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

            <div class="row justify-content-between align-items-center mb-2 px-1">
              <div class="col-md-3 d-flex align-items-center mb-1 mb-xl-0">
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
                    @click.prevent="deleteScreenButton(checkAll)"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </button>
                  <!-- end mult delete  -->
                  <!--  start one delete  -->
                  <button
                    class="custom-btn-dowonload"
                    v-if="checkAll.length == 1"
                    @click.prevent="deleteScreenButton(checkAll)"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </button>
                  <!--  end one delete  -->
                </div>
              </div>
              <div
                class="col-xs-10 col-md-9 col-lg-7 d-flex align-items-center justify-content-end"
              >
                <div>
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
                    <b-form-checkbox v-model="setting.screen_id" class="mb-1"
                      >{{ $t("general.Screen") }}
                    </b-form-checkbox>
                    <b-form-checkbox v-model="setting.property_id" class="mb-1">
                      {{ $t("general.Property") }}
                    </b-form-checkbox>
                    <div class="d-flex justify-content-end">
                      <a href="javascript:void(0)" class="btn btn-primary btn-sm">{{
                        $t("general.Apply")
                      }}</a>
                    </div>
                  </b-dropdown>
                  <!-- Basic dropdown -->
                  <!-- start Pagination -->
                  <div class="d-inline-flex align-items-center pagination-custom">
                    <div class="d-inline-block" style="font-size: 15px">
                      {{ screenPropertiesPagination.from }}-{{
                        screenPropertiesPagination.to
                      }}
                      /
                      {{ screenPropertiesPagination.total }}
                    </div>
                    <div class="d-inline-block">
                      <a
                        href="javascript:void(0)"
                        :style="{
                          'pointer-events':
                            screenPropertiesPagination.current_page == 1 ? 'none' : '',
                        }"
                        @click.prevent="
                          getData(screenPropertiesPagination.current_page - 1)
                        "
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
                            screenPropertiesPagination.last_page ==
                            screenPropertiesPagination.current_page
                              ? 'none'
                              : '',
                        }"
                        @click.prevent="
                          getData(screenPropertiesPagination.current_page + 1)
                        "
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
              :title="$t('general.Add')"
              title-class="font-18"
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
                    variant="danger"
                    type="button"
                    @click.prevent="$bvModal.hide(`create`)"
                  >
                    {{ $t("general.Cancel") }}
                  </b-button>
                </div>
                <div class="row">
                  <div class="col-md-12 position-relative">
                    <div class="form-group">
                      <label class="my-1 mr-2">{{ $t("general.Screen") }}</label>
                      <multiselect
                        v-model="create.screen_id"
                        :options="screens.map((type) => type.id)"
                        :custom-label="
                          (opt) =>
                            $i18n.locale == 'ar'
                              ? screens.find((x) => x.id == opt).name
                              : screens.find((x) => x.id == opt).name_e
                        "
                        :class="{
                          'is-invalid':
                            $v.create.screen_id.$error || errors.screen_id,
                        }"
                      >
                      </multiselect>
                      <div
                        v-if="!$v.create.screen_id.required"
                        class="invalid-feedback"
                      >
                        {{ $t("general.fieldIsRequired") }}
                      </div>

                      <template v-if="errors.screen_id">
                        <ErrorMessage
                          v-for="(errorMessage, index) in errors.screen_id"
                          :key="index"
                          >{{ errorMessage }}</ErrorMessage
                        >
                      </template>
                    </div>
                  </div>
                  <div class="col-md-12 position-relative">
                    <div class="form-group">
                      <label class="my-1 mr-2">{{ $t("general.Property") }}</label>
                      <multiselect
                        v-model="create.property_id"
                        :options="properties.map((type) => type.id)"
                        :custom-label="
                          (opt) =>
                            $i18n.locale == 'ar'
                              ? properties.find((x) => x.id == opt).name
                              : properties.find((x) => x.id == opt).name_e
                        "
                        :class="{
                          'is-invalid':
                            $v.create.property_id.$error || errors.property_id,
                        }"
                      >
                      </multiselect>
                      <div
                        v-if="!$v.create.property_id.required"
                        class="invalid-feedback"
                      >
                        {{ $t("general.fieldIsRequired") }}
                      </div>
                      <template v-if="errors.property_id">
                        <ErrorMessage
                          v-for="(errorMessage, index) in errors.property_id"
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
                    <th v-if="setting.screen_id">
                      <div class="d-flex justify-content-center">
                        <span>{{ $t("general.Screen") }}</span>
                        <div class="arrow-sort">
                          <i
                            class="fas fa-arrow-up"
                            @click="
                              screenProperties.sort(
                                sortString($i18n.locale == 'ar' ? 'name' : 'name_e')
                              )
                            "
                          ></i>
                          <i
                            class="fas fa-arrow-down"
                            @click="
                              screenProperties.sort(
                                sortString($i18n.locale == 'ar' ? '-name' : '-name_e')
                              )
                            "
                          ></i>
                        </div>
                      </div>
                    </th>
                    <th v-if="setting.property_id">
                      <div class="d-flex justify-content-center">
                        <span>{{ $t("general.Property") }}</span>
                        <div class="arrow-sort">
                          <i
                            class="fas fa-arrow-up"
                            @click="
                              screenProperties.sort(
                                sortString(
                                  $i18n.locale == 'ar' ? 'name' : 'name_e'
                                )
                              )
                            "
                          ></i>
                          <i
                            class="fas fa-arrow-down"
                            @click="
                              screenProperties.sort(
                                sortString($i18n.locale == 'ar' ? '-name' : '-name_e')
                              )
                            "
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
                <tbody v-if="screenProperties.length > 0">
                  <tr
                    @click.capture="checkRow(data.id)"
                    @dblclick.prevent="$bvModal.show(`modal-edit-${data.id}`)"
                    v-for="(data, index) in screenProperties"
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
                    <td v-if="setting.screen_id">
                      <h5 class="m-0 font-weight-normal">
                        {{ data.screen_id }}
                      </h5>
                    </td>
                    <td v-if="setting.property_id">
                      <h5 class="m-0 font-weight-normal">
                        {{ $i18n.locale=='ar'?data.tree_property.name:data.tree_property.name_e }}
                      </h5>
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
                            @click.prevent="deleteScreenButton(data.id)"
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
                        :title="$t('general.Edit')"
                        title-class="font-18"
                        body-class="p-4"
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
                            <div class="col-md-12">
                              <div class="form-group">
                                <label class="my-1 mr-2">{{
                                  $t("general.Screen")
                                }}</label>
                                <multiselect
                                  v-model="edit.screen_id"
                                  :options="screens.map((type) => type.id)"
                                  :custom-label="
                                    (opt) =>
                                      $i18n.locale == 'ar'
                                        ? screens.find((x) => x.id == opt).name
                                        : screens.find((x) => x.id == opt).name_e
                                  "
                                  :class="{
                          'is-invalid':
                            $v.edit.screen_id.$error || errors.screen_id,
                        }"
                                >
                                </multiselect>
                                <div
                                  v-if="!$v.edit.screen_id.required"
                                  class="invalid-feedback"
                                >
                                  {{ $t("general.fieldIsRequired") }}
                                </div>

                                <template v-if="errors.screen_id">
                                  <ErrorMessage
                                    v-for="(errorMessage, index) in errors.screen_id"
                                    :key="index"
                                    >{{ errorMessage }}</ErrorMessage
                                  >
                                </template>
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <label class="my-1 mr-2">{{
                                  $t("general.Property")
                                }}</label>
                                <multiselect
                                  v-model="edit.property_id"
                                  :options="properties.map((type) => type.id)"
                                  :custom-label="
                                    (opt) =>
                                      $i18n.locale == 'ar'
                                        ? properties.find((x) => x.id == opt).name
                                        : properties.find((x) => x.id == opt)
                                            .name_e
                                  "
                                  :class="{
                          'is-invalid':
                            $v.edit.property_id.$error || errors.property_id,
                        }"
                                >
                                </multiselect>
                                <div
                                  v-if="!$v.edit.property_id.required"
                                  class="invalid-feedback"
                                >
                                  {{ $t("general.fieldIsRequired") }}
                                </div>

                                <template v-if="errors.property_id">
                                  <ErrorMessage
                                    v-for="(errorMessage, index) in errors.property_id"
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
                      <i class="fe-info" style="font-size: 22px"></i>
                    </td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr>
                    <th class="text-center" colspan="5">
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

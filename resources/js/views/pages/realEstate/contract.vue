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
import { formatDateOnly } from "../../../helper/startDate";
import translation from "../../../helper/translation-mixin";
import Saleman from "../../../components/create/saleman.vue";
import Customer from "../../../components/create/customer.vue";

/**
 * Advanced Table component
 */
export default {
  page: {
    title: "Contract",
    meta: [{ name: "description", content: "Contract" }],
  },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            if (vm.$store.state.auth.work_flow_trees.includes('contract')) {
                return true;
            } else {
                return vm.$router.push({ name: "home" });
            }
        });
    },
  mixins: [translation],
  components: {
    Saleman,
    Layout,
    PageHeader,
    ErrorMessage,
    loader,
    Multiselect,
    Customer,
  },
  data() {
    return {
      per_page: 50,
      search: "",
      debounce: {},
      contractsPagination: {},
      contracts: [],
      customers: [],
      salesmen: [],
      reservations: [],
      enabled3: false,
      isLoader: false,
      create: {
        customer_id: null,
        reservation_id: null,
        salesman_id: null,
        date: "",
      },
      edit: {
        customer_id: null,
        reservation_id: null,
        salesman_id: null,
        date: "",
      },
      setting: {
        date: true,
        customer_id: true,
        salesman_id: true,
        reservation_id: true,
      },
      filterSetting: ["salesman_id", "customer_id"],
      errors: {},
      isCheckAll: false,
      checkAll: [],
      is_disabled: false,
      current_page: 1,
      company_id: 48,
      Tooltip: "",
      mouseEnter: null,
    };
  },
  validations: {
    create: {
      date: { required },
      customer_id: { required },
      reservation_id: { required },
      salesman_id: { required },
    },
    edit: {
      date: { required },
      customer_id: { required },
      reservation_id: { required },
      salesman_id: { required },
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
        this.contracts.forEach((el) => {
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
    showSaleManModal() {
      if (this.create.salesman_id == 0) {
        this.$bvModal.show("saleman-create");
        this.create.salesman_id = null;
      }
    },
    showSaleManModalEdit() {
      if (this.edit.salesman_id == 0) {
        this.$bvModal.show("saleman-create");
        this.edit.salesman_id = null;
      }
    },
    showCustomerModal() {
      if (this.create.customer_id == 0) {
        this.$bvModal.show("customer-create");
        this.create.customer_id = null;
      }
    },
    showCustomerModalEdit() {
      if (this.edit.customer_id == 0) {
        this.$bvModal.show("customer-create");
        this.edit.customer_id = null;
      }
    },

    /**
     *  get Data contracts
     */
    getData(page = 1) {
      this.isLoader = true;
      let _filterSetting = [...this.filterSetting];
      let index = this.filterSetting.indexOf("customer_id");
      if (index > -1) {
        _filterSetting[index] =
          this.$i18n.locale == "ar" ? "customer.name" : "customer.name_e";
      }
      index = this.filterSetting.indexOf("salesman_id");
      if (index > -1) {
        _filterSetting[index] =
          this.$i18n.locale == "ar" ? "salesman.name" : "salesman.name_e";
      }
      let filter = "";
      for (let i = 0; i < _filterSetting.length; ++i) {
        filter += `columns[${i}]=${_filterSetting[i]}&`;
      }
      adminApi
        .get(
          `real-estate/contracts?page=${page}&per_page=${this.per_page}&search=${this.search}&${filter}`
        )
        .then((res) => {
          let l = res.data;
          this.contracts = l.data;
          this.contractsPagination = l.pagination;
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
        this.current_page <= this.contractsPagination.last_page &&
        this.current_page != this.contractsPagination.current_page &&
        this.current_page
      ) {
        this.isLoader = true;
        let _filterSetting = [...this.filterSetting];
        let index = this.filterSetting.indexOf("customer_id");
        if (index > -1) {
          _filterSetting[index] =
            this.$i18n.locale == "ar" ? "customer.name" : "customer.name_e";
        }
        index = this.filterSetting.indexOf("salesman_id");
        if (index > -1) {
          _filterSetting[index] =
            this.$i18n.locale == "ar" ? "salesman.name" : "salesman.name_e";
        }
        let filter = "";
        for (let i = 0; i < _filterSetting.length; ++i) {
          filter += `columns[${i}]=${_filterSetting[i]}&`;
        }

        adminApi
          .get(
            `real-estate/contracts?page=${this.current_page}&per_page=${this.per_page}&search=${this.search}&${filter}`
          )
          .then((res) => {
            let l = res.data;
            this.contracts = l.data;
            this.contractsPagination = l.pagination;
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
    deleteScreenButton(id, index) {
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
              .post(`real-estate/contracts/bulk-delete`, { ids: id })
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
              .delete(`real-estate/contracts/${id}`)
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
     *  reset Modal (create)
     */
    resetModalHidden() {
      this.create = {
        customer_id: null,
        reservation_id: null,
        salesman_id: null,
        date: "",
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
      this.errors = {};
    },
    /**
     *  hidden Modal (create)
     */
    async resetModal() {
      await this.getCustomers();
      await this.getReservations();
      await this.getSalesmen();
      this.create = {
        customer_id: null,
        reservation_id: null,
        salesman_id: null,
        date: "",
      };
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
      this.create = {
        customer_id: null,
        reservation_id: null,
        salesman_id: null,
        date: "",
      };
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
          .post(`real-estate/contracts`, this.create)
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
          .put(`real-estate/contracts/${id}`, this.edit)
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
    async getCustomers() {
      this.isLoader = true;
      await adminApi
        .get(`/real-estate/customers`)
        .then((res) => {
          this.isLoader = false;
          let l = res.data.data;
          l.unshift({ id: 0, name: "اضافة زبون", name_e: "Add customer" });
          this.customers = l;
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: `${this.$t("general.Error")}`,
            text: `${this.$t("general.Thereisanerrorinthesystem")}`,
          });
        });
    },

    async getSalesmen() {
      this.isLoader = true;
      await adminApi
        .get(`/salesmen`)
        .then((res) => {
          this.isLoader = false;
          let l = res.data.data;
          l.unshift({ id: 0, name: "اضافة رجل مبيعات", name_e: "Add sale man" });
          this.salesmen = l;
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: `${this.$t("general.Error")}`,
            text: `${this.$t("general.Thereisanerrorinthesystem")}`,
          });
        });
    },

    async getReservations() {
      this.isLoader = true;
      await adminApi
        .get(`/real-estate/reservations`)
        .then((res) => {
          this.isLoader = false;
          this.reservations = res.data.data;
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
      let contract = this.contracts.find((e) => id == e.id);
      await this.getCustomers();
      await this.getReservations();
      await this.getSalesmen();
      this.edit.date = contract.date;
      this.edit.customer_id = contract.customer.id;
      this.edit.salesman_id = contract.salesman.id;
      this.edit.reservation_id = contract.reservation.id;
      this.errors = {};
    },
    /**
     *  hidden Modal (edit)
     */
    resetModalHiddenEdit(id) {
      this.errors = {};
      this.edit = {
        customer_id: null,
        reservation_id: null,
        salesman_id: null,
        date: "",
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
    formatDate(value) {
      return formatDateOnly(value);
    },
    log(id) {
      if (this.mouseEnter != id) {
        this.Tooltip = "";
        this.mouseEnter = id;
        adminApi
          .get(`real-estate/contracts/logs/${id}`)
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
    <Saleman @created="getSalesmen" />
    <Customer @created="getCustomers" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row justify-content-between align-items-center mb-2">
              <h4 class="header-title">{{ $t("general.contractTable") }}</h4>
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
                      value="salesman_id"
                      class="mb-1"
                      >{{ getCompanyKey("sale_man") }}</b-form-checkbox
                    >
                    <b-form-checkbox
                      v-model="filterSetting"
                      value="customer_id"
                      class="mb-1"
                      >{{ getCompanyKey("customer") }}</b-form-checkbox
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
                    @click.prevent="deleteScreenButton(checkAll[0])"
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
                    <b-form-checkbox v-model="setting.date" class="mb-1"
                      >{{ getCompanyKey("contract_date") }}
                    </b-form-checkbox>
                    <b-form-checkbox v-model="setting.customer_id" class="mb-1"
                      >{{ getCompanyKey("customer") }}
                    </b-form-checkbox>

                    <b-form-checkbox v-model="setting.salesman_id" class="mb-1">
                      {{ getCompanyKey("sale_man") }}
                    </b-form-checkbox>
                    <b-form-checkbox v-model="setting.reservation_id" class="mb-1">
                      {{ getCompanyKey("reservation_date") }}
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
                      {{ contractsPagination.from }}-{{ contractsPagination.to }}
                      /
                      {{ contractsPagination.total }}
                    </div>
                    <div class="d-inline-block">
                      <a
                        href="javascript:void(0)"
                        :style="{
                          'pointer-events':
                            contractsPagination.current_page == 1 ? 'none' : '',
                        }"
                        @click.prevent="getData(contractsPagination.current_page - 1)"
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
                            contractsPagination.last_page ==
                            contractsPagination.current_page
                              ? 'none'
                              : '',
                        }"
                        @click.prevent="getData(contractsPagination.current_page + 1)"
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
              :title="getCompanyKey('contract_create_form')"
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
                  <div class="col-md-12">
                    <div class="form-group">
                      <label class="control-label">
                        {{ $t("general.Date") }}
                        <span class="text-danger">*</span>
                      </label>
                      <input
                        type="date"
                        class="form-control"
                        data-create="9"
                        @keypress.enter="moveInput('select', 'create', 10)"
                        v-model="$v.create.date.$model"
                        :class="{
                          'is-invalid': $v.create.date.$error || errors.date,
                          'is-valid': !$v.create.date.$invalid && !errors.date,
                        }"
                      />
                      <template v-if="errors.date">
                        <ErrorMessage
                          v-for="(errorMessage, index) in errors.date"
                          :key="index"
                          >{{ errorMessage }}</ErrorMessage
                        >
                      </template>
                    </div>
                  </div>
                  <div class="col-md-12 position-relative">
                    <div class="form-group">
                      <label class="my-1 mr-2">{{ getCompanyKey("customer") }}</label>
                      <multiselect
                        @input="showCustomerModal"
                        v-model="create.customer_id"
                        :options="customers.map((type) => type.id)"
                        :custom-label="
                          (opt) =>
                            $i18n.locale == 'ar'
                              ? customers.find((x) => x.id == opt).name
                              : customers.find((x) => x.id == opt).name_e
                        "
                        :class="{
                          'is-invalid':
                            $v.create.customer_id.$error || errors.customer_id,
                        }"
                      >
                      </multiselect>
                      <div
                        v-if="!$v.create.customer_id.required"
                        class="invalid-feedback"
                      >
                        {{ $t("general.fieldIsRequired") }}
                      </div>

                      <template v-if="errors.customer_id">
                        <ErrorMessage
                          v-for="(errorMessage, index) in errors.customer_id"
                          :key="index"
                          >{{ errorMessage }}</ErrorMessage
                        >
                      </template>
                    </div>
                  </div>
                  <div class="col-md-12 position-relative">
                    <div class="form-group">
                      <label class="my-1 mr-2">{{ getCompanyKey("sale_man") }}</label>
                      <multiselect
                        @input="showSaleManModal"
                        v-model="create.salesman_id"
                        :options="salesmen.map((type) => type.id)"
                        :custom-label="
                          (opt) =>
                            $i18n.locale == 'ar'
                              ? salesmen.find((x) => x.id == opt).name
                              : salesmen.find((x) => x.id == opt).name_e
                        "
                        :class="{
                          'is-invalid':
                            $v.create.salesman_id.$error || errors.salesman_id,
                        }"
                      >
                      </multiselect>
                      <div
                        v-if="!$v.create.salesman_id.required"
                        class="invalid-feedback"
                      >
                        {{ $t("general.fieldIsRequired") }}
                      </div>
                      <template v-if="errors.salesman_id">
                        <ErrorMessage
                          v-for="(errorMessage, index) in errors.button_id"
                          :key="index"
                          >{{ errorMessage }}</ErrorMessage
                        >
                      </template>
                    </div>
                  </div>
                  <div class="col-md-12 position-relative">
                    <div class="form-group">
                      <label class="my-1 mr-2">{{
                        getCompanyKey("reservation_date")
                      }}</label>
                      <multiselect
                        v-model="create.reservation_id"
                        :options="reservations.map((type) => type.id)"
                        :custom-label="
                          (opt) => reservations.find((x) => x.id == opt).date
                        "
                        :class="{
                          'is-invalid':
                            $v.create.reservation_id.$error || errors.reservation_id,
                        }"
                      >
                      </multiselect>
                      <div
                        v-if="!$v.create.reservation_id.required"
                        class="invalid-feedback"
                      >
                        {{ $t("general.fieldIsRequired") }}
                      </div>
                      <template v-if="errors.reservation_id">
                        <ErrorMessage
                          v-for="(errorMessage, index) in errors.reservation_id"
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
                    <th v-if="setting.date">
                      <div class="d-flex justify-content-center">
                        <span>{{ getCompanyKey("contract_date") }}</span>
                        <div class="arrow-sort">
                          <i
                            class="fas fa-arrow-up"
                            @click="
                              contracts.sort(
                                sortString(
                                  $i18n.locale == 'ar' ? 'field_title' : 'field_title_e'
                                )
                              )
                            "
                          ></i>
                          <i
                            class="fas fa-arrow-down"
                            @click="
                              contracts.sort(
                                sortString($i18n.locale == 'ar' ? '-name' : '-name_e')
                              )
                            "
                          ></i>
                        </div>
                      </div>
                    </th>
                    <th v-if="setting.customer_id">
                      <div class="d-flex justify-content-center">
                        <span>{{ getCompanyKey("customer") }}</span>
                        <div class="arrow-sort">
                          <i
                            class="fas fa-arrow-up"
                            @click="
                              contracts.sort(
                                sortString($i18n.locale == 'ar' ? 'name' : 'name_e')
                              )
                            "
                          ></i>
                          <i
                            class="fas fa-arrow-down"
                            @click="
                              contracts.sort(
                                sortString($i18n.locale == 'ar' ? '-name' : '-name_e')
                              )
                            "
                          ></i>
                        </div>
                      </div>
                    </th>
                    <th v-if="setting.reservation_id">
                      <div class="d-flex justify-content-center">
                        <span>{{ getCompanyKey("reservation_date") }}</span>
                        <div class="arrow-sort">
                          <i
                            class="fas fa-arrow-up"
                            @click="
                              contracts.sort(
                                sortString($i18n.locale == 'ar' ? 'name' : 'name_e')
                              )
                            "
                          ></i>
                          <i
                            class="fas fa-arrow-down"
                            @click="
                              contracts.sort(
                                sortString($i18n.locale == 'ar' ? '-name' : '-name_e')
                              )
                            "
                          ></i>
                        </div>
                      </div>
                    </th>
                    <th v-if="setting.salesman_id">
                      <div class="d-flex justify-content-center">
                        <span>{{ getCompanyKey("sale_man") }}</span>
                        <div class="arrow-sort">
                          <i
                            class="fas fa-arrow-up"
                            @click="
                              contracts.sort(
                                sortString($i18n.locale == 'ar' ? 'name' : 'name_e')
                              )
                            "
                          ></i>
                          <i
                            class="fas fa-arrow-down"
                            @click="
                              contracts.sort(
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
                <tbody v-if="contracts.length > 0">
                  <tr
                    @click.capture="checkRow(data.id)"
                    @dblclick.prevent="$bvModal.show(`modal-edit-${data.id}`)"
                    v-for="(data, index) in contracts"
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
                    <td v-if="setting.date">
                      <h5 class="m-0 font-weight-normal">
                        {{ data.date }}
                      </h5>
                    </td>
                    <td v-if="setting.customer_id">
                      <h5 class="m-0 font-weight-normal">
                        {{
                          $i18n.locale == "ar" ? data.customer.name : data.customer.name_e
                        }}
                      </h5>
                    </td>
                    <td v-if="setting.reservation_id">
                      <h5 class="m-0 font-weight-normal">
                        {{ data.reservation.date }}
                      </h5>
                    </td>
                    <td v-if="setting.salesman_id">
                      <h5 class="m-0 font-weight-normal">
                        {{
                          $i18n.locale == "ar" ? data.salesman.name : data.salesman.name_e
                        }}
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
                        :title="getCompanyKey('contract_edit_form')"
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
                                <label class="control-label">
                                  {{ $t("general.Date") }}
                                  <span class="text-danger">*</span>
                                </label>
                                <input
                                  type="date"
                                  class="form-control"
                                  data-create="9"
                                  @keypress.enter="moveInput('select', 'create', 10)"
                                  v-model="$v.edit.date.$model"
                                  :class="{
                                    'is-invalid': $v.edit.date.$error || errors.date,
                                    'is-valid': !$v.edit.date.$invalid && !errors.date,
                                  }"
                                />
                                <template v-if="errors.date">
                                  <ErrorMessage
                                    v-for="(errorMessage, index) in errors.date"
                                    :key="index"
                                    >{{ errorMessage }}</ErrorMessage
                                  >
                                </template>
                              </div>
                            </div>
                            <div class="col-md-12 position-relative">
                              <div class="form-group">
                                <label class="my-1 mr-2">{{
                                  getCompanyKey("customer")
                                }}</label>
                                <multiselect
                                  @input="showCustomerModalEdit"
                                  v-model="edit.customer_id"
                                  :options="customers.map((type) => type.id)"
                                  :custom-label="
                                    (opt) =>
                                      $i18n.locale == 'ar'
                                        ? customers.find((x) => x.id == opt).name
                                        : customers.find((x) => x.id == opt).name_e
                                  "
                                  :class="{
                                    'is-invalid':
                                      $v.edit.customer_id.$error || errors.customer_id,
                                  }"
                                >
                                </multiselect>
                                <div
                                  v-if="!$v.edit.customer_id.required"
                                  class="invalid-feedback"
                                >
                                  {{ $t("general.fieldIsRequired") }}
                                </div>

                                <template v-if="errors.customer_id">
                                  <ErrorMessage
                                    v-for="(errorMessage, index) in errors.customer_id"
                                    :key="index"
                                    >{{ errorMessage }}</ErrorMessage
                                  >
                                </template>
                              </div>
                            </div>
                            <div class="col-md-12 position-relative">
                              <div class="form-group">
                                <label class="my-1 mr-2">{{
                                  getCompanyKey("sale_man")
                                }}</label>
                                <multiselect
                                  @input="showSaleManModalEdit"
                                  v-model="edit.salesman_id"
                                  :options="salesmen.map((type) => type.id)"
                                  :custom-label="
                                    (opt) =>
                                      $i18n.locale == 'ar'
                                        ? salesmen.find((x) => x.id == opt).name
                                        : salesmen.find((x) => x.id == opt).name_e
                                  "
                                  :class="{
                                    'is-invalid':
                                      $v.edit.salesman_id.$error || errors.salesman_id,
                                  }"
                                >
                                </multiselect>
                                <div
                                  v-if="!$v.edit.salesman_id.required"
                                  class="invalid-feedback"
                                >
                                  {{ $t("general.fieldIsRequired") }}
                                </div>
                                <template v-if="errors.salesman_id">
                                  <ErrorMessage
                                    v-for="(errorMessage, index) in errors.salesman_id"
                                    :key="index"
                                    >{{ errorMessage }}</ErrorMessage
                                  >
                                </template>
                              </div>
                            </div>
                            <div class="col-md-12 position-relative">
                              <div class="form-group">
                                <label class="my-1 mr-2">{{
                                  getCompanyKey("reservation_date")
                                }}</label>
                                <multiselect
                                  v-model="edit.reservation_id"
                                  :options="reservations.map((type) => type.id)"
                                  :custom-label="
                                    (opt) => reservations.find((x) => x.id == opt).date
                                  "
                                  :class="{
                                    'is-invalid':
                                      $v.edit.reservation_id.$error ||
                                      errors.reservation_id,
                                  }"
                                >
                                </multiselect>
                                <div
                                  v-if="!$v.edit.reservation_id.required"
                                  class="invalid-feedback"
                                >
                                  {{ $t("general.fieldIsRequired") }}
                                </div>
                                <template v-if="errors.reservation_id">
                                  <ErrorMessage
                                    v-for="(errorMessage, index) in errors.reservation_id"
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
                    <th class="text-center" colspan="7">
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

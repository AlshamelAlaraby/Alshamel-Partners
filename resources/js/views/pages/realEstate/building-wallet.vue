<script>
import Layout from "../../layouts/main";
import PageHeader from "../../../components/Page-header";
import adminApi from "../../../api/adminAxios";
import outerAxios from "../../../api/outerAxios";
import { required } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import ErrorMessage from "../../../components/widgets/errorMessage";
import loader from "../../../components/loader";
import Building from "../../../components/create/building";
import Wallet from "../../../components/create/wallet";
import { dynamicSortString } from "../../../helper/tableSort";
import Multiselect from "vue-multiselect";
import { formatDateOnly } from "../../../helper/startDate";
import translation from "../../../helper/translation-mixin";

/**
 * Advanced Table component
 */
export default {
  page: {
    title: "Building wallet",
    meta: [{ name: "description", content: "Building wallet" }],
  },
  mixins: [translation],
  components: {
    Layout,
    PageHeader,
    ErrorMessage,
    loader,
    Multiselect,
    Building,
    Wallet,
  },
  data() {
    return {
      per_page: 50,
      search: "",
      debounce: {},
      buildingWalletsPagination: {},
      buildingWallets: [],
      wallets: [],
      buildings: [],
      enabled3: false,
      isLoader: false,
      create: {
        wallet_id: null,
        building_id: null,
        bu_ty: "active",
      },
      edit: {
        wallet_id: null,
        building_id: null,
        bu_ty: "active",
      },
      setting: {
        building_id: true,
        wallet_id: true,
        bu_ty: true,
      },
      filterSetting: ["building_id", "wallet_id"],
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
      building_id: { required },
      wallet_id: { required },
      bu_ty: { required },
    },
    edit: {
      building_id: { required },
      wallet_id: { required },
      bu_ty: { required },
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
        this.buildingWallets.forEach((el) => {
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
    showBuildingModal() {
      if (this.create.building_id == 0) {
        this.$bvModal.show("building-create");
        this.create.building_id = null;
      }
    },
    showBuildingModalEdit() {
      if (this.edit.building_id == 0) {
        this.$bvModal.show("building-create");
        this.edit.building_id = null;
      }
    },
showWalletModal() {
      if (this.create.wallet_id == 0) {
        this.$bvModal.show("wallet-create");
        this.create.wallet_id = null;
      }
    },
    showWalletModalEdit() {
      if (this.edit.wallet_id == 0) {
        this.$bvModal.show("wallet-create");
        this.edit.wallet_id = null;
      }
    },

    /**
     *  get Data buildingWallets
     */
    getData(page = 1) {
      this.isLoader = true;
      let _filterSetting = [...this.filterSetting];
      let index = this.filterSetting.indexOf("building_id");
      if (index > -1) {
        _filterSetting[index] =
          this.$i18n.locale == "ar" ? "building.name" : "building.name_e";
      }
      index = this.filterSetting.indexOf("wallet_id");
      if (index > -1) {
        _filterSetting[index] =
          this.$i18n.locale == "ar" ? "wallet.name" : "wallet.name_e";
      }
      let filter = "";
      for (let i = 0; i < _filterSetting.length; ++i) {
        filter += `columns[${i}]=${_filterSetting[i]}&`;
      }
      adminApi
        .get(
          `/real-estate/building-wallet?page=${page}&per_page=${this.per_page}&search=${this.search}&${filter}`
        )
        .then((res) => {
          let l = res.data;
          this.buildingWallets = l.data;
          this.buildingWalletsPagination = l.pagination;
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
        this.current_page <= this.buildingWalletsPagination.last_page &&
        this.current_page != this.buildingWalletsPagination.current_page &&
        this.current_page
      ) {
        this.isLoader = true;
        let _filterSetting = [...this.filterSetting];
        let index = this.filterSetting.indexOf("building_id");
        if (index > -1) {
          _filterSetting[index] =
            this.$i18n.locale == "ar" ? "building.name" : "building.name_e";
        }
        index = this.filterSetting.indexOf("wallet_id");
        if (index > -1) {
          _filterSetting[index] =
            this.$i18n.locale == "ar" ? "wallet.name" : "wallet.name_e";
        }
        let filter = "";
        for (let i = 0; i < _filterSetting.length; ++i) {
          filter += `columns[${i}]=${_filterSetting[i]}&`;
        }

        adminApi
          .get(
            `/real-estate/building-wallet?page=${this.current_page}&per_page=${this.per_page}&search=${this.search}&${filter}`
          )
          .then((res) => {
            let l = res.data;
            this.buildingWallets = l.data;
            this.buildingWalletsPagination = l.pagination;
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
              .post(`/real-estate/building-wallet/bulk-delete`, { ids: id })
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
              .delete(`/real-estate/building-wallet/${id}`)
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
      this.create = { wallet_id: null, building_id: null, bu_ty: "active" };
      this.$nextTick(() => {
        this.$v.$reset();
      });
      this.errors = {};
    },
    /**
     *  hidden Modal (create)
     */
    async resetModal() {
      await this.getBuildings();
      await this.getWallets();
      this.create = { wallet_id: null, building_id: null, bu_ty: "active" };
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
      this.create = { wallet_id: null, building_id: null, bu_ty: "active" };
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
          .post(`/real-estate/building-wallet`, {
            ...this.create,
            bu_ty: this.create.bu_ty == "active" ? 1 : 2,
          })
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
          .put(`/real-estate/building-wallet/${id}`, {
            ...this.edit,
            bu_ty: this.edit.bu_ty == "active" ? 1 : 2,
          })
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
    async getBuildings() {
      this.isLoader = true;
      await adminApi
        .get(`/real-estate/buildings`)
        .then((res) => {
          this.isLoader = false;
          let l = res.data.data;
          l.unshift({ id: 0, name: "اضافة مبنى", name_e: "Add building" });
          this.buildings = l;
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: `${this.$t("general.Error")}`,
            text: `${this.$t("general.Thereisanerrorinthesystem")}`,
          });
        });
    },

    async getWallets() {
      this.isLoader = true;
      await adminApi
        .get(`/real-estate/wallets`)
        .then((res) => {
          this.isLoader = false;
          let l = res.data.data;
          l.unshift({ id: 0, name: "اضافة محفظة", name_e: "Add wallet" });
          this.wallets = l;
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
      let buildingWallet = this.buildingWallets.find((e) => id == e.id);
      await this.getBuildings();
      await this.getWallets();
      this.edit.building_id = buildingWallet.building.id;
      this.edit.wallet_id = buildingWallet.wallet.id;
      this.edit.bu_ty = buildingWallet.bu_ty == 1 ? "active" : "inactive";
      this.errors = {};
    },
    /**
     *  hidden Modal (edit)
     */
    resetModalHiddenEdit(id) {
      this.errors = {};
      this.edit = {
        wallet_id: null,
        building_id: null,
        bu_ty: "active",
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
          .get(`/real-estate/building-wallet/logs/${id}`)
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
    <Building @created="getBuildings" />
    <Wallet @created="getWallets" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row justify-content-between align-items-center mb-2">
              <h4 class="header-title">{{ $t("general.buildingWalletTable") }}</h4>
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
                      value="building_id"
                      class="mb-1"
                      >{{ getCompanyKey("building") }}</b-form-checkbox
                    >
                    <b-form-checkbox
                      v-model="filterSetting"
                      value="wallet_id"
                      class="mb-1"
                      >{{ getCompanyKey("wallet") }}</b-form-checkbox
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
                    <b-form-checkbox v-model="setting.building_id" class="mb-1"
                      >{{ getCompanyKey("building") }}
                    </b-form-checkbox>
                    <b-form-checkbox v-model="setting.wallet_id" class="mb-1">
                      {{ getCompanyKey("wallet") }}
                    </b-form-checkbox>
                    <b-form-checkbox v-model="setting.bu_ty" class="mb-1">
                      {{ getCompanyKey("building_wallet_bu_ty") }}
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
                      {{ buildingWalletsPagination.from }}-{{
                        buildingWalletsPagination.to
                      }}
                      /
                      {{ buildingWalletsPagination.total }}
                    </div>
                    <div class="d-inline-block">
                      <a
                        href="javascript:void(0)"
                        :style="{
                          'pointer-events':
                            buildingWalletsPagination.current_page == 1 ? 'none' : '',
                        }"
                        @click.prevent="
                          getData(buildingWalletsPagination.current_page - 1)
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
                            buildingWalletsPagination.last_page ==
                            buildingWalletsPagination.current_page
                              ? 'none'
                              : '',
                        }"
                        @click.prevent="
                          getData(buildingWalletsPagination.current_page + 1)
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
              :title="getCompanyKey('building_wallet_create_form')"
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
                      <label class="my-1 mr-2">{{ getCompanyKey("building") }}</label>
                      <multiselect
                        @input="showBuildingModal"
                        v-model="create.building_id"
                        :options="buildings.map((type) => type.id)"
                        :custom-label="
                          (opt) =>
                            $i18n.locale == 'ar'
                              ? buildings.find((x) => x.id == opt).name
                              : buildings.find((x) => x.id == opt).name_e
                        "
                        :class="{
                          'is-invalid':
                            $v.create.building_id.$error || errors.building_id,
                        }"
                      >
                      </multiselect>
                      <div
                        v-if="!$v.create.building_id.required"
                        class="invalid-feedback"
                      >
                        {{ $t("general.fieldIsRequired") }}
                      </div>

                      <template v-if="errors.building_id">
                        <ErrorMessage
                          v-for="(errorMessage, index) in errors.building_id"
                          :key="index"
                          >{{ errorMessage }}</ErrorMessage
                        >
                      </template>
                    </div>
                  </div>
                  <div class="col-md-12 position-relative">
                    <div class="form-group">
                      <label class="my-1 mr-2">{{ getCompanyKey("wallet") }}</label>
                      <multiselect
                        @input="showWalletModal"
                        v-model="create.wallet_id"
                        :options="wallets.map((type) => type.id)"
                        :custom-label="
                          (opt) =>
                            $i18n.locale == 'ar'
                              ? wallets.find((x) => x.id == opt).name
                              : wallets.find((x) => x.id == opt).name_e
                        "
                        :class="{
                          'is-invalid': $v.create.wallet_id.$error || errors.wallet_id,
                        }"
                      >
                      </multiselect>
                      <div v-if="!$v.create.wallet_id.required" class="invalid-feedback">
                        {{ $t("general.fieldIsRequired") }}
                      </div>
                      <template v-if="errors.wallet_id">
                        <ErrorMessage
                          v-for="(errorMessage, index) in errors.wallet_id"
                          :key="index"
                          >{{ errorMessage }}</ErrorMessage
                        >
                      </template>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label class="mr-2">
                        {{ getCompanyKey("building_wallet_bu_ty") }}
                        <span class="text-danger">*</span>
                      </label>
                      <b-form-group
                        :class="{
                          'is-invalid': $v.create.bu_ty.$error || errors.bu_ty,
                          'is-valid': !$v.create.bu_ty.$invalid && !errors.bu_ty,
                        }"
                      >
                        <b-form-radio
                          class="d-inline-block"
                          v-model="$v.create.bu_ty.$model"
                          name="some-radios"
                          value="active"
                          >{{ $t("general.Building") }}</b-form-radio
                        >
                        <b-form-radio
                          class="d-inline-block m-1"
                          v-model="$v.create.bu_ty.$model"
                          name="some-radios"
                          value="inactive"
                          >{{ $t("general.Unit") }}</b-form-radio
                        >
                      </b-form-group>
                      <template v-if="errors.bu_ty">
                        <ErrorMessage
                          v-for="(errorMessage, index) in errors.bu_ty"
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
                    <th v-if="setting.building_id">
                      <div class="d-flex justify-content-center">
                        <span>{{ getCompanyKey("building") }}</span>
                        <div class="arrow-sort">
                          <i
                            class="fas fa-arrow-up"
                            @click="
                              buildingWallets.sort(
                                sortString($i18n.locale == 'ar' ? 'name' : 'name_e')
                              )
                            "
                          ></i>
                          <i
                            class="fas fa-arrow-down"
                            @click="
                              buildingWallets.sort(
                                sortString($i18n.locale == 'ar' ? '-name' : '-name_e')
                              )
                            "
                          ></i>
                        </div>
                      </div>
                    </th>
                    <th v-if="setting.wallet_id">
                      <div class="d-flex justify-content-center">
                        <span>{{ getCompanyKey("wallet") }}</span>
                        <div class="arrow-sort">
                          <i
                            class="fas fa-arrow-up"
                            @click="
                              buildingWallets.sort(
                                sortString(
                                  $i18n.locale == 'ar' ? 'field_title' : 'field_title_e'
                                )
                              )
                            "
                          ></i>
                          <i
                            class="fas fa-arrow-down"
                            @click="
                              buildingWallets.sort(
                                sortString($i18n.locale == 'ar' ? '-name' : '-name_e')
                              )
                            "
                          ></i>
                        </div>
                      </div>
                    </th>
                    <th v-if="setting.bu_ty">
                      <div class="d-flex justify-content-center">
                        <span>{{ getCompanyKey("building_wallet_bu_ty") }}</span>
                        <div class="arrow-sort">
                          <i
                            class="fas fa-arrow-up"
                            @click="buildingWallets.sort(sortString('bu_ty'))"
                          >
                          </i>
                          <i
                            class="fas fa-arrow-down"
                            @click="buildingWallets.sort(sortString('-bu_ty'))"
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
                <tbody v-if="buildingWallets.length > 0">
                  <tr
                    @click.capture="checkRow(data.id)"
                    @dblclick.prevent="$bvModal.show(`modal-edit-${data.id}`)"
                    v-for="(data, index) in buildingWallets"
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
                    <td v-if="setting.building_id">
                      <h5 class="m-0 font-weight-normal">
                        {{
                          $i18n.locale == "ar" ? data.building.name : data.building.name_e
                        }}
                      </h5>
                    </td>
                    <td v-if="setting.wallet_id">
                      <h5 class="m-0 font-weight-normal">
                        {{ $i18n.locale == "ar" ? data.wallet.name : data.wallet.name_e }}
                      </h5>
                    </td>
                    <td v-if="setting.bu_ty">
                      <span class="text-success badge">
                        {{
                          data.bu_ty == 1
                            ? `${$t("general.Building")}`
                            : `${$t("general.Unit")}`
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
                        :title="getCompanyKey('building_wallet_edit_form')"
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
                            <div class="col-md-12 position-relative">
                              <div class="form-group">
                                <label class="my-1 mr-2">{{
                                  getCompanyKey("building")
                                }}</label>
                                <multiselect
                                  @input="showBuildingModalEdit"
                                  v-model="edit.building_id"
                                  :options="buildings.map((type) => type.id)"
                                  :custom-label="
                                    (opt) =>
                                      $i18n.locale == 'ar'
                                        ? buildings.find((x) => x.id == opt).name
                                        : buildings.find((x) => x.id == opt).name_e
                                  "
                                  :class="{
                                    'is-invalid':
                                      $v.edit.building_id.$error || errors.building_id,
                                  }"
                                >
                                </multiselect>
                                <div
                                  v-if="!$v.edit.building_id.required"
                                  class="invalid-feedback"
                                >
                                  {{ $t("general.fieldIsRequired") }}
                                </div>

                                <template v-if="errors.building_id">
                                  <ErrorMessage
                                    v-for="(errorMessage, index) in errors.building_id"
                                    :key="index"
                                    >{{ errorMessage }}</ErrorMessage
                                  >
                                </template>
                              </div>
                            </div>
                            <div class="col-md-12 position-relative">
                              <div class="form-group">
                                <label class="my-1 mr-2">{{
                                  getCompanyKey("wallet")
                                }}</label>
                                <multiselect
                                  @input="showWalletModalEdit"
                                  v-model="edit.wallet_id"
                                  :options="wallets.map((type) => type.id)"
                                  :custom-label="
                                    (opt) =>
                                      $i18n.locale == 'ar'
                                        ? wallets.find((x) => x.id == opt).name
                                        : wallets.find((x) => x.id == opt).name_e
                                  "
                                  :class="{
                                    'is-invalid':
                                      $v.edit.wallet_id.$error || errors.wallet_id,
                                  }"
                                >
                                </multiselect>
                                <div
                                  v-if="!$v.edit.wallet_id.required"
                                  class="invalid-feedback"
                                >
                                  {{ $t("general.fieldIsRequired") }}
                                </div>
                                <template v-if="errors.wallet_id">
                                  <ErrorMessage
                                    v-for="(errorMessage, index) in errors.wallet_id"
                                    :key="index"
                                    >{{ errorMessage }}</ErrorMessage
                                  >
                                </template>
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <label class="mr-2">
                                  {{ getCompanyKey("building_wallet_bu_ty") }}
                                  <span class="text-danger">*</span>
                                </label>
                                <b-form-group
                                  :class="{
                                    'is-invalid': $v.edit.bu_ty.$error || errors.bu_ty,
                                    'is-valid': !$v.edit.bu_ty.$invalid && !errors.bu_ty,
                                  }"
                                >
                                  <b-form-radio
                                    class="d-inline-block"
                                    v-model="$v.edit.bu_ty.$model"
                                    name="some-radios"
                                    value="active"
                                    >{{ $t("general.Building") }}</b-form-radio
                                  >
                                  <b-form-radio
                                    class="d-inline-block m-1"
                                    v-model="$v.edit.bu_ty.$model"
                                    name="some-radios"
                                    value="inactive"
                                    >{{ $t("general.Unit") }}</b-form-radio
                                  >
                                </b-form-group>
                                <template v-if="errors.bu_ty">
                                  <ErrorMessage
                                    v-for="(errorMessage, index) in errors.bu_ty"
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
                    <th class="text-center" colspan="6">
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

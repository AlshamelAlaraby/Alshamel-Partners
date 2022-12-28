<script>
import Layout from "../../layouts/main";
import PageHeader from "../../../components/Page-header";
import adminApi from "../../../api/adminAxios";
import Switches from "vue-switches";
import {required, minLength, maxLength, integer} from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import ErrorMessage from "../../../components/widgets/errorMessage";
import loader from "../../../components/loader";
import {dynamicSortString} from "../../../helper/tableSort";
import Multiselect from "vue-multiselect";
import Country from "../../../components/country.vue";
import {formatDateOnly} from "../../../helper/startDate";

/**
 * Advanced Table component
 */
export default {
    page: {
        title: "Country",
        meta: [{name: "description", content: "Country"}],
    },
    components: {
        Layout,
        PageHeader,
        Switches,
        ErrorMessage,
        loader,
        Multiselect,
        Country,
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
                if (ew == 32) return true;
                if (48 <= ew && ew <= 57) return true;
                if (65 <= ew && ew <= 90) return false;
                if (97 <= ew && ew <= 122) return false;
                return true;
            });
        });
    },
    data() {
        return {
            per_page: 50,
            search: "",
            debounce: {},
            governoratesPagination: {},
            governorates: [],
            isLoader: false,
            is_disabled: false,
            create: {
                name: "",
                name_e: "",
                phone_key: "",
                country_id: null,
                is_default: 0,
                is_active: "active",
            },
            edit: {
                name: "",
                name_e: "",
                phone_key: "",
                country_id: null,
                is_default: 0,
                is_active: "active",
            },
            setting: {
                name: true,
                name_e: true,
                country_id: true,
                phone_key: true,
                is_default: true,
                is_active: true
            },
            errors: {},
            dropDownSenders: [],
            isCheckAll: false,
            checkAll: [],
            current_page: 1,
            filterSetting: ["name", "name_e", "country_id", "phone_key"],
            countries: [],
            Tooltip: '',
            mouseEnter: null
        };
    },
    validations: {
        create: {
            name: {required, minLength: minLength(2), maxLength: maxLength(100)},
            name_e: {
                required,
                minLength: minLength(2),
                maxLength: maxLength(100),
            },
            phone_key: {required, integer, minLength: minLength(1), maxLength: maxLength(10)},
            is_default: {required, integer},
            country_id: {required},
            is_active: {required},
        },
        edit: {
            name: {required, minLength: minLength(2), maxLength: maxLength(100)},
            name_e: {
                required,
                minLength: minLength(2),
                maxLength: maxLength(100),
            },
            phone_key: {required, integer, minLength: minLength(1), maxLength: maxLength(10)},
            is_default: {required, integer},
            country_id: {required},
            is_active: {required},
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
                this.governorates.forEach((el) => {
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
        showCountryModal() {
            if (this.create.country_id == 0) {
                this.$bvModal.show("country-create");
                this.create.country_id = null;
            }
        },
        showCountryModalEdit() {
            if (this.edit.country_id == 0) {
                this.$bvModal.show("country-create");
                this.edit.country_id = null;
            }
        },
        resetForm() {
            this.create = {
                name: "",
                name_e: "",
                phone_key: "",
                country_id: null,
                is_default: 0,
                is_active: "active",
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
            adminApi
                .get(`/governorates?page=${page}&per_page=${this.per_page}`)
                .then((res) => {
                    let l = res.data;
                    this.governorates = l.data;
                    this.governoratesPagination = l.pagination;
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
                this.current_page <= this.governoratesPagination.last_page &&
                this.current_page != this.governoratesPagination.current_page &&
                this.current_page
            ) {
                this.isLoader = true;

                adminApi
                    .get(
                        `/governorates?page=${page}&per_page=${this.per_page}&search=${this.search}&columns=${this.filterSetting}`
                    )
                    .then((res) => {
                        let l = res.data;
                        this.governorates = l.data;
                        this.governoratesPagination = l.pagination;
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
        deleteCountry(id) {
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
                        .delete(`/governorates/${id}`)
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
                name: "",
                name_e: "",
                phone_key: "",
                country_id: null,
                is_default: 0,
                is_active: "active",
            };
            this.$nextTick(() => {
                this.$v.$reset();
            });
            this.errors = {};
            this.$bvModal.hide(`create`);
        },
        /**
         *  hidden Modal (create)
         */
        resetModal() {
            this.create = {
                name: "",
                name_e: "",
                phone_key: "",
                country_id: null,
                is_default: 0,
                is_active: "active",
            };
            this.is_disabled = false;
            this.$nextTick(() => {
                this.$v.$reset();
            });
            this.getCategory();
            this.countries = [];
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
                    .post(`/governorates`, this.create)
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
                    .put(`/governorates/${id}`, this.edit)
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
            let governorate = this.governorates.find((e) => id == e.id);
            this.edit.name = governorate.name;
            this.edit.name_e = governorate.name_e;
            this.edit.is_active = governorate.is_active;
            await this.getCategory();
            this.edit.country_id = governorate.country.id;
            this.edit.phone_key = governorate.phone_key;
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
                phone_key: "",
                country_id: null,
                is_default: 0,
                is_active: "active",
            };
            this.countries = [];
        },
        /**
         *  start  dynamicSortString
         */
        sortString(value) {
            return dynamicSortString(value);
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
            this.isLoader = true;

            await adminApi
                .get(`/countries`)
                .then((res) => {
                    let l = res.data.data;
                    l.unshift({id: 0, name: "اضف دولة", name_e: "Add Country"});
                    this.countries = l;
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
        formatDate(value) {
            return formatDateOnly(value);
        },
        log(id) {
            if(this.mouseEnter != id){
                this.Tooltip = "";
                this.mouseEnter = id;
                adminApi
                    .get(`/governorates/logs/${id}`)
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
        <PageHeader/>
        <Country @created="getCategory"/>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <!-- start search -->
                        <div class="row justify-content-between align-items-center mb-2">
                            <h4 class="header-title">{{ $t("governorate.governoratesTable") }}</h4>
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
                                                $t("general.Name")
                                            }}
                                        </b-form-checkbox>
                                        <b-form-checkbox
                                            v-model="filterSetting"
                                            value="name_e"
                                            class="mb-1"
                                        >{{ $t("general.Name_en") }}
                                        </b-form-checkbox
                                        >
                                        <b-form-checkbox
                                            v-model="filterSetting"
                                            value="country_id"
                                            class="mb-1"
                                        >{{ $t("general.country") }}
                                        </b-form-checkbox
                                        >
                                        <b-form-checkbox
                                            v-model="filterSetting"
                                            value="phone_key"
                                            class="mb-1"
                                        >{{ $t("general.phone_key") }}
                                        </b-form-checkbox
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
                                        @click="$bvModal.show(`modal-edit-${checkAll[0]}`)"
                                        v-if="checkAll.length == 1"
                                    >
                                        <i class="mdi mdi-square-edit-outline"></i>
                                    </button>
                                    <!-- start mult delete  -->
                                    <button
                                        class="custom-btn-dowonload"
                                        v-if="checkAll.length > 1"
                                        @click.prevent="deleteCountry(checkAll)"
                                    >
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                    <!-- end mult delete  -->
                                    <!--  start one delete  -->
                                    <button
                                        class="custom-btn-dowonload"
                                        v-if="checkAll.length == 1"
                                        @click.prevent="deleteCountry(checkAll)"
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
                                                    $t('general.Name')
                                                }}
                                            </b-form-checkbox>
                                            <b-form-checkbox v-model="setting.name_e" class="mb-1">
                                                {{ $t('general.Name_en') }}
                                            </b-form-checkbox>
                                            <b-form-checkbox v-model="setting.phone_key" class="mb-1">
                                                {{ $t('general.phone_key') }}
                                            </b-form-checkbox>
                                            <b-form-checkbox v-model="setting.country_id" class="mb-1">
                                                {{ $t('general.country') }}
                                            </b-form-checkbox>
                                            <b-form-checkbox v-model="setting.is_default" class="mb-1">
                                                {{ $t('general.is_default') }}
                                            </b-form-checkbox>
                                            <b-form-checkbox v-model="setting.is_active" class="mb-1">
                                                {{ $t('general.Status') }}
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
                                            {{ governoratesPagination.from }}-{{ governoratesPagination.to }} /
                                            {{ governoratesPagination.total }}
                                        </div>
                                        <div class="d-inline-block">
                                            <a
                                                href="javascript:void(0)"
                                                :style="{
                                                  'pointer-events':
                                                    governoratesPagination.current_page == 1 ? 'none' : '',
                                                }"
                                                @click.prevent="getData(governoratesPagination.current_page - 1)"
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
                            governoratesPagination.last_page ==
                            governoratesPagination.current_page
                              ? 'none'
                              : '',
                        }"
                                                @click.prevent="getData(governoratesPagination.current_page + 1)"
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
                            :title="$t('governorate.addgovernorate')"
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
                                                {{ $t("general.country") }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <multiselect
                                                @input="showCountryModal"
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
                                                >{{ errorMessage }}
                                                </ErrorMessage
                                                >
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="field-5" class="control-label">
                                                {{ $t("general.phone_key") }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                data-create="4"
                                                @keypress.enter="moveInput('select', 'create', 5)"
                                                v-model="$v.create.phone_key.$model"
                                                :class="{
                          'is-invalid': $v.create.phone_key.$error || errors.phone_key,
                          'is-valid': !$v.create.phone_key.$invalid && !errors.phone_key,
                        }"
                                                id="field-5"
                                            />
                                            <div v-if="!$v.create.phone_key.minLength" class="invalid-feedback">
                                                {{ $t("general.Itmustbeatleast") }}
                                                {{ $v.create.phone_key.$params.minLength.min }}
                                                {{ $t("general.letters") }}
                                            </div>
                                            <div v-if="!$v.create.phone_key.maxLength" class="invalid-feedback">
                                                {{ $t("general.Itmustbeatmost") }}
                                                {{ $v.create.phone_key.$params.maxLength.max }}
                                                {{ $t("general.letters") }}
                                            </div>
                                            <template v-if="errors.phone_key">
                                                <ErrorMessage
                                                    v-for="(errorMessage, index) in errors.phone_key"
                                                    :key="index"
                                                >{{ errorMessage }}
                                                </ErrorMessage
                                                >
                                            </template>
                                        </div>
                                    </div>

                                    <div class="col-md-6 direction" dir="rtl">
                                        <div class="form-group">
                                            <label for="field-1" class="control-label">
                                                {{ $t("general.Name") }}
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
                                                >{{ errorMessage }}
                                                </ErrorMessage
                                                >
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6 direction-ltr" dir="ltr">
                                        <div class="form-group">
                                            <label for="field-2" class="control-label">
                                                {{ $t("general.Name_en") }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control englishInput"
                                                data-create="2"
                                                @keypress.enter="moveInput('input', 'create', 4)"
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
                                                >{{ errorMessage }}
                                                </ErrorMessage
                                                >
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="mr-2" for="field-11">
                                                {{ $t("general.is_default") }}
                                            </label>
                                            <select
                                                class="custom-select mr-sm-2"
                                                id="field-11"
                                                data-create="5"
                                                @keypress.enter.prevent="moveInput('select', 'create', 6)"
                                                v-model="$v.create.is_default.$model"
                                                :class="{
                          'is-invalid': $v.create.is_default.$error || errors.is_default,
                          'is-valid':
                            !$v.create.is_default.$invalid && !errors.is_default,
                        }"
                                            >
                                                <option value="" selected>{{ $t("general.Choose") }}...</option>
                                                <option value="1">{{ $t("general.Active") }}</option>
                                                <option value="0">{{ $t("general.Inactive") }}</option>
                                            </select>
                                            <template v-if="errors.is_default">
                                                <ErrorMessage
                                                    v-for="(errorMessage, index) in errors.is_default"
                                                    :key="index"
                                                >{{ errorMessage }}
                                                </ErrorMessage
                                                >
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="mr-2" for="inlineFormCustomSelectPref">
                                                {{ $t("general.Status") }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <select
                                                class="custom-select mr-sm-2"
                                                id="inlineFormCustomSelectPref"
                                                data-create="6"
                                                @keypress.enter.prevent="moveInput('input', 'create', 1)"
                                                v-model="$v.create.is_active.$model"
                                                :class="{
                          'is-invalid': $v.create.is_active.$error || errors.is_active,
                          'is-valid': !$v.create.is_active.$invalid && !errors.is_active,
                        }"
                                            >
                                                <option value="" selected>{{ $t("general.Choose") }}...</option>
                                                <option value="active">{{ $t("general.Active") }}</option>
                                                <option value="inactive">{{ $t("general.Inactive") }}</option>
                                            </select>
                                            <template v-if="errors.is_active">
                                                <ErrorMessage
                                                    v-for="(errorMessage, index) in errors.is_active"
                                                    :key="index"
                                                >{{ errorMessage }}
                                                </ErrorMessage
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
                            <loader size="large" v-if="isLoader"/>
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
                                            <span>{{ $t("general.Name") }}</span>
                                            <div class="arrow-sort">
                                                <i
                                                    class="fas fa-arrow-up"
                                                    @click="governorates.sort(sortString('name'))"
                                                ></i>
                                                <i
                                                    class="fas fa-arrow-down"
                                                    @click="governorates.sort(sortString('-name'))"
                                                ></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.name_e">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t("general.Name_en") }}</span>
                                            <div class="arrow-sort">
                                                <i
                                                    class="fas fa-arrow-up"
                                                    @click="governorates.sort(sortString('name_e'))"
                                                ></i>
                                                <i
                                                    class="fas fa-arrow-down"
                                                    @click="governorates.sort(sortString('-name_e'))"
                                                ></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.phone_key">
                                        <div class="d-flex justify-content-center">
                                            {{ $t("general.phone_key") }}
                                        </div>
                                    </th>
                                    <th v-if="setting.country_id">
                                        <div class="d-flex justify-content-center">
                                            {{ $t("general.country") }}
                                        </div>
                                    </th>
                                    <th v-if="setting.is_default">
                                        <div class="d-flex justify-content-center">
                                            {{ $t("general.is_default") }}
                                        </div>
                                    </th>
                                    <th v-if="setting.is_active">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t("general.Status") }}</span>
                                            <div class="arrow-sort">
                                                <i
                                                    class="fas fa-arrow-up"
                                                    @click="governorates.sort(sortString('name_e'))"
                                                ></i>
                                                <i
                                                    class="fas fa-arrow-down"
                                                    @click="governorates.sort(sortString('-name_e'))"
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
                                <tbody v-if="governorates.length > 0">
                                <tr
                                    @click.capture="checkRow(data.id)"
                                    @dblclick.prevent="$bvModal.show(`modal-edit-${data.id}`)"
                                    v-for="(data, index) in governorates"
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
                                    <td v-if="setting.name">
                                        <h5 class="m-0 font-weight-normal">{{ data.name }}</h5>
                                    </td>
                                    <td v-if="setting.name_e">
                                        <h5 class="m-0 font-weight-normal">{{ data.name_e }}</h5>
                                    </td>
                                    <td v-if="setting.phone_key">{{ data.phone_key }}</td>
                                    <td v-if="setting.country_id">
                                        {{ $i18n.locale == "ar" ? data.country.name : data.country.name_e }}
                                    </td>
                                    <td v-if="setting.is_default">
                      <span
                          :class="[
                          data.is_default == 'active' ? 'text-success' : 'text-danger',
                          'badge',
                        ]"
                      >
                        {{
                              data.is_default
                                  ? `${$t("general.Active")}`
                                  : `${$t("general.Inactive")}`
                          }}
                      </span>
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
                                                    @click.prevent="deleteCountry(data.id)"
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
                                            :title="$t('governorate.editgovernorate')"
                                            title-class="font-18"
                                            size="lg"
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
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                {{ $t("general.country") }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <multiselect
                                                                @input="showCountryModalEdit"
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
                                                                >{{ errorMessage }}
                                                                </ErrorMessage
                                                                >
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="edit-4" class="control-label">
                                                                {{ $t("general.phone_key") }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="number"
                                                                class="form-control"
                                                                data-edit="6"
                                                                @keypress.enter="moveInput('input', 'edit', 7)"
                                                                v-model="$v.edit.phone_key.$model"
                                                                :class="{
                                    'is-invalid':
                                      $v.edit.phone_key.$error || errors.phone_key,
                                    'is-valid':
                                      !$v.edit.phone_key.$invalid && !errors.phone_key,
                                  }"
                                                                id="edit-4"
                                                            />
                                                            <div
                                                                v-if="!$v.edit.phone_key.minLength"
                                                                class="invalid-feedback"
                                                            >
                                                                {{ $t("general.Itmustbeatleast") }}
                                                                {{ $v.edit.phone_key.$params.minLength.min }}
                                                                {{ $t("general.letters") }}
                                                            </div>
                                                            <div
                                                                v-if="!$v.edit.phone_key.maxLength"
                                                                class="invalid-feedback"
                                                            >
                                                                {{ $t("general.Itmustbeatmost") }}
                                                                {{ $v.edit.phone_key.$params.maxLength.max }}
                                                                {{ $t("general.letters") }}
                                                            </div>
                                                            <template v-if="errors.phone_key">
                                                                <ErrorMessage
                                                                    v-for="(errorMessage, index) in errors.phone_key"
                                                                    :key="index"
                                                                >{{ errorMessage }}
                                                                </ErrorMessage
                                                                >
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 direction" dir="rtl">
                                                        <div class="form-group">
                                                            <label for="edit-1" class="control-label">
                                                                {{ $t("general.Name") }}
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
                                                                >{{ errorMessage }}
                                                                </ErrorMessage
                                                                >
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 direction-ltr" dir="ltr">
                                                        <div class="form-group">
                                                            <label for="edit-2" class="control-label">
                                                                {{ $t("general.Name_en") }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                class="form-control englishInput"
                                                                data-edit="2"
                                                                @keypress.enter="moveInput('input', 'edit', 4)"
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
                                                                >{{ errorMessage }}
                                                                </ErrorMessage
                                                                >
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label class="mr-2" for="edit-11">
                                                                {{ $t("general.is_default") }}
                                                            </label>
                                                            <select
                                                                class="custom-select mr-sm-2"
                                                                id="edit-11"
                                                                data-edit="8"
                                                                @keypress.enter.prevent="moveInput('select', 'edit', 9)"
                                                                v-model="$v.create.is_default.$model"
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
                                                                <option value="1">{{ $t("general.Active") }}</option>
                                                                <option value="0">{{ $t("general.Inactive") }}</option>
                                                            </select>
                                                            <template v-if="errors.is_default">
                                                                <ErrorMessage
                                                                    v-for="(errorMessage, index) in errors.is_default"
                                                                    :key="index"
                                                                >{{ errorMessage }}
                                                                </ErrorMessage
                                                                >
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label class="mr-2">
                                                                {{ $t("general.Status") }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <select
                                                                class="custom-select mr-sm-2"
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
                                                                <option value="active">
                                                                    {{ $t("general.Active") }}
                                                                </option>
                                                                <option value="inactive">
                                                                    {{ $t("general.Inactive") }}
                                                                </option>
                                                            </select>
                                                            <template v-if="errors.is_active">
                                                                <ErrorMessage
                                                                    v-for="(errorMessage, index) in errors.is_active"
                                                                    :key="index"
                                                                >{{ errorMessage }}
                                                                </ErrorMessage
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

<script>
import Layout from "../../layouts/main";
import PageHeader from "../../../components/Page-header";
import adminApi from "../../../api/adminAxios";
import Switches from "vue-switches";
import { required, minLength, maxLength ,integer, decimal } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import ErrorMessage from "../../../components/widgets/errorMessage";
import loader from "../../../components/loader";
import alphaArabic  from "../../../helper/alphaArabic";
import alphaEnglish  from "../../../helper/alphaEnglish";
import {dynamicSortNumber, dynamicSortString} from "../../../helper/tableSort";

/**
 * Advanced Table component
 */
const imgValid = (value) => ['image/png','image/jpg','image/jpeg','image/gif'].includes(value);

export default {
    page: {
        title: "Currency",
        meta: [{ name: "description", content: 'Currency' }],
    },
    components: {
        Layout,
        PageHeader,
        Switches,
        ErrorMessage,
        loader
    },
    data() {
        return {
            per_page: 50,
            search: '',
            debounce: {},
            currenciesPagination: {},
            currencies: [],
            isLoader: false,
            create: {
                name: '',
                name_e: '',
                symbol: '',
                symbol_e: '',
                code:'',
                code_e: '',
                fraction:'',
                fraction_e: '',
                fraction_no: 0,
                is_default: 0 ,
                is_active: 1
            },
            edit: {
                name: '',
                name_e: '',
                symbol: '',
                symbol_e: '',
                code:'',
                code_e: '',
                fraction:'',
                fraction_e: '',
                fraction_no: 0,
                is_default: 0,
                is_active: 1
            },
            errors: {},
            isCheckAll: false,
            checkAll: [],
            current_page: 1,
            image: '',
            filterSetting: ['name','name_e','code','code_e','fraction','fraction_e']
        }
    },
    validations: {
        create: {
            name: {required,minLength: minLength(2),maxLength: maxLength(100),alphaArabic},
            name_e: {required,minLength: minLength(2),maxLength: maxLength(100),alphaEnglish},
            symbol: {required,minLength: minLength(2),maxLength: maxLength(100),alphaArabic},
            symbol_e: {required,minLength: minLength(2),maxLength: maxLength(100),alphaEnglish},
            code: {required,minLength: minLength(3),maxLength: maxLength(15),alphaArabic},
            code_e: {required,minLength: minLength(3),maxLength: maxLength(15),alphaEnglish},
            fraction: {required,minLength: minLength(3),maxLength: maxLength(15),alphaArabic},
            fraction_e: {required,minLength: minLength(3),maxLength: maxLength(100),alphaEnglish},
            fraction_no: {required,decimal},
            is_default: {required,integer},
            is_active: {required,integer},
        },
        edit: {
            name: {required,minLength: minLength(2),maxLength: maxLength(100),alphaArabic},
            name_e: {required,minLength: minLength(2),maxLength: maxLength(100),alphaEnglish},
            symbol: {required,minLength: minLength(2),maxLength: maxLength(100),alphaArabic},
            symbol_e: {required,minLength: minLength(2),maxLength: maxLength(100),alphaEnglish},
            code: {required,minLength: minLength(3),maxLength: maxLength(15),alphaArabic},
            code_e: {required,minLength: minLength(3),maxLength: maxLength(15),alphaEnglish},
            fraction: {required,minLength: minLength(3),maxLength: maxLength(15),alphaArabic},
            fraction_e: {required,minLength: minLength(3),maxLength: maxLength(15),alphaEnglish},
            fraction_no: {required,decimal},
            is_default: {required,integer},
            is_active: {required,integer},
        },
    },
    watch: {
        /**
         * watch per_page
         */
        per_page(after,befour){
            this.getData();
        },
        /**
         * watch search
         */
        search(after,befour){
            clearTimeout(this.debounce);
            this.debounce = setTimeout(() => {
                this.getData();
            }, 400);
        },
        /**
         * watch check All table
         */
        isCheckAll(after,befour){
            if(after){
                this.currencies.forEach(el => {
                    if(!this.checkAll.includes(el.id)){
                        this.checkAll.push(el.id);
                    }
                });
            }else{
                this.checkAll = [];
            }
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        /**
         *  start get Data currencies && pagination
         */
        getData(page = 1){
            this.isLoader = true;

            adminApi.get(`/currencies?page=${page}&per_page=${this.per_page}`)
                .then((res) => {
                    let l = res.data;
                    this.currencies = l.data;
                    this.currenciesPagination = l.pagination;
                    this.current_page = l.pagination.current_page;
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: `${this.$t('general.Error')}`,
                        text: `${this.$t('general.Thereisanerrorinthesystem')}`,
                    });
                })
                .finally(() => {
                    this.isLoader = false;
                });
        },
        getDataCurrentPage(page = 1){
            if(this.current_page <= this.currenciesPagination.last_page && this.current_page != this.currenciesPagination.current_page && this.current_page){
                this.isLoader = true;

                adminApi.get(`/currencies?page=${page}&per_page=${this.per_page}&search=${this.search}&columns=${this.filterSetting}`)
                    .then((res) => {
                        let l = res.data;
                        this.currencies = l.data;
                        this.currenciesPagination = l.pagination;
                        this.current_page = l.pagination.current_page;
                    })
                    .catch((err) => {
                        Swal.fire({
                            icon: 'error',
                            title: `${this.$t('general.Error')}`,
                            text: `${this.$t('general.Thereisanerrorinthesystem')}`,
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
                title: `${this.$t('general.Areyousure')}`,
                text: `${this.$t('general.Youwontbeabletoreverthis')}`,
                type: "warning",
                showCancelButton: true,
                confirmButtonText: `${this.$t('general.Yesdeleteit')}`,
                cancelButtonText: `${this.$t('general.Nocancel')}`,
                confirmButtonClass: "btn btn-success mt-2",
                cancelButtonClass: "btn btn-danger ml-2 mt-2",
                buttonsStyling: false,
            }).then((result) => {
                if (result.value) {

                    this.isLoader = true;

                    adminApi.delete(`/currencies/${id}`)
                        .then((res) => {
                            this.getData();
                            this.checkAll = [];
                            Swal.fire({
                                icon: 'success',
                                title: `${this.$t('general.Deleted')}`,
                                text: `${this.$t('general.Yourrowhasbeendeleted')}`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        })
                        .catch((err) => {
                            Swal.fire({
                                icon: 'error',
                                title: `${this.$t('general.Error')}`,
                                text: `${this.$t('general.Thereisanerrorinthesystem')}`,
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
        resetModalHidden(){
            this.create =  {
                name: '',
                name_e: '',
                symbol: '',
                symbol_e: '',
                code:'',
                code_e: '',
                fraction:'',
                fraction_e: '',
                fraction_no: 0,
                is_default: 0,
                is_active: 1
            };
            this.$nextTick(() => { this.$v.$reset() });
            this.errors = {};
            this.$bvModal.hide(`create`);
        },
        /**
         *  hidden Modal (create)
         */
        resetModal(){
            this.create = {
                name: '',
                name_e: '',
                symbol: '',
                symbol_e: '',
                code:'',
                code_e: '',
                fraction:'',
                fraction_e: '',
                fraction_no: 0,
                is_default: 0,
                is_active: 1
            };
            this.$nextTick(() => { this.$v.$reset() });
            this.errors = {};
        },
        /**
         *  create countrie
         */

        AddSubmit(){

            this.$v.create.$touch();

            if (this.$v.create.$invalid) {
                return;
            } else {
                this.isLoader = true;
                this.errors = {};

                adminApi.post(`/currencies`,this.create)
                    .then((res) => {
                        this.$bvModal.hide(`create`);
                        this.getData();
                        setTimeout(() => {
                            Swal.fire({
                                icon: 'success',
                                text: `${this.$t('general.Addedsuccessfully')}`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        },500);
                    })
                    .catch((err) => {
                        if(err.response.data){
                            this.errors = err.response.data.errors;
                        }else {
                            Swal.fire({
                                icon: 'error',
                                title: `${this.$t('general.Error')}`,
                                text: `${this.$t('general.Thereisanerrorinthesystem')}`,
                            });
                        }
                    }).finally(() => {
                        this.isLoader = false;
                    });
            }

        },
        /**
         *  edit countrie
         */
        editSubmit(id){
            this.$v.edit.$touch();

            if (this.$v.edit.$invalid) {
                return;
            } else {
                this.isLoader = true;
                this.errors = {};

                adminApi.put(`/currencies/${id}`,this.edit)
                    .then((res) => {
                        this.$bvModal.hide(`modal-edit-${id}`);
                        this.getData();
                        setTimeout(() => {
                            Swal.fire({
                                icon: 'success',
                                text: `${this.$t('general.Editsuccessfully')}`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        },500);
                    })
                    .catch((err) => {
                        if(err.response.data){
                            this.errors = err.response.data.errors;
                        }else {
                            Swal.fire({
                                icon: 'error',
                                title: `${this.$t('general.Error')}`,
                                text: `${this.$t('general.Thereisanerrorinthesystem')}`,
                            });
                        }
                    }).finally(() => {
                        this.isLoader = false;
                    });
            }
        },
        /**
         *   show Modal (edit)
         */
        resetModalEdit(id){
            let currency = this.currencies.find(e => id == e.id );
            this.edit.name = currency.name;
            this.edit.name_e = currency.name_e;
            this.edit.symbol = currency.symbol;
            this.edit.symbol_e = currency.symbol_e;
            this.edit.code = currency.code;
            this.edit.code_e = currency.code_e;
            this.edit.fraction = currency.fraction;
            this.edit.fraction_e = currency.fraction_e;
            this.edit.fraction_no = currency.fraction_no;
            this.edit.is_active = currency.is_active;
            this.edit.is_default = currency.is_default;
            this.errors = {};
        },
        /**
         *  hidden Modal (edit)
         */
        resetModalHiddenEdit(id){
            this.errors = {};
            this.edit = {
                name: '',
                name_e: '',
                symbol: '',
                symbol_e: '',
                code:'',
                code_e: '',
                fraction:'',
                fraction_e: '',
                fraction_no: 0,
                is_default: 0,
                is_active: 1
            };
        },
        /**
         *  start  dynamicSortString
         */
        sortString(value){ return dynamicSortString(value);},
        SortNumber(value){return dynamicSortNumber(value);},
        /**
         *  start  ckeckRow
         */
        checkRow(id){
            if(!this.checkAll.includes(id)) {
                this.checkAll.push(id);
            }else {
                let index = this.checkAll.indexOf(id);
                this.checkAll.splice(index,1);
            }
        },
        /**
         *  end  ckeckRow
         */
        moveInput(tag,c,index){
            document.querySelector(`${tag}[data-${c}='${index}']`).focus()
        }
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
                            <h4 class="header-title"> {{ $t('currency.currenciesTable') }}</h4>
                            <div class="col-xs-10 col-md-9 col-lg-7" style="font-weight: 500">

                                <div class="d-inline-block" style="width: 22.2%;">
                                    <!-- Basic dropdown -->
                                    <b-dropdown variant="primary" :text="$t('general.searchSetting')" ref="dropdown" class="btn-block setting-search">
                                        <b-form-checkbox v-model="filterSetting" value="name" class="mb-1">{{ $t('general.Name') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="name_e" class="mb-1">{{ $t('general.Name_en') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="code" class="mb-1">{{ $t('general.code_e') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="code_e" class="mb-1">{{ $t('general.code_e') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="fraction" class="mb-1">{{ $t('general.fraction') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="fraction_e" class="mb-1">{{ $t('general.fraction_e') }}</b-form-checkbox>
                                    </b-dropdown>
                                    <!-- Basic dropdown -->
                                </div>

                                <div class="d-inline-block position-relative" style="width: 77%;">
                                    <span
                                        :class="['search-custom position-absolute',$i18n.locale == 'ar'?'search-custom-ar':'']"
                                    >
                                        <i class="fe-search"></i>
                                    </span>
                                    <input
                                        class="form-control"
                                        style="display:block;width:93%;padding-top: 3px;"
                                        type="text"
                                        v-model.trim="search"
                                        :placeholder="`${$t('general.Search')}...`"
                                    >
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
                                    {{ $t('general.Create') }}
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
                                        @click.prevent="deletecountry(checkAll)"
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
                                class="col-xs-10 col-md-9 col-lg-7 d-flex align-items-center  justify-content-end"
                            >
                                <div class="d-fex">
                                    <!-- start filter and setting -->
                                    <div class="d-inline-block">
                                        <b-button
                                            class="mx-1 custom-btn-background"
                                        >
                                            {{ $t('general.filter') }}
                                            <i class="fas fa-filter"></i>
                                        </b-button>
                                        <b-button
                                            class="mx-1 custom-btn-background"
                                        >
                                            {{ $t('general.group') }}
                                            <i class="fe-menu"></i>
                                        </b-button>
                                        <b-button
                                            class="mx-1 custom-btn-background"
                                        >
                                            {{ $t('general.setting') }}
                                            <i class="fe-settings"></i>
                                        </b-button>
                                    </div>
                                    <!-- end filter and setting -->

                                    <!-- start Pagination -->
                                    <div class="d-inline-flex align-items-center pagination-custom">
                                        <div class="d-inline-block" style="font-size:13px;">
                                            {{ currenciesPagination.from }}-{{ currenciesPagination.to }} / {{ currenciesPagination.total }}
                                        </div>
                                        <div class="d-inline-block">
                                            <a
                                                href="javascript:void(0)"
                                                :style="{'pointer-events':currenciesPagination.current_page == 1 ? 'none': ''}"
                                                @click.prevent="getData(currenciesPagination.current_page - 1)"
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
                                                :style="{'pointer-events':currenciesPagination.last_page == currenciesPagination.current_page ? 'none': ''}"
                                                @click.prevent="getData(currenciesPagination.current_page + 1)"
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
                            :title="$t('currency.addcurrency')"
                            title-class="font-18"
                            size="lg"
                            body-class="p-4 "
                            :hide-footer="true"
                            @show="resetModal"
                            @hidden="resetModalHidden"
                        >
                            <form>
                                <div class="row">
                                    <div class="col-md-6 direction" dir="rtl">
                                        <div class="form-group">
                                            <label for="field-1" class="control-label">
                                                {{ $t('general.Name') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                data-create="1"
                                                @keypress.enter="moveInput('input','create',2)"
                                                v-model="$v.create.name.$model"
                                                :class="{
                                                'is-invalid':$v.create.name.$error || errors.name,
                                                'is-valid':!$v.create.name.$invalid && !errors.name
                                            }"
                                                id="field-1"
                                            />
                                            <div v-if="!$v.create.name.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.name.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.name.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.name.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.name.alphaArabic" class="invalid-feedback">{{ $t('general.alphaArabic') }}</div>
                                            <template v-if="errors.name">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.name" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6 direction-ltr" dir="ltr">
                                        <div class="form-group">
                                            <label for="field-2" class="control-label">
                                                {{ $t('general.Name_en') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                data-create="2"
                                                @keypress.enter="moveInput('input','create',3)"
                                                v-model="$v.create.name_e.$model"
                                                :class="{
                                                'is-invalid':$v.create.name_e.$error || errors.name_e,
                                                'is-valid':!$v.create.name_e.$invalid && !errors.name_e
                                            }"
                                                id="field-2"
                                            />
                                            <div v-if="!$v.create.name_e.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.name_e.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.name_e.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.name_e.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.name_e.alphaEnglish" class="invalid-feedback">{{ $t('general.alphaEnglish') }}</div>
                                            <template v-if="errors.name_e">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.name_e" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6 direction" dir="rtl">
                                        <div class="form-group">
                                            <label for="field-45" class="control-label">
                                                {{ $t('general.symbol') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                data-create="3"
                                                @keypress.enter="moveInput('input','create',4)"
                                                v-model="$v.create.symbol.$model"
                                                :class="{
                                                'is-invalid':$v.create.symbol.$error || errors.symbol,
                                                'is-valid':!$v.create.symbol.$invalid && !errors.symbol
                                            }"
                                                id="field-45"
                                            />
                                            <div v-if="!$v.create.symbol.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.symbol.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.symbol.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.symbol.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.symbol.alphaArabic" class="invalid-feedback">{{ $t('general.alphaArabic') }}</div>
                                            <template v-if="errors.symbol">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.symbol" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6 direction-ltr" dir="ltr">
                                        <div class="form-group">
                                            <label for="field-33" class="control-label">
                                                {{ $t('general.symbol_e') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                data-create="4"
                                                @keypress.enter="moveInput('input','create',5)"
                                                v-model="$v.create.symbol_e.$model"
                                                :class="{
                                                'is-invalid':$v.create.symbol_e.$error || errors.symbol_e,
                                                'is-valid':!$v.create.symbol_e.$invalid && !errors.symbol_e
                                            }"
                                                id="field-33"
                                            />
                                            <div v-if="!$v.create.symbol_e.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.symbol_e.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.symbol_e.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.symbol_e.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.symbol_e.alphaEnglish" class="invalid-feedback">{{ $t('general.alphaEnglish') }}</div>
                                            <template v-if="errors.symbol_e">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.symbol_e" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6 direction" dir="rtl">
                                        <div class="form-group">
                                            <label for="field-3" class="control-label">
                                                {{ $t('general.code') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                data-create="5"
                                                @keypress.enter="moveInput('input','create',6)"
                                                v-model="$v.create.code.$model"
                                                :class="{
                                                'is-invalid':$v.create.code.$error || errors.code,
                                                'is-valid':!$v.create.code.$invalid && !errors.code
                                            }"
                                                id="field-3"
                                            />
                                            <div v-if="!$v.create.code.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.code.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.code.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.code.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.code.alphaArabic" class="invalid-feedback">{{ $t('general.alphaArabic') }}</div>
                                            <template v-if="errors.code">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.code" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6 direction-ltr" dir="ltr">
                                        <div class="form-group">
                                            <label for="field-4" class="control-label">
                                                {{ $t('general.code_e') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                data-create="6"
                                                @keypress.enter="moveInput('input','create',7)"
                                                v-model="$v.create.code_e.$model"
                                                :class="{
                                                'is-invalid':$v.create.code_e.$error || errors.code_e,
                                                'is-valid':!$v.create.code_e.$invalid && !errors.code_e
                                            }" id="field-4"
                                            />
                                            <div v-if="!$v.create.code_e.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.code_e.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.code_e.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.code_e.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.code_e.alphaEnglish" class="invalid-feedback">{{ $t('general.alphaEnglish') }}</div>
                                            <template v-if="errors.code_e">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.code_e" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-4 direction" dir="rtl">
                                        <div class="form-group">
                                            <label for="field-5" class="control-label">
                                                {{ $t('general.fraction') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                data-create="7"
                                                @keypress.enter="moveInput('input','create',8)"
                                                v-model="$v.create.fraction.$model"
                                                :class="{
                                                'is-invalid':$v.create.fraction.$error || errors.fraction,
                                                'is-valid':!$v.create.fraction.$invalid && !errors.fraction
                                            }"
                                                id="field-5"
                                            />
                                            <div v-if="!$v.create.fraction.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.fraction.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.fraction.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.fraction.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.fraction.alphaArabic" class="invalid-feedback">{{ $t('general.alphaArabic') }}</div>
                                            <template v-if="errors.fraction">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.fraction" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-4 direction-ltr" dir="ltr">
                                        <div class="form-group">
                                            <label for="field-6" class="control-label">
                                                {{ $t('general.fraction_e') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                data-create="8"
                                                @keypress.enter="moveInput('input','create',9)"
                                                v-model="$v.create.fraction_e.$model"
                                                :class="{
                                                'is-invalid':$v.create.fraction_e.$error || errors.fraction_e,
                                                'is-valid':!$v.create.fraction_e.$invalid && !errors.fraction_e
                                            }" id="field-6"
                                            />
                                            <div v-if="!$v.create.fraction_e.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.fraction_e.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.fraction_e.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.fraction_e.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.fraction_e.alphaEnglish" class="invalid-feedback">{{ $t('general.alphaEnglish') }}</div>
                                            <template v-if="errors.fraction_e">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.fraction_e" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="field-7" class="control-label">
                                                {{ $t('general.fraction_no') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                data-create="9"
                                                step="0.1"
                                                @keypress.enter="moveInput('select','create',10)"
                                                v-model="$v.create.fraction_no.$model"
                                                :class="{
                                                'is-invalid':$v.create.fraction_no.$error || errors.fraction_no,
                                                'is-valid':!$v.create.fraction_no.$invalid && !errors.fraction_no
                                            }" id="field-7"
                                            />
                                            <template v-if="errors.fraction_no">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.fraction_no" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class=" mr-2" for="field-11">
                                                {{ $t('general.is_default') }}
                                            </label>
                                            <select
                                                class="custom-select  mr-sm-2"
                                                id="field-11"
                                                data-create="10"
                                                @keypress.enter.prevent="moveInput('select','create',11)"
                                                v-model="$v.create.is_default.$model"
                                                :class="{
                                                'is-invalid':$v.create.is_default.$error || errors.is_default,
                                                'is-valid':!$v.create.is_default.$invalid && !errors.is_default
                                            }"
                                            >
                                                <option value="" selected>{{ $t('general.Choose') }}...</option>
                                                <option value="1">{{ $t('general.Active') }}</option>
                                                <option value="0">{{ $t('general.Inactive') }}</option>
                                            </select>
                                            <template v-if="errors.is_default">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.is_default" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class=" mr-2" for="inlineFormCustomSelectPref">
                                                {{ $t('general.Status') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <select
                                                class="custom-select mr-sm-2"
                                                id="inlineFormCustomSelectPref"
                                                data-create="11"
                                                @keypress.enter.prevent="moveInput('input','create',1)"
                                                v-model="$v.create.is_active.$model"
                                                :class="{
                                                'is-invalid':$v.create.is_active.$error || errors.is_active,
                                                'is-valid':!$v.create.is_active.$invalid && !errors.is_active
                                            }"
                                            >
                                                <option value="" selected>{{ $t('general.Choose') }}...</option>
                                                <option value="1">{{ $t('general.Active') }}</option>
                                                <option value="0">{{ $t('general.Inactive') }}</option>
                                            </select>
                                            <template v-if="errors.is_active">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.is_active" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-1 d-flex justify-content-end">
                                    <!-- Emulate built in modal footer ok and cancel button actions -->
                                    <b-button
                                        variant="success"
                                        type="button" class="mx-1"
                                        v-if="!isLoader"
                                        @click.prevent="AddSubmit"
                                    >
                                        {{ $t('general.Add') }}
                                    </b-button>

                                    <b-button variant="success" class="mx-1" disabled v-else>
                                        <b-spinner small></b-spinner>
                                        <span class="sr-only">{{ $t('login.Loading') }}...</span>
                                    </b-button>

                                    <b-button variant="secondary" type="button" @click.prevent="resetModalHidden">
                                        {{ $t('general.Cancel') }}
                                    </b-button>
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
                                    <th scope="col" style="width: 0;">
                                        <div class="form-check custom-control">
                                            <input
                                                class="form-check-input"
                                                type="checkbox" v-model="isCheckAll"
                                                style="width: 17px;height: 17px;"
                                            >
                                        </div>
                                    </th>
                                    <th>
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.Name') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="currencies.sort(sortString('name'))"></i>
                                                <i class="fas fa-arrow-down" @click="currencies.sort(sortString('-name'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.Name_en') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="currencies.sort(sortString('name_e'))"></i>
                                                <i class="fas fa-arrow-down" @click="currencies.sort(sortString('-name_e'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.code') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="currencies.sort(sortString('code'))"></i>
                                                <i class="fas fa-arrow-down" @click="currencies.sort(sortString('-code'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.code_e') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="currencies.sort(sortString('code_e'))"></i>
                                                <i class="fas fa-arrow-down" @click="currencies.sort(sortString('-code_e'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.fraction') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="currencies.sort(sortString('fraction'))"></i>
                                                <i class="fas fa-arrow-down" @click="currencies.sort(sortString('-fraction'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.fraction_e') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="currencies.sort(sortString('fraction_e'))"></i>
                                                <i class="fas fa-arrow-down" @click="currencies.sort(sortString('-fraction_e'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.fraction_no') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="currencies.sort(SortNumber('fraction_no'))"></i>
                                                <i class="fas fa-arrow-down" @click="currencies.sort(SortNumber('-fraction_no'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="d-flex justify-content-center">
                                            {{ $t('general.is_default') }}
                                        </div>
                                    </th>
                                    <th>
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.Status') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="currencies.sort(sortString('name_e'))"></i>
                                                <i class="fas fa-arrow-down" @click="currencies.sort(sortString('-name_e'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th>
                                        {{ $t('general.Action') }}
                                    </th>
                                    <th><i class="fas fa-ellipsis-v"></i></th>
                                </tr>
                                </thead>
                                <tbody v-if="currencies.length > 0">
                                  <tr
                                      @click.capture="checkRow(data.id)"
                                      @dblclick.prevent="$bvModal.show(`modal-edit-${data.id}`)"
                                      v-for="(data,index) in currencies"
                                      :key="data.id"
                                      class="body-tr-custom"
                                  >
                                    <td>
                                        <div class="form-check custom-control" style="min-height: 1.9em;">
                                            <input
                                                style="width: 17px;height: 17px;"
                                                class="form-check-input"
                                                type="checkbox"
                                                v-model="checkAll"
                                                :value="data.id"
                                            >
                                        </div>
                                    </td>
                                    <td>
                                        <h5 class="m-0 font-weight-normal">{{ data.name }}</h5>
                                    </td>
                                    <td>
                                        <h5 class="m-0 font-weight-normal">{{ data.name_e }}</h5>
                                    </td>
                                      <td>{{ data.code }}</td>
                                      <td>{{ data.code_e }}</td>
                                      <td>{{ data.fraction }}</td>
                                      <td>{{ data.fraction_e }}</td>
                                      <td>{{ data.fraction_no }}</td>
                                      <td>
                                        <span :class="[
                                            data.is_default == 'active' ?
                                            'text-success':
                                            'text-danger',
                                            'badge'
                                            ]"
                                        >
                                            {{ data.is_default ? `${$t('general.Active')}`:`${$t('general.Inactive')}`}}
                                        </span>
                                      </td>
                                      <td>
                                        <span :class="[
                                            data.is_active ?
                                            'text-success':
                                            'text-danger',
                                            'badge'
                                            ]"
                                        >
                                            {{ data.is_active? `${$t('general.Active')}`:`${$t('general.Inactive')}`}}
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
                                                {{ $t('general.commands') }}
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
                                                        <span>{{ $t('general.edit') }}</span>
                                                        <i class="mdi mdi-square-edit-outline text-info"></i>
                                                    </div>
                                                </a>
                                                <a
                                                   class="dropdown-item text-black"
                                                   href="#"
                                                   @click.prevent="deleteCountry(data.id)"
                                                >
                                                    <div class="d-flex justify-content-between align-items-center text-black">
                                                        <span>{{ $t('general.delete') }}</span>
                                                        <i class="fas fa-times text-danger"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                        <!--  edit   -->
                                        <b-modal
                                            :id="`modal-edit-${data.id}`"
                                            :title="$t('currency.editcurrency')"
                                            title-class="font-18"
                                            body-class="p-4"
                                            size="lg"
                                            :ref="`edit-${data.id}`"
                                            :hide-footer="true"
                                            @show="resetModalEdit(data.id)"
                                            @hidden="resetModalHiddenEdit(data.id)"
                                        >
                                            <form>
                                                <div class="row">
                                                    <div class="col-md-6 direction" dir="rtl">
                                                        <div class="form-group">
                                                            <label for="edit-1" class="control-label">
                                                                {{ $t('general.Name') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                data-edit="1"
                                                                @keypress.enter="moveInput('input','edit',2)"
                                                                v-model="$v.edit.name.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.name.$error || errors.name,
                                                                    'is-valid':!$v.edit.name.$invalid && !errors.name
                                                                }"
                                                                id="edit-1"
                                                            />
                                                            <div v-if="!$v.edit.name.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.name.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.name.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.name.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.name.alphaArabic" class="invalid-feedback">{{ $t('general.alphaArabic') }}</div>
                                                            <template v-if="errors.name">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.name" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 direction-ltr" dir="ltr">
                                                        <div class="form-group">
                                                            <label for="edit-2" class="control-label">
                                                                {{ $t('general.Name_en') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                data-edit="2"
                                                                @keypress.enter="moveInput('input','edit',3)"
                                                                v-model="$v.edit.name_e.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.name_e.$error || errors.name_e,
                                                                    'is-valid':!$v.edit.name_e.$invalid && !errors.name_e
                                                                }"
                                                                id="edit-2"
                                                            />
                                                            <div v-if="!$v.edit.name_e.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.name_e.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.name_e.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.name_e.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.name_e.alphaEnglish" class="invalid-feedback">{{ $t('general.alphaEnglish') }}</div>
                                                            <template v-if="errors.name_e">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.name_e" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 direction" dir="rtl">
                                                        <div class="form-group">
                                                            <label for="edit-45" class="control-label">
                                                                {{ $t('general.symbol') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                data-edit="3"
                                                                @keypress.enter="moveInput('input','edit',4)"
                                                                v-model="$v.edit.symbol.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.symbol.$error || errors.symbol,
                                                                    'is-valid':!$v.edit.symbol.$invalid && !errors.symbol
                                                                }"
                                                                id="edit-45"
                                                            />
                                                            <div v-if="!$v.edit.symbol.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.symbol.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.symbol.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.symbol.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.symbol.alphaArabic" class="invalid-feedback">{{ $t('general.alphaArabic') }}</div>
                                                            <template v-if="errors.symbol">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.symbol" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 direction-ltr" dir="ltr">
                                                        <div class="form-group">
                                                            <label for="edit-33" class="control-label">
                                                                {{ $t('general.symbol_e') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                data-edit="4"
                                                                @keypress.enter="moveInput('input','edit',5)"
                                                                v-model="$v.edit.symbol_e.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.symbol_e.$error || errors.symbol_e,
                                                                    'is-valid':!$v.edit.symbol_e.$invalid && !errors.symbol_e
                                                                }"
                                                                id="edit-33"
                                                            />
                                                            <div v-if="!$v.edit.symbol_e.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.symbol_e.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.symbol_e.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.symbol_e.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.symbol_e.alphaEnglish" class="invalid-feedback">{{ $t('general.alphaEnglish') }}</div>
                                                            <template v-if="errors.symbol_e">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.symbol_e" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 direction" dir="rtl">
                                                        <div class="form-group">
                                                            <label for="edit-3" class="control-label">
                                                                {{ $t('general.code') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                data-edit="5"
                                                                @keypress.enter="moveInput('input','edit',6)"
                                                                v-model="$v.edit.code.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.code.$error || errors.code,
                                                                    'is-valid':!$v.edit.code.$invalid && !errors.code
                                                                }"
                                                                id="edit-3"
                                                            />
                                                            <div v-if="!$v.edit.code.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.code.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.code.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.code.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.code.alphaArabic" class="invalid-feedback">{{ $t('general.alphaArabic') }}</div>
                                                            <template v-if="errors.code">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.code" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 direction-ltr" dir="ltr">
                                                        <div class="form-group">
                                                            <label for="edit-4" class="control-label">
                                                                {{ $t('general.code_e') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                data-edit="6"
                                                                @keypress.enter="moveInput('input','edit',7)"
                                                                v-model="$v.edit.code_e.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.code_e.$error || errors.code_e,
                                                                    'is-valid':!$v.edit.code_e.$invalid && !errors.code_e
                                                                    }" id="edit-4"
                                                                />
                                                            <div v-if="!$v.edit.code_e.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.code_e.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.code_e.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.code_e.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.code_e.alphaEnglish" class="invalid-feedback">{{ $t('general.alphaEnglish') }}</div>
                                                            <template v-if="errors.code_e">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.code_e" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 direction" dir="rtl">
                                                        <div class="form-group">
                                                            <label for="edit-5" class="control-label">
                                                                {{ $t('general.fraction') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                data-edit="7"
                                                                @keypress.enter="moveInput('input','edit',8)"
                                                                v-model="$v.edit.fraction.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.fraction.$error || errors.fraction,
                                                                    'is-valid':!$v.edit.fraction.$invalid && !errors.fraction
                                                                }"
                                                                id="edit-5"
                                                            />
                                                            <div v-if="!$v.edit.fraction.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.fraction.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.fraction.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.fraction.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.fraction.alphaArabic" class="invalid-feedback">{{ $t('general.alphaArabic') }}</div>
                                                            <template v-if="errors.fraction">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.fraction" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 direction-ltr" dir="ltr">
                                                        <div class="form-group">
                                                            <label for="field-6" class="control-label">
                                                                {{ $t('general.code_e') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                data-edit="8"
                                                                @keypress.enter="moveInput('input','edit',9)"
                                                                v-model="$v.edit.fraction_e.$model"
                                                                :class="{
                                                                'is-invalid':$v.edit.fraction_e.$error || errors.fraction_e,
                                                                'is-valid':!$v.edit.fraction_e.$invalid && !errors.fraction_e
                                                            }" id="edit-6"
                                                            />
                                                            <div v-if="!$v.edit.fraction_e.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.fraction_e.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.fraction_e.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.fraction_e.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.fraction_e.alphaEnglish" class="invalid-feedback">{{ $t('general.alphaEnglish') }}</div>
                                                            <template v-if="errors.fraction_e">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.fraction_e" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label for="edit-7" class="control-label">
                                                                {{ $t('general.fraction_no') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="number"
                                                                class="form-control"
                                                                step="0.1"
                                                                data-edit="9"
                                                                @keypress.enter="moveInput('select','edit',10)"
                                                                v-model="$v.edit.fraction_no.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.fraction_no.$error || errors.fraction_no,
                                                                    'is-valid':!$v.edit.fraction_no.$invalid && !errors.fraction_no
                                                                }" id="edit-7"
                                                            />
                                                            <template v-if="errors.fraction_no">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.fraction_no" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label class=" mr-2" for="edit-11">
                                                                {{ $t('general.is_default') }}
                                                            </label>
                                                            <select
                                                                class="custom-select  mr-sm-2"
                                                                id="edit-11"
                                                                data-edit="10"
                                                                @keypress.enter.prevent="moveInput('select','edit',11)"
                                                                v-model="$v.edit.is_default.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.is_default.$error || errors.is_default,
                                                                    'is-valid':!$v.edit.is_default.$invalid && !errors.is_default
                                                                }"
                                                            >
                                                                <option value="" selected>{{ $t('general.Choose') }}...</option>
                                                                <option value="1">{{ $t('general.Active') }}</option>
                                                                <option value="0">{{ $t('general.Inactive') }}</option>
                                                            </select>
                                                            <template v-if="errors.is_default">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.is_default" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label class=" mr-2" for="edit-9">
                                                                {{ $t('general.Status') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <select
                                                                class="custom-select mr-sm-2"
                                                                id="edit-9"
                                                                data-edit="11"
                                                                @keypress.enter.prevent="moveInput('input','edit',1)"
                                                                v-model="$v.edit.is_active.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.is_active.$error || errors.is_active,
                                                                    'is-valid':!$v.edit.is_active.$invalid && !errors.is_active
                                                                }"
                                                            >
                                                                <option value="" selected>{{ $t('general.Choose') }}...</option>
                                                                <option value="1">{{ $t('general.Active') }}</option>
                                                                <option value="0">{{ $t('general.Inactive') }}</option>
                                                            </select>
                                                            <template v-if="errors.is_active">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.is_active" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mt-1 d-flex justify-content-end">
                                                    <!-- Emulate built in modal footer ok and cancel button actions -->
                                                    <b-button
                                                        variant="success" type="button"
                                                        class="mx-1" v-if="!isLoader"
                                                        @click.prevent="editSubmit(data.id)"
                                                    >
                                                        {{ $t('general.Edit') }}
                                                    </b-button>

                                                    <b-button variant="success" class="mx-1" disabled v-else>
                                                        <b-spinner small></b-spinner>
                                                        <span class="sr-only">{{ $t('login.Loading') }}...</span>
                                                    </b-button>

                                                    <b-button
                                                        variant="secondary"
                                                        type="button"
                                                        @click.prevent="$bvModal.hide(`modal-edit-${data.id}`)"
                                                    >
                                                        {{ $t('general.Cancel') }}
                                                    </b-button>
                                                </div>
                                            </form>
                                        </b-modal>
                                        <!--  /edit   -->
                                    </td>
                                      <td>
                                        <i class="fe-info" style="font-size: 22px;"></i>
                                    </td>
                                </tr>
                                </tbody>
                                <tbody v-else>
                                <tr>
                                    <th class="text-center" colspan="11">{{ $t('general.notDataFound') }}</th>
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

<script>
import Layout from "../../layouts/main";
import PageHeader from "../../../components/Page-header";
import adminApi from "../../../api/adminAxios";
import Switches from "vue-switches";
import { required, minLength, maxLength ,integer } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import ErrorMessage from "../../../components/widgets/errorMessage";
import loader from "../../../components/loader";
import alphaArabic  from "../../../helper/alphaArabic";
import alphaEnglish  from "../../../helper/alphaEnglish";
import { dynamicSortString }   from "../../../helper/tableSort";
import vue2Dropzone from "vue2-dropzone";

/**
 * Advanced Table component
 */

export default {
    page: {
        title: "Country",
        meta: [{ name: "description", content: 'Country' }],
    },
    components: {
        Layout,
        PageHeader,
        Switches,
        ErrorMessage,
        loader,
        vueDropzone: vue2Dropzone
    },
    data() {
        return {
            per_page: 50,
            search: '',
            debounce: {},
            countriesPagination: {},
            countries: [],
            isLoader: false,
            create: {
                name: '',
                name_e: '',
                long_name:'',
                long_name_e: '',
                short_code: '',
                phone_key: '',
                national_id_length: null,
                is_default: 0,
                is_active: 'active',
                media: null
            },
            edit: {
                name: '',
                name_e: '',
                long_name:'',
                long_name_e: '',
                short_code: '',
                phone_key: '',
                national_id_length: null,
                is_default: 0,
                is_active: 'active',
                media: null,
            },
            errors: {},
            isCheckAll: false,
            checkAll: [],
            current_page: 1,
            changeImage: false,
            dropzoneOptions: {
                url: `${process.env.MIX_APP_URL}api/media`,
                maxFilesize: 5,
                acceptedFiles: ".jpeg,.jpg,.png,.gif",
                parallelUploads: 1,
                maxFiles: 10,
                autoProcessQueue: false,
                headers: {
                    "My-Awesome-Header": "header value",
                },
            },
            setting: {
                name: true,
                name_e: true,
                long_name: true,
                long_name_e: true,
                short_code: true,
                phone_key: true,
                national_id_length: true,
                is_default: true,
                is_active: true
            },
            filterSetting: ['name','name_e','long_name','long_name_e','short_code','phone_key','national_id_length']
        }
    },
    validations: {
        create: {
            name: {required,minLength: minLength(2),maxLength: maxLength(100),alphaArabic},
            name_e: {required,minLength: minLength(2),maxLength: maxLength(100),alphaEnglish},
            long_name: {required,minLength: minLength(2),maxLength: maxLength(100),alphaArabic},
            long_name_e: {required,minLength: minLength(2),maxLength: maxLength(100),alphaEnglish},
            short_code: {required,minLength: minLength(1),maxLength: maxLength(10)},
            phone_key: {required,minLength: minLength(1),maxLength: maxLength(10)},
            is_default: {required,integer},
            national_id_length: {required,minLength: minLength(1),maxLength: maxLength(20)},
            is_active: {required},
        },
        edit: {
            name: {required,minLength: minLength(2),maxLength: maxLength(100),alphaArabic},
            name_e: {required,minLength: minLength(2),maxLength: maxLength(100),alphaEnglish},
            long_name: {required,minLength: minLength(2),maxLength: maxLength(100),alphaArabic},
            long_name_e: {required,minLength: minLength(2),maxLength: maxLength(100),alphaEnglish},
            short_code: {required,minLength: minLength(1),maxLength: maxLength(10)},
            phone_key: {required,minLength: minLength(1),maxLength: maxLength(10)},
            is_default: {required,integer},
            national_id_length: {required,minLength: minLength(1),maxLength: maxLength(20)},
            is_active: {required},
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
                this.countries.forEach(el => {
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
         *  start get Data countrie && pagination
         */
        getData(page = 1){
            this.isLoader = true;

            let filter = '';
            for(let i =0; i > this.filterSetting.length;++i){filter += `columns[${i}]=${this.filterSetting[i]}&`;}

            adminApi.get(`/countries?page=${page}&per_page=${this.per_page}&search=${this.search}&${filter}`)
                .then((res) => {
                    let l = res.data;
                    this.countries = l.data;
                    this.countriesPagination = l.pagination;
                    this.current_page = l.pagination.current_page;
                })
                .catch((err) => {
                    console.log(err.response)
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
            if(this.current_page <= this.countriesPagination.last_page && this.current_page != this.countriesPagination.current_page && this.current_page){
                this.isLoader = true;
                let filter = '';
                for(let i =0; i > this.filterSetting.length;++i){filter += `columns[${i}]=${this.filterSetting[i]}&`;}

                adminApi.get(`/countries?page=${page}&per_page=${this.per_page}&search=${this.search}&${filter}`)
                    .then((res) => {
                        let l = res.data;
                        this.countries = l.data;
                        this.countriesPagination = l.pagination;
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

                    adminApi.delete(`/countries/${id}`)
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
            this.create = {
                name: '',
                name_e: '',
                long_name:'',
                long_name_e: '',
                short_code: '',
                phone_key: '',
                national_id_length: null,
                is_default: 1,
                is_active: 'active',
                media: null
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
                long_name:'',
                long_name_e: '',
                short_code: '',
                phone_key: '',
                national_id_length: null,
                is_default: 1,
                is_active: 'active',
                media: null
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

                adminApi.post(`/countries`,this.create)
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
         *  edit country
         */
        editSubmit(id){
            this.$v.edit.$touch();

            if (this.$v.edit.$invalid) {
                return;
            } else {
                this.isLoader = true;
                this.errors = {};
                adminApi.put(`/countries/${id}`,this.edit)
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
        /*
        *  log country
        * */
        log(id){

            adminApi.get(`/countries/logs/${id}`)
                .then((res) => {

                    console.log(res.data.data);

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
                })

        },
        /**
         *   show Modal (edit)
         */
        resetModalEdit(id){
            let country = this.countries.find(e => id == e.id );
            this.edit.name = country.name;
            this.edit.name_e = country.name_e;
            this.edit.long_name_e = country.long_name_e;
            this.edit.long_name = country.long_name;
            this.edit.national_id_length = country.national_id_length;
            this.edit.phone_key = country.phone_key;
            this.edit.short_code = country.short_code;
            this.edit.is_active = country.is_active;
            this.edit.is_default = country.is_default  ? 1: 0;
            // this.edit.media = country.media.id;
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
                long_name:'',
                long_name_e: '',
                short_code: '',
                phone_key: '',
                national_id_length: null,
                is_default: 0,
                is_active: 'active',
                media: null
            };
        },
        /**
         *  start  dynamicSortString
         */
        sortString(value){ return dynamicSortString(value);},
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
        moveInput(tag,c,index){document.querySelector(`${tag}[data-${c}='${index}']`).focus()},
        sendingEvent (file, xhr, formData) {
            formData.append('media[0]', file);
        },
        afterUpload(response){
           if(response.status == 'success'){
               this.create.media = JSON.parse(response.xhr.response).data[0].id;
               this.AddSubmit();
           }else{
               Swal.fire({
                   icon: 'error',
                   title: `${this.$t('general.Error')}`,
                   text: `${this.$t('general.Thereisanerrorinthesystem')}`,
               });
           }
        },
        shootCountry(){
            this.$v.create.$touch();

            if (this.$v.create.$invalid) {
                return;
            } else {
                this.isLoader = true;
                this.$refs.myCreateDropzone.processQueue();
            }
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
                            <h4 class="header-title"> {{ $t('country.countriesTable') }}</h4>
                            <div class="col-xs-10 col-md-9 col-lg-7" style="font-weight: 500">

                                <div class="d-inline-block" style="width: 22.2%;">
                                    <!-- Basic dropdown -->
                                    <b-dropdown variant="primary" :text="$t('general.searchSetting')" ref="dropdown" class="btn-block setting-search">
                                        <b-form-checkbox v-model="filterSetting" value="name" class="mb-1">{{ $t('general.Name') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="name_e" class="mb-1">{{ $t('general.Name_en') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="long_name" class="mb-1">{{ $t('general.long_name') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="long_name_e" class="mb-1">{{ $t('general.long_name_e') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="short_code" class="mb-1">{{ $t('general.short_code') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="phone_key" class="mb-1">{{ $t('general.phone_key') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="national_id_length" class="mb-1">{{ $t('general.national') }}</b-form-checkbox>
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
                                        <!-- Basic dropdown -->
                                        <b-dropdown variant="primary" :html="`${$t('general.setting')} <i class='fe-settings'></i>`" ref="dropdown" class="dropdown-custom-ali">
                                            <b-form-checkbox v-model="setting.name" class="mb-1">{{ $t('general.Name') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.name_e" class="mb-1">{{ $t('general.Name_en') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.long_name" class="mb-1">{{ $t('general.long_name') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.long_name_e"  class="mb-1">{{ $t('general.long_name_e') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.short_code" class="mb-1">{{ $t('general.short_code') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.phone_key" class="mb-1">{{ $t('general.phone_key') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.national_id_length" class="mb-1">{{ $t('general.national') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.is_default" class="mb-1">{{ $t('general.is_default') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.is_active" class="mb-1">{{ $t('general.Status') }}</b-form-checkbox>
                                            <div class="d-flex justify-content-end">
                                                <a href="javascript:void(0)" class="btn btn-primary btn-sm">Apply</a>
                                            </div>
                                        </b-dropdown>
                                        <!-- Basic dropdown -->
                                    </div>
                                    <!-- end filter and setting -->

                                    <!-- start Pagination -->
                                    <div class="d-inline-flex align-items-center pagination-custom">
                                        <div class="d-inline-block" style="font-size:13px;">
                                            {{ countriesPagination.from }}-{{ countriesPagination.to }} / {{ countriesPagination.total }}
                                        </div>
                                        <div class="d-inline-block">
                                            <a
                                                href="javascript:void(0)"
                                                :style="{'pointer-events':countriesPagination.current_page == 1 ? 'none': ''}"
                                                @click.prevent="getData(countriesPagination.current_page - 1)"
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
                                                :style="{'pointer-events':countriesPagination.last_page == countriesPagination.current_page ? 'none': ''}"
                                                @click.prevent="getData(countriesPagination.current_page + 1)"
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
                            :title="$t('country.addcountry')"
                            title-class="font-18"
                            dialog-class="modal-full-width"
                            body-class="p-4"
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
                                            <label for="field-3" class="control-label">
                                                {{ $t('general.long_name') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                data-create="3"
                                                @keypress.enter="moveInput('input','create',4)"
                                                v-model="$v.create.long_name.$model"
                                                :class="{
                                                'is-invalid':$v.create.long_name.$error || errors.long_name,
                                                'is-valid':!$v.create.long_name.$invalid && !errors.long_name
                                            }"
                                                id="field-3"
                                            />
                                            <div v-if="!$v.create.long_name.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.long_name.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.long_name.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.long_name.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.long_name.alphaArabic" class="invalid-feedback">{{ $t('general.alphaArabic') }}</div>
                                            <template v-if="errors.long_name">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.long_name" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6 direction-ltr" dir="ltr">
                                        <div class="form-group">
                                            <label for="field-4" class="control-label">
                                                {{ $t('general.long_name_e') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                data-create="4"
                                                @keypress.enter="moveInput('input','create',5)"
                                                v-model="$v.create.long_name_e.$model"
                                                :class="{
                                                'is-invalid':$v.create.long_name_e.$error || errors.long_name_e,
                                                'is-valid':!$v.create.long_name_e.$invalid && !errors.long_name_e
                                            }" id="field-4"
                                            />
                                            <div v-if="!$v.create.long_name_e.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.long_name_e.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.long_name_e.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.long_name_e.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.long_name_e.alphaEnglish" class="invalid-feedback">{{ $t('general.alphaEnglish') }}</div>
                                            <template v-if="errors.long_name_e">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.long_name_e" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="create-20" class="control-label">
                                                {{ $t('general.national') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                class="form-control input-Sender"
                                                v-model.trim="create.national_id_length"
                                                data-create="5"
                                                @keypress.enter="moveInput('input','create',6)"
                                                :class="{
                                                'is-invalid':$v.create.national_id_length.$error || errors.national_id_length,
                                                'is-valid':!$v.create.national_id_length.$invalid && !errors.national_id_length
                                                }"
                                                id="create-20"
                                            />
                                            <div v-if="!$v.create.national_id_length.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.national_id_length.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.national_id_length.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.national_id_length.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <template v-if="errors.national_id_length">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.national_id_length" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="field-4" class="control-label">
                                                {{ $t('general.phone_key') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                data-create="6"
                                                @keypress.enter="moveInput('input','create',7)"
                                                v-model="$v.create.phone_key.$model"
                                                :class="{
                                                'is-invalid':$v.create.phone_key.$error || errors.phone_key,
                                                'is-valid':!$v.create.phone_key.$invalid && !errors.phone_key
                                                }"
                                                id="field-5"
                                            />
                                            <div v-if="!$v.create.phone_key.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.phone_key.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.phone_key.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.phone_key.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.phone_key.alphaEnglish" class="invalid-feedback">{{ $t('general.alphaEnglish') }}</div>
                                            <template v-if="errors.phone_key">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.phone_key" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="field-4" class="control-label">
                                                {{ $t('general.short_code') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                data-create="7"
                                                @keypress.enter="moveInput('select','create',8)"
                                                v-model="$v.create.short_code.$model"
                                                :class="{
                                                'is-invalid':$v.create.short_code.$error || errors.short_code,
                                                'is-valid':!$v.create.short_code.$invalid && !errors.short_code
                                                }"
                                                id="field-6"
                                            />
                                            <div v-if="!$v.create.short_code.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.short_code.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.short_code.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.short_code.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.short_code.alphaEnglish" class="invalid-feedback">{{ $t('general.alphaEnglish') }}</div>
                                            <template v-if="errors.short_code">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.short_code" :key="index">{{ errorMessage }}</ErrorMessage>
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
                                                data-create="8"
                                                @keypress.enter.prevent="moveInput('select','create',9)"
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
                                                data-create="9"
                                                @keypress.enter.prevent="moveInput('input','create',1)"
                                                v-model="$v.create.is_active.$model"
                                                :class="{
                                                'is-invalid':$v.create.is_active.$error || errors.is_active,
                                                'is-valid':!$v.create.is_active.$invalid && !errors.is_active
                                            }"
                                            >
                                                <option value="" selected>{{ $t('general.Choose') }}...</option>
                                                <option value="active">{{ $t('general.Active') }}</option>
                                                <option value="inactive">{{ $t('general.Inactive') }}</option>
                                            </select>
                                            <template v-if="errors.is_active">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.is_active" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-12 my-1">
                                        <label class="mb-1">
                                            {{ $t('general.imagEUpload') }}
                                            <span class="text-danger">*</span>
                                        </label>
                                        <!-- file upload -->
                                        <vue-dropzone
                                            id="dropzone"
                                            ref="myCreateDropzone"
                                            multiple
                                            :use-custom-slot="true"
                                            :options="dropzoneOptions"
                                            @vdropzone-complete="afterUpload"
                                            @vdropzone-sending="sendingEvent"
                                        >
                                            <div class="dz-message needsclick">
                                                <i class="h1 text-muted ri-upload-cloud-2-line"></i>
                                                <h3>{{ $t('general.Dropfileshereorclicktoupload') }}</h3>
                                                <span class="text-muted font-13">
                                                    {{ $t('general.Dropfileshereorclicktoupload') }}
                                                </span>
                                            </div>
                                        </vue-dropzone>
                                    </div>
                                </div>
                                <div class="mt-1 d-flex justify-content-end">
                                    <!-- Emulate built in modal footer ok and cancel button actions -->
                                    <b-button
                                        variant="success"
                                        type="button" class="mx-1 custom-btn-background"
                                        v-if="!isLoader"
                                        @click.prevent="shootCountry"
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
                                    <th v-if="setting.name">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.Name') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="countries.sort(sortString('name'))"></i>
                                                <i class="fas fa-arrow-down" @click="countries.sort(sortString('-name'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.name_e">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.Name_en') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="countries.sort(sortString('name_e'))"></i>
                                                <i class="fas fa-arrow-down" @click="countries.sort(sortString('-name_e'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.long_name">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.long_name') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="countries.sort(sortString('long_name'))"></i>
                                                <i class="fas fa-arrow-down" @click="countries.sort(sortString('-long_name'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.long_name_e">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.long_name_e') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="countries.sort(sortString('long_name_e'))"></i>
                                                <i class="fas fa-arrow-down" @click="countries.sort(sortString('-long_name_e'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.phone_key">
                                        <div class="d-flex justify-content-center">
                                            {{ $t('general.phone_key') }}
                                        </div>
                                    </th>
                                    <th v-if="setting.short_code">
                                        <div class="d-flex justify-content-center">
                                            {{ $t('general.short_code') }}
                                        </div>
                                    </th>
                                    <th v-if="setting.is_default">
                                        <div class="d-flex justify-content-center">
                                            {{ $t('general.is_default') }}
                                        </div>
                                    </th>
                                    <th v-if="setting.is_active">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.Status') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="countries.sort(sortString('name_e'))"></i>
                                                <i class="fas fa-arrow-down" @click="countries.sort(sortString('-name_e'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th>
                                        {{ $t('general.Action') }}
                                    </th>
                                    <th><i class="fas fa-ellipsis-v"></i></th>
                                </tr>
                                </thead>
                                <tbody v-if="countries.length > 0">
                                  <tr
                                      @click.capture="checkRow(data.id)"
                                      @dblclick.prevent="$bvModal.show(`modal-edit-${data.id}`)"
                                      v-for="(data,index) in countries"
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
                                    <td v-if="setting.name">
                                        <h5 class="m-0 font-weight-normal">{{ data.name }}</h5>
                                    </td>
                                    <td v-if="setting.name_e">
                                        <h5 class="m-0 font-weight-normal">{{ data.name_e }}</h5>
                                    </td>
                                      <td v-if="setting.long_name">
                                          <h5 class="m-0 font-weight-normal">{{ data.long_name }}</h5>
                                      </td>
                                      <td v-if="setting.long_name_e">
                                          <h5 class="m-0 font-weight-normal">{{ data.long_name_e }}</h5>
                                      </td>
                                      <td v-if="setting.phone_key">{{ data.phone_key }}</td>
                                      <td v-if="setting.short_code">{{ data.short_code }}</td>
                                      <td v-if="setting.is_default">
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
                                      <td v-if="setting.is_active">
                                        <span :class="[
                                            data.is_active == 'active' ?
                                            'text-success':
                                            'text-danger',
                                            'badge'
                                            ]"
                                        >
                                            {{ data.is_active == 'active'? `${$t('general.Active')}`:`${$t('general.Inactive')}`}}
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
                                            :title="$t('country.editcountry')"
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
                                                            <label for="edit-3" class="control-label">
                                                                {{ $t('general.long_name') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                data-edit="3"
                                                                @keypress.enter="moveInput('input','edit',4)"
                                                                v-model="$v.edit.long_name.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.long_name.$error || errors.long_name,
                                                                    'is-valid':!$v.edit.long_name.$invalid && !errors.long_name
                                                                }"
                                                                id="edit-3"
                                                            />
                                                            <div v-if="!$v.edit.long_name.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.long_name.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.long_name.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.long_name.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.long_name.alphaArabic" class="invalid-feedback">{{ $t('general.alphaArabic') }}</div>
                                                            <template v-if="errors.long_name">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.long_name" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 direction-ltr" dir="ltr">
                                                        <div class="form-group">
                                                            <label for="edit-4" class="control-label">
                                                                {{ $t('general.long_name_e') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                data-edit="4"
                                                                @keypress.enter="moveInput('input','edit',5)"
                                                                v-model="$v.edit.long_name_e.$model"
                                                                :class="{
                                                                'is-invalid':$v.edit.long_name_e.$error || errors.long_name_e,
                                                                'is-valid':!$v.edit.long_name_e.$invalid && !errors.long_name_e
                                                            }" id="edit-4"
                                                            />
                                                            <div v-if="!$v.edit.long_name_e.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.long_name_e.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.long_name_e.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.long_name_e.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.long_name_e.alphaEnglish" class="invalid-feedback">{{ $t('general.alphaEnglish') }}</div>
                                                            <template v-if="errors.long_name_e">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.long_name_e" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label for="edit-21" class="control-label">
                                                                {{ $t('general.national') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="number"
                                                                class="form-control input-Sender"
                                                                v-model.trim="$v.edit.national_id_length.$model"
                                                                data-edit="5"
                                                                @keypress.enter="moveInput('input','edit',6)"
                                                                :class="{
                                                                'is-invalid':$v.edit.national_id_length.$error || errors.national_id_length,
                                                                'is-valid':!$v.edit.national_id_length.$invalid && !errors.national_id_length
                                                                }"
                                                                id="edit-21"
                                                            />
                                                            <div v-if="!$v.edit.national_id_length.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.national_id_length.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.national_id_length.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.national_id_length.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <template v-if="errors.national_id_length">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.national_id_length" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label for="edit-4" class="control-label">
                                                                {{ $t('general.phone_key') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                data-edit="6"
                                                                @keypress.enter="moveInput('input','edit',7)"
                                                                v-model="$v.edit.phone_key.$model"
                                                                :class="{
                                                                'is-invalid':$v.edit.phone_key.$error || errors.phone_key,
                                                                'is-valid':!$v.edit.phone_key.$invalid && !errors.phone_key
                                                                }"
                                                                id="edit-5"
                                                            />
                                                            <div v-if="!$v.edit.phone_key.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.phone_key.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.phone_key.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.phone_key.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.phone_key.alphaEnglish" class="invalid-feedback">{{ $t('general.alphaEnglish') }}</div>
                                                            <template v-if="errors.phone_key">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.phone_key" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label for="edit-4" class="control-label">
                                                                {{ $t('general.short_code') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                data-edit="7"
                                                                @keypress.enter="moveInput('select','edit',8)"
                                                                v-model="$v.edit.short_code.$model"
                                                                :class="{
                                                                'is-invalid':$v.edit.short_code.$error || errors.short_code,
                                                                'is-valid':!$v.edit.short_code.$invalid && !errors.short_code
                                                                }"
                                                                id="edit-6"
                                                            />
                                                            <div v-if="!$v.edit.short_code.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.short_code.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.short_code.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.short_code.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.short_code.alphaEnglish" class="invalid-feedback">{{ $t('general.alphaEnglish') }}</div>
                                                            <template v-if="errors.short_code">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.short_code" :key="index">{{ errorMessage }}</ErrorMessage>
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
                                                                data-edit="8"
                                                                @keypress.enter.prevent="moveInput('select','edit',9)"
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
                                                            <label class=" mr-2">
                                                                {{ $t('general.Status') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <select
                                                                class="custom-select mr-sm-2"
                                                                data-edit="9"
                                                                @keypress.enter.prevent="moveInput('input','edit',1)"
                                                                v-model="$v.edit.is_active.$model"
                                                                :class="{
                                                                'is-invalid':$v.edit.is_active.$error || errors.is_active,
                                                                'is-valid':!$v.edit.is_active.$invalid && !errors.is_active
                                                            }"
                                                            >
                                                                <option value="" selected>{{ $t('general.Choose') }}...</option>
                                                                <option value="active">{{ $t('general.Active') }}</option>
                                                                <option value="inactive">{{ $t('general.Inactive') }}</option>
                                                            </select>
                                                            <template v-if="errors.is_active">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.is_active" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <tamplate v-if="!changeImage">
                                                            <!-- file upload -->
                                                            <vue-dropzone
                                                                id="dropzone_edit"
                                                                ref="myCreateDropzone_edit"
                                                                :use-custom-slot="true"
                                                                :options="dropzoneOptions"
                                                                @vdropzone-complete="afterUpload"
                                                                @vdropzone-sending="sendingEvent"
                                                            >
                                                                <div class="dz-message needsclick">
                                                                    <i class="h1 text-muted ri-upload-cloud-2-line"></i>
                                                                    <h3>{{ $t('general.Dropfileshereorclicktoupload') }}</h3>
                                                                    <span class="text-muted font-13">
                                                                    {{ $t('general.Dropfileshereorclicktoupload') }}
                                                                </span>
                                                                </div>
                                                            </vue-dropzone>
                                                        </tamplate>
                                                    </div>
                                                </div>
                                                <div class="mt-1 d-flex justify-content-end">
                                                    <!-- Emulate built in modal footer ok and cancel button actions -->
                                                    <b-button  variant="success"
                                                               @click.prevent="editSubmit(data.id)"
                                                               class="mx-1 custom-btn-background"
                                                               v-if="!isLoader">
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
                                        <i
                                            @mouseenter="log(data.id)"
                                            class="fe-info"
                                        ></i>
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




<script>
import Layout from "../../layouts/main";
import PageHeader from "../../../components/Page-header";
import adminApi from "../../../api/adminAxios";
import Switches from "vue-switches";
import { required, minLength, maxLength ,integer ,email} from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import ErrorMessage from "../../../components/widgets/errorMessage";
import loader from "../../../components/loader";
import { dynamicSortString, dynamicSortNumber }   from "../../../helper/tableSort";
import senderHoverHelper   from "../../../helper/senderHoverHelper";

/**
 * Advanced Table component
 */
export default {
    page: {
        title: "External Salesmen",
        meta: [{ name: "description", content: 'External Salesmen' }],
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
            externalSalesmensPagination: {},
            externalSalesmens: [],
            isLoader: false,
            create: {
                phone: '',
                address: '',
                rp_code: '',
                email: '',
                country_id: null,
                national_id: null,
                is_active: 'active',
                search: ""
            },
            edit: {
                phone: '',
                address: '',
                rp_code: '',
                email: '',
                country_id: null,
                national_id: null,
                is_active: 'active',
                search: ""
            },
            errors: {},
            dropDownSenders: [],
            isCheckAll: false,
            checkAll: [],
            current_page: 1,
            setting: ['phone','address','email','rp_code','country_id','national_id','is_active']
        }
    },
    validations: {
        create: {
            phone: {required,minLength: minLength(8),maxLength: maxLength(20),integer},
            address: {required,minLength: minLength(5),maxLength: maxLength(255)},
            email: {required,email,maxLength: maxLength(100)},
            rp_code: {required,maxLength: maxLength(20)},
            country_id: {required},
            national_id: {required},
            is_active: {required}
        },
        edit: {
            phone: {required,minLength: minLength(8),maxLength: maxLength(20),integer},
            address: {required,minLength: minLength(5),maxLength: maxLength(255)},
            email: {required,email,maxLength: maxLength(100)},
            rp_code: {required,maxLength: maxLength(20)},
            country_id: {required},
            national_id: {required},
            is_active: {required}
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
                this.externalSalesmens.forEach(el => {
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
        this.keyDropdown();
    },
    methods: {
        /**
         *  start get Data countrie && pagination
         */
        getData(page = 1){
            this.isLoader = true;

            adminApi.get(`/external-salesmen?page=${page}&per_page=${this.per_page}&search=${this.search}`)
                .then((res) => {
                    let l = res.data;
                    this.externalSalesmens = l.data;
                    this.externalSalesmensPagination = l.pagination;
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
        getDataCurrentPage(){
            if(this.current_page <= this.externalSalesmensPagination.last_page && this.current_page != this.externalSalesmensPagination.current_page && this.current_page){
                this.isLoader = true;

                adminApi.get(`/external-salesmen?page=${this.current_page}&per_page=${this.per_page}&search=${this.search}`)
                    .then((res) => {
                        let l = res.data;
                        this.externalSalesmens = l.data;
                        this.externalSalesmensPagination = l.pagination;
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
        deleteExternalSalesmen(id) {
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

                    adminApi.delete(`/external-salesmen/${id}`)
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
                phone: '',
                address: '',
                rp_code: '',
                email: '',
                country_id: null,
                national_id: null,
                is_active: 'active',
                search: ""
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
                phone: '',
                address: '',
                rp_code: '',
                email: '',
                country_id: null,
                national_id: null,
                is_active: 'active',
                search: ""
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
                adminApi.post(`/external-salesmen`,this.create)
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
                let {name,name_e,parent_id,is_active} = this.edit;
                adminApi.put(`/external-salesmen/${id}`,{name,name_e,parent_id,is_active})
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
            let externalSalesmen = this.externalSalesmens.find(e => id == e.id );
            this.edit.name = externalSalesmen.name;
            this.edit.name_e = externalSalesmen.name_e;
            this.edit.is_active = externalSalesmen.is_active;
            this.edit.parent_id = externalSalesmen.parent_id;
            this.errors = {};
        },
        /**
         *  hidden Modal (edit)
         */
        resetModalHiddenEdit(id){
            this.errors = {};
            this.edit = {
                phone: '',
                address: '',
                rp_code: '',
                email: '',
                country_id: null,
                national_id: null,
                is_active: 'active',
                search: ""
            };
        },
        /**
         *  start  dropdown Google
         */
        searchSenderCountry(e){
            this.dropDownSenders = [];
            this.create.parent_id = 0;
            this.edit.parent_id = 0;
            if(this.create.search || this.edit.search){
                clearTimeout(this.debounce);
                this.debounce = setTimeout(() => {

                }, 400);
            }else{
                this.dropDownSenders = [];
            }
        },
        showSenderCountry(index){
            let item = this.dropDownSenders[index];
            this.create.parent_id = item.id;
            this.create.search = (this.$i18n.locale == 'ar' ? item.name : item.name_e);
            this.edit.parent_id = item.id;
            this.edit.search = (this.$i18n.locale == 'ar' ? item.name : item.name_e);
            this.dropDownSenders = [];
        },
        searchSenderNational(e){
            this.dropDownSenders = [];
            this.create.parent_id = 0;
            this.edit.parent_id = 0;
            if(this.create.search || this.edit.search){
                clearTimeout(this.debounce);
                this.debounce = setTimeout(() => {

                }, 400);
            }else{
                this.dropDownSenders = [];
            }
        },
        showSenderNational(index){
            let item = this.dropDownSenders[index];
            this.create.parent_id = item.id;
            this.create.search = (this.$i18n.locale == 'ar' ? item.name : item.name_e);
            this.edit.parent_id = item.id;
            this.edit.search = (this.$i18n.locale == 'ar' ? item.name : item.name_e);
            this.dropDownSenders = [];
        },
        senderHover(e){ senderHoverHelper(e);},
        keyDropdown(){
            document.addEventListener('keyup',(e) => {
                if(e.keyCode == 38){ //top arrow
                    if(this.dropDownSenders.length > 0){
                        let items = document.querySelectorAll('.sender-search .Sender');
                        let isTrue = false;
                        let index = null;
                        items.forEach((e,i) => {
                            if(e.classList.contains('active')) {
                                isTrue = true;
                                index = i;
                            }
                        });
                        if(isTrue && index != 0){
                            items[index].classList.remove('active');
                            items[index - 1].classList.add('active');
                        }else if(isTrue && index == 0){
                            items[index].classList.remove('active');
                            items[items.length - 1].classList.add('active');
                        }
                        if(!isTrue) items[0].classList.add('active');
                    }else {
                        this.dropDownSenders = [];
                    }
                };

                if(e.keyCode == 40){ //down arrow
                    if(this.dropDownSenders.length > 0){
                        let items = document.querySelectorAll('.sender-search .Sender');
                        let isTrue = false;
                        let index = null;
                        items.forEach((e,i) => {
                            if(e.classList.contains('active')) {
                                isTrue = true;
                                index = i;
                            }
                        });
                        if(isTrue && index != (items.length - 1)){
                            items[index].classList.remove('active');
                            items[index + 1].classList.add('active');
                        }else if(isTrue && index == (items.length - 1)){
                            items[index].classList.remove('active');
                            items[0].classList.add('active');
                        }
                        if(!isTrue) items[items.length - 1].classList.add('active');
                    }else {
                        this.dropDownSenders = [];
                    }
                };

                if(e.keyCode == 13){ //enter
                    if(this.dropDownSenders.length > 0){
                        let items = document.querySelectorAll('.sender-search .Sender');
                        items.forEach((e,i) => {
                            if(e.classList.contains('active')) this.showSenderName(i);
                        });
                    }else {
                        this.dropDownSenders = [];
                    }
                };
            });

            document.addEventListener('click',(e) => {
                if(e.target.tagName !== 'BUTTON'){
                    e.preventDefault();
                }
                if(this.dropDownSenders.length > 0){
                    if(e.target.classList.contains('Sender') || e.target.classList.contains('input-Sender')){
                        return  false;
                    }else {
                        this.dropDownSenders = [];
                    }
                }
            });
        },
        ClickDropdown(e){
            if(this.dropDownSenders.length > 0){
                if(e.target.classList.contains('Sender') || e.target.classList.contains('input-Sender')){
                    return  false;
                }else {
                    this.dropDownSenders = [];
                }
            }
        },
        /**
         *  end  dropdown Google
         */
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
        moveInput(tag,c,index){document.querySelector(`${tag}[data-${c}='${index}']`).focus()}
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
                            <h4 class="header-title"> {{ $t('externalSalesmen.externalSalesmensTable') }}</h4>
                            <div class="col-xs-10 col-md-9 col-lg-7" style="font-weight: 500">

                                <div class="d-inline-block" style="width: 22.2%;">
                                    <!-- Basic dropdown -->
                                    <b-dropdown variant="primary" :text="$t('general.searchSetting')" ref="dropdown" class="btn-block setting-search">
                                        <b-form-checkbox v-model="setting" value="phone" class="mb-1">{{ $t('general.phone') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="setting" value="email" class="mb-1">{{ $t('general.email') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="setting" value="country_id" class="mb-1">{{ $t('general.country') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="setting" value="national_id" class="mb-1">{{ $t('general.national') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="setting" value="address" class="mb-1">{{ $t('general.address') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="setting" value="rp_code" class="mb-1">{{ $t('general.code') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="setting" value="is_active" class="mb-1">{{ $t('general.Status') }}</b-form-checkbox>
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
                                        @click.prevent="deleteExternalSalesmen(checkAll)"
                                    >
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                    <!-- end mult delete  -->
                                    <!--  start one delete  -->
                                    <button
                                        class="custom-btn-dowonload"
                                        v-if="checkAll.length == 1"
                                        @click.prevent="deleteExternalSalesmen(checkAll)"
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
                                            {{ externalSalesmensPagination.from }}-{{ externalSalesmensPagination.to }} / {{ externalSalesmensPagination.total }}
                                        </div>
                                        <div class="d-inline-block">
                                            <a
                                                href="javascript:void(0)"
                                                :style="{'pointer-events':externalSalesmensPagination.current_page == 1 ? 'none': ''}"
                                                @click.prevent="getData(externalSalesmensPagination.current_page - 1)"
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
                                                :style="{'pointer-events':externalSalesmensPagination.last_page == externalSalesmensPagination.current_page ? 'none': ''}"
                                                @click.prevent="getData(externalSalesmensPagination.current_page + 1)"
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
                            :title="$t('externalSalesmen.addexternalSalesmen')"
                            title-class="font-18"
                            size="lg"
                            body-class="p-4 "
                            :hide-footer="true"
                            @show="resetModal"
                            @hidden="resetModalHidden"
                        >
                            <form>
                                <div class="row">
                                    <div class="col-md-6" >
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
                                                v-model="$v.create.phone.$model"
                                                :class="{
                                                'is-invalid':$v.create.phone.$error || errors.phone,
                                                'is-valid':!$v.create.phone.$invalid && !errors.phone
                                            }"
                                                id="field-1"
                                            />
                                            <div v-if="!$v.create.phone.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.phone.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.phone.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.phone.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <template v-if="errors.phone">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.phone" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="field-2" class="control-label">
                                                {{ $t('general.email') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                class="form-control"
                                                data-create="2"
                                                @keypress.enter="moveInput('input','create',3)"
                                                v-model="$v.create.email.$model"
                                                :class="{
                                                'is-invalid':$v.create.email.$error || errors.email,
                                                'is-valid':!$v.create.email.$invalid && !errors.email
                                            }"
                                                id="field-2"
                                            />
                                            <div v-if="!$v.create.email.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.email.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <template v-if="errors.email">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.email" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group position-relative">
                                            <label for="field-12" class="control-label">
                                                {{ $t('general.country') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control input-Sender"
                                                v-model.trim="create.search"
                                                data-create="3"
                                                @keypress.enter="moveInput('input','create',4)"
                                                @input="searchSenderCountry"
                                                @blur.prevent="ClickDropdown"
                                                :class="{
                                                'is-invalid':$v.create.country_id.$error || errors.country_id,
                                                'is-valid':!$v.create.country_id.$invalid && !errors.country_id
                                                }"
                                                :placeholder="$t('partner.partner')" id="field-12"
                                            />

                                            <ul class="dropdown-search list-unstyled sender-search"
                                                v-if="dropDownSenders.length > 0"
                                            >
                                                <li
                                                    class="Sender"
                                                    v-for="(dropDownSender,index) in dropDownSenders"
                                                    :key="index"
                                                    @click="showSenderCountry(index)"
                                                    @mouseenter="senderHover"
                                                >
                                                    {{ `${dropDownSender.id}- ${dropDownSender.name}` }}
                                                </li>
                                            </ul>

                                            <template v-if="errors.country_id">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.country_id" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="field-4" class="control-label">
                                                {{ $t('general.national') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control input-Sender"
                                                v-model.trim="create.search"
                                                data-create="4"
                                                @keypress.enter="moveInput('select','create',5)"
                                                @input="searchSenderNational"
                                                @blur.prevent="ClickDropdown"
                                                :class="{
                                                'is-invalid':$v.create.national_id.$error || errors.national_id,
                                                'is-valid':!$v.create.national_id.$invalid && !errors.national_id
                                                }"
                                                :placeholder="$t('partner.partner')" id="field-4"
                                            />

                                            <ul class="dropdown-search list-unstyled sender-search"
                                                v-if="dropDownSenders.length > 0"
                                            >
                                                <li
                                                    class="Sender"
                                                    v-for="(dropDownSender,index) in dropDownSenders"
                                                    :key="index"
                                                    @click="showSenderNational(index)"
                                                    @mouseenter="senderHover"
                                                >
                                                    {{ `${dropDownSender.id}- ${dropDownSender.name}` }}
                                                </li>
                                            </ul>
                                            <template v-if="errors.national_id">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.national_id" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class=" mr-2" for="inlineFormCustomSelectPref">
                                                {{ $t('general.Status') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <select
                                                class="custom-select mr-sm-2"
                                                id="inlineFormCustomSelectPref"
                                                data-create="5"
                                                @keypress.enter.prevent="moveInput('input','create',6)"
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
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="field-8" class="control-label">
                                                {{ $t('general.code') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                data-create="6"
                                                @keypress.enter="moveInput('input','create',7)"
                                                v-model="$v.create.rp_code.$model"
                                                :class="{
                                                'is-invalid':$v.create.rp_code.$error || errors.rp_code,
                                                'is-valid':!$v.create.rp_code.$invalid && !errors.rp_code
                                            }"
                                                id="field-8"
                                            />
                                            <div v-if="!$v.create.rp_code.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.rp_code.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <template v-if="errors.rp_code">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.rp_code" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="field-7" class="control-label">
                                                {{ $t('general.address') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                class="form-control"
                                                data-create="7"
                                                @keypress.enter="moveInput('input','create',1)"
                                                v-model="$v.create.address.$model"
                                                :class="{
                                                'is-invalid':$v.create.address.$error || errors.address,
                                                'is-valid':!$v.create.address.$invalid && !errors.address
                                            }"
                                                id="field-7"
                                            />
                                            <div v-if="!$v.create.address.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.address.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.address.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.address.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <template v-if="errors.address">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.address" :key="index">{{ errorMessage }}</ErrorMessage>
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
                                            <span>{{ $t('general.phone') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="externalSalesmens.sort(sortString('name'))"></i>
                                                <i class="fas fa-arrow-down" @click="externalSalesmens.sort(sortString('-name'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.email') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="externalSalesmens.sort(sortString('name_e'))"></i>
                                                <i class="fas fa-arrow-down" @click="externalSalesmens.sort(sortString('-name_e'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.country') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="externalSalesmens.sort(SortNumber('country_id'))"></i>
                                                <i class="fas fa-arrow-down" @click="externalSalesmens.sort(SortNumber('-country_id'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.national') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="externalSalesmens.sort(SortNumber('national_id'))"></i>
                                                <i class="fas fa-arrow-down" @click="externalSalesmens.sort(SortNumber('-national_id'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                        <th>
                                            <div class="d-flex justify-content-center">{{ $t('general.code') }}</div>
                                        </th>
                                    <th>
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.Status') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="externalSalesmens.sort(sortString('name_e'))"></i>
                                                <i class="fas fa-arrow-down" @click="externalSalesmens.sort(sortString('-name_e'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th>
                                        {{ $t('general.Action') }}
                                    </th>
                                    <th><i class="fas fa-ellipsis-v"></i></th>
                                </tr>
                                </thead>
                                <tbody v-if="externalSalesmens.length > 0">
                                  <tr
                                      @click.capture="checkRow(data.id)"
                                      @dblclick.prevent="$bvModal.show(`modal-edit-${data.id}`)"
                                      v-for="(data,index) in externalSalesmens"
                                      :key="data.id"
                                      class="body-tr-custom"
                                  >
                                    <td>
                                        <div class="form-check custom-control" style="min-height: 1.9em;">
                                            <input
                                                style="width: 17px;height: 17px;"
                                                class="form-check-input"
                                                type="checkbox"
                                                :value="data.id"
                                                v-model="checkAll"
                                            >
                                        </div>
                                    </td>
                                    <td>{{ data.phone }}</td>
                                    <td>
                                        <h5 class="m-0 font-weight-normal">{{ data.email }}</h5>
                                    </td>
                                      <td>{{ data.country_id }}</td>
                                      <td>{{ data.national_id }}</td>
                                      <td>{{ data.rp_code }}</td>
                                      <td>
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
                                                   @click.prevent="deleteExternalSalesmen(data.id)"
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
                                            :title="$t('externalSalesmen.editexternalSalesmen')"
                                            title-class="font-18"
                                            body-class="p-4"
                                            :ref="`edit-${data.id}`"
                                            :hide-footer="true"
                                            @show="resetModalEdit(data.id)"
                                            @hidden="resetModalHiddenEdit(data.id)"
                                        >
                                            <form>
                                                <div class="row">
                                                    <div class="col-md-6" >
                                                        <div class="form-group">
                                                            <label for="edit-1" class="control-label">
                                                                {{ $t('general.phone') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                data-edit="1"
                                                                @keypress.enter="moveInput('input','edit',2)"
                                                                v-model="$v.edit.phone.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.phone.$error || errors.phone,
                                                                    'is-valid':!$v.edit.phone.$invalid && !errors.phone
                                                                }"
                                                                id="edit-1"
                                                            />
                                                            <div v-if="!$v.edit.phone.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.edit.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.phone.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.edit.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <template v-if="errors.phone">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.phone" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="edit-2" class="control-label">
                                                                {{ $t('general.email') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="email"
                                                                class="form-control"
                                                                data-edit="2"
                                                                @keypress.enter="moveInput('input','edit',3)"
                                                                v-model="$v.edit.email.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.email.$error || errors.email,
                                                                    'is-valid':!$v.edit.email.$invalid && !errors.email
                                                                }"
                                                                id="edit-2"
                                                            />
                                                            <div v-if="!$v.edit.email.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.email.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <template v-if="errors.email">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.email" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group position-relative">
                                                            <label for="edit-12" class="control-label">
                                                                {{ $t('general.country') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                class="form-control input-Sender"
                                                                v-model.trim="edit.search"
                                                                data-edit="3"
                                                                @keypress.enter="moveInput('input','edit',4)"
                                                                @input="searchSenderCountry"
                                                                @blur.prevent="ClickDropdown"
                                                                :class="{
                                                                'is-invalid':$v.edit.country_id.$error || errors.country_id,
                                                                'is-valid':!$v.edit.country_id.$invalid && !errors.country_id
                                                                }"
                                                                :placeholder="$t('partner.partner')" id="edit-12"
                                                            />

                                                            <ul class="dropdown-search list-unstyled sender-search"
                                                                v-if="dropDownSenders.length > 0"
                                                            >
                                                                <li
                                                                    class="Sender"
                                                                    v-for="(dropDownSender,index) in dropDownSenders"
                                                                    :key="index"
                                                                    @click="showSenderCountry(index)"
                                                                    @mouseenter="senderHover"
                                                                >
                                                                    {{ `${dropDownSender.id}- ${dropDownSender.name}` }}
                                                                </li>
                                                            </ul>

                                                            <template v-if="errors.country_id">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.country_id" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="edit-4" class="control-label">
                                                                {{ $t('general.national') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                class="form-control input-Sender"
                                                                v-model.trim="edit.search"
                                                                data-edit="4"
                                                                @keypress.enter="moveInput('select','edit',5)"
                                                                @input="searchSenderNational"
                                                                @blur.prevent="ClickDropdown"
                                                                :class="{
                                                                'is-invalid':$v.edit.national_id.$error || errors.national_id,
                                                                'is-valid':!$v.edit.national_id.$invalid && !errors.national_id
                                                                }"
                                                                :placeholder="$t('partner.partner')" id="edit-4"
                                                            />

                                                            <ul class="dropdown-search list-unstyled sender-search"
                                                                v-if="dropDownSenders.length > 0"
                                                            >
                                                                <li
                                                                    class="Sender"
                                                                    v-for="(dropDownSender,index) in dropDownSenders"
                                                                    :key="index"
                                                                    @click="showSenderNational(index)"
                                                                    @mouseenter="senderHover"
                                                                >
                                                                    {{ `${dropDownSender.id}- ${dropDownSender.name}` }}
                                                                </li>
                                                            </ul>
                                                            <template v-if="errors.national_id">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.national_id" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label class=" mr-2" for="edit-11">
                                                                {{ $t('general.Status') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <select
                                                                class="custom-select mr-sm-2"
                                                                id="edit-11"
                                                                data-edit="5"
                                                                @keypress.enter.prevent="moveInput('input','edit',6)"
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
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="edit-8" class="control-label">
                                                                {{ $t('general.address') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="number"
                                                                class="form-control"
                                                                data-edit="6"
                                                                @keypress.enter="moveInput('input','edit',7)"
                                                                v-model="$v.edit.rp_code.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.rp_code.$error || errors.rp_code,
                                                                    'is-valid':!$v.edit.rp_code.$invalid && !errors.rp_code
                                                                }"
                                                                id="edit-8"
                                                            />
                                                            <div v-if="!$v.edit.rp_code.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.rp_code.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <template v-if="errors.rp_code">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.rp_code" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label for="edit-7" class="control-label">
                                                                {{ $t('general.address') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="email"
                                                                class="form-control"
                                                                data-edit="7"
                                                                @keypress.enter="moveInput('input','edit',1)"
                                                                v-model="$v.edit.address.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.address.$error || errors.address,
                                                                    'is-valid':!$v.edit.address.$invalid && !errors.address
                                                                }"
                                                                id="edit-7"
                                                            />
                                                            <div v-if="!$v.edit.address.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.address.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.address.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.address.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <template v-if="errors.address">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.address" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mt-1 d-flex justify-content-end">
                                                    <!-- Emulate built in modal footer ok and cancel button actions -->
                                                    <b-button
                                                        variant="success"
                                                        type="submit"
                                                        class="mx-1"
                                                        @click.prevent="editSubmit(data.id)"
                                                        v-if="!isLoader"
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
                                      <td><i class="fe-info" style="font-size: 22px;"></i></td>
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

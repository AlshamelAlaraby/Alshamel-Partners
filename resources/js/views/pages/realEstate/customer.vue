<script>
import Layout from "../../layouts/main";
import PageHeader from "../../../components/Page-header";
import adminApi from "../../../api/adminAxios";
import Switches from "vue-switches";
import { required, minLength, maxLength ,integer, numeric, email } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import ErrorMessage from "../../../components/widgets/errorMessage";
import loader from "../../../components/loader";
import {dynamicSortNumber, dynamicSortString} from "../../../helper/tableSort";
import {formatDateOnly} from "../../../helper/startDate";
import Country from "../../../components/country";
import City from "../../../components/city";
import bankAccount from "../../../components/create/bankAccount";
import Multiselect from "vue-multiselect";
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
/**
 * Advanced Table component
 */

export default {
    page: {
        title: "Customers",
        meta: [{ name: "description", content: 'Customers' }],
    },
    components: {
        Layout,
        PageHeader,
        Switches,
        ErrorMessage,
        loader,
        Country,
        City,
        Multiselect,
        bankAccount
    },
    data() {
        return {
            per_page: 50,
            search: '',
            debounce: {},
            customersPagination: {},
            customers: [],
            cities: [],
            countries: [],
            bank_accounts: [],
            isLoader: false,
            create: {
                name: '',
                name_e: '',
                phone: '',
                email: '',
                rp_code: null,
                contact_person: '',
                contact_phones:'',
                national_id: null,
                nationality_id: null,
                bank_account_id: null,
                country_id: null,
                city_id: null ,
                whatsapp: '',
                passport_no: null,
                Note1: '',
                Note2: '',
                Note3: '',
                Note4: ''
            },
            edit: {
                name: '',
                name_e: '',
                phone: '',
                email: '',
                rp_code: null,
                contact_person: '',
                contact_phones:'',
                national_id: null,
                nationality_id: null,
                bank_account_id: null,
                country_id: null,
                city_id: null ,
                whatsapp: '',
                passport_no: null,
                Note1: '',
                Note2: '',
                Note3: '',
                Note4: ''
            },
            errors: {},
            isCheckAll: false,
            checkAll: [],
            current_page: 1,
            image: '',
            setting: {
                name: true,
                name_e: true,
                phone : true,
                email : true,
                rp_code: true,
                nationality_id: true,
                contact_person: true,
                contact_phones: true,
                national_id:true,
                bank_account_id: true,
                country_id: true ,
                city_id: true,
                whatsapp: true,
                passport_no: true
            },
            is_disabled: false,
            filterSetting: [
                'name',
                'name_e',
                'phone',
                'email',
                'rp_code',
                'nationality_id',
                'contact_person',
                'contact_phones',
                'national_id',
                'country_id',
                'city_id',
                'bank_account_id',
                'whatsapp',
                'passport_no'
            ],
            Tooltip: '',
            mouseEnter: null
        }
    },
    validations: {
        create: {
            name: {required,minLength: minLength(2),maxLength: maxLength(100),},
            name_e: {required,minLength: minLength(2),maxLength: maxLength(100),},
            phone: {required,maxLength: maxLength(100)},
            email: {required,maxLength: maxLength(100),email},
            rp_code: {required,integer,maxLength: maxLength(9),},
            nationality_id: {required,integer,maxLength: maxLength(40),},
            contact_person: {required,maxLength: maxLength(100)},
            contact_phones: {required,integer,maxLength: maxLength(100)},
            national_id: {required,integer},
            country_id: {required},
            city_id: {required},
            bank_account_id: {required},
            whatsapp: {numeric},
            passport_no: {integer}
        },
        edit: {
            name: {required,minLength: minLength(2),maxLength: maxLength(100),},
            name_e: {required,minLength: minLength(2),maxLength: maxLength(100),},
            phone: {required,maxLength: maxLength(100)},
            email: {required,maxLength: maxLength(100),email},
            rp_code: {required,integer,maxLength: maxLength(9),},
            nationality_id: {required,integer,maxLength: maxLength(40),},
            contact_person: {required,maxLength: maxLength(100)},
            contact_phones: {required,integer,maxLength: maxLength(100)},
            national_id: {required,integer},
            country_id: {required},
            city_id: {required},
            bank_account_id: {required},
            passport_no: {integer},
            whatsapp: {numeric}
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
                this.builds.forEach(el => {
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
    updated(){
        $(function(){
            $(".englishInput").keypress(function(event){
                var ew = event.which;
                if(ew == 32)
                    return true;
                if(48 <= ew && ew <= 57)
                    return true;
                if(65 <= ew && ew <= 90)
                    return true;
                if(97 <= ew && ew <= 122)
                    return true;
                return false;
            });
            $(".arabicInput").keypress(function(event){
                var ew = event.which;
                if(ew == 32)
                    return true;
                if(48 <= ew && ew <= 57)
                    return true;
                if(65 <= ew && ew <= 90)
                    return false;
                if(97 <= ew && ew <= 122)
                    return false;
                return true;
            });
        });
    },
    methods: {
        /**
         *  start get Data customers && pagination
         */
        getData(page = 1){
            this.isLoader = true;
            let filter = '';
            for (let i = 0; i < this.filterSetting.length; ++i) {
                filter += `columns[${i}]=${this.filterSetting[i]}&`;
            }

            adminApi.get(`/real-estate/customers?page=${page}&per_page=${this.per_page}&search=${this.search}&${filter}`)
                .then((res) => {
                    let l = res.data;
                    this.customers = l.data;
                    this.customersPagination = l.pagination;
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
            if(this.current_page <= this.customersPagination.last_page && this.current_page != this.customersPagination.current_page && this.current_page){
                this.isLoader = true;
                let filter = '';
                for (let i = 0; i < this.filterSetting.length; ++i) {
                    filter += `columns[${i}]=${this.filterSetting[i]}&`;
                }

                adminApi.get(`/real-estate/customers?page=${page}&per_page=${this.per_page}&search=${this.search}&${filter}`)
                    .then((res) => {
                        let l = res.data;
                        this.customers = l.data;
                        this.customersPagination = l.pagination;
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
        deleteCountry(id, index) {
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
                            .post(`/real-estate/customers/bulk-delete`, { ids: id })
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
                            .delete(`/real-estate/customers/${id}`)
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
        resetModalHidden(){
            this.create =  {
                name: '',
                name_e: '',
                phone: '',
                email: '',
                rp_code: null,
                nationality_id: null,
                contact_person: '',
                contact_phones:'',
                national_id: null,
                bank_account_id: null,
                country_id: null,
                city_id: null ,
                whatsapp: ''
            };
            this.$nextTick(() => { this.$v.$reset() });
            this.errors = {};
            this.$bvModal.hide(`create`);
        },
        /**
         *  hidden Modal (create)
         */
        async resetModal(){
            await this.getCategory();
            await this.getBankAcount();
            this.create = {
                name: '',
                name_e: '',
                phone: '',
                email: '',
                rp_code: null,
                nationality_id: null,
                contact_person: '',
                contact_phones:'',
                national_id: null,
                bank_account_id: null,
                country_id: null,
                city_id: null ,
                whatsapp: ''
            };
            this.$nextTick(() => { this.$v.$reset() });
            this.errors = {};
        },
        /**
         *  create countrie
         */
        async resetForm(){
            await this.getCategory();
            await this.getBankAcount();
            this.create = {
                name: '',
                name_e: '',
                phone: '',
                email: '',
                rp_code: null,
                nationality_id: null,
                contact_person: '',
                contact_phones:'',
                national_id: null,
                bank_account_id: null,
                country_id: null,
                city_id: null ,
                whatsapp: ''
            };
            this.$nextTick(() => { this.$v.$reset() });
            this.errors = {};
            this.is_disabled = false;
        },

        AddSubmit(){

            if(!this.create.name){ this.create.name = this.create.name_e}
            if(!this.create.name_e){ this.create.name_e = this.create.name}
            if(!this.create.description){ this.create.description = this.create.description_e}
            if(!this.create.description_e){ this.create.description_e = this.create.description}

            this.$v.create.$touch();

            if (this.$v.create.$invalid) {
                return;
            } else {
                this.isLoader = true;
                this.errors = {};

                adminApi.post(`/real-estate/customers`,this.create)
                    .then((res) => {
                        this.is_disabled = true;
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

            if(!this.edit.name){ this.edit.name = this.edit.name_e}
            if(!this.edit.name_e){ this.edit.name_e = this.edit.name}
            if(!this.edit.description){ this.edit.description = this.edit.description_e}
            if(!this.edit.description_e){ this.edit.description_e = this.edit.description}
            this.$v.edit.$touch();

            if (this.$v.edit.$invalid) {
                return;
            } else {
                this.isLoader = true;
                this.errors = {};

                adminApi.put(`/real-estate/customers/${id}`,this.edit)
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
        async resetModalEdit(id){
            await this.getCategory();
            await this.getBankAcount();
            let build = this.customers.find(e => id == e.id );
            this.edit.name = build.name;
            this.edit.name_e = build.name_e;
            this.edit.description = build.description;
            this.edit.description_e = build.description_e;
            this.edit.building_area = build.building_area ?? 0;
            this.edit.land_area = build.land_area ?? 0;
            this.edit.construction_year = build.construction_year ?? '';
            this.edit.module_id = build.module_id;
            this.edit.country_id = build.country.id;
            this.edit.city_id = build.city.id;
            this.edit.avenue_id = build.avenue.id;
            this.edit.lng = build.lng;
            this.edit.lat = build.lat;
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
                phone: '',
                email: '',
                rp_code: null,
                nationality_id: null,
                contact_person: '',
                contact_phones:'',
                national_id: null,
                bank_account_id: null,
                country_id: null,
                city_id: null ,
                whatsapp: ''
            };
        },
        /**
         *  start  dynamicSortString
         */
        sortString(value){ return dynamicSortString(value);},
        sortNumber(value){return dynamicSortNumber(value);},
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
        },
        formatDate(value) {
            return formatDateOnly(value);
        },
        log(id) {
            if(this.mouseEnter != id){
                this.Tooltip = "";
                this.mouseEnter = id;
                adminApi
                    .get(`/real-estate/customers/logs/${id}`)
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
        getCurrentYear() {
            return new Date().getFullYear();
        },
        async getCategory() {
            this.create.city_id = null;
            this.edit.city_id = null;
            await adminApi
                .get(`/countries?is_active=active`)
                .then((res) => {
                    let l = res.data.data;
                    l.unshift({ id: 0, name: "اضافة دولة", name_e: "Add Country" });
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
        async getBankAcount() {
            this.bank_accounts = [];
            await adminApi.get(`/bank-accounts?`)
                .then((res) => {
                    let l = res.data.data;
                    l.unshift({ id: 0, name: "اضافة حساب بنكي", name_e: "Add Bank Account" });
                    this.bank_accounts = l;

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
        async getCity(id = null) {
            if (this.edit.city_id  == 0 || this.create.city_id == 0) {
                this.$bvModal.show("city-create");
                this.create.city_id = null;
                this.edit.city_id = null;
            }
            if (id) {
                this.cities = [];
                this.create.city_id = null;
                this.edit.city_id = null;
                await adminApi
                    .get(`/cities?country_id=${id}`)
                    .then((res) => {
                        let l = res.data.data;
                        l.unshift({ id: 0, name: "اضافة مدينة", name_e: "Add City" });
                        this.cities = l;
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
        showCountryModal() {
            if (this.create.country_id == 0) {
                this.$bvModal.show("country-create");
                this.create.country_id = null;
            }else {
                this.getCity(this.create.country_id);
            }
        },
        showCountryModalEdit() {
            if (this.edit.country_id == 0) {
                this.$bvModal.show("country-create");
                this.edit.country_id = null;
            }else {
                this.getCity(this.edit.country_id);
            }
        },
        showBankAccountModal() {
            if (this.create.bank_account_id == 0) {
                this.$bvModal.show("bank-account-create");
                this.create.bank_account_id = null;
            }
        },
        showBankAccountEdit() {
            if (this.edit.bank_account_id == 0) {
                this.$bvModal.show("bank-account-create");
                this.edit.bank_account_id = null;
            }
        },
    },
};
</script>

<template>
    <Layout>
        <PageHeader />
        <Country @created="getCategory" />
        <City @created="getCity(create.country_id ? create.country_id: edit.country_id)" />
        <bankAccount @created="getBankAcount" />
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">

                        <!-- start search -->
                        <div class="row justify-content-between align-items-center mb-2">
                            <h4 class="header-title"> {{ $t('general.customersTable') }}</h4>
                            <div class="col-xs-10 col-md-9 col-lg-7" style="font-weight: 500">
                                <div class="d-inline-block" style="width: 22.2%;">
                                    <!-- Basic dropdown -->
                                    <b-dropdown variant="primary" :text="$t('general.searchSetting')" ref="dropdown" class="btn-block setting-search dropdown-menu-custom-company">
                                        <b-form-checkbox v-model="filterSetting" value="name" class="mb-1">{{ $t('general.Name') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="name_e" class="mb-1">{{ $t('general.Name_en') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="phone" class="mb-1">{{ $t('general.phone') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="email" class="mb-1">{{ $t('general.email') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="rp_code" class="mb-1">{{ $t('general.code') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="nationality_id" class="mb-1">{{ $t('general.nationality') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="contact_person" class="mb-1">{{ $t('general.contact_person') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="contact_phones" class="mb-1">{{ $t('general.contact_phones') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="country_id" class="mb-1">{{ $t('general.country') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="city_id" class="mb-1">{{ $t('general.city') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="national_id" class="mb-1">{{ $t('general.national') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="bank_account_id" class="mb-1">{{ $t('general.bankAccount') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="whatsapp" class="mb-1">{{ $t('general.whatsapp') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="passport_no" class="mb-1">{{ $t('general.passport') }}</b-form-checkbox>
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
                                        @click.prevent="deleteCountry(checkAll[0])"
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
                                        <b-dropdown
                                            variant="primary"
                                            :html="`${$t('general.setting')} <i class='fe-settings'></i>`"
                                            ref="dropdown" class="dropdown-custom-ali dropdown-menu-custom-company"
                                        >
                                            <b-form-checkbox v-model="setting.name" class="mb-1">{{$t('general.Name') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.name_e" class="mb-1">{{ $t('general.Name_en') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.phone" class="mb-1">{{$t('general.phone') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.email" class="mb-1">{{ $t('general.email') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.rp_code" class="mb-1">{{$t('general.code') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.contact_person" class="mb-1">{{ $t('general.contact_person') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.contact_phones" class="mb-1">{{$t('general.contact_phones') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.nationality_id" class="mb-1">{{ $t('general.nationality') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.national_id" class="mb-1">{{ $t('general.national') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.bank_account_id" class="mb-1">{{$t('general.bankAccount') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.country_id" class="mb-1">{{$t('general.country') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.city_id" class="mb-1">{{ $t('general.city') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.whatsapp" class="mb-1">{{ $t('general.whatsapp') }}</b-form-checkbox>
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
                                            {{ customersPagination.from }}-{{ customersPagination.to }} / {{ customersPagination.total }}
                                        </div>
                                        <div class="d-inline-block">
                                            <a
                                                href="javascript:void(0)"
                                                :style="{'pointer-events':customersPagination.current_page == 1 ? 'none': ''}"
                                                @click.prevent="getData(customersPagination.current_page - 1)"
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
                                                :style="{'pointer-events':customersPagination.last_page == customersPagination.current_page ? 'none': ''}"
                                                @click.prevent="getData(customersPagination.current_page + 1)"
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
                            :title="$t('general.addcustomer')"
                            title-class="font-18"
                            dialog-class="modal-full-width"
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
                                        type="button" :class="['font-weight-bold px-2',is_disabled?'mx-2': '']"
                                    >
                                        {{ $t('general.AddNewRecord') }}
                                    </b-button>
                                    <template v-if="!is_disabled">
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
                                    </template>
                                    <!-- Emulate built in modal footer ok and cancel button actions -->

                                    <b-button variant="danger" type="button" @click.prevent="resetModalHidden">
                                        {{ $t('general.Cancel') }}
                                    </b-button>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group position-relative">
                                            <label class="control-label">
                                                {{ $t("general.country") }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <multiselect
                                                @input="showCountryModal"
                                                v-model="$v.create.country_id.$model"
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
                                    <div class="col-md-4">
                                        <div class="form-group position-relative">
                                            <label class="control-label">
                                                {{ $t("general.city") }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <multiselect
                                                @input="getCity()"
                                                v-model="$v.create.city_id.$model"
                                                :options="cities.map((type) => type.id)"
                                                :custom-label="(opt) => cities.find((x) => x.id == opt).name"
                                            >
                                            </multiselect>
                                            <div
                                                v-if="$v.create.city_id.$error || errors.city_id"
                                                class="text-danger"
                                            >
                                                {{ $t("general.fieldIsRequired") }}
                                            </div>
                                            <template v-if="errors.city_id">
                                                <ErrorMessage
                                                    v-for="(errorMessage, index) in errors.city_id"
                                                    :key="index"
                                                >{{ errorMessage }}</ErrorMessage
                                                >
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group position-relative">
                                            <label class="control-label">
                                                {{ $t("general.bankAccount") }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <multiselect
                                                @input="showBankAccountModal"
                                                v-model="$v.create.bank_account_id.$model"
                                                :options="bank_accounts.map((type) => type.id)"
                                                :custom-label="(opt) => bank_accounts.find((x) => x.id == opt).name"
                                            >
                                            </multiselect>
                                            <div
                                                v-if="$v.create.bank_account_id.$error || errors.bank_account_id"
                                                class="text-danger"
                                            >
                                                {{ $t("general.fieldIsRequired") }}
                                            </div>
                                            <template v-if="errors.bank_account_id">
                                                <ErrorMessage
                                                    v-for="(errorMessage, index) in errors.bank_account_id"
                                                    :key="index"
                                                >{{ errorMessage }}</ErrorMessage
                                                >
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="field-1" class="control-label">
                                                {{ $t('general.Name') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <div dir="rtl">
                                                <input
                                                    type="text"
                                                    class="form-control arabicInput"
                                                    data-create="1"
                                                    @keypress.enter="moveInput('input','create',2)"
                                                    v-model="$v.create.name.$model"
                                                    :class="{
                                                    'is-invalid':$v.create.name.$error || errors.name,
                                                    'is-valid':!$v.create.name.$invalid && !errors.name
                                                }"
                                                    id="field-1"
                                                />
                                            </div>
                                            <div v-if="!$v.create.name.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.name.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.name.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.name.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <template v-if="errors.name">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.name" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="field-2" class="control-label">
                                                {{ $t('general.Name_en') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <div dir="ltr">
                                                <input
                                                    type="text"
                                                    class="form-control englishInput"
                                                    data-create="2"
                                                    @keypress.enter="moveInput('input','create',3)"
                                                    v-model="$v.create.name_e.$model"
                                                    :class="{
                                                        'is-invalid':$v.create.name_e.$error || errors.name_e,
                                                        'is-valid':!$v.create.name_e.$invalid && !errors.name_e
                                                    }"
                                                    id="field-2"
                                                />
                                            </div>
                                            <div v-if="!$v.create.name_e.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.name_e.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                            <div v-if="!$v.create.name_e.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.name_e.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <template v-if="errors.name_e">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.name_e" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label class="control-label">
                                                {{ $t('general.phone') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                data-create="9"
                                                @keypress.enter="moveInput('select','create',10)"
                                                v-model="$v.create.phone.$model"
                                                :class="{
                                                'is-invalid':$v.create.phone.$error || errors.phone,
                                                'is-valid':!$v.create.phone.$invalid && !errors.phone
                                            }"
                                            />
                                            <template v-if="errors.phone">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.phone" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label class="control-label">
                                                {{ $t('general.email') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                data-create="9"
                                                @keypress.enter="moveInput('select','create',10)"
                                                v-model="$v.create.email.$model"
                                                :class="{
                                                'is-invalid':$v.create.email.$error || errors.email,
                                                'is-valid':!$v.create.email.$invalid && !errors.email
                                            }"
                                            />
                                            <template v-if="errors.email">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.email" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label class="control-label">
                                                {{ $t('general.contact_person') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                data-create="9"
                                                @keypress.enter="moveInput('select','create',10)"
                                                v-model="$v.create.contact_person.$model"
                                                :class="{
                                                'is-invalid':$v.create.contact_person.$error || errors.contact_person,
                                                'is-valid':!$v.create.contact_person.$invalid && !errors.contact_person
                                            }"
                                            />
                                            <template v-if="errors.contact_person">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.contact_person" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label  class="control-label">
                                                {{ $t('general.code') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                data-create="9"
                                                @keypress.enter="moveInput('select','create',10)"
                                                v-model="$v.create.rp_code.$model"
                                                :class="{
                                                'is-invalid':$v.create.rp_code.$error || errors.rp_code,
                                                'is-valid':!$v.create.rp_code.$invalid && !errors.rp_code
                                            }"
                                            />
                                            <template v-if="errors.rp_code">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.rp_code" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label  class="control-label">
                                                {{ $t('general.national') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                data-create="9"
                                                step="0.1"
                                                @keypress.enter="moveInput('select','create',10)"
                                                v-model="$v.create.national_id.$model"
                                                :class="{
                                                'is-invalid':$v.create.national_id.$error || errors.national_id,
                                                'is-valid':!$v.create.national_id.$invalid && !errors.national_id
                                            }"
                                            />
                                            <template v-if="errors.national_id">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.national_id" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label  class="control-label">
                                                {{ $t('general.passport') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                data-create="9"
                                                step="0.1"
                                                @keypress.enter="moveInput('select','create',10)"
                                                v-model="$v.create.passport_no.$model"
                                                :class="{
                                                'is-invalid':$v.create.passport_no.$error || errors.passport_no,
                                                'is-valid':!$v.create.passport_no.$invalid && !errors.passport_no
                                            }"
                                            />
                                            <template v-if="errors.passport_no">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.passport_no" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label  class="control-label">
                                                {{ $t('general.contact_phones') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                data-create="9"
                                                step="0.1"
                                                @keypress.enter="moveInput('select','create',10)"
                                                v-model="$v.create.contact_phones.$model"
                                                :class="{
                                                'is-invalid':$v.create.contact_phones.$error || errors.contact_phones,
                                                'is-valid':!$v.create.contact_phones.$invalid && !errors.contact_phones
                                            }"
                                            />
                                            <template v-if="errors.contact_phones">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.contact_phones" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label class="control-label">
                                                {{ $t('general.whatsapp') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                data-create="9"
                                                @keypress.enter="moveInput('select','create',10)"
                                                v-model="$v.create.whatsapp.$model"
                                                :class="{
                                                'is-invalid':$v.create.whatsapp.$error || errors.whatsapp,
                                                'is-valid':!$v.create.whatsapp.$invalid && !errors.whatsapp
                                            }"
                                            />
                                            <template v-if="errors.whatsapp">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.whatsapp" :key="index">{{ errorMessage }}</ErrorMessage>
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
                                                <i class="fas fa-arrow-up" @click="customers.sort(sortString('name'))"></i>
                                                <i class="fas fa-arrow-down" @click="customers.sort(sortString('-name'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.name_e">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.Name_en') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="customers.sort(sortString('name_e'))"></i>
                                                <i class="fas fa-arrow-down" @click="customers.sort(sortString('-name_e'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.phone">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.phone') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="customers.sort(sortNumber('phone'))"></i>
                                                <i class="fas fa-arrow-down" @click="customers.sort(sortNumber('-phone'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.email">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.email') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="customers.sort(sortString('email'))"></i>
                                                <i class="fas fa-arrow-down" @click="customers.sort(sortString('-email'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.nationality_id">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.nationality') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="customers.sort(SortNumber('nationality'))"></i>
                                                <i class="fas fa-arrow-down" @click="customers.sort(SortNumber('-nationality'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.national_id">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.national') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="customers.sort(sortNumber('national_id'))"></i>
                                                <i class="fas fa-arrow-down" @click="customers.sort(sortNumber('-national_id'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.contact_person">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.contact_person') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="customers.sort(sortString('contact_person'))"></i>
                                                <i class="fas fa-arrow-down" @click="customers.sort(sortString('-contact_person'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.contact_phones">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.contact_phones') }}</span>
                                        </div>
                                    </th>
                                    <th v-if="setting.country_id">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.country') }}</span>
                                        </div>
                                    </th>
                                    <th v-if="setting.city_id">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.city') }}</span>
                                        </div>
                                    </th>
                                    <th v-if="setting.bank_account_id">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.bankAccount') }}</span>
                                        </div>
                                    </th>
                                    <th v-if="setting.whatsapp">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.whatsapp') }}</span>
                                        </div>
                                    </th>
                                    <th v-if="setting.rp_code">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.code') }}</span>
                                        </div>
                                    </th>
                                    <th>
                                        {{ $t('general.Action') }}
                                    </th>
                                    <th><i class="fas fa-ellipsis-v"></i></th>
                                </tr>
                                </thead>
                                <tbody v-if="customers.length > 0">
                                <tr
                                    @click.capture="checkRow(data.id)"
                                    @dblclick.prevent="$bvModal.show(`modal-edit-${data.id}`)"
                                    v-for="(data,index) in customers"
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
                                    <td v-if="setting.phone">{{ data.phone }}</td>
                                    <td v-if="setting.email">{{ data.email }}</td>
                                    <td v-if="setting.nationality_id">{{ data.nationality_id }}</td>
                                    <td v-if="setting.national_id">{{ data.national_id }}</td>
                                    <td v-if="setting.contact_person">{{ data.contact_person }}</td>
                                    <td v-if="setting.contact_phones">{{ data.contact_phones }}</td>
                                    <td v-if="setting.country_id">{{ data.country_id }}</td>
                                    <td v-if="setting.city_id">{{ data.city_id }}</td>
                                    <td v-if="setting.bank_account_id">{{ data.bank_account_id }}</td>
                                    <td v-if="setting.whatsapp">{{ data.whatsapp }}</td>
                                    <td v-if="setting.rp_code">{{ data.rp_code }}</td>
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
                                            :title="$t('general.editcustomer')"
                                            title-class="font-18"
                                            body-class="p-4"
                                            dialog-class="modal-full-width"
                                            :ref="`edit-${data.id}`"
                                            :hide-footer="true"
                                            @show="resetModalEdit(data.id)"
                                            @hidden="resetModalHiddenEdit(data.id)"
                                        >
                                            <form>
                                                <div class="mb-3 d-flex justify-content-end">
                                                    <!-- Emulate built in modal footer ok and cancel button actions -->
                                                    <b-button variant="success" type="submit" class="mx-1"
                                                              v-if="!isLoader"
                                                              @click.prevent="editSubmit(data.id)"
                                                    >
                                                        {{ $t('general.Edit') }}
                                                    </b-button>

                                                    <b-button variant="success" class="mx-1" disabled v-else>
                                                        <b-spinner small></b-spinner>
                                                        <span class="sr-only">{{ $t('login.Loading') }}...</span>
                                                    </b-button>

                                                    <b-button
                                                        variant="danger"
                                                        type="button"
                                                        @click.prevent="$bvModal.hide(`modal-edit-${data.id}`)"
                                                    >
                                                        {{ $t('general.Cancel') }}
                                                    </b-button>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="form-group position-relative">
                                                            <label class="control-label">
                                                                {{ $t("general.country") }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <multiselect
                                                                @input="showCountryModalEdit"
                                                                v-model="$v.edit.country_id.$model"
                                                                :options="countries.map((type) => type.id)"
                                                                :custom-label="(opt) => countries.find((x) => x.id == opt).name"
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
                                                    <div class="col-md-4">
                                                        <div class="form-group position-relative">
                                                            <label class="control-label">
                                                                {{ $t("general.city") }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <multiselect
                                                                @input="getCity()"
                                                                v-model="$v.edit.city_id.$model"
                                                                :options="cities.map((type) => type.id)"
                                                                :custom-label="(opt) => cities.find((x) => x.id == opt).name"
                                                            >
                                                            </multiselect>
                                                            <div
                                                                v-if="$v.edit.city_id.$error || errors.city_id"
                                                                class="text-danger"
                                                            >
                                                                {{ $t("general.fieldIsRequired") }}
                                                            </div>
                                                            <template v-if="errors.city_id">
                                                                <ErrorMessage
                                                                    v-for="(errorMessage, index) in errors.city_id"
                                                                    :key="index"
                                                                >{{ errorMessage }}</ErrorMessage
                                                                >
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group position-relative">
                                                            <label class="control-label">
                                                                {{ $t("general.bankAccount") }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <multiselect
                                                                @input="showBankAccountEdit"
                                                                v-model="$v.edit.bank_account_id.$model"
                                                                :options="bank_accounts.map((type) => type.id)"
                                                                :custom-label="(opt) => bank_accounts.find((x) => x.id == opt).name"
                                                            >
                                                            </multiselect>
                                                            <div
                                                                v-if="$v.edit.bank_account_id.$error || errors.bank_account_id"
                                                                class="text-danger"
                                                            >
                                                                {{ $t("general.fieldIsRequired") }}
                                                            </div>
                                                            <template v-if="errors.bank_account_id">
                                                                <ErrorMessage
                                                                    v-for="(errorMessage, index) in errors.bank_account_id"
                                                                    :key="index"
                                                                >{{ errorMessage }}</ErrorMessage
                                                                >
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label for="field-1" class="control-label">
                                                                {{ $t('general.Name') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <div dir="rtl">
                                                                <input
                                                                    type="text"
                                                                    class="form-control arabicInput"
                                                                    data-edit="1"
                                                                    @keypress.enter="moveInput('input','edit',2)"
                                                                    v-model="$v.edit.name.$model"
                                                                    :class="{
                                                    'is-invalid':$v.edit.name.$error || errors.name,
                                                    'is-valid':!$v.edit.name.$invalid && !errors.name
                                                }"
                                                                />
                                                            </div>
                                                            <div v-if="!$v.edit.name.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.name.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.name.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.name.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <template v-if="errors.name">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.name" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label for="field-2" class="control-label">
                                                                {{ $t('general.Name_en') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <div dir="ltr">
                                                                <input
                                                                    type="text"
                                                                    class="form-control englishInput"
                                                                    data-edit="2"
                                                                    @keypress.enter="moveInput('input','edit',3)"
                                                                    v-model="$v.edit.name_e.$model"
                                                                    :class="{
                                                        'is-invalid':$v.edit.name_e.$error || errors.name_e,
                                                        'is-valid':!$v.edit.name_e.$invalid && !errors.name_e
                                                    }"
                                                                />
                                                            </div>
                                                            <div v-if="!$v.edit.name_e.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.edit.name_e.$params.minLength.min }} {{ $t('general.letters') }}</div>
                                                            <div v-if="!$v.edit.name_e.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.name_e.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <template v-if="errors.name_e">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.name_e" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                {{ $t('general.phone') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                data-edit="9"
                                                                @keypress.enter="moveInput('select','edit',10)"
                                                                v-model="$v.edit.phone.$model"
                                                                :class="{
                                                'is-invalid':$v.edit.phone.$error || errors.phone,
                                                'is-valid':!$v.edit.phone.$invalid && !errors.phone
                                            }"
                                                            />
                                                            <template v-if="errors.phone">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.phone" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                {{ $t('general.email') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                data-edit="9"
                                                                @keypress.enter="moveInput('select','edit',10)"
                                                                v-model="$v.edit.email.$model"
                                                                :class="{
                                                'is-invalid':$v.edit.email.$error || errors.email,
                                                'is-valid':!$v.edit.email.$invalid && !errors.email
                                            }"
                                                            />
                                                            <template v-if="errors.email">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.email" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                {{ $t('general.contact_person') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                data-edit="9"
                                                                @keypress.enter="moveInput('select','edit',10)"
                                                                v-model="$v.edit.contact_person.$model"
                                                                :class="{
                                                'is-invalid':$v.edit.contact_person.$error || errors.contact_person,
                                                'is-valid':!$v.edit.contact_person.$invalid && !errors.contact_person
                                            }"
                                                            />
                                                            <template v-if="errors.contact_person">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.contact_person" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label  class="control-label">
                                                                {{ $t('general.code') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="number"
                                                                class="form-control"
                                                                data-edit="9"
                                                                @keypress.enter="moveInput('select','edit',10)"
                                                                v-model="$v.edit.rp_code.$model"
                                                                :class="{
                                                'is-invalid':$v.edit.rp_code.$error || errors.rp_code,
                                                'is-valid':!$v.edit.rp_code.$invalid && !errors.rp_code
                                            }"
                                                            />
                                                            <template v-if="errors.rp_code">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.rp_code" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label  class="control-label">
                                                                {{ $t('general.national') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="number"
                                                                class="form-control"
                                                                data-edit="9"
                                                                step="0.1"
                                                                @keypress.enter="moveInput('select','edit',10)"
                                                                v-model="$v.edit.national_id.$model"
                                                                :class="{
                                                'is-invalid':$v.edit.national_id.$error || errors.national_id,
                                                'is-valid':!$v.edit.national_id.$invalid && !errors.national_id
                                            }"
                                                            />
                                                            <template v-if="errors.national_id">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.national_id" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label  class="control-label">
                                                                {{ $t('general.passport') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="number"
                                                                class="form-control"
                                                                data-edit="9"
                                                                step="0.1"
                                                                @keypress.enter="moveInput('select','create',10)"
                                                                v-model="$v.edit.passport_no.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.passport_no.$error || errors.passport_no,
                                                                    'is-valid':!$v.edit.passport_no.$invalid && !errors.passport_no
                                                                }"
                                                            />
                                                            <template v-if="errors.passport_no">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.passport_no" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label  class="control-label">
                                                                {{ $t('general.contact_phones') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="number"
                                                                class="form-control"
                                                                data-edit="9"
                                                                step="0.1"
                                                                @keypress.enter="moveInput('select','edit',10)"
                                                                v-model="$v.edit.contact_phones.$model"
                                                                :class="{
                                                'is-invalid':$v.edit.contact_phones.$error || errors.contact_phones,
                                                'is-valid':!$v.edit.contact_phones.$invalid && !errors.contact_phones
                                            }"
                                                            />
                                                            <template v-if="errors.contact_phones">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.contact_phones" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                {{ $t('general.whatsapp') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                data-edit="9"
                                                                @keypress.enter="moveInput('select','edit',10)"
                                                                v-model="$v.edit.whatsapp.$model"
                                                                :class="{
                                                                    'is-invalid':$v.edit.whatsapp.$error || errors.whatsapp,
                                                                    'is-valid':!$v.edit.whatsapp.$invalid && !errors.whatsapp
                                                                }"
                                                            />
                                                            <template v-if="errors.whatsapp">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.whatsapp" :key="index">{{ errorMessage }}</ErrorMessage>
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
                                    <th class="text-center" colspan="16">{{ $t('general.notDataFound') }}</th>
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
<style scope>
.dropdown-menu-custom-company.dropdown .dropdown-menu {
    padding: 5px 10px !important;
    overflow-y: scroll;
    height: 300px;
}
</style>

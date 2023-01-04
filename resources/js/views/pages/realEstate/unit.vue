<script>
import Layout from "../../layouts/main";
import PageHeader from "../../../components/Page-header";
import adminApi from "../../../api/adminAxios";
import Switches from "vue-switches";
import { required, minLength, maxLength ,integer, numeric } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import ErrorMessage from "../../../components/widgets/errorMessage";
import loader from "../../../components/loader";
import {dynamicSortNumber, dynamicSortString} from "../../../helper/tableSort";
import {formatDateOnly, formatDateTime} from "../../../helper/startDate";
import Multiselect from "vue-multiselect";
import DatePicker from "vue2-datepicker";
import translation from "../../../helper/translation-mixin";

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
/**
 * Advanced Table component
 */

export default {
    page: {
        title: "units",
        meta: [{ name: "description", content: 'units' }],
    },
    mixins: [translation],
    components: {
        Layout,
        PageHeader,
        Switches,
        ErrorMessage,
        loader,
        DatePicker,
        Multiselect
    },
    data() {
        return {
            per_page: 50,
            search: '',
            debounce: {},
            editorOption: {
                // Some Quill options...
                theme: "snow",
                modules: {
                    toolbar: [
                        [
                            {
                                font: [],
                            },
                            {
                                size: [],
                            },
                        ],
                        ["bold", "italic", "underline", "strike"],
                        [
                            {
                                color: [],
                            },
                            {
                                background: [],
                            },
                        ],
                        [
                            {
                                script: "super",
                            },
                            {
                                script: "sub",
                            },
                        ],
                        [
                            {
                                header: [false, 1, 2, 3, 4, 5, 6],
                            },
                            "blockquote",
                            "code-block",
                        ],
                        [
                            {
                                list: "ordered",
                            },
                            {
                                list: "bullet",
                            },
                            {
                                indent: "-1",
                            },
                            {
                                indent: "+1",
                            },
                        ],
                        [
                            "direction",
                            {
                                align: [],
                            },
                        ],
                        ["link", "image", "video"],
                        ["clean"],
                    ],
                },
            },
            unitsPagination: {},
            units: [],
            buildings: [],
            unit_status: [],
            owners: [],
            currencies: [],
            wallets: [],
            modules: [],
            isLoader: false,
            create: {
                name: '', //
                name_e: '', //
                description: '', //
                description_e: '', //
                code: '',
                unit_ty: 0,
                status_date: null,  // date
                unit_area: 0,
                module_id: null, //
                building_id: null, //
                owner_id: null , //
                currency_id: null, //
                wallet_id: null, //
                unit_status_id: null, //
                commission_ty: 0,
                commission_value: 0,
                price: 0,
                rooms: 0,
                path: 0,
                view: 0,
                floor: 0,
                rank: 0
            },
            edit: {
                name: '',
                name_e: '',
                description: '',
                description_e: '',
                code: '',
                unit_ty: 0,
                status_date: null,  // date
                unit_area: 0,
                module_id: null,
                building_id: null,
                owner_id: null ,
                currency_id: null,
                wallet_id: null,
                unit_status_id: null,
                commission_ty: 0,
                commission_value: 0,
                price: 0,
                rooms: 0,
                path: 0,
                view: 0,
                floor: 0,
                rank: 0
            },
            custom_date_start: new Date(),
            errors: {},
            isCheckAll: false,
            checkAll: [],
            current_page: 1,
            image: '',
            setting: {
                name: true,
                name_e: true,
                description: true,
                description_e: true,
                code: true,
                unit_ty: true,
                status_date: true,  // date
                unit_area: true,
                module_id: true,
                building_id: true,
                owner_id: true ,
                currency_id: true,
                wallet_id: true,
                unit_status_id: true,
                commission_ty: true,
                commission_value: true,
                price: true,
                rooms: true,
                path: true,
                view: true,
                floor: true,
                rank: true
            },
            is_disabled: false,
            filterSetting: [
                'name',
                'name_e',
                'description',
                'description_e',
                'code',
                'unit_ty',
                'status_date',  // date
                'unit_area',
                'building_id',
                'owner_id' ,
                'currency_id',
                'wallet_id',
                this.$i18n.locale == 'ar'? 'unitStatus.name' : 'unitStatus.name_e',
                'commission_ty',
                'commission_value',
                'price',
                'rooms',
                'path',
                'view',
                'floor',
                'rank'
            ],
            Tooltip: '',
            mouseEnter: null
        }
    },
    validations: {
        create: {
            name: {required,minLength: minLength(2),maxLength: maxLength(100),},
            name_e: {required,minLength: minLength(2),maxLength: maxLength(100),},
            description: {maxLength: maxLength(1000)},
            description_e: {maxLength: maxLength(1000)},
            code: {required,maxLength: maxLength(20),},
            unit_ty: {integer},
            unit_area: {numeric},
            status_date: {},
            module_id: {required,integer},
            building_id: {integer},
            owner_id: {integer},
            currency_id: {integer},
            wallet_id: {integer},
            unit_status_id: {integer},
            commission_ty: {integer},
            commission_value: {numeric},
            price: {numeric},
            rooms: {integer},
            path: {integer},
            view: {integer},
            floor: {integer},
            rank: {integer},
        },
        edit: {
            name: {required,minLength: minLength(2),maxLength: maxLength(100),},
            name_e: {required,minLength: minLength(2),maxLength: maxLength(100),},
            description: {maxLength: maxLength(1000)},
            description_e: {maxLength: maxLength(1000)},
            code: {required,maxLength: maxLength(20),},
            unit_ty: {integer},
            unit_area: {numeric},
            status_date: {},
            module_id: {required,integer},
            building_id: {integer},
            owner_id: {integer},
            currency_id: {integer},
            wallet_id: {integer},
            unit_status_id: {integer},
            commission_ty: {integer},
            commission_value: {numeric},
            price: {numeric},
            rooms: {integer},
            path: {integer},
            view: {integer},
            floor: {integer},
            rank: {integer},
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
                this.units.forEach(el => {
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
         *  start get Data units && pagination
         */
        getData(page = 1){
            this.isLoader = true;
            let filter = '';
            for (let i = 0; i < this.filterSetting.length; ++i) {
                filter += `columns[${i}]=${this.filterSetting[i]}&`;
            }

            adminApi.get(`/real-estate/units?page=${page}&per_page=${this.per_page}&search=${this.search}&${filter}`)
                .then((res) => {
                    let l = res.data;
                    this.units = l.data;
                    this.unitsPagination = l.pagination;
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
            if(this.current_page <= this.unitsPagination.last_page && this.current_page != this.unitsPagination.current_page && this.current_page){
                this.isLoader = true;
                let filter = '';
                for (let i = 0; i < this.filterSetting.length; ++i) {
                    filter += `columns[${i}]=${this.filterSetting[i]}&`;
                }

                adminApi.get(`/real-estate/units?page=${page}&per_page=${this.per_page}&search=${this.search}&${filter}`)
                    .then((res) => {
                        let l = res.data;
                        this.units = l.data;
                        this.unitsPagination = l.pagination;
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
                            .post(`/real-estate/units/bulk-delete`, { ids: id })
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
                            .delete(`/real-estate/units/${id}`)
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
                name: '', //
                name_e: '', //
                description: '', //
                description_e: '', //
                code: '',
                unit_ty: 0,
                status_date: null,  // date
                unit_area: 0,
                module_id: null, //
                building_id: null, //
                owner_id: null , //
                currency_id: null, //
                wallet_id: null, //
                unit_status_id: null, //
                commission_ty: 0,
                commission_value: 0,
                price: 0,
                rooms: 0,
                path: 0,
                view: 0,
                floor: 0,
                rank: 0
            };
            this.$nextTick(() => { this.$v.$reset() });
            this.errors = {};
            this.$bvModal.hide(`create`);
        },
        /**
         *  hidden Modal (create)
         */
        async resetModal(){
            this.create = {
                name: '', //
                name_e: '', //
                description: '', //
                description_e: '', //
                code: '',
                unit_ty: 0,
                status_date: null,  // date
                unit_area: 0,
                module_id: null, //
                building_id: null, //
                owner_id: null , //
                currency_id: null, //
                wallet_id: null, //
                unit_status_id: null, //
                commission_ty: 0,
                commission_value: 0,
                price: 0,
                rooms: 0,
                path: 0,
                view: 0,
                floor: 0,
                rank: 0
            };
            this.$nextTick(() => { this.$v.$reset() });
            this.errors = {};
        },
        /**
         *  create countrie
         */
        async resetForm(){
            this.create = {
                name: '', //
                name_e: '', //
                description: '', //
                description_e: '', //
                code: '',
                unit_ty: 0,
                status_date: null,  // date
                unit_area: 0,
                module_id: null, //
                building_id: null, //
                owner_id: null , //
                currency_id: null, //
                wallet_id: null, //
                unit_status_id: null, //
                commission_ty: 0,
                commission_value: 0,
                price: 0,
                rooms: 0,
                path: 0,
                view: 0,
                floor: 0,
                rank: 0
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

                adminApi.post(`/real-estate/units`,this.create)
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

                adminApi.put(`/real-estate/units/${id}`,this.edit)
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
            let build = this.units.find(e => id == e.id );
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
                name: '', //
                name_e: '', //
                description: '', //
                description_e: '', //
                code: '',
                unit_ty: 0,
                status_date: null,  // date
                unit_area: 0,
                module_id: null, //
                building_id: null, //
                owner_id: null , //
                currency_id: null, //
                wallet_id: null, //
                unit_status_id: null, //
                commission_ty: 0,
                commission_value: 0,
                price: 0,
                rooms: 0,
                path: 0,
                view: 0,
                floor: 0,
                rank: 0
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
        },
        formatDate(value) {
            return formatDateOnly(value);
        },
        log(id) {
            if(this.mouseEnter != id){
                this.Tooltip = "";
                this.mouseEnter = id;
                adminApi
                    .get(`/real-estate/units/logs/${id}`)
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
        start_date(e) {
            if (e) {
                this.create.start_date = formatDateTime(e);
                this.edit.start_date = formatDateTime(e);
            } else {
                this.create.start_date = null;
                this.edit.start_date = null;
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

                        <!-- start search -->
                        <div class="row justify-content-between align-items-center mb-2">
                            <h4 class="header-title"> {{ $t('general.buildsTable') }}</h4>
                            <div class="col-xs-10 col-md-9 col-lg-7" style="font-weight: 500">
                                <div class="d-inline-block" style="width: 22.2%;">
                                    <!-- Basic dropdown -->
                                    <b-dropdown variant="primary" :text="$t('general.searchSetting')" ref="dropdown" class="btn-block setting-search dropdown-menu-custom-company">
                                        <b-form-checkbox v-model="filterSetting" value="name" class="mb-1">{{ getCompanyKey('realEstate_unit_name_ar') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="name_e" class="mb-1">{{ getCompanyKey('realEstate_unit_name_en') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="description" class="mb-1">{{ getCompanyKey('realEstate_unit_description_ar') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="description_e" class="mb-1">{{ getCompanyKey('realEstate_unit_description_en') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="code" class="mb-1">{{ getCompanyKey('realEstate_unit_code') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="unit_ty" class="mb-1">{{ getCompanyKey('realEstate_unit_unit_ty') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="unit_area" class="mb-1">{{ getCompanyKey('realEstate_unit_unit_area') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="building_id" class="mb-1">{{ getCompanyKey('realEstate_unit_building') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="owner_id" class="mb-1">{{ getCompanyKey('realEstate_unit_owner') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="currency_id" class="mb-1">{{ getCompanyKey('realEstate_unit_currency') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="wallet_id" class="mb-1">{{ getCompanyKey('realEstate_unit_wallet') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" :value="$i18n.locale == 'ar'? 'unitStatus.name' : 'unitStatus.name_e'" class="mb-1">{{ getCompanyKey('realEstate_unit_unit_status') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="commission_ty" class="mb-1">{{ getCompanyKey('realEstate_unit_commission_ty') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="commission_value" class="mb-1">{{ getCompanyKey('realEstate_unit_commission_value') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="price" class="mb-1">{{ getCompanyKey('realEstate_unit_price') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="rooms" class="mb-1">{{ getCompanyKey('realEstate_unit_rooms') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="path" class="mb-1">{{ getCompanyKey('realEstate_unit_path') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="view" class="mb-1">{{ getCompanyKey('realEstate_unit_view') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="floor" class="mb-1">{{ getCompanyKey('realEstate_unit_floor') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="rank" class="mb-1">{{ getCompanyKey('realEstate_unit_rank') }}</b-form-checkbox>
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
                                            <b-form-checkbox v-model="setting.name" class="mb-1">{{ getCompanyKey('realEstate_unit_name_ar') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.name_e" class="mb-1">{{ getCompanyKey('realEstate_unit_name_en') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.description" class="mb-1">{{ getCompanyKey('realEstate_unit_description_ar') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.description_e"  class="mb-1">{{ getCompanyKey('realEstate_unit_description_en') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.code" class="mb-1">{{ getCompanyKey('realEstate_unit_code') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.unit_ty"  class="mb-1">{{ getCompanyKey('realEstate_unit_unit_ty') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.unit_area"  class="mb-1">{{ getCompanyKey('realEstate_unit_unit_area') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.building_id" class="mb-1">{{ getCompanyKey('realEstate_unit_building') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.owner_id" class="mb-1">{{ getCompanyKey('realEstate_unit_owner') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.currency_id"  class="mb-1">{{ getCompanyKey('realEstate_unit_currency') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.wallet_id"  class="mb-1">{{ getCompanyKey('realEstate_unit_wallet') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.unit_status_id"  class="mb-1">{{ getCompanyKey('realEstate_unit_status') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.commission_ty" class="mb-1">{{ getCompanyKey('realEstate_unit_commission_ty') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.commission_value" class="mb-1">{{ getCompanyKey('realEstate_unit_commission_value') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.price" class="mb-1">{{ getCompanyKey('realEstate_unit_price') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.rooms" class="mb-1">{{ getCompanyKey('realEstate_unit_rooms') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.path" class="mb-1">{{ getCompanyKey('realEstate_unit_path') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.view" class="mb-1">{{ getCompanyKey('realEstate_unit_view') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.floor"  class="mb-1">{{ getCompanyKey('realEstate_unit_floor') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.rank" class="mb-1">{{ getCompanyKey('realEstate_unit_rank') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.module_id" class="mb-1">{{  getCompanyKey('realEstate_unit_module') }}</b-form-checkbox>
                                            <b-form-checkbox v-model="setting.status_date" class="mb-1">{{  getCompanyKey('realEstate_unit_status_date') }}</b-form-checkbox>
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
                                            {{ unitsPagination.from }}-{{ unitsPagination.to }} / {{ unitsPagination.total }}
                                        </div>
                                        <div class="d-inline-block">
                                            <a
                                                href="javascript:void(0)"
                                                :style="{'pointer-events':unitsPagination.current_page == 1 ? 'none': ''}"
                                                @click.prevent="getData(unitsPagination.current_page - 1)"
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
                                                :style="{'pointer-events':unitsPagination.last_page == unitsPagination.current_page ? 'none': ''}"
                                                @click.prevent="getData(unitsPagination.current_page + 1)"
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
                            :title="$t('general.addbuild')"
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
                                    <div class="col-md-3">
                                        <div class="form-group position-relative">
                                            <label class="control-label">
                                                {{ $t("general.module") }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <multiselect
                                                v-model="$v.create.module_id.$model"
                                                :options="modules.map((type) => type.id)"
                                                :custom-label="(opt) => modules.find((x) => x.id == opt).name"
                                            >
                                            </multiselect>
                                            <div
                                                v-if="$v.create.module_id.$error || errors.module_id"
                                                class="text-danger"
                                            >
                                                {{ $t("general.fieldIsRequired") }}
                                            </div>
                                            <template v-if="errors.module_id">
                                                <ErrorMessage
                                                    v-for="(errorMessage, index) in errors.module_id"
                                                    :key="index"
                                                >{{ errorMessage }}</ErrorMessage
                                                >
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group position-relative">
                                            <label class="control-label">
                                                {{ getCompanyKey('realEstate_unit_building') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <multiselect
                                                v-model="$v.create.building_id.$model"
                                                :options="buildings.map((type) => type.id)"
                                                :custom-label="(opt) => $i18n.locale == 'ar' ?  buildings.find((x) => x.id == opt).name:buildings.find((x) => x.id == opt).name_e"
                                            >
                                            </multiselect>
                                            <div
                                                v-if="$v.create.building_id.$error || errors.building_id"
                                                class="text-danger"
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
                                    <div class="col-md-3">
                                        <div class="form-group position-relative">
                                            <label class="control-label">
                                                {{ getCompanyKey('realEstate_unit_owner') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <multiselect
                                                v-model="$v.create.owner_id.$model"
                                                :options="owners.map((type) => type.id)"
                                                :custom-label="(opt) => $i18n.locale == 'ar' ? owners.find((x) => x.id == opt).name : owners.find((x) => x.id == opt).name_e"
                                            >
                                            </multiselect>
                                            <div
                                                v-if="$v.create.owner_id.$error || errors.owner_id"
                                                class="text-danger"
                                            >
                                                {{ $t("general.fieldIsRequired") }}
                                            </div>
                                            <template v-if="errors.owner_id">
                                                <ErrorMessage
                                                    v-for="(errorMessage, index) in errors.owner_id"
                                                    :key="index"
                                                >{{ errorMessage }}</ErrorMessage
                                                >
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group position-relative">
                                            <label class="control-label">
                                                {{ getCompanyKey('realEstate_unit_currency') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <multiselect
                                                v-model="$v.create.currency_id.$model"
                                                :options="currencies.map((type) => type.id)"
                                                :custom-label="(opt) => $i18n.locale == 'ar' ?currencies.find((x) => x.id == opt).name:currencies.find((x) => x.id == opt).name_e"
                                            >
                                            </multiselect>
                                            <div
                                                v-if="$v.create.currency_id.$error || errors.currency_id"
                                                class="text-danger"
                                            >
                                                {{ $t("general.fieldIsRequired") }}
                                            </div>
                                            <template v-if="errors.currency_id">
                                                <ErrorMessage
                                                    v-for="(errorMessage, index) in errors.currency_id"
                                                    :key="index"
                                                >{{ errorMessage }}</ErrorMessage
                                                >
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group position-relative">
                                            <label class="control-label">
                                                {{ getCompanyKey('realEstate_unit_wallet') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <multiselect
                                                v-model="$v.create.wallet_id.$model"
                                                :options="wallets.map((type) => type.id)"
                                                :custom-label="(opt) => $i18n.locale == 'ar' ?wallets.find((x) => x.id == opt).name:wallets.find((x) => x.id == opt).name_e"
                                            >
                                            </multiselect>
                                            <div
                                                v-if="$v.create.wallet_id.$error || errors.wallet_id"
                                                class="text-danger"
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
                                    <div class="col-md-3">
                                        <div class="form-group position-relative">
                                            <label class="control-label">
                                                {{ getCompanyKey('realEstate_unit_status') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <multiselect
                                                v-model="$v.create.unit_status_id.$model"
                                                :options="unit_status.map((type) => type.id)"
                                                :custom-label="(opt) => $i18n.locale == 'ar' ?unit_status.find((x) => x.id == opt).name:unit_status.find((x) => x.id == opt).name_e"
                                            >
                                            </multiselect>
                                            <div
                                                v-if="$v.create.unit_status_id.$error || errors.unit_status_id"
                                                class="text-danger"
                                            >
                                                {{ $t("general.fieldIsRequired") }}
                                            </div>
                                            <template v-if="errors.unit_status_id">
                                                <ErrorMessage
                                                    v-for="(errorMessage, index) in errors.unit_status_id"
                                                    :key="index"
                                                >{{ errorMessage }}</ErrorMessage
                                                >
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label  class="control-label">
                                                {{ getCompanyKey('realEstate_unit_unit_ty') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                data-create="9"
                                                @keypress.enter="moveInput('select','create',10)"
                                                v-model="$v.create.unit_ty.$model"
                                                :class="{
                                                'is-invalid':$v.create.unit_ty.$error || errors.unit_ty,
                                                'is-valid':!$v.create.unit_ty.$invalid && !errors.unit_ty
                                            }"
                                            />
                                            <template v-if="errors.unit_ty">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.unit_ty" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label  class="control-label">
                                                {{ getCompanyKey('realEstate_unit_unit_area') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                data-create="9"
                                                step="0.1"
                                                @keypress.enter="moveInput('select','create',10)"
                                                v-model="$v.create.unit_area.$model"
                                                :class="{
                                                'is-invalid':$v.create.unit_area.$error || errors.unit_area,
                                                'is-valid':!$v.create.unit_area.$invalid && !errors.unit_area
                                            }"
                                            />
                                            <template v-if="errors.unit_area">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.land_area" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label  class="control-label">
                                                {{ getCompanyKey('realEstate_unit_commission_ty') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                data-create="9"
                                                @keypress.enter="moveInput('select','create',10)"
                                                v-model="$v.create.commission_ty.$model"
                                                :class="{
                                                'is-invalid':$v.create.commission_ty.$error || errors.commission_ty,
                                                'is-valid':!$v.create.commission_ty.$invalid && !errors.commission_ty
                                            }"
                                            />
                                            <template v-if="errors.commission_ty">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.commission_ty" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label class="control-label">
                                                {{ getCompanyKey('realEstate_unit_commission_value') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                data-create="9"
                                                step="0.1"
                                                @keypress.enter="moveInput('select','create',10)"
                                                v-model="$v.create.commission_value.$model"
                                                :class="{
                                                'is-invalid':$v.create.commission_value.$error || errors.commission_value,
                                                'is-valid':!$v.create.commission_value.$invalid && !errors.commission_value
                                            }"
                                            />
                                            <template v-if="errors.commission_value">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.commission_value" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label class="control-label">
                                                {{ getCompanyKey('realEstate_unit_price') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                step="0.01"
                                                data-create="9"
                                                @keypress.enter="moveInput('select','create',10)"
                                                v-model="$v.create.price.$model"
                                                :class="{
                                                'is-invalid':$v.create.price.$error || errors.price,
                                                'is-valid':!$v.create.price.$invalid && !errors.price
                                            }"
                                            />
                                            <template v-if="errors.price">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.price" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label class="control-label">
                                                {{ getCompanyKey('realEstate_unit_rooms') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                data-create="9"
                                                @keypress.enter="moveInput('select','create',10)"
                                                v-model="$v.create.rooms.$model"
                                                :class="{
                                                'is-invalid':$v.create.rooms.$error || errors.rooms,
                                                'is-valid':!$v.create.rooms.$invalid && !errors.rooms
                                            }"
                                            />
                                            <template v-if="errors.rooms">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.rooms" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label class="control-label">
                                                {{ getCompanyKey('realEstate_unit_path') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                data-create="9"
                                                @keypress.enter="moveInput('select','create',10)"
                                                v-model="$v.create.path.$model"
                                                :class="{
                                                'is-invalid':$v.create.path.$error || errors.path,
                                                'is-valid':!$v.create.path.$invalid && !errors.path
                                            }"
                                            />
                                            <template v-if="errors.path">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.path" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label class="control-label">
                                                {{ getCompanyKey('realEstate_unit_view') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                data-create="9"
                                                @keypress.enter="moveInput('select','create',10)"
                                                v-model="$v.create.view.$model"
                                                :class="{
                                                'is-invalid':$v.create.view.$error || errors.view,
                                                'is-valid':!$v.create.view.$invalid && !errors.view
                                            }"
                                            />
                                            <template v-if="errors.view">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.view" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label class="control-label">
                                                {{ getCompanyKey('realEstate_unit_floor') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                data-create="9"
                                                @keypress.enter="moveInput('select','create',10)"
                                                v-model="$v.create.floor.$model"
                                                :class="{
                                                'is-invalid':$v.create.floor.$error || errors.floor,
                                                'is-valid':!$v.create.floor.$invalid && !errors.floor
                                            }"
                                            />
                                            <template v-if="errors.floor">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.floor" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label class="control-label">
                                                {{ getCompanyKey('realEstate_unit_rank') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                data-create="9"
                                                step="0.1"
                                                @keypress.enter="moveInput('select','create',10)"
                                                v-model="$v.create.rank.$model"
                                                :class="{
                                                'is-invalid':$v.create.rank.$error || errors.rank,
                                                'is-valid':!$v.create.rank.$invalid && !errors.rank
                                            }"
                                            />
                                            <template v-if="errors.rank">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.rank" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label class="control-label">
                                                {{ getCompanyKey('realEstate_unit_status_date') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <date-picker
                                                v-model="custom_date_start"
                                                type="datetime"
                                                :default-value="custom_date_start"
                                                @change="start_date"
                                                confirm
                                            ></date-picker>
                                            <template v-if="errors.status_date">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.status_date" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="field-1" class="control-label">
                                                {{ getCompanyKey('realEstate_unit_name_ar') }}
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
                                                {{ getCompanyKey('realEstate_unit_name_en') }}
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
                                            <label for="field-4353" class="control-label">
                                                {{ getCompanyKey('realEstate_unit_code') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <div dir="ltr">
                                                <input
                                                    type="text"
                                                    class="form-control englishInput"
                                                    data-create="2"
                                                    @keypress.enter="moveInput('input','create',3)"
                                                    v-model="$v.create.code.$model"
                                                    :class="{
                                                        'is-invalid':$v.create.code.$error || errors.code,
                                                        'is-valid':!$v.create.code.$invalid && !errors.code
                                                    }"
                                                    id="field-4353"
                                                />
                                            </div>
                                            <div v-if="!$v.create.code.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.code.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                            <template v-if="errors.code">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.code" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="mr-2">
                                                {{ getCompanyKey('realEstate_unit_description_ar') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <quill-editor
                                                v-model="$v.create.description.$model"
                                                style="min-height: 150px;background-color:#fff"
                                                :options="editorOption"
                                            />
                                            <template v-if="errors.description">
                                                <ErrorMessage
                                                    v-for="(errorMessage, index) in errors.description"
                                                    :key="index"
                                                >{{ errorMessage }}</ErrorMessage
                                                >
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="mr-2">
                                                {{ getCompanyKey('realEstate_unit_description_en') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <quill-editor
                                                v-model="$v.create.description_e.$model"
                                                style="min-height: 150px;background-color:#fff"
                                                :options="editorOption"
                                            />
                                            <template v-if="errors.description_e">
                                                <ErrorMessage
                                                    v-for="(errorMessage, index) in errors.description_e"
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
                                            <span>{{ getCompanyKey('realEstate_unit_name_ar') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="units.sort(sortString('name'))"></i>
                                                <i class="fas fa-arrow-down" @click="units.sort(sortString('-name'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.name_e">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ getCompanyKey('realEstate_unit_name_en') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="units.sort(sortString('name_e'))"></i>
                                                <i class="fas fa-arrow-down" @click="units.sort(sortString('-name_e'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.description">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ getCompanyKey('realEstate_unit_description_ar') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="units.sort(sortString('description'))"></i>
                                                <i class="fas fa-arrow-down" @click="units.sort(sortString('-description'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.description_e">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ getCompanyKey('realEstate_unit_description_en') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="units.sort(sortString('description_e'))"></i>
                                                <i class="fas fa-arrow-down" @click="units.sort(sortString('-description_e'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.code">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ getCompanyKey('realEstate_unit_code') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="units.sort(sortString('code'))"></i>
                                                <i class="fas fa-arrow-down" @click="units.sort(sortString('-code'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.status_date">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ getCompanyKey('realEstate_unit_status_date') }}</span>
                                        </div>
                                    </th>
                                    <th v-if="setting.module_id">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ getCompanyKey('realEstate_unit_module') }}</span>
                                        </div>
                                    </th>
                                    <th v-if="setting.building_id">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ getCompanyKey('realEstate_unit_building') }}</span>
                                        </div>
                                    </th>
                                    <th v-if="setting.wallet_id">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ getCompanyKey('realEstate_unit_wallet') }}</span>
                                        </div>
                                    </th>
                                    <th v-if="setting.unit_status_id">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ getCompanyKey('realEstate_unit_status') }}</span>
                                        </div>
                                    </th>
                                    <th v-if="setting.owner_id">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ getCompanyKey('realEstate_unit_owner') }}</span>
                                        </div>
                                    </th>
                                    <th v-if="setting.currency_id">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ getCompanyKey('realEstate_unit_currency') }}</span>
                                        </div>
                                    </th>
                                    <th v-if="setting.unit_ty">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ getCompanyKey('realEstate_unit_unit_ty') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="units.sort(SortNumber('unit_ty'))"></i>
                                                <i class="fas fa-arrow-down" @click="units.sort(SortNumber('-unit_ty'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.unit_area">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ getCompanyKey('realEstate_unit_unit_area') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="units.sort(SortNumber('unit_area'))"></i>
                                                <i class="fas fa-arrow-down" @click="units.sort(SortNumber('-unit_area'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.commission_ty">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ getCompanyKey('realEstate_unit_commission_ty') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="units.sort(SortNumber('commission_ty'))"></i>
                                                <i class="fas fa-arrow-down" @click="units.sort(SortNumber('-commission_ty'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.commission_value">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ getCompanyKey('realEstate_unit_commission_value') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="units.sort(SortNumber('commission_value'))"></i>
                                                <i class="fas fa-arrow-down" @click="units.sort(SortNumber('-commission_value'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.price">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ getCompanyKey('realEstate_unit_price') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="units.sort(SortNumber('price'))"></i>
                                                <i class="fas fa-arrow-down" @click="units.sort(SortNumber('-price'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.rooms">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ getCompanyKey('realEstate_unit_rooms') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="units.sort(SortNumber('rooms'))"></i>
                                                <i class="fas fa-arrow-down" @click="units.sort(SortNumber('-rooms'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.floor">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ getCompanyKey('realEstate_unit_floor') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="units.sort(SortNumber('floor'))"></i>
                                                <i class="fas fa-arrow-down" @click="units.sort(SortNumber('-floor'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.path">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ getCompanyKey('realEstate_unit_path') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="units.sort(SortNumber('path'))"></i>
                                                <i class="fas fa-arrow-down" @click="units.sort(SortNumber('-path'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.rank">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ getCompanyKey('realEstate_unit_rank')  }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="units.sort(SortNumber('rank'))"></i>
                                                <i class="fas fa-arrow-down" @click="units.sort(SortNumber('-rank'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.view">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ getCompanyKey('realEstate_unit_view')  }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="units.sort(SortNumber('view'))"></i>
                                                <i class="fas fa-arrow-down" @click="units.sort(SortNumber('-view'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th>
                                        {{ $t('general.Action') }}
                                    </th>
                                    <th><i class="fas fa-ellipsis-v"></i></th>
                                </tr>
                                </thead>
                                <tbody v-if="units.length > 0">
                                <tr
                                    @click.capture="checkRow(data.id)"
                                    @dblclick.prevent="$bvModal.show(`modal-edit-${data.id}`)"
                                    v-for="(data,index) in units"
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
                                    <td v-if="setting.description">{{ data.description }}</td>
                                    <td v-if="setting.description_e">{{ data.description_e }}</td>
                                    <td v-if="setting.code">{{ data.code }}</td>
                                    <td v-if="setting.status_date">{{ formatDate(data.status_date) }}</td>
                                    <td v-if="setting.module_id">{{ data.module_id }}</td>
                                    <td v-if="setting.building_id">{{ data.building_id }}</td>
                                    <td v-if="setting.wallet_id">{{ data.wallet_id }}</td>
                                    <td v-if="setting.unit_status_id">{{ data.unit_status_id }}</td>
                                    <td v-if="setting.owner_id">{{ data.owner_id }}</td>
                                    <td v-if="setting.currency_id">{{ data.currency_id }}</td>
                                    <td v-if="setting.unit_ty">{{ data.unit_ty }}</td>
                                    <td v-if="setting.unit_area">{{ data.unit_area }}</td>
                                    <td v-if="setting.commission_ty">{{ data.commission_ty }}</td>
                                    <td v-if="setting.commission_value">{{ data.commission_value }}</td>
                                    <td v-if="setting.price">{{ data.price }}</td>
                                    <td v-if="setting.rooms">{{ data.rooms }}</td>
                                    <td v-if="setting.floor">{{ data.floor }}</td>
                                    <td v-if="setting.path">{{ data.path }}</td>
                                    <td v-if="setting.rank">{{ data.rank }}</td>
                                    <td v-if="setting.view">{{ data.view }}</td>
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
                                            :title="$t('general.editbuild')"
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
                                                    <div class="col-md-3">
                                                        <div class="form-group position-relative">
                                                            <label class="control-label">
                                                                {{ $t("general.module") }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <multiselect
                                                                v-model="$v.edit.module_id.$model"
                                                                :options="modules.map((type) => type.id)"
                                                                :custom-label="(opt) => modules.find((x) => x.id == opt).name"
                                                            >
                                                            </multiselect>
                                                            <div
                                                                v-if="$v.edit.module_id.$error || errors.module_id"
                                                                class="text-danger"
                                                            >
                                                                {{ $t("general.fieldIsRequired") }}
                                                            </div>
                                                            <template v-if="errors.module_id">
                                                                <ErrorMessage
                                                                    v-for="(errorMessage, index) in errors.module_id"
                                                                    :key="index"
                                                                >{{ errorMessage }}</ErrorMessage
                                                                >
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group position-relative">
                                                            <label class="control-label">
                                                                {{ getCompanyKey('realEstate_unit_building') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <multiselect
                                                                v-model="$v.edit.building_id.$model"
                                                                :options="buildings.map((type) => type.id)"
                                                                :custom-label="(opt) => $i18n.locale == 'ar' ?  buildings.find((x) => x.id == opt).name:buildings.find((x) => x.id == opt).name_e"
                                                            >
                                                            </multiselect>
                                                            <div
                                                                v-if="$v.edit.building_id.$error || errors.building_id"
                                                                class="text-danger"
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
                                                    <div class="col-md-3">
                                                        <div class="form-group position-relative">
                                                            <label class="control-label">
                                                                {{ getCompanyKey('realEstate_unit_owner') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <multiselect
                                                                v-model="$v.edit.owner_id.$model"
                                                                :options="owners.map((type) => type.id)"
                                                                :custom-label="(opt) => $i18n.locale == 'ar' ? owners.find((x) => x.id == opt).name : owners.find((x) => x.id == opt).name_e"
                                                            >
                                                            </multiselect>
                                                            <div
                                                                v-if="$v.edit.owner_id.$error || errors.owner_id"
                                                                class="text-danger"
                                                            >
                                                                {{ $t("general.fieldIsRequired") }}
                                                            </div>
                                                            <template v-if="errors.owner_id">
                                                                <ErrorMessage
                                                                    v-for="(errorMessage, index) in errors.owner_id"
                                                                    :key="index"
                                                                >{{ errorMessage }}</ErrorMessage
                                                                >
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group position-relative">
                                                            <label class="control-label">
                                                                {{ getCompanyKey('realEstate_unit_currency') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <multiselect
                                                                v-model="$v.edit.currency_id.$model"
                                                                :options="currencies.map((type) => type.id)"
                                                                :custom-label="(opt) => $i18n.locale == 'ar' ?currencies.find((x) => x.id == opt).name:currencies.find((x) => x.id == opt).name_e"
                                                            >
                                                            </multiselect>
                                                            <div
                                                                v-if="$v.edit.currency_id.$error || errors.currency_id"
                                                                class="text-danger"
                                                            >
                                                                {{ $t("general.fieldIsRequired") }}
                                                            </div>
                                                            <template v-if="errors.currency_id">
                                                                <ErrorMessage
                                                                    v-for="(errorMessage, index) in errors.currency_id"
                                                                    :key="index"
                                                                >{{ errorMessage }}</ErrorMessage
                                                                >
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group position-relative">
                                                            <label class="control-label">
                                                                {{ getCompanyKey('realEstate_unit_wallet') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <multiselect
                                                                v-model="$v.edit.wallet_id.$model"
                                                                :options="wallets.map((type) => type.id)"
                                                                :custom-label="(opt) => $i18n.locale == 'ar' ?wallets.find((x) => x.id == opt).name:wallets.find((x) => x.id == opt).name_e"
                                                            >
                                                            </multiselect>
                                                            <div
                                                                v-if="$v.edit.wallet_id.$error || errors.wallet_id"
                                                                class="text-danger"
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
                                                    <div class="col-md-3">
                                                        <div class="form-group position-relative">
                                                            <label class="control-label">
                                                                {{ getCompanyKey('realEstate_unit_status') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <multiselect
                                                                v-model="$v.edit.unit_status_id.$model"
                                                                :options="unit_status.map((type) => type.id)"
                                                                :custom-label="(opt) => $i18n.locale == 'ar' ?unit_status.find((x) => x.id == opt).name:unit_status.find((x) => x.id == opt).name_e"
                                                            >
                                                            </multiselect>
                                                            <div
                                                                v-if="$v.edit.unit_status_id.$error || errors.unit_status_id"
                                                                class="text-danger"
                                                            >
                                                                {{ $t("general.fieldIsRequired") }}
                                                            </div>
                                                            <template v-if="errors.unit_status_id">
                                                                <ErrorMessage
                                                                    v-for="(errorMessage, index) in errors.unit_status_id"
                                                                    :key="index"
                                                                >{{ errorMessage }}</ErrorMessage
                                                                >
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label  class="control-label">
                                                                {{ getCompanyKey('realEstate_unit_unit_ty') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="number"
                                                                class="form-control"
                                                                data-edit="9"
                                                                @keypress.enter="moveInput('select','edit',10)"
                                                                v-model="$v.edit.unit_ty.$model"
                                                                :class="{
                                                'is-invalid':$v.edit.unit_ty.$error || errors.unit_ty,
                                                'is-valid':!$v.edit.unit_ty.$invalid && !errors.unit_ty
                                            }"
                                                            />
                                                            <template v-if="errors.unit_ty">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.unit_ty" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label  class="control-label">
                                                                {{ getCompanyKey('realEstate_unit_unit_area') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="number"
                                                                class="form-control"
                                                                data-edit="9"
                                                                step="0.1"
                                                                @keypress.enter="moveInput('select','edit',10)"
                                                                v-model="$v.edit.unit_area.$model"
                                                                :class="{
                                                'is-invalid':$v.edit.unit_area.$error || errors.unit_area,
                                                'is-valid':!$v.edit.unit_area.$invalid && !errors.unit_area
                                            }"
                                                            />
                                                            <template v-if="errors.unit_area">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.land_area" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label  class="control-label">
                                                                {{ getCompanyKey('realEstate_unit_commission_ty') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="number"
                                                                class="form-control"
                                                                data-edit="9"
                                                                @keypress.enter="moveInput('select','edit',10)"
                                                                v-model="$v.edit.commission_ty.$model"
                                                                :class="{
                                                'is-invalid':$v.edit.commission_ty.$error || errors.commission_ty,
                                                'is-valid':!$v.edit.commission_ty.$invalid && !errors.commission_ty
                                            }"
                                                            />
                                                            <template v-if="errors.commission_ty">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.commission_ty" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                {{ getCompanyKey('realEstate_unit_commission_value') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="number"
                                                                class="form-control"
                                                                data-edit="9"
                                                                step="0.1"
                                                                @keypress.enter="moveInput('select','edit',10)"
                                                                v-model="$v.edit.commission_value.$model"
                                                                :class="{
                                                'is-invalid':$v.edit.commission_value.$error || errors.commission_value,
                                                'is-valid':!$v.edit.commission_value.$invalid && !errors.commission_value
                                            }"
                                                            />
                                                            <template v-if="errors.commission_value">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.commission_value" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                {{ getCompanyKey('realEstate_unit_price') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="number"
                                                                class="form-control"
                                                                step="0.01"
                                                                data-edit="9"
                                                                @keypress.enter="moveInput('select','edit',10)"
                                                                v-model="$v.edit.price.$model"
                                                                :class="{
                                                'is-invalid':$v.edit.price.$error || errors.price,
                                                'is-valid':!$v.edit.price.$invalid && !errors.price
                                            }"
                                                            />
                                                            <template v-if="errors.price">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.price" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                {{ getCompanyKey('realEstate_unit_rooms') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="number"
                                                                class="form-control"
                                                                data-edit="9"
                                                                @keypress.enter="moveInput('select','edit',10)"
                                                                v-model="$v.edit.rooms.$model"
                                                                :class="{
                                                'is-invalid':$v.edit.rooms.$error || errors.rooms,
                                                'is-valid':!$v.edit.rooms.$invalid && !errors.rooms
                                            }"
                                                            />
                                                            <template v-if="errors.rooms">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.rooms" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                {{ getCompanyKey('realEstate_unit_path') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="number"
                                                                class="form-control"
                                                                data-edit="9"
                                                                @keypress.enter="moveInput('select','edit',10)"
                                                                v-model="$v.edit.path.$model"
                                                                :class="{
                                                'is-invalid':$v.edit.path.$error || errors.path,
                                                'is-valid':!$v.edit.path.$invalid && !errors.path
                                            }"
                                                            />
                                                            <template v-if="errors.path">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.path" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                {{ getCompanyKey('realEstate_unit_view') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="number"
                                                                class="form-control"
                                                                data-edit="9"
                                                                @keypress.enter="moveInput('select','edit',10)"
                                                                v-model="$v.edit.view.$model"
                                                                :class="{
                                                'is-invalid':$v.edit.view.$error || errors.view,
                                                'is-valid':!$v.edit.view.$invalid && !errors.view
                                            }"
                                                            />
                                                            <template v-if="errors.view">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.view" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                {{ getCompanyKey('realEstate_unit_floor') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="number"
                                                                class="form-control"
                                                                data-edit="9"
                                                                @keypress.enter="moveInput('select','edit',10)"
                                                                v-model="$v.edit.floor.$model"
                                                                :class="{
                                                'is-invalid':$v.edit.floor.$error || errors.floor,
                                                'is-valid':!$v.edit.floor.$invalid && !errors.floor
                                            }"
                                                            />
                                                            <template v-if="errors.floor">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.floor" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                {{ getCompanyKey('realEstate_unit_rank') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="number"
                                                                class="form-control"
                                                                data-edit="9"
                                                                step="0.1"
                                                                @keypress.enter="moveInput('select','edit',10)"
                                                                v-model="$v.edit.rank.$model"
                                                                :class="{
                                                'is-invalid':$v.edit.rank.$error || errors.rank,
                                                'is-valid':!$v.edit.rank.$invalid && !errors.rank
                                            }"
                                                            />
                                                            <template v-if="errors.rank">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.rank" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                {{ getCompanyKey('realEstate_unit_status_date') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <date-picker
                                                                v-model="custom_date_start"
                                                                type="datetime"
                                                                :default-value="custom_date_start"
                                                                @change="start_date"
                                                                confirm
                                                            ></date-picker>
                                                            <template v-if="errors.status_date">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.status_date" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <div class="form-group">
                                                            <label for="field-224" class="control-label">
                                                                {{ getCompanyKey('realEstate_unit_name_ar') }}
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
                                                                    id="field-224"
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
                                                            <label class="control-label">
                                                                {{ getCompanyKey('realEstate_unit_name_en') }}
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
                                                                {{ getCompanyKey('realEstate_unit_code') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <div dir="ltr">
                                                                <input
                                                                    type="text"
                                                                    class="form-control englishInput"
                                                                    data-edit="2"
                                                                    @keypress.enter="moveInput('input','edit',3)"
                                                                    v-model="$v.edit.code.$model"
                                                                    :class="{
                                                                        'is-invalid':$v.edit.code.$error || errors.code,
                                                                        'is-valid':!$v.edit.code.$invalid && !errors.code
                                                                    }"
                                                                />
                                                            </div>
                                                            <div v-if="!$v.edit.code.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.edit.code.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                                                            <template v-if="errors.code">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.code" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label class="mr-2">
                                                                {{ getCompanyKey('realEstate_unit_description_ar') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <quill-editor
                                                                v-model="$v.edit.description.$model"
                                                                style="min-height: 150px;background-color:#fff"
                                                                :options="editorOption"
                                                            />
                                                            <template v-if="errors.description">
                                                                <ErrorMessage
                                                                    v-for="(errorMessage, index) in errors.description"
                                                                    :key="index"
                                                                >{{ errorMessage }}</ErrorMessage
                                                                >
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label class="mr-2">
                                                                {{ getCompanyKey('realEstate_unit_description_en') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <quill-editor
                                                                v-model="$v.edit.description_e.$model"
                                                                style="min-height: 150px;background-color:#fff"
                                                                :options="editorOption"
                                                            />
                                                            <template v-if="errors.description_e">
                                                                <ErrorMessage
                                                                    v-for="(errorMessage, index) in errors.description_e"
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
                                    <th class="text-center" colspan="25">{{ $t('general.notDataFound') }}</th>
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

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
import { dynamicSortString, dynamicSortNumber }   from "../../../helper/tableSort";
import senderHoverHelper   from "../../../helper/senderHoverHelper";

/**
 * Advanced Table component
 */
export default {
    page: {
        title: "Employee",
        meta: [{ name: "description", content: 'Employee' }],
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
            employeesPagination: {},
            employees: [],
            isLoader: false,
            create: {
                name: '',
                name_e: '',
            },
            edit: {
                name: '',
                name_e: '',
            },
            errors: {},
            isCheckAll: false,
            checkAll: [],
            current_page: 1,
            setting: ['name','name_e']
        }
    },
    validations: {
        create: {
            name: {required,minLength: minLength(2),maxLength: maxLength(100),alphaArabic},
            name_e: {required,minLength: minLength(2),maxLength: maxLength(100),alphaEnglish},
        },
        edit: {
            name: {required,minLength: minLength(2),maxLength: maxLength(100),alphaArabic},
            name_e: {required,minLength: minLength(2),maxLength: maxLength(100),alphaEnglish},
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
                this.employees.forEach(el => {
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

            adminApi.get(`/employees?page=${page}&per_page=${this.per_page}&search=${this.search}`)
                .then((res) => {
                    let l = res.data;
                    this.employees = l.data;
                    this.employeesPagination = l.pagination;
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
            if(this.current_page <= this.employeesPagination.last_page && this.current_page != this.employeesPagination.current_page && this.current_page){
                this.isLoader = true;

                adminApi.get(`/employees?page=${this.current_page}&per_page=${this.per_page}&search=${this.search}`)
                    .then((res) => {
                        let l = res.data;
                        this.employees = l.data;
                        this.employeesPagination = l.pagination;
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
        deleteEmployee(id) {
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

                    adminApi.delete(`/employees/${id}`)
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
            };
            this.$nextTick(() => { this.$v.$reset() });
            this.errors = {};
            this.$bvModal.hide(`create`);
        },
        /**
         *  hidden Modal (create)
         */
        resetModal(){
            this.create =  {
                name: '',
                name_e: '',
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
                adminApi.post(`/employees`,this.create)
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
                let {name,name_e} = this.edit;
                adminApi.put(`/employees/${id}`,{name,name_e})
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
            let employee = this.employees.find(e => id == e.id );
            this.edit.name = employee.name;
            this.edit.name_e = employee.name_e;
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
            };
        },
        /*
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
                            <h4 class="header-title"> {{ $t('employee.employeesTable') }}</h4>
                            <div class="col-xs-10 col-md-9 col-lg-7" style="font-weight: 500">

                                <div class="d-inline-block" style="width: 22.2%;">
                                    <!-- Basic dropdown -->
                                    <b-dropdown variant="primary" :text="$t('general.searchSetting')" ref="dropdown" class="btn-block setting-search">
                                        <b-form-checkbox v-model="setting" value="name" class="mb-1">{{ $t('general.Name') }}</b-form-checkbox>
                                        <b-form-checkbox v-model="setting" value="name_e" class="mb-1">{{ $t('general.Name_en') }}</b-form-checkbox>
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
                                        @click.prevent="deleteEmployee(checkAll)"
                                    >
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                    <!-- end mult delete  -->
                                    <!--  start one delete  -->
                                    <button
                                        class="custom-btn-dowonload"
                                        v-if="checkAll.length == 1"
                                        @click.prevent="deleteEmployee(checkAll)"
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
                                            {{ employeesPagination.from }}-{{ employeesPagination.to }} / {{ employeesPagination.total }}
                                        </div>
                                        <div class="d-inline-block">
                                            <a
                                                href="javascript:void(0)"
                                                :style="{'pointer-events':employeesPagination.current_page == 1 ? 'none': ''}"
                                                @click.prevent="getData(employeesPagination.current_page - 1)"
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
                                                :style="{'pointer-events':employeesPagination.last_page == employeesPagination.current_page ? 'none': ''}"
                                                @click.prevent="getData(employeesPagination.current_page + 1)"
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
                            :title="$t('employee.addemployee')"
                            title-class="font-18"
                            body-class="p-4 "
                            :hide-footer="true"
                            @show="resetModal"
                            @hidden="resetModalHidden"
                        >
                            <form>
                                <div class="row">
                                    <div class="col-md-12 direction" dir="rtl">
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
                                    <div class="col-md-12 direction-ltr" dir="ltr">
                                        <div class="form-group">
                                            <label for="field-2" class="control-label">
                                                {{ $t('general.Name_en') }}
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                data-create="2"
                                                @keypress.enter="moveInput('input','create',1)"
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
                                                <i class="fas fa-arrow-up" @click="employees.sort(sortString('name'))"></i>
                                                <i class="fas fa-arrow-down" @click="employees.sort(sortString('-name'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.Name_en') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up" @click="employees.sort(sortString('name_e'))"></i>
                                                <i class="fas fa-arrow-down" @click="employees.sort(sortString('-name_e'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th>
                                        {{ $t('general.Action') }}
                                    </th>
                                    <th><i class="fas fa-ellipsis-v"></i></th>
                                </tr>
                                </thead>
                                <tbody v-if="employees.length > 0">
                                  <tr
                                      @click.capture="checkRow(data.id)"
                                      @dblclick.prevent="$bvModal.show(`modal-edit-${data.id}`)"
                                      v-for="(data,index) in employees"
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
                                    <td>
                                        <h5 class="m-0 font-weight-normal">{{ data.name }}</h5>
                                    </td>
                                    <td>
                                        <h5 class="m-0 font-weight-normal">{{ data.name_e }}</h5>
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
                                                      @click.prevent="deleteEmployee(data.id)"
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
                                                                  @keypress.enter="moveInput('input','edit',1)"
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
                                                  </div>
                                                  <div class="mt-1 d-flex justify-content-end">
                                                      <!-- Emulate built in modal footer ok and cancel button actions -->
                                                      <b-button  variant="success" type="button" class="mx-1" v-if="!isLoader" @click.prevent="editSubmit(data.id)">
                                                          {{ $t('general.Edit') }}
                                                      </b-button>

                                                      <b-button variant="success" class="mx-1" disabled v-else >
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

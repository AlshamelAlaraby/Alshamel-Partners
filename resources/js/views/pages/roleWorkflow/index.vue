<script>
import Layout from "../../layouts/main";
import PageHeader from "../../../components/Page-header";
import adminApi from "../../../api/adminAxios";
import Switches from "vue-switches";
import {required, minLength, maxLength, integer} from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import ErrorMessage from "../../../components/widgets/errorMessage";
import loader from "../../../components/loader";
import Role from "../../../components/create/role.vue";
import Multiselect from "vue-multiselect";

/**
 * Advanced Table component
 */
export default {
    page: {
        title: "Role Workflows",
        meta: [{name: "Role Workflows", content: 'Role Workflow'}],
    },
    components: {
        Role,
        Layout,
        PageHeader,
        Switches,
        ErrorMessage,
        loader,
        Multiselect
    },
    data() {
        return {
            per_page: 50,
            search: '',
            debounce: {},
            roleWorkflowsPagination: {},
            roleWorkflows: [],
            enabled3: false,
            isLoader: false,
            create: {
                role_id: null,
                workflow_id: null
            },
            edit: {
                role_id: null,
                workflow_id: null
            },
            errors: {},
            isCheckAll: false,
            checkAll: [],
            roles: [],
            workflows: [],
            current_page: 1,
            setting: {
                role_id: true,
                workflow_id: true
            },
            company_id: null,
            is_disabled: false,
            filterSetting: ['role_id', 'workflow_id']
        }
    },
    validations: {
        create: {
            role_id:{required},
            workflow_id:{required}
        },
        edit: {
            role_id:{required},
            workflow_id:{required}
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
                this.roleWorkflows.forEach(el => {
                    if (!this.checkAll.includes(el.id)) {
                        this.checkAll.push(el.id);
                    }
                });
            } else {
                this.checkAll = [];
            }
        }
    },
    async mounted() {
        this.company_id = this.$store.getters['auth/company_id'];
        await this.getWorkflow();
        await this.getData();
    },
    methods: {
        /**
         *  start get Data module && pagination
         */
        async getData(page = 1) {
            this.isLoader = true;
            let filter = '';
            for (let i = 0; i > this.filterSetting.length; ++i) {
                filter += `columns[${i}]=${this.filterSetting[i]}&`;
            }

            await adminApi.get(`/role-workflows?page=${page}&per_page=${this.per_page}&search=${this.search}&${filter}`)
                .then((res) => {
                    let l = res.data;
                    this.roleWorkflows = l.data;
                    this.roleWorkflowsPagination = l.pagination;
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
        getDataCurrentPage(page =1 ) {
            if (this.current_page <= this.roleWorkflowsPagination.last_page && this.current_page != this.roleWorkflowsPagination.current_page && this.current_page) {
                this.isLoader = true;
                let filter = '';
                for (let i = 0; i > this.filterSetting.length; ++i) {
                    filter += `columns[${i}]=${this.filterSetting[i]}&`;
                }

                adminApi.get(`/role-workflows?page=${page}&per_page=${this.per_page}&search=${this.search}&${filter}`)
                    .then((res) => {
                        let l = res.data;
                        this.roleWorkflows = l.data;
                        this.roleWorkflowsPagination = l.pagination;
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
         *  end get Data module && pagination
         */
        /**
         *  start delete module
         */
        deleteModule(id) {
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

                    adminApi.delete(`/role-workflows/${id}`)
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
         *  end delete module
         */
        /**
         *  reset Modal (create)
         */
        resetModalHidden() {
            this.create = {
                role_id: null,
                workflow_id: null
            };
            this.$nextTick(() => {
                this.$v.$reset()
            });
            this.errors = {};
            this.$bvModal.hide(`create`);
        },
        /**
         *  hidden Modal (create)
         */

        async resetModal() {
            await this.getRole();
            await this.getWorkflow();
            this.create = {
                role_id: null,
                workflow_id: null
            };
            this.$nextTick(() => {
                this.$v.$reset()
            });
            this.errors = {};
        },
        /**
         *  create module
         */
        async resetForm() {
            await this.getRole();
            await this.getWorkflow();
            this.create = {
                role_id: null,
                workflow_id: null
            };
            this.$nextTick(() => {
                this.$v.$reset()
            });
            this.is_disabled = false;
            this.errors = {};
        },

        AddSubmit() {


            this.$v.create.$touch();

            if (this.$v.create.$invalid) {
                return;
            } else {
                this.isLoader = true;
                this.errors = {};
                adminApi.post(`/role-workflows`, this.create)
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
                        }, 500);
                    })
                    .catch((err) => {
                        if (err.response.data) {
                            this.errors = err.response.data.errors;
                        } else {
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
         *  edit module
         */
        editSubmit(id) {
            this.$v.edit.$touch();

            if (this.$v.edit.$invalid) {
                return;
            } else {
                this.isLoader = true;
                this.errors = {};

                adminApi.put(`/role-workflows/${id}`, this.edit)
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
                        }, 500);
                    })
                    .catch((err) => {
                        if (err.response.data) {
                            this.errors = err.response.data.errors;
                        } else {
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
        async resetModalEdit(id) {
            await this.getRole();
            await this.getWorkflow();
            let module = this.roleWorkflows.find(e => id == e.id);
            this.edit.workflow_id = module.workflow_id;
            this.edit.role_id = module.role.id;
            this.errors = {};
        },
        resetModalHiddenEdit(id){
            this.create = {
                role_id: null,
                workflow_id: null
            };
            this.$nextTick(() => {
                this.$v.$reset()
            });
            this.is_disabled = false;
            this.errors = {};
        },
        /**
         *  hidden Modal (edit)
         */
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
            document.querySelector(`${tag}[data-${c}='${index}']`).focus()
        },
        async getRole(){
            this.isLoader = true;

            await adminApi.get(`/roles`)
                .then((res) => {
                    let l = res.data.data;
                    l.unshift({ id: 0, name: "اضف  الدور", name_e: "Add Role" });
                    this.roles = l;
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
        async getWorkflow(){
            this.isLoader = true;

            await axios.get(`${process.env.MIX_APP_URL_OUTSIDE}api/everything_about_the_company/${this.company_id}`)
                .then((res) => {
                    let l = res.data.data;
                    this.workflows = l.work_flow_trees;
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
        showRoleModal() {
            if (this.create.role_id == 0) {
                this.$bvModal.show("role-create");
                this.create.role_id = null;
            }
        },
        showRoleModalEdit() {
            if (this.edit.role_id == 0) {
                this.$bvModal.show("role-create");
                this.edit.role_id = null;
            }
        },
    },
};
</script>

<template>
    <Layout>
        <PageHeader/>
        <Role @created="getRole" />
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">

                        <!-- start search -->
                        <div class="row justify-content-between align-items-center mb-2">
                            <h4 class="header-title"> {{ $t('general.roleWorkflowsTable') }}</h4>
                            <div class="col-xs-10 col-md-9 col-lg-7" style="font-weight: 500">

                                <div class="d-inline-block" style="width: 22.2%;">
                                    <!-- Basic dropdown -->
                                    <b-dropdown variant="primary" :text="$t('general.searchSetting')" ref="dropdown"
                                                class="btn-block setting-search">
                                        <b-form-checkbox v-model="filterSetting" value="role_id" class="mb-1">
                                            {{ $t('roles.roles') }}
                                        </b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="workflow_id" class="mb-1">
                                            {{ $t('general.workflow') }}
                                        </b-form-checkbox>
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
                                        @click.prevent="deleteModule(checkAll)"
                                    >
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                    <!-- end mult delete  -->
                                    <!--  start one delete  -->
                                    <button
                                        class="custom-btn-dowonload"
                                        v-if="checkAll.length == 1"
                                        @click.prevent="deleteModule(checkAll)"
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
                                        <b-dropdown variant="primary"
                                            :html="`${$t('general.setting')} <i class='fe-settings'></i>`"
                                            ref="dropdown" class="dropdown-custom-ali"
                                        >
                                            <b-form-checkbox v-model="setting.role_id" class="mb-1">
                                                {{ $t('roles.roles') }}
                                            </b-form-checkbox>
                                            <b-form-checkbox v-model="setting.workflow_id" class="mb-1">
                                                {{ $t('general.workflow') }}
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
                                        <div class="d-inline-block" style="font-size:13px;">
                                            {{ roleWorkflowsPagination.from }}-{{ roleWorkflowsPagination.to }} /
                                            {{ roleWorkflowsPagination.total }}
                                        </div>
                                        <div class="d-inline-block">
                                            <a
                                                href="javascript:void(0)"
                                                :style="{'pointer-events':roleWorkflowsPagination.current_page == 1 ? 'none': ''}"
                                                @click.prevent="getData(roleWorkflowsPagination.current_page - 1)"
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
                                                :style="{'pointer-events':roleWorkflowsPagination.last_page == roleWorkflowsPagination.current_page ? 'none': ''}"
                                                @click.prevent="getData(roleWorkflowsPagination.current_page + 1)"
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
                            :title="$t('general.addroleWorkflow')"
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
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="my-1 mr-2">{{ $t('roles.roles') }}</label>
                                            <multiselect
                                                @input="showRoleModal"
                                                v-model="create.role_id"
                                                :options="roles.map(type => type.id)"
                                                :custom-label=" opt => $i18n.locale == 'ar' ?  roles.find(x => x.id == opt).name:roles.find(x => x.id == opt).name_e">
                                            </multiselect>
                                            <template v-if="errors.role_id">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.role_id" :key="index">{{ errorMessage }}</ErrorMessage>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="my-1 mr-2">{{ $t('general.workflow') }}</label>
                                            <multiselect
                                                v-model="create.workflow_id"
                                                :options=" workflows.map(type => type.id)"
                                                :custom-label="opt => $i18n.locale == 'ar' ? workflows.find(x => x.id == opt).name: workflows.find(x => x.id == opt).name_e">
                                            </multiselect>
                                            <template v-if="errors.workflow_id">
                                                <ErrorMessage v-for="(errorMessage,index) in errors.workflow_id" :key="index">{{ errorMessage }}</ErrorMessage>
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
                                    <th scope="col" style="width: 0;">
                                        <div class="form-check custom-control">
                                            <input
                                                class="form-check-input"
                                                type="checkbox" v-model="isCheckAll"
                                                style="width: 17px;height: 17px;"
                                            >
                                        </div>
                                    </th>
                                    <th v-if="setting.role_id">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('roles.roles') }}</span>
                                        </div>
                                    </th>
                                    <th v-if="setting.workflow_id">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.workflow') }}</span>
                                        </div>
                                    </th>
                                    <th>
                                        {{ $t('general.Action') }}
                                    </th>
                                    <th><i class="fas fa-ellipsis-v"></i></th>
                                </tr>
                                </thead>
                                <tbody v-if="roleWorkflows.length > 0">
                                <tr
                                    @click.capture="checkRow(data.id)"
                                    @dblclick.prevent="$bvModal.show(`modal-edit-${data.id}`)"
                                    v-for="(data,index) in roleWorkflows"
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
                                    <td v-if="setting.role_id">
                                        <h5 class="m-0 font-weight-normal">{{$i18n.locale == 'ar' ? data.role.name :  data.role.name_e }}</h5>
                                    </td>
                                    <td v-if="setting.workflow_id">
                                        <h5 class="m-0 font-weight-normal">
                                            {{
                                                workflows.length > 0  ?
                                                    $i18n.locale == 'ar' ? workflows.find(x => x.id == data.workflow_id).name : workflows.find(x => x.id == data.workflow_id).name_e
                                                    : ''
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
                                                    @click.prevent="deleteModule(data.id)"
                                                >
                                                    <div
                                                        class="d-flex justify-content-between align-items-center text-black">
                                                        <span>{{ $t('general.delete') }}</span>
                                                        <i class="fas fa-times text-danger"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                        <!--  edit   -->
                                        <b-modal
                                            :id="`modal-edit-${data.id}`"
                                            :title="$t('general.editroleWorkflow')"
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
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label class="my-1 mr-2">{{ $t('roles.roles') }}</label>
                                                            <multiselect
                                                                @input="showRoleModalEdit"
                                                                v-model="edit.role_id"
                                                                :options="roles.map(type => type.id)"
                                                                :custom-label="opt => $i18n.locale == 'ar' ? roles.find(x => x.id == opt).name:roles.find(x => x.id == opt).name_e">
                                                            </multiselect>
                                                            <template v-if="errors.role_id">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.role_id" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label class="my-1 mr-2">{{ $t('general.workflow') }}</label>
                                                            <multiselect
                                                                v-model="edit.workflow_id"
                                                                :options="workflows.map(type => type.id)"
                                                                :custom-label="opt => $i18n.locale == 'ar' ? workflows.find(x => x.id == opt).name: workflows.find(x => x.id == opt).name_e">
                                                            </multiselect>
                                                            <template v-if="errors.workflow_id">
                                                                <ErrorMessage v-for="(errorMessage,index) in errors.workflow_id" :key="index">{{ errorMessage }}</ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
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
                                    <th class="text-center" colspan="6">{{ $t('general.notDataFound') }}</th>
                                </tr>
                                </tbody>
                            </table>

                        </div>
                        <!-- end .table-responsive -->
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

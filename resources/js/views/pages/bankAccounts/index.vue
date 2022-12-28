<script>
import Layout from "../../layouts/main";
import PageHeader from "../../../components/Page-header";
import adminApi from "../../../api/adminAxios";
import Switches from "vue-switches";
import {required, minLength, maxLength, integer, alpha, email} from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import ErrorMessage from "../../../components/widgets/errorMessage";
import loader from "../../../components/loader";
import {dynamicSortString} from "../../../helper/tableSort";
import Multiselect from "vue-multiselect";
import Bank from "../../../components/create/bank";
import {formatDateOnly} from "../../../helper/startDate";

/**
 * Advanced Table component
 */

export default {
    page: {
        title: "Bank Accounts",
        meta: [{name: "Bank Accounts", content: 'Bank Accounts'}],
    },
    components: {
        Layout,
        PageHeader,
        Switches,
        ErrorMessage,
        loader,
        Multiselect,
        Bank
    },
    data() {
        return {
            per_page: 50,
            search: '',
            Tooltip: '',
            mouseEnter: null,
            debounce: {},
            bankAccountsPagination: {},
            bankAccounts: [],
            isLoader: false,
            create: {
                bank_id: null,
                account_number: '',
                phone: '',
                address: '',
                email: '',
                emp_id: '',
                rp_code: ''
            },
            edit: {
                bank_id: null,
                account_number: '',
                phone: '',
                address: '',
                email: '',
                emp_id: '',
                rp_code: '',
                old_media: []
            },
            errors: {},
            isCheckAll: false,
            checkAll: [],
            images: [],
            media: {},
            bankAccount_id: null,
            saveImageName: [],
            current_page: 1,
            showPhoto: './images/img-1.png',
            setting: {
                bank_id: true,
                account_number: true,
                phone: true,
                address: true,
                emp_id: true,
                email: true,
                rp_code: true,
            },
            idDelete: null,
            filterSetting: ['bank_id', 'account_number', 'phone', 'address', 'email','emp_id', 'rp_code'],
            banks: []
        }
    },
    validations: {
        create: {
            bank_id: {required, integer},
            account_number: {required, integer, minLength: minLength(2), maxLength: maxLength(100)},
            phone: {required, minLength: minLength(2), maxLength: maxLength(100)},
            address: {required, minLength: minLength(2), maxLength: maxLength(100),},
            email: {required, email},
            emp_id: {required, minLength: minLength(2), maxLength: maxLength(100)},
            rp_code: {required, minLength: minLength(2), maxLength: maxLength(100)},
            media: {}
        },
        edit: {
            bank_id: {required, integer},
            account_number: {required, integer, minLength: minLength(2), maxLength: maxLength(100)},
            phone: {required, minLength: minLength(2), maxLength: maxLength(100)},
            address: {required, minLength: minLength(2), maxLength: maxLength(100),},
            email: {required, email},
            emp_id: {required, minLength: minLength(2), maxLength: maxLength(100)},
            rp_code: {required, minLength: minLength(2), maxLength: maxLength(100)},
            media: {}
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
                this.bankAccounts.forEach(el => {
                    if (!this.checkAll.includes(el.id)) {
                        this.checkAll.push(el.id);
                    }
                });
            } else {
                this.checkAll = [];
            }
        }
    },
    mounted() {
        this.getData();
    },
    updated() {
        $(function () {
            $(".englishInput").keypress(function (event) {
                var ew = event.which;
                if (ew == 32)
                    return true;
                if (48 <= ew && ew <= 57)
                    return true;
                if (65 <= ew && ew <= 90)
                    return true;
                if (97 <= ew && ew <= 122)
                    return true;
                return false;
            });
            $(".arabicInput").keypress(function (event) {
                var ew = event.which;
                if (ew == 32)
                    return true;
                if (48 <= ew && ew <= 57)
                    return false;
                if (65 <= ew && ew <= 90)
                    return false;
                if (97 <= ew && ew <= 122)
                    return false;
                return true;
            });
        });
    },
    methods: {
        showBankModal() {
            if (this.create.bank_id == 0) {
                this.$bvModal.show("bank-create");
                this.create.bank_id = null;
            }
        },
        showBankModalEdit() {
            if (this.edit.bank_id == 0) {
                this.$bvModal.show("bank-create");
                this.edit.bank_id = null;
            }
        },
        /**
         *  start get Data countrie && pagination
         */
        getData(page = 1) {
            this.isLoader = true;

            let filter = '';
            for (let i = 0; i > this.filterSetting.length; ++i) {
                filter += `columns[${i}]=${this.filterSetting[i]}&`;
            }

            adminApi.get(`/bank-accounts?page=${page}&per_page=${this.per_page}&search=${this.search}&${filter}`)
                .then((res) => {
                    let l = res.data;
                    this.bankAccounts = l.data;
                    this.bankAccountsPagination = l.pagination;
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
        getDataCurrentPage(page = 1) {
            if (this.current_page <= this.bankAccountsPagination.last_page && this.current_page != this.bankAccountsPagination.current_page && this.current_page) {
                this.isLoader = true;
                let filter = '';
                for (let i = 0; i > this.filterSetting.length; ++i) {
                    filter += `columns[${i}]=${this.filterSetting[i]}&`;
                }

                adminApi.get(`/bank-accounts?page=${page}&per_page=${this.per_page}&search=${this.search}&${filter}`)
                    .then((res) => {
                        let l = res.data;
                        this.bankAccounts = l.data;
                        this.bankAccountsPagination = l.pagination;
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
                deletebankAccount(id, index) {
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
              .post(`/bank-accounts/bulk-delete`, { ids: id })
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
              .delete(`/bank-accounts/${id}`)
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
        async resetModalHidden() {
            await this.getBank();
            this.create = {
                bank_id: null,
                account_number: '',
                phone: '',
                address: '',
                email: '',
                emp_id: '',
                rp_code: '',
                media: null
            };
            this.$nextTick(() => {
                this.$v.$reset()
            });
            this.images = [];
            this.bankAccount_id = null;
            this.errors = {};
            this.$bvModal.hide(`create`);

        },
        /**
         *  hidden Modal (create)
         */
        async resetModal() {
            await this.getBank();
            this.create = {
                bank_id: null,
                account_number: '',
                phone: '',
                address: '',
                email: '',
                emp_id: '',
                rp_code: '',
            };
            this.showPhoto = './images/img-1.png';
            this.$nextTick(() => {
                this.$v.$reset()
            });
            this.bankAccount_id = null;
            this.media = {};
            this.images = [];
            this.errors = {};
        },
        /**
         *  create countrie
         */
        async resetForm() {
            await this.getBank();
            this.create = {
                bank_id: null,
                account_number: '',
                phone: '',
                address: '',
                email: '',
                emp_id: '',
                rp_code: '',
            };
            this.$nextTick(() => {
                this.$v.$reset()
            });
            this.bankAccount_id = null;
            this.media = {};
            this.images = [];
            this.errors = {};
        },

        AddSubmit() {
            this.$v.create.$touch();

            if (this.$v.create.$invalid) {
                return;
            } else {
                this.isLoader = true;
                this.errors = {};

                adminApi.post(`/bank-accounts`, this.create)
                    .then((res) => {
                        this.bankAccount_id = res.data.data.id;
                        setTimeout(() => {
                            Swal.fire({
                                icon: 'success',
                                text: `${this.$t('general.Addedsuccessfully')}`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }, 200);
                        this.getData();
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
         *  edit bankAccount
         */
        editSubmit(id) {
            this.$v.edit.$touch();
            this.images.forEach(e => {
                this.edit.old_media.push(e.id);
            });
            if (this.$v.edit.$invalid) {
                return;
            } else {
                this.isLoader = true;
                this.errors = {};
                adminApi.put(`/bank-accounts/${id}`, this.edit)
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
        /*
        *  log bankAccount
        * */
        formatDate(value) {
            return formatDateOnly(value);
        },
        log(id) {
            if(this.mouseEnter != id){
                this.Tooltip = "";
                this.mouseEnter = id;
                adminApi
                    .get(`/bank-accounts/logs/${id}`)
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
        /**
         *   show Modal (edit)
         */
        async resetModalEdit(id) {
            await this.getBank();
            let bankAccount = this.bankAccounts.find(e => id == e.id);
            this.bankAccount_id = id;
            this.edit.bank_id = bankAccount.bank_id;
            this.edit.account_number = bankAccount.account_number;
            this.edit.phone = bankAccount.phone;
            this.edit.address = bankAccount.address;
            this.edit.email = bankAccount.email;
            this.edit.emp_id = bankAccount.emp_id;
            this.edit.rp_code = bankAccount.rp_code;
            this.images = bankAccount.media ?? [];
            if (this.images && this.images.length > 0) {
                this.showPhoto = this.images[this.images.length - 1].webp;
            } else {
                this.showPhoto = './images/img-1.png';
            }
            this.errors = {};
        },
        /**
         *  hidden Modal (edit)
         */
        resetModalHiddenEdit(id) {
            this.errors = {};
            this.edit = {
                bank_id: '',
                account_number: '',
                phone: '',
                address: '',
                email: '',
                emp_id: '',
                rp_code: '',
                old_media: []
            };
            this.bankAccount_id = null;
            this.images = [];
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
            document.querySelector(`${tag}[data-${c}='${index}']`).focus()
        },
        /**
         *  start Image ceate
         */
        changePhoto() {
            document.getElementById('uploadImageCreate').click();
        },
        changePhotoEdit() {
            document.getElementById('uploadImageEdit').click();
        },
        onImageChanged(e) {
            const file = e.target.files[0];
            this.addImage(file);
        },
        addImage(file) {
            this.media = file; //upload
            if (file) {

                this.idDelete = null;
                let is_media = this.images.find(e => e.name == file.name.slice(0, file.name.indexOf('.')));
                this.idDelete = is_media ? is_media.id : null;
                if (!this.idDelete) {
                    this.isLoader = true;
                    let formDate = new FormData();
                    formDate.append('media[0]', this.media);
                    adminApi.post(`/media`, formDate)
                        .then((res) => {
                            let old_media = [];
                            this.images.forEach(e => old_media.push(e.id));
                            let new_media = [];
                            res.data.data.forEach(e => new_media.push(e.id));

                            adminApi.put(`/bank-accounts/${this.bankAccount_id}`, {old_media, 'media': new_media})
                                .then((res) => {
                                    this.images = res.data.data.media ?? [];
                                    if (this.images && this.images.length > 0) {
                                        this.showPhoto = this.images[this.images.length - 1].webp;
                                    } else {
                                        this.showPhoto = './images/img-1.png';
                                    }
                                    this.getData();
                                })
                                .catch(err => {
                                    Swal.fire({
                                        icon: 'error',
                                        title: `${this.$t('general.Error')}`,
                                        text: `${this.$t('general.Thereisanerrorinthesystem')}`,
                                    });
                                });
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
                } else {
                    Swal.fire({
                        title: `${this.$t('general.Thisfilehasalreadybeenuploaded')}`,
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonText: `${this.$t('general.Replace')}`,
                        cancelButtonText: `${this.$t('general.Nocancel')}`,
                        confirmButtonClass: "btn btn-success mt-2",
                        cancelButtonClass: "btn btn-danger ml-2 mt-2",
                        buttonsStyling: false,
                    }).then((result) => {
                        if (result.value) {

                            this.isLoader = true;
                            let formDate = new FormData();
                            formDate.append('media[0]', this.media);
                            adminApi.post(`/media`, formDate)
                                .then((res) => {
                                    let old_media = [];
                                    this.images.forEach(e => old_media.push(e.id));
                                    old_media.splice(old_media.indexOf(this.idDelete), 1);
                                    let new_media = [];
                                    res.data.data.forEach(e => new_media.push(e.id));

                                    adminApi.put(`/bank-accounts/${this.bankAccount_id}`, {
                                        old_media,
                                        'media': new_media
                                    })
                                        .then((res) => {
                                            this.images = res.data.data.media ?? [];
                                            if (this.images && this.images.length > 0) {
                                                this.showPhoto = this.images[this.images.length - 1].webp;
                                            } else {
                                                this.showPhoto = './images/img-1.png';
                                            }
                                            this.getData();
                                        })
                                        .catch(err => {
                                            Swal.fire({
                                                icon: 'error',
                                                title: `${this.$t('general.Error')}`,
                                                text: `${this.$t('general.Thereisanerrorinthesystem')}`,
                                            });
                                        });
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
                    });
                }
            }
        },

        deleteImageCreate(id, index) {
            let old_media = [];
            this.images.forEach(e => {
                if (e.id != id) {
                    old_media.push(e.id);
                }
            });
            adminApi.put(`/bank-accounts/${this.bankAccount_id}`, {old_media})
                .then((res) => {
                    this.bankAccounts[index] = res.data.data;
                    this.images = res.data.data.media ?? [];
                    if (this.images && this.images.length > 0) {
                        this.showPhoto = this.images[this.images.length - 1].webp;
                    } else {
                        this.showPhoto = './images/img-1.png';
                    }
                })
                .catch(err => {
                    Swal.fire({
                        icon: 'error',
                        title: `${this.$t('general.Error')}`,
                        text: `${this.$t('general.Thereisanerrorinthesystem')}`,
                    });
                });
        },
        /**
         *  end Image ceate
         */

        async getBank() {
            this.isLoader = true;

            await adminApi
                .get(`/banks`)
                .then((res) => {
                    let l = res.data.data;
                    l.unshift({id: 0, name: "اضف بنك", name_e: "Add Bank"});
                    this.banks = l;
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
    },
};
</script>

<template>
    <Layout>
        <PageHeader/>
        <Bank @created="getBank"/>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <!-- start search -->
                        <div class="row justify-content-between align-items-center mb-2">
                            <h4 class="header-title"> {{ $t('general.bankAccountsTable') }}</h4>
                            <div class="col-xs-10 col-md-9 col-lg-7" style="font-weight: 500">

                                <div class="d-inline-block" style="width: 22.2%;">
                                    <!-- Basic dropdown -->
                                    <b-dropdown variant="primary" :text="$t('general.searchSetting')" ref="dropdown"
                                                class="btn-block setting-search">
                                        <b-form-checkbox v-model="filterSetting" value="bank_id" class="mb-1">
                                            {{ $t('general.bank_id') }}
                                        </b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="account_number" class="mb-1">
                                            {{ $t('general.account_number') }}
                                        </b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="phone" class="mb-1">
                                            {{ $t('general.phone') }}
                                        </b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="address" class="mb-1">
                                            {{ $t('general.address') }}
                                        </b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="email" class="mb-1">
                                            {{ $t('general.email') }}
                                        </b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="emp_id" class="mb-1">
                                            {{ $t('general.emp_id') }}
                                        </b-form-checkbox>
                                        <b-form-checkbox v-model="filterSetting" value="rp_code"
                                                         class="mb-1">{{ $t('general.rp_code') }}
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
                                        @click.prevent="deletebankAccount(checkAll)"
                                    >
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                    <!-- end mult delete  -->
                                    <!--  start one delete  -->
                                    <button
                                        class="custom-btn-dowonload"
                                        v-if="checkAll.length == 1"
                                        @click.prevent="deletebankAccount(checkAll[0])"
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
                                                    ref="dropdown" class="dropdown-custom-ali">
                                            <b-form-checkbox v-model="setting.bank_id" class="mb-1">{{
                                                    $t('general.bank_id')
                                                }}
                                            </b-form-checkbox>
                                            <b-form-checkbox v-model="setting.account_number" class="mb-1">
                                                {{ $t('general.account_number') }}
                                            </b-form-checkbox>
                                            <b-form-checkbox v-model="setting.phone" class="mb-1">
                                                {{ $t('general.phone') }}
                                            </b-form-checkbox>
                                            <b-form-checkbox v-model="setting.address" class="mb-1">
                                                {{ $t('general.address') }}
                                            </b-form-checkbox>
                                            <b-form-checkbox v-model="setting.email" class="mb-1">
                                                {{ $t('general.email') }}
                                            </b-form-checkbox>
                                            <b-form-checkbox v-model="setting.emp_id" class="mb-1">
                                                {{ $t('general.emp_id') }}
                                            </b-form-checkbox>
                                            <b-form-checkbox v-model="setting.rp_code" class="mb-1">
                                                {{ $t('general.rp_code') }}
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
                                            {{ bankAccountsPagination.from }}-{{ bankAccountsPagination.to }} /
                                            {{ bankAccountsPagination.total }}
                                        </div>
                                        <div class="d-inline-block">
                                            <a
                                                href="javascript:void(0)"
                                                :style="{'pointer-events':bankAccountsPagination.current_page == 1 ? 'none': ''}"
                                                @click.prevent="getData(bankAccountsPagination.current_page - 1)"
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
                                                :style="{'pointer-events':bankAccountsPagination.last_page == bankAccountsPagination.current_page ? 'none': ''}"
                                                @click.prevent="getData(bankAccountsPagination.current_page + 1)"
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
                            :title="$t('general.addBankAccount')"
                            title-class="font-18"
                            dialog-class="modal-full-width"
                            :hide-footer="true"
                            body-class="bankAccount"
                            @show="resetModal"
                            @hidden="resetModalHidden"
                        >
                            <form>
                                <div class="card">
                                    <div class="card-body">
                                        <div class="mt-1 d-flex justify-content-end">
                                            <!-- Emulate built in modal footer ok and cancel button actions -->
                                            <b-button
                                                variant="success"
                                                :disabled="!bankAccount_id"
                                                @click.prevent="resetForm"
                                                type="button"
                                                :class="['font-weight-bold px-2',bankAccount_id?'mx-2': '']"
                                            >
                                                {{ $t('general.AddNewRecord') }}
                                            </b-button>

                                            <template v-if="!bankAccount_id">
                                                <b-button
                                                    variant="success"
                                                    type="button" class="mx-1 font-weight-bold px-3"
                                                    v-if="!isLoader"
                                                    @click.prevent="AddSubmit"
                                                >
                                                    {{ $t('general.Save') }}
                                                </b-button>

                                                <b-button variant="success" class="mx-1" disabled v-else>
                                                    <b-spinner small></b-spinner>
                                                    <span class="sr-only">{{ $t('login.Loading') }}...</span>
                                                </b-button>
                                            </template>

                                            <b-button variant="danger" class="font-weight-bold" type="button"
                                                      @click.prevent="resetModalHidden">
                                                {{ $t('general.Cancel') }}
                                            </b-button>
                                        </div>
                                    </div>

                                    <b-tabs nav-class="nav-tabs nav-bordered">
                                        <b-tab :title="$t('general.DataEntry')" active>
                                            <div class="row">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group position-relative">
                                                            <label class="control-label">
                                                                {{ $t("general.Bank") }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <multiselect
                                                                @input="showBankModal"
                                                                v-model="create.bank_id"
                                                                :options="banks.map((type) => type.id)"
                                                                :custom-label="(opt) => banks.find((x) => x.id == opt).name"
                                                            >
                                                            </multiselect>
                                                            <div
                                                                v-if="$v.create.bank_id.$error || errors.bank_id"
                                                                class="text-danger"
                                                            >
                                                                {{ $t("general.fieldIsRequired") }}
                                                            </div>
                                                            <template v-if="errors.bank_id">
                                                                <ErrorMessage
                                                                    v-for="(errorMessage, index) in errors.bank_id"
                                                                    :key="index"
                                                                >{{ errorMessage }}
                                                                </ErrorMessage
                                                                >
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6"></div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="field-1" class="control-label">
                                                                {{ $t('general.account_number') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="number"
                                                                class="form-control"
                                                                data-create="1"
                                                                @keypress.enter="moveInput('input','create',2)"
                                                                v-model="$v.create.account_number.$model"
                                                                :class="{
                                                                'is-invalid':$v.create.account_number.$error || errors.account_number,
                                                                'is-valid':!$v.create.account_number.$invalid && !errors.account_number
                                                            }"
                                                                id="field-1"
                                                            />
                                                            <div v-if="!$v.create.account_number.minLength"
                                                                 class="invalid-feedback">
                                                                {{ $t('general.Itmustbeatleast') }}
                                                                {{ $v.create.account_number.$params.minLength.min }}
                                                                {{ $t('general.letters') }}
                                                            </div>
                                                            <div v-if="!$v.create.account_number.maxLength"
                                                                 class="invalid-feedback">
                                                                {{ $t('general.Itmustbeatmost') }}
                                                                {{ $v.create.account_number.$params.maxLength.max }}
                                                                {{ $t('general.letters') }}
                                                            </div>

                                                            <template v-if="errors.account_number">
                                                                <ErrorMessage
                                                                    v-for="(errorMessage,index) in errors.account_number"
                                                                    :key="index">{{ errorMessage }}
                                                                </ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="field-3" class="control-label">
                                                                {{ $t('general.phone') }}
                                                                <span class="text-danger">*</span>
                                                            </label>

                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                data-create="3"
                                                                @keypress.enter="moveInput('input','create',4)"
                                                                v-model="$v.create.phone.$model"
                                                                :class="{
                                                                'is-invalid':$v.create.phone.$error || errors.phone,
                                                                'is-valid':!$v.create.phone.$invalid && !errors.phone
                                                            }"
                                                                id="field-3"
                                                            />

                                                            <div v-if="!$v.create.phone.minLength"
                                                                 class="invalid-feedback">
                                                                {{ $t('general.Itmustbeatleast') }}
                                                                {{ $v.create.phone.$params.minLength.min }}
                                                                {{ $t('general.letters') }}
                                                            </div>
                                                            <div v-if="!$v.create.phone.maxLength"
                                                                 class="invalid-feedback">
                                                                {{ $t('general.Itmustbeatmost') }}
                                                                {{ $v.create.phone.$params.maxLength.max }}
                                                                {{ $t('general.letters') }}
                                                            </div>
                                                            <template v-if="errors.phone">
                                                                <ErrorMessage
                                                                    v-for="(errorMessage,index) in errors.phone"
                                                                    :key="index">{{ errorMessage }}
                                                                </ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="field-2" class="control-label">
                                                                {{ $t('general.address') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <div dir="ltr">
                                                                <input
                                                                    type="text"
                                                                    class="form-control"
                                                                    data-create="2"
                                                                    @keypress.enter="moveInput('input','create',3)"
                                                                    v-model="$v.create.address.$model"
                                                                    :class="{
                                                                        'is-invalid':$v.create.address.$error || errors.address,
                                                                        'is-valid':!$v.create.address.$invalid && !errors.address
                                                                    }"
                                                                    id="field-2"
                                                                />
                                                            </div>
                                                            <div v-if="!$v.create.address.minLength"
                                                                 class="invalid-feedback">
                                                                {{ $t('general.Itmustbeatleast') }}
                                                                {{ $v.create.address.$params.minLength.min }}
                                                                {{ $t('general.letters') }}
                                                            </div>
                                                            <div v-if="!$v.create.address.maxLength"
                                                                 class="invalid-feedback">
                                                                {{ $t('general.Itmustbeatmost') }}
                                                                {{ $v.create.address.$params.maxLength.max }}
                                                                {{ $t('general.letters') }}
                                                            </div>
                                                            <template v-if="errors.address">
                                                                <ErrorMessage
                                                                    v-for="(errorMessage,index) in errors.address"
                                                                    :key="index">{{ errorMessage }}
                                                                </ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="field-4" class="control-label">
                                                                {{ $t('general.email') }}
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                data-create="4"
                                                                @keypress.enter="moveInput('input','create',5)"
                                                                v-model="$v.create.email.$model"
                                                                :class="{
                                                                    'is-invalid':$v.create.email.$error || errors.email,
                                                                    'is-valid':!$v.create.email.$invalid && !errors.email
                                                                }" id="field-4"
                                                            />
                                                            <div v-if="!$v.create.email.email" class="invalid-feedback">
                                                                {{ $t("general.notValidEmail") }}
                                                            </div>
                                                            <template v-if="errors.email">
                                                                <ErrorMessage
                                                                    v-for="(errorMessage,index) in errors.email"
                                                                    :key="index">{{ errorMessage }}
                                                                </ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="field-3" class="control-label">
                                                                {{ $t('general.emp_id') }}
                                                                <span class="text-danger">*</span>
                                                            </label>

                                                            <input
                                                                type="number"
                                                                class="form-control"
                                                                data-create="3"
                                                                @keypress.enter="moveInput('input','create',4)"
                                                                v-model="$v.create.emp_id.$model"
                                                                :class="{
                                                                'is-invalid':$v.create.emp_id.$error || errors.emp_id,
                                                                'is-valid':!$v.create.emp_id.$invalid && !errors.emp_id
                                                            }"
                                                            />

                                                            <div v-if="!$v.create.emp_id.minLength"
                                                                 class="invalid-feedback">
                                                                {{ $t('general.Itmustbeatleast') }}
                                                                {{ $v.create.emp_id.$params.minLength.min }}
                                                                {{ $t('general.letters') }}
                                                            </div>
                                                            <div v-if="!$v.create.emp_id.maxLength"
                                                                 class="invalid-feedback">
                                                                {{ $t('general.Itmustbeatmost') }}
                                                                {{ $v.create.emp_id.$params.maxLength.max }}
                                                                {{ $t('general.letters') }}
                                                            </div>
                                                            <template v-if="errors.emp_id">
                                                                <ErrorMessage
                                                                    v-for="(errorMessage,index) in errors.emp_id"
                                                                    :key="index">{{ errorMessage }}
                                                                </ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="field-3" class="control-label">
                                                                {{ $t('general.rp_code') }}
                                                                <span class="text-danger">*</span>
                                                            </label>

                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                data-create="3"
                                                                @keypress.enter="moveInput('input','create',4)"
                                                                v-model="$v.create.rp_code.$model"
                                                                :class="{
                                                                'is-invalid':$v.create.rp_code.$error || errors.rp_code,
                                                                'is-valid':!$v.create.rp_code.$invalid && !errors.rp_code
                                                            }"
                                                            />

                                                            <div v-if="!$v.create.rp_code.minLength"
                                                                 class="invalid-feedback">
                                                                {{ $t('general.Itmustbeatleast') }}
                                                                {{ $v.create.rp_code.$params.minLength.min }}
                                                                {{ $t('general.letters') }}
                                                            </div>
                                                            <div v-if="!$v.create.rp_code.maxLength"
                                                                 class="invalid-feedback">
                                                                {{ $t('general.Itmustbeatmost') }}
                                                                {{ $v.create.rp_code.$params.maxLength.max }}
                                                                {{ $t('general.letters') }}
                                                            </div>
                                                            <template v-if="errors.rp_code">
                                                                <ErrorMessage
                                                                    v-for="(errorMessage,index) in errors.rp_code"
                                                                    :key="index">{{ errorMessage }}
                                                                </ErrorMessage>
                                                            </template>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-tab>
                                        <b-tab :disabled="!bankAccount_id" :title="$t('general.ImageUploads')">
                                            <div class="row">
                                                <input
                                                    accept="image/png, image/gif, image/jpeg, image/jpg"
                                                    type="file"
                                                    id="uploadImageCreate"
                                                    @change.prevent="onImageChanged"
                                                    class="input-file-upload position-absolute"
                                                    :class="[
                                                            'd-none'
                                                            ,{'is-invalid':$v.create.media.$error || errors.media,
                                                            'is-valid':!$v.create.media.$invalid && !errors.media}
                                                        ]"
                                                >
                                                <div class="col-md-8 my-1">
                                                    <!-- file upload -->
                                                    <div class="row align-content-between"
                                                         style="width: 100%;height: 100%">
                                                        <div class="col-12">
                                                            <div class="d-flex flex-wrap">
                                                                <div
                                                                    :class="['dropzone-previews col-4 position-relative mb-2']"
                                                                    v-for="(photo,index) in images"
                                                                    :key="photo.id"
                                                                >
                                                                    <div
                                                                        :class="['card mb-0 shadow-none border',(images.length - 1) == index ? 'bg-primary': '']">
                                                                        <div class="p-2">
                                                                            <div class="row align-items-center">
                                                                                <div class="col-auto"
                                                                                     @click="showPhoto = photo.webp">
                                                                                    <img
                                                                                        data-dz-thumbnail
                                                                                        :src="photo.webp"
                                                                                        class="avatar-sm rounded bg-light"
                                                                                        @error="src='./images/img-1.png'"
                                                                                    >
                                                                                </div>
                                                                                <div class="col pl-0">
                                                                                    <a href="javascript:void(0);"
                                                                                       :class="['font-weight-bold',(images.length - 1) == index ? 'text-white': 'text-muted']"
                                                                                       data-dz-name
                                                                                    >
                                                                                        {{ photo.name }}
                                                                                    </a>
                                                                                </div>
                                                                                <!-- Button -->
                                                                                <a
                                                                                    href="javascript:void(0);"
                                                                                    :class="['btn-danger dropzone-close',
                                                                                $i18n.locale == 'ar' ?'dropzone-close-rtl': ''
                                                                            ]"
                                                                                    data-dz-remove
                                                                                    @click.prevent="deleteImageCreate(photo.id,index)"
                                                                                >
                                                                                    <i class="fe-x"></i>
                                                                                </a>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="footer-image col-12">
                                                            <b-button
                                                                @click="changePhoto"
                                                                variant="success"
                                                                type="button" class="mx-1 font-weight-bold px-3"
                                                                v-if="!isLoader"
                                                            >
                                                                {{ $t('general.Add') }}
                                                            </b-button>
                                                            <b-button variant="success" class="mx-1" disabled v-else>
                                                                <b-spinner small></b-spinner>
                                                                <span class="sr-only">{{
                                                                        $t('login.Loading')
                                                                    }}...</span>
                                                            </b-button>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="col-md-4">
                                                    <div class="show-dropzone">
                                                        <img
                                                            :src="showPhoto"
                                                            class="img-thumbnail"
                                                            @error="src='./images/img-1.png'"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </b-tab>
                                    </b-tabs>
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
                                    <th v-if="setting.bank_id">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.bank_id') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up"
                                                   @click="bankAccounts.sort(dynamicSortNumber('bank_id'))"></i>
                                                <i class="fas fa-arrow-down"
                                                   @click="bankAccounts.sort(dynamicSortNumber('-bank_id'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.account_number">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.account_number') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up"
                                                   @click="bankAccounts.sort(dynamicSortNumber('account_number'))"></i>
                                                <i class="fas fa-arrow-down"
                                                   @click="bankAccounts.sort(dynamicSortNumber('-account_number'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.phone">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.phone') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up"
                                                   @click="bankAccounts.sort(dynamicSortNumber('phone'))"></i>
                                                <i class="fas fa-arrow-down"
                                                   @click="bankAccounts.sort(dynamicSortNumber('-phone'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.address">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.address') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up"
                                                   @click="bankAccounts.sort(dynamicSortNumber('address'))"></i>
                                                <i class="fas fa-arrow-down"
                                                   @click="bankAccounts.sort(dynamicSortNumber('-address'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th v-if="setting.email">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.email') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up"
                                                   @click="bankAccounts.sort(dynamicSortString('email'))"></i>
                                                <i class="fas fa-arrow-down"
                                                   @click="bankAccounts.sort(dynamicSortString('-email'))"></i>
                                            </div>
                                        </div>
                                    </th>

                                    <th v-if="setting.emp_id">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.emp_id') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up"
                                                   @click="bankAccounts.sort(dynamicSortNumber('emp_id'))"></i>
                                                <i class="fas fa-arrow-down"
                                                   @click="bankAccounts.sort(dynamicSortNumber('-emp_id'))"></i>
                                            </div>
                                        </div>
                                    </th>

                                    <th v-if="setting.rp_code">
                                        <div class="d-flex justify-content-center">
                                            <span>{{ $t('general.rp_code') }}</span>
                                            <div class="arrow-sort">
                                                <i class="fas fa-arrow-up"
                                                   @click="bankAccounts.sort(dynamicSortNumber('rp_code'))"></i>
                                                <i class="fas fa-arrow-down"
                                                   @click="bankAccounts.sort(dynamicSortNumber('-rp_code'))"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th>
                                        {{ $t('general.Action') }}
                                    </th>
                                    <th><i class="fas fa-ellipsis-v"></i></th>
                                </tr>
                                </thead>
                                <tbody v-if="bankAccounts.length > 0">
                                <tr
                                    @click.capture="checkRow(data.id)"
                                    @dblclick.prevent="$bvModal.show(`modal-edit-${data.id}`)"
                                    v-for="(data,index) in bankAccounts"
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
                                    <td v-if="setting.bank_id">
                                        <h5 class="m-0 font-weight-normal">
                                            {{ $i18n.locale == 'ar' ? data.bank.name : data.bank.name_e }}</h5>
                                    </td>
                                    <td v-if="setting.account_number">
                                        <h5 class="m-0 font-weight-normal">{{ data.account_number }}</h5>
                                    </td>
                                    <td v-if="setting.phone">
                                        <h5 class="m-0 font-weight-normal">{{ data.phone }}</h5>
                                    </td>
                                    <td v-if="setting.address">
                                        <h5 class="m-0 font-weight-normal">{{ data.address }}</h5>
                                    </td>
                                    <td v-if="setting.email">{{ data.email }}</td>
                                    <td v-if="setting.emp_id">{{ data.emp_id }}</td>
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
                                                    @click.prevent="deletebankAccount(data.id)"
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
                                            :title="$t('general.editBankAccount')"
                                            title-class="font-18"
                                            dialog-class="modal-full-width"
                                            :ref="`edit-${data.id}`"
                                            :hide-footer="true"
                                            @show="resetModalEdit(data.id)"
                                            @hidden="resetModalHiddenEdit(data.id)"
                                            body-class="bankAccount"
                                        >
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="mt-1 d-flex justify-content-end">
                                                        <!-- Emulate built in modal footer ok and cancel button actions -->
                                                        <b-button
                                                            variant="success"
                                                            @click.prevent="editSubmit(data.id)"
                                                            type="button" class="mx-1 font-weight-bold px-3"
                                                            v-if="!isLoader"
                                                        >
                                                            {{ $t('general.Add') }}
                                                        </b-button>

                                                        <b-button variant="success" class="mx-1" disabled v-else>
                                                            <b-spinner small></b-spinner>
                                                            <span class="sr-only">{{ $t('login.Loading') }}...</span>
                                                        </b-button>

                                                        <b-button variant="danger" class="font-weight-bold"
                                                                  type="button"
                                                                  @click.prevent="$bvModal.hide(`modal-edit-${data.id}`)">
                                                            {{ $t('general.Cancel') }}
                                                        </b-button>
                                                    </div>
                                                </div>
                                                <b-tabs nav-class="nav-tabs nav-bordered">
                                                    <b-tab :title="$t('general.DataEntry')" active>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="form-group position-relative">
                                                                    <label class="control-label">
                                                                        {{ $t("general.Bank") }}
                                                                        <span class="text-danger">*</span>
                                                                    </label>
                                                                    <multiselect
                                                                        @input="showBankModalEdit"
                                                                        v-model="edit.bank_id"
                                                                        :options="banks.map((type) => type.id)"
                                                                        :custom-label="(opt) => banks.find((x) => x.id == opt).name"
                                                                    >
                                                                    </multiselect>
                                                                    <div
                                                                        v-if="$v.edit.bank_id.$error || errors.bank_id"
                                                                        class="text-danger"
                                                                    >
                                                                        {{ $t("general.fieldIsRequired") }}
                                                                    </div>
                                                                    <template v-if="errors.bank_id">
                                                                        <ErrorMessage
                                                                            v-for="(errorMessage, index) in errors.bank_id"
                                                                            :key="index"
                                                                        >{{ errorMessage }}
                                                                        </ErrorMessage
                                                                        >
                                                                    </template>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6"></div>
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label for="field-1" class="control-label">
                                                                        {{ $t('general.account_number') }}
                                                                        <span class="text-danger">*</span>
                                                                    </label>
                                                                    <input
                                                                        type="number"
                                                                        class="form-control"
                                                                        data-edit="1"
                                                                        @keypress.enter="moveInput('input','edit',2)"
                                                                        v-model="$v.edit.account_number.$model"
                                                                        :class="{
                                                                'is-invalid':$v.edit.account_number.$error || errors.account_number,
                                                                'is-valid':!$v.edit.account_number.$invalid && !errors.account_number
                                                            }"
                                                                    />
                                                                    <div v-if="!$v.edit.account_number.minLength"
                                                                         class="invalid-feedback">
                                                                        {{ $t('general.Itmustbeatleast') }}
                                                                        {{ $v.edit.account_number.$params.minLength.min }}
                                                                        {{ $t('general.letters') }}
                                                                    </div>
                                                                    <div v-if="!$v.edit.account_number.maxLength"
                                                                         class="invalid-feedback">
                                                                        {{ $t('general.Itmustbeatmost') }}
                                                                        {{ $v.edit.account_number.$params.maxLength.max }}
                                                                        {{ $t('general.letters') }}
                                                                    </div>

                                                                    <template v-if="errors.account_number">
                                                                        <ErrorMessage
                                                                            v-for="(errorMessage,index) in errors.account_number"
                                                                            :key="index">{{ errorMessage }}
                                                                        </ErrorMessage>
                                                                    </template>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label for="field-3" class="control-label">
                                                                        {{ $t('general.phone') }}
                                                                        <span class="text-danger">*</span>
                                                                    </label>

                                                                    <input
                                                                        type="text"
                                                                        class="form-control"
                                                                        data-edit="3"
                                                                        @keypress.enter="moveInput('input','edit',4)"
                                                                        v-model="$v.edit.phone.$model"
                                                                        :class="{
                                                                'is-invalid':$v.edit.phone.$error || errors.phone,
                                                                'is-valid':!$v.edit.phone.$invalid && !errors.phone
                                                            }"/>

                                                                    <div v-if="!$v.edit.phone.minLength"
                                                                         class="invalid-feedback">
                                                                        {{ $t('general.Itmustbeatleast') }}
                                                                        {{ $v.edit.phone.$params.minLength.min }}
                                                                        {{ $t('general.letters') }}
                                                                    </div>
                                                                    <div v-if="!$v.edit.phone.maxLength"
                                                                         class="invalid-feedback">
                                                                        {{ $t('general.Itmustbeatmost') }}
                                                                        {{ $v.edit.phone.$params.maxLength.max }}
                                                                        {{ $t('general.letters') }}
                                                                    </div>
                                                                    <template v-if="errors.phone">
                                                                        <ErrorMessage
                                                                            v-for="(errorMessage,index) in errors.phone"
                                                                            :key="index">{{ errorMessage }}
                                                                        </ErrorMessage>
                                                                    </template>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label for="field-2" class="control-label">
                                                                        {{ $t('general.address') }}
                                                                        <span class="text-danger">*</span>
                                                                    </label>
                                                                    <div dir="ltr">
                                                                        <input
                                                                            type="text"
                                                                            class="form-control"
                                                                            data-edit="2"
                                                                            @keypress.enter="moveInput('input','edit',3)"
                                                                            v-model="$v.edit.address.$model"
                                                                            :class="{
                                                                        'is-invalid':$v.edit.address.$error || errors.address,
                                                                        'is-valid':!$v.edit.address.$invalid && !errors.address
                                                                    }"/>
                                                                    </div>
                                                                    <div v-if="!$v.edit.address.minLength"
                                                                         class="invalid-feedback">
                                                                        {{ $t('general.Itmustbeatleast') }}
                                                                        {{ $v.edit.address.$params.minLength.min }}
                                                                        {{ $t('general.letters') }}
                                                                    </div>
                                                                    <div v-if="!$v.edit.address.maxLength"
                                                                         class="invalid-feedback">
                                                                        {{ $t('general.Itmustbeatmost') }}
                                                                        {{ $v.edit.address.$params.maxLength.max }}
                                                                        {{ $t('general.letters') }}
                                                                    </div>
                                                                    <template v-if="errors.address">
                                                                        <ErrorMessage
                                                                            v-for="(errorMessage,index) in errors.address"
                                                                            :key="index">{{ errorMessage }}
                                                                        </ErrorMessage>
                                                                    </template>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label for="field-4" class="control-label">
                                                                        {{ $t('general.email') }}
                                                                        <span class="text-danger">*</span>
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        class="form-control"
                                                                        data-edit="4"
                                                                        @keypress.enter="moveInput('input','edit',5)"
                                                                        v-model="$v.edit.email.$model"
                                                                        :class="{
                                                                    'is-invalid':$v.edit.email.$error || errors.email,
                                                                    'is-valid':!$v.edit.email.$invalid && !errors.email
                                                                }" />
                                                                    <div v-if="!$v.edit.email.email" class="invalid-feedback">
                                                                        {{ $t("general.notValidEmail") }}
                                                                    </div>
                                                                    <template v-if="errors.email">
                                                                        <ErrorMessage
                                                                            v-for="(errorMessage,index) in errors.email"
                                                                            :key="index">{{ errorMessage }}
                                                                        </ErrorMessage>
                                                                    </template>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label for="field-3" class="control-label">
                                                                        {{ $t('general.emp_id') }}
                                                                        <span class="text-danger">*</span>
                                                                    </label>

                                                                    <input
                                                                        type="number"
                                                                        class="form-control"
                                                                        data-edit="3"
                                                                        @keypress.enter="moveInput('input','edit',4)"
                                                                        v-model="$v.edit.emp_id.$model"
                                                                        :class="{
                                                                'is-invalid':$v.edit.emp_id.$error || errors.emp_id,
                                                                'is-valid':!$v.edit.emp_id.$invalid && !errors.emp_id
                                                            }"
                                                                    />

                                                                    <div v-if="!$v.edit.emp_id.minLength"
                                                                         class="invalid-feedback">
                                                                        {{ $t('general.Itmustbeatleast') }}
                                                                        {{ $v.edit.emp_id.$params.minLength.min }}
                                                                        {{ $t('general.letters') }}
                                                                    </div>
                                                                    <div v-if="!$v.edit.emp_id.maxLength"
                                                                         class="invalid-feedback">
                                                                        {{ $t('general.Itmustbeatmost') }}
                                                                        {{ $v.edit.emp_id.$params.maxLength.max }}
                                                                        {{ $t('general.letters') }}
                                                                    </div>
                                                                    <template v-if="errors.emp_id">
                                                                        <ErrorMessage
                                                                            v-for="(errorMessage,index) in errors.emp_id"
                                                                            :key="index">{{ errorMessage }}
                                                                        </ErrorMessage>
                                                                    </template>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label for="field-3" class="control-label">
                                                                        {{ $t('general.rp_code') }}
                                                                        <span class="text-danger">*</span>
                                                                    </label>

                                                                    <input
                                                                        type="text"
                                                                        class="form-control"
                                                                        data-edit="3"
                                                                        @keypress.enter="moveInput('input','edit',4)"
                                                                        v-model="$v.edit.rp_code.$model"
                                                                        :class="{
                                                                'is-invalid':$v.edit.rp_code.$error || errors.rp_code,
                                                                'is-valid':!$v.edit.rp_code.$invalid && !errors.rp_code
                                                            }"
                                                                    />

                                                                    <div v-if="!$v.edit.rp_code.minLength"
                                                                         class="invalid-feedback">
                                                                        {{ $t('general.Itmustbeatleast') }}
                                                                        {{ $v.edit.rp_code.$params.minLength.min }}
                                                                        {{ $t('general.letters') }}
                                                                    </div>
                                                                    <div v-if="!$v.edit.rp_code.maxLength"
                                                                         class="invalid-feedback">
                                                                        {{ $t('general.Itmustbeatmost') }}
                                                                        {{ $v.edit.rp_code.$params.maxLength.max }}
                                                                        {{ $t('general.letters') }}
                                                                    </div>
                                                                    <template v-if="errors.rp_code">
                                                                        <ErrorMessage
                                                                            v-for="(errorMessage,index) in errors.rp_code"
                                                                            :key="index">{{ errorMessage }}
                                                                        </ErrorMessage>
                                                                    </template>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </b-tab>
                                                    <b-tab :title="$t('general.ImageUploads')">
                                                        <div class="row">
                                                            <input
                                                                accept="image/png, image/gif, image/jpeg, image/jpg"
                                                                type="file"
                                                                id="uploadImageEdit"
                                                                @change.prevent="onImageChanged"
                                                                class="input-file-upload position-absolute"
                                                                :class="[
                                                            'd-none'
                                                            ,{'is-invalid':$v.edit.media.$error || errors.media,
                                                            'is-valid':!$v.edit.media.$invalid && !errors.media}
                                                        ]"
                                                            >
                                                            <div class="col-md-8 my-1">
                                                                <!-- file upload -->
                                                                <div class="row align-content-between" style="width: 100%;height: 100%">
                                                                    <div class="col-12">
                                                                        <div class="d-flex flex-wrap">
                                                                            <div
                                                                                class="dropzone-previews col-4 position-relative mb-2"
                                                                                v-for="(photo,index) in images"
                                                                            >
                                                                                <div :class="['card mb-0 shadow-none border',(images.length - 1) == index ? 'bg-primary': '']">
                                                                                    <div class="p-2">
                                                                                        <div class="row align-items-center">
                                                                                            <div class="col-auto" @click="showPhoto = photo.webp">
                                                                                                <img
                                                                                                    data-dz-thumbnail
                                                                                                    :src="photo.webp" class="avatar-sm rounded bg-light"
                                                                                                    @error="src='./images/img-1.png'"
                                                                                                >
                                                                                            </div>
                                                                                            <div class="col pl-0">
                                                                                                <a href="javascript:void(0);"
                                                                                                   :class="['font-weight-bold',(images.length - 1) == index ? 'text-white': 'text-muted']"
                                                                                                   data-dz-name
                                                                                                >
                                                                                                    {{ photo.name }}
                                                                                                </a>
                                                                                            </div>
                                                                                            <!-- Button -->
                                                                                            <a
                                                                                                href="javascript:void(0);"
                                                                                                :class="['btn-danger text-muted dropzone-close',
                                                                                                    $i18n.locale == 'ar' ?'dropzone-close-rtl': ''
                                                                                                ]"
                                                                                                data-dz-remove
                                                                                                @click.prevent="deleteImageCreate(photo.id,index)"
                                                                                            >
                                                                                                <i class="fe-x"></i>
                                                                                            </a>

                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="footer-image col-12">
                                                                        <b-button
                                                                            @click="changePhotoEdit"
                                                                            variant="success"
                                                                            type="button" class="mx-1 font-weight-bold px-3"
                                                                            v-if="!isLoader"
                                                                        >
                                                                            {{ $t('general.Add') }}
                                                                        </b-button>
                                                                        <b-button variant="success" class="mx-1" disabled v-else>
                                                                            <b-spinner small></b-spinner>
                                                                            <span class="sr-only">{{ $t('login.Loading') }}...</span>
                                                                        </b-button>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div class="col-md-4">
                                                                <div class="show-dropzone">
                                                                    <img :src="showPhoto" class="img-thumbnail" @error="src='./images/img-1.png'" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </b-tab>
                                                </b-tabs>
                                            </div>
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

<style>
.modal-dialog .card {
    margin: 0 !important;
}

.bankAccount.modal-body {
    padding: 0 !important;
}

.modal-dialog .card-body {
    padding: 1.5rem 1.5rem 0 1.5rem !important;
}

.nav-bordered {
    border: unset !important;
}

.nav {
    background-color: #dff0fe;
}

.tab-content {
    padding: 70px 60px 40px;
    min-height: 300px;
    background-color: #f5f5f5;
    position: relative;
}

.nav-tabs .nav-link {
    border: 1px solid #b7b7b7 !important;
    background-color: #d7e5f2;
    border-bottom: 0 !important;
    margin-bottom: 1px;
}

.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
    color: #000;
    background-color: hsl(0deg 0% 96%);
    border-bottom: 0 !important;
}

.img-thumbnail {
    max-height: 400px !important;
}
</style>


<template>
   <div>
       <Bank @created="getBank" />
       <b-modal
           id="bank-account-create"
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
                                     @click.prevent="$bvModal.hide('bank-account-create')">
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
   </div>
</template>

<script>
import {email, integer, maxLength, minLength, required} from "vuelidate/lib/validators";
import ErrorMessage from "../widgets/errorMessage";
import loader from "../loader";
import Multiselect from "vue-multiselect";
import Bank from "./bank";
import adminApi from "../../api/adminAxios";
import Swal from "sweetalert2";

export default {
    name: "bankAccount",
    components: {
        ErrorMessage,
        loader,
        Multiselect,
        Bank
    },
    data() {
        return {
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
            errors: {},
            images: [],
            media: {},
            bankAccount_id: null,
            current_page: 1,
            showPhoto: './images/img-1.png',
            idDelete: null,
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
         *  reset Modal (create)
         */
        async resetModalHidden() {
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
    }
}
</script>


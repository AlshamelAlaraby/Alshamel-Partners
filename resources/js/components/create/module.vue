<template>
    <!--  create   -->
    <b-modal
        id="create"
        :title="$t('module.addmodule')"
        title-class="font-18"
        body-class="p-4 "
        :hide-footer="true"
        @show="resetModal"
        @hidden="resetModalHidden"
    >
        <b-button
            v-b-modal.create
            variant="primary"
            class="btn-sm mx-1 font-weight-bold"
        >
            {{ $t('general.Create') }}
            <i class="fas fa-plus"></i>
        </b-button>
        <form  @submit.stop.prevent="AddSubmit">
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
                            v-model="$v.create.name.$model"
                            :class="{
                                                'is-invalid':$v.create.name.$error || errors.name,
                                                'is-valid':!$v.create.name.$invalid && !errors.name
                                            }"
                            :placeholder="$t('general.Name')" id="field-1"
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
                            v-model="$v.create.name_e.$model"
                            :class="{
                                                'is-invalid':$v.create.name_e.$error || errors.name_e,
                                                'is-valid':!$v.create.name_e.$invalid && !errors.name_e
                                            }"
                            :placeholder="$t('general.Name_en')" id="field-2"
                        />
                        <div v-if="!$v.create.name_e.minLength" class="invalid-feedback">{{ $t('general.Itmustbeatleast') }} {{ $v.create.name_e.$params.minLength.min }} {{ $t('general.letters') }}</div>
                        <div v-if="!$v.create.name_e.maxLength" class="invalid-feedback">{{ $t('general.Itmustbeatmost') }}  {{ $v.create.name_e.$params.maxLength.max }} {{ $t('general.letters') }}</div>
                        <div v-if="!$v.create.name_e.alphaEnglish" class="invalid-feedback">{{ $t('general.alphaEnglish') }}</div>
                        <template v-if="errors.name_e">
                            <ErrorMessage v-for="(errorMessage,index) in errors.name_e" :key="index">{{ errorMessage }}</ErrorMessage>
                        </template>
                    </div>
                </div>
                <div class="col-md-6 mt-1">
                    <div class="form-group">
                        <label class="my-1 mr-2" for="inlineFormCustomSelectPref">
                            {{ $t('general.Status') }}
                            <span class="text-danger">*</span>
                        </label>
                        <select
                            class="custom-select my-1 mr-sm-2"
                            id="inlineFormCustomSelectPref"
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
                <div class="col-md-6 mt-1 position-relative">
                    <div class="form-group">
                        <label class="my-1 mr-2" >{{ $t('general.IdParent') }}</label>
                        <input
                            class="form-control input-Sender"
                            v-model.trim="create.search"
                            @input="searchSender"
                            @blur.prevent="ClickDropdown"
                            @focus="isButton = false"
                            :placeholder="$t('general.IdParent')" id="field-9"
                        />

                        <ul class="dropdown-search list-unstyled sender-search"
                            v-if="dropDownSenders.length > 0"
                        >
                            <li
                                class="Sender"
                                v-for="(dropDownSender,index) in dropDownSenders"
                                :key="index"
                                @click="showSenderName(index)"
                                @mouseenter="senderHover"
                            >
                                {{ `${dropDownSenders.id}- ${dropDownSenders.name}` }}
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div class="mt-1 d-flex justify-content-end">
                <!-- Emulate built in modal footer ok and cancel button actions -->
                <b-button  variant="success" type="submit" class="mx-1" v-if="!isLoader && isButton">
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
</template>

<script>
import {maxLength, minLength, required} from "vuelidate/lib/validators";
import alphaArabic from "../../helper/alphaArabic";
import alphaEnglish from "../../helper/alphaEnglish";
import adminApi from "../../api/adminAxios";
import Swal from "sweetalert2";

export default {
    name: "module",
    props: {
        dropDownSenders : {type:Array},
        debounce: {type:Object},
        isLoader :{type: Boolean},
    },
    data() {
        return {
            errors: {},
            isButton: true,
            create: {
                name: '',
                name_e: '',
                parent_id: 0,
                is_active: 'active',
                search: ''
            }
        }
    },
    validations: {
        create: {
            name: {required,minLength: minLength(3),maxLength: maxLength(100),alphaArabic},
            name_e: {required,minLength: minLength(3),maxLength: maxLength(100),alphaEnglish},
            is_active: {required}
        },
    },
    methods: {
        /**
         *  reset Modal (create)
         */
        resetModalHidden(){
            this.create =  {name: '', name_e: '', parent_id: 0, is_active: 'active'};
            this.$nextTick(() => { this.$v.$reset() });
            this.errors = {};
            this.$bvModal.hide(`create`);
        },
        /**
         *  hidden Modal (create)
         */
        resetModal(){
            this.create =  {name: '', name_e: '', parent_id: 0, is_active: 'active'};
            this.$nextTick(() => { this.$v.$reset() });
            this.errors = {};
        },
        /**
         *  create module
         */
        AddSubmit(){

            this.$v.create.$touch();

            if (this.$v.create.$invalid) {
                return;
            } else {
                this.isLoader = true;
                this.errors = {};
                adminApi.post(`/modules`,this.create)
                    .then((res) => {
                        this.$bvModal.hide(`create`);
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
         *  start  dropdown Google
         */
        searchSender(){
            this.dropDownSenders = [];
            this.create.parent_id = 0;
            this.edit.parent_id = 0;
            if(this.create.search){
                clearTimeout(this.debounce);
                this.debounce = setTimeout(() => {
                    adminApi.get(`/modules?parent_id=${0}&is_active=active`)
                        .then((res) => {
                            this.dropDownSenders = res.data.data;
                        })
                        .catch((err) => {
                            Swal.fire({
                                icon: 'error',
                                title: `${this.$t('general.Error')}`,
                                text: `${this.$t('general.Thereisanerrorinthesystem')}`,
                            });
                        });
                }, 400);
            }else{
                this.dropDownSenders = [];
            }
            this.isButton = false;
        },

        showSenderName(index){
            let item = this.dropDownSenders[index];
            this.create.parent_id = item.id;
            this.create.search = (this.$i18n.locale == 'ar' ? item.name : item.name_e);
            this.edit.parent_id = item.id;
            this.edit.search = (this.$i18n.locale == 'ar' ? item.name : item.name_e);
            this.isButton = true;
            this.dropDownSenders = [];
        },

        senderHover(){
            this.$emit('senderHover');
        },
        ClickDropdown(){
           this.$emit('ClickDropdown');
        }
        /**
         *  end  dropdown Google
         */


    }
}
</script>


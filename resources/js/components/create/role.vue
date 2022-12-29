<template>
   <div>
       <RoleType @created="getRoleType" />
       <!--  create   -->
       <b-modal
           id="role-create"
           :title="getCompanyKey('role_create_form')"
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

                   <b-button variant="danger" type="button" @click.prevent="$bvModal.hide(`role-create`)">
                       {{ $t('general.Cancel') }}
                   </b-button>
               </div>
               <div class="row">
                   <div class="col-md-12">
                       <div class="form-group">
                           <label class="my-1 mr-2">{{ getCompanyKey('role_type') }}</label>
                           <multiselect
                               @input="showRoleTypeModal"
                               v-model="create.roletype_id"
                               :options="role_types.map(type => type.id)"
                               :custom-label="opt => role_types.find(x => x.id == opt).name">
                           </multiselect>
                           <template v-if="errors.roletype_id">
                               <ErrorMessage v-for="(errorMessage,index) in errors.roletype_id" :key="index">{{ errorMessage }}</ErrorMessage>
                           </template>
                       </div>
                   </div>
                   <div class="col-md-12">
                       <div class="form-group">
                           <label for="field-1" class="control-label">
                               {{ getCompanyKey('role_name_ar') }}
                               <span class="text-danger">*</span>
                           </label>
                           <div  dir="rtl">
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
                           <div v-if="!$v.create.name.minLength" class="invalid-feedback">
                               {{ $t('general.Itmustbeatleast') }}
                               {{ $v.create.name.$params.minLength.min }} {{ $t('general.letters') }}
                           </div>
                           <div v-if="!$v.create.name.maxLength" class="invalid-feedback">
                               {{ $t('general.Itmustbeatmost') }}
                               {{ $v.create.name.$params.maxLength.max }} {{ $t('general.letters') }}
                           </div>
                           <template v-if="errors.name">
                               <ErrorMessage v-for="(errorMessage,index) in errors.name" :key="index">
                                   {{ errorMessage }}
                               </ErrorMessage>
                           </template>
                       </div>
                   </div>
                   <div class="col-md-12" >
                       <div class="form-group">
                           <label for="field-2" class="control-label">
                               {{ getCompanyKey('role_name_en') }}
                               <span class="text-danger">*</span>
                           </label>
                           <div dir="ltr">
                               <input
                                   type="text"
                                   class="form-control englishInput"
                                   data-create="2"
                                   @keypress.enter="moveInput('select','create',3)"
                                   v-model="$v.create.name_e.$model"
                                   :class="{
                                                        'is-invalid':$v.create.name_e.$error || errors.name_e,
                                                        'is-valid':!$v.create.name_e.$invalid && !errors.name_e
                                                    }"
                                   id="field-2"
                               />
                           </div>
                           <div v-if="!$v.create.name_e.minLength" class="invalid-feedback">
                               {{ $t('general.Itmustbeatleast') }}
                               {{ $v.create.name_e.$params.minLength.min }} {{ $t('general.letters') }}
                           </div>
                           <div v-if="!$v.create.name_e.maxLength" class="invalid-feedback">
                               {{ $t('general.Itmustbeatmost') }}
                               {{ $v.create.name_e.$params.maxLength.max }} {{ $t('general.letters') }}
                           </div>
                           <div v-if="!$v.create.name_e.alphaEnglish" class="invalid-feedback">
                               {{ $t('general.alphaEnglish') }}
                           </div>
                           <template v-if="errors.name_e">
                               <ErrorMessage v-for="(errorMessage,index) in errors.name_e"
                                             :key="index">{{ errorMessage }}
                               </ErrorMessage>
                           </template>
                       </div>
                   </div>
               </div>
           </form>
       </b-modal>
       <!--  /create   -->
   </div>
</template>

<script>
import {maxLength, minLength, required} from "vuelidate/lib/validators";
import adminApi from "../../api/adminAxios";
import Swal from "sweetalert2";
import RoleType from "./roleType";
import ErrorMessage from "../widgets/errorMessage";
import Multiselect from "vue-multiselect";
import translation from "../../helper/translation-mixin";

export default {
    name: "role",
    mixins:[translation],
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
                    return false;
                if(65 <= ew && ew <= 90)
                    return false;
                if(97 <= ew && ew <= 122)
                    return false;
                return true;
            });
        });
    },
    components: {
        RoleType,
        ErrorMessage,
        Multiselect
    },
    data() {
        return {
            isLoader: false,
            create: {
                name: '',
                name_e: '',
                roletype_id: null,
            },
            errors: {},
            role_types: [],
            is_disabled: false,
        }
    },
    validations: {
        create: {
            name: {required, minLength: minLength(3), maxLength: maxLength(100)},
            name_e: {required, minLength: minLength(3), maxLength: maxLength(100)},
            roletype_id:{required}
        }
    },
    methods: {
        moveInput(tag, c, index) {
            document.querySelector(`${tag}[data-${c}='${index}']`).focus()
        },
        async getRoleType(){
            this.isLoader = true;

            await adminApi.get(`/role_types`)
                .then((res) => {
                    let l = res.data.data;
                    l.unshift({ id: 0, name: "اضف نوع الدور", name_e: "Add Role Type" });
                    this.role_types = l;
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
        showRoleTypeModal() {
            if (this.create.roletype_id == 0) {
                this.$bvModal.show("role-types-create");
                this.create.roletype_id = null;
            }
        },
        showRoleTypeModalEdit() {
            if (this.edit.roletype_id == 0) {
                this.$bvModal.show("role-types-create");
                this.edit.roletype_id = null;
            }
        },
        /**
         *  reset Modal (create)
         */
        resetModalHidden() {
            this.create = {name: '', name_e: '', roletype_id: null};
            this.$nextTick(() => {
                this.$v.$reset()
            });
            this.errors = {};
        },
        /**
         *  hidden Modal (create)
         */

        async resetModal() {
            await this.getRoleType();
            this.create = {name: '', name_e: '', roletype_id: null};
            this.$nextTick(() => {
                this.$v.$reset()
            });
            this.errors = {};
        },
        /**
         *  create module
         */
        async resetForm() {
            await this.getRoleType();
            this.create = {name: '', name_e: '', roletype_id: null};
            this.$nextTick(() => {
                this.$v.$reset()
            });
            this.is_disabled = false;
            this.errors = {};
        },

        AddSubmit() {

            if(!this.create.name){ this.create.name = this.create.name_e}
            if(!this.create.name_e){ this.create.name_e = this.create.name}
            this.$v.create.$touch();

            if (this.$v.create.$invalid) {
                return;
            } else {
                this.isLoader = true;
                this.errors = {};
                adminApi.post(`/roles`, this.create)
                    .then((res) => {
                        this.is_disabled = true;
                        this.$emit('created');
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
    }
}
</script>

<style scoped>

</style>

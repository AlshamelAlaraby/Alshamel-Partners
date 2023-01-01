<template>
<!--  create   -->
  <b-modal
        id="sales-man-type-create"
        :title="getCompanyKey('sale_man_type_create_form')"
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

                <b-button variant="danger" type="button" @click.prevent="$bvModal.hide(`sales-man-type-create`)">
                    {{ $t('general.Cancel') }}
                </b-button>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="field-1" class="control-label">
                            {{ getCompanyKey('sale_man_type_name_ar') }}
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
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="field-2" class="control-label">
                            {{ getCompanyKey('sale_man_type_name_en') }}
                            <span class="text-danger">*</span>
                        </label>
                        <div dir="ltr">
                            <input
                                type="text"
                                class="form-control"
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
                        <template v-if="errors.name_e">
                            <ErrorMessage v-for="(errorMessage,index) in errors.name_e"
                                          :key="index">{{ errorMessage }}
                            </ErrorMessage>
                        </template>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="form-group">
                        <label class="my-1 mr-2" for="inlineFormCustomSelectPref">
                            {{ getCompanyKey('is_employee') }}
                            <span class="text-danger">*</span>
                        </label>
                        <select
                            class="custom-select my-1 mr-sm-2"
                            id="inlineFormCustomSelectPref"
                            data-create="3"
                            @keypress.enter.prevent="moveInput('input','create',4)"
                            v-model="$v.create.is_employee.$model"
                            :class="{
                                                'is-invalid':$v.create.is_employee.$error || errors.is_employee,
                                                'is-valid':!$v.create.is_employee.$invalid && !errors.is_employee
                                            }"
                        >
                            <option value="" selected>{{ $t('general.Choose') }}...</option>
                            <option value="1">{{ $t('general.Yes') }}</option>
                            <option value="0">{{ $t('general.No') }}</option>
                        </select>
                        <template v-if="errors.is_employee">
                            <ErrorMessage v-for="(errorMessage,index) in errors.is_employee"
                                          :key="index">{{ errorMessage }}
                            </ErrorMessage>
                        </template>
                    </div>
                </div>
            </div>
        </form>
    </b-modal>
<!--  /create   -->
</template>

<script>
import {maxLength, minLength, required} from "vuelidate/lib/validators";
import Switches from "vue-switches";
import Multiselect from "vue-multiselect";
import ErrorMessage from "../widgets/errorMessage";
import loader from "../loader";
import adminApi from "../../api/adminAxios";
import Swal from "sweetalert2";
import translation from "../../helper/translation-mixin";

export default {
    name: "salesManType",
    components: {
        Switches,
        Multiselect,
        ErrorMessage,
        loader,
    },
    mixins:[translation],
    updated() {
        $(function () {
            $(".englishInput").keypress(function (event) {
                var ew = event.which;
                if (ew == 32) return true;
                if (48 <= ew && ew <= 57) return true;
                if (65 <= ew && ew <= 90) return true;
                if (97 <= ew && ew <= 122) return true;
                return false;
            });
            $(".arabicInput").keypress(function (event) {
                var ew = event.which;
                if (ew == 32) return true;
                if (48 <= ew && ew <= 57) return false;
                if (65 <= ew && ew <= 90) return false;
                if (97 <= ew && ew <= 122) return false;
                return true;
            });
        });
    },
    data(){
        return {
            create: {
                name: '',
                name_e: '',
                is_employee: 1,
            },
            is_disabled: false,
            isLoader: false,
            errors: {},
        }
    },
    validations: {
        create: {
            name: {required, minLength: minLength(3), maxLength: maxLength(100)},
            name_e: {required, minLength: minLength(3), maxLength: maxLength(100)},
            is_employee: {required}
        }
    },
    methods: {
        moveInput(tag, c, index) {
            document.querySelector(`${tag}[data-${c}='${index}']`).focus()
        },
        /**
         *  reset Modal (create)
         */
        resetModalHidden() {
            this.create = {name: '', name_e: '', is_employee: 1};
            this.$nextTick(() => {
                this.$v.$reset()
            });
            this.errors = {};
        },
        /**
         *  hidden Modal (create)
         */
        resetModal() {
            this.create = {name: '', name_e: '', is_employee: 1};
            this.$nextTick(() => {
                this.$v.$reset()
            });
            this.errors = {};
        },
        /**
         *  create module
         */
        resetForm() {
            this.create = {name: '', name_e: '', is_employee: 1};
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
                adminApi.post(`/salesmen-types`, this.create)
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

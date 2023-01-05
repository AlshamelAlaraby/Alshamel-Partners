<script>
import adminApi from "../../api/adminAxios";
import Switches from "vue-switches";
import {
  required,
  minLength,
  maxLength,
  integer,
  numeric,
  email,
} from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import ErrorMessage from "../../components/widgets/errorMessage";
import loader from "../../components/loader";
import Multiselect from "vue-multiselect";
import translation from "../../helper/translation-mixin";

// require styles
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
/**
 * Advanced Table component
 */

export default {
  components: {
    Switches,
    ErrorMessage,
    loader,
    Multiselect,
  },
  mixins:[translation],
  data() {
    return {
      cities: [],
      countries: [],
      bank_accounts: [],
      isLoader: false,
      create: {
        name: "",
        name_e: "",
        phone: "",
        email: "",
        rp_code: null,
        contact_person: "",
        contact_phones: "",
        national_id: null,
        nationality_id: null,
        bank_account_id: null,
        country_id: null,
        city_id: null,
        whatsapp: "",
        passport_no: null,
        Note1: "",
        Note2: "",
        Note3: "",
        Note4: "",
      },
      errors: {},
      image: "",
      is_disabled: false,
    };
  },
  validations: {
    create: {
      name: { required, minLength: minLength(2), maxLength: maxLength(100) },
      name_e: { required, minLength: minLength(2), maxLength: maxLength(100) },
      phone: { required, maxLength: maxLength(100) },
      email: { required, maxLength: maxLength(100), email },
      rp_code: { required, integer, maxLength: maxLength(9) },
      nationality_id: { required, integer, maxLength: maxLength(40) },
      contact_person: { required, maxLength: maxLength(100) },
      contact_phones: { required, integer, maxLength: maxLength(100) },
      national_id: { required, integer },
      country_id: { required },
      city_id: { required },
      bank_account_id: { required },
      whatsapp: { numeric },
      passport_no: { integer },
    },
  },
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
        if (48 <= ew && ew <= 57) return true;
        if (65 <= ew && ew <= 90) return false;
        if (97 <= ew && ew <= 122) return false;
        return true;
      });
    });
  },
  methods: {
    resetModalHidden() {
      this.create = {
        name: "",
        name_e: "",
        phone: "",
        email: "",
        rp_code: null,
        nationality_id: null,
        contact_person: "",
        contact_phones: "",
        national_id: null,
        bank_account_id: null,
        country_id: null,
        city_id: null,
        whatsapp: "",
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
      this.errors = {};
      this.$bvModal.hide(`customer-create`);
    },
    /**
     *  hidden Modal (create)
     */
    async resetModal() {
      await this.getCategory();
      await this.getBankAcount();
      this.create = {
        name: "",
        name_e: "",
        phone: "",
        email: "",
        rp_code: null,
        nationality_id: null,
        contact_person: "",
        contact_phones: "",
        national_id: null,
        bank_account_id: null,
        country_id: null,
        city_id: null,
        whatsapp: "",
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
      this.errors = {};
    },
    /**
     *  create countrie
     */
    async resetForm() {
      await this.getCategory();
      await this.getBankAcount();
      this.create = {
        name: "",
        name_e: "",
        phone: "",
        email: "",
        rp_code: null,
        nationality_id: null,
        contact_person: "",
        contact_phones: "",
        national_id: null,
        bank_account_id: null,
        country_id: null,
        city_id: null,
        whatsapp: "",
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
      this.errors = {};
      this.is_disabled = false;
    },

    AddSubmit() {
      if (!this.create.name) {
        this.create.name = this.create.name_e;
      }
      if (!this.create.name_e) {
        this.create.name_e = this.create.name;
      }
      if (!this.create.description) {
        this.create.description = this.create.description_e;
      }
      if (!this.create.description_e) {
        this.create.description_e = this.create.description;
      }

      this.$v.create.$touch();

      if (this.$v.create.$invalid) {
        return;
      } else {
        this.isLoader = true;
        this.errors = {};

        adminApi
          .post(`/real-estate/customers`, this.create)
          .then((res) => {
            this.is_disabled = true;
            this.$emit("created");
            setTimeout(() => {
              Swal.fire({
                icon: "success",
                text: `${this.$t("general.Addedsuccessfully")}`,
                showConfirmButton: false,
                timer: 1500,
              });
            }, 500);
          })
          .catch((err) => {
            if (err.response.data) {
              this.errors = err.response.data.errors;
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
    },
    moveInput(tag, c, index) {
      document.querySelector(`${tag}[data-${c}='${index}']`).focus();
    },
    getCurrentYear() {
      return new Date().getFullYear();
    },
    async getCategory() {
      this.create.city_id = null;
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
      await adminApi
        .get(`/bank-accounts?`)
        .then((res) => {
          let l = res.data.data;
          l.unshift({ id: 0, name: "اضافة حساب بنكي", name_e: "Add Bank Account" });
          this.bank_accounts = l;
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
    async getCity(id = null) {
      if (id) {
        this.cities = [];
        this.create.city_id = null;
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
  },
};
</script>

<template>
  <!--  create   -->
  <b-modal
    id="customer-create"
    :title="getCompanyKey('customer_create_form')"
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
          type="button"
          :class="['font-weight-bold px-2', is_disabled ? 'mx-2' : '']"
        >
          {{ $t("general.AddNewRecord") }}
        </b-button>
        <template v-if="!is_disabled">
          <b-button
            variant="success"
            type="button"
            class="mx-1"
            v-if="!isLoader"
            @click.prevent="AddSubmit"
          >
            {{ $t("general.Add") }}
          </b-button>

          <b-button variant="success" class="mx-1" disabled v-else>
            <b-spinner small></b-spinner>
            <span class="sr-only">{{ $t("login.Loading") }}...</span>
          </b-button>
        </template>
        <!-- Emulate built in modal footer ok and cancel button actions -->

        <b-button variant="danger" type="button" @click.prevent="resetModalHidden">
          {{ $t("general.Cancel") }}
        </b-button>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="form-group position-relative">
            <label class="control-label">
              {{ getCompanyKey('country') }}
              <span class="text-danger">*</span>
            </label>
            <multiselect
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
              {{ getCompanyKey('city') }}
              <span class="text-danger">*</span>
            </label>
            <multiselect
              @input="getCity()"
              v-model="$v.create.city_id.$model"
              :options="cities.map((type) => type.id)"
              :custom-label="(opt) => cities.find((x) => x.id == opt).name"
            >
            </multiselect>
            <div v-if="$v.create.city_id.$error || errors.city_id" class="text-danger">
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
              {{ getCompanyKey('bank_account') }}
              <span class="text-danger">*</span>
            </label>
            <multiselect
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
              {{ getCompanyKey('customer_name_ar')}}
              <span class="text-danger">*</span>
            </label>
            <div dir="rtl">
              <input
                type="text"
                class="form-control arabicInput"
                data-create="1"
                @keypress.enter="moveInput('input', 'create', 2)"
                v-model="$v.create.name.$model"
                :class="{
                  'is-invalid': $v.create.name.$error || errors.name,
                  'is-valid': !$v.create.name.$invalid && !errors.name,
                }"
                id="field-1"
              />
            </div>
            <div v-if="!$v.create.name.minLength" class="invalid-feedback">
              {{ $t("general.Itmustbeatleast") }}
              {{ $v.create.name.$params.minLength.min }} {{ $t("general.letters") }}
            </div>
            <div v-if="!$v.create.name.maxLength" class="invalid-feedback">
              {{ $t("general.Itmustbeatmost") }}
              {{ $v.create.name.$params.maxLength.max }} {{ $t("general.letters") }}
            </div>
            <template v-if="errors.name">
              <ErrorMessage v-for="(errorMessage, index) in errors.name" :key="index">{{
                errorMessage
              }}</ErrorMessage>
            </template>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="field-2" class="control-label">
              {{ getCompanyKey('customer_name_en') }}
              <span class="text-danger">*</span>
            </label>
            <div dir="ltr">
              <input
                type="text"
                class="form-control englishInput"
                data-create="2"
                @keypress.enter="moveInput('input', 'create', 3)"
                v-model="$v.create.name_e.$model"
                :class="{
                  'is-invalid': $v.create.name_e.$error || errors.name_e,
                  'is-valid': !$v.create.name_e.$invalid && !errors.name_e,
                }"
                id="field-2"
              />
            </div>
            <div v-if="!$v.create.name_e.minLength" class="invalid-feedback">
              {{ $t("general.Itmustbeatleast") }}
              {{ $v.create.name_e.$params.minLength.min }} {{ $t("general.letters") }}
            </div>
            <div v-if="!$v.create.name_e.maxLength" class="invalid-feedback">
              {{ $t("general.Itmustbeatmost") }}
              {{ $v.create.name_e.$params.maxLength.max }} {{ $t("general.letters") }}
            </div>
            <template v-if="errors.name_e">
              <ErrorMessage v-for="(errorMessage, index) in errors.name_e" :key="index">{{
                errorMessage
              }}</ErrorMessage>
            </template>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label class="control-label">
              {{ getCompanyKey('customer_phone') }}
              <span class="text-danger">*</span>
            </label>
            <input
              type="text"
              class="form-control"
              data-create="9"
              @keypress.enter="moveInput('select', 'create', 10)"
              v-model="$v.create.phone.$model"
              :class="{
                'is-invalid': $v.create.phone.$error || errors.phone,
                'is-valid': !$v.create.phone.$invalid && !errors.phone,
              }"
            />
            <template v-if="errors.phone">
              <ErrorMessage v-for="(errorMessage, index) in errors.phone" :key="index">{{
                errorMessage
              }}</ErrorMessage>
            </template>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label class="control-label">
              {{ getCompanyKey('customer_email') }}
              <span class="text-danger">*</span>
            </label>
            <input
              type="text"
              class="form-control"
              data-create="9"
              @keypress.enter="moveInput('select', 'create', 10)"
              v-model="$v.create.email.$model"
              :class="{
                'is-invalid': $v.create.email.$error || errors.email,
                'is-valid': !$v.create.email.$invalid && !errors.email,
              }"
            />
            <template v-if="errors.email">
              <ErrorMessage v-for="(errorMessage, index) in errors.email" :key="index">{{
                errorMessage
              }}</ErrorMessage>
            </template>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label class="control-label">
              {{ getCompanyKey('customer_contact_person') }}
              <span class="text-danger">*</span>
            </label>
            <input
              type="text"
              class="form-control"
              data-create="9"
              @keypress.enter="moveInput('select', 'create', 10)"
              v-model="$v.create.contact_person.$model"
              :class="{
                'is-invalid': $v.create.contact_person.$error || errors.contact_person,
                'is-valid': !$v.create.contact_person.$invalid && !errors.contact_person,
              }"
            />
            <template v-if="errors.contact_person">
              <ErrorMessage
                v-for="(errorMessage, index) in errors.contact_person"
                :key="index"
                >{{ errorMessage }}</ErrorMessage
              >
            </template>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label class="control-label">
              {{ getCompanyKey('customer_code') }}
              <span class="text-danger">*</span>
            </label>
            <input
              type="number"
              class="form-control"
              data-create="9"
              @keypress.enter="moveInput('select', 'create', 10)"
              v-model="$v.create.rp_code.$model"
              :class="{
                'is-invalid': $v.create.rp_code.$error || errors.rp_code,
                'is-valid': !$v.create.rp_code.$invalid && !errors.rp_code,
              }"
            />
            <template v-if="errors.rp_code">
              <ErrorMessage
                v-for="(errorMessage, index) in errors.rp_code"
                :key="index"
                >{{ errorMessage }}</ErrorMessage
              >
            </template>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label class="control-label">
              {{ getCompanyKey('customer_national_id') }}
              <span class="text-danger">*</span>
            </label>
            <input
              type="number"
              class="form-control"
              data-create="9"
              step="0.1"
              @keypress.enter="moveInput('select', 'create', 10)"
              v-model="$v.create.national_id.$model"
              :class="{
                'is-invalid': $v.create.national_id.$error || errors.national_id,
                'is-valid': !$v.create.national_id.$invalid && !errors.national_id,
              }"
            />
            <template v-if="errors.national_id">
              <ErrorMessage
                v-for="(errorMessage, index) in errors.national_id"
                :key="index"
                >{{ errorMessage }}</ErrorMessage
              >
            </template>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label class="control-label">
              {{ getCompanyKey('customer_passport_number') }}
              <span class="text-danger">*</span>
            </label>
            <input
              type="number"
              class="form-control"
              data-create="9"
              step="0.1"
              @keypress.enter="moveInput('select', 'create', 10)"
              v-model="$v.create.passport_no.$model"
              :class="{
                'is-invalid': $v.create.passport_no.$error || errors.passport_no,
                'is-valid': !$v.create.passport_no.$invalid && !errors.passport_no,
              }"
            />
            <template v-if="errors.passport_no">
              <ErrorMessage
                v-for="(errorMessage, index) in errors.passport_no"
                :key="index"
                >{{ errorMessage }}</ErrorMessage
              >
            </template>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label class="control-label">
              {{ getCompanyKey('customer_contact_phones')}}
              <span class="text-danger">*</span>
            </label>
            <input
              type="number"
              class="form-control"
              data-create="9"
              step="0.1"
              @keypress.enter="moveInput('select', 'create', 10)"
              v-model="$v.create.contact_phones.$model"
              :class="{
                'is-invalid': $v.create.contact_phones.$error || errors.contact_phones,
                'is-valid': !$v.create.contact_phones.$invalid && !errors.contact_phones,
              }"
            />
            <template v-if="errors.contact_phones">
              <ErrorMessage
                v-for="(errorMessage, index) in errors.contact_phones"
                :key="index"
                >{{ errorMessage }}</ErrorMessage
              >
            </template>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label class="control-label">
              {{ getCompanyKey('customer_whatsapp') }}
              <span class="text-danger">*</span>
            </label>
            <input
              type="text"
              class="form-control"
              data-create="9"
              @keypress.enter="moveInput('select', 'create', 10)"
              v-model="$v.create.whatsapp.$model"
              :class="{
                'is-invalid': $v.create.whatsapp.$error || errors.whatsapp,
                'is-valid': !$v.create.whatsapp.$invalid && !errors.whatsapp,
              }"
            />
            <template v-if="errors.whatsapp">
              <ErrorMessage
                v-for="(errorMessage, index) in errors.whatsapp"
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
</template>
<style scope>
.dropdown-menu-custom-company.dropdown .dropdown-menu {
  padding: 5px 10px !important;
  overflow-y: scroll;
  height: 300px;
}
</style>

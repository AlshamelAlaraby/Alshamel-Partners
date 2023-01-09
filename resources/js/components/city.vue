<template>
  <!--  create   -->
  <b-modal
    id="city-create"
    :title="getCompanyKey('city_create_form')"
    title-class="font-18"
    size="lg"
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
            type="submit"
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
        <b-button @click.prevent="$bvModal.hide(`city-create`)" variant="danger" type="button">
          {{ $t("general.Cancel") }}
        </b-button>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group position-relative">
            <label class="control-label">
              {{ getCompanyKey('country') }}
              <span class="text-danger">*</span>
            </label>
            <multiselect
              @input="getGovernorate(create.country_id)"
              v-model="create.country_id"
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
        <div class="col-md-6">
          <div class="form-group position-relative">
            <label class="control-label">
              {{ getCompanyKey('governorate') }}
              <span class="text-danger">*</span>
            </label>
            <multiselect
              v-model="create.governorate_id"
              :options="governorates.map((type) => type.id)"
              :custom-label="(opt) => governorates.find((x) => x.id == opt).name"
            >
            </multiselect>
            <div
              v-if="$v.create.governorate_id.$error || errors.governorate_id"
              class="text-danger"
            >
              {{ $t("general.fieldIsRequired") }}
            </div>
            <template v-if="errors.governorate_id">
              <ErrorMessage
                v-for="(errorMessage, index) in errors.governorate_id"
                :key="index"
                >{{ errorMessage }}</ErrorMessage
              >
            </template>
          </div>
        </div>
        <div class="col-md-6 direction" dir="rtl">
          <div class="form-group">
            <label for="field-1" class="control-label">
              {{ getCompanyKey('city_name_ar') }}
              <span class="text-danger">*</span>
            </label>
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
            <div v-if="!$v.create.name.minLength" class="invalid-feedback">
              {{ $t("general.Itmustbeatleast") }}
              {{ $v.create.name.$params.minLength.min }}
              {{ $t("general.letters") }}
            </div>
            <div v-if="!$v.create.name.maxLength" class="invalid-feedback">
              {{ $t("general.Itmustbeatmost") }}
              {{ $v.create.name.$params.maxLength.max }}
              {{ $t("general.letters") }}
            </div>
            <template v-if="errors.name">
              <ErrorMessage v-for="(errorMessage, index) in errors.name" :key="index">{{
                errorMessage
              }}</ErrorMessage>
            </template>
          </div>
        </div>
        <div class="col-md-6 direction-ltr" dir="ltr">
          <div class="form-group">
            <label for="field-2" class="control-label">
              {{ getCompanyKey('city_name_en') }}
              <span class="text-danger">*</span>
            </label>
            <input
              type="text"
              class="form-control englishInput"
              data-create="2"
              @keypress.enter="moveInput('select', 'create', 5)"
              v-model="$v.create.name_e.$model"
              :class="{
                'is-invalid': $v.create.name_e.$error || errors.name_e,
                'is-valid': !$v.create.name_e.$invalid && !errors.name_e,
              }"
              id="field-2"
            />
            <div v-if="!$v.create.name_e.minLength" class="invalid-feedback">
              {{ $t("general.Itmustbeatleast") }}
              {{ $v.create.name_e.$params.minLength.min }}
              {{ $t("general.letters") }}
            </div>
            <div v-if="!$v.create.name_e.maxLength" class="invalid-feedback">
              {{ $t("general.Itmustbeatmost") }}
              {{ $v.create.name_e.$params.maxLength.max }}
              {{ $t("general.letters") }}
            </div>
            <template v-if="errors.name_e">
              <ErrorMessage v-for="(errorMessage, index) in errors.name_e" :key="index">{{
                errorMessage
              }}</ErrorMessage>
            </template>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="mr-2" for="inlineFormCustomSelectPref">
              {{ getCompanyKey('city_status') }}
              <span class="text-danger">*</span>
            </label>
            <select
              class="custom-select mr-sm-2"
              id="inlineFormCustomSelectPref"
              data-create="5"
              @keypress.enter.prevent="moveInput('input', 'create', 1)"
              v-model="$v.create.is_active.$model"
              :class="{
                'is-invalid': $v.create.is_active.$error || errors.is_active,
                'is-valid': !$v.create.is_active.$invalid && !errors.is_active,
              }"
            >
              <option value="" selected>{{ $t("general.Choose") }}...</option>
              <option value="1">{{ $t("general.Active") }}</option>
              <option value="0">{{ $t("general.Inactive") }}</option>
            </select>
            <template v-if="errors.is_active">
              <ErrorMessage
                v-for="(errorMessage, index) in errors.is_active"
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

<script>
import adminApi from "../api/adminAxios";
import { required, minLength, maxLength, integer, alpha } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import Switches from "vue-switches";
import ErrorMessage from "../components/widgets/errorMessage";
import loader from "../components/loader";
import Multiselect from "vue-multiselect";
import translation from "../helper/translation-mixin";
export default {
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
  validations: {
    create: {
      name: { required, minLength: minLength(2), maxLength: maxLength(100) },
      name_e: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(100),
      },
      country_id: { required },
      governorate_id: { required },
      is_active: { required, integer },
    },
  },

  data() {
    return {
      isLoader: false,
      is_disabled: false,
      errors: {},
      create: {
        name: "",
        name_e: "",
        country_id: null,
        governorate_id: null,
        is_active: 1,
      },
      countries: [],
      governorates: [],
    };
  },
  methods: {
    resetForm() {
      this.create = {
        name: "",
        name_e: "",
        country_id: null,
        governorate_id: null,
        is_active: 1,
      };
      this.is_disabled = false;

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    /**
     *  hidden Modal (create)
     */
    resetModal() {
      this.create = {
        name: "",
        name_e: "",
        country_id: null,
        governorate_id: null,
        is_active: 1,
      };
      this.is_disabled = false;
      this.getCategory();
      this.$nextTick(() => {
        this.$v.$reset();
      });
      this.errors = {};
    },
    async getCategory() {
      this.countries = [];
      this.governorates = [];
      this.create.governorate_id = null;
      this.create.city_id = null;
      await adminApi
        .get(`/countries?is_active=active`)
        .then((res) => {
          let l = res.data.data;
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
    async getGovernorate(id) {
      if(!id) return;
      this.governorates = [];
      this.create.city_id = null;
      this.create.governorate_id = null;
      await adminApi
        .get(`/governorates?country_id=${id}`)
        .then((res) => {
          let l = res.data.data;
          this.governorates = l;
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: `${this.$t("general.Error")}`,
            text: `${this.$t("general.Thereisanerrorinthesystem")}`,
          });
        });
    },
    /**
     *  create countrie
     */
    resetModalHidden() {
      this.create = {
        name: "",
        name_e: "",
        country_id: null,
        governorate_id: null,
        city_id: null,
        is_active: "active",
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
      this.errors = {};
    },

    AddSubmit() {
      if (this.create.name || this.create.name_e) {
        this.create.name = this.create.name ? this.create.name : this.create.name_e;
        this.create.name_e = this.create.name_e ? this.create.name_e : this.create.name;
      }
      this.$v.create.$touch();

      if (this.$v.create.$invalid) {
        return;
      } else {
        this.isLoader = true;
        this.errors = {};
        this.is_disabled = false;

        adminApi
          .post(`/cities`, this.create)
          .then((res) => {
            this.is_disabled = true;
            this.$emit('created');
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
    /**
     *  end  ckeckRow
     */
    moveInput(tag, c, index) {
      document.querySelector(`${tag}[data-${c}='${index}']`).focus();
    },
  },
};
</script>

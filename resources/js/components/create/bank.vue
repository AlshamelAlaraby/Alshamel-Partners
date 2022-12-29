<template>
  <div>
    <Country @created="getCountries" />
    <!--  create   -->
    <b-modal
      id="bank-create"
      :title="getCompanyKey('bank_create_form')"
      title-class="font-18"
      body-class="p-4 "
      size="lg"
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
          <!-- Emulate built in modal footer ok and cancel button actions -->
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
          <b-button
            variant="danger"
            type="button"
            @click.prevent="$bvModal.hide('bank-create')"
          >
            {{ $t("general.Cancel") }}
          </b-button>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group position-relative">
              <label class="control-label">
                {{ getCompanyKey('bank_country') }}
                <span class="text-danger">*</span>
              </label>
              <multiselect
                @input="showCountryModal"
                v-model="create.country_id"
                :options="countries.map((type) => type.id)"
                :custom-label="
                  (opt) =>
                    $i18n.locale == 'ar'
                      ? countries.find((x) => x.id == opt).name
                      : countries.find((x) => x.id == opt).name_e
                "
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
                  >{{ errorMessage }}
                </ErrorMessage>
              </template>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="field-1" class="control-label">
                {{ getCompanyKey('bank_name_ar')}}
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
                {{ $v.create.name.$params.minLength.min }}
                {{ $t("general.letters") }}
              </div>
              <div v-if="!$v.create.name.maxLength" class="invalid-feedback">
                {{ $t("general.Itmustbeatmost") }}
                {{ $v.create.name.$params.maxLength.max }}
                {{ $t("general.letters") }}
              </div>

              <template v-if="errors.name">
                <ErrorMessage v-for="(errorMessage, index) in errors.name" :key="index"
                  >{{ errorMessage }}
                </ErrorMessage>
              </template>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="field-2" class="control-label">
                {{ getCompanyKey('bank_name_en') }}
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
                {{ $v.create.name_e.$params.minLength.min }}
                {{ $t("general.letters") }}
              </div>
              <div v-if="!$v.create.name_e.maxLength" class="invalid-feedback">
                {{ $t("general.Itmustbeatmost") }}
                {{ $v.create.name_e.$params.maxLength.max }}
                {{ $t("general.letters") }}
              </div>
              <template v-if="errors.name_e">
                <ErrorMessage v-for="(errorMessage, index) in errors.name_e" :key="index"
                  >{{ errorMessage }}
                </ErrorMessage>
              </template>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="field-15" class="control-label">
                {{ getCompanyKey('bank_swiftcode') }}
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                class="form-control"
                data-create="1"
                @keypress.enter="moveInput('input', 'create', 2)"
                v-model="$v.create.swift_code.$model"
                :class="{
                  'is-invalid': $v.create.swift_code.$error || errors.swift_code,
                  'is-valid': !$v.create.swift_code.$invalid && !errors.swift_code,
                }"
                id="field-15"
              />
              <template v-if="errors.swift_code">
                <ErrorMessage
                  v-for="(errorMessage, index) in errors.swift_code"
                  :key="index"
                  >{{ errorMessage }}
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
import { maxLength, minLength, required } from "vuelidate/lib/validators";
import Switches from "vue-switches";
import Multiselect from "vue-multiselect";
import ErrorMessage from "../widgets/errorMessage";
import loader from "../loader";
import adminApi from "../../api/adminAxios";
import Swal from "sweetalert2";
import Country from "../../components/country.vue";
import translation from "../../helper/translation-mixin";

export default {
  name: "bank",
  components: {
    Switches,
    Multiselect,
    ErrorMessage,
    loader,
    Country,
  },
  mixins: [translation],

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
  data() {
    return {
      isLoader: false,
      create: {
        name: "",
        name_e: "",
        country_id: null,
        swift_code: "",
      },
      errors: {},
      is_disabled: false,
      countries: [],
    };
  },
  validations: {
    create: {
      name: { required, minLength: minLength(2), maxLength: maxLength(100) },
      name_e: { required, minLength: minLength(2), maxLength: maxLength(100) },
      swift_code: { required },
      country_id: { required },
    },
  },
  methods: {
    showCountryModal() {
      if (this.create.country_id == 0) {
        this.$bvModal.show("country-create");
        this.create.country_id = null;
      }
    },
    resetModalHidden() {
      this.create = {
        name: "",
        name_e: "",
        country_id: null,
        swift_code: "",
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
      this.errors = {};
    },
    /**
     *  hidden Modal (create)
     */
    async resetModal() {
      await this.getCountries();
      this.create = {
        name: "",
        name_e: "",
        country_id: null,
        swift_code: "",
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
      await this.getCountries();
      this.create = {
        name: "",
        name_e: "",
        country_id: null,
        swift_code: "",
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
      this.is_disabled = false;
      this.errors = {};
    },

    AddSubmit() {
      if (!this.create.name) {
        this.create.name = this.create.name_e;
      }
      if (!this.create.name_e) {
        this.create.name_e = this.create.name;
      }
      this.$v.create.$touch();

      if (this.$v.create.$invalid) {
        return;
      } else {
        this.isLoader = true;
        this.errors = {};
        this.is_disabled = false;

        adminApi
          .post(`/banks`, this.create)
          .then((res) => {
            this.$emit("created");
            this.is_disabled = true;

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
    async getCountries() {
      this.isLoader = true;
      await adminApi
        .get(`/countries`)
        .then((res) => {
          let l = res.data.data;
          l.unshift({ id: 0, name: "اضف دولة", name_e: "Add Country" });
          this.countries = l;
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

<style scoped></style>

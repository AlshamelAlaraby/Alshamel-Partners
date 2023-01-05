<script>
import translation from "../../helper/translation-mixin";

import adminApi from "../../api/adminAxios";
import Switches from "vue-switches";
import {
  required,
  minLength,
  maxLength,
  integer,
  numeric,
} from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import ErrorMessage from "../../components/widgets/errorMessage";
import loader from "../../components/loader";
import Multiselect from "vue-multiselect";
// require styles
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
/**
 * Advanced Table component
 */

export default {
  mixins: [translation],

  components: {
    Switches,
    ErrorMessage,
    loader,
    Multiselect,
  },
  data() {
    return {
      editorOption: {
        // Some Quill options...
        theme: "snow",
        modules: {
          toolbar: [
            [
              {
                font: [],
              },
              {
                size: [],
              },
            ],
            ["bold", "italic", "underline", "strike"],
            [
              {
                color: [],
              },
              {
                background: [],
              },
            ],
            [
              {
                script: "super",
              },
              {
                script: "sub",
              },
            ],
            [
              {
                header: [false, 1, 2, 3, 4, 5, 6],
              },
              "blockquote",
              "code-block",
            ],
            [
              {
                list: "ordered",
              },
              {
                list: "bullet",
              },
              {
                indent: "-1",
              },
              {
                indent: "+1",
              },
            ],
            [
              "direction",
              {
                align: [],
              },
            ],
            ["link", "image", "video"],
            ["clean"],
          ],
        },
      },
      builds: [],
      cities: [],
      countries: [],
      avenues: [],
      modules: [],
      isLoader: false,
      create: {
        name: "",
        name_e: "",
        description: "",
        description_e: "",
        land_area: 0,
        building_area: 0,
        construction_year: "",
        module_id: null,
        country_id: null,
        city_id: null,
        avenue_id: null,
        lng: 0,
        lat: 0,
      },
      errors: {},
      isCheckAll: false,
      checkAll: [],
      current_page: 1,
      image: "",
      is_disabled: false,
    };
  },
  validations: {
    create: {
      name: { required, minLength: minLength(2), maxLength: maxLength(100) },
      name_e: { required, minLength: minLength(2), maxLength: maxLength(100) },
      description: { maxLength: maxLength(1000) },
      description_e: { maxLength: maxLength(1000) },
      land_area: { numeric, maxLength: maxLength(9) },
      building_area: { numeric, maxLength: maxLength(9) },
      construction_year: { integer, minLength: minLength(4), maxLength: maxLength(4) },
      module_id: {},
      country_id: {},
      city_id: {},
      avenue_id: {},
      lng: { numeric },
      lat: { numeric },
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
            getCurrentYear() {
            return new Date().getFullYear();
        },
    resetModalHidden() {
      this.create = {
        name: "",
        name_e: "",
        description: "",
        description_e: "",
        land_area: 0,
        building_area: 0,
        construction_year: "",
        module_id: null,
        country_id: null,
        city_id: null,
        avenue_id: null,
        lng: 0,
        lat: 0,
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
      this.errors = {};
      this.$bvModal.hide(`building-create`);
    },
    async resetModal() {
      await this.getCategory();
      this.create = {
        name: "",
        name_e: "",
        description: "",
        description_e: "",
        land_area: 0,
        building_area: 0,
        construction_year: "",
        module_id: null,
        country_id: null,
        city_id: null,
        avenue_id: null,
        lng: 0,
        lat: 0,
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
      this.create = {
        name: "",
        name_e: "",
        description: "",
        description_e: "",
        land_area: 0,
        building_area: 0,
        construction_year: "",
        module_id: null,
        country_id: null,
        city_id: null,
        avenue_id: null,
        lng: 0,
        lat: 0,
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
          .post(`/real-estate/buildings`, this.create)
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
    async getCategory() {
      this.create.city_id = null;
      this.create.avenue_id = null;
      this.cities = [];
      this.avenues = [];
      await adminApi
        .get(`/countries?is_active=active`)
        .then((res) => {
          this.countries = res.data.data;
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: `${this.$t("general.Error")}`,
            text: `${this.$t("general.Thereisanerrorinthesystem")}`,
          });
        });
    },
    async getCity(id = null) {
      if ( this.create.city_id == 0) {
        this.$bvModal.show("city-create");
        this.create.city_id = null;
      }
      if (id) {
        this.create.city_id = null;
        this.create.avenue_id = null;
        this.cities = [];
        this.avenues = [];
        await adminApi
          .get(`/cities?country_id=${id}`)
          .then((res) => {
            this.cities = res.data.data;
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
    async getAvenue(id = null, id2 = null) {
      if ( this.create.avenue_id == 0) {
        this.$bvModal.show("avenue-create");
        this.create.avenue_id = null;
      }
      if (id) {
        this.create.avenue_id = null;
        this.avenues = [];
        await adminApi
          .get(`/avenues?country_id=${id}&city_id=${id2}`)
          .then((res) => {
            this.avenues = res.data.data;
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
    id="building-create"
    :title="getCompanyKey('building_create_form')"
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
        <div class="col-md-3">
          <div class="form-group position-relative">
            <label class="control-label">
              {{ getCompanyKey("module") }}
              <span class="text-danger">*</span>
            </label>
            <multiselect
              v-model="$v.create.module_id.$model"
              :options="modules.map((type) => type.id)"
              :custom-label="(opt) => modules.find((x) => x.id == opt).name"
            >
            </multiselect>
            <div
              v-if="$v.create.module_id.$error || errors.module_id"
              class="text-danger"
            >
              {{ $t("general.fieldIsRequired") }}
            </div>
            <template v-if="errors.module_id">
              <ErrorMessage
                v-for="(errorMessage, index) in errors.module_id"
                :key="index"
                >{{ errorMessage }}</ErrorMessage
              >
            </template>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group position-relative">
            <label class="control-label">
              {{ getCompanyKey("country") }}
              <span class="text-danger">*</span>
            </label>
            <multiselect
              v-model="$v.create.country_id.$model"
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
                >{{ errorMessage }}</ErrorMessage
              >
            </template>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group position-relative">
            <label class="control-label">
              {{ getCompanyKey("city") }}
              <span class="text-danger">*</span>
            </label>
            <multiselect
              @input="getCity()"
              v-model="$v.create.city_id.$model"
              :options="cities.map((type) => type.id)"
              :custom-label="
                (opt) =>
                  $i18n.locale == 'ar'
                    ? cities.find((x) => x.id == opt).name
                    : cities.find((x) => x.id == opt).name_e
              "
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
        <div class="col-md-3">
          <div class="form-group position-relative">
            <label class="control-label">
              {{ getCompanyKey("avenue") }}
              <span class="text-danger">*</span>
            </label>
            <multiselect
              @input="getAvenue()"
              v-model="$v.create.avenue_id.$model"
              :options="avenues.map((type) => type.id)"
              :custom-label="(opt) => avenues.find((x) => x.id == opt).name"
            >
            </multiselect>
            <div
              v-if="$v.create.avenue_id.$error || errors.avenue_id"
              class="text-danger"
            >
              {{ $t("general.fieldIsRequired") }}
            </div>
            <template v-if="errors.city_id">
              <ErrorMessage
                v-for="(errorMessage, index) in errors.avenue_id"
                :key="index"
                >{{ errorMessage }}</ErrorMessage
              >
            </template>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label class="control-label">
              {{ getCompanyKey("building_area") }}
              <span class="text-danger">*</span>
            </label>
            <input
              type="number"
              class="form-control"
              data-create="9"
              step="0.1"
              @keypress.enter="moveInput('select', 'create', 10)"
              v-model="$v.create.building_area.$model"
              :class="{
                'is-invalid': $v.create.building_area.$error || errors.building_area,
                'is-valid': !$v.create.building_area.$invalid && !errors.building_area,
              }"
            />
            <template v-if="errors.building_area">
              <ErrorMessage
                v-for="(errorMessage, index) in errors.building_area"
                :key="index"
                >{{ errorMessage }}</ErrorMessage
              >
            </template>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label class="control-label">
              {{ getCompanyKey("building_land_area") }}
              <span class="text-danger">*</span>
            </label>
            <input
              type="number"
              class="form-control"
              data-create="9"
              step="0.1"
              @keypress.enter="moveInput('select', 'create', 10)"
              v-model="$v.create.land_area.$model"
              :class="{
                'is-invalid': $v.create.land_area.$error || errors.land_area,
                'is-valid': !$v.create.land_area.$invalid && !errors.land_area,
              }"
            />
            <template v-if="errors.land_area">
              <ErrorMessage
                v-for="(errorMessage, index) in errors.land_area"
                :key="index"
                >{{ errorMessage }}</ErrorMessage
              >
            </template>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label class="control-label">
              {{ getCompanyKey("building_longitude") }}
              <span class="text-danger">*</span>
            </label>
            <input
              type="number"
              class="form-control"
              data-create="9"
              step="0.1"
              @keypress.enter="moveInput('select', 'create', 10)"
              v-model="$v.create.lng.$model"
              :class="{
                'is-invalid': $v.create.lng.$error || errors.lng,
                'is-valid': !$v.create.lng.$invalid && !errors.lng,
              }"
            />
            <template v-if="errors.lng">
              <ErrorMessage v-for="(errorMessage, index) in errors.lng" :key="index">{{
                errorMessage
              }}</ErrorMessage>
            </template>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label class="control-label">
              {{ getCompanyKey("building_latitude") }}
              <span class="text-danger">*</span>
            </label>
            <input
              type="number"
              class="form-control"
              data-create="9"
              step="0.1"
              @keypress.enter="moveInput('select', 'create', 10)"
              v-model="$v.create.lat.$model"
              :class="{
                'is-invalid': $v.create.lat.$error || errors.lat,
                'is-valid': !$v.create.lat.$invalid && !errors.lat,
              }"
            />
            <template v-if="errors.lat">
              <ErrorMessage v-for="(errorMessage, index) in errors.lat" :key="index">{{
                errorMessage
              }}</ErrorMessage>
            </template>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="field-1" class="control-label">
              {{ getCompanyKey("building_name_ar") }}
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
        <div class="col-md-4">
          <div class="form-group">
            <label for="field-2" class="control-label">
              {{ getCompanyKey("building_name_en") }}
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
        <div class="col-md-4">
          <div class="form-group">
            <label class="mr-2" for="inlineFormCustomSelectPref">
              {{ $t("general.construction_year") }}
              <span class="text-danger">*</span>
            </label>
            <select
              class="custom-select mr-sm-2"
              id="inlineFormCustomSelectPref"
              data-create="6"
              @keypress.enter.prevent="moveInput('input', 'create', 1)"
              v-model="$v.create.construction_year.$model"
              :class="{
                'is-invalid':
                  $v.create.construction_year.$error || errors.construction_year,
                'is-valid':
                  !$v.create.construction_year.$invalid && !errors.construction_year,
              }"
            >
              <option value="" selected>{{ $t("general.Choose") }}...</option>
              <option v-for="year in getCurrentYear()" v-if="year >= 2000" :value="year">
                {{ year }}
              </option>
            </select>
            <template v-if="errors.construction_year">
              <ErrorMessage
                v-for="(errorMessage, index) in errors.construction_year"
                :key="index"
                >{{ errorMessage }}</ErrorMessage
              >
            </template>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="mr-2" for="inlineFormCustomSelectPref">
              {{ getCompanyKey("building_description_ar") }}
              <span class="text-danger">*</span>
            </label>
            <quill-editor
              v-model="$v.create.description.$model"
              style="min-height: 150px; background-color: #fff"
              :options="editorOption"
            />
            <template v-if="errors.description">
              <ErrorMessage
                v-for="(errorMessage, index) in errors.description"
                :key="index"
                >{{ errorMessage }}</ErrorMessage
              >
            </template>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="mr-2" for="inlineFormCustomSelectPref">
              {{ getCompanyKey("building_description_en") }}
              <span class="text-danger">*</span>
            </label>
            <quill-editor
              v-model="$v.create.description_e.$model"
              style="min-height: 150px; background-color: #fff"
              :options="editorOption"
            />
            <template v-if="errors.description_e">
              <ErrorMessage
                v-for="(errorMessage, index) in errors.description_e"
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

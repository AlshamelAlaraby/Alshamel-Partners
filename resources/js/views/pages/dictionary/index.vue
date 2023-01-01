<script>
import Layout from "../../layouts/main";
import PageHeader from "../../../components/Page-header";
import adminApi from "../../../api/adminAxios";
import loader from "../../../components/loader";
import translation from "../../../helper/translation-mixin";
import Swal from "sweetalert2";

/**
 * Advanced Table component
 */
export default {
  page: {
    title: "Dictionary",
    meta: [{ name: "description", content: "Dictionary" }],
  },
  mixins: [translation],
  components: {
    Layout,
    PageHeader,
    loader,
  },
  data() {
    return {
      isLoader: false,
      currentKey: "",
      newText: "",
      company_id: null,
      search: "",
    };
  },
  mounted() {
    this.company_id = this.$store.getters["auth/company_id"];
  },
  methods: {
    cancelUpdate() {
      this.currentKey = "";
      this.newText = "";
    },
    setCurrentKey(propertyName) {
      this.currentKey = propertyName;
    },
    filteringResult() {
      let filterResult = {};
      for (let key in this.defaultsKeys) {
        if (key.includes(this.search)) {
          filterResult[key] = this.defaultsKeys[key];
        }
      }
      this.filterResult = filterResult;
    },
    updateChange() {
      this.isLoader = true;
      let currentKey = this.currentKey;
      let currentKeyInfo = this.getKeyInfo(currentKey);
      let currentLang = this.$i18n.locale;
      let formValue = {
        company_id: this.company_id,
        get_translation: false,
        translations: {},
      };
      formValue.translations[currentKey] = {
        default_en: "",
        default_ar: "",
        new_ar:
          currentLang == "ar"
            ? this.newText
            : currentKeyInfo && currentKeyInfo.new_ar
            ? currentKeyInfo.new_ar
            : this.newText,
        new_en:
          currentLang == "en"
            ? this.newText
            : currentKeyInfo && currentKeyInfo.new_en
            ? currentKeyInfo.new_en
            : this.newText,
      };
      adminApi
        .post("/translation-update", formValue)
        .then(() => {
          this.newText = "";
          this.currentKey = "";
          this.getCompanyKeys();
          setTimeout(() => {
            Swal.fire({
              icon: "success",
              text: `${this.$t("general.Editsuccessfully")}`,
              showConfirmButton: false,
              timer: 1500,
            });
          }, 500);
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
    reset(propertyName) {
      let keyInfo = this.getKeyInfo(propertyName);
      if (!keyInfo) {
        Swal.fire({
          icon: "error",
          text: `${this.$t("general.CompanyNotHaveTranslation")}`,
          showConfirmButton: false,
        });
      } else {
      this.isLoader = true;
        adminApi
          .post("/translation-delete", {
            get_translation: false,
            ids: [keyInfo.id],
          })
          .then(() => {
            this.getCompanyKeys();
            setTimeout(() => {
              Swal.fire({
                icon: "success",
                text: `${this.$t("general.Editsuccessfully")}`,
                showConfirmButton: false,
                timer: 1500,
              });
            }, 500);
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
      }
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <!-- start search -->
            <div class="row justify-content-between align-items-center mb-2">
              <h4 class="header-title mb-4">{{ $t("general.dictionary") }}</h4>
              <div class="col-xs-10 col-md-9 col-lg-7" style="font-weight: 500">
                <span
                  :class="[
                    'search-custom position-absolute',
                    $i18n.locale == 'ar' ? 'search-custom-ar' : '',
                  ]"
                >
                  <i class="fe-search"></i>
                </span>
                <input
                  class="form-control"
                  style="display: block; width: 93%; padding-top: 3px"
                  type="text"
                  v-model.trim="search"
                  @input="filteringResult"
                  :placeholder="`${$t('general.search_source_text')}`"
                />
              </div>
            </div>
            <div class="table-responsive mb-3 custom-table-theme position-relative">
              <loader size="large" v-if="isLoader" />
              <table class="table table-borderless table-hover table-centered m-0">
                <thead>
                  <tr>
                    <th>
                      <div class="d-flex justify-content-center">
                        <span>{{ $t("general.source_text") }}</span>
                      </div>
                    </th>
                    <th>
                      <div class="d-flex justify-content-center">
                        <span>{{ $t("general.translation") }}</span>
                      </div>
                    </th>
                    <th>
                      {{ $t("general.Action") }}
                    </th>
                  </tr>
                </thead>
                <tbody v-if="Object.keys(filterResult).length > 0">
                  <tr
                    v-for="(value, propertyName) in filterResult"
                    :key="propertyName"
                    @click="setCurrentKey(propertyName)"
                  >
                    <td>
                      <h5 class="m-0 font-weight-normal">{{ propertyName }}</h5>
                    </td>
                    <td>
                      <h5 class="m-0 font-weight-normal">
                        {{ getCompanyKey(propertyName) }}
                      </h5>
                    </td>
                    <td>
                      <div class="btn-group">
                         <a
                            class="dropdown-item text-black"
                            href="#"
                            @click.prevent="reset(propertyName)"
                          >
                            <div
                              class="d-flex justify-content-between align-items-center text-black"
                            >
                              <span>{{ $t("general.reset") }}</span>
                              <i class="mx-2 fas fa-times text-danger"></i>
                            </div>
                          </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr>
                    <th class="text-center" colspan="2">
                      {{ $t("general.notDataFound") }}
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="px-3">
              <div class="mb-3">
                <span>{{ $t("general.source_text") }}</span> :
                <span>{{ currentKey }}</span>
              </div>
              <div class="mb-1">
                {{ $t("general.translate_to") + " " + $t("general.lang") }}
              </div>
              <div class="mb-3">
                <textarea v-model="newText" rows="4" class="form-control"> </textarea>
              </div>
              <template v-if="!isLoader">
                <button
                  @click="updateChange"
                  :disabled="!currentKey || !newText"
                  class="btn update-changes mb-3"
                >
                  {{ $t("general.update_changes") }}
                </button>
                <button
                  @click="cancelUpdate"
                  :disabled="!currentKey || !newText"
                  class="btn btn-danger mb-3"
                >
                  {{ $t("general.cancel") }}
                </button>
              </template>
              <b-button variant="success" class="mx-1" disabled v-else>
                <b-spinner small></b-spinner>
                <span class="sr-only">{{ $t("login.Loading") }}...</span>
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<style scoped>
.update-changes {
  background-color: #3bafda;
  color: #fff;
}
thead {
  background-color: #269dc9;
  color: #fff;
}
table tbody {
  display: block;
  max-height: 300px;
  overflow-y: scroll;
}
table thead,
table tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}
table tr:hover {
  cursor: pointer;
}
</style>

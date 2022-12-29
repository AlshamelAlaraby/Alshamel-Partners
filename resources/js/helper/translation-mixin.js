import adminApi from "../api/adminAxios";
export default {
    data() {
        return {
            defaultsKeys: [],
            companyKeys: [],
        }
    },
    mounted() {
    this.company_id = this.$store.getters["auth/company_id"];
        this.getDefaultKeys();
        this.getCompanyKeys();
    },
    methods: {
        getDefaultKeys() {
            this.isLoader = true;
            adminApi
                .post(`/translation-update`, {
                    company_id: 0,
                    translations: {},
                    get_translation: true,
                })
                .then((res) => {
                    this.defaultsKeys = res.data.translations;
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
        getCompanyKeys() {
            this.isLoader = true;
            adminApi
                .post(`/translation-update`, {
                    company_id: this.company_id,
                    translations: {},
                    get_translation: true,
                })
                .then((res) => {
                    this.companyKeys = res.data.translations;
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
        getCompanyKey(key) {
            let returnedKey = null;
            for (let _key in this.companyKeys) {
              if (_key == key) {
                returnedKey =
                  this.$i18n.locale == "ar"
                    ? this.companyKeys[_key].new_ar
                    : this.companyKeys[_key].new_en;
                return returnedKey;
              }
            }
            for (let _key in this.defaultsKeys) {
              if (_key == key) {
                returnedKey =
                  this.$i18n.locale == "ar"
                    ? this.defaultsKeys[_key].default_ar
                    : this.defaultsKeys[_key].default_en;
                return returnedKey;
              }
            }
          },
    },
}
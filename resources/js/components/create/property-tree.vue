<script>
import adminApi from "../../api/adminAxios";
import Switches from "vue-switches";
import { required, minLength, maxLength, integer } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import ErrorMessage from "../../components/widgets/errorMessage";
import { dynamicSortString } from "../../helper/tableSort";
import Multiselect from "vue-multiselect";
import translation from "../../helper/translation-mixin";

/**
 * Advanced Table component
 */
export default {
  mixins: [translation],
  components: {
    Switches,
    ErrorMessage,
    Multiselect
  },
  updated() {
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
  },
  data() {
    return {
      rootNodes: [],
      childNodes: [],
      isLoader: false,
      create: {
        name: "",
        name_e: "",
        parent_id: null,
        required: "active",
      },
      errors: {},
      is_disabled: false,
    };
  },
  validations: {
    create: {
      name: { required, minLength: minLength(3), maxLength: maxLength(100) },
      name_e: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(100),
      },
      required: { required },
    },
  },
  methods: {
    resetModalHidden() {
      this.create = { name: "", name_e: "", parent_id: null, required: "active" };
      this.$nextTick(() => {
        this.$v.$reset();
      });
      this.errors = {};
      this.rootNodes = [];
    },
    /**
     *  hidden Modal (create)
     */
    async resetModal() {
      await this.getRootNodes();
      this.create = { name: "", name_e: "", parent_id: null, required: "active" };
      this.is_disabled = false;
      this.$nextTick(() => {
        this.$v.$reset();
      });
      this.errors = {};
    },
    /**
     *  create module
     */
    resetForm() {
      this.create = { name: "", name_e: "", parent_id: null, required: "active" };
      this.is_disabled = false;
      this.$nextTick(() => {
        this.$v.$reset();
      });
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
          .post(`/tree-properties`, {
            ...this.create,
            required: this.create.required == "active" ? 1 : 0,
          })
          .then((res) => {
            this.$emit("created");
            this.is_disabled = true;
            this.getRootNodes();
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
    async getRootNodes() {
      await adminApi
        .get(`/tree-properties/root-nodes`)
        .then((res) => {
          console.log(this.rootNodes);
          this.rootNodes = res.data;
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: `${this.$t("general.Error")}`,
            text: `${this.$t("general.Thereisanerrorinthesystem")}`,
          });
        });
    },
    getFirstLevelChildNodes(node) {
      if (!node.collapsed) {
        adminApi
          .get(`/tree-properties/child-nodes/${node.id}`)
          .then((res) => {
            this.rootNodes = this.getUpdatedRootNodes(node, res.data);
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: `${this.$t("general.Error")}`,
              text: `${this.$t("general.Thereisanerrorinthesystem")}`,
            });
          });
      } else {
        this.rootNodes = this.getUpdatedRootNodes(node);
      }
    },
    getSecondLevelChildNodes(rootNode, parentNode) {
      if (!parentNode.collapsed) {
        adminApi
          .get(`/tree-properties/child-nodes/${parentNode.id}`)
          .then((res) => {
            this.rootNodes = this.getRootNodesAfterCollapse(
              rootNode,
              parentNode,
              res.data
            );
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: `${this.$t("general.Error")}`,
              text: `${this.$t("general.Thereisanerrorinthesystem")}`,
            });
          });
      } else {
        this.rootNodes = this.getRootNodesAfterCollapse(rootNode, parentNode);
      }
    },
    getThirdLevelChildNodes(rootNode, parentNode, secondParentNode) {
      if (!secondParentNode.collapsed) {
        adminApi
          .get(`/tree-properties/child-nodes/${secondParentNode.id}`)
          .then((res) => {
            this.rootNodes = this.getRootNodesAfter2ndCollapse(
              rootNode,
              parentNode,
              secondParentNode,
              res.data
            );
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: `${this.$t("general.Error")}`,
              text: `${this.$t("general.Thereisanerrorinthesystem")}`,
            });
          });
      } else {
        this.rootNodes = this.getRootNodesAfter2ndCollapse(
          rootNode,
          parentNode,
          secondParentNode
        );
      }
    },
    getFourthLevelChildNodes(rootNode, parentNode, secondParentNode, thirdParentNode) {
      if (!thirdParentNode.collapsed) {
        adminApi
          .get(`/tree-properties/child-nodes/${thirdParentNode.id}`)
          .then((res) => {
            this.rootNodes = this.getRootNodesAfter3rdCollapse(
              rootNode,
              parentNode,
              secondParentNode,
              thirdParentNode,
              res.data
            );
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: `${this.$t("general.Error")}`,
              text: `${this.$t("general.Thereisanerrorinthesystem")}`,
            });
          });
      } else {
        this.rootNodes = this.getRootNodesAfter3rdCollapse(
          rootNode,
          parentNode,
          secondParentNode,
          thirdParentNode
        );
      }
    },
    setCreateParentId(node) {
      if (this.create.parent_id != node.id) {
        this.create.parent_id = node.id;
      } else {
        this.create.parent_id = null;
      }
    },
    getUpdatedRootNodes(parentNode, children) {
      let rootNodes = [...this.rootNodes];
      rootNodes.forEach((node, index) => {
        if (node.id == parentNode.id) {
          if (parentNode.collapsed) {
            rootNodes[index].children = [];
            rootNodes[index].collapsed = false;
          } else {
            rootNodes[index].children = children;
            rootNodes[index].collapsed = true;
          }
          return;
        }
      });
      return rootNodes;
    },
    getRootNodesAfterCollapse(parentNode, secondParentNode, children) {
      let rootNodes = [...this.rootNodes];
      rootNodes.forEach((_parentNode, parentIndex) => {
        if (_parentNode.id == parentNode.id) {
          if (_parentNode.children && _parentNode.children.length) {
            _parentNode.children.forEach((child, index) => {
              if (child.id == secondParentNode.id) {
                if (secondParentNode.collapsed) {
                  rootNodes[parentIndex].children[index].children = [];
                  rootNodes[parentIndex].children[index].collapsed = false;
                } else {
                  rootNodes[parentIndex].children[index].children = children;
                  rootNodes[parentIndex].children[index].collapsed = true;
                }
                return;
              }
            });
            return;
          }
        }
      });
      return rootNodes;
    },
    getRootNodesAfter2ndCollapse(
      parentNode,
      secondParentNode,
      thirdParentNode,
      children
    ) {
      let rootNodes = [...this.rootNodes];
      rootNodes.forEach((_parentNode, parentIndex) => {
        if (_parentNode.id == parentNode.id) {
          if (_parentNode.children && _parentNode.children.length) {
            _parentNode.children.forEach((child, index) => {
              if (child.id == secondParentNode.id) {
                child.children.forEach((_child, _index) => {
                  if (thirdParentNode.id == _child.id) {
                    if (thirdParentNode.collapsed) {
                      rootNodes[index].children[parentIndex].children[
                        _index
                      ].children = [];
                      rootNodes[index].children[parentIndex].children[
                        _index
                      ].collapsed = false;
                    } else {
                      rootNodes[index].children[parentIndex].children[
                        _index
                      ].children = children;
                      rootNodes[index].children[parentIndex].children[
                        _index
                      ].collapsed = true;
                    }
                    return;
                  }
                });
              }
            });
            return;
          }
        }
      });
      return rootNodes;
    },
    getRootNodesAfter3rdCollapse(
      parentNode,
      secondParentNode,
      thirdParentNode,
      fourthParentNode,
      children
    ) {
      let rootNodes = [...this.rootNodes];
      rootNodes.forEach((_parentNode, parentIndex) => {
        if (_parentNode.id == parentNode.id) {
          if (_parentNode.children && _parentNode.children.length) {
            _parentNode.children.forEach((child, index) => {
              if (child.id == secondParentNode.id) {
                child.children.forEach((_child, _index) => {
                  if (thirdParentNode.id == _child.id) {
                    _child.children.forEach((__child, __index) => {
                      if (__child.id == fourthParentNode.id) {
                        if (fourthParentNode.collapsed) {
                          rootNodes[index].children[parentIndex].children[
                            _index
                          ].children[__index].children = [];
                          rootNodes[index].children[parentIndex].children[
                            _index
                          ].children[__index].collapsed = false;
                        } else {
                          rootNodes[index].children[parentIndex].children[
                            _index
                          ].children[__index].children = children;
                          rootNodes[index].children[parentIndex].children[
                            _index
                          ].children[__index].collapsed = true;
                        }
                        return;
                      }
                    });
                  }
                });
              }
            });
            return;
          }
        }
      });
      return rootNodes;
    },
    /**
     *  start  dynamicSortString
     */
    sortString(value) {
      return dynamicSortString(value);
    },
    checkRow(id) {
      if (!this.checkAll.includes(id)) {
        this.checkAll.push(id);
      } else {
        let index = this.checkAll.indexOf(id);
        this.checkAll.splice(index, 1);
      }
    },
  },
};
</script>

<template>
  <!--  create   -->
  <b-modal
    id="property-create"
    :title="getCompanyKey('property_create_form')"
    title-class="font-18"
    body-class="p-4 "
    :hide-footer="true"
    size="lg"
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
        <b-button @click.prevent="$bvModal.hide(`property-create`)" variant="danger" type="button">
          {{ $t("general.Cancel") }}
        </b-button>
      </div>
      <div class="row">
        <div class="col-8" :class="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
          <ul id="myUL">
            <li v-for="node in rootNodes" :key="node.id">
              <span>
                <i
                  @click="getFirstLevelChildNodes(node)"
                  v-if="node.haveChildren"
                  :class="
                    node.collapsed
                      ? 'fa fa-caret-down'
                      : $i18n.locale == 'ar'
                      ? 'fa fa-caret-left'
                      : 'fa fa-caret-right'
                  "
                ></i>
                <span
                  @click="setCreateParentId(node)"
                  :class="{
                    'without-children': !node.haveChildren,
                    active: node.id == create.parent_id,
                  }"
                >
                  {{ $i18n.locale == "ar" ? node.name : node.name_e }}
                </span>
              </span>
              <ul v-if="node.children && node.children.length" class="nested">
                <li v-for="childNode in node.children" :key="childNode.id">
                  <span>
                    <i
                      @click="getSecondLevelChildNodes(node, childNode)"
                      v-if="childNode.haveChildren"
                      :class="
                        childNode.collapsed
                          ? 'fa fa-caret-down'
                          : $i18n.locale == 'ar'
                          ? 'fa fa-caret-left'
                          : 'fa fa-caret-right'
                      "
                    >
                    </i>
                    <span
                      @click="setCreateParentId(childNode)"
                      :class="{
                        'without-children': !childNode.haveChildren,
                        active: childNode.id == create.parent_id,
                      }"
                    >
                      {{ $i18n.locale == "ar" ? childNode.name : childNode.name_e }}
                    </span>
                  </span>
                  <ul
                    v-if="childNode.children && childNode.children.length"
                    class="nested"
                  >
                    <li v-for="child in childNode.children" :key="child.id">
                      <span>
                        <i
                          @click="getThirdLevelChildNodes(node, childNode, child)"
                          v-if="child.haveChildren"
                          :class="
                            child.collapsed
                              ? 'fa fa-caret-down'
                              : $i18n.locale == 'ar'
                              ? 'fa fa-caret-left'
                              : 'fa fa-caret-right'
                          "
                        >
                        </i>
                        <span
                          @click="setCreateParentId(child)"
                          :class="{
                            'without-children': !child.haveChildren,
                            active: child.id == create.parent_id,
                          }"
                        >
                          {{ $i18n.locale == "ar" ? child.name : child.name_e }}
                        </span>
                      </span>
                      <ul v-if="child.children && child.children.length" class="nested">
                        <li v-for="_child in child.children" :key="_child.id">
                          <span>
                            <i
                              @click="
                                getFourthLevelChildNodes(node, childNode, child, _child)
                              "
                              v-if="_child.haveChildren"
                              :class="
                                _child.collapsed
                                  ? 'fa fa-caret-down'
                                  : $i18n.locale == 'ar'
                                  ? 'fa fa-caret-left'
                                  : 'fa fa-caret-right'
                              "
                            >
                            </i>
                            <span
                              @click="setCreateParentId(_child)"
                              :class="{
                                'without-children': !_child.haveChildren,
                                active: _child.id == create.parent_id,
                              }"
                            >
                              {{ $i18n.locale == "ar" ? _child.name : _child.name_e }}
                            </span>
                          </span>
                          <ul
                            v-if="_child.children && _child.children.length"
                            class="nested"
                          >
                            <li v-for="__child in _child.children" :key="__child.id">
                              {{ $i18n.locale == "ar" ? __child.name : __child.name_e }}
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="col-4">
          <div class="row">
            <div class="col-12 direction" dir="rtl">
              <div class="form-group">
                <label for="field-1" class="control-label">
                  {{ getCompanyKey("property_name_ar") }}
                  <span class="text-danger">*</span>
                </label>
                <input
                  type="text"
                  class="form-control arabicInput"
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
                  <ErrorMessage
                    v-for="(errorMessage, index) in errors.name"
                    :key="index"
                    >{{ $t(errorMessage) }}</ErrorMessage
                  >
                </template>
              </div>
            </div>
            <div class="col-12 direction-ltr" dir="ltr">
              <div class="form-group">
                <label for="field-2" class="control-label">
                  {{ getCompanyKey("property_name_en") }}
                  <span class="text-danger">*</span>
                </label>
                <input
                  type="text"
                  class="form-control englishInput"
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
                  <ErrorMessage
                    v-for="(errorMessage, index) in errors.name_e"
                    :key="index"
                    >{{ $t(errorMessage) }}</ErrorMessage
                  >
                </template>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label class="mr-2 mb-2">
                  {{ getCompanyKey("required") }}
                  <span class="text-danger">*</span>
                </label>
                <b-form-group
                  :class="{
                    'is-invalid': $v.create.required.$error || errors.required,
                    'is-valid': !$v.create.required.$invalid && !errors.required,
                  }"
                >
                  <b-form-radio
                    class="d-inline-block"
                    v-model="$v.create.required.$model"
                    name="some-radios"
                    value="active"
                    >{{ $t("general.Yes") }}</b-form-radio
                  >
                  <b-form-radio
                    class="d-inline-block m-1"
                    v-model="$v.create.required.$model"
                    name="some-radios"
                    value="inactive"
                    >{{ $t("general.No") }}</b-form-radio
                  >
                </b-form-group>
                <template v-if="errors.required">
                  <ErrorMessage
                    v-for="(errorMessage, index) in errors.required"
                    :key="index"
                    >{{ $t(errorMessage) }}
                  </ErrorMessage>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </b-modal>
</template>
<style scoped lang="scss">
ul,
#myUL {
  list-style-type: none;
}
#myUL {
  margin: 0;
  padding: 0;
  span {
    i {
      font-size: 20px;
      position: relative;
      top: 3px;
      color: black;
    }
    span:hover,
    i:hover {
      cursor: pointer;
    }
  }
}
.nested {
  display: block;
}
.active {
  color: #1abc9c;
}
.rtl {
  #myUL {
    .without-children {
      padding-right: 10px;
    }
    .nested {
      padding-right: 40px;
    }
  }
}
.ltr {
  #myUL {
    .without-children {
      padding-left: 10px;
    }
  }
}
/* Remove default bullets */
</style>

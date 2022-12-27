import Cookies from "js-cookie";
import adminApi from '../../api/adminAxios';
import router from "../../router/index";

// state
export const state = {
    token: Cookies.get("token") || null,
    // permission: JSON.parse(localStorage.getItem("permission")) || [],
    partner: JSON.parse(localStorage.getItem("partner")) || {},
    companies: JSON.parse(localStorage.getItem("companies")) || [],
    company_id: localStorage.getItem("company_id") || null
}

// getters
export const getters = {
    token: state => state.token,
    permission: state => state.permission,
    loading: state => state.loading,
    partner: state => state.partner,
    companies: state => state.companies,
    errors: state => state.errors,
    company_id: state => state.company_id
}

// mutations
export const mutations = {
    editToken(state,token){
        state.token = token;
        Cookies.set('token',token,{ expires: 7 });
    },
    // editPermission(state,permission){
    //
    //     let name = [];
    //     permission.forEach(el => {
    //         name.push(el.name);
    //         if(el.role && !name.includes(el.role)){
    //             name.push(el.role);
    //         }
    //     });
    //
    //     state.permission = name;
    //     localStorage.setItem('permission',JSON.stringify(name));
    // },
    editPartner(state,partner){
        state.partner = partner;
        localStorage.setItem('partner',JSON.stringify(partner));
    },
    editCompanies(state,companies){
        state.companies = companies;
        localStorage.setItem('companies',JSON.stringify(companies));
    },
    editCompanyId(state,company_id){
        state.company_id = company_id;
        localStorage.setItem('company_id',JSON.stringify(company_id));
    },
    logoutToken(state){
        // state.roles = null;
        state.token = null;
        state.partner = {};
        state.companies = [];
        state.company_id = null;
            // state.permission = null;
        // localStorage.removeItem('permission');
        localStorage.removeItem('companies');
        localStorage.removeItem('partner');
        localStorage.removeItem('company_id');
        Cookies.remove('token')
    },
    editErrors(state,errors){
        state.errors = errors;
    }
};

// actions
export const actions = {};

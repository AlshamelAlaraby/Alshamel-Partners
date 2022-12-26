<template>
    <div class="container">
        <div class="company d-flex align-items-center">
            <div class="col-12">
                <div class="mt-3 row justify-content-center align-items-center">
                    <div class="col-md-4" v-for="company in companies">
                        <div class="text-center company-item" @click="companyId(company.id)">
                            <img
                                v-if="company.media"
                                class="img-thumbnail"
                                :src="company.media[0].webp"
                                @error="src='/images/img-1.png'"
                            >
                            <img
                                v-else
                                class="img-thumbnail"
                                src="/images/img-1.png"
                                @error="src='/images/img-1.png'"
                            >
                            <h4 class="mt-3">{{ $i18n.locale == 'ar' ? company.name : company.name_e }}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
    computed: {
       companies(){
           return this.$store.getters['auth/companies'];
       }
    },
    methods : {
        companyId(id){
            this.$store.commit('auth/editCompanyId',id);
            return this.$router.push({name: 'home'});
        }
    }
}
</script>

<style scoped>
.company {
    background-color: #dff0fe;
    min-height: 100vh;
    width: 100%;
    padding: 40px 0;
}

.company-content {
    height: 100%;
}
img {
    max-height: 150px;
    max-width: 250px;
}
.company-item {
    cursor: pointer;
    background: #fff;
    padding: 40px 20px;
    border-radius: 14px;
}
.container {
    max-width: 1100px !important;
}
</style>


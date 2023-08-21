<template>
    <div>
        <nav-header-admin/>
        <router-view/>
        <footer-admin-view/>
    </div>
</template>
<script>
import NavHeaderAdmin from '@/components/AdminComponents/NavHeaderAdmin.vue'
import FooterAdminView from '../../components/AdminComponents/FooterAdminView.vue'
export default {
    components: {
        NavHeaderAdmin: NavHeaderAdmin,
        FooterAdminView: FooterAdminView
    }
}
</script>
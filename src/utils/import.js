import { defineAsyncComponent } from "vue"

export function adminGlobalComponents(app) {
    app.component('admin-layout' , defineAsyncComponent(() => import("@/layouts/adminLayout")))
    app.component('default-layout' , defineAsyncComponent(() => import("@/layouts/default")))

};

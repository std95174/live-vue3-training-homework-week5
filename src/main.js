import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import {router} from "./routers/index.js";
// import VeeValidate
import * as VeeValidate from 'vee-validate';
import VeeValidateRules, {required} from '@vee-validate/rules';
import * as VeeValidateI18n from '@vee-validate/i18n';
import LoadingPlugin from "vue-loading-overlay";
import 'vue-loading-overlay/dist/css/index.css';
import zh_TW from './assets/zh_TW.json'

Object.keys(VeeValidateRules).forEach(rule => {
    VeeValidate.defineRule(rule, VeeValidateRules[rule]);
});

// Activate the locale
VeeValidate.configure({
    generateMessage: VeeValidateI18n.localize('zh_TW', zh_TW),
    validateOnInput: true, // 調整為：輸入文字時，就立即進行驗證
});

const pinia = createPinia()
createApp(App)
    .use(pinia)
    .use(router)
    .component('Loading', LoadingPlugin)
    .component('VForm', VeeValidate.Form)
    .component('VField', VeeValidate.Field)
    .component('ErrorMessage', VeeValidate.ErrorMessage)
    .mount('#app')

import "element-plus/dist/index.css";
import '../public/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import liff from '@line/liff';
import router from "./Router/Router";
import ElementPlus from 'element-plus'

async function LiffInit() {

    try {
        await liff.init({
            liffId: "2006768109-93myxPab",
        }).then(() => {
            if (!liff.isLoggedIn()) {
                liff.login();
            }
        }).catch((err) => {

            console.log(err.code, err.message);
        });
    } catch (err) {
        console.log(err);
        throw err;
    }
}

LiffInit().then(() => {
    const app = createApp(App);
    app.use(router);
    app.use(ElementPlus);
    app.mount('#app');
}).catch(() => {
    alert("初始化失敗，請重新開啟頁面");
});


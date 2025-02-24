import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../public/main.css'

import App from './App.vue'
import { createApp } from 'vue'
import liff from '@line/liff';
import router from "./Router/Router";

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
    app.mount('#app');
}).catch(() => {
    alert("初始化失敗，請重新開啟頁面");
});


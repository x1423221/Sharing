"use strict";(self["webpackChunksplit"]=self["webpackChunksplit"]||[]).push([[980],{3409:function(e,a,t){t.d(a,{A:function(){return o}});var s=t(7617),u=t(3405),l="firebase",n="11.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,u.KO)(l,n,"app");const r={apiKey:void 0,authDomain:"vuetest-35344.firebaseapp.com",projectId:"vuetest-35344",storageBucket:"vuetest-35344.firebasestorage.app",messagingSenderId:"2844207119",appId:"1:2844207119:web:687837aeece2bf9eea5b7a",measurementId:"G-42LZ3K97KN"},d=(0,u.Wp)(r),i=(0,s.aU)(d);var o=i},3980:function(e,a,t){t.r(a),t.d(a,{default:function(){return v}});t(4114),t(8992),t(2577);var s=t(6768),u=t(144),l=t(1387),n=t(7617),r=t(9648),d=t(3409),i=t(880),o={__name:"HomeComponents",setup(e){const a=(0,s.WQ)("isLoading"),t=(0,s.WQ)("profile"),o=(0,s.WQ)("currentGroup"),c=(0,u.KR)({}),p=(0,l.lq)(),v=(0,u.KR)(null),f=(0,l.rd)();(0,s.sV)((async()=>{a.value=!0,await i.A.getProfile().then((e=>{t.value=e})),v.value=p.query.s,v.value&&await w(),a.value=!1}));const w=async()=>{try{const a=(0,n.H9)(d.A,"TokenList",v.value),s=await(0,n.x7)(a);if(s.exists()){const u=s.data(),l=new Date(1e3*u.date.seconds),c=new Date,p=new Date(l),v=u.fid,w=u.docId;p.setDate(p.getDate()+1),c>p&&(alert("連結已過期"),await(0,n.kd)(a),i.A.closeWindow());const h=(0,n.H9)(d.A,"241229Test",w),m=await(0,n.x7)(h);if(m.exists()){const s=m.data()[v],u=s.members.find((e=>e.userId===t.value.userId));if(!u){try{s.members.push(new r.dP(t.value.userId,t.value.displayName))}catch(e){alert(e)}try{await(0,n.mZ)(h,{[`${v}.members`]:(0,n.hq)(new r.dP(t.value.userId,t.value.displayName).topMap())})}catch(e){alert(e)}}await(0,n.kd)(a),s.did=w,s.id=v,o.value=s,f.push("/group")}}else alert("連結已失效"),i.A.closeWindow()}catch(e){alert(e)}},h=async()=>{a.value=!0;try{const e=(0,n.H9)(d.A,"241229Test",t.value.userId),a=await(0,n.x7)(e),s=crypto.randomUUID(),u=[];u.push(new r.dP(t.value.userId,t.value.displayName).topMap()),c.value=new r.JT(`${t.value.displayName}的群組`,u),a.exists()?await(0,n.mZ)(e,{[`${s}`]:c.value.toMap()}):await(0,n.BN)(e,{[`${s}`]:c.value.toMap()}).then((()=>console.log("Data saved successfully"))).catch((e=>console.error("Error saving data:",e))),c.value={...c.value,id:s,did:t.value.userId},o.value=c.value,f.push({path:"/group"})}catch(e){alert(e+"新增資料失敗"),a.value=!1}},m=async()=>{a.value=!0,f.push({path:"/history"})};return(e,a)=>{const t=(0,s.g2)("el-header"),u=(0,s.g2)("el-button"),l=(0,s.g2)("el-main"),n=(0,s.g2)("el-container");return(0,s.uX)(),(0,s.Wv)(n,null,{default:(0,s.k6)((()=>[(0,s.bF)(t,null,{default:(0,s.k6)((()=>a[0]||(a[0]=[(0,s.Lk)("h1",null,"分帳輕鬆搞定",-1),(0,s.Lk)("p",null,"快速紀錄與分帳，讓金錢計算更簡單。",-1)]))),_:1}),(0,s.bF)(l,null,{default:(0,s.k6)((()=>[(0,s.bF)(u,{id:"btnCreateNew",onClick:h},{default:(0,s.k6)((()=>a[1]||(a[1]=[(0,s.eW)(" 建立新分帳 ")]))),_:1}),(0,s.bF)(u,{id:"btnShowHis",onClick:m},{default:(0,s.k6)((()=>a[2]||(a[2]=[(0,s.eW)(" 檢視歷史紀錄 ")]))),_:1})])),_:1})])),_:1})}}},c=t(1241);const p=(0,c.A)(o,[["__scopeId","data-v-1af98518"]]);var v=p}}]);
//# sourceMappingURL=980.25a1d6cf.js.map
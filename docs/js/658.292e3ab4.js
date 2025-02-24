"use strict";(self["webpackChunksplit"]=self["webpackChunksplit"]||[]).push([[658],{3409:function(e,a,t){t.d(a,{A:function(){return i}});var s=t(7617),u=t(3405),n="firebase",l="11.1.0";
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
(0,u.KO)(n,l,"app");const r={apiKey:void 0,authDomain:"vuetest-35344.firebaseapp.com",projectId:"vuetest-35344",storageBucket:"vuetest-35344.firebasestorage.app",messagingSenderId:"2844207119",appId:"1:2844207119:web:687837aeece2bf9eea5b7a",measurementId:"G-42LZ3K97KN"},o=(0,u.Wp)(r),c=(0,s.aU)(o);var i=c},658:function(e,a,t){t.r(a),t.d(a,{default:function(){return w}});t(4114),t(8992),t(2577);var s=t(6768),u=t(144),n=t(1387),l=t(7617),r=t(9648),o=t(3409),c=t(880);const i={class:"home-container"};var d={__name:"HomeComponents",setup(e){const a=(0,s.WQ)("isLoading"),t=(0,s.WQ)("profile"),d=(0,s.WQ)("currentGroup"),p=(0,u.KR)({}),v=(0,n.lq)(),w=(0,u.KR)(null),h=(0,n.rd)();(0,s.sV)((async()=>{a.value=!0,await c.A.getProfile().then((e=>{t.value=e})),w.value=v.query.s,w.value&&await m(),a.value=!1}));const m=async()=>{try{const a=(0,l.H9)(o.A,"TokenList",w.value),s=await(0,l.x7)(a);if(s.exists()){const u=s.data(),n=new Date(1e3*u.date.seconds),i=new Date,p=new Date(n),v=u.fid,w=u.docId;p.setDate(p.getDate()+1),i>p&&(alert("連結已過期"),await(0,l.kd)(a),c.A.closeWindow());const m=(0,l.H9)(o.A,"241229Test",w),b=await(0,l.x7)(m);if(b.exists()){const s=b.data()[v],u=s.members.find((e=>e.userId===t.value.userId));if(!u){try{s.members.push(new r.dP(t.value.userId,t.value.displayName))}catch(e){alert(e)}try{await(0,l.mZ)(m,{[`${v}.members`]:(0,l.hq)(new r.dP(t.value.userId,t.value.displayName).topMap())})}catch(e){alert(e)}}await(0,l.kd)(a),s.did=w,s.id=v,d.value=s,h.push("/group")}}else alert("連結已失效"),c.A.closeWindow()}catch(e){alert(e)}},b=async()=>{a.value=!0;try{const e=(0,l.H9)(o.A,"241229Test",t.value.userId),a=await(0,l.x7)(e),s=crypto.randomUUID(),u=[];u.push(new r.dP(t.value.userId,t.value.displayName).topMap()),p.value=new r.JT(`${t.value.displayName}的群組`,u),a.exists()?await(0,l.mZ)(e,{[`${s}`]:p.value.toMap()}):await(0,l.BN)(e,{[`${s}`]:p.value.toMap()}).then((()=>console.log("Data saved successfully"))).catch((e=>console.error("Error saving data:",e))),p.value={...p.value,id:s,did:t.value.userId},d.value=p.value,h.push({path:"/group"})}catch(e){alert(e+"新增資料失敗"),a.value=!1}},f=async()=>{a.value=!0,h.push({path:"/history"})};return(e,a)=>((0,s.uX)(),(0,s.CE)("div",i,[a[0]||(a[0]=(0,s.Lk)("h1",null,"分帳輕鬆搞定",-1)),a[1]||(a[1]=(0,s.Lk)("p",null,"快速紀錄與分帳，讓金錢計算更簡單。",-1)),(0,s.Lk)("div",null,[(0,s.Lk)("button",{id:"btnCreateNew",class:"btn btn-success",onClick:b}," 建立新分帳 "),(0,s.Lk)("button",{id:"btnShowHis",class:"btn btn-success",onClick:f}," 檢視歷史紀錄 ")])]))}},p=t(1241);const v=(0,p.A)(d,[["__scopeId","data-v-e48436c2"]]);var w=v}}]);
//# sourceMappingURL=658.292e3ab4.js.map
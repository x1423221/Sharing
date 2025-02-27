"use strict";(self["webpackChunksplit"]=self["webpackChunksplit"]||[]).push([[754],{4046:function(t,e,n){n.d(e,{FA:function(){return A},Fy:function(){return w},Ku:function(){return x},T9:function(){return y},Uj:function(){return u},ZQ:function(){return _},bD:function(){return N},cY:function(){return v},eX:function(){return C},g:function(){return I},nr:function(){return E},yU:function(){return m},zW:function(){return T}});n(4114),n(8992),n(3949),n(4979);
/**
 * @license
 * Copyright 2017 Google LLC
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
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296===(64512&s)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++r)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},s=function(t){const e=[];let n=0,r=0;while(n<t.length){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],u=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(1023&u))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return e.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const e=t[s],i=s+1<t.length,o=i?t[s+1]:0,a=s+2<t.length,u=a?t[s+2]:0,c=e>>2,h=(3&e)<<4|o>>4;let l=(15&o)<<2|u>>6,d=63&u;a||(d=64,i||(l=64)),r.push(n[c],n[h],n[l],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],i=s<t.length,a=i?n[t.charAt(s)]:0;++s;const u=s<t.length,c=u?n[t.charAt(s)]:64;++s;const h=s<t.length,l=h?n[t.charAt(s)]:64;if(++s,null==e||null==a||null==c||null==l)throw new o;const d=e<<2|a>>4;if(r.push(d),64!==c){const t=a<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=r(t);return i.encodeByteArray(e,!0)},u=function(t){return a(t).replace(/\./g,"")},c=function(t){try{return i.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
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
function h(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */const l=()=>h().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",VUE_APP_DEVID:"2006952796-JOWlazlk",VUE_APP_FIREBASEKEY:"AIzaSyCx8sKPayUVw_yQHHZVWAk4s_XKGsyw3vw",VUE_APP_PRDID:"2006768109-93myxPab",BASE_URL:"/Sharing/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},f=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&c(t[1]);return e&&JSON.parse(e)},g=()=>{try{return l()||d()||f()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},p=t=>{var e,n;return null===(n=null===(e=g())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},m=t=>{const e=p(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},y=()=>{var t;return null===(t=g())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
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
class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */function w(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[u(JSON.stringify(n)),u(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function b(){var t;const e=null===(t=g())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function E(){return!b()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function T(){try{return"object"===typeof indexedDB}catch(t){return!1}}function C(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
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
const S="FirebaseError";class I extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=S,Object.setPrototypeOf(this,I.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?D(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new I(r,o,n);return a}}function D(t,e){return t.replace(k,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const k=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function N(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const n=t[s],i=e[s];if(R(n)&&R(i)){if(!N(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function R(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
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
 * Copyright 2021 Google LLC
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
function x(t){return t&&t._delegate?t._delegate:t}},1241:function(t,e){e.A=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n}},9648:function(t,e,n){n.d(e,{JT:function(){return i},ZX:function(){return s},_l:function(){return o},dP:function(){return r},iN:function(){return a}});n(8992),n(3949);class r{constructor(t,e){this.userId=t,this.name=e}topMap(){return{userId:this.userId,name:this.name}}}class s{constructor(t,e,n,r,s,i=[]){this.userId=t,this.payer=e,this.amount=n,this.description=r,this.date=u(s),this.split=i}toMap(){return{isLock:!1,userId:this.userId,payer:this.payer,amount:Number(this.amount),description:this.description,date:this.date,split:this.split}}}class i{constructor(t,e=[],n=new Date){this.name=t,this.members=e,this.date=u(n)}toMap(){return{name:this.name,members:this.members,date:this.date}}}class o{constructor(t="",e="",n=0){this.userId=t,this.userName=e,this.splitAmount=n}}const a=(t,e,n)=>{const r=800;t.forEach(((t,s)=>{e[t.id]||(e[t.id]=`animation: showCard ${r/1e3}s ease-in-out ${250*s}ms;`),n[t.id]=!0,setTimeout((()=>{delete e[t.id],delete n[t.id]}),r+250*s)}))},u=t=>{const e=new Intl.DateTimeFormat("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),n=e.format(t).replace(/\//g,"-").replace(",","");return n}},1806:function(t,e,n){var r=n(6518),s=n(8551),i=n(2652),o=n(1767),a=[].push;r({target:"Iterator",proto:!0,real:!0},{toArray:function(){var t=[];return i(o(s(this)),a,{that:t,IS_RECORD:!0}),t}})},1795:function(t,e,n){n(1806)},3405:function(t,e,n){n.d(e,{MF:function(){return vt},j6:function(){return gt},om:function(){return ft},Sx:function(){return _t},Wp:function(){return wt},KO:function(){return bt}});n(4114),n(8992),n(4520),n(1454),n(8872),n(7550);var r=n(852),s=n(1363),i=n(4046);n(4979);const o=(t,e)=>e.some((e=>t instanceof e));let a,u;function c(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h(){return u||(u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const l=new WeakMap,d=new WeakMap,f=new WeakMap,g=new WeakMap,p=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{e(E(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&l.set(e,t)})).catch((()=>{})),p.set(e,t),e}function y(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)}));d.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function _(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?h().includes(t)?function(...e){return t.apply(T(this),e),E(l.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return f.set(r,e.sort?e.sort():[e]),E(r)}}function b(t){return"function"===typeof t?_(t):(t instanceof IDBTransaction&&y(t),o(t,c())?new Proxy(t,v):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(g.has(t))return g.get(t);const e=b(t);return e!==t&&(g.set(t,e),p.set(e,t)),e}const T=t=>p.get(t);function C(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{i&&t.addEventListener("close",(()=>i())),s&&t.addEventListener("versionchange",(t=>s(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],A=new Map;function D(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(A.get(e))return A.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!S.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&i.done]))[0]};return A.set(e,i),i}w((t=>({...t,get:(e,n,r)=>D(e,n)||t.get(e,n,r),has:(e,n)=>!!D(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
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
class k{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(N(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function N(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const R="@firebase/app",x="0.10.17",L=new s.Vy("@firebase/app"),O="@firebase/app-compat",M="@firebase/analytics-compat",P="@firebase/analytics",V="@firebase/app-check-compat",F="@firebase/app-check",U="@firebase/auth",B="@firebase/auth-compat",j="@firebase/database",q="@firebase/data-connect",z="@firebase/database-compat",$="@firebase/functions",K="@firebase/functions-compat",G="@firebase/installations",H="@firebase/installations-compat",Q="@firebase/messaging",W="@firebase/messaging-compat",X="@firebase/performance",Y="@firebase/performance-compat",J="@firebase/remote-config",Z="@firebase/remote-config-compat",tt="@firebase/storage",et="@firebase/storage-compat",nt="@firebase/firestore",rt="@firebase/vertexai",st="@firebase/firestore-compat",it="firebase",ot="11.1.0",at="[DEFAULT]",ut={[R]:"fire-core",[O]:"fire-core-compat",[P]:"fire-analytics",[M]:"fire-analytics-compat",[F]:"fire-app-check",[V]:"fire-app-check-compat",[U]:"fire-auth",[B]:"fire-auth-compat",[j]:"fire-rtdb",[q]:"fire-data-connect",[z]:"fire-rtdb-compat",[$]:"fire-fn",[K]:"fire-fn-compat",[G]:"fire-iid",[H]:"fire-iid-compat",[Q]:"fire-fcm",[W]:"fire-fcm-compat",[X]:"fire-perf",[Y]:"fire-perf-compat",[J]:"fire-rc",[Z]:"fire-rc-compat",[tt]:"fire-gcs",[et]:"fire-gcs-compat",[nt]:"fire-fst",[st]:"fire-fst-compat",[rt]:"fire-vertex","fire-js":"fire-js",[it]:"fire-js-all"},ct=new Map,ht=new Map,lt=new Map;function dt(t,e){try{t.container.addComponent(e)}catch(n){L.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ft(t){const e=t.name;if(lt.has(e))return L.debug(`There were multiple attempts to register component ${e}.`),!1;lt.set(e,t);for(const n of ct.values())dt(n,t);for(const n of ht.values())dt(n,t);return!0}function gt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
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
const pt={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},mt=new i.FA("app","Firebase",pt);
/**
 * @license
 * Copyright 2019 Google LLC
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
class yt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 * Copyright 2019 Google LLC
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
const vt=ot;function wt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const s=Object.assign({name:at,automaticDataCollectionEnabled:!1},e),o=s.name;if("string"!==typeof o||!o)throw mt.create("bad-app-name",{appName:String(o)});if(n||(n=(0,i.T9)()),!n)throw mt.create("no-options");const a=ct.get(o);if(a){if((0,i.bD)(n,a.options)&&(0,i.bD)(s,a.config))return a;throw mt.create("duplicate-app",{appName:o})}const u=new r.h1(o);for(const r of lt.values())u.addComponent(r);const c=new yt(n,s,u);return ct.set(o,c),c}function _t(t=at){const e=ct.get(t);if(!e&&t===at&&(0,i.T9)())return wt();if(!e)throw mt.create("no-app",{appName:t});return e}function bt(t,e,n){var s;let i=null!==(s=ut[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void L.warn(t.join(" "))}ft(new r.uA(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
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
const Et="firebase-heartbeat-database",Tt=1,Ct="firebase-heartbeat-store";let St=null;function It(){return St||(St=C(Et,Tt,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ct)}catch(n){console.warn(n)}}}}).catch((t=>{throw mt.create("idb-open",{originalErrorMessage:t.message})}))),St}async function At(t){try{const e=await It(),n=e.transaction(Ct),r=await n.objectStore(Ct).get(kt(t));return await n.done,r}catch(e){if(e instanceof i.g)L.warn(e.message);else{const t=mt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});L.warn(t.message)}}}async function Dt(t,e){try{const n=await It(),r=n.transaction(Ct,"readwrite"),s=r.objectStore(Ct);await s.put(e,kt(t)),await r.done}catch(n){if(n instanceof i.g)L.warn(n.message);else{const t=mt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});L.warn(t.message)}}}function kt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Nt=1024,Rt=2592e6;class xt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Mt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;try{const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),s=Lt();if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some((t=>t.date===s)))return;return this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=Rt})),this._storage.overwrite(this._heartbeatsCache)}catch(n){L.warn(n)}}async getHeartbeatsHeader(){var t;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=Lt(),{heartbeatsToSend:n,unsentEntries:r}=Ot(this._heartbeatsCache.heartbeats),s=(0,i.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return L.warn(e),""}}}function Lt(){const t=new Date;return t.toISOString().substring(0,10)}function Ot(t,e=Nt){const n=[];let r=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),Pt(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Pt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Mt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.zW)()&&(0,i.eX)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await At(this.app);return(null===t||void 0===t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Dt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Dt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Pt(t){return(0,i.Uj)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Vt(t){ft(new r.uA("platform-logger",(t=>new k(t)),"PRIVATE")),ft(new r.uA("heartbeat",(t=>new xt(t)),"PRIVATE")),bt(R,x,t),bt(R,x,"esm2017"),bt("fire-js","")}Vt("")},852:function(t,e,n){n.d(e,{h1:function(){return c},uA:function(){return s}});n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(4520),n(1454);var r=n(4046);class s{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.cY;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(u(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(s);n===t&&i.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===i?void 0:t}function u(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class c{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},1363:function(t,e,n){n.d(e,{$b:function(){return s},Vy:function(){return c}});n(4114),n(8992),n(4520),n(1454);
/**
 * @license
 * Copyright 2017 Google LLC
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
const r=[];var s;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(s||(s={}));const i={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},u=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),s=a[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${r}]  ${t.name}:`,...n)};class c{constructor(t){this.name=t,this._logLevel=o,this._logHandler=u,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in s))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...t),this._logHandler(this,s.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...t),this._logHandler(this,s.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,s.INFO,...t),this._logHandler(this,s.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,s.WARN,...t),this._logHandler(this,s.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...t),this._logHandler(this,s.ERROR,...t)}}},7617:function(t,e,n){n.d(e,{hq:function(){return su},rJ:function(){return ra},kd:function(){return tu},H9:function(){return sa},x7:function(){return Wa},GG:function(){return Ya},aU:function(){return ua},aQ:function(){return eu},BN:function(){return Ja},mZ:function(){return Za}});n(4114),n(6573),n(8100),n(7936),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(7467),n(4732),n(9577),n(8992),n(3215),n(4520),n(2577),n(3949),n(1454),n(8872),n(7550),n(1795),n(4979);var r,s,i=n(3405),o=n(852),a=n(1363),u=n(4046),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},h={};(function(){var t;
/** @license
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
         */function e(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function o(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}function a(t,e){var n=c;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}function u(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=0|t[s];r&&i==e||(n[s]=i,r=!1)}this.g=n}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},i.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.B,s=this.h,i=0;i<e;){if(0==s)for(;i<=n;)o(this,t,i),i+=this.blockSize;if("string"===typeof t){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){o(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){o(this,r),s=0;break}}this.h=s,this.o+=e},i.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var c={};function l(t){return-128<=t&&128>t?a(t,(function(t){return new u([0|t],0>t?-1:0)})):new u([0|t],0>t?-1:0)}function d(t){if(isNaN(t)||!isFinite(t))return g;if(0>t)return w(d(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=4294967296;return new u(e,0)}function f(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return w(f(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=d(Math.pow(e,8)),r=g,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=d(Math.pow(e,i)),r=r.j(i).add(d(o))):(r=r.j(n),r=r.add(d(o)))}return r}var g=l(0),p=l(1),m=l(16777216);function y(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function v(t){return-1==t.h}function w(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new u(n,~t.h).add(p)}function _(t,e){return t.add(w(e))}function b(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function E(t,e){this.g=t,this.h=e}function T(t,e){if(y(e))throw Error("division by zero");if(y(t))return new E(g,g);if(v(t))return e=T(w(t),e),new E(w(e.g),w(e.h));if(v(e))return e=T(t,w(e)),new E(w(e.g),e.h);if(30<t.g.length){if(v(t)||v(e))throw Error("slowDivide_ only works with positive integers.");for(var n=p,r=e;0>=r.l(t);)n=C(n),r=C(r);var s=S(n,1),i=S(r,1);for(r=S(r,2),n=S(n,2);!y(r);){var o=i.add(r);0>=o.l(t)&&(s=s.add(n),i=o),r=S(r,1),n=S(n,1)}return e=_(t,s.j(e)),new E(s,e)}for(s=g;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=d(n),o=i.j(e);v(o)||0<o.l(t);)n-=r,i=d(n),o=i.j(e);y(i)&&(i=p),s=s.add(i),t=_(t,o)}return new E(s,t)}function C(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.i(r)<<1|t.i(r-1)>>>31;return new u(n,t.h)}function S(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.i(i+n)>>>e|t.i(i+n+1)<<32-e:t.i(i+n);return new u(s,t.h)}t=u.prototype,t.m=function(){if(v(this))return-w(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.i(n);t+=(0<=r?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(y(this))return"0";if(v(this))return"-"+w(this).toString(t);for(var e=d(Math.pow(t,6)),n=this,r="";;){var s=T(n,e).g;n=_(n,s.j(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,y(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return t=_(this,t),v(t)?-1:y(t)?0:1},t.abs=function(){return v(this)?w(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(65535&this.i(s))+(65535&t.i(s)),o=(i>>>16)+(this.i(s)>>>16)+(t.i(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new u(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(y(this)||y(t))return g;if(v(this))return v(t)?w(this).j(w(t)):w(w(this).j(t));if(v(t))return w(this.j(w(t)));if(0>this.l(m)&&0>t.l(m))return d(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.i(r)>>>16,o=65535&this.i(r),a=t.i(s)>>>16,c=65535&t.i(s);n[2*r+2*s]+=o*c,b(n,2*r+2*s),n[2*r+2*s+1]+=i*c,b(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,b(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,b(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new u(n,0)},t.A=function(t){return T(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)&t.i(r);return new u(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)|t.i(r);return new u(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)^t.i(r);return new u(n,this.h^t.h)},i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,s=h.Md5=i,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=d,u.fromString=f,r=h.Integer=u}).apply("undefined"!==typeof c?c:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var l,d,f,g,p,m,y,v,w="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},_={};(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};function n(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof w&&w];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function s(t,n){if(n)t:{var s=r;t=t.split(".");for(var i=0;i<t.length-1;i++){var o=t[i];if(!(o in s))break t;s=s[o]}t=t[t.length-1],i=s[t],n=n(i),n!=i&&null!=n&&e(s,t,{configurable:!0,writable:!0,value:n})}}function i(t,e){t instanceof String&&(t+="");var n=0,r=!1,s={next:function(){if(!r&&n<t.length){var s=n++;return{value:e(s,t[s]),done:!1}}return r=!0,{done:!0,value:void 0}}};return s[Symbol.iterator]=function(){return s},s}s("Array.prototype.values",(function(t){return t||function(){return i(this,(function(t,e){return e}))}}));
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
var o=o||{},a=this||self;function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function c(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function h(t,e,n){return t.call.apply(t.bind,arguments)}function E(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function T(t,e,n){return T=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?h:E,T.apply(null,arguments)}function S(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function I(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function A(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function D(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(u(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let s=0;s<r;s++)t[n+s]=e[s]}else t.push(e)}}class k{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function N(t){return/^[\s\xa0]*$/.test(t)}function R(){var t=a.navigator;return t&&(t=t.userAgent)?t:""}function x(t){return x[" "](t),t}x[" "]=function(){};var L=-1!=R().indexOf("Gecko")&&!(-1!=R().toLowerCase().indexOf("webkit")&&-1==R().indexOf("Edge"))&&!(-1!=R().indexOf("Trident")||-1!=R().indexOf("MSIE"))&&-1==R().indexOf("Edge");function O(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function M(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function P(t){const e={};for(const n in t)e[n]=t[n];return e}const V="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function F(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<V.length;e++)n=V[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function U(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function B(t){a.setTimeout((()=>{throw t}),0)}function j(){var t=H;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class q{constructor(){this.h=this.g=null}add(t,e){const n=z.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var z=new k((()=>new $),(t=>t.reset()));class ${constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let K,G=!1,H=new q,Q=()=>{const t=a.Promise.resolve(void 0);K=()=>{t.then(W)}};var W=()=>{for(var t;t=j();){try{t.h.call(t.g)}catch(n){B(n)}var e=z;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}G=!1};function X(){this.s=this.s,this.C=this.C}function Y(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},Y.prototype.h=function(){this.defaultPrevented=!0};var J=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};a.addEventListener("test",t,e),a.removeEventListener("test",t,e)}catch(n){}return t}();function Z(t,e){if(Y.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(L){t:{try{x(e.nodeName);var s=!0;break t}catch(i){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:tt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Z.aa.h.call(this)}}I(Z,Y);var tt={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),nt=0;function rt(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++nt,this.da=this.fa=!1}function st(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function it(t){this.src=t,this.g={},this.h=0}function ot(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=Array.prototype.indexOf.call(s,e,void 0);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(st(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.da&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}it.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=at(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new rt(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};var ut="closure_lm_"+(1e6*Math.random()|0),ct={};function ht(t,e,n,r,s){if(r&&r.once)return ft(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)ht(t,e[i],n,r,s);return null}return n=_t(n),t&&t[et]?t.K(e,n,c(r)?!!r.capture:!!r,s):lt(t,e,n,!1,r,s)}function lt(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=c(s)?!!s.capture:!!s,a=vt(t);if(a||(t[ut]=a=new it(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=dt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)J||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(mt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function dt(){function t(n){return e.call(t.src,t.listener,n)}const e=yt;return t}function ft(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)ft(t,e[i],n,r,s);return null}return n=_t(n),t&&t[et]?t.L(e,n,c(r)?!!r.capture:!!r,s):lt(t,e,n,!0,r,s)}function gt(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)gt(t,e[i],n,r,s);else r=c(r)?!!r.capture:!!r,n=_t(n),t&&t[et]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=at(i,n,r,s),-1<n&&(st(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=vt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,r,s)),(n=-1<t?e[t]:null)&&pt(n))}function pt(t){if("number"!==typeof t&&t&&!t.da){var e=t.src;if(e&&e[et])ot(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(mt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=vt(e))?(ot(n,t),0==n.h&&(n.src=null,e[ut]=null)):st(t)}}}function mt(t){return t in ct?ct[t]:ct[t]="on"+t}function yt(t,e){if(t.da)t=!0;else{e=new Z(e,this);var n=t.listener,r=t.ha||t.src;t.fa&&pt(t),t=n.call(r,e)}return t}function vt(t){return t=t[ut],t instanceof it?t:null}var wt="__closure_events_fn_"+(1e9*Math.random()>>>0);function _t(t){return"function"===typeof t?t:(t[wt]||(t[wt]=function(e){return t.handleEvent(e)}),t[wt])}function bt(){X.call(this),this.i=new it(this),this.M=this,this.F=null}function Et(t,e){var n,r=t.F;if(r)for(n=[];r;r=r.F)n.push(r);if(t=t.M,r=e.type||e,"string"===typeof e)e=new Y(e,t);else if(e instanceof Y)e.target=e.target||t;else{var s=e;e=new Y(r,t),F(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Tt(o,r,!0,e)&&s}if(o=e.g=t,s=Tt(o,r,!0,e)&&s,s=Tt(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Tt(o,r,!1,e)&&s}function Tt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.da&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.fa&&ot(t.i,o),s=!1!==a.call(u,r)&&s}}return s&&!r.defaultPrevented}function Ct(t,e,n){if("function"===typeof t)n&&(t=T(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=T(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function St(t){t.g=Ct((()=>{t.g=null,t.i&&(t.i=!1,St(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}I(bt,X),bt.prototype[et]=!0,bt.prototype.removeEventListener=function(t,e,n,r){gt(this,t,e,n,r)},bt.prototype.N=function(){if(bt.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)st(n[r]);delete e.g[t],e.h--}}this.F=null},bt.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},bt.prototype.L=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class It extends X{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:St(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function At(t){X.call(this),this.h=t,this.g={}}I(At,X);var Dt=[];function kt(t){O(t.g,(function(t,e){this.g.hasOwnProperty(e)&&pt(t)}),t),t.g={}}At.prototype.N=function(){At.aa.N.call(this),kt(this)},At.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Nt=a.JSON.stringify,Rt=a.JSON.parse,xt=class{stringify(t){return a.JSON.stringify(t,void 0)}parse(t){return a.JSON.parse(t,void 0)}};function Lt(){}function Ot(t){return t.h||(t.h=t.i())}function Mt(){}Lt.prototype.h=null;var Pt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vt(){Y.call(this,"d")}function Ft(){Y.call(this,"c")}I(Vt,Y),I(Ft,Y);var Ut={},Bt=null;function jt(){return Bt=Bt||new bt}function qt(t){Y.call(this,Ut.La,t)}function zt(t){const e=jt();Et(e,new qt(e))}function $t(t,e){Y.call(this,Ut.STAT_EVENT,t),this.stat=e}function Kt(t){const e=jt();Et(e,new $t(e,t))}function Gt(t,e){Y.call(this,Ut.Ma,t),this.size=e}function Ht(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}function Qt(){this.g=!0}function Wt(t,e,n,r,s,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+c+"&":o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function Xt(t,e,n,r,s,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function Yt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Zt(t,n)+(r?" "+r:"")}))}function Jt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Zt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return Nt(n)}catch(a){return e}}Ut.La="serverreachability",I(qt,Y),Ut.STAT_EVENT="statevent",I($t,Y),Ut.Ma="timingevent",I(Gt,Y),Qt.prototype.xa=function(){this.g=!1},Qt.prototype.info=function(){};var te,ee={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ne={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function re(){}function se(t,e,n,r){this.j=t,this.i=e,this.l=n,this.R=r||1,this.U=new At(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ie}function ie(){this.i=null,this.g="",this.h=!1}I(re,Lt),re.prototype.g=function(){return new XMLHttpRequest},re.prototype.i=function(){return{}},te=new re;var oe={},ae={};function ue(t,e,n){t.L=1,t.v=Ve(xe(e)),t.m=n,t.P=!0,ce(t,null)}function ce(t,e){t.F=Date.now(),de(t),t.A=xe(t.v);var n=t.A,r=t.R;Array.isArray(r)||(r=[String(r)]),Xe(n.i,"t",r),t.C=0,n=t.j.J,t.h=new ie,t.g=zn(t.j,n?e:null,!t.m),0<t.O&&(t.M=new It(T(t.Y,t,t.g),t.O)),e=t.U,n=t.g,r=t.ca;var s="readystatechange";Array.isArray(s)||(s&&(Dt[0]=s.toString()),s=Dt);for(var i=0;i<s.length;i++){var o=ht(n,s[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}e=t.H?P(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),zt(),Wt(t.i,t.u,t.A,t.l,t.R,t.m)}function he(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function le(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?ae:(n=Number(e.substring(n,r)),isNaN(n)?oe:(r+=1,r+n>e.length?ae:(e=e.slice(r,r+n),t.C=r+n,e)))}function de(t){t.S=Date.now()+t.I,fe(t,t.I)}function fe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Ht(T(t.ba,t),e)}function ge(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function pe(t){0==t.j.G||t.J||Fn(t.j,t)}function me(t){ge(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,kt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function ye(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||Ee(n.h,t)))if(!t.K&&Ee(n.h,t)&&3==n.G){try{var r=n.Da.g.parse(e)}catch(c){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Vn(n),In(n)}On(n),Kt(18)}}else n.za=s[1],0<n.za-n.T&&37500>s[2]&&n.F&&0==n.v&&!n.C&&(n.C=Ht(T(n.Za,n),6e3));if(1>=be(n.h)&&n.ca){try{n.ca()}catch(c){}n.ca=void 0}}else Bn(n,11)}else if((t.K||n.g==t)&&Vn(n),!N(e))for(s=n.Da.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.K=c[1],n.ia=c[2];const e=c[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const s=c[4];null!=s&&(n.Aa=s,n.j.info("SVER="+n.Aa));const h=c[5];null!=h&&"number"===typeof h&&0<h&&(r=1.5*h,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.h;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(Te(i,i.h),i.h=null))}if(r.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.ya=t,Pe(r.I,r.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms")),r=n;var o=t;if(r.qa=qn(r,r.J?r.ia:null,r.W),o.K){Ce(r.h,o);var a=o,u=r.L;u&&(a.I=u),a.B&&(ge(a),de(a)),r.g=o}else Ln(r);0<n.i.length&&Dn(n)}else"stop"!=c[0]&&"close"!=c[0]||Bn(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Bn(n,7):Sn(n):"noop"!=c[0]&&n.l&&n.l.ta(c),n.v=0)}zt(4)}catch(c){}}se.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==_n(t)?e.j():this.Y(t)},se.prototype.Y=function(t){try{if(t==this.g)t:{const d=_n(this.g);var e=this.g.Ba();const f=this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||bn(this.g)))){this.J||4!=d||7==e||zt(8==e||0>=f?3:2),ge(this);var n=this.g.Z();this.X=n;e:if(he(this)){var r=bn(this.g);t="";var s=r.length,i=4==_n(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){me(this),pe(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:!(i&&e==s-1)});r.length=0,this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,Xt(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){e:{if(this.g){var u,c=this.g;if((u=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(u)){var h=u;break e}}h=null}if(!(n=h)){this.o=!1,this.s=3,Kt(12),me(this),pe(this);break t}Yt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ye(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<o.length;){if(t=le(this,o),t==ae){4==d&&(this.s=4,Kt(14),n=!1),Yt(this.i,this.l,null,"[Incomplete Response]");break}if(t==oe){this.s=4,Kt(15),Yt(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}Yt(this.i,this.l,t,null),ye(this,t)}if(he(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=o.length||this.h.h||(this.s=1,Kt(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var l=this.j;l.g==this&&l.ba&&!l.M&&(l.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),Mn(l),l.M=!0,Kt(11))}}else Yt(this.i,this.l,o,"[Invalid Chunked Response]"),me(this),pe(this)}else Yt(this.i,this.l,o,null),ye(this,o);4==d&&me(this),this.o&&!this.J&&(4==d?Fn(this.j,this):(this.o=!1,de(this)))}else En(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,Kt(12)):(this.s=0,Kt(13)),me(this),pe(this)}}}catch(b){}},se.prototype.cancel=function(){this.J=!0,me(this)},se.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Jt(this.i,this.A),2!=this.L&&(zt(),Kt(17)),me(this),this.s=2,pe(this)):fe(this,this.S-t)};var ve=class{constructor(t,e){this.g=t,this.map=e}};function we(t){this.l=t||10,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _e(t){return!!t.h||!!t.g&&t.g.size>=t.j}function be(t){return t.h?1:t.g?t.g.size:0}function Ee(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Te(t,e){t.g?t.g.add(e):t.h=e}function Ce(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Se(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return A(t.i)}function Ie(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ae(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(u(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function De(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Ae(t),r=Ie(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}we.prototype.cancel=function(){if(this.i=Se(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var ke=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ne(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Re(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Re){this.h=t.h,Le(this,t.j),this.o=t.o,this.g=t.g,Oe(this,t.s),this.l=t.l;var e=t.i,n=new Ge;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Me(this,n),this.m=t.m}else t&&(e=String(t).match(ke))?(this.h=!1,Le(this,e[1]||"",!0),this.o=Fe(e[2]||""),this.g=Fe(e[3]||"",!0),Oe(this,e[4]),this.l=Fe(e[5]||"",!0),Me(this,e[6]||"",!0),this.m=Fe(e[7]||"")):(this.h=!1,this.i=new Ge(null,this.h))}function xe(t){return new Re(t)}function Le(t,e,n){t.j=n?Fe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Oe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function Me(t,e,n){e instanceof Ge?(t.i=e,Je(t.i,t.h)):(n||(e=Ue(e,$e)),t.i=new Ge(e,t.h))}function Pe(t,e,n){t.i.set(e,n)}function Ve(t){return Pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Fe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ue(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Be),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Be(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Re.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ue(e,je,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(Ue(e,je,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ue(n,"/"==n.charAt(0)?ze:qe,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",Ue(n,Ke)),t.join("")};var je=/[#\/\?@]/g,qe=/[#\?:]/g,ze=/[#\?]/g,$e=/[#\?@]/g,Ke=/#/g;function Ge(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function He(t){t.g||(t.g=new Map,t.h=0,t.i&&Ne(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Qe(t,e){He(t),e=Ye(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function We(t,e){return He(t),e=Ye(t,e),t.g.has(e)}function Xe(t,e,n){Qe(t,e),0<n.length&&(t.i=null,t.g.set(Ye(t,e),A(n)),t.h+=n.length)}function Ye(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Je(t,e){e&&!t.j&&(He(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Qe(this,e),Xe(this,n,t))}),t)),t.j=e}function Ze(t,e){const n=new Qt;if(a.Image){const r=new Image;r.onload=S(en,n,"TestLoadImage: loaded",!0,e,r),r.onerror=S(en,n,"TestLoadImage: error",!1,e,r),r.onabort=S(en,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=S(en,n,"TestLoadImage: timeout",!1,e,r),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function tn(t,e){const n=new Qt,r=new AbortController,s=setTimeout((()=>{r.abort(),en(n,"TestPingServer: timeout",!1,e)}),1e4);fetch(t,{signal:r.signal}).then((t=>{clearTimeout(s),t.ok?en(n,"TestPingServer: ok",!0,e):en(n,"TestPingServer: server error",!1,e)})).catch((()=>{clearTimeout(s),en(n,"TestPingServer: error",!1,e)}))}function en(t,e,n,r,s){try{s&&(s.onload=null,s.onerror=null,s.onabort=null,s.ontimeout=null),r(n)}catch(i){}}function nn(){this.g=new xt}function rn(t,e,n){const r=n||"";try{De(t,(function(t,n){let s=t;c(t)&&(s=Nt(t)),e.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function sn(t){this.l=t.Ub||null,this.j=t.eb||!1}function on(t,e){bt.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function an(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function un(t){t.readyState=4,t.l=null,t.j=null,t.v=null,cn(t)}function cn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function hn(t){let e="";return O(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function ln(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=hn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Pe(t,e,n))}function dn(t){bt.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}t=Ge.prototype,t.add=function(t,e){He(this),this.i=null,t=Ye(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){He(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},t.na=function(){He(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let t=0;t<s.length;t++)n.push(e[r])}return n},t.V=function(t){He(this);let e=[];if("string"===typeof t)We(this,t)&&(e=e.concat(this.g.get(Ye(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return He(this),this.i=null,t=Ye(this,t),We(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t?(t=this.V(t),0<t.length?String(t[0]):e):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var s=i;""!==o[r]&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")},I(sn,Lt),sn.prototype.g=function(){return new on(this.l,this.j)},sn.prototype.i=function(t){return function(){return t}}({}),I(on,bt),t=on.prototype,t.open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,cn(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,un(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,cn(this)),this.g&&(this.readyState=3,cn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;an(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?un(this):cn(this),3==this.readyState&&an(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,un(this))},t.Qa=function(t){this.g&&(this.response=t,un(this))},t.ga=function(){this.g&&un(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(on.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),I(dn,bt);var fn=/^https?$/i,gn=["POST","PUT"];function pn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,mn(t),vn(t)}function mn(t){t.A||(t.A=!0,Et(t,"complete"),Et(t,"error"))}function yn(t){if(t.h&&"undefined"!=typeof o&&(!t.v[1]||4!=_n(t)||2!=t.Z()))if(t.u&&4==_n(t))Ct(t.Ea,0,t);else if(Et(t,"readystatechange"),4==_n(t)){t.h=!1;try{const o=t.Z();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var s=String(t.D).match(ke)[1]||null;!s&&a.self&&a.self.location&&(s=a.self.location.protocol.slice(0,-1)),r=!fn.test(s?s.toLowerCase():"")}n=r}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var i=2<_n(t)?t.g.statusText:""}catch(u){i=""}t.l=i+" ["+t.Z()+"]",mn(t)}}finally{vn(t)}}}function vn(t,e){if(t.g){wn(t);const r=t.g,s=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||Et(t,"ready");try{r.onreadystatechange=s}catch(n){}}}function wn(t){t.I&&(a.clearTimeout(t.I),t.I=null)}function _n(t){return t.g?t.g.readyState:0}function bn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(C){return null}}function En(t){const e={};t=(t.g&&2<=_n(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(N(t[r]))continue;var n=U(t[r]);const s=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}M(e,(function(t){return t.join(", ")}))}function Tn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Cn(t){this.Aa=0,this.i=[],this.j=new Qt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Tn("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Tn("baseRetryDelayMs",5e3,t),this.cb=Tn("retryDelaySeedMs",1e4,t),this.Wa=Tn("forwardChannelMaxRetries",2,t),this.wa=Tn("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new we(t&&t.concurrentRequestLimit),this.Da=new nn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Sn(t){if(An(t),3==t.G){var e=t.U++,n=xe(t.I);if(Pe(n,"SID",t.K),Pe(n,"RID",e),Pe(n,"TYPE","terminate"),Rn(t,n),e=new se(t,t.j,e),e.L=2,e.v=Ve(xe(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=zn(e.j,null),e.g.ea(e.v)),e.F=Date.now(),de(e)}jn(t)}function In(t){t.g&&(Mn(t),t.g.cancel(),t.g=null)}function An(t){In(t),t.u&&(a.clearTimeout(t.u),t.u=null),Vn(t),t.h.cancel(),t.s&&("number"===typeof t.s&&a.clearTimeout(t.s),t.s=null)}function Dn(t){if(!_e(t.h)&&!t.s){t.s=!0;var e=t.Ga;K||Q(),G||(K(),G=!0),H.add(e,t),t.B=0}}function kn(t,e){return!(be(t.h)>=t.h.j-(t.s?1:0))&&(t.s?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa))&&(t.s=Ht(T(t.Ga,t,e),Un(t,t.B)),t.B++,!0))}function Nn(t,e){var n;n=e?e.l:t.U++;const r=xe(t.I);Pe(r,"SID",t.K),Pe(r,"RID",n),Pe(r,"AID",t.T),Rn(t,r),t.m&&t.o&&ln(r,t.m,t.o),n=new se(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=xn(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Te(t.h,n),ue(n,r,e)}function Rn(t,e){t.H&&O(t.H,(function(t,n){Pe(e,n,t)})),t.l&&De({},(function(t,n){Pe(e,n,t)}))}function xn(t,e,n){n=Math.min(t.i.length,n);var r=t.l?T(t.l.Na,t.l,t):null;t:{var s=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let i=!0;for(let o=0;o<n;o++){let n=s[o].g;const a=s[o].map;if(n-=e,0>n)e=Math.max(0,s[o].g-100),i=!1;else try{rn(a,t,"req"+n+"_")}catch(b){r&&r(a)}}if(i){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function Ln(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;K||Q(),G||(K(),G=!0),H.add(e,t),t.v=0}}function On(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=Ht(T(t.Fa,t),Un(t,t.v)),t.v++,!0)}function Mn(t){null!=t.A&&(a.clearTimeout(t.A),t.A=null)}function Pn(t){t.g=new se(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=xe(t.qa);Pe(e,"RID","rpc"),Pe(e,"SID",t.K),Pe(e,"AID",t.T),Pe(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&Pe(e,"TO",t.ja),Pe(e,"TYPE","xmlhttp"),Rn(t,e),t.m&&t.o&&ln(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=Ve(xe(e)),n.m=null,n.P=!0,ce(n,t)}function Vn(t){null!=t.C&&(a.clearTimeout(t.C),t.C=null)}function Fn(t,e){var n=null;if(t.g==e){Vn(t),Mn(t),t.g=null;var r=2}else{if(!Ee(t.h,e))return;n=e.D,Ce(t.h,e),r=1}if(0!=t.G)if(e.o)if(1==r){n=e.m?e.m.length:0,e=Date.now()-e.F;var s=t.B;r=jt(),Et(r,new Gt(r,n)),Dn(t)}else Ln(t);else if(s=e.s,3==s||0==s&&0<e.X||!(1==r&&kn(t,e)||2==r&&On(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:Bn(t,5);break;case 4:Bn(t,10);break;case 3:Bn(t,6);break;default:Bn(t,2)}}function Un(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function Bn(t,e){if(t.j.info("Error code "+e),2==e){var n=T(t.fb,t),r=t.Xa;const e=!r;r=new Re(r||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Le(r,"https"),Ve(r),e?Ze(r.toString(),n):tn(r.toString(),n)}else Kt(2);t.G=0,t.l&&t.l.sa(e),jn(t),An(t)}function jn(t){if(t.G=0,t.ka=[],t.l){const e=Se(t.h);0==e.length&&0==t.i.length||(D(t.ka,e),D(t.ka,t.i),t.h.i.length=0,A(t.i),t.i.length=0),t.l.ra()}}function qn(t,e,n){var r=n instanceof Re?xe(n):new Re(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Oe(r,r.s);else{var s=a.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Re(null);r&&Le(i,r),e&&(i.g=e),s&&Oe(i,s),n&&(i.l=n),r=i}return n=t.D,e=t.ya,n&&e&&Pe(r,n,e),Pe(r,"VER",t.la),Rn(t,r),r}function zn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ca&&!t.pa?new dn(new sn({eb:n})):new dn(t.pa),e.Ha(t.J),e}function $n(){}function Kn(){}function Gn(t,e){bt.call(this),this.g=new Cn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!N(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!N(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Wn(this)}function Hn(t){Vt.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Qn(){Ft.call(this),this.status=1}function Wn(t){this.g=t}t=dn.prototype,t.Ha=function(t){this.J=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():te.g(),this.v=this.o?Ot(this.o):Ot(te),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(i){return void pn(this,i)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),s=a.FormData&&t instanceof a.FormData,!(0<=Array.prototype.indexOf.call(gn,e,void 0))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wn(this),this.u=!0,this.g.send(t),this.u=!1}catch(i){pn(this,i)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),vn(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vn(this,!0)),dn.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?yn(this):this.bb())},t.bb=function(){yn(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<_n(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Rt(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},t=Cn.prototype,t.la=8,t.G=1,t.connect=function(t,e,n,r){Kt(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=qn(this,null,this.W),Dn(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new se(this,this.j,t);let i=this.o;if(this.S&&(i?(i=P(i),F(i,this.S)):i=this.S),null!==this.m||this.O||(s.H=i,i=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=xn(this,s,e),n=xe(this.I),Pe(n,"RID",t),Pe(n,"CVER",22),this.D&&Pe(n,"X-HTTP-Session-Id",this.D),Rn(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(hn(i)))+"&"+e:this.m&&ln(n,this.m,i)),Te(this.h,s),this.Ua&&Pe(n,"TYPE","init"),this.P?(Pe(n,"$req",e),Pe(n,"SID","null"),s.T=!0,ue(s,n,null)):ue(s,n,e),this.G=2}}else 3==this.G&&(t?Nn(this,t):0==this.i.length||_e(this.h)||Nn(this))},t.Fa=function(){if(this.u=null,Pn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Ht(T(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Kt(10),In(this),Pn(this))},t.Za=function(){null!=this.C&&(this.C=null,In(this),On(this),Kt(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),Kt(2)):(this.j.info("Failed to ping google.com"),Kt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},t=$n.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},Kn.prototype.g=function(t,e){return new Gn(t,e)},I(Gn,bt),Gn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gn.prototype.close=function(){Sn(this.g)},Gn.prototype.o=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.u&&(n={},n.__data__=Nt(t),t=n);e.i.push(new ve(e.Ya++,t)),3==e.G&&Dn(e)},Gn.prototype.N=function(){this.g.l=null,delete this.j,Sn(this.g),delete this.g,Gn.aa.N.call(this)},I(Hn,Vt),I(Qn,Ft),I(Wn,$n),Wn.prototype.ua=function(){Et(this.g,"a")},Wn.prototype.ta=function(t){Et(this.g,new Hn(t))},Wn.prototype.sa=function(t){Et(this.g,new Qn)},Wn.prototype.ra=function(){Et(this.g,"b")},Kn.prototype.createWebChannel=Kn.prototype.g,Gn.prototype.send=Gn.prototype.o,Gn.prototype.open=Gn.prototype.m,Gn.prototype.close=Gn.prototype.close,v=_.createWebChannelTransport=function(){return new Kn},y=_.getStatEventTarget=function(){return jt()},m=_.Event=Ut,p=_.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ee.NO_ERROR=0,ee.TIMEOUT=8,ee.HTTP_ERROR=6,g=_.ErrorCode=ee,ne.COMPLETE="complete",f=_.EventType=ne,Mt.EventType=Pt,Pt.OPEN="a",Pt.CLOSE="b",Pt.ERROR="c",Pt.MESSAGE="d",bt.prototype.listen=bt.prototype.K,d=_.WebChannel=Mt,_.FetchXmlHttpFactory=sn,dn.prototype.listenOnce=dn.prototype.L,dn.prototype.getLastError=dn.prototype.Ka,dn.prototype.getLastErrorCode=dn.prototype.Ba,dn.prototype.getStatus=dn.prototype.Z,dn.prototype.getResponseJson=dn.prototype.Oa,dn.prototype.getResponseText=dn.prototype.oa,dn.prototype.send=dn.prototype.ea,dn.prototype.setWithCredentials=dn.prototype.Ha,l=_.XhrIo=dn}).apply("undefined"!==typeof w?w:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const b="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class E{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}E.UNAUTHENTICATED=new E(null),E.GOOGLE_CREDENTIALS=new E("google-credentials-uid"),E.FIRST_PARTY=new E("first-party-uid"),E.MOCK_USER=new E("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
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
let T="11.0.2";
/**
 * @license
 * Copyright 2017 Google LLC
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
 */const C=new a.Vy("@firebase/firestore");function S(){return C.logLevel}function I(t,...e){if(C.logLevel<=a.$b.DEBUG){const n=e.map(k);C.debug(`Firestore (${T}): ${t}`,...n)}}function A(t,...e){if(C.logLevel<=a.$b.ERROR){const n=e.map(k);C.error(`Firestore (${T}): ${t}`,...n)}}function D(t,...e){if(C.logLevel<=a.$b.WARN){const n=e.map(k);C.warn(`Firestore (${T}): ${t}`,...n)}}function k(t){if("string"==typeof t)return t;try{
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
 */return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function N(t="Unexpected state"){const e=`FIRESTORE (${T}) INTERNAL ASSERTION FAILED: `+t;throw A(e),new Error(e)}function R(t,e){t||N()}function x(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends u.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class M{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class P{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class V{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(E.UNAUTHENTICATED)))}shutdown(){}}class F{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class U{constructor(t){this.t=t,this.currentUser=E.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){R(void 0===this.o);let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new M;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new M,t.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{I("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(I("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new M)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(I("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(R("string"==typeof e.accessToken),new P(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return R(null===t||"string"==typeof t),new E(t)}}class B{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=E.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class j{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new B(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(E.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class q{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class z{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){R(void 0===this.o);const n=t=>{null!=t.error&&I("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,I("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{I("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):I("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(R("string"==typeof t.token),this.R=t.token,new q(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
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
function $(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class K{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=$(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function G(t,e){return t<e?-1:t>e?1:0}function H(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Q{static now(){return Q.fromMillis(Date.now())}static fromDate(t){return Q.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Q(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new O(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?G(this.nanoseconds,t.nanoseconds):G(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class W{static fromTimestamp(t){return new W(t)}static min(){return new W(new Q(0,0))}static max(){return new W(new Q(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class X{constructor(t,e,n){void 0===e?e=0:e>t.length&&N(),void 0===n?n=t.length-e:n>t.length-e&&N(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===X.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof X?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),s=e.get(r);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Y extends X{construct(t,e,n){return new Y(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new O(L.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Y(e)}static emptyPath(){return new Y([])}}const J=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends X{construct(t,e,n){return new Z(t,e,n)}static isValidIdentifier(t){return J.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Z(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new O(L.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new O(L.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new O(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new O(L.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Z(e)}static emptyPath(){return new Z([])}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class tt{constructor(t){this.path=t}static fromPath(t){return new tt(Y.fromString(t))}static fromName(t){return new tt(Y.fromString(t).popFirst(5))}static empty(){return new tt(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Y.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new tt(new Y(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */class et{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}et.UNKNOWN_ID=-1;function nt(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=W.fromTimestamp(1e9===r?new Q(n+1,0):new Q(n,r));return new st(s,tt.empty(),e)}function rt(t){return new st(t.readTime,t.key,-1)}class st{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new st(W.min(),tt.empty(),-1)}static max(){return new st(W.max(),tt.empty(),-1)}}function it(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=tt.comparator(t.documentKey,e.documentKey),0!==n?n:G(t.largestBatchId,e.largestBatchId)
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
 */)}const ot="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class at{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */async function ut(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==ot)throw t;I("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ct{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&N(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ct(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ct?e:ct.resolve(e)}catch(t){return ct.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ct.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ct.reject(e)}static resolve(t){return new ct(((e,n)=>{e(t)}))}static reject(t){return new ct(((e,n)=>{n(t)}))}static waitFor(t){return new ct(((e,n)=>{let r=0,s=0,i=!1;t.forEach((t=>{++r,t.next((()=>{++s,i&&s===r&&e()}),(t=>n(t)))})),i=!0,s===r&&e()}))}static or(t){let e=ct.resolve(!1);for(const n of t)e=e.next((t=>t?ct.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new ct(((n,r)=>{const s=t.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const u=a;e(t[u]).next((t=>{i[u]=t,++o,o===s&&n(i)}),(t=>r(t)))}}))}static doWhile(t,e){return new ct(((n,r)=>{const s=()=>{!0===t()?e().next((()=>{s()}),r):n()};s()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ht(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function lt(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
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
class dt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ie(t),this.se=t=>e.writeSequenceNumber(t))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}function ft(t){return null==t}function gt(t){return 0===t&&1/t==-1/0}function pt(t){return"number"==typeof t&&Number.isInteger(t)&&!gt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function mt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=vt(e)),e=yt(t.get(n),e);return vt(e)}function yt(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const e=t.charAt(s);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function vt(t){return t+""}dt.oe=-1;const wt=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],_t=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],bt=_t,Et=[...bt,"indexConfiguration","indexState","indexEntries"];
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
 * Copyright 2017 Google LLC
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
function Tt(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ct(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function St(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class It{constructor(t,e){this.comparator=t,this.root=e||Dt.EMPTY}insert(t,e){return new It(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(t){return new It(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new At(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new At(this.root,t,this.comparator,!1)}getReverseIterator(){return new At(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new At(this.root,t,this.comparator,!0)}}class At{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Dt{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:Dt.RED,this.left=null!=r?r:Dt.EMPTY,this.right=null!=s?s:Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new Dt(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Dt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw N();if(this.right.isRed())throw N();const t=this.left.check();if(t!==this.right.check())throw N();return t+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1,Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw N()}get value(){throw N()}get color(){throw N()}get left(){throw N()}get right(){throw N()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Dt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
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
class kt{constructor(t){this.comparator=t,this.data=new It(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Nt(this.data.getIterator())}getIteratorFrom(t){return new Nt(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof kt))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new kt(this.comparator);return e.data=t,e}}class Nt{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class Rt{constructor(t){this.fields=t,t.sort(Z.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new kt(Z.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return H(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class xt extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class Lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new xt("Invalid base64 string: "+t):t}}(t);return new Lt(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return G(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Lt.EMPTY_BYTE_STRING=new Lt("");const Ot=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mt(t){if(R(!!t),"string"==typeof t){let e=0;const n=Ot.exec(t);if(R(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pt(t.seconds),nanos:Pt(t.nanos)}}function Pt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Vt(t){return"string"==typeof t?Lt.fromBase64String(t):Lt.fromUint8Array(t)}
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
 */function Ft(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ut(t){const e=t.mapValue.fields.__previous_value__;return Ft(e)?Ut(e):e}function Bt(t){const e=Mt(t.mapValue.fields.__local_write_time__.timestampValue);return new Q(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class jt{constructor(t,e,n,r,s,i,o,a,u){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=u}}class qt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new qt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof qt&&t.projectId===this.projectId&&t.database===this.database}}
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
 */const zt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $t(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ft(t)?4:oe(t)?9007199254740991:se(t)?10:11:N()}function Kt(t,e){if(t===e)return!0;const n=$t(t);if(n!==$t(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Bt(t).isEqual(Bt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Mt(t.timestampValue),r=Mt(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Vt(t.bytesValue).isEqual(Vt(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Pt(t.geoPointValue.latitude)===Pt(e.geoPointValue.latitude)&&Pt(t.geoPointValue.longitude)===Pt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Pt(t.integerValue)===Pt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Pt(t.doubleValue),r=Pt(e.doubleValue);return n===r?gt(n)===gt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return H(t.arrayValue.values||[],e.arrayValue.values||[],Kt);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Tt(n)!==Tt(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!Kt(n[s],r[s])))return!1;return!0}(t,e);default:return N()}}function Gt(t,e){return void 0!==(t.values||[]).find((t=>Kt(t,e)))}function Ht(t,e){if(t===e)return 0;const n=$t(t),r=$t(e);if(n!==r)return G(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return G(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Pt(t.integerValue||t.doubleValue),r=Pt(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Qt(t.timestampValue,e.timestampValue);case 4:return Qt(Bt(t),Bt(e));case 5:return G(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Vt(t),r=Vt(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=G(n[s],r[s]);if(0!==t)return t}return G(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=G(Pt(t.latitude),Pt(e.latitude));return 0!==n?n:G(Pt(t.longitude),Pt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Wt(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,r,s,i;const o=t.fields||{},a=e.fields||{},u=null===(n=o.value)||void 0===n?void 0:n.arrayValue,c=null===(r=a.value)||void 0===r?void 0:r.arrayValue,h=G((null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0,(null===(i=null==c?void 0:c.values)||void 0===i?void 0:i.length)||0);return 0!==h?h:Wt(u,c)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===zt.mapValue&&e===zt.mapValue)return 0;if(t===zt.mapValue)return 1;if(e===zt.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=G(r[o],i[o]);if(0!==t)return t;const e=Ht(n[r[o]],s[i[o]]);if(0!==e)return e}return G(r.length,i.length)}(t.mapValue,e.mapValue);default:throw N()}}function Qt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return G(t,e);const n=Mt(t),r=Mt(e),s=G(n.seconds,r.seconds);return 0!==s?s:G(n.nanos,r.nanos)}function Wt(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=Ht(n[s],r[s]);if(t)return t}return G(n.length,r.length)}function Xt(t){return Yt(t)}function Yt(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Mt(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Vt(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return tt.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Yt(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${Yt(t.fields[s])}`;return n+"}"}(t.mapValue):N()}function Jt(t){switch($t(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ut(t);return e?16+Jt(e):16;case 5:return 2*t.stringValue.length;case 6:return Vt(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(t){return(t.values||[]).reduce(((t,e)=>t+Jt(e)),0)}(t.arrayValue);case 10:case 11:return function(t){let e=0;return Ct(t.fields,((t,n)=>{e+=t.length+Jt(n)})),e}(t.mapValue);default:throw N()}}function Zt(t){return!!t&&"integerValue"in t}function te(t){return!!t&&"arrayValue"in t}function ee(t){return!!t&&"nullValue"in t}function ne(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function re(t){return!!t&&"mapValue"in t}function se(t){var e,n;return"__vector__"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ie(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ct(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ie(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ie(t.arrayValue.values[n]);return e}return Object.assign({},t)}function oe(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
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
class ae{constructor(t){this.value=t}static empty(){return new ae({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!re(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ie(e)}setAll(t){let e=Z.emptyPath(),n={},r=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=ie(t):r.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());re(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Kt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];re(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Ct(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new ae(ie(this.value))}}function ue(t){const e=[];return Ct(t.fields,((t,n)=>{const r=new Z([t]);if(re(n)){const t=ue(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Rt(e)
/**
 * @license
 * Copyright 2017 Google LLC
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
 */}class ce{constructor(t,e,n,r,s,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=o}static newInvalidDocument(t){return new ce(t,0,W.min(),W.min(),W.min(),ae.empty(),0)}static newFoundDocument(t,e,n,r){return new ce(t,1,e,W.min(),n,r,0)}static newNoDocument(t,e){return new ce(t,2,e,W.min(),W.min(),ae.empty(),0)}static newUnknownDocument(t,e){return new ce(t,3,e,W.min(),W.min(),ae.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(W.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ae.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ae.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ce&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class he{constructor(t,e){this.position=t,this.inclusive=e}}function le(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?tt.comparator(tt.fromName(o.referenceValue),n.key):Ht(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function de(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kt(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class fe{constructor(t,e="asc"){this.field=t,this.dir=e}}function ge(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class pe{}class me extends pe{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Ce(t,e,n):"array-contains"===e?new De(t,n):"in"===e?new ke(t,n):"not-in"===e?new Ne(t,n):"array-contains-any"===e?new Re(t,n):new me(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Se(t,n):new Ie(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Ht(e,this.value)):null!==e&&$t(this.value)===$t(e)&&this.matchesComparison(Ht(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return N()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ye extends pe{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new ye(t,e)}matches(t){return ve(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ve(t){return"and"===t.op}function we(t){return _e(t)&&ve(t)}function _e(t){for(const e of t.filters)if(e instanceof ye)return!1;return!0}function be(t){if(t instanceof me)return t.field.canonicalString()+t.op.toString()+Xt(t.value);if(we(t))return t.filters.map((t=>be(t))).join(",");{const e=t.filters.map((t=>be(t))).join(",");return`${t.op}(${e})`}}function Ee(t,e){return t instanceof me?function(t,e){return e instanceof me&&t.op===e.op&&t.field.isEqual(e.field)&&Kt(t.value,e.value)}(t,e):t instanceof ye?function(t,e){return e instanceof ye&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&Ee(n,e.filters[r])),!0)}(t,e):void N()}function Te(t){return t instanceof me?function(t){return`${t.field.canonicalString()} ${t.op} ${Xt(t.value)}`}(t):t instanceof ye?function(t){return t.op.toString()+" {"+t.getFilters().map(Te).join(" ,")+"}"}(t):"Filter"}class Ce extends me{constructor(t,e,n){super(t,e,n),this.key=tt.fromName(n.referenceValue)}matches(t){const e=tt.comparator(t.key,this.key);return this.matchesComparison(e)}}class Se extends me{constructor(t,e){super(t,"in",e),this.keys=Ae("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Ie extends me{constructor(t,e){super(t,"not-in",e),this.keys=Ae("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ae(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>tt.fromName(t.referenceValue)))}class De extends me{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return te(e)&&Gt(e.arrayValue,this.value)}}class ke extends me{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Gt(this.value.arrayValue,e)}}class Ne extends me{constructor(t,e){super(t,"not-in",e)}matches(t){if(Gt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Gt(this.value.arrayValue,e)}}class Re extends me{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!te(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Gt(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class xe{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ue=null}}function Le(t,e=null,n=[],r=[],s=null,i=null,o=null){return new xe(t,e,n,r,s,i,o)}function Oe(t){const e=x(t);if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>be(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),ft(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Xt(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Xt(t))).join(",")),e.ue=t}return e.ue}function Me(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ge(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ee(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!de(t.startAt,e.startAt)&&de(t.endAt,e.endAt)}function Pe(t){return tt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Ve{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Fe(t,e,n,r,s,i,o,a){return new Ve(t,e,n,r,s,i,o,a)}function Ue(t){return new Ve(t)}function Be(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function je(t){return null!==t.collectionGroup}function qe(t){const e=x(t);if(null===e.ce){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new kt(Z.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);r.forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.ce.push(new fe(r,n))})),t.has(Z.keyField().canonicalString())||e.ce.push(new fe(Z.keyField(),n))}return e.ce}function ze(t){const e=x(t);return e.le||(e.le=$e(e,qe(t))),e.le}function $e(t,e){if("F"===t.limitType)return Le(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new fe(t.field,e)}));const n=t.endAt?new he(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new he(t.startAt.position,t.startAt.inclusive):null;return Le(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ke(t,e,n){return new Ve(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ge(t,e){return Me(ze(t),ze(e))&&t.limitType===e.limitType}function He(t){return`${Oe(ze(t))}|lt:${t.limitType}`}function Qe(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Te(t))).join(", ")}]`),ft(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Xt(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Xt(t))).join(",")),`Target(${e})`}(ze(t))}; limitType=${t.limitType})`}function We(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):tt.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of qe(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=le(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,qe(t),e))&&!(t.endAt&&!function(t,e,n){const r=le(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,qe(t),e))}(t,e)}function Xe(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ye(t){return(e,n)=>{let r=!1;for(const s of qe(t)){const t=Je(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function Je(t,e,n){const r=t.field.isKeyField()?tt.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?Ht(r,s):N()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return N()}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ze{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Ct(this.inner,((e,n)=>{for(const[r,s]of n)t(r,s)}))}isEmpty(){return St(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */const tn=new It(tt.comparator);function en(){return tn}const nn=new It(tt.comparator);function rn(...t){let e=nn;for(const n of t)e=e.insert(n.key,n);return e}function sn(t){let e=nn;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function on(){return un()}function an(){return un()}function un(){return new Ze((t=>t.toString()),((t,e)=>t.isEqual(e)))}const cn=new It(tt.comparator),hn=new kt(tt.comparator);function ln(...t){let e=hn;for(const n of t)e=e.add(n);return e}const dn=new kt(G);function fn(){return dn}
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
 */function gn(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gt(e)?"-0":e}}function pn(t){return{integerValue:""+t}}function mn(t,e){return pt(e)?pn(e):gn(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class yn{constructor(){this._=void 0}}function vn(t,e,n){return t instanceof bn?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Ft(e)&&(e=Ut(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof En?Tn(t,e):t instanceof Cn?Sn(t,e):function(t,e){const n=_n(t,e),r=An(n)+An(t.Pe);return Zt(n)&&Zt(t.Pe)?pn(r):gn(t.serializer,r)}(t,e)}function wn(t,e,n){return t instanceof En?Tn(t,e):t instanceof Cn?Sn(t,e):n}function _n(t,e){return t instanceof In?function(t){return Zt(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class bn extends yn{}class En extends yn{constructor(t){super(),this.elements=t}}function Tn(t,e){const n=Dn(e);for(const r of t.elements)n.some((t=>Kt(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Cn extends yn{constructor(t){super(),this.elements=t}}function Sn(t,e){let n=Dn(e);for(const r of t.elements)n=n.filter((t=>!Kt(t,r)));return{arrayValue:{values:n}}}class In extends yn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function An(t){return Pt(t.integerValue||t.doubleValue)}function Dn(t){return te(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class kn{constructor(t,e){this.field=t,this.transform=e}}function Nn(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof En&&e instanceof En||t instanceof Cn&&e instanceof Cn?H(t.elements,e.elements,Kt):t instanceof In&&e instanceof In?Kt(t.Pe,e.Pe):t instanceof bn&&e instanceof bn}(t.transform,e.transform)}class Rn{constructor(t,e){this.version=t,this.transformResults=e}}class xn{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new xn}static exists(t){return new xn(void 0,t)}static updateTime(t){return new xn(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ln(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class On{}function Mn(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Kn(t.key,xn.none()):new Bn(t.key,t.data,xn.none());{const n=t.data,r=ae.empty();let s=new kt(Z.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),s=s.add(t)}return new jn(t.key,r,new Rt(s.toArray()),xn.none())}}function Pn(t,e,n){t instanceof Bn?function(t,e,n){const r=t.value.clone(),s=zn(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof jn?function(t,e,n){if(!Ln(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=zn(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(qn(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Vn(t,e,n,r){return t instanceof Bn?function(t,e,n,r){if(!Ln(t.precondition,e))return n;const s=t.value.clone(),i=$n(t.fieldTransforms,r,e);return s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,r):t instanceof jn?function(t,e,n,r){if(!Ln(t.precondition,e))return n;const s=$n(t.fieldTransforms,r,e),i=e.data;return i.setAll(qn(t)),i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return Ln(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Fn(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=_n(r.transform,t||null);null!=s&&(null===n&&(n=ae.empty()),n.set(r.field,s))}return n||null}function Un(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&H(t,e,((t,e)=>Nn(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Bn extends On{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class jn extends On{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function qn(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function zn(t,e,n){const r=new Map;R(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,wn(o,a,n[s]))}return r}function $n(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,vn(t,i,e))}return r}class Kn extends On{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Gn extends On{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Hn{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Pn(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Vn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Vn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=an();return this.mutations.forEach((r=>{const s=t.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=e.has(r.key)?null:o;const a=Mn(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(W.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),ln())}isEqual(t){return this.batchId===t.batchId&&H(this.mutations,t.mutations,((t,e)=>Un(t,e)))&&H(this.baseMutations,t.baseMutations,((t,e)=>Un(t,e)))}}class Qn{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){R(t.mutations.length===n.length);let r=function(){return cn}();const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new Qn(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Wn{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 * Copyright 2017 Google LLC
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
class Xn{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */var Yn,Jn;function Zn(t){switch(t){default:return N();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function tr(t){if(void 0===t)return A("GRPC error has no .code"),L.UNKNOWN;switch(t){case Yn.OK:return L.OK;case Yn.CANCELLED:return L.CANCELLED;case Yn.UNKNOWN:return L.UNKNOWN;case Yn.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Yn.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Yn.INTERNAL:return L.INTERNAL;case Yn.UNAVAILABLE:return L.UNAVAILABLE;case Yn.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Yn.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Yn.NOT_FOUND:return L.NOT_FOUND;case Yn.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Yn.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Yn.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Yn.ABORTED:return L.ABORTED;case Yn.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Yn.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Yn.DATA_LOSS:return L.DATA_LOSS;default:return N()}}(Jn=Yn||(Yn={}))[Jn.OK=0]="OK",Jn[Jn.CANCELLED=1]="CANCELLED",Jn[Jn.UNKNOWN=2]="UNKNOWN",Jn[Jn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Jn[Jn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Jn[Jn.NOT_FOUND=5]="NOT_FOUND",Jn[Jn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Jn[Jn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Jn[Jn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Jn[Jn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Jn[Jn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Jn[Jn.ABORTED=10]="ABORTED",Jn[Jn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Jn[Jn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Jn[Jn.INTERNAL=13]="INTERNAL",Jn[Jn.UNAVAILABLE=14]="UNAVAILABLE",Jn[Jn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
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
let er=null;
/**
 * @license
 * Copyright 2023 Google LLC
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
 */function nr(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */const rr=new r([4294967295,4294967295],0);function sr(t){const e=nr().encode(t),n=new s;return n.update(e),new Uint8Array(n.digest())}function ir(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new r([n,s],0),new r([i,o],0)]}class or{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new ar(`Invalid padding: ${e}`);if(n<0)throw new ar(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new ar(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new ar(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ie=r.fromNumber(this.Te)}Ee(t,e,n){let s=t.add(e.multiply(r.fromNumber(n)));return 1===s.compare(rr)&&(s=new r([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Te)return!1;const e=sr(t),[n,r]=ir(e);for(let s=0;s<this.hashCount;s++){const t=this.Ee(n,r,s);if(!this.de(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),i=new or(s,r,e);return n.forEach((t=>i.insert(t))),i}insert(t){if(0===this.Te)return;const e=sr(t),[n,r]=ir(e);for(let s=0;s<this.hashCount;s++){const t=this.Ee(n,r,s);this.Ae(t)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class ar extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ur{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,cr.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new ur(W.min(),r,new It(G),en(),ln())}}class cr{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new cr(n,e,ln(),ln(),ln())}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class hr{constructor(t,e,n,r){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=r}}class lr{constructor(t,e){this.targetId=t,this.me=e}}class dr{constructor(t,e,n=Lt.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class fr{constructor(){this.fe=0,this.ge=mr(),this.pe=Lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=ln(),e=ln(),n=ln();return this.ge.forEach(((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:N()}})),new cr(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=mr()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,R(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class gr{constructor(t){this.Le=t,this.Be=new Map,this.ke=en(),this.qe=pr(),this.Qe=pr(),this.Ke=new It(G)}$e(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.Ue(e,t.Ve):this.We(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.We(e,t.key,t.Ve)}Ge(t){this.forEachTarget(t,(e=>{const n=this.ze(e);switch(t.state){case 0:this.je(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.je(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),n.De(t.resumeToken));break;default:N()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach(((t,n)=>{this.je(n)&&e(n)}))}Je(t){const e=t.targetId,n=t.me.count,r=this.Ye(e);if(r){const s=r.target;if(Pe(s))if(0===n){const t=new tt(s.path);this.We(e,t,ce.newNoDocument(t,W.min()))}else R(1===n);else{const r=this.Ze(e);if(r!==n){const n=this.Xe(t),s=n?this.et(n,t,r):1;if(0!==s){this.He(e);const t=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,t)}null==er||er.tt(function(t,e,n,r,s){var i,o,a,u,c,h;const l={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},d=e.unchangedNames;return d&&(l.bloomFilter={applied:0===s,hashCount:null!==(i=null==d?void 0:d.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(u=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==u?u:0,padding:null!==(h=null===(c=null==d?void 0:d.bits)||void 0===c?void 0:c.padding)&&void 0!==h?h:0,mightContain:t=>{var e;return null!==(e=null==r?void 0:r.mightContain(t))&&void 0!==e&&e}}),l}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */(r,t.me,this.Le.nt(),n,s))}}}}Xe(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=e;let i,o;try{i=Vt(n).toUint8Array()}catch(t){if(t instanceof xt)return D("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new or(i,r,s)}catch(t){return D(t instanceof ar?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.Te?null:o}et(t,e,n){return e.me.count===n-this.rt(t,e.targetId)?0:2}rt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const s=this.Le.nt(),i=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;t.mightContain(i)||(this.We(e,n,null),r++)})),r}it(t){const e=new Map;this.Be.forEach(((n,r)=>{const s=this.Ye(r);if(s){if(n.current&&Pe(s.target)){const e=new tt(s.target.path);this.st(e).has(r)||this.ot(r,e)||this.We(r,e,ce.newNoDocument(e,t))}n.be&&(e.set(r,n.ve()),n.Ce())}}));let n=ln();this.Qe.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Ye(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.ke.forEach(((e,n)=>n.setReadTime(t)));const r=new ur(t,e,this.Ke,this.ke,n);return this.ke=en(),this.qe=pr(),this.Qe=pr(),this.Ke=new It(G),r}Ue(t,e){if(!this.je(t))return;const n=this.ot(t,e.key)?2:0;this.ze(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t)),this.Qe=this.Qe.insert(e.key,this._t(e.key).add(t))}We(t,e,n){if(!this.je(t))return;const r=this.ze(t);this.ot(t,e)?r.Fe(e,1):r.Me(e),this.Qe=this.Qe.insert(e,this._t(e).delete(t)),this.Qe=this.Qe.insert(e,this._t(e).add(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.ze(t).xe()}ze(t){let e=this.Be.get(t);return e||(e=new fr,this.Be.set(t,e)),e}_t(t){let e=this.Qe.get(t);return e||(e=new kt(G),this.Qe=this.Qe.insert(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new kt(G),this.qe=this.qe.insert(t,e)),e}je(t){const e=null!==this.Ye(t);return e||I("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ut(t)}He(t){this.Be.set(t,new fr),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.We(t,e,null)}))}ot(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function pr(){return new It(tt.comparator)}function mr(){return new It(tt.comparator)}const yr=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),vr=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),wr=(()=>{const t={and:"AND",or:"OR"};return t})();class _r{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function br(t,e){return t.useProto3Json||ft(e)?e:{value:e}}function Er(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tr(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Cr(t,e){return Er(t,e.toTimestamp())}function Sr(t){return R(!!t),W.fromTimestamp(function(t){const e=Mt(t);return new Q(e.seconds,e.nanos)}(t))}function Ir(t,e){return Ar(t,e).canonicalString()}function Ar(t,e){const n=function(t){return new Y(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function Dr(t){const e=Y.fromString(t);return R(Yr(e)),e}function kr(t,e){return Ir(t.databaseId,e.path)}function Nr(t,e){const n=Dr(e);if(n.get(1)!==t.databaseId.projectId)throw new O(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new O(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new tt(Or(n))}function Rr(t,e){return Ir(t.databaseId,e)}function xr(t){const e=Dr(t);return 4===e.length?Y.emptyPath():Or(e)}function Lr(t){return new Y(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Or(t){return R(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Mr(t,e,n){return{name:kr(t,e),fields:n.value.mapValue.fields}}function Pr(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:N()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(t,e){return t.useProto3Json?(R(void 0===e||"string"==typeof e),Lt.fromBase64String(e||"")):(R(void 0===e||e instanceof Buffer||e instanceof Uint8Array),Lt.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?L.UNKNOWN:tr(t.code);return new O(e,t.message||"")}(o);n=new dr(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Nr(t,r.document.name),i=Sr(r.document.updateTime),o=r.document.createTime?Sr(r.document.createTime):W.min(),a=new ae({mapValue:{fields:r.document.fields}}),u=ce.newFoundDocument(s,i,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new hr(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Nr(t,r.document),i=r.readTime?Sr(r.readTime):W.min(),o=ce.newNoDocument(s,i),a=r.removedTargetIds||[];n=new hr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Nr(t,r.document),i=r.removedTargetIds||[];n=new hr([],i,s,null)}else{if(!("filter"in e))return N();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:s}=t,i=new Xn(r,s),o=t.targetId;n=new lr(o,i)}}return n}function Vr(t,e){let n;if(e instanceof Bn)n={update:Mr(t,e.key,e.value)};else if(e instanceof Kn)n={delete:kr(t,e.key)};else if(e instanceof jn)n={update:Mr(t,e.key,e.data),updateMask:Xr(e.fieldMask)};else{if(!(e instanceof Gn))return N();n={verify:kr(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof bn)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof En)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Cn)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof In)return{fieldPath:e.field.canonicalString(),increment:n.Pe};throw N()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Cr(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:N()}(t,e.precondition)),n}function Fr(t,e){return t&&t.length>0?(R(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Sr(t.updateTime):Sr(e);return n.isEqual(W.min())&&(n=Sr(e)),new Rn(n,t.transformResults||[])}(t,e)))):[]}function Ur(t,e){return{documents:[Rr(t,e.path)]}}function Br(t,e){const n={structuredQuery:{}},r=e.path;let s;null!==e.collectionGroup?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Rr(t,s);const i=function(t){if(0!==t.length)return Wr(ye.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Hr(t.field),direction:$r(t.dir)}}(t)))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=br(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{ct:n,parent:s}}function jr(t){let e=xr(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){R(1===r);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=function(t){const e=zr(t);return e instanceof ye&&we(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new fe(Qr(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,ft(e)?null:e}(n.limit));let u=null;n.startAt&&(u=function(t){const e=!!t.before,n=t.values||[];return new he(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new he(n,e)}(n.endAt)),Fe(e,s,o,i,a,"F",u,c)}function qr(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return N()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function zr(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Qr(t.unaryFilter.field);return me.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Qr(t.unaryFilter.field);return me.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Qr(t.unaryFilter.field);return me.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Qr(t.unaryFilter.field);return me.create(s,"!=",{nullValue:"NULL_VALUE"});default:return N()}}(t):void 0!==t.fieldFilter?function(t){return me.create(Qr(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return N()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return ye.create(t.compositeFilter.filters.map((t=>zr(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return N()}}(t.compositeFilter.op))}(t):N()}function $r(t){return yr[t]}function Kr(t){return vr[t]}function Gr(t){return wr[t]}function Hr(t){return{fieldPath:t.canonicalString()}}function Qr(t){return Z.fromServerFormat(t.fieldPath)}function Wr(t){return t instanceof me?function(t){if("=="===t.op){if(ne(t.value))return{unaryFilter:{field:Hr(t.field),op:"IS_NAN"}};if(ee(t.value))return{unaryFilter:{field:Hr(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ne(t.value))return{unaryFilter:{field:Hr(t.field),op:"IS_NOT_NAN"}};if(ee(t.value))return{unaryFilter:{field:Hr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hr(t.field),op:Kr(t.op),value:t.value}}}(t):t instanceof ye?function(t){const e=t.getFilters().map((t=>Wr(t)));return 1===e.length?e[0]:{compositeFilter:{op:Gr(t.op),filters:e}}}(t):N()}function Xr(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Yr(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Jr{constructor(t,e,n,r,s=W.min(),i=W.min(),o=Lt.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Jr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Zr{constructor(t){this.ht=t}}function ts(t){const e=jr({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ke(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */class es{constructor(){}Et(t,e){this.dt(t,e),e.At()}dt(t,e){if("nullValue"in t)this.Rt(e,5);else if("booleanValue"in t)this.Rt(e,10),e.Vt(t.booleanValue?1:0);else if("integerValue"in t)this.Rt(e,15),e.Vt(Pt(t.integerValue));else if("doubleValue"in t){const n=Pt(t.doubleValue);isNaN(n)?this.Rt(e,13):(this.Rt(e,15),gt(n)?e.Vt(0):e.Vt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Rt(e,20),"string"==typeof n&&(n=Mt(n)),e.ft(`${n.seconds||""}`),e.Vt(n.nanos||0)}else if("stringValue"in t)this.gt(t.stringValue,e),this.yt(e);else if("bytesValue"in t)this.Rt(e,30),e.wt(Vt(t.bytesValue)),this.yt(e);else if("referenceValue"in t)this.St(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Rt(e,45),e.Vt(n.latitude||0),e.Vt(n.longitude||0)}else"mapValue"in t?oe(t)?this.Rt(e,Number.MAX_SAFE_INTEGER):se(t)?this.bt(t.mapValue,e):(this.Dt(t.mapValue,e),this.yt(e)):"arrayValue"in t?(this.vt(t.arrayValue,e),this.yt(e)):N()}gt(t,e){this.Rt(e,25),this.Ct(t,e)}Ct(t,e){e.ft(t)}Dt(t,e){const n=t.fields||{};this.Rt(e,55);for(const r of Object.keys(n))this.gt(r,e),this.dt(n[r],e)}bt(t,e){var n,r;const s=t.fields||{};this.Rt(e,53);const i="value",o=(null===(r=null===(n=s[i].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.Rt(e,15),e.Vt(Pt(o)),this.gt(i,e),this.dt(s[i],e)}vt(t,e){const n=t.values||[];this.Rt(e,50);for(const r of n)this.dt(r,e)}St(t,e){this.Rt(e,37),tt.fromName(t).path.forEach((t=>{this.Rt(e,60),this.Ct(t,e)}))}Rt(t,e){t.Vt(e)}yt(t){t.Vt(2)}}es.Ft=new es;
/**
 * @license
 * Copyright 2019 Google LLC
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
class ns{constructor(){this.ln=new rs}addToCollectionParentIndex(t,e){return this.ln.add(e),ct.resolve()}getCollectionParents(t,e){return ct.resolve(this.ln.getEntries(e))}addFieldIndex(t,e){return ct.resolve()}deleteFieldIndex(t,e){return ct.resolve()}deleteAllFieldIndexes(t){return ct.resolve()}createTargetIndexes(t,e){return ct.resolve()}getDocumentsMatchingTarget(t,e){return ct.resolve(null)}getIndexType(t,e){return ct.resolve(0)}getFieldIndexes(t,e){return ct.resolve([])}getNextCollectionGroupToUpdate(t){return ct.resolve(null)}getMinOffset(t,e){return ct.resolve(st.min())}getMinOffsetFromCollectionGroup(t,e){return ct.resolve(st.min())}updateCollectionGroup(t,e,n){return ct.resolve()}updateIndexEntries(t,e){return ct.resolve()}}class rs{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new kt(Y.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new kt(Y.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */new Uint8Array(0);
/**
 * @license
 * Copyright 2018 Google LLC
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
const ss={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class is{static withCacheSize(t){return new is(t,is.DEFAULT_COLLECTION_PERCENTILE,is.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
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
 * Copyright 2017 Google LLC
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
 */is.DEFAULT_COLLECTION_PERCENTILE=10,is.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,is.DEFAULT=new is(41943040,is.DEFAULT_COLLECTION_PERCENTILE,is.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),is.DISABLED=new is(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
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
class os{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new os(0)}static Qn(){return new os(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
function as([t,e],[n,r]){const s=G(t,n);return 0===s?G(e,r):s}class us{constructor(t){this.Gn=t,this.buffer=new kt(as),this.zn=0}jn(){return++this.zn}Hn(t){const e=[t,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();as(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class cs{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Jn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return null!==this.Jn}Yn(t){I("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){lt(t)?I("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await ut(t)}await this.Yn(3e5)}))}}class hs{constructor(t,e){this.Zn=t,this.params=e}calculateTargetCount(t,e){return this.Zn.Xn(t).next((t=>Math.floor(e/100*t)))}nthSequenceNumber(t,e){if(0===e)return ct.resolve(dt.oe);const n=new us(e);return this.Zn.forEachTarget(t,(t=>n.Hn(t.sequenceNumber))).next((()=>this.Zn.er(t,(t=>n.Hn(t))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.Zn.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Zn.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(I("LruGarbageCollector","Garbage collection skipped; disabled"),ct.resolve(ss)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(I("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ss):this.tr(t,e)))}getCacheSize(t){return this.Zn.getCacheSize(t)}tr(t,e){let n,r,s,i,o,u,c;const h=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((e=>(e>this.params.maximumSequenceNumbersToCollect?(I("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,i=Date.now(),this.nthSequenceNumber(t,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(t,n,e)))).next((e=>(s=e,u=Date.now(),this.removeOrphanedDocuments(t,n)))).next((t=>(c=Date.now(),S()<=a.$b.DEBUG&&I("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-h}ms\n\tDetermined least recently used ${r} in `+(o-i)+"ms\n"+`\tRemoved ${s} targets in `+(u-o)+"ms\n"+`\tRemoved ${t} documents in `+(c-u)+"ms\n"+`Total Duration: ${c-h}ms`),ct.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:t}))))}}function ls(t,e){return new hs(t,e)}
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
 * Copyright 2017 Google LLC
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
class ds{constructor(){this.changes=new Ze((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ce.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ct.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 * Copyright 2017 Google LLC
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
 * Copyright 2022 Google LLC
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
class fs{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class gs{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Vn(n.mutation,t,Rt.empty(),Q.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,ln()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=ln()){const r=on();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=rn();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=on();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,ln())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let s=en();const i=un(),o=function(){return un()}();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof jn)?s=s.insert(e.key,e):void 0!==o?(i.set(e.key,o.mutation.getFieldMask()),Vn(o.mutation,e,o.mutation.getFieldMask(),Q.now())):i.set(e.key,Rt.empty())})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new fs(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=un();let r=new It(((t,e)=>t-e)),s=ln();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||Rt.empty();o=s.applyToLocalView(i,o),n.set(t,o);const a=(r.get(s.batchId)||ln()).add(t);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,u=r.value,c=an();u.forEach((t=>{if(!s.has(t)){const r=Mn(e.get(t),n.get(t));null!==r&&c.set(t,r),s=s.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,c))}return ct.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return function(t){return tt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):je(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):ct.resolve(on());let o=-1,a=s;return i.next((e=>ct.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?ct.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,ln()))).next((t=>({batchId:o,changes:sn(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new tt(e)).next((t=>{let e=rn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const s=e.collectionGroup;let i=rn();return this.indexManager.getCollectionParents(t,s).next((o=>ct.forEach(o,(o=>{const a=function(t,e){return new Ve(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(s));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s,r)))).next((t=>{s.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,ce.newInvalidDocument(r)))}));let n=rn();return t.forEach(((t,r)=>{const i=s.get(t);void 0!==i&&Vn(i.mutation,r,Rt.empty(),Q.now()),We(e,r)&&(n=n.insert(t,r))})),n}))}}
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
 */class ps{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,e){return ct.resolve(this.Tr.get(e))}saveBundleMetadata(t,e){return this.Tr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Sr(t.createTime)}}(e)),ct.resolve()}getNamedQuery(t,e){return ct.resolve(this.Ir.get(e))}saveNamedQuery(t,e){return this.Ir.set(e.name,function(t){return{name:t.name,query:ts(t.bundledQuery),readTime:Sr(t.readTime)}}(e)),ct.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class ms{constructor(){this.overlays=new It(tt.comparator),this.Er=new Map}getOverlay(t,e){return ct.resolve(this.overlays.get(e))}getOverlays(t,e){const n=on();return ct.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.Tt(t,e,r)})),ct.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Er.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Er.delete(n)),ct.resolve()}getOverlaysForCollection(t,e,n){const r=on(),s=e.length+1,i=new tt(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return ct.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new It(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=on(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=on(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return ct.resolve(o)}Tt(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Er.get(r.largestBatchId).delete(n.key);this.Er.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Wn(e,n));let s=this.Er.get(e);void 0===s&&(s=ln(),this.Er.set(e,s)),this.Er.set(e,s.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ys{constructor(){this.sessionToken=Lt.EMPTY_BYTE_STRING}getSessionToken(t){return ct.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,ct.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class vs{constructor(){this.dr=new kt(ws.Ar),this.Rr=new kt(ws.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(t,e){const n=new ws(t,e);this.dr=this.dr.add(n),this.Rr=this.Rr.add(n)}mr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.gr(new ws(t,e))}pr(t,e){t.forEach((t=>this.removeReference(t,e)))}yr(t){const e=new tt(new Y([])),n=new ws(e,t),r=new ws(e,t+1),s=[];return this.Rr.forEachInRange([n,r],(t=>{this.gr(t),s.push(t.key)})),s}wr(){this.dr.forEach((t=>this.gr(t)))}gr(t){this.dr=this.dr.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const e=new tt(new Y([])),n=new ws(e,t),r=new ws(e,t+1);let s=ln();return this.Rr.forEachInRange([n,r],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new ws(t,0),n=this.dr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ws{constructor(t,e){this.key=t,this.br=e}static Ar(t,e){return tt.comparator(t.key,e.key)||G(t.br,e.br)}static Vr(t,e){return G(t.br,e.br)||tt.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class _s{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Dr=1,this.vr=new kt(ws.Ar)}checkEmpty(t){return ct.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Hn(s,e,n,r);this.mutationQueue.push(i);for(const o of r)this.vr=this.vr.add(new ws(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return ct.resolve(i)}lookupMutationBatch(t,e){return ct.resolve(this.Cr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Fr(n),s=r<0?0:r;return ct.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return ct.resolve(0===this.mutationQueue.length?-1:this.Dr-1)}getAllMutationBatches(t){return ct.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ws(e,0),r=new ws(e,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([n,r],(t=>{const e=this.Cr(t.br);s.push(e)})),ct.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new kt(G);return e.forEach((t=>{const e=new ws(t,0),r=new ws(t,Number.POSITIVE_INFINITY);this.vr.forEachInRange([e,r],(t=>{n=n.add(t.br)}))})),ct.resolve(this.Mr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;tt.isDocumentKey(s)||(s=s.child(""));const i=new ws(new tt(s),0);let o=new kt(G);return this.vr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.br)),!0)}),i),ct.resolve(this.Mr(o))}Mr(t){const e=[];return t.forEach((t=>{const n=this.Cr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){R(0===this.Or(e.batchId,"removed")),this.mutationQueue.shift();let n=this.vr;return ct.forEach(e.mutations,(r=>{const s=new ws(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.vr=n}))}Ln(t){}containsKey(t,e){const n=new ws(e,0),r=this.vr.firstAfterOrEqual(n);return ct.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,ct.resolve()}Or(t,e){return this.Fr(t)}Fr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Cr(t){const e=this.Fr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class bs{constructor(t){this.Nr=t,this.docs=function(){return new It(tt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.Nr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ct.resolve(n?n.document.mutableCopy():ce.newInvalidDocument(e))}getEntries(t,e){let n=en();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ce.newInvalidDocument(t))})),ct.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let s=en();const i=e.path,o=new tt(i.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!i.isPrefixOf(t.path))break;t.path.length>i.length+1||it(rt(o),n)<=0||(r.has(o.key)||We(e,o))&&(s=s.insert(o.key,o.mutableCopy()))}return ct.resolve(s)}getAllFromCollectionGroup(t,e,n,r){N()}Lr(t,e){return ct.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Es(this)}getSize(t){return ct.resolve(this.size)}}class Es extends ds{constructor(t){super(),this.hr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.hr.addEntry(t,r)):this.hr.removeEntry(n)})),ct.waitFor(e)}getFromCache(t,e){return this.hr.getEntry(t,e)}getAllFromCache(t,e){return this.hr.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ts{constructor(t){this.persistence=t,this.Br=new Ze((t=>Oe(t)),Me),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.kr=0,this.qr=new vs,this.targetCount=0,this.Qr=os.qn()}forEachTarget(t,e){return this.Br.forEach(((t,n)=>e(n))),ct.resolve()}getLastRemoteSnapshotVersion(t){return ct.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ct.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),ct.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.kr&&(this.kr=e),ct.resolve()}Un(t){this.Br.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Qr=new os(e),this.highestTargetId=e),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,e){return this.Un(e),this.targetCount+=1,ct.resolve()}updateTargetData(t,e){return this.Un(e),ct.resolve()}removeTargetData(t,e){return this.Br.delete(e.target),this.qr.yr(e.targetId),this.targetCount-=1,ct.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Br.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Br.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),ct.waitFor(s).next((()=>r))}getTargetCount(t){return ct.resolve(this.targetCount)}getTargetData(t,e){const n=this.Br.get(e)||null;return ct.resolve(n)}addMatchingKeys(t,e,n){return this.qr.mr(e,n),ct.resolve()}removeMatchingKeys(t,e,n){this.qr.pr(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach((e=>{s.push(r.markPotentiallyOrphaned(t,e))})),ct.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.qr.yr(e),ct.resolve()}getMatchingKeysForTargetId(t,e){const n=this.qr.Sr(e);return ct.resolve(n)}containsKey(t,e){return ct.resolve(this.qr.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Cs{constructor(t,e){this.Kr={},this.overlays={},this.$r=new dt(0),this.Ur=!1,this.Ur=!0,this.Wr=new ys,this.referenceDelegate=t(this),this.Gr=new Ts(this),this.indexManager=new ns,this.remoteDocumentCache=function(t){return new bs(t)}((t=>this.referenceDelegate.zr(t))),this.serializer=new Zr(e),this.jr=new ps(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ms,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Kr[t.toKey()];return n||(n=new _s(e,this.referenceDelegate),this.Kr[t.toKey()]=n),n}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,e,n){I("MemoryPersistence","Starting transaction:",t);const r=new Ss(this.$r.next());return this.referenceDelegate.Hr(),n(r).next((t=>this.referenceDelegate.Jr(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Yr(t,e){return ct.or(Object.values(this.Kr).map((n=>()=>n.containsKey(t,e))))}}class Ss extends at{constructor(t){super(),this.currentSequenceNumber=t}}class Is{constructor(t){this.persistence=t,this.Zr=new vs,this.Xr=null}static ei(t){return new Is(t)}get ti(){if(this.Xr)return this.Xr;throw N()}addReference(t,e,n){return this.Zr.addReference(n,e),this.ti.delete(n.toString()),ct.resolve()}removeReference(t,e,n){return this.Zr.removeReference(n,e),this.ti.add(n.toString()),ct.resolve()}markPotentiallyOrphaned(t,e){return this.ti.add(e.toString()),ct.resolve()}removeTarget(t,e){this.Zr.yr(e.targetId).forEach((t=>this.ti.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.ti.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Hr(){this.Xr=new Set}Jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ct.forEach(this.ti,(n=>{const r=tt.fromPath(n);return this.ni(t,r).next((t=>{t||e.removeEntry(r,W.min())}))})).next((()=>(this.Xr=null,e.apply(t))))}updateLimboDocument(t,e){return this.ni(t,e).next((t=>{t?this.ti.delete(e.toString()):this.ti.add(e.toString())}))}zr(t){return 0}ni(t,e){return ct.or([()=>ct.resolve(this.Zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Yr(t,e)])}}class As{constructor(t,e){this.persistence=t,this.ri=new Ze((t=>mt(t.path)),((t,e)=>t.isEqual(e))),this.garbageCollector=ls(this,e)}static ei(t,e){return new As(t,e)}Hr(){}Jr(t){return ct.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Xn(t){const e=this.nr(t);return this.persistence.getTargetCache().getTargetCount(t).next((t=>e.next((e=>t+e))))}nr(t){let e=0;return this.er(t,(t=>{e++})).next((()=>e))}er(t,e){return ct.forEach(this.ri,((n,r)=>this.ir(t,n,r).next((t=>t?ct.resolve():e(r)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.Lr(t,(r=>this.ir(t,r,e).next((t=>{t||(n++,s.removeEntry(r,W.min()))})))).next((()=>s.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.ri.set(e,t.currentSequenceNumber),ct.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.ri.set(n,t.currentSequenceNumber),ct.resolve()}removeReference(t,e,n){return this.ri.set(n,t.currentSequenceNumber),ct.resolve()}updateLimboDocument(t,e){return this.ri.set(e,t.currentSequenceNumber),ct.resolve()}zr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Jt(t.data.value)),e}ir(t,e,n){return ct.or([()=>this.persistence.Yr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const t=this.ri.get(e);return ct.resolve(void 0!==t&&t>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}
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
 * Copyright 2017 Google LLC
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
class Ds{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Wi=n,this.Gi=r}static zi(t,e){let n=ln(),r=ln();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Ds(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class ks{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Ns{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return(0,u.nr)()?8:ht((0,u.ZQ)())>0?6:4}()}initialize(t,e){this.Zi=t,this.indexManager=e,this.ji=!0}getDocumentsMatchingQuery(t,e,n,r){const s={result:null};return this.Xi(t,e).next((t=>{s.result=t})).next((()=>{if(!s.result)return this.es(t,e,r,n).next((t=>{s.result=t}))})).next((()=>{if(s.result)return;const n=new ks;return this.ts(t,e,n).next((r=>{if(s.result=r,this.Hi)return this.ns(t,e,n,r.size)}))})).next((()=>s.result))}ns(t,e,n,r){return n.documentReadCount<this.Ji?(S()<=a.$b.DEBUG&&I("QueryEngine","SDK will not create cache indexes for query:",Qe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),ct.resolve()):(S()<=a.$b.DEBUG&&I("QueryEngine","Query:",Qe(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Yi*r?(S()<=a.$b.DEBUG&&I("QueryEngine","The SDK decides to create cache indexes for query:",Qe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ze(e))):ct.resolve())}Xi(t,e){if(Be(e))return ct.resolve(null);let n=ze(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Ke(e,null,"F"),n=ze(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const s=ln(...r);return this.Zi.getDocuments(t,s).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const i=this.rs(e,r);return this.ss(e,i,s,n.readTime)?this.Xi(t,Ke(e,null,"F")):this.os(t,i,e,n)}))))})))))}es(t,e,n,r){return Be(e)||r.isEqual(W.min())?ct.resolve(null):this.Zi.getDocuments(t,n).next((s=>{const i=this.rs(e,s);return this.ss(e,i,n,r)?ct.resolve(null):(S()<=a.$b.DEBUG&&I("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Qe(e)),this.os(t,i,e,nt(r,-1)).next((t=>t)))}))}rs(t,e){let n=new kt(Ye(t));return e.forEach(((e,r)=>{We(t,r)&&(n=n.add(r))})),n}ss(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}ts(t,e,n){return S()<=a.$b.DEBUG&&I("QueryEngine","Using full collection scan to execute query:",Qe(e)),this.Zi.getDocumentsMatchingQuery(t,e,st.min(),n)}os(t,e,n,r){return this.Zi.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */class Rs{constructor(t,e,n,r){this.persistence=t,this._s=e,this.serializer=r,this.us=new It(G),this.cs=new Ze((t=>Oe(t)),Me),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(n)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new gs(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.us)))}}function xs(t,e,n,r){return new Rs(t,e,n,r)}async function Ls(t,e){const n=x(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((s=>(r=s,n.Ps(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],i=[];let o=ln();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ts:t,removedBatchIds:s,addedBatchIds:i})))}))}))}function Os(t,e){const n=x(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),s=n.hs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=ct.resolve();return i.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);R(null!==i),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=ln();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function Ms(t){const e=x(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Gr.getLastRemoteSnapshotVersion(t)))}function Ps(t,e){const n=x(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const o=[];e.targetChanges.forEach(((i,a)=>{const u=s.get(a);if(!u)return;o.push(n.Gr.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Gr.addMatchingKeys(t,i.addedDocuments,a))));let c=u.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?c=c.withResumeToken(Lt.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):i.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(i.resumeToken,r)),s=s.insert(a,c),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(u,c,i)&&o.push(n.Gr.updateTargetData(t,c))}));let a=en(),u=ln();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(Vs(t,i,e.documentUpdates).next((t=>{a=t.Is,u=t.Es}))),!r.isEqual(W.min())){const e=n.Gr.getLastRemoteSnapshotVersion(t).next((e=>n.Gr.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return ct.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,u))).next((()=>a))})).then((t=>(n.us=s,t)))}function Vs(t,e,n){let r=ln(),s=ln();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=en();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(W.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):I("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Is:r,Es:s}}))}function Fs(t,e){const n=x(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Us(t,e){const n=x(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Gr.getTargetData(t,e).next((s=>s?(r=s,ct.resolve(r)):n.Gr.allocateTargetId(t).next((s=>(r=new Jr(e,s,"TargetPurposeListen",t.currentSequenceNumber),n.Gr.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.us.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.us=n.us.insert(t.targetId,t),n.cs.set(e,t.targetId)),t}))}async function Bs(t,e,n){const r=x(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(t=>r.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!lt(t))throw t;I("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function js(t,e,n){const r=x(t);let s=W.min(),i=ln();return r.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const r=x(t),s=r.cs.get(n);return void 0!==s?ct.resolve(r.us.get(s)):r.Gr.getTargetData(e,n)}(r,t,ze(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>r._s.getDocumentsMatchingQuery(t,e,n?s:W.min(),n?i:ln()))).next((t=>(qs(r,Xe(e),t),{documents:t,ds:i})))))}function qs(t,e,n){let r=t.ls.get(e)||W.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.ls.set(e,r)}class zs{constructor(){this.activeTargetIds=fn()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class $s{constructor(){this._o=new zs,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,e,n){this.ao[t]=e}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new zs,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Ks{uo(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Gs{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){I("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){I("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Hs=null;function Qs(){return null===Hs?Hs=function(){return 268435456+Math.round(2147483648*Math.random())}():Hs++,"0x"+Hs.toString(16)
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
 */}const Ws={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Xs{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Ys="WebChannelConnection";class Js extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Fo=e+"://"+t.host,this.Mo=`projects/${n}/databases/${r}`,this.xo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Oo(t,e,n,r,s){const i=Qs(),o=this.No(t,e.toUriEncodedString());I("RestConnection",`Sending RPC '${t}' ${i}:`,o,n);const a={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(a,r,s),this.Bo(t,o,a,n).then((e=>(I("RestConnection",`Received RPC '${t}' ${i}: `,e),e)),(e=>{throw D("RestConnection",`RPC '${t}' ${i} failed with error: `,e,"url: ",o,"request:",n),e}))}ko(t,e,n,r,s,i){return this.Oo(t,e,n,r,s)}Lo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+T}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}No(t,e){const n=Ws[t];return`${this.Fo}/v1/${e}:${n}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Bo(t,e,n,r){const s=Qs();return new Promise(((i,o)=>{const a=new l;a.setWithCredentials(!0),a.listenOnce(f.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case g.NO_ERROR:const e=a.getResponseJson();I(Ys,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(e)),i(e);break;case g.TIMEOUT:I(Ys,`RPC '${t}' ${s} timed out`),o(new O(L.DEADLINE_EXCEEDED,"Request time out"));break;case g.HTTP_ERROR:const n=a.getStatus();if(I(Ys,`RPC '${t}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(e)>=0?e:L.UNKNOWN}(e.status);o(new O(t,e.message))}else o(new O(L.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new O(L.UNAVAILABLE,"Connection failed."));break;default:N()}}finally{I(Ys,`RPC '${t}' ${s} completed.`)}}));const u=JSON.stringify(r);I(Ys,`RPC '${t}' ${s} sending request:`,r),a.send(e,"POST",u,n,15)}))}qo(t,e,n){const r=Qs(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=v(),o=y(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Lo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=s.join("");I(Ys,`Creating RPC '${t}' stream ${r}: ${c}`,a);const h=i.createWebChannel(c,a);let l=!1,f=!1;const g=new Xs({Eo:e=>{f?I(Ys,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(l||(I(Ys,`Opening RPC '${t}' stream ${r} transport.`),h.open(),l=!0),I(Ys,`RPC '${t}' stream ${r} sending:`,e),h.send(e))},Ao:()=>h.close()}),w=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return w(h,d.EventType.OPEN,(()=>{f||(I(Ys,`RPC '${t}' stream ${r} transport opened.`),g.So())})),w(h,d.EventType.CLOSE,(()=>{f||(f=!0,I(Ys,`RPC '${t}' stream ${r} transport closed`),g.Do())})),w(h,d.EventType.ERROR,(e=>{f||(f=!0,D(Ys,`RPC '${t}' stream ${r} transport errored:`,e),g.Do(new O(L.UNAVAILABLE,"The operation could not be completed")))})),w(h,d.EventType.MESSAGE,(e=>{var n;if(!f){const s=e.data[0];R(!!s);const i=s,o=(null==i?void 0:i.error)||(null===(n=i[0])||void 0===n?void 0:n.error);if(o){I(Ys,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=Yn[t];if(void 0!==e)return tr(e)}(e),s=o.message;void 0===n&&(n=L.INTERNAL,s="Unknown error status: "+e+" with message "+o.message),f=!0,g.Do(new O(n,s)),h.close()}else I(Ys,`RPC '${t}' stream ${r} received:`,s),g.vo(s)}})),w(o,m.STAT_EVENT,(e=>{e.stat===p.PROXY?I(Ys,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===p.NOPROXY&&I(Ys,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{g.bo()}),0),g}}
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
 */function Zs(){return"undefined"!=typeof document?document:null}
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
 */function ti(t){return new _r(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ei{constructor(t,e,n=1e3,r=1.5,s=6e4){this.li=t,this.timerId=e,this.Qo=n,this.Ko=r,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const e=Math.floor(this.Uo+this.Ho()),n=Math.max(0,Date.now()-this.Go),r=Math.max(0,e-n);r>0&&I("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Uo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,r,(()=>(this.Go=Date.now(),t()))),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){null!==this.Wo&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){null!==this.Wo&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ni{constructor(t,e,n,r,s,i,o,a){this.li=t,this.Yo=n,this.Zo=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new ei(t,e)}i_(){return 1===this.state||5===this.state||this.s_()}s_(){return 2===this.state||3===this.state}start(){this.n_=0,4!==this.state?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&null===this.e_&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,(()=>this.u_())))}c_(t){this.l_(),this.stream.send(t)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(t,e){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,4!==t?this.r_.reset():e&&e.code===L.RESOURCE_EXHAUSTED?(A(e.toString()),A("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):e&&e.code===L.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.P_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.po(e)}P_(){}auth(){this.state=1;const t=this.T_(this.Xo),e=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Xo===e&&this.I_(t,n)}),(e=>{t((()=>{const t=new O(L.UNKNOWN,"Fetching auth token failed: "+e.message);return this.E_(t)}))}))}I_(t,e){const n=this.T_(this.Xo);this.stream=this.d_(t,e),this.stream.Ro((()=>{n((()=>this.listener.Ro()))})),this.stream.mo((()=>{n((()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,(()=>(this.s_()&&(this.state=3),Promise.resolve()))),this.listener.mo())))})),this.stream.po((t=>{n((()=>this.E_(t)))})),this.stream.onMessage((t=>{n((()=>1==++this.n_?this.A_(t):this.onNext(t)))}))}o_(){this.state=5,this.r_.jo((async()=>{this.state=0,this.start()}))}E_(t){return I("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}T_(t){return e=>{this.li.enqueueAndForget((()=>this.Xo===t?e():(I("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ri extends ni{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.serializer=s}d_(t,e){return this.connection.qo("Listen",t,e)}A_(t){return this.onNext(t)}onNext(t){this.r_.reset();const e=Pr(this.serializer,t),n=function(t){if(!("targetChange"in t))return W.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?W.min():e.readTime?Sr(e.readTime):W.min()}(t);return this.listener.R_(e,n)}V_(t){const e={};e.database=Lr(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=Pe(r)?{documents:Ur(t,r)}:{query:Br(t,r).ct},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Tr(t,e.resumeToken);const r=br(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(W.min())>0){n.readTime=Er(t,e.snapshotVersion.toTimestamp());const r=br(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=qr(this.serializer,t);n&&(e.labels=n),this.c_(e)}m_(t){const e={};e.database=Lr(this.serializer),e.removeTarget=t,this.c_(e)}}class si extends ni{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(t,e){return this.connection.qo("Write",t,e)}A_(t){return R(!!t.streamToken),this.lastStreamToken=t.streamToken,R(!t.writeResults||0===t.writeResults.length),this.listener.p_()}onNext(t){R(!!t.streamToken),this.lastStreamToken=t.streamToken,this.r_.reset();const e=Fr(t.writeResults,t.commitTime),n=Sr(t.commitTime);return this.listener.y_(n,e)}w_(){const t={};t.database=Lr(this.serializer),this.c_(t)}g_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Vr(this.serializer,t)))};this.c_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ii extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.S_=!1}b_(){if(this.S_)throw new O(L.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,e,n,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection.Oo(t,Ar(e,n),r,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new O(L.UNKNOWN,t.toString())}))}ko(t,e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.ko(t,Ar(e,n),r,i,o,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new O(L.UNKNOWN,t.toString())}))}terminate(){this.S_=!0,this.connection.terminate()}}class oi{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){0===this.D_&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve()))))}O_(t){"Online"===this.state?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,"Online"===t&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(A(e),this.C_=!1):I("OnlineStateTracker",e)}N_(){null!==this.v_&&(this.v_.cancel(),this.v_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ai{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo((t=>{n.enqueueAndForget((async()=>{mi(this)&&(I("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=x(t);e.k_.add(4),await ci(e),e.K_.set("Unknown"),e.k_.delete(4),await ui(e)}(this))}))})),this.K_=new oi(n,r)}}async function ui(t){if(mi(t))for(const e of t.q_)await e(!0)}async function ci(t){for(const e of t.q_)await e(!1)}function hi(t,e){const n=x(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),pi(n)?gi(n):Mi(n).s_()&&di(n,e))}function li(t,e){const n=x(t),r=Mi(n);n.B_.delete(e),r.s_()&&fi(n,e),0===n.B_.size&&(r.s_()?r.a_():mi(n)&&n.K_.set("Unknown"))}function di(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Mi(t).V_(e)}function fi(t,e){t.U_.xe(e),Mi(t).m_(e)}function gi(t){t.U_=new gr({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Mi(t).start(),t.K_.F_()}function pi(t){return mi(t)&&!Mi(t).i_()&&t.B_.size>0}function mi(t){return 0===x(t).k_.size}function yi(t){t.U_=void 0}async function vi(t){t.K_.set("Online")}async function wi(t){t.B_.forEach(((e,n)=>{di(t,e)}))}async function _i(t,e){yi(t),pi(t)?(t.K_.O_(e),gi(t)):t.K_.set("Unknown")}async function bi(t,e,n){if(t.K_.set("Online"),e instanceof dr&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.B_.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.B_.delete(r),t.U_.removeTarget(r))}(t,e)}catch(n){I("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ei(t,n)}else if(e instanceof hr?t.U_.$e(e):e instanceof lr?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(W.min()))try{const e=await Ms(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.U_.it(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.B_.get(r);s&&t.B_.set(r,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.B_.get(e);if(!r)return;t.B_.set(e,r.withResumeToken(Lt.EMPTY_BYTE_STRING,r.snapshotVersion)),fi(t,e);const s=new Jr(r.target,e,n,r.sequenceNumber);di(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){I("RemoteStore","Failed to raise snapshot:",e),await Ei(t,e)}}async function Ei(t,e,n){if(!lt(e))throw e;t.k_.add(1),await ci(t),t.K_.set("Offline"),n||(n=()=>Ms(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{I("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await ui(t)}))}function Ti(t,e){return e().catch((n=>Ei(t,n,e)))}async function Ci(t){const e=x(t),n=Pi(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;Si(e);)try{const t=await Fs(e.localStore,r);if(null===t){0===e.L_.length&&n.a_();break}r=t.batchId,Ii(e,t)}catch(t){await Ei(e,t)}Ai(e)&&Di(e)}function Si(t){return mi(t)&&t.L_.length<10}function Ii(t,e){t.L_.push(e);const n=Pi(t);n.s_()&&n.f_&&n.g_(e.mutations)}function Ai(t){return mi(t)&&!Pi(t).i_()&&t.L_.length>0}function Di(t){Pi(t).start()}async function ki(t){Pi(t).w_()}async function Ni(t){const e=Pi(t);for(const n of t.L_)e.g_(n.mutations)}async function Ri(t,e,n){const r=t.L_.shift(),s=Qn.from(r,e,n);await Ti(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Ci(t)}async function xi(t,e){e&&Pi(t).f_&&await async function(t,e){if(function(t){return Zn(t)&&t!==L.ABORTED}(e.code)){const n=t.L_.shift();Pi(t).__(),await Ti(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Ci(t)}}(t,e),Ai(t)&&Di(t)}async function Li(t,e){const n=x(t);n.asyncQueue.verifyOperationInProgress(),I("RemoteStore","RemoteStore received new credentials");const r=mi(n);n.k_.add(3),await ci(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await ui(n)}async function Oi(t,e){const n=x(t);e?(n.k_.delete(2),await ui(n)):e||(n.k_.add(2),await ci(n),n.K_.set("Unknown"))}function Mi(t){return t.W_||(t.W_=function(t,e,n){const r=x(t);return r.b_(),new ri(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
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
 */}(t.datastore,t.asyncQueue,{Ro:vi.bind(null,t),mo:wi.bind(null,t),po:_i.bind(null,t),R_:bi.bind(null,t)}),t.q_.push((async e=>{e?(t.W_.__(),pi(t)?gi(t):t.K_.set("Unknown")):(await t.W_.stop(),yi(t))}))),t.W_}function Pi(t){return t.G_||(t.G_=function(t,e,n){const r=x(t);return r.b_(),new si(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:ki.bind(null,t),po:xi.bind(null,t),p_:Ni.bind(null,t),y_:Ri.bind(null,t)}),t.q_.push((async e=>{e?(t.G_.__(),await Ci(t)):(await t.G_.stop(),t.L_.length>0&&(I("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))}))),t.G_
/**
 * @license
 * Copyright 2017 Google LLC
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
 */}class Vi{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new M,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new Vi(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new O(L.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fi(t,e){if(A("AsyncQueue",`${e}: ${t}`),lt(t))return new O(L.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ui{static emptySet(t){return new Ui(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||tt.comparator(e.key,n.key):(t,e)=>tt.comparator(t.key,e.key),this.keyedMap=rn(),this.sortedSet=new It(this.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ui))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Ui;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Bi{constructor(){this.z_=new It(tt.comparator)}track(t){const e=t.doc.key,n=this.z_.get(e);n?0!==t.type&&3===n.type?this.z_=this.z_.insert(e,t):3===t.type&&1!==n.type?this.z_=this.z_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.z_=this.z_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.z_=this.z_.remove(e):1===t.type&&2===n.type?this.z_=this.z_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):N():this.z_=this.z_.insert(e,t)}j_(){const t=[];return this.z_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class ji{constructor(t,e,n,r,s,i,o,a,u){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(t,e,n,r,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new ji(t,e,Ui.emptySet(e),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ge(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class qi{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some((t=>t.Z_()))}}class zi{constructor(){this.queries=$i(),this.onlineState="Unknown",this.X_=new Set}terminate(){!function(t,e){const n=x(t),r=n.queries;n.queries=$i(),r.forEach(((t,n)=>{for(const r of n.J_)r.onError(e)}))}(this,new O(L.ABORTED,"Firestore shutting down"))}}function $i(){return new Ze((t=>He(t)),Ge)}async function Ki(t,e){const n=x(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new qi,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(t){const n=Fi(t,`Initialization of query '${Qe(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&Wi(n)}async function Gi(t,e){const n=x(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const t=i.J_.indexOf(e);t>=0&&(i.J_.splice(t,1),0===i.J_.length?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Hi(t,e){const n=x(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.J_)t.ta(s)&&(r=!0);e.H_=s}}r&&Wi(n)}function Qi(t,e,n){const r=x(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function Wi(t){t.X_.forEach((t=>{t.next()}))}var Xi,Yi;(Yi=Xi||(Xi={})).na="default",Yi.Cache="cache";class Ji{constructor(t,e,n){this.query=t,this.ra=e,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=n||{}}ta(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new ji(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ia?this.oa(t)&&(this.ra.next(t),e=!0):this._a(t,this.onlineState)&&(this.aa(t),e=!0),this.sa=t,e}onError(t){this.ra.error(t)}ea(t){this.onlineState=t;let e=!1;return this.sa&&!this.ia&&this._a(this.sa,t)&&(this.aa(this.sa),e=!0),e}_a(t,e){if(!t.fromCache)return!0;if(!this.Z_())return!0;const n="Offline"!==e;return(!this.options.ua||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}oa(t){if(t.docChanges.length>0)return!0;const e=this.sa&&this.sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}aa(t){t=ji.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ia=!0,this.ra.next(t)}Z_(){return this.options.source!==Xi.Cache}}
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
 * Copyright 2017 Google LLC
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
class Zi{constructor(t){this.key=t}}class to{constructor(t){this.key=t}}class eo{constructor(t,e){this.query=t,this.da=e,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=ln(),this.mutatedKeys=ln(),this.Va=Ye(t),this.ma=new Ui(this.Va)}get fa(){return this.da}ga(t,e){const n=e?e.pa:new Bi,r=e?e.ma:this.ma;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,u="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const c=r.get(t),h=We(this.query,e)?e:null,l=!!c&&this.mutatedKeys.has(c.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;c&&h?c.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.ya(c,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Va(h,a)>0||u&&this.Va(h,u)<0)&&(o=!0)):!c&&h?(n.track({type:0,doc:h}),f=!0):c&&!h&&(n.track({type:1,doc:c}),f=!0,(a||u)&&(o=!0)),f&&(h?(i=i.add(h),s=d?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{ma:i,pa:n,ss:o,mutatedKeys:s}}ya(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const s=this.ma;this.ma=t.ma,this.mutatedKeys=t.mutatedKeys;const i=t.pa.j_();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return N()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.Va(t.doc,e.doc))),this.wa(n),r=null!=r&&r;const o=e&&!r?this.Sa():[],a=0===this.Ra.size&&this.current&&!r?1:0,u=a!==this.Aa;return this.Aa=a,0!==i.length||u?{snapshot:new ji(this.query,t.ma,s,i,t.mutatedKeys,0===a,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),ba:o}:{ba:o}}ea(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Bi,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(t){return!this.da.has(t)&&!!this.ma.has(t)&&!this.ma.get(t).hasLocalMutations}wa(t){t&&(t.addedDocuments.forEach((t=>this.da=this.da.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.da=this.da.delete(t))),this.current=t.current)}Sa(){if(!this.current)return[];const t=this.Ra;this.Ra=ln(),this.ma.forEach((t=>{this.Da(t.key)&&(this.Ra=this.Ra.add(t.key))}));const e=[];return t.forEach((t=>{this.Ra.has(t)||e.push(new to(t))})),this.Ra.forEach((n=>{t.has(n)||e.push(new Zi(n))})),e}va(t){this.da=t.ds,this.Ra=ln();const e=this.ga(t.documents);return this.applyChanges(e,!0)}Ca(){return ji.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,0===this.Aa,this.hasCachedResults)}}class no{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class ro{constructor(t){this.key=t,this.Fa=!1}}class so{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Ma={},this.xa=new Ze((t=>He(t)),Ge),this.Oa=new Map,this.Na=new Set,this.La=new It(tt.comparator),this.Ba=new Map,this.ka=new vs,this.qa={},this.Qa=new Map,this.Ka=os.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return!0===this.$a}}async function io(t,e,n=!0){const r=Do(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await ao(r,e,n,!0),s}async function oo(t,e){const n=Do(t);await ao(n,e,!0,!1)}async function ao(t,e,n,r){const s=await Us(t.localStore,ze(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await uo(t,e,i,"current"===o,s.resumeToken)),t.isPrimaryClient&&n&&hi(t.remoteStore,s),a}async function uo(t,e,n,r,s){t.Ua=(e,n,r)=>async function(t,e,n,r){let s=e.view.ga(n);s.ss&&(s=await js(t.localStore,e.query,!1).then((({documents:t})=>e.view.ga(t,s))));const i=r&&r.targetChanges.get(e.targetId),o=r&&null!=r.targetMismatches.get(e.targetId),a=e.view.applyChanges(s,t.isPrimaryClient,i,o);return Eo(t,e.targetId,a.ba),a.snapshot}(t,e,n,r);const i=await js(t.localStore,e,!0),o=new eo(e,i.ds),a=o.ga(i.documents),u=cr.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,s),c=o.applyChanges(a,t.isPrimaryClient,u);Eo(t,n,c.ba);const h=new no(e,n,o);return t.xa.set(e,h),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),c.snapshot}async function co(t,e,n){const r=x(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter((t=>!Ge(t,e)))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Bs(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&li(r.remoteStore,s.targetId),_o(r,s.targetId)})).catch(ut)):(_o(r,s.targetId),await Bs(r.localStore,s.targetId,!0))}async function ho(t,e){const n=x(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&1===s.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),li(n.remoteStore,r.targetId))}async function lo(t,e,n){const r=ko(t);try{const t=await function(t,e){const n=x(t),r=Q.now(),s=e.reduce(((t,e)=>t.add(e.key)),ln());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=en(),u=ln();return n.hs.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(u=u.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{i=s;const o=[];for(const t of e){const e=Fn(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new jn(t.key,e,ue(e.value.mapValue),xn.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(i,u);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:sn(i)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.qa[t.currentUser.toKey()];r||(r=new It(G)),r=r.insert(e,n),t.qa[t.currentUser.toKey()]=r}(r,t.batchId,n),await So(r,t.changes),await Ci(r.remoteStore)}catch(t){const e=Fi(t,"Failed to persist write");n.reject(e)}}async function fo(t,e){const n=x(t);try{const t=await Ps(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Ba.get(e);r&&(R(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Fa=!0:t.modifiedDocuments.size>0?R(r.Fa):t.removedDocuments.size>0&&(R(r.Fa),r.Fa=!1))})),await So(n,t,e)}catch(t){await ut(t)}}function go(t,e,n){const r=x(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.xa.forEach(((n,r)=>{const s=r.view.ea(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=x(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const s of n.J_)s.ea(e)&&(r=!0)})),r&&Wi(n)}(r.eventManager,e),t.length&&r.Ma.R_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function po(t,e,n){const r=x(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let t=new It(tt.comparator);t=t.insert(i,ce.newNoDocument(i,W.min()));const n=ln().add(i),s=new ur(W.min(),new Map,new It(G),t,n);await fo(r,s),r.La=r.La.remove(i),r.Ba.delete(e),Co(r)}else await Bs(r.localStore,e,!1).then((()=>_o(r,e,n))).catch(ut)}async function mo(t,e){const n=x(t),r=e.batch.batchId;try{const t=await Os(n.localStore,e);wo(n,r,null),vo(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await So(n,t)}catch(t){await ut(t)}}async function yo(t,e,n){const r=x(t);try{const t=await function(t,e){const n=x(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(R(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);wo(r,e,n),vo(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await So(r,t)}catch(n){await ut(n)}}function vo(t,e){(t.Qa.get(e)||[]).forEach((t=>{t.resolve()})),t.Qa.delete(e)}function wo(t,e,n){const r=x(t);let s=r.qa[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function _o(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach((e=>{t.ka.containsKey(e)||bo(t,e)}))}function bo(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);null!==n&&(li(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),Co(t))}function Eo(t,e,n){for(const r of n)r instanceof Zi?(t.ka.addReference(r.key,e),To(t,r)):r instanceof to?(I("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||bo(t,r.key)):N()}function To(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(I("SyncEngine","New document in limbo: "+n),t.Na.add(r),Co(t))}function Co(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new tt(Y.fromString(e)),r=t.Ka.next();t.Ba.set(r,new ro(n)),t.La=t.La.insert(n,r),hi(t.remoteStore,new Jr(ze(Ue(n.path)),r,"TargetPurposeLimboResolution",dt.oe))}}async function So(t,e,n){const r=x(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach(((t,a)=>{o.push(r.Ua(a,e,n).then((t=>{var e;if((t||n)&&r.isPrimaryClient){const s=t?!t.fromCache:null===(e=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===e?void 0:e.current;r.sharedClientState.updateQueryState(a.targetId,s?"current":"not-current")}if(t){s.push(t);const e=Ds.zi(a.targetId,t);i.push(e)}})))})),await Promise.all(o),r.Ma.R_(s),await async function(t,e){const n=x(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ct.forEach(e,(e=>ct.forEach(e.Wi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>ct.forEach(e.Gi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!lt(t))throw t;I("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.us.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.us=n.us.insert(t,s)}}}(r.localStore,i))}async function Io(t,e){const n=x(t);if(!n.currentUser.isEqual(e)){I("SyncEngine","User change. New user:",e.toKey());const t=await Ls(n.localStore,e);n.currentUser=e,function(t,e){t.Qa.forEach((t=>{t.forEach((t=>{t.reject(new O(L.CANCELLED,e))}))})),t.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await So(n,t.Ts)}}function Ao(t,e){const n=x(t),r=n.Ba.get(e);if(r&&r.Fa)return ln().add(r.key);{let t=ln();const r=n.Oa.get(e);if(!r)return t;for(const e of r){const r=n.xa.get(e);t=t.unionWith(r.view.fa)}return t}}function Do(t){const e=x(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fo.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ao.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=po.bind(null,e),e.Ma.R_=Hi.bind(null,e.eventManager),e.Ma.Wa=Qi.bind(null,e.eventManager),e}function ko(t){const e=x(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mo.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yo.bind(null,e),e}class No{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ti(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,e){return null}Ya(t,e){return null}Ha(t){return xs(this.persistence,new Ns,t.initialUser,this.serializer)}ja(t){return new Cs(Is.ei,this.serializer)}za(t){return new $s}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}No.provider={build:()=>new No};class Ro extends No{constructor(t){super(),this.cacheSizeBytes=t}Ja(t,e){R(this.persistence.referenceDelegate instanceof As);const n=this.persistence.referenceDelegate.garbageCollector;return new cs(n,t.asyncQueue,e)}ja(t){const e=void 0!==this.cacheSizeBytes?is.withCacheSize(this.cacheSizeBytes):is.DEFAULT;return new Cs((t=>As.ei(t,e)),this.serializer)}}class xo{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>go(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Io.bind(null,this.syncEngine),await Oi(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new zi}()}createDatastore(t){const e=ti(t.databaseInfo.databaseId),n=function(t){return new Js(t)}(t.databaseInfo);return function(t,e,n,r){return new ii(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,s){return new ai(t,e,n,r,s)}(this.localStore,this.datastore,t.asyncQueue,(t=>go(this.syncEngine,t,0)),function(){return Gs.p()?new Gs:new Ks}())}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new so(t,e,n,r,s,i);return o&&(a.$a=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=x(t);I("RemoteStore","RemoteStore shutting down."),e.k_.add(5),await ci(e),e.Q_.shutdown(),e.K_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(e=this.eventManager)||void 0===e||e.terminate()}}xo.provider={build:()=>new xo};
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
 * Copyright 2017 Google LLC
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
class Lo{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Xa(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Xa(this.observer.error,t):A("Uncaught Error in snapshot listener:",t.toString()))}eu(){this.muted=!0}Xa(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}
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
 * Copyright 2017 Google LLC
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
class Oo{constructor(t,e,n,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=E.UNAUTHENTICATED,this.clientId=K.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,(async t=>{I("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(I("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new M;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Fi(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Mo(t,e){t.asyncQueue.verifyOperationInProgress(),I("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Ls(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Po(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Vo(t);I("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>Li(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Li(e.remoteStore,n))),t._onlineComponents=e}async function Vo(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){I("FirestoreClient","Using user provided OfflineComponentProvider");try{await Mo(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;D("Error using user provided cache. Falling back to memory cache: "+n),await Mo(t,new No)}}else I("FirestoreClient","Using default OfflineComponentProvider"),await Mo(t,new Ro(void 0));return t._offlineComponents}async function Fo(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(I("FirestoreClient","Using user provided OnlineComponentProvider"),await Po(t,t._uninitializedComponentsProvider._online)):(I("FirestoreClient","Using default OnlineComponentProvider"),await Po(t,new xo))),t._onlineComponents}function Uo(t){return Fo(t).then((t=>t.syncEngine))}async function Bo(t){const e=await Fo(t),n=e.eventManager;return n.onListen=io.bind(null,e.syncEngine),n.onUnlisten=co.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=oo.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ho.bind(null,e.syncEngine),n}function jo(t,e,n={}){const r=new M;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,s){const i=new Lo({next:a=>{i.eu(),e.enqueueAndForget((()=>Gi(t,o)));const u=a.docs.has(n);!u&&a.fromCache?s.reject(new O(L.UNAVAILABLE,"Failed to get document because the client is offline.")):u&&a.fromCache&&r&&"server"===r.source?s.reject(new O(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(a)},error:t=>s.reject(t)}),o=new Ji(Ue(n.path),i,{includeMetadataChanges:!0,ua:!0});return Ki(t,o)}(await Bo(t),t.asyncQueue,e,n,r))),r.promise}function qo(t,e,n={}){const r=new M;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,s){const i=new Lo({next:n=>{i.eu(),e.enqueueAndForget((()=>Gi(t,o))),n.fromCache&&"server"===r.source?s.reject(new O(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new Ji(n,i,{includeMetadataChanges:!0,ua:!0});return Ki(t,o)}(await Bo(t),t.asyncQueue,e,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
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
function zo(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
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
 */}const $o=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Ko(t,e,n){if(!n)throw new O(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Go(t,e,n,r){if(!0===e&&!0===r)throw new O(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ho(t){if(!tt.isDocumentKey(t))throw new O(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qo(t){if(tt.isDocumentKey(t))throw new O(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wo(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":N()}function Xo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new O(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wo(t);throw new O(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class Yo{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new O(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new O(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Go("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zo(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new O(L.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new O(L.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new O(L.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Jo{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yo({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new O(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yo(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new V;switch(t.type){case"firstParty":return new j(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new O(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=$o.get(t);e&&(I("ComponentProvider","Removing Datastore"),$o.delete(t),e.terminate())}(this),Promise.resolve()}}function Zo(t,e,n,r={}){var s;const i=(t=Xo(t,Jo))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==i.host&&i.host!==o&&D("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=E.MOCK_USER;else{e=(0,u.Fy)(r.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new O(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new E(i)}t._authCredentials=new F(new P(e,n))}}
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
 */class ta{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ta(this.firestore,t,this._query)}}class ea{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new na(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ea(this.firestore,t,this._key)}}class na extends ta{constructor(t,e,n){super(t,e,Ue(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ea(this.firestore,null,new tt(t))}withConverter(t){return new na(this.firestore,t,this._path)}}function ra(t,e,...n){if(t=(0,u.Ku)(t),Ko("collection","path",e),t instanceof Jo){const r=Y.fromString(e,...n);return Qo(r),new na(t,null,r)}{if(!(t instanceof ea||t instanceof na))throw new O(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Y.fromString(e,...n));return Qo(r),new na(t.firestore,null,r)}}function sa(t,e,...n){if(t=(0,u.Ku)(t),1===arguments.length&&(e=K.newId()),Ko("doc","path",e),t instanceof Jo){const r=Y.fromString(e,...n);return Ho(r),new ea(t,null,new tt(r))}{if(!(t instanceof ea||t instanceof na))throw new O(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Y.fromString(e,...n));return Ho(r),new ea(t.firestore,t instanceof na?t.converter:null,new tt(r))}}
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
class ia{constructor(t=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new ei(this,"async_queue_retry"),this.fu=()=>{const t=Zs();t&&I("AsyncQueue","Visibility state changed to "+t.visibilityState),this.r_.Jo()},this.gu=t;const e=Zs();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.Eu){this.Eu=!0,this.Vu=t||!1;const e=Zs();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.Eu)return new Promise((()=>{}));const e=new M;return this.yu((()=>this.Eu&&this.Vu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Iu.push(t),this.wu())))}async wu(){if(0!==this.Iu.length){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!lt(t))throw t;I("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo((()=>this.wu()))}}yu(t){const e=this.gu.then((()=>(this.Ru=!0,t().catch((t=>{this.Au=t,this.Ru=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */(t);throw A("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ru=!1,t))))));return this.gu=e,e}enqueueAfterDelay(t,e,n){this.pu(),this.mu.indexOf(t)>-1&&(e=0);const r=Vi.createAndSchedule(this,t,e,n,(t=>this.Su(t)));return this.du.push(r),r}pu(){this.Au&&N()}verifyOperationInProgress(){}async bu(){let t;do{t=this.gu,await t}while(t!==this.gu)}Du(t){for(const e of this.du)if(e.timerId===t)return!0;return!1}vu(t){return this.bu().then((()=>{this.du.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.du)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.bu()}))}Cu(t){this.mu.push(t)}Su(t){const e=this.du.indexOf(t);this.du.splice(e,1)}}function oa(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
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
 */(t,["next","error","complete"])}class aa extends Jo{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new ia,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ia(t),this._firestoreClient=void 0,await t}}}function ua(t,e){const n="object"==typeof t?t:(0,i.Sx)(),r="string"==typeof t?t:e||"(default)",s=(0,i.j6)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const t=(0,u.yU)("firestore");t&&Zo(s,...t)}return s}function ca(t){if(t._terminated)throw new O(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ha(t),t._firestoreClient}function ha(t){var e,n,r;const s=t._freezeSettings(),i=function(t,e,n,r){return new jt(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,zo(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new Oo(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(t){const e=null==t?void 0:t._online.build();return{_offline:null==t?void 0:t._offline.build(e),_online:e}}(t._componentsProvider))}
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
class la{constructor(t){this._byteString=t}static fromBase64String(t){try{return new la(Lt.fromBase64String(t))}catch(t){throw new O(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new la(Lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class da{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new O(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class fa{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ga{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return G(this._lat,t._lat)||G(this._long,t._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
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
 */class pa{constructor(t){this._values=(t||[]).map((t=>t))}toArray(){return this._values.map((t=>t))}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ma=/^__.*__$/;class ya{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new jn(t,this.data,this.fieldMask,e,this.fieldTransforms):new Bn(t,this.data,e,this.fieldTransforms)}}class va{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new jn(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function wa(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw N()}}class _a{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(t){return new _a(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.xu({path:n,Nu:!1});return r.Lu(t),r}Bu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.xu({path:n,Nu:!1});return r.Fu(),r}ku(t){return this.xu({path:void 0,Nu:!0})}qu(t){return Pa(t,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Fu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lu(this.path.get(t))}Lu(t){if(0===t.length)throw this.qu("Document fields must not be empty");if(wa(this.Mu)&&ma.test(t))throw this.qu('Document fields cannot begin and end with "__"')}}class ba{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||ti(t)}$u(t,e,n,r=!1){return new _a({Mu:t,methodName:e,Ku:n,path:Z.emptyPath(),Nu:!1,Qu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ea(t){const e=t._freezeSettings(),n=ti(t._databaseId);return new ba(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ta(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);xa("Data must be an object, but it was:",o,r);const a=Na(r,o);let u,c;if(i.merge)u=new Rt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=La(e,r,n);if(!o.contains(s))throw new O(L.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Va(t,s)||t.push(s)}u=new Rt(t),c=o.fieldTransforms.filter((t=>u.covers(t.field)))}else u=null,c=o.fieldTransforms;return new ya(new ae(a),u,c)}class Ca extends fa{_toFieldTransform(t){if(2!==t.Mu)throw 1===t.Mu?t.qu(`${this._methodName}() can only appear at the top level of your update data`):t.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ca}}function Sa(t,e,n){return new _a({Mu:3,Ku:e.settings.Ku,methodName:t._methodName,Nu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ia extends fa{constructor(t,e){super(t),this.Uu=e}_toFieldTransform(t){const e=Sa(this,t,!0),n=this.Uu.map((t=>ka(t,e))),r=new En(n);return new kn(t.path,r)}isEqual(t){return t instanceof Ia&&(0,u.bD)(this.Uu,t.Uu)}}function Aa(t,e,n,r){const s=t.$u(1,e,n);xa("Data must be an object, but it was:",s,r);const i=[],o=ae.empty();Ct(r,((t,r)=>{const a=Ma(e,t,n);r=(0,u.Ku)(r);const c=s.Bu(a);if(r instanceof Ca)i.push(a);else{const t=ka(r,c);null!=t&&(i.push(a),o.set(a,t))}}));const a=new Rt(i);return new va(o,a,s.fieldTransforms)}function Da(t,e,n,r,s,i){const o=t.$u(1,e,n),a=[La(e,r,n)],c=[s];if(i.length%2!=0)throw new O(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let u=0;u<i.length;u+=2)a.push(La(e,i[u])),c.push(i[u+1]);const h=[],l=ae.empty();for(let f=a.length-1;f>=0;--f)if(!Va(h,a[f])){const t=a[f];let e=c[f];e=(0,u.Ku)(e);const n=o.Bu(t);if(e instanceof Ca)h.push(t);else{const r=ka(e,n);null!=r&&(h.push(t),l.set(t,r))}}const d=new Rt(h);return new va(l,d,o.fieldTransforms)}function ka(t,e){if(Ra(t=(0,u.Ku)(t)))return xa("Unsupported field value:",e,t),Na(t,e);if(t instanceof fa)return function(t,e){if(!wa(e.Mu))throw e.qu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.qu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&4!==e.Mu)throw e.qu("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=ka(s,e.ku(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,u.Ku)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return mn(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Q.fromDate(t);return{timestampValue:Er(e.serializer,n)}}if(t instanceof Q){const n=new Q(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Er(e.serializer,n)}}if(t instanceof ga)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof la)return{bytesValue:Tr(e.serializer,t._byteString)};if(t instanceof ea){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.qu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ir(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof pa)return function(t,e){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:t.toArray().map((t=>{if("number"!=typeof t)throw e.qu("VectorValues must only contain numeric values.");return gn(e.serializer,t)}))}}}}}}(t,e);throw e.qu(`Unsupported field value: ${Wo(t)}`)}(t,e)}function Na(t,e){const n={};return St(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ct(t,((t,r)=>{const s=ka(r,e.Ou(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function Ra(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Q||t instanceof ga||t instanceof la||t instanceof ea||t instanceof fa||t instanceof pa)}function xa(t,e,n){if(!Ra(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Wo(n);throw"an object"===r?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function La(t,e,n){if((e=(0,u.Ku)(e))instanceof da)return e._internalPath;if("string"==typeof e)return Ma(t,e);throw Pa("Field path arguments must be of type string or ",t,!1,void 0,n)}const Oa=new RegExp("[~\\*/\\[\\]]");function Ma(t,e,n){if(e.search(Oa)>=0)throw Pa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new da(...e.split("."))._internalPath}catch(r){throw Pa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new O(L.INVALID_ARGUMENT,a+t+u)}function Va(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class Fa{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ea(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Ua(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ba("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Ua extends Fa{data(){return super.data()}}function Ba(t,e){return"string"==typeof e?Ma(t,e):e instanceof da?e._internalPath:e._delegate._internalPath}
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
 */function ja(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new O(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qa{convertValue(t,e="none"){switch($t(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Pt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Vt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw N()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Ct(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertVectorValue(t){var e,n,r;const s=null===(r=null===(n=null===(e=t.fields)||void 0===e?void 0:e.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((t=>Pt(t.doubleValue)));return new pa(s)}convertGeoPoint(t){return new ga(Pt(t.latitude),Pt(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ut(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Bt(t));default:return null}}convertTimestamp(t){const e=Mt(t);return new Q(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Y.fromString(t);R(Yr(n));const r=new qt(n.get(1),n.get(3)),s=new tt(n.popFirst(5));return r.isEqual(e)||A(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
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
 */function za(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
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
class $a{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ka extends Fa{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ga(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ba("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Ga extends Ka{data(t={}){return super.data(t)}}class Ha{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new $a(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Ga(this._firestore,this._userDataWriter,n.key,n,new $a(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new Ga(t._firestore,t._userDataWriter,n.doc.key,n.doc,new $a(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new Ga(t._firestore,t._userDataWriter,e.doc.key,e.doc,new $a(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:Qa(e.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Qa(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return N()}}
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
function Wa(t){t=Xo(t,ea);const e=Xo(t.firestore,aa);return jo(ca(e),t._key).then((n=>ru(e,t,n)))}class Xa extends qa{constructor(t){super(),this.firestore=t}convertBytes(t){return new la(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ea(this.firestore,null,e)}}function Ya(t){t=Xo(t,ta);const e=Xo(t.firestore,aa),n=ca(e),r=new Xa(e);return ja(t._query),qo(n,t._query).then((n=>new Ha(e,r,t,n)))}function Ja(t,e,n){t=Xo(t,ea);const r=Xo(t.firestore,aa),s=za(t.converter,e,n);return nu(r,[Ta(Ea(r),"setDoc",t._key,s,null!==t.converter,n).toMutation(t._key,xn.none())])}function Za(t,e,n,...r){t=Xo(t,ea);const s=Xo(t.firestore,aa),i=Ea(s);let o;return o="string"==typeof(e=(0,u.Ku)(e))||e instanceof da?Da(i,"updateDoc",t._key,e,n,r):Aa(i,"updateDoc",t._key,e),nu(s,[o.toMutation(t._key,xn.exists(!0))])}function tu(t){return nu(Xo(t.firestore,aa),[new Kn(t._key,xn.none())])}function eu(t,...e){var n,r,s;t=(0,u.Ku)(t);let i={includeMetadataChanges:!1,source:"default"},o=0;"object"!=typeof e[o]||oa(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(oa(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}let c,h,l;if(t instanceof ea)h=Xo(t.firestore,aa),l=Ue(t._key.path),c={next:n=>{e[o]&&e[o](ru(h,t,n))},error:e[o+1],complete:e[o+2]};else{const n=Xo(t,ta);h=Xo(n.firestore,aa),l=n._query;const r=new Xa(h);c={next:t=>{e[o]&&e[o](new Ha(h,r,n,t))},error:e[o+1],complete:e[o+2]},ja(t._query)}return function(t,e,n,r){const s=new Lo(r),i=new Ji(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>Ki(await Bo(t),i))),()=>{s.eu(),t.asyncQueue.enqueueAndForget((async()=>Gi(await Bo(t),i)))}}(ca(h),l,a,c)}function nu(t,e){return function(t,e){const n=new M;return t.asyncQueue.enqueueAndForget((async()=>lo(await Uo(t),e,n))),n.promise}(ca(t),e)}function ru(t,e,n){const r=n.docs.get(e._key),s=new Xa(t);return new Ka(t,s,e._key,r,new $a(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */function su(...t){return new Ia("arrayUnion",t)}new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
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
 */!function(t,e=!0){!function(t){T=t}(i.MF),(0,i.om)(new o.uA("firestore",((t,{instanceIdentifier:n,options:r})=>{const s=t.getProvider("app").getImmediate(),i=new aa(new U(t.getProvider("auth-internal")),new z(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new O(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qt(t.options.projectId,e)}(s,n),s);return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i}),"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(b,"4.7.5",t),(0,i.KO)(b,"4.7.5","esm2017")}()}}]);
//# sourceMappingURL=754.8a94ac13.js.map
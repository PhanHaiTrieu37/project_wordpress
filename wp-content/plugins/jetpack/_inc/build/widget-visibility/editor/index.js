!function(){var e={171:function(e){var t=1e3,n=60*t,i=60*n,o=24*i,r=7*o,s=365.25*o;function c(e,t,n,i){var o=t>=1.5*n;return Math.round(e/n)+" "+i+(o?"s":"")}e.exports=function(e,a){a=a||{};var u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var c=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!c)return;var a=parseFloat(c[1]);switch((c[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return a*s;case"weeks":case"week":case"w":return a*r;case"days":case"day":case"d":return a*o;case"hours":case"hour":case"hrs":case"hr":case"h":return a*i;case"minutes":case"minute":case"mins":case"min":case"m":return a*n;case"seconds":case"second":case"secs":case"sec":case"s":return a*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}(e);if("number"===u&&isFinite(e))return a.long?function(e){var r=Math.abs(e);if(r>=o)return c(e,r,o,"day");if(r>=i)return c(e,r,i,"hour");if(r>=n)return c(e,r,n,"minute");if(r>=t)return c(e,r,t,"second");return e+" ms"}(e):function(e){var r=Math.abs(e);if(r>=o)return Math.round(e/o)+"d";if(r>=i)return Math.round(e/i)+"h";if(r>=n)return Math.round(e/n)+"m";if(r>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},975:function(e,t,n){"use strict";var i=n(128);const o=n.n(i)()("dops:analytics");let r,s;window._tkq=window._tkq||[],window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=+new Date;const c={initialize:function(e,t,n){c.setUser(e,t),c.setSuperProps(n),c.identifyUser()},setGoogleAnalyticsEnabled:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.googleAnalyticsEnabled=e,this.googleAnalyticsKey=t},setMcAnalyticsEnabled:function(e){this.mcAnalyticsEnabled=e},setUser:function(e,t){s={ID:e,username:t}},setSuperProps:function(e){r=e},assignSuperProps:function(e){r=Object.assign(r||{},e)},mc:{bumpStat:function(e,t){const n=function(e,t){let n="";if("object"==typeof e){for(const t in e)n+="&x_"+encodeURIComponent(t)+"="+encodeURIComponent(e[t]);o("Bumping stats %o",e)}else n="&x_"+encodeURIComponent(e)+"="+encodeURIComponent(t),o('Bumping stat "%s" in group "%s"',t,e);return n}(e,t);c.mcAnalyticsEnabled&&((new Image).src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom-no-pv"+n+"&t="+Math.random())},bumpStatWithPageView:function(e,t){const n=function(e,t){let n="";if("object"==typeof e){for(const t in e)n+="&"+encodeURIComponent(t)+"="+encodeURIComponent(e[t]);o("Built stats %o",e)}else n="&"+encodeURIComponent(e)+"="+encodeURIComponent(t),o('Built stat "%s" in group "%s"',t,e);return n}(e,t);c.mcAnalyticsEnabled&&((new Image).src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom"+n+"&t="+Math.random())}},pageView:{record:function(e,t){c.tracks.recordPageView(e),c.ga.recordPageView(e,t)}},purchase:{record:function(e,t,n,i,o,r,s){c.ga.recordPurchase(e,t,n,i,o,r,s)}},tracks:{recordEvent:function(e,t){t=t||{},0===e.indexOf("akismet_")||0===e.indexOf("jetpack_")?(r&&(o("- Super Props: %o",r),t=Object.assign(t,r)),o('Record event "%s" called with props %s',e,JSON.stringify(t)),window._tkq.push(["recordEvent",e,t])):o('- Event name must be prefixed by "akismet_" or "jetpack_"')},recordJetpackClick:function(e){const t="object"==typeof e?e:{target:e};c.tracks.recordEvent("jetpack_wpa_click",t)},recordPageView:function(e){c.tracks.recordEvent("akismet_page_view",{path:e})},setOptOut:function(e){o("Pushing setOptOut: %o",e),window._tkq.push(["setOptOut",e])}},ga:{initialized:!1,initialize:function(){let e={};c.ga.initialized||(s&&(e={userId:"u-"+s.ID}),window.ga("create",this.googleAnalyticsKey,"auto",e),c.ga.initialized=!0)},recordPageView:function(e,t){c.ga.initialize(),o("Recording Page View ~ [URL: "+e+"] [Title: "+t+"]"),this.googleAnalyticsEnabled&&(window.ga("set","page",e),window.ga("send",{hitType:"pageview",page:e,title:t}))},recordEvent:function(e,t,n,i){c.ga.initialize();let r="Recording Event ~ [Category: "+e+"] [Action: "+t+"]";void 0!==n&&(r+=" [Option Label: "+n+"]"),void 0!==i&&(r+=" [Option Value: "+i+"]"),o(r),this.googleAnalyticsEnabled&&window.ga("send","event",e,t,n,i)},recordPurchase:function(e,t,n,i,o,r,s){window.ga("require","ecommerce"),window.ga("ecommerce:addTransaction",{id:e,revenue:i,currency:s}),window.ga("ecommerce:addItem",{id:e,name:t,sku:n,price:o,quantity:r}),window.ga("ecommerce:send")}},identifyUser:function(){s&&window._tkq.push(["identifyUser",s.ID,s.username])},setProperties:function(e){window._tkq.push(["setProperties",e])},clearedIdentity:function(){window._tkq.push(["clearIdentity"])}};t.Z=c},743:function(e,t,n){"use strict";var i=n(132),o=n(483);function r(e){class t extends Error{constructor(){super(...arguments),this.name=e}}return t}const s=r("JsonParseError"),c=r("JsonParseAfterRedirectError"),a=r("Api404Error"),u=r("Api404AfterRedirectError"),l=r("FetchNetworkError");const d=new function(e,t){let n=e,r=e,s={"X-WP-Nonce":t},c={credentials:"same-origin",headers:s},a={method:"post",credentials:"same-origin",headers:Object.assign({},s,{"Content-type":"application/json"})},u=function(e){const t=e.split("?"),n=t.length>1?t[1]:"",i=n.length?n.split("&"):[];return i.push("_cacheBuster="+(new Date).getTime()),t[0]+"?"+i.join("&")};const l={setApiRoot(e){n=e},setWpcomOriginApiUrl(e){r=e},setApiNonce(e){s={"X-WP-Nonce":e},c={credentials:"same-origin",headers:s},a={method:"post",credentials:"same-origin",headers:Object.assign({},s,{"Content-type":"application/json"})}},setCacheBusterCallback:e=>{u=e},registerSite:(e,t)=>{const o={registration_nonce:e,no_iframe:!0};return(0,i.jetpackConfigHas)("consumer_slug")&&(o.plugin_slug=(0,i.jetpackConfigGet)("consumer_slug")),null!==t&&(o.redirect_uri=t),h(`${n}jetpack/v4/connection/register`,a,{body:JSON.stringify(o)}).then(p).then(g)},fetchAuthorizationUrl:e=>d((0,o.addQueryArgs)(`${n}jetpack/v4/connection/authorize_url`,{no_iframe:"1",redirect_uri:e}),c).then(p).then(g),fetchSiteConnectionData:()=>d(`${n}jetpack/v4/connection/data`,c).then(g),fetchSiteConnectionStatus:()=>d(`${n}jetpack/v4/connection`,c).then(g),fetchSiteConnectionTest:()=>d(`${n}jetpack/v4/connection/test`,c).then(p).then(g),fetchUserConnectionData:()=>d(`${n}jetpack/v4/connection/data`,c).then(g),fetchUserTrackingSettings:()=>d(`${n}jetpack/v4/tracking/settings`,c).then(p).then(g),updateUserTrackingSettings:e=>h(`${n}jetpack/v4/tracking/settings`,a,{body:JSON.stringify(e)}).then(p).then(g),disconnectSite:()=>h(`${n}jetpack/v4/connection`,a,{body:JSON.stringify({isActive:!1})}).then(p).then(g),fetchConnectUrl:()=>d(`${n}jetpack/v4/connection/url`,c).then(p).then(g),unlinkUser:()=>h(`${n}jetpack/v4/connection/user`,a,{body:JSON.stringify({linked:!1})}).then(p).then(g),reconnect:()=>h(`${n}jetpack/v4/connection/reconnect`,a).then(p).then(g),fetchConnectedPlugins:()=>d(`${n}jetpack/v4/connection/plugins`,c).then(p).then(g),setHasSeenWCConnectionModal:()=>h(`${n}jetpack/v4/seen-wc-connection-modal`,a).then(p).then(g),fetchModules:()=>d(`${n}jetpack/v4/module/all`,c).then(p).then(g),fetchModule:e=>d(`${n}jetpack/v4/module/${e}`,c).then(p).then(g),activateModule:e=>h(`${n}jetpack/v4/module/${e}/active`,a,{body:JSON.stringify({active:!0})}).then(p).then(g),deactivateModule:e=>h(`${n}jetpack/v4/module/${e}/active`,a,{body:JSON.stringify({active:!1})}),updateModuleOptions:(e,t)=>h(`${n}jetpack/v4/module/${e}`,a,{body:JSON.stringify(t)}).then(p).then(g),updateSettings:e=>h(`${n}jetpack/v4/settings`,a,{body:JSON.stringify(e)}).then(p).then(g),getProtectCount:()=>d(`${n}jetpack/v4/module/protect/data`,c).then(p).then(g),resetOptions:e=>h(`${n}jetpack/v4/options/${e}`,a,{body:JSON.stringify({reset:!0})}).then(p).then(g),activateVaultPress:()=>h(`${n}jetpack/v4/plugins`,a,{body:JSON.stringify({slug:"vaultpress",status:"active"})}).then(p).then(g),getVaultPressData:()=>d(`${n}jetpack/v4/module/vaultpress/data`,c).then(p).then(g),installPlugin:(e,t)=>{const i={slug:e,status:"active"};return t&&(i.source=t),h(`${n}jetpack/v4/plugins`,a,{body:JSON.stringify(i)}).then(p).then(g)},activateAkismet:()=>h(`${n}jetpack/v4/plugins`,a,{body:JSON.stringify({slug:"akismet",status:"active"})}).then(p).then(g),getAkismetData:()=>d(`${n}jetpack/v4/module/akismet/data`,c).then(p).then(g),checkAkismetKey:()=>d(`${n}jetpack/v4/module/akismet/key/check`,c).then(p).then(g),checkAkismetKeyTyped:e=>h(`${n}jetpack/v4/module/akismet/key/check`,a,{body:JSON.stringify({api_key:e})}).then(p).then(g),fetchStatsData:e=>d(function(e){let t=`${n}jetpack/v4/module/stats/data`;-1!==t.indexOf("?")?t+=`&range=${encodeURIComponent(e)}`:t+=`?range=${encodeURIComponent(e)}`;return t}(e),c).then(p).then(g).then(m),getPluginUpdates:()=>d(`${n}jetpack/v4/updates/plugins`,c).then(p).then(g),getPlans:()=>d(`${n}jetpack/v4/plans`,c).then(p).then(g),fetchSettings:()=>d(`${n}jetpack/v4/settings`,c).then(p).then(g),updateSetting:e=>h(`${n}jetpack/v4/settings`,a,{body:JSON.stringify(e)}).then(p).then(g),fetchSiteData:()=>d(`${n}jetpack/v4/site`,c).then(p).then(g).then((e=>JSON.parse(e.data))),fetchSiteFeatures:()=>d(`${n}jetpack/v4/site/features`,c).then(p).then(g).then((e=>JSON.parse(e.data))),fetchSiteProducts:()=>d(`${n}jetpack/v4/site/products`,c).then(p).then(g),fetchSitePurchases:()=>d(`${n}jetpack/v4/site/purchases`,c).then(p).then(g).then((e=>JSON.parse(e.data))),fetchSiteBenefits:()=>d(`${n}jetpack/v4/site/benefits`,c).then(p).then(g).then((e=>JSON.parse(e.data))),fetchSiteDiscount:()=>d(`${n}jetpack/v4/site/discount`,c).then(p).then(g).then((e=>e.data)),fetchSetupQuestionnaire:()=>d(`${n}jetpack/v4/setup/questionnaire`,c).then(p).then(g),fetchRecommendationsData:()=>d(`${n}jetpack/v4/recommendations/data`,c).then(p).then(g),fetchRecommendationsProductSuggestions:()=>d(`${n}jetpack/v4/recommendations/product-suggestions`,c).then(p).then(g),fetchRecommendationsUpsell:()=>d(`${n}jetpack/v4/recommendations/upsell`,c).then(p).then(g),fetchRecommendationsConditional:()=>d(`${n}jetpack/v4/recommendations/conditional`,c).then(p).then(g),saveRecommendationsData:e=>h(`${n}jetpack/v4/recommendations/data`,a,{body:JSON.stringify({data:e})}).then(p),fetchProducts:()=>d(`${n}jetpack/v4/products`,c).then(p).then(g),fetchRewindStatus:()=>d(`${n}jetpack/v4/rewind`,c).then(p).then(g).then((e=>JSON.parse(e.data))),fetchScanStatus:()=>d(`${n}jetpack/v4/scan`,c).then(p).then(g).then((e=>JSON.parse(e.data))),dismissJetpackNotice:e=>h(`${n}jetpack/v4/notice/${e}`,a,{body:JSON.stringify({dismissed:!0})}).then(p).then(g),fetchPluginsData:()=>d(`${n}jetpack/v4/plugins`,c).then(p).then(g),fetchIntroOffers:()=>d(`${n}jetpack/v4/intro-offers`,c).then(p).then(g),fetchVerifySiteGoogleStatus:e=>d(null!==e?`${n}jetpack/v4/verify-site/google/${e}`:`${n}jetpack/v4/verify-site/google`,c).then(p).then(g),verifySiteGoogle:e=>h(`${n}jetpack/v4/verify-site/google`,a,{body:JSON.stringify({keyring_id:e})}).then(p).then(g),submitSurvey:e=>h(`${n}jetpack/v4/marketing/survey`,a,{body:JSON.stringify(e)}).then(p).then(g),saveSetupQuestionnaire:e=>h(`${n}jetpack/v4/setup/questionnaire`,a,{body:JSON.stringify(e)}).then(p).then(g),updateLicensingError:e=>h(`${n}jetpack/v4/licensing/error`,a,{body:JSON.stringify(e)}).then(p).then(g),updateLicenseKey:e=>h(`${n}jetpack/v4/licensing/set-license`,a,{body:JSON.stringify({license:e})}).then(p).then(g),getUserLicensesCounts:()=>d(`${n}jetpack/v4/licensing/user/counts`,c).then(p).then(g),getUserLicenses:()=>d(`${n}jetpack/v4/licensing/user/licenses`,c).then(p).then(g),updateLicensingActivationNoticeDismiss:e=>h(`${n}jetpack/v4/licensing/user/activation-notice-dismiss`,a,{body:JSON.stringify({last_detached_count:e})}).then(p).then(g),updateRecommendationsStep:e=>h(`${n}jetpack/v4/recommendations/step`,a,{body:JSON.stringify({step:e})}).then(p),confirmIDCSafeMode:()=>h(`${n}jetpack/v4/identity-crisis/confirm-safe-mode`,a).then(p),startIDCFresh:e=>h(`${n}jetpack/v4/identity-crisis/start-fresh`,a,{body:JSON.stringify({redirect_uri:e})}).then(p).then(g),migrateIDC:()=>h(`${n}jetpack/v4/identity-crisis/migrate`,a).then(p),attachLicenses:e=>h(`${n}jetpack/v4/licensing/attach-licenses`,a,{body:JSON.stringify({licenses:e})}).then(p).then(g),fetchSearchPlanInfo:()=>d(`${r}jetpack/v4/search/plan`,c).then(p).then(g),fetchSearchSettings:()=>d(`${r}jetpack/v4/search/settings`,c).then(p).then(g),updateSearchSettings:e=>h(`${r}jetpack/v4/search/settings`,a,{body:JSON.stringify(e)}).then(p).then(g),fetchSearchStats:()=>d(`${r}jetpack/v4/search/stats`,c).then(p).then(g),fetchWafSettings:()=>d(`${n}jetpack/v4/waf`,c).then(p).then(g),updateWafSettings:e=>h(`${n}jetpack/v4/waf`,a,{body:JSON.stringify(e)}).then(p).then(g),fetchWordAdsSettings:()=>d(`${n}jetpack/v4/wordads/settings`,c).then(p).then(g),updateWordAdsSettings:e=>h(`${n}jetpack/v4/wordads/settings`,a,{body:JSON.stringify(e)}),fetchSearchPricing:()=>d(`${r}jetpack/v4/search/pricing`,c).then(p).then(g),fetchMigrationStatus:()=>d(`${n}jetpack/v4/migration/status`,c).then(p).then(g)};function d(e,t){return fetch(u(e),t)}function h(e,t,n){return fetch(e,Object.assign({},t,n)).catch(f)}function m(e){return e.general&&void 0===e.general.response||e.week&&void 0===e.week.response||e.month&&void 0===e.month.response?e:{}}Object.assign(this,l)};function p(e){return e.status>=200&&e.status<300?e:404===e.status?new Promise((()=>{throw e.redirected?new u(e.redirected):new a})):e.json().catch((e=>h(e))).then((t=>{const n=new Error(`${t.message} (Status ${e.status})`);throw n.response=t,n.name="ApiError",n}))}function g(e){return e.json().catch((t=>h(t,e.redirected,e.url)))}function h(e,t,n){throw t?new c(n):new s}function f(){throw new l}t.ZP=d},132:function(e,t,n){let i={};try{i=n(787)}catch{console.error("jetpackConfig is missing in your webpack config file. See @automattic/jetpack-config"),i={missingConfig:!0}}const o=e=>i.hasOwnProperty(e);e.exports={jetpackConfigHas:o,jetpackConfigGet:e=>{if(!o(e))throw'This app requires the "'+e+'" Jetpack Config to be defined in your webpack configuration file. See details in @automattic/jetpack-config package docs.';return i[e]}}},294:function(e,t,n){"use strict";var i=n(743),o=n(818),r=n(196),s=n(428);const c=window?.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{};t.Z=function(){let{registrationNonce:e=c.registrationNonce,apiRoot:t=c.apiRoot,apiNonce:n=c.apiNonce,redirectUri:a,autoTrigger:u,from:l,skipUserConnection:d}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{registerSite:p,connectUser:g,refreshConnectedPlugins:h}=(0,o.useDispatch)(s.t),f=(0,o.useSelect)((e=>e(s.t).getRegistrationError())),{siteIsRegistering:m,userIsConnecting:v,userConnectionData:C,connectedPlugins:y,connectionErrors:w,isRegistered:k,isUserConnected:_,hasConnectedOwner:b}=(0,o.useSelect)((e=>({siteIsRegistering:e(s.t).getSiteIsRegistering(),userIsConnecting:e(s.t).getUserIsConnecting(),userConnectionData:e(s.t).getUserConnectionData(),connectedPlugins:e(s.t).getConnectedPlugins(),connectionErrors:e(s.t).getConnectionErrors(),...e(s.t).getConnectionStatus()}))),S=()=>d?a?(window.location=a,Promise.resolve(a)):Promise.resolve():g({from:l,redirectUri:a}),j=t=>(t&&t.preventDefault(),k?S():p({registrationNonce:e,redirectUri:a}).then((()=>S())));return(0,r.useEffect)((()=>{i.ZP.setApiRoot(t),i.ZP.setApiNonce(n)}),[t,n]),(0,r.useEffect)((()=>{!u||m||v||j()}),[]),{handleRegisterSite:j,handleConnectUser:S,refreshConnectedPlugins:h,isRegistered:k,isUserConnected:_,siteIsRegistering:m,userIsConnecting:v,registrationError:f,userConnectionData:C,hasConnectedOwner:b,connectedPlugins:y,connectionErrors:w}}},523:function(e,t,n){"use strict";n.d(t,{LI:function(){return r},N4:function(){return c},Qo:function(){return g},T1:function(){return u},TS:function(){return d},ZP:function(){return b},b5:function(){return f},i6:function(){return o},qV:function(){return a},r7:function(){return s},wQ:function(){return h}});var i=n(743);const o="SET_CONNECTION_STATUS",r="SET_CONNECTION_STATUS_IS_FETCHING",s="SET_SITE_IS_REGISTERING",c="SET_USER_IS_CONNECTING",a="SET_REGISTRATION_ERROR",u="CLEAR_REGISTRATION_ERROR",l="REGISTER_SITE",d="SET_AUTHORIZATION_URL",p="CONNECT_USER",g="DISCONNECT_USER_SUCCESS",h="SET_CONNECTED_PLUGINS",f="SET_CONNECTION_ERRORS",m=e=>({type:o,connectionStatus:e}),v=e=>({type:s,isRegistering:e}),C=e=>({type:c,isConnecting:e}),y=e=>({type:a,registrationError:e}),w=()=>({type:u}),k=e=>({type:d,authorizationUrl:e}),_=e=>({type:h,connectedPlugins:e});const b={setConnectionStatus:m,setConnectionStatusIsFetching:e=>({type:r,isFetching:e}),fetchConnectionStatus:()=>({type:"FETCH_CONNECTION_STATUS"}),fetchAuthorizationUrl:e=>({type:"FETCH_AUTHORIZATION_URL",redirectUri:e}),setSiteIsRegistering:v,setUserIsConnecting:C,setRegistrationError:y,clearRegistrationError:w,setAuthorizationUrl:k,registerSite:function(e){let{registrationNonce:t,redirectUri:n}=e;return function*(){yield w(),yield v(!0);try{const e=yield{type:l,registrationNonce:t,redirectUri:n};return yield m({isRegistered:!0}),yield k(e.authorizeUrl),yield v(!1),Promise.resolve(e)}catch(e){return yield y(e),yield v(!1),Promise.reject(e)}}()},connectUser:function(){let{from:e,redirectFunc:t,redirectUri:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function*(){yield C(!0),yield{type:p,from:e,redirectFunc:t,redirectUri:n}}()},disconnectUserSuccess:()=>({type:g}),setConnectedPlugins:_,refreshConnectedPlugins:()=>async e=>{let{dispatch:t}=e;return await new Promise((e=>i.ZP.fetchConnectedPlugins().then((n=>{t(_(n)),e(n)}))))},setConnectionErrors:e=>({type:f,connectionErrors:e})}},432:function(e,t,n){"use strict";var i=n(743),o=n(818),r=n(57);const s=(0,o.createRegistryControl)((e=>{let{resolveSelect:t}=e;return function(){let{from:e,redirectFunc:n,redirectUri:i}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(((o,s)=>{t(r.Z).getAuthorizationUrl(i).then((t=>{const i=n||(e=>window.location.assign(e)),r=new URL(t);e&&r.searchParams.set("from",encodeURIComponent(e));const s=r.toString();i(s),o(s)})).catch((e=>{s(e)}))}))}}));t.Z={FETCH_AUTHORIZATION_URL:e=>{let{redirectUri:t}=e;return i.ZP.fetchAuthorizationUrl(t)},REGISTER_SITE:e=>{let{registrationNonce:t,redirectUri:n}=e;return i.ZP.registerSite(t,n)},CONNECT_USER:s}},479:function(e,t,n){"use strict";var i=n(818),o=n(523);const r=(0,i.combineReducers)({connectionStatus:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.i6:return{...e,...t.connectionStatus};case o.Qo:return{...e,isUserConnected:!1}}return e},connectionStatusIsFetching:function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return t.type===o.LI?t.isFetching:e},siteIsRegistering:function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return t.type===o.r7?t.isRegistering:e},userIsConnecting:function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return t.type===o.N4?t.isConnecting:e},registrationError:(e,t)=>{switch(t.type){case o.T1:return!1;case o.qV:return t.registrationError;default:return e}},authorizationUrl:(e,t)=>t.type===o.TS?t.authorizationUrl:e,userConnectionData:(e,t)=>(t.type,e),connectedPlugins:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===o.wQ?t.connectedPlugins:e},connectionErrors:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===o.b5?t.connectionErrors:e}});t.Z=r},728:function(e,t,n){"use strict";var i=n(818),o=n(523),r=n(57);const s={getAuthorizationUrl:{isFulfilled:function(e){const t=Boolean(e.authorizationUrl);for(var n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];const c=(0,i.select)(r.Z).hasFinishedResolution("getAuthorizationUrl",o);return t&&!c&&(0,i.dispatch)(r.Z).finishResolution("getAuthorizationUrl",o),t},*fulfill(e){const t=yield o.ZP.fetchAuthorizationUrl(e);yield o.ZP.setAuthorizationUrl(t.authorizeUrl)}}};t.Z={...s}},725:function(e,t){"use strict";const n={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getWpcomUser:e=>e?.userConnectionData?.currentUser?.wpcomUser,getBlogId:e=>e?.userConnectionData?.currentUser?.blogId}};t.Z=n},535:function(e,t,n){"use strict";var i=n(17),o=n.n(i),r=n(818);class s{static mayBeInit(e,t){null===s.store&&(s.store=(0,r.createReduxStore)(e,t),(0,r.register)(s.store))}}o()(s,"store",null),t.Z=s},57:function(e,t){"use strict";t.Z="jetpack-connection"},428:function(e,t,n){"use strict";n.d(t,{t:function(){return u.Z}});var i=n(523),o=n(432),r=n(479),s=n(728),c=n(725),a=n(535),u=n(57);const l=window.JP_CONNECTION_INITIAL_STATE;l||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),a.Z.mayBeInit(u.Z,{__experimentalUseThunks:!0,reducer:r.Z,actions:i.ZP,selectors:c.Z,resolvers:s.Z,controls:o.Z,initialState:l||{}})},419:function(e,t,n){"use strict";n.d(t,{Wp:function(){return i.Wp},z$:function(){return o.Z}});var i=n(505),o=(n(714),n(354),n(404),n(53));n(380)},53:function(e,t,n){"use strict";var i=n(975),o=n(294),r=n(307);const{tracks:s}=i.Z,{recordEvent:c}=s;t.Z=function(){let{pageViewEventName:e=null,pageViewNamespace:t="jetpack",pageViewSuffix:n="page_view",pageViewEventProperties:a={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const[u,l]=(0,r.useState)(!1),{isUserConnected:d,isRegistered:p,userConnectionData:g={}}=(0,o.Z)(),{wpcomUser:{login:h,ID:f}={},blogId:m}=g.currentUser||{},v=(0,r.useCallback)((async function(e){d&&f&&h&&c(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{})}),[d,f,h]);return(0,r.useEffect)((()=>{d&&f&&h&&m&&i.Z.initialize(f,h,{blog_id:m})}),[m,f,h,d]),(0,r.useEffect)((()=>{const i=e?`${t}_${e}_${n}`:null;p&&i&&(u||(v(i,a),l(!0)))}),[u,t,e,n,p,a,v]),{recordEvent:v,tracks:s}}},380:function(e,t,n){"use strict";n(989),n(307)},404:function(e,t,n){"use strict";var i=n(736);n(483),n(819);const __=i.__;__("Upgrade your plan to use video covers","jetpack"),__("Upgrade your plan to upload audio","jetpack")},714:function(e,t,n){"use strict";n(817)},505:function(e,t,n){"use strict";function i(){return"object"==typeof window&&"string"==typeof window._currentSiteType?window._currentSiteType:null}function o(){return"simple"===i()}n.d(t,{Wp:function(){return o}})},354:function(e,t,n){"use strict";n(674),n(333)},128:function(e,t,n){t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let i=0,o=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(i++,"%c"===e&&(o=i))})),t.splice(o,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=n(942)(t);const{formatters:i}=e.exports;i.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},942:function(e,t,n){e.exports=function(e){function t(e){let n,o,r,s=null;function c(){for(var e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];if(!c.enabled)return;const r=c,s=Number(new Date),a=s-(n||s);r.diff=a,r.prev=n,r.curr=s,n=s,i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");let u=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,((e,n)=>{if("%%"===e)return"%";u++;const o=t.formatters[n];if("function"==typeof o){const t=i[u];e=o.call(r,t),i.splice(u,1),u--}return e})),t.formatArgs.call(r,i);(r.log||t.log).apply(r,i)}return c.namespace=e,c.useColors=t.useColors(),c.color=t.selectColor(e),c.extend=i,c.destroy=t.destroy,Object.defineProperty(c,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==s?s:(o!==t.namespaces&&(o=t.namespaces,r=t.enabled(e)),r),set:e=>{s=e}}),"function"==typeof t.init&&t.init(c),c}function i(e,n){const i=t(this.namespace+(void 0===n?":":n)+e);return i.log=this.log,i}function o(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},t.disable=function(){const e=[...t.names.map(o),...t.skips.map(o).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let n;t.save(e),t.namespaces=e,t.names=[],t.skips=[];const i=("string"==typeof e?e:"").split(/[\s,]+/),o=i.length;for(n=0;n<o;n++)i[n]&&("-"===(e=i[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let n,i;for(n=0,i=t.skips.length;n<i;n++)if(t.skips[n].test(e))return!1;for(n=0,i=t.names.length;n<i;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(171),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((n=>{t[n]=e[n]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t}},787:function(e){"use strict";if(void 0==={consumer_slug:"jetpack"}){var t=new Error('Cannot find module \'{"consumer_slug":"jetpack"}\'');throw t.code="MODULE_NOT_FOUND",t}e.exports={consumer_slug:"jetpack"}},196:function(e){"use strict";e.exports=window.React},819:function(e){"use strict";e.exports=window.lodash},989:function(e){"use strict";e.exports=window.wp.apiFetch},175:function(e){"use strict";e.exports=window.wp.blockEditor},609:function(e){"use strict";e.exports=window.wp.components},333:function(e){"use strict";e.exports=window.wp.compose},818:function(e){"use strict";e.exports=window.wp.data},307:function(e){"use strict";e.exports=window.wp.element},736:function(e){"use strict";e.exports=window.wp.i18n},817:function(e){"use strict";e.exports=window.wp.plugins},483:function(e){"use strict";e.exports=window.wp.url},17:function(e,t,n){var i=n(930);e.exports=function(e,t,n){return(t=i(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},674:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},61:function(e,t,n){var i=n(522).default;e.exports=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},930:function(e,t,n){var i=n(522).default,o=n(61);e.exports=function(e){var t=o(e,"string");return"symbol"===i(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},522:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};!function(){"use strict";var e=n(419),t=n(175),i=n(609),o=n(333),r=n(818),s=n(307),c=n(736);const __=c.__,_x=c._x,a={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&nbsp;":" "},u=/&(?:amp|lt|gt|quot|#39|nbsp);/g,l=e=>{if("string"!=typeof e)return e;return e.replace(u,(e=>a[e]))},d=e=>!new Set(["core/legacy-widget","core/widget-area"]).has(e);wp.hooks.addFilter("blocks.registerBlockType","widget/visibility",(function(e,t){return d(t)&&void 0!==e.attributes&&(e.attributes=Object.assign(e.attributes,{conditions:{type:"object",default:{}}})),e}));const p=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.reduce(((e,n)=>{const[i,o]=n,r=" ".repeat(3*t);if(Array.isArray(o)){const n={label:l(r+i),value:i,disabled:!0},s=p(o,t+1);return e.concat([n]).concat(s)}const s={label:l(r+o),value:i};return e.concat([s])}),[])},g=t=>{const{rule:n,onDelete:o,setMajor:r,setMinor:s}=t,c=[{label:__("User","jetpack"),value:"loggedin"},{label:__("Role","jetpack"),value:"role"}],a=widget_conditions_data.taxonomy&&widget_conditions_data.taxonomy.length>1||"taxonomy"===n.major,u=[{label:__("Taxonomy","jetpack"),value:"taxonomy"}],l=[{label:__("-- Select --","jetpack"),value:""},{label:__("Category","jetpack"),value:"category"},{label:__("Author","jetpack"),value:"author"}].concat((0,e.Wp)()?[]:c).concat([{label:__("Tag","jetpack"),value:"tag"},{label:__("Date","jetpack"),value:"date"},{label:__("Page","jetpack"),value:"page"}]).concat(a?u:[]);let d=[];return n.major in widget_conditions_data&&(d=p(widget_conditions_data[n.major])),React.createElement("div",{className:"widget-vis__rule"},React.createElement("div",{className:"widget-vis__rule-major"},React.createElement("span",{className:"widget-vis__if"},_x("If","Widget Visibility: If {Rule Major [Page]} is {Rule Minor [Search results]}","jetpack")),React.createElement("div",{className:"widget-vis__select"},React.createElement(i.SelectControl,{label:__("Major Rule","jetpack"),hideLabelFromVision:!0,value:n.major,options:l,onChange:r}))),n.major&&React.createElement("div",{className:"widget-vis__rule-minor"},React.createElement("span",{className:"widget-vis__is"},_x("is","Widget Visibility: {Rule Major [Page]} is {Rule Minor [Search results]}","jetpack")),React.createElement("div",{className:"widget-vis__select"},React.createElement(i.SelectControl,{className:"widget-vis__select-multi-level",label:__("Minor Rule","jetpack"),hideLabelFromVision:!0,value:n.minor,options:d,onChange:s}))),React.createElement("div",{className:"widget-vis__delete-rule"},React.createElement(i.Button,{onClick:o,isSmall:!0,variant:"secondary"},_x("Remove","Delete this visibility rule","jetpack"))))},h=e=>({action:"show",rules:[],match_all:0,...e}),f=(0,o.createHigherOrderComponent)((n=>o=>{const{clientId:c,attributes:a,setAttributes:u,isSelected:l}=o,p=(0,s.useMemo)((()=>a.conditions||{}),[a]),f=(0,s.useMemo)((()=>p.rules||[]),[p]),{tracks:m}=(0,e.z$)(),v=(0,r.useSelect)((e=>{const{getBlockParents:t,getBlock:n}=e("core/block-editor"),i=t(c,!0),o=i?n(i[0]):void 0;return!o||o&&"core/widget-area"===o.name}),[c]),C=(0,s.useCallback)((()=>{m.recordEvent("jetpack_widget_visibility_toggle_match_all_click"),u({conditions:{...h(p),match_all:"0"===p.match_all?"1":"0"}})}),[m,u,p]),y=(0,s.useCallback)((e=>u({conditions:{...h(p),action:e}})),[u,p]),w=(0,s.useCallback)((()=>{const e=[...f,{major:"",minor:""}];m.recordEvent("jetpack_widget_visibility_add_new_rule_click"),u({conditions:{...h(p),rules:e}})}),[f,m,u,p]),k=(0,s.useCallback)((e=>{const t=[...f.slice(0,e),...f.slice(e+1)];m.recordEvent("jetpack_widget_visibility_delete_rule_click"),u({conditions:{...h(p),rules:t}})}),[f,m,u,p]),_=(0,s.useCallback)(((e,t)=>{m.recordEvent("jetpack_widget_visibility_set_major_rule_click");let n="";t in widget_conditions_data&&Array.isArray(widget_conditions_data[t])&&widget_conditions_data[t].length>0&&(n=widget_conditions_data[t][0][0]);const i=[...f.slice(0,e),{...f[e],major:t,minor:n},...f.slice(e+1)];u({conditions:{...h(p),rules:i}})}),[m,f,u,p]),b=(0,s.useCallback)(((e,t)=>{if(m.recordEvent("jetpack_widget_visibility_set_minor_rule_click"),t&&t.includes("__HEADER__"))return;const n=[...f.slice(0,e),{...f[e],minor:t},...f.slice(e+1)];u({conditions:{...h(p),rules:n}})}),[m,f,u,p]);let S=null;return S=0===f.length?React.createElement(i.BaseControl,{id:"widget-vis__wrapper",className:"widget-vis__wrapper",label:__("Visibility","jetpack"),help:__("No visibility rules yet. Add at least one rule to use this feature.","jetpack")},React.createElement(i.Button,{variant:"secondary",onClick:w,className:"widget-vis__add-new-rule"},__("Add new rule","jetpack"))):React.createElement(i.BaseControl,{className:"widget-vis__wrapper",id:"widget-vis__wrapper",label:__("Visibility","jetpack")},React.createElement(i.SelectControl,{className:"widget-vis__show-hide",label:__("Action","jetpack"),hideLabelFromVision:!0,value:a.conditions.action,options:[{label:__("Show this block","jetpack"),value:"show"},{label:__("Hide this block","jetpack"),value:"hide"}],onChange:y}),f.map(((e,t)=>React.createElement(g,{key:t,rule:e,i:t,onDelete:()=>k(t),setMajor:e=>_(t,e),setMinor:e=>b(t,e)}))),f.length>1&&React.createElement(i.ToggleControl,{className:"widget-vis__match-all",label:__("Match all rules","jetpack"),checked:"1"===p.match_all,onChange:C}),React.createElement(i.Button,{variant:"secondary",onClick:w},__("Add new rule","jetpack"))),React.createElement(s.Fragment,null,React.createElement(n,o),l&&v&&d(o.name)&&React.createElement(t.InspectorAdvancedControls,null,S),l&&!v&&d(o.name)&&React.createElement(t.InspectorAdvancedControls,null,React.createElement(i.BaseControl,{id:"widget-vis__wrapper",className:"widget-vis__wrapper",label:__("Visibility","jetpack"),help:__("Please select the top level block of this widget to apply visibility rules.","jetpack")})))}),"visibilityAdvancedControls");wp.hooks.addFilter("editor.BlockEdit","widget/visibility",f)}(),window.WidgetVisibility={}.WidgetVisibility}();
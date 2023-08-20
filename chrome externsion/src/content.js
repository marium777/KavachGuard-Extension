function ownFun(a) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost/kavach/d.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('link=' + encodeURIComponent(a));
    
    xhr.onload = function() {
      if (xhr.status === 200) {
        const response = xhr.responseText;
        console.log(response);
      } else {
        console.log('An error occurred');
      }
    };
    
    console.log(a);
}

!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=421)}({102:function(t,e,r){"use strict";(function(t,n){var i,o=r(122);i="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:n;var s=Object(o.a)(i);e.a=s}).call(this,r(73),r(196)(t))},104:function(t,e,r){"use strict";r.r(e),r.d(e,"__DO_NOT_USE__ActionTypes",(function(){return o})),r.d(e,"applyMiddleware",(function(){return m})),r.d(e,"bindActionCreators",(function(){return l})),r.d(e,"combineReducers",(function(){return c})),r.d(e,"compose",(function(){return y})),r.d(e,"createStore",(function(){return a}));var n=r(102),i=function(){return Math.random().toString(36).substring(7).split("").join(".")},o={INIT:"@@redux/INIT"+i(),REPLACE:"@@redux/REPLACE"+i(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+i()}};function s(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function a(t,e,r){var i;if("function"==typeof e&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof e&&void 0===r&&(r=e,e=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(a)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var u=t,c=e,f=[],l=f,h=!1;function d(){l===f&&(l=f.slice())}function p(){if(h)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return c}function y(t){if("function"!=typeof t)throw new Error("Expected the listener to be a function.");if(h)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var e=!0;return d(),l.push(t),function(){if(e){if(h)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");e=!1,d();var r=l.indexOf(t);l.splice(r,1),f=null}}}function m(t){if(!s(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(h)throw new Error("Reducers may not dispatch actions.");try{h=!0,c=u(c,t)}finally{h=!1}for(var e=f=l,r=0;r<e.length;r++){(0,e[r])()}return t}function v(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");u=t,m({type:o.REPLACE})}function w(){var t,e=y;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new TypeError("Expected the observer to be an object.");function r(){t.next&&t.next(p())}return r(),{unsubscribe:e(r)}}})[n.a]=function(){return this},t}return m({type:o.INIT}),(i={dispatch:m,subscribe:y,getState:p,replaceReducer:v})[n.a]=w,i}function u(t,e){var r=e&&e.type;return"Given "+(r&&'action "'+String(r)+'"'||"an action")+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function c(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++){var i=e[n];0,"function"==typeof t[i]&&(r[i]=t[i])}var s,a=Object.keys(r);try{!function(t){Object.keys(t).forEach((function(e){var r=t[e];if(void 0===r(void 0,{type:o.INIT}))throw new Error('Reducer "'+e+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===r(void 0,{type:o.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+o.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(r)}catch(t){s=t}return function(t,e){if(void 0===t&&(t={}),s)throw s;for(var n=!1,i={},o=0;o<a.length;o++){var c=a[o],f=r[c],l=t[c],h=f(l,e);if(void 0===h){var d=u(c,e);throw new Error(d)}i[c]=h,n=n||h!==l}return(n=n||a.length!==Object.keys(t).length)?i:t}}function f(t,e){return function(){return e(t.apply(this,arguments))}}function l(t,e){if("function"==typeof t)return f(t,e);if("object"!=typeof t||null===t)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var r={};for(var n in t){var i=t[n];"function"==typeof i&&(r[n]=f(i,e))}return r}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function d(t,e){var r=Object.keys(t);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(t)),e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(r,!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}))}function m(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return function(){var r=t.apply(void 0,arguments),n=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},i={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},o=e.map((function(t){return t(i)}));return p({},r,{dispatch:n=y.apply(void 0,o)(r.dispatch)})}}}},122:function(t,e,r){"use strict";function n(t){var e,r=t.Symbol;return"function"==typeof r?r.observable?e=r.observable:(e=r("observable"),r.observable=e):e="@@observable",e}r.d(e,"a",(function(){return n}))},146:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TOGGLE_THEME=void 0,e.TOGGLE_THEME="TOGGLE_THEME"},147:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SET_FILTER_EFFECT=e.SET_TRAINED_MODEL=e.SET_FILTER_STRICTNESS=e.TOGGLE_LOGGING=e.TOGGLE_DIV_FILTERING=void 0,e.TOGGLE_DIV_FILTERING="TOGGLE_DIV_FILTERING",e.TOGGLE_LOGGING="TOGGLE_LOGGING",e.SET_FILTER_STRICTNESS="SET_FILTER_STRICTNESS",e.SET_TRAINED_MODEL="SET_TRAINED_MODEL",e.SET_FILTER_EFFECT="SET_FILTER_EFFECT"},148:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setTotalBlocked=e.SET_TOTAL_BLOCKED=void 0,e.SET_TOTAL_BLOCKED="SET_TOTAL_BLOCKED",e.setTotalBlocked=function(t){return{type:e.SET_TOTAL_BLOCKED,payload:{totalBlocked:t}}}},183:function(t,e,r){var n=r(184),i=r(185),o=r(186),s=r(187),a=r(188),u=r(189),c=r(190),f=r(191),l=r(192),h=r(193),d=r(194);n.extend(i),n.extend(o),n.extend(s),n.extend(a),n.extend(u),n.extend(c),n.extend(f),n.extend(l),n.extend(h),n.extend(d);var p=r(195);n.extend(p)},184:function(t,e,r){t.exports=function(){"use strict";var t=6e4,e=36e5,r="millisecond",n="second",i="minute",o="hour",s="day",a="week",u="month",c="quarter",f="year",l="date",h="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},v={s:m,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+m(n,2,"0")+":"+m(i,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,u),o=r-i<0,s=e.clone().add(n+(o?-1:1),u);return+(-(n+(r-i)/(o?i-s:s-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:f,w:a,d:s,D:l,h:o,m:i,s:n,ms:r,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",g={};g[w]=y;var b=function(t){return t instanceof O},S=function t(e,r,n){var i;if(!e)return w;if("string"==typeof e){var o=e.toLowerCase();g[o]&&(i=o),r&&(g[o]=r,i=o);var s=e.split("-");if(!i&&s.length>1)return t(s[0])}else{var a=e.name;g[a]=e,i=a}return!n&&i&&(w=i),i||!n&&w},M=function(t,e){if(b(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new O(r)},_=v;_.l=S,_.i=b,_.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function y(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=y.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(_.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(d);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return _},m.isValid=function(){return!(this.$d.toString()===h)},m.isSame=function(t,e){var r=M(t);return this.startOf(e)<=r&&r<=this.endOf(e)},m.isAfter=function(t,e){return M(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<M(t)},m.$g=function(t,e,r){return _.u(t)?this[e]:this.set(r,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var r=this,c=!!_.u(e)||e,h=_.p(t),d=function(t,e){var n=_.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return c?n:n.endOf(s)},p=function(t,e){return _.w(r.toDate()[t].apply(r.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},y=this.$W,m=this.$M,v=this.$D,w="set"+(this.$u?"UTC":"");switch(h){case f:return c?d(1,0):d(31,11);case u:return c?d(1,m):d(0,m+1);case a:var g=this.$locale().weekStart||0,b=(y<g?y+7:y)-g;return d(c?v-b:v+(6-b),m);case s:case l:return p(w+"Hours",0);case o:return p(w+"Minutes",1);case i:return p(w+"Seconds",2);case n:return p(w+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var a,c=_.p(t),h="set"+(this.$u?"UTC":""),d=(a={},a[s]=h+"Date",a[l]=h+"Date",a[u]=h+"Month",a[f]=h+"FullYear",a[o]=h+"Hours",a[i]=h+"Minutes",a[n]=h+"Seconds",a[r]=h+"Milliseconds",a)[c],p=c===s?this.$D+(e-this.$W):e;if(c===u||c===f){var y=this.clone().set(l,1);y.$d[d](p),y.init(),this.$d=y.set(l,Math.min(this.$D,y.daysInMonth())).$d}else d&&this.$d[d](p);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[_.p(t)]()},m.add=function(r,c){var l,h=this;r=Number(r);var d=_.p(c),p=function(t){var e=M(h);return _.w(e.date(e.date()+Math.round(t*r)),h)};if(d===u)return this.set(u,this.$M+r);if(d===f)return this.set(f,this.$y+r);if(d===s)return p(1);if(d===a)return p(7);var y=(l={},l[i]=t,l[o]=e,l[n]=1e3,l)[d]||1,m=this.$d.getTime()+r*y;return _.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),o=this.$H,s=this.$m,a=this.$M,u=r.weekdays,c=r.months,f=function(t,r,i,o){return t&&(t[r]||t(e,n))||i[r].slice(0,o)},l=function(t){return _.s(o%12||12,t,"0")},d=r.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},y={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:_.s(a+1,2,"0"),MMM:f(r.monthsShort,a,c,3),MMMM:f(c,a),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:f(r.weekdaysMin,this.$W,u,2),ddd:f(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(o),HH:_.s(o,2,"0"),h:l(1),hh:l(2),a:d(o,s,!0),A:d(o,s,!1),m:String(s),mm:_.s(s,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:i};return n.replace(p,(function(t,e){return e||y[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,l,h){var d,p=_.p(l),y=M(r),m=(y.utcOffset()-this.utcOffset())*t,v=this-y,w=_.m(this,y);return w=(d={},d[f]=w/12,d[u]=w,d[c]=w/3,d[a]=(v-m)/6048e5,d[s]=(v-m)/864e5,d[o]=v/e,d[i]=v/t,d[n]=v/1e3,d)[p]||v,h?w:_.a(w)},m.daysInMonth=function(){return this.endOf(u).$D},m.$locale=function(){return g[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=S(t,e,!0);return n&&(r.$L=n),r},m.clone=function(){return _.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},y}(),E=O.prototype;return M.prototype=E,[["$ms",r],["$s",n],["$m",i],["$H",o],["$W",s],["$M",u],["$y",f],["$D",l]].forEach((function(t){E[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,O,M),t.$i=!0),M},M.locale=S,M.isDayjs=b,M.unix=function(t){return M(1e3*t)},M.en=g[w],M.Ls=g,M.p={},M}()},185:function(t,e,r){t.exports=function(){"use strict";return function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}}}()},186:function(t,e,r){t.exports=function(){"use strict";return function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}}}()},187:function(t,e,r){t.exports=function(){"use strict";return function(t,e,r){var n=e.prototype,i=n.format;r.en.ordinal=function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"},n.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return i.bind(this)(t);var n=this.$utils(),o=(t||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(t){switch(t){case"Q":return Math.ceil((e.$M+1)/3);case"Do":return r.ordinal(e.$D);case"gggg":return e.weekYear();case"GGGG":return e.isoWeekYear();case"wo":return r.ordinal(e.week(),"W");case"w":case"ww":return n.s(e.week(),"w"===t?1:2,"0");case"W":case"WW":return n.s(e.isoWeek(),"W"===t?1:2,"0");case"k":case"kk":return n.s(String(0===e.$H?24:e.$H),"k"===t?1:2,"0");case"X":return Math.floor(e.$d.getTime()/1e3);case"x":return e.$d.getTime();case"z":return"["+e.offsetName()+"]";case"zzz":return"["+e.offsetName("long")+"]";default:return t}}));return i.bind(this)(o)}}}()},188:function(t,e,r){t.exports=function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^\s\d-_:/()]+/,o={},s=function(t){return(t=+t)+(t>68?1900:2e3)},a=function(t){return function(e){this[t]=+e}},u=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),r=60*e[1]+(+e[2]||0);return 0===r?0:"+"===e[0]?-r:r}(t)}],c=function(t){var e=o[t];return e&&(e.indexOf?e:e.s.concat(e.f))},f=function(t,e){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(t.indexOf(n(i,0,e))>-1){r=i>12;break}}else r=t===(e?"pm":"PM");return r},l={A:[i,function(t){this.afternoon=f(t,!1)}],a:[i,function(t){this.afternoon=f(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[r,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[r,a("day")],Do:[i,function(t){var e=o.ordinal,r=t.match(/\d+/);if(this.day=r[0],e)for(var n=1;n<=31;n+=1)e(n).replace(/\[|\]/g,"")===t&&(this.day=n)}],M:[n,a("month")],MM:[r,a("month")],MMM:[i,function(t){var e=c("months"),r=(c("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(t){var e=c("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,a("year")],YY:[r,function(t){this.year=s(t)}],YYYY:[/\d{4}/,a("year")],Z:u,ZZ:u};function h(r){var n,i;n=r,i=o&&o.formats;for(var s=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,r,n){var o=n&&n.toUpperCase();return r||i[n]||t[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,r){return e||r.slice(1)}))}))).match(e),a=s.length,u=0;u<a;u+=1){var c=s[u],f=l[c],h=f&&f[0],d=f&&f[1];s[u]=d?{regex:h,parser:d}:c.replace(/^\[|\]$/g,"")}return function(t){for(var e={},r=0,n=0;r<a;r+=1){var i=s[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,u=i.parser,c=t.slice(n),f=o.exec(c)[0];u.call(e,f),t=t.replace(f,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var r=t.hours;e?r<12&&(t.hours+=12):12===r&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,r){r.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(s=t.parseTwoDigitYear);var n=e.prototype,i=n.parse;n.parse=function(t){var e=t.date,n=t.utc,s=t.args;this.$u=n;var a=s[1];if("string"==typeof a){var u=!0===s[2],c=!0===s[3],f=u||c,l=s[2];c&&(l=s[2]),o=this.$locale(),!u&&l&&(o=r.Ls[l]),this.$d=function(t,e,r){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var n=h(e)(t),i=n.year,o=n.month,s=n.day,a=n.hours,u=n.minutes,c=n.seconds,f=n.milliseconds,l=n.zone,d=new Date,p=s||(i||o?1:d.getDate()),y=i||d.getFullYear(),m=0;i&&!o||(m=o>0?o-1:d.getMonth());var v=a||0,w=u||0,g=c||0,b=f||0;return l?new Date(Date.UTC(y,m,p,v,w,g,b+60*l.offset*1e3)):r?new Date(Date.UTC(y,m,p,v,w,g,b)):new Date(y,m,p,v,w,g,b)}catch(t){return new Date("")}}(e,a,n),this.init(),l&&!0!==l&&(this.$L=this.locale(l).$L),f&&e!=this.format(a)&&(this.$d=new Date("")),o={}}else if(a instanceof Array)for(var d=a.length,p=1;p<=d;p+=1){s[1]=a[p-1];var y=r.apply(this,s);if(y.isValid()){this.$d=y.$d,this.$L=y.$L,this.init();break}p===d&&(this.$d=new Date(""))}else i.call(this,t)}}}()},189:function(t,e,r){t.exports=function(){"use strict";return function(t,e){e.prototype.weekday=function(t){var e=this.$locale().weekStart||0,r=this.$W,n=(r<e?r+7:r)-e;return this.$utils().u(t)?n:this.subtract(n,"day").add(t,"day")}}}()},190:function(t,e,r){t.exports=function(){"use strict";return function(t,e){e.prototype.weekYear=function(){var t=this.month(),e=this.week(),r=this.year();return 1===e&&11===t?r+1:0===t&&e>=52?r-1:r}}}()},191:function(t,e,r){t.exports=function(){"use strict";var t="week",e="year";return function(r,n,i){var o=n.prototype;o.week=function(r){if(void 0===r&&(r=null),null!==r)return this.add(7*(r-this.week()),"day");var n=this.$locale().yearStart||1;if(11===this.month()&&this.date()>25){var o=i(this).startOf(e).add(1,e).date(n),s=i(this).endOf(t);if(o.isBefore(s))return 1}var a=i(this).startOf(e).date(n).startOf(t).subtract(1,"millisecond"),u=this.diff(a,t,!0);return u<0?i(this).startOf("week").week():Math.ceil(u)},o.weeks=function(t){return void 0===t&&(t=null),this.week(t)}}}()},192:function(t,e,r){t.exports=function(){"use strict";return function(t,e,r){r.isMoment=function(t){return r.isDayjs(t)}}}()},193:function(t,e,r){t.exports=function(){"use strict";return function(t,e,r){var n=e.prototype,i=function(t){return t&&(t.indexOf?t:t.s)},o=function(t,e,r,n,o){var s=t.name?t:t.$locale(),a=i(s[e]),u=i(s[r]),c=a||u.map((function(t){return t.slice(0,n)}));if(!o)return c;var f=s.weekStart;return c.map((function(t,e){return c[(e+(f||0))%7]}))},s=function(){return r.Ls[r.locale()]},a=function(t,e){return t.formats[e]||function(t){return t.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,r){return e||r.slice(1)}))}(t.formats[e.toUpperCase()])},u=function(){var t=this;return{months:function(e){return e?e.format("MMMM"):o(t,"months")},monthsShort:function(e){return e?e.format("MMM"):o(t,"monthsShort","months",3)},firstDayOfWeek:function(){return t.$locale().weekStart||0},weekdays:function(e){return e?e.format("dddd"):o(t,"weekdays")},weekdaysMin:function(e){return e?e.format("dd"):o(t,"weekdaysMin","weekdays",2)},weekdaysShort:function(e){return e?e.format("ddd"):o(t,"weekdaysShort","weekdays",3)},longDateFormat:function(e){return a(t.$locale(),e)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};n.localeData=function(){return u.bind(this)()},r.localeData=function(){var t=s();return{firstDayOfWeek:function(){return t.weekStart||0},weekdays:function(){return r.weekdays()},weekdaysShort:function(){return r.weekdaysShort()},weekdaysMin:function(){return r.weekdaysMin()},months:function(){return r.months()},monthsShort:function(){return r.monthsShort()},longDateFormat:function(e){return a(t,e)},meridiem:t.meridiem,ordinal:t.ordinal}},r.months=function(){return o(s(),"months")},r.monthsShort=function(){return o(s(),"monthsShort","months",3)},r.weekdays=function(t){return o(s(),"weekdays",null,null,t)},r.weekdaysShort=function(t){return o(s(),"weekdaysShort","weekdays",3,t)},r.weekdaysMin=function(t){return o(s(),"weekdaysMin","weekdays",2,t)}}}()},194:function(t,e,r){t.exports=function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(e,r,n){var i=r.prototype,o=i.format;n.en.formats=t,i.format=function(e){void 0===e&&(e="YYYY-MM-DDTHH:mm:ssZ");var r=this.$locale().formats,n=function(e,r){return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,i){var o=i&&i.toUpperCase();return n||r[i]||t[i]||r[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,r){return e||r.slice(1)}))}))}(e,void 0===r?{}:r);return o.call(this,n)}}}()},195:function(t,e){const r={en_GB:"en-gb",en_US:"en",zh_CN:"zh-cn",zh_TW:"zh-tw"};t.exports=function(t,e,n){const i=e.prototype.locale;e.prototype.locale=function(t){var e;return"string"==typeof t&&(t=r[e=t]||e.split("_")[0]),i.call(this,t)}}},196:function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},197:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.createChromeStore=void 0;var i=n(r(198));e.createChromeStore=function(t){var e={createStore:t.createStore,storageArea:"local",storageKey:"nsfw-filter-redux-storage"};return i.default(e)}},198:function(t,e,r){"use strict";
/**
 * @license
 * ReduxedChromeStorage v2.0.0
 * https://github.com/hindmost/reduxed-chrome-storage
 * Copyright (c) Savr Goryaev aka hindmost
 *
 * This source code is licensed under the MIT license
 * https://github.com/hindmost/reduxed-chrome-storage/blob/master/LICENSE
 */
function n(t){return null==t||"object"!=typeof t?t:Array.isArray(t)?t.map(t=>n(t)):Object.keys(t).reduce((e,r)=>(e[r]=n(t[r]),e),{})}function i(t,e){if(t===e)return!0;if(null==t||"object"!=typeof t||null==e||"object"!=typeof e)return!1;const r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(const o of r)if(n.indexOf(o)<=-1||!i(t[o],e[o]))return!1;return!0}function o(t,e){return Array.isArray(e)?n(e):"object"!=typeof t||Array.isArray(t)||"object"!=typeof e?void 0!==e?e:t:Object.keys(t).concat(Object.keys(e).filter(e=>!t[e])).reduce((r,n)=>(r[n]=o(t[n],e[n]),r),{})}r.r(e);class s{constructor({createStore:t,reducer:e,storage:r,bufferLife:n,initialState:i,enhancer:o}){this.createStore=t,this.storage=r,this.reducer=e,this.enhancer=o,this.buffLife=n?Math.min(Math.max(n,0),2e3):100,this.state=i,this.buffStore=null,this.lastState=null,this.listeners=[],this.inited=!1,this.dispatch=this.dispatch.bind(this),this.subscribe=this.subscribe.bind(this)}init(){if(this.inited)return new Promise(t=>{t(this)});const t=this.state;this.state=null;const e=this._createStore().getState();return this.storage.subscribe(t=>{if(!i(t,this.state)){this._setState(t);for(const t of this.listeners)t()}}),this.inited=!0,new Promise(r=>{this.storage.load(n=>{let s=n?o(e,n):e;t&&(s=o(s,t)),this._setState(s),i(s,n)||this._send2Storage(s),r(this)})})}_createStore(t){try{return this.createStore(this.reducer,t,this.enhancer)}catch(t){throw new Error("createStore() call failed")}}_send2Storage(t){try{this.storage.save(t)}catch(t){throw new Error("Browser storage limit exceeded")}}_setState(t){t&&(this.state=n(t))}getState(){return this.state}subscribe(t){return"function"==typeof t&&this.listeners.push(t),()=>{"function"==typeof t&&(this.listeners=this.listeners.filter(e=>e!==t))}}dispatch(t){this.buffStore||(this.buffStore=this._createStore(this.state),this.lastState=this.buffStore.getState(),setTimeout(()=>{this.buffStore=null},this.buffLife));let e=this.buffStore;const r=e.subscribe(()=>{const t=this.buffStore||e,n=t&&t.getState();i(n,this.lastState)||(this._send2Storage(n),this.lastState=n,r(),e=null)});return e.dispatch(t)}replaceReducer(t){return"function"==typeof t&&(this.reducer=t),this}[Symbol.observable](){const t=this.getState,e=this.subscribe;return{subscribe(r){if("object"!=typeof r||null===r)throw new TypeError("Expected the observer to be an object.");function n(){const e=r;e.next&&e.next(t())}n();return{unsubscribe:e(n)}},[Symbol.observable](){return this}}}}var a,u;!function(t){t.local="local",t.sync="sync"}(a||(a={}));class c{constructor({namespace:t,area:e,key:r}){this.ns=t,this.areaName=e===a.sync?a.sync:a.local,this.key=r||"reduxed",this.listeners=[]}init(){this.ns.storage.onChanged.addListener((t,e)=>{if(e!==this.areaName||!(this.key in t))return;const{newValue:r}=t[this.key];if(r)for(const t of this.listeners)t(r,this.areaName)})}subscribe(t){"function"==typeof t&&this.listeners.push(t)}}class f extends c{constructor({namespace:t,area:e,key:r}){super({namespace:t,area:e,key:r}),this.areaApi=this.ns.storage[this.areaName]}load(t){"function"==typeof t&&this.areaApi.get(this.key,e=>{t(!this.ns.runtime.lastError&&e&&e[this.key])})}save(t){this.areaApi.set({[this.key]:t},()=>{if(this.ns.runtime.lastError)throw new Error})}}class l extends c{constructor({namespace:t,area:e,key:r}){super({namespace:t,area:e,key:r}),this.areaApi=this.ns.storage[this.areaName]}load(t){"function"==typeof t&&this.areaApi.get(this.key).then(e=>{t(!this.ns.runtime.lastError&&e&&e[this.key])})}save(t){this.areaApi.set({[this.key]:t}).then(()=>{if(this.ns.runtime.lastError)throw new Error})}}!function(t){t.chrome="chrome",t.browser="browser"}(u||(u={})),e.default=function({createStore:t,namespace:e,chromeNs:r,browserNs:n,storageArea:i,storageKey:o,bufferLife:a}){if("function"!=typeof t)throw new Error("Missing 'createStore' parameter/property");const c=n||e===u.browser?new l({namespace:n||browser,area:i,key:o}):new f({namespace:r||chrome,area:i,key:o});return c.init(),function(e,r,n){if("function"!=typeof e)throw new Error("Missing 'reducer' parameter");if("function"==typeof r&&"function"==typeof n)throw new Error("Multiple 'enhancer' parameters unallowed");return"function"==typeof r&&void 0===n&&(n=r,r=void 0),new s({createStore:t,storage:c,bufferLife:a,reducer:e,initialState:r,enhancer:n}).init()}}},199:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.rootReducer=void 0;var n=r(104),i=r(200),o=r(201),s=r(202);e.rootReducer=n.combineReducers({appearance:i.appearance,settings:o.settings,statistics:s.statistics})},200:function(t,e,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.appearance=void 0;var i=r(146),o={darkTheme:!0};e.appearance=function(t,e){switch(void 0===t&&(t=o),e.type){case i.TOGGLE_THEME:return n(n({},t),{darkTheme:!t.darkTheme});default:return t}}},201:function(t,e,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.settings=void 0;var i=r(147),o={logging:!1,filterEffect:"blur",trainedModel:"MobileNet_v1.2",filterStrictness:55};e.settings=function(t,e){switch(void 0===t&&(t=o),e.type){case i.TOGGLE_LOGGING:return n(n({},t),{logging:!t.logging});case i.SET_FILTER_EFFECT:return n(n({},t),{filterEffect:e.payload.filterEffect});case i.SET_TRAINED_MODEL:return n(n({},t),{trainedModel:e.payload.trainedModel});case i.SET_FILTER_STRICTNESS:return n(n({},t),{filterStrictness:e.payload.filterStrictness});default:return t}}},202:function(t,e,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.statistics=void 0;var i=r(148),o={totalBlocked:0};e.statistics=function(t,e){void 0===t&&(t=o);var r=e.type,s=e.payload;switch(r){case i.SET_TOTAL_BLOCKED:return n(n({},t),{totalBlocked:s.totalBlocked});default:return t}}},214:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PredictionResponse=e.PredictionRequest=void 0;var n=function(){function t(t){this.url=t,this._reconectCount=0}return t.prototype.clearTimer=function(){return this._reconectCount++,clearTimeout(this.reconectTimer),this._reconectCount},t}();e.PredictionRequest=n;var i=function(t,e,r){var n="string"==typeof r&&r.length>0?"Prediction result is "+t+" for image "+e+", error: "+r:"Prediction result is "+t+" for image "+e;this.url=e,this.result=t,this.message=n};e.PredictionResponse=i},421:function(t,e,r){r(183),t.exports=r(422)},422:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,i=r(104),o=r(197),s=r(199),a=r(423),u=r(424);window.self===window.top&&(n=new u.ImageFilter,new a.DOMWatcher(n).watch(),o.createChromeStore({createStore:i.createStore})(s.rootReducer).then((function(t){var e=t.getState().settings.filterEffect;n.setSettings({filterEffect:e})})).catch((function(t){console.warn(t),n.setSettings({filterEffect:"blur"})})))},423:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DOMWatcher=void 0;var n=function(){function t(t){this.imageFilter=t,this.observer=new MutationObserver(this.callback.bind(this))}return t.prototype.watch=function(){this.observer.observe(document,t.getConfig())},t.prototype.callback=function(t){for(var e=0;e<t.length;e++){var r=t[e];"childList"===r.type&&r.addedNodes.length>0?this.findAndCheckAllImages(r.target):"attributes"===r.type&&this.checkAttributeMutation(r)}},t.prototype.findAndCheckAllImages=function(t){for(var e=t.getElementsByTagName("img"),r=0;r<e.length;r++)this.imageFilter.analyzeImage(e[r],!1)},t.prototype.checkAttributeMutation=function(t){"IMG"===t.target.nodeName&&this.imageFilter.analyzeImage(t.target,"src"===t.attributeName)},t.getConfig=function(){return{characterData:!1,subtree:!0,childList:!0,attributes:!0,attributeFilter:["src"]}},t}();e.DOMWatcher=n},424:function(t,e,r){"use strict";var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.ImageFilter=void 0;var o=r(214),s=function(t){function e(){var e=t.call(this)||this;return e.MIN_IMAGE_SIZE=41,e.settings={filterEffect:"hide"},e}return i(e,t),e.prototype.setSettings=function(t){this.settings=t},e.prototype.analyzeImage=function(t,e){void 0===e&&(e=!1),(e||void 0===t.dataset.nsfwFilterStatus)&&t.src.length>0&&(t.width>this.MIN_IMAGE_SIZE&&t.height>this.MIN_IMAGE_SIZE||0===t.height||0===t.width)&&(t.dataset.nsfwFilterStatus="processing",this._analyzeImage(t))},e.prototype._analyzeImage=function(t){var e=this;this.hideImage(t);var r=new o.PredictionRequest(t.src);this.requestToAnalyzeImage(r).then((function(r){var n=r.result,i=r.url;n?("blur"===e.settings.filterEffect&&(t.style.filter="blur(25px)",ownFun(t.src),e.showImage(t,i)),e.blockedItems++,t.dataset.nsfwFilterStatus="nsfw"):e.showImage(t,i)})).catch((function(r){var n=r.url;e.showImage(t,n)}))},e.prototype.hideImage=function(t){var e;"BODY"===(null===(e=t.parentNode)||void 0===e?void 0:e.nodeName)&&(t.hidden=!0),t.style.visibility="hidden"},e.prototype.showImage=function(t,e){var r;t.src===e&&("BODY"===(null===(r=t.parentNode)||void 0===r?void 0:r.nodeName)&&(t.hidden=!1),t.dataset.nsfwFilterStatus="sfw",t.style.visibility="visible")},e}(r(425).Filter);e.ImageFilter=s},425:function(t,e,r){"use strict";var n=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(i,o){function s(t){try{u(n.next(t))}catch(t){o(t)}}function a(t){try{u(n.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))},i=this&&this.__generator||function(t,e){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},o=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},s=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,i,o=r.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(n=o.next()).done;)s.push(n.value)}catch(t){i={error:t}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return s};Object.defineProperty(e,"__esModule",{value:!0}),e.Filter=void 0;var a=r(214),u=function(){function t(){this.blockedItems=0,this.requestQueue=new Map}return t.prototype.getBlockAmount=function(){return this.blockedItems},t.prototype.requestToAnalyzeImage=function(t){return n(this,void 0,void 0,(function(){var e=this;return i(this,(function(r){switch(r.label){case 0:return[4,new Promise((function(r,n){var i,a,u,c=t.url;try{e.requestQueue.has(c)?null===(u=e.requestQueue.get(c))||void 0===u||u.push([{resolve:r,reject:n}]):(e.requestQueue.set(c,[[{resolve:r,reject:n}]]),e._requestToAnalyzeImage(t,r))}catch(r){if(e.requestQueue.has(c))try{for(var f=o(e.requestQueue.get(c)),l=f.next();!l.done;l=f.next()){(0,s(l.value,1)[0].reject)(t)}}catch(t){i={error:t}}finally{try{l&&!l.done&&(a=f.return)&&a.call(f)}finally{if(i)throw i.error}}else n(t);e.requestQueue.delete(c)}}))];case 1:return[2,r.sent()]}}))}))},t.prototype._requestToAnalyzeImage=function(t,e){var r=this;chrome.runtime.sendMessage(t,(function(n){var i,a;if(null===chrome.runtime.lastError||void 0===chrome.runtime.lastError){try{for(var u=o(r.requestQueue.get(t.url)),c=u.next();!c.done;c=u.next()){(0,s(c.value,1)[0].resolve)(n)}}catch(t){i={error:t}}finally{try{c&&!c.done&&(a=u.return)&&a.call(u)}finally{if(i)throw i.error}}r.requestQueue.delete(t.url)}else r._handleBackgroundErrors(t,e,chrome.runtime.lastError.message)}))},t.prototype._handleBackgroundErrors=function(t,e,r){var n=this,i=t.clearTimer();console.log("[NSFW-Filter] Cannot connect to background worker for "+t.url+" image, attempt "+i+", error: "+r),i>5?(e(new a.PredictionResponse(!1,t.url,"Background worker doesn't working")),console.warn("[NSFW-Filter] Background worker is down, marked as visible "+t.url),this.requestQueue.delete(t.url)):t.reconectTimer=window.setTimeout((function(){return n._requestToAnalyzeImage(t,e)}),500)},t}();e.Filter=u},73:function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r}});
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[401],{6134:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events/lynx-farm",function(){return t(2323)}])},2110:function(e){"use strict";function n(e,n){return t(e.dateTime,n)}function t(e,n){return new Date(e-i(n)-6e4)}function i(e){return 36e5*e}e.exports.namedDay=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],e.exports.namedMonth=["January","February","March","April","May","June","July","August","September","October","November","December"],e.exports.timeUntil=function(e){return(e.dateTime-new Date)/1e3},e.exports.eventHastPast=function(e){var n;return null==(n=e.dateTime)||void 0==n||""===n||new Date(e.dateTime)-new Date<-i(e.runningTime)},e.exports.timeBefore=function(e,t){return n(e,t)},e.exports.hoursBeforeEvent=n,e.exports.hoursBeforeTime=t,e.exports.hoursToMilliseconds=i,e.exports.oneDayToMilliseconds=864e5,e.exports.runAtDate=function(e,n){var t=new Date().getTime(),i=Math.max(n.getTime()-t,0);i<=0||(i>2147483647?setTimeout(()=>{runAtDate(e,n)},2147483647):setTimeout(e,i))}},9587:function(e,n,t){"use strict";t.d(n,{Xr:function(){return o},ZP:function(){return r}});var i=t(5893);function r(e){let{diff:n}=e;return"easy"===n?o():"medium"===n?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s,{diff:"MEDIUM",explain:"Mistakes are fine, it will slow us down a bit but it's not a big problem."})}):"hard"===n?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s,{diff:"HARD",explain:"This event will not be a faceroll. You will not get carried if you are not good enough. Read through and make sure you have met all the requirements listed here, otherwise you will waste other people's time with countless wipes."})}):(0,i.jsx)(i.Fragment,{})}function s(e){let{diff:n,explain:t}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"card bg-light timeBox",children:[(0,i.jsxs)("div",{className:"card-header",children:[(0,i.jsx)("p",{children:"This event's difficulty is "}),(0,i.jsx)("h3",{children:n})]}),(0,i.jsx)("div",{className:"card-body",children:(0,i.jsx)("p",{children:t})})]})})}function o(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s,{diff:"EASY",explain:"It makes no difference even if you go AFK."})})}},2453:function(e,n,t){"use strict";t.d(n,{G4:function(){return l},ZP:function(){return h}});var i=t(5893),r=t(2983),s=t(9587),o=t(7100),a=t(2110);function l(e){if((null==e?void 0:e.instances)!=void 0){for(var n=0;n<e.instances.length;n++)if(!(0,a.eventHastPast)(e.instances[n]))return e.instances[n]}}function u(e){let{signupRequired:n}=e;return n||void 0==n?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{children:"Signing up"}),(0,i.jsx)("p",{children:"Signups are mandatory for this event. Signup sheet can be found at the bottom of this page. Make sure you read all the requirements carefully and make sure you that you have met them."}),(0,i.jsx)("p",{children:"If you entered multiple jobs, make sure you met the requirements for every job. If you don't, don't enter those jobs."})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{children:"Signing up"}),(0,i.jsx)("p",{children:"Signups are not needed for this event. Simply show up on time to participate."})]})}function c(e){let{children:n,looseUnlockRequirement:t}=e,r=void 0==t||!1==t;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{children:"Requirements to Join"}),r?(0,i.jsx)("p",{children:"Please make sure that you met the requirements before the start of the event. Please don't make people wait as you run around trying to unlock everything."}):(0,i.jsxs)("p",{children:[(0,i.jsx)("b",{children:"For this event you do not need to unlock all."})," You can sit out the ones you have not unlocked."]}),n,r?(0,i.jsx)("p",{children:"Make sure you unlock everything before the start of the event!"}):(0,i.jsxs)("p",{children:[(0,i.jsx)("b",{children:"For this event you do not need to unlock all."})," You can sit out the ones you have not unlocked."]}),(0,i.jsx)("p",{children:"There are also hard time requirements for this event. Make sure you are available and present from the start time until the end. Do not come late and do not leave early. Do not go off in the middle to eat for 30 minutes. There can be 5-minute coffee/toilet breaks but not much more than that."})]})}function d(e){let{time:n,runningTime:t}=e;return t=void 0!=t?t:3,(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{children:"Schedule"}),(0,i.jsx)("p",{children:"Please don't be late, please don't leave early"}),(0,i.jsx)("p",{children:(0,i.jsxs)("b",{children:["This event has a running time of ",t," hours."]})}),(0,i.jsx)(r.Z,{time:n,runningTime:t})]})}function h(e){let{events:n,difficulty:t,children:r,intro:a,signupRequired:h,signupActive:m,looseUnlockRequirement:f}=e,x=l(n);return h=void 0!==h?h:!("easy"===t||x&&((null==x?void 0:x.signups)==void 0||(null==x?void 0:x.signups)===""||x.signups.toLowerCase().startsWith("none"))),m=void 0!==m?m:!(!h||!x||void 0==x.dateTime||x.dateTime<new Date||x.signups.toLowerCase().includes("not yet open")),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.ZP,{diff:t}),a,(0,i.jsx)(u,{signupRequired:h}),(0,i.jsx)(c,{looseUnlockRequirement:f,children:r}),(null==x?void 0:x.dateTime)?(0,i.jsx)(d,{time:null==x?void 0:x.dateTime,runningTime:null==x?void 0:x.runningTime}):(0,i.jsx)(i.Fragment,{}),m?(0,i.jsx)(o.Z,{}):(0,i.jsx)(i.Fragment,{})]})}},7100:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var i=t(5893);function r(e){var n=e.formKey;return void 0===n&&(n="1FAIpQLScvIf104aYUbfCcPQxiNYDUXIrmKQACuDVIuztAutOQ6454nQ"),(0,i.jsx)("div",{className:"iframediv embed-responsive",children:(0,i.jsx)("iframe",{title:"signup",className:"embed-responsive-item ",src:"https://docs.google.com/forms/d/e/".concat(n,"/viewform?embedded=true"),width:"100%",height:"785",marginHeight:"0",marginWidth:"0",children:"Loading…"})})}t(7294)},2983:function(e,n,t){"use strict";t.d(n,{R:function(){return l}});var i=t(5893),r=t(7294),s=t(2110);function o(e,n){return e-new Date<-(0,s.hoursToMilliseconds)(n)}function a(e,n){if(o(e,n))return"In the past.";var t,i,r,a,l,u=e-new Date;return u<=0&&u>=-(0,s.hoursToMilliseconds)(n)?"Right now!":"In "+(t=Math.floor((a=u/1e3)/86400),i=Math.floor(a/3600%24),r=Math.floor(a/60%60),a=Math.floor(a%60),l="",t>0&&(l+="".concat(t," day").concat(1!=t?"s":"",", ")),l+"".concat(i," hour").concat(1!=i?"s":"",", ").concat(r," minute").concat(1!=r?"s":"",", and ").concat(a," second").concat(1!=a?"s":""," from now."))}function l(e){return function(n){let t,l=new Date(n.time),[u,c]=(0,r.useState)("You should not see this text, please tell Yuki."),[d,h]=(0,r.useState)("You should not see this text, please tell Yuki."),[m]=(0,r.useState)(()=>l.toUTCString()),f=n.runningTime?n.runningTime:3;function x(){t=setInterval(()=>c(a(l,f)),1e3)}return((0,r.useEffect)(()=>{var e,n;c(a(l,f)),h((n=(e=l.toString()).indexOf(":"),"".concat(s.namedDay[l.getDay()],", ").concat(l.getDate()," ").concat(s.namedMonth[l.getMonth()]," ").concat(l.getFullYear(),", ").concat(e.substring(n-2,n+3),"\n").concat(e.substring(n+6))));let i=1e3-new Date().getMilliseconds(),r=setTimeout(x,i);return()=>{clearTimeout(r),clearInterval(t)}},[]),o(n.time,f))?(0,i.jsx)(i.Fragment,{}):(0,i.jsx)(e,{local:d,gmt:m,remaining:u,...n})}}let u=l(e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"card bg-light timeBox",children:[(0,i.jsx)("div",{className:"card-header",children:(0,i.jsx)("h3",{children:e.local})}),(0,i.jsxs)("div",{className:"card-header",children:[(0,i.jsx)("p",{children:e.gmt}),(0,i.jsx)("p",{children:e.remaining})]})]})}));n.Z=u},2323:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return a},default:function(){return l}});var i=t(5893),r=t(2453),s=t(7100);l.title="Lynx Farm";let o=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"Get the lynx you want! Everyone calls the lynx they want and the party does those fights until everyone gets a lynx*!"}),(0,i.jsx)("p",{children:(0,i.jsx)("small",{children:"*Disclaimer: due to the fights' difficulty the event may run for many hours or some people might miss out on getting lynx."})}),(0,i.jsx)("p",{children:"(Don't roll on other people's lynx though, 1 per person!)"})]});var a=!0;function l(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.ZP,{events:e,difficulty:"medium",intro:o,signupActive:!1,children:[(0,i.jsxs)("p",{children:["Level 90 and progress in Patch 6.5 MSQ required to unlock. ",(0,i.jsx)("b",{children:"LEVEL 100 WITH LEVEL 100 GEAR HIGHLY RECOMMENDED TO RUN."})]}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Item level 640 minimum"}),(0,i.jsx)("li",{children:"Item level 710 recommended"}),(0,i.jsx)("li",{children:"Available for the full 3 hours (only toilet/coffee breaks)"})]}),(0,i.jsx)("p",{children:"Unlock the following duties"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"The Minstrel's Ballad: Zodiark's Fall"}),(0,i.jsx)("li",{children:"The Minstrel's Ballad: Hydaelyn's Call"}),(0,i.jsx)("li",{children:"The Minstrel's Ballad: Endsinger's Aria"}),(0,i.jsx)("li",{children:"Storm's Crown (Extreme)"}),(0,i.jsx)("li",{children:"Mount Ordeals (Extreme)"}),(0,i.jsx)("li",{children:"The Voidcast Dais (Extreme)"}),(0,i.jsx)("li",{children:"The Abyssal Fracture (Extreme)"})]})]}),(0,i.jsx)(s.Z,{formKey:"1FAIpQLScAbkdTKTjRqyn6szGXwyzsDx3oJTPEGIC9uYGI1nBIX_cstg"})]})}},4239:function(e){"use strict";e.exports=JSON.parse('[{"name":"Christmas Special - Ultimate Taster (UWU)","runningTime":3,"dateTime":"2024-12-14T19:00:00.000Z","alarm":[24,1],"signups":"MANDATORY: Signup on page","extraDetail":"","code":"uwu","url":"https://alae-nivis.github.io/events/uwu/"},{"name":"Treasure Hunt - Level 100 Only","runningTime":3,"dateTime":"2024-12-21T19:00:00.000Z","alarm":[24,1],"signups":"NONE: Just show up.","extraDetail":"","code":"treasure-hunt","url":"https://alae-nivis.github.io/events/treasure-hunt/"}]')}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6134)}),_N_E=e.O()}]);
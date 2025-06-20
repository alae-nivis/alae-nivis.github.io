(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8],{6434:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/events/pvp",function(){return n(2411)}])},347:e=>{"use strict";function t(e,t){return n(e.dateTime,t)}function n(e,t){return new Date(e-s(t)-6e4)}function s(e){return 36e5*e}e.exports.namedDay=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],e.exports.namedMonth=["January","February","March","April","May","June","July","August","September","October","November","December"],e.exports.timeUntil=function(e){return(e.dateTime-new Date)/1e3},e.exports.eventHastPast=function(e){var t;return null==(t=e.dateTime)||void 0==t||""===t||new Date(e.dateTime)-new Date<-s(e.runningTime)},e.exports.timeBefore=function(e,n){return t(e,n)},e.exports.hoursBeforeEvent=t,e.exports.hoursBeforeTime=n,e.exports.hoursToMilliseconds=s,e.exports.oneDayToMilliseconds=864e5,e.exports.runAtDate=function(e,t){var n=new Date().getTime(),s=Math.max(t.getTime()-n,0);s<=0||(s>0x7fffffff?setTimeout(()=>{runAtDate(e,t)},0x7fffffff):setTimeout(e,s))}},2603:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>r,U5:()=>a});var s=n(4848);function r(e){let{diff:t}=e;return"easy"===t?a():"medium"===t?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(i,{diff:"MEDIUM",explain:"Mistakes are fine, it will slow us down a bit but it's not a big problem."})}):"hard"===t?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(i,{diff:"HARD",explain:"This event will not be a faceroll. You will not get carried if you are not good enough. Read through and make sure you have met all the requirements listed here, otherwise you will waste other people's time with countless wipes."})}):(0,s.jsx)(s.Fragment,{})}function i(e){let{diff:t,explain:n}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"card bg-light timeBox",children:[(0,s.jsxs)("div",{className:"card-header",children:[(0,s.jsx)("p",{children:"This event's difficulty is "}),(0,s.jsx)("h3",{children:t})]}),(0,s.jsx)("div",{className:"card-body",children:(0,s.jsx)("p",{children:n})})]})})}function a(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(i,{diff:"EASY",explain:"It makes no difference even if you go AFK."})})}},2308:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>h,lb:()=>l});var s=n(4848),r=n(9676),i=n(2603),a=n(1873),o=n(347);function l(e){if((null==e?void 0:e.instances)!=void 0){for(var t=0;t<e.instances.length;t++)if(!(0,o.eventHastPast)(e.instances[t]))return e.instances[t]}}function d(e){let{signupRequired:t}=e;return t||void 0==t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Signing up"}),(0,s.jsx)("p",{children:"Signups are mandatory for this event. Signup sheet can be found at the bottom of this page. Make sure you read all the requirements carefully and make sure you that you have met them."}),(0,s.jsx)("p",{children:"If you entered multiple jobs, make sure you met the requirements for every job. If you don't, don't enter those jobs."})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Signing up"}),(0,s.jsx)("p",{children:"Signups are not needed for this event. Simply show up on time to participate."})]})}function u(e){let{children:t,looseUnlockRequirement:n}=e,r=void 0==n||!1==n;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Requirements to Join"}),r?(0,s.jsx)("p",{children:"Please make sure that you met the requirements before the start of the event. Please don't make people wait as you run around trying to unlock everything."}):(0,s.jsxs)("p",{children:[(0,s.jsx)("b",{children:"For this event you do not need to unlock all."})," You can sit out the ones you have not unlocked."]}),t,r?(0,s.jsx)("p",{children:"Make sure you unlock everything before the start of the event!"}):(0,s.jsxs)("p",{children:[(0,s.jsx)("b",{children:"For this event you do not need to unlock all."})," You can sit out the ones you have not unlocked."]}),(0,s.jsx)("p",{children:"There are also hard time requirements for this event. Make sure you are available and present from the start time until the end. Do not come late and do not leave early. Do not go off in the middle to eat for 30 minutes. There can be 5-minute coffee/toilet breaks but not much more than that."})]})}function c(e){let{time:t,runningTime:n}=e;return n=void 0!=n?n:3,(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Schedule"}),(0,s.jsx)("p",{children:"Please don't be late, please don't leave early"}),(0,s.jsx)("p",{children:(0,s.jsxs)("b",{children:["This event has a running time of ",n," hours."]})}),(0,s.jsx)(r.A,{time:t,runningTime:n})]})}function h(e){let{events:t,difficulty:n,children:r,intro:o,signupRequired:h,signupActive:m,looseUnlockRequirement:x}=e,j=l(t);return h=void 0!==h?h:!("easy"===n||j&&((null==j?void 0:j.signups)==void 0||(null==j?void 0:j.signups)===""||j.signups.toLowerCase().startsWith("none"))),m=void 0!==m?m:!(!h||!j||void 0==j.dateTime||j.dateTime<new Date||j.signups.toLowerCase().includes("not yet open")),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Ay,{diff:n}),o,(0,s.jsx)(d,{signupRequired:h}),(0,s.jsx)(u,{looseUnlockRequirement:x,children:r}),(null==j?void 0:j.dateTime)?(0,s.jsx)(c,{time:null==j?void 0:j.dateTime,runningTime:null==j?void 0:j.runningTime}):(0,s.jsx)(s.Fragment,{}),m?(0,s.jsx)(a.A,{}):(0,s.jsx)(s.Fragment,{})]})}},1873:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var s=n(4848);function r(e){var t=e.formKey;return void 0===t&&(t="1FAIpQLScvIf104aYUbfCcPQxiNYDUXIrmKQACuDVIuztAutOQ6454nQ"),(0,s.jsx)("div",{className:"iframediv embed-responsive",children:(0,s.jsx)("iframe",{title:"signup",className:"embed-responsive-item ",src:"https://docs.google.com/forms/d/e/".concat(t,"/viewform?embedded=true"),width:"100%",height:"785",marginHeight:"0",marginWidth:"0",children:"Loading…"})})}n(6540)},9676:(e,t,n)=>{"use strict";n.d(t,{A:()=>d,G:()=>l});var s=n(4848),r=n(6540),i=n(347);function a(e,t){return e-new Date<-(0,i.hoursToMilliseconds)(t)}function o(e,t){if(a(e,t))return"In the past.";var n,s,r,o,l,d=e-new Date;return d<=0&&d>=-(0,i.hoursToMilliseconds)(t)?"Right now!":"In "+(n=Math.floor((o=d/1e3)/86400),s=Math.floor(o/3600%24),r=Math.floor(o/60%60),o=Math.floor(o%60),l="",n>0&&(l+="".concat(n," day").concat(1!=n?"s":"",", ")),l+"".concat(s," hour").concat(1!=s?"s":"",", ").concat(r," minute").concat(1!=r?"s":"",", and ").concat(o," second").concat(1!=o?"s":""," from now."))}function l(e){return function(t){let n,l=new Date(t.time),[d,u]=(0,r.useState)("You should not see this text, please tell Yuki."),[c,h]=(0,r.useState)("You should not see this text, please tell Yuki."),[m]=(0,r.useState)(()=>l.toUTCString()),x=t.runningTime?t.runningTime:3;function j(){n=setInterval(()=>u(o(l,x)),1e3)}return((0,r.useEffect)(()=>{var e,t;u(o(l,x)),h((t=(e=l.toString()).indexOf(":"),"".concat(i.namedDay[l.getDay()],", ").concat(l.getDate()," ").concat(i.namedMonth[l.getMonth()]," ").concat(l.getFullYear(),", ").concat(e.substring(t-2,t+3),"\n").concat(e.substring(t+6))));let s=setTimeout(j,1e3-new Date().getMilliseconds());return()=>{clearTimeout(s),clearInterval(n)}},[]),a(t.time,x))?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)(e,{local:c,gmt:m,remaining:d,...t})}}let d=l(e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"card bg-light timeBox",children:[(0,s.jsx)("div",{className:"card-header",children:(0,s.jsx)("h3",{children:e.local})}),(0,s.jsxs)("div",{className:"card-header",children:[(0,s.jsx)("p",{children:e.gmt}),(0,s.jsx)("p",{children:e.remaining})]})]})}))},2411:(e,t,n)=>{"use strict";n.r(t),n.d(t,{__N_SSG:()=>a,default:()=>o});var s=n(4848);n(1106);var r=n(2308);o.title="1v1 PvP Tournament";let i=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Tournament Format"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Best-of-3 matches (2-3 rounds per match)"}),(0,s.jsx)("li",{children:"Each round capped at 5 minutes, after which a draw will be called"}),(0,s.jsx)("li",{children:"Can freely change jobs between rounds."}),(0,s.jsx)("li",{children:"In the event someone is choosing jobs based on their opponent's job, both will /tell their chosen job to a judge before the round."})]}),(0,s.jsxs)("table",{className:"table table-striped table-sm",style:{textAlign:"center"},children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Participants"}),(0,s.jsx)("th",{children:"Format"}),(0,s.jsx)("th",{children:"Prize Distribution"}),(0,s.jsx)("th",{children:"Total Prize Pool"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"1-3"}),(0,s.jsx)("td",{children:"Casual play"}),(0,s.jsx)("td",{children:"0"}),(0,s.jsx)("td",{children:"0"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"4-5"}),(0,s.jsxs)("td",{children:["Double Round Robin",(0,s.jsx)("br",{}),"All matches played consecutively"]}),(0,s.jsxs)("td",{children:["1st: 3.5m",(0,s.jsx)("br",{}),"2nd: 1.5m"]}),(0,s.jsx)("td",{children:"5m"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"6-8"}),(0,s.jsxs)("td",{children:["Round Robin",(0,s.jsx)("br",{}),"All matches played consecutively"]}),(0,s.jsxs)("td",{children:["1st: 5m",(0,s.jsx)("br",{}),"2nd: 3m",(0,s.jsx)("br",{}),"3rd: 2m"]}),(0,s.jsx)("td",{children:"10m"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"9-15"}),(0,s.jsxs)("td",{children:["Swiss until 1 person undefeated",(0,s.jsx)("br",{}),"People still in prize contention get highlight matches",(0,s.jsx)("br",{}),"People out of prize contention will have matches all together for time"]}),(0,s.jsxs)("td",{children:["1st: 8m",(0,s.jsx)("br",{}),"2nd: 4m",(0,s.jsx)("br",{}),"3rd: 2.5m",(0,s.jsx)("br",{}),"4th: 1.5m"]}),(0,s.jsx)("td",{children:"16m"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"16-25"}),(0,s.jsxs)("td",{children:["Swiss until 1 person undefeated",(0,s.jsx)("br",{}),"People still in prize contention get highlight matches",(0,s.jsx)("br",{}),"People out of prize contention will have matches all together for time"]}),(0,s.jsxs)("td",{children:["1st: 10m",(0,s.jsx)("br",{}),"2nd: 6.25m",(0,s.jsx)("br",{}),"3rd: 5m",(0,s.jsx)("br",{}),"4th: 2.5m",(0,s.jsx)("br",{}),"5th: 1.25m"]}),(0,s.jsx)("td",{children:"25m"})]})]})]})]});var a=!0;function o(e){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.Ay,{events:e,difficulty:"easy",intro:i,signupRequired:!1,children:(0,s.jsx)("ul",{children:(0,s.jsx)("li",{children:"Level 30 and unlock PvP"})})})})}},4675:e=>{"use strict";e.exports=JSON.parse('[{"name":"Treasure Hunt","runningTime":3,"dateTime":"2025-06-28T19:00:00.000Z","alarm":[24,1],"signups":"NONE: Just show up.","extraDetail":"","code":"treasure-hunt","url":"https://alae-nivis.github.io/events/treasure-hunt/"},{"name":"P8S","runningTime":3,"dateTime":"2025-07-05T19:00:00.000Z","alarm":[24,1],"signups":"MANDATORY: Signup on page","extraDetail":"","code":"pandaemonium-savages","url":"https://alae-nivis.github.io/events/pandaemonium-savages/"},{"name":"Treasure Hunt","runningTime":3,"dateTime":"2025-07-12T19:00:00.000Z","alarm":[24,1],"signups":"NONE: Just show up.","extraDetail":"","code":"treasure-hunt","url":"https://alae-nivis.github.io/events/treasure-hunt/"}]')}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(6434)),_N_E=e.O()}]);
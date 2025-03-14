(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8],{6434:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/events/pvp",function(){return n(2411)}])},347:e=>{"use strict";function t(e,t){return n(e.dateTime,t)}function n(e,t){return new Date(e-r(t)-6e4)}function r(e){return 36e5*e}e.exports.namedDay=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],e.exports.namedMonth=["January","February","March","April","May","June","July","August","September","October","November","December"],e.exports.timeUntil=function(e){return(e.dateTime-new Date)/1e3},e.exports.eventHastPast=function(e){var t;return null==(t=e.dateTime)||void 0==t||""===t||new Date(e.dateTime)-new Date<-r(e.runningTime)},e.exports.timeBefore=function(e,n){return t(e,n)},e.exports.hoursBeforeEvent=t,e.exports.hoursBeforeTime=n,e.exports.hoursToMilliseconds=r,e.exports.oneDayToMilliseconds=864e5,e.exports.runAtDate=function(e,t){var n=new Date().getTime(),r=Math.max(t.getTime()-n,0);r<=0||(r>0x7fffffff?setTimeout(()=>{runAtDate(e,t)},0x7fffffff):setTimeout(e,r))}},2603:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>s,U5:()=>a});var r=n(4848);function s(e){let{diff:t}=e;return"easy"===t?a():"medium"===t?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i,{diff:"MEDIUM",explain:"Mistakes are fine, it will slow us down a bit but it's not a big problem."})}):"hard"===t?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i,{diff:"HARD",explain:"This event will not be a faceroll. You will not get carried if you are not good enough. Read through and make sure you have met all the requirements listed here, otherwise you will waste other people's time with countless wipes."})}):(0,r.jsx)(r.Fragment,{})}function i(e){let{diff:t,explain:n}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"card bg-light timeBox",children:[(0,r.jsxs)("div",{className:"card-header",children:[(0,r.jsx)("p",{children:"This event's difficulty is "}),(0,r.jsx)("h3",{children:t})]}),(0,r.jsx)("div",{className:"card-body",children:(0,r.jsx)("p",{children:n})})]})})}function a(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i,{diff:"EASY",explain:"It makes no difference even if you go AFK."})})}},2308:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>h,lb:()=>l});var r=n(4848),s=n(9676),i=n(2603),a=n(1873),o=n(347);function l(e){if((null==e?void 0:e.instances)!=void 0){for(var t=0;t<e.instances.length;t++)if(!(0,o.eventHastPast)(e.instances[t]))return e.instances[t]}}function d(e){let{signupRequired:t}=e;return t||void 0==t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"Signing up"}),(0,r.jsx)("p",{children:"Signups are mandatory for this event. Signup sheet can be found at the bottom of this page. Make sure you read all the requirements carefully and make sure you that you have met them."}),(0,r.jsx)("p",{children:"If you entered multiple jobs, make sure you met the requirements for every job. If you don't, don't enter those jobs."})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"Signing up"}),(0,r.jsx)("p",{children:"Signups are not needed for this event. Simply show up on time to participate."})]})}function u(e){let{children:t,looseUnlockRequirement:n}=e,s=void 0==n||!1==n;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"Requirements to Join"}),s?(0,r.jsx)("p",{children:"Please make sure that you met the requirements before the start of the event. Please don't make people wait as you run around trying to unlock everything."}):(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"For this event you do not need to unlock all."})," You can sit out the ones you have not unlocked."]}),t,s?(0,r.jsx)("p",{children:"Make sure you unlock everything before the start of the event!"}):(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"For this event you do not need to unlock all."})," You can sit out the ones you have not unlocked."]}),(0,r.jsx)("p",{children:"There are also hard time requirements for this event. Make sure you are available and present from the start time until the end. Do not come late and do not leave early. Do not go off in the middle to eat for 30 minutes. There can be 5-minute coffee/toilet breaks but not much more than that."})]})}function c(e){let{time:t,runningTime:n}=e;return n=void 0!=n?n:3,(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"Schedule"}),(0,r.jsx)("p",{children:"Please don't be late, please don't leave early"}),(0,r.jsx)("p",{children:(0,r.jsxs)("b",{children:["This event has a running time of ",n," hours."]})}),(0,r.jsx)(s.A,{time:t,runningTime:n})]})}function h(e){let{events:t,difficulty:n,children:s,intro:o,signupRequired:h,signupActive:m,looseUnlockRequirement:x}=e,j=l(t);return h=void 0!==h?h:!("easy"===n||j&&((null==j?void 0:j.signups)==void 0||(null==j?void 0:j.signups)===""||j.signups.toLowerCase().startsWith("none"))),m=void 0!==m?m:!(!h||!j||void 0==j.dateTime||j.dateTime<new Date||j.signups.toLowerCase().includes("not yet open")),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Ay,{diff:n}),o,(0,r.jsx)(d,{signupRequired:h}),(0,r.jsx)(u,{looseUnlockRequirement:x,children:s}),(null==j?void 0:j.dateTime)?(0,r.jsx)(c,{time:null==j?void 0:j.dateTime,runningTime:null==j?void 0:j.runningTime}):(0,r.jsx)(r.Fragment,{}),m?(0,r.jsx)(a.A,{}):(0,r.jsx)(r.Fragment,{})]})}},1873:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(4848);function s(e){var t=e.formKey;return void 0===t&&(t="1FAIpQLScvIf104aYUbfCcPQxiNYDUXIrmKQACuDVIuztAutOQ6454nQ"),(0,r.jsx)("div",{className:"iframediv embed-responsive",children:(0,r.jsx)("iframe",{title:"signup",className:"embed-responsive-item ",src:"https://docs.google.com/forms/d/e/".concat(t,"/viewform?embedded=true"),width:"100%",height:"785",marginHeight:"0",marginWidth:"0",children:"Loading…"})})}n(6540)},9676:(e,t,n)=>{"use strict";n.d(t,{A:()=>d,G:()=>l});var r=n(4848),s=n(6540),i=n(347);function a(e,t){return e-new Date<-(0,i.hoursToMilliseconds)(t)}function o(e,t){if(a(e,t))return"In the past.";var n,r,s,o,l,d=e-new Date;return d<=0&&d>=-(0,i.hoursToMilliseconds)(t)?"Right now!":"In "+(n=Math.floor((o=d/1e3)/86400),r=Math.floor(o/3600%24),s=Math.floor(o/60%60),o=Math.floor(o%60),l="",n>0&&(l+="".concat(n," day").concat(1!=n?"s":"",", ")),l+"".concat(r," hour").concat(1!=r?"s":"",", ").concat(s," minute").concat(1!=s?"s":"",", and ").concat(o," second").concat(1!=o?"s":""," from now."))}function l(e){return function(t){let n,l=new Date(t.time),[d,u]=(0,s.useState)("You should not see this text, please tell Yuki."),[c,h]=(0,s.useState)("You should not see this text, please tell Yuki."),[m]=(0,s.useState)(()=>l.toUTCString()),x=t.runningTime?t.runningTime:3;function j(){n=setInterval(()=>u(o(l,x)),1e3)}return((0,s.useEffect)(()=>{var e,t;u(o(l,x)),h((t=(e=l.toString()).indexOf(":"),"".concat(i.namedDay[l.getDay()],", ").concat(l.getDate()," ").concat(i.namedMonth[l.getMonth()]," ").concat(l.getFullYear(),", ").concat(e.substring(t-2,t+3),"\n").concat(e.substring(t+6))));let r=setTimeout(j,1e3-new Date().getMilliseconds());return()=>{clearTimeout(r),clearInterval(n)}},[]),a(t.time,x))?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(e,{local:c,gmt:m,remaining:d,...t})}}let d=l(e=>(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"card bg-light timeBox",children:[(0,r.jsx)("div",{className:"card-header",children:(0,r.jsx)("h3",{children:e.local})}),(0,r.jsxs)("div",{className:"card-header",children:[(0,r.jsx)("p",{children:e.gmt}),(0,r.jsx)("p",{children:e.remaining})]})]})}))},2411:(e,t,n)=>{"use strict";n.r(t),n.d(t,{__N_SSG:()=>a,default:()=>o});var r=n(4848);n(1106);var s=n(2308);o.title="1v1 PvP Tournament";let i=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"Tournament Format"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Best-of-3 matches (2-3 rounds per match)"}),(0,r.jsx)("li",{children:"Each round capped at 5 minutes, after which a draw will be called"}),(0,r.jsx)("li",{children:"Can freely change jobs between rounds."}),(0,r.jsx)("li",{children:"In the event someone is choosing jobs based on their opponent's job, both will /tell their chosen job to a judge before the round."})]}),(0,r.jsxs)("table",{className:"table table-striped table-sm",style:{textAlign:"center"},children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Participants"}),(0,r.jsx)("th",{children:"Format"}),(0,r.jsx)("th",{children:"Prize Distribution"}),(0,r.jsx)("th",{children:"Total Prize Pool"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"1-3"}),(0,r.jsx)("td",{children:"Casual play"}),(0,r.jsx)("td",{children:"0"}),(0,r.jsx)("td",{children:"0"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"4-5"}),(0,r.jsxs)("td",{children:["Double Round Robin",(0,r.jsx)("br",{}),"All matches played consecutively"]}),(0,r.jsxs)("td",{children:["1st: 3.5m",(0,r.jsx)("br",{}),"2nd: 1.5m"]}),(0,r.jsx)("td",{children:"5m"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"6-8"}),(0,r.jsxs)("td",{children:["Round Robin",(0,r.jsx)("br",{}),"All matches played consecutively"]}),(0,r.jsxs)("td",{children:["1st: 5m",(0,r.jsx)("br",{}),"2nd: 3m",(0,r.jsx)("br",{}),"3rd: 2m"]}),(0,r.jsx)("td",{children:"10m"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"9-15"}),(0,r.jsxs)("td",{children:["Swiss until 1 person undefeated",(0,r.jsx)("br",{}),"People still in prize contention get highlight matches",(0,r.jsx)("br",{}),"People out of prize contention will have matches all together for time"]}),(0,r.jsxs)("td",{children:["1st: 8m",(0,r.jsx)("br",{}),"2nd: 4m",(0,r.jsx)("br",{}),"3rd: 2.5m",(0,r.jsx)("br",{}),"4th: 1.5m"]}),(0,r.jsx)("td",{children:"16m"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"16-25"}),(0,r.jsxs)("td",{children:["Swiss until 1 person undefeated",(0,r.jsx)("br",{}),"People still in prize contention get highlight matches",(0,r.jsx)("br",{}),"People out of prize contention will have matches all together for time"]}),(0,r.jsxs)("td",{children:["1st: 10m",(0,r.jsx)("br",{}),"2nd: 6.25m",(0,r.jsx)("br",{}),"3rd: 5m",(0,r.jsx)("br",{}),"4th: 2.5m",(0,r.jsx)("br",{}),"5th: 1.25m"]}),(0,r.jsx)("td",{children:"25m"})]})]})]})]});var a=!0;function o(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.Ay,{events:e,difficulty:"easy",intro:i,signupRequired:!1,children:(0,r.jsx)("ul",{children:(0,r.jsx)("li",{children:"Level 30 and unlock PvP"})})})})}},4675:e=>{"use strict";e.exports=JSON.parse('[{"name":"Legacy Mount Farm","runningTime":3,"dateTime":"2025-03-15T19:00:00.000Z","alarm":[24,1],"signups":"NONE: Just show up.","extraDetail":"Order here: <https://docs.google.com/forms/d/e/1FAIpQLSfJEH-p867PRohKUaX_u7fXradM5fH3VmftlO73hz4imMZXfg/viewform>","code":"legacy-mount-farm","url":"https://alae-nivis.github.io/events/legacy-mount-farm/"},{"name":"Treasure Hunt","runningTime":3,"dateTime":"2025-03-22T19:00:00.000Z","alarm":[24,1],"signups":"NONE: Just show up.","extraDetail":"","code":"treasure-hunt","url":"https://alae-nivis.github.io/events/treasure-hunt/"},{"name":"New Raid","runningTime":3,"dateTime":"2025-03-29T19:00:00.000Z","alarm":[24,1],"signups":"NONE: Just show up.","extraDetail":"","code":"new-raid","url":"https://alae-nivis.github.io/events/new-raid/"},{"name":"New Raid","runningTime":3,"dateTime":"2025-04-05T19:00:00.000Z","alarm":[24,1],"signups":"NONE: Just show up.","extraDetail":"","code":"new-raid","url":"https://alae-nivis.github.io/events/new-raid/"},{"name":"New Unreal","runningTime":3,"dateTime":"2025-04-12T19:00:00.000Z","alarm":[24,1],"signups":"OPTIONAL: Signup to save yourself a spot","extraDetail":"","code":"new-unreal","url":"https://alae-nivis.github.io/events/new-unreal/"},{"name":"Treasure Hunt","runningTime":3,"dateTime":"2025-04-19T19:00:00.000Z","alarm":[24,1],"signups":"NONE: Just show up.","extraDetail":"","code":"treasure-hunt","url":"https://alae-nivis.github.io/events/treasure-hunt/"}]')}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(6434)),_N_E=e.O()}]);
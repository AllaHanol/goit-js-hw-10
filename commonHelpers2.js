import"./assets/styles-4265542f.js";import{i as m}from"./assets/vendor-77e16229.js";const i=document.querySelector(".form");i.addEventListener("submit",e=>{e.preventDefault();const s=parseInt(i.elements.delay.value),r=i.elements.state.value;o(s,r).then(t=>{m.success({title:"Success",message:`:white_check_mark: Fulfilled promise in ${t}ms`})}).catch(t=>{m.error({title:"Error",message:`:x: Rejected promise in ${t}ms`})})});function o(e,s){return new Promise((r,t)=>{setTimeout(()=>{s==="fulfilled"?r(e):t(e)},e)})}
//# sourceMappingURL=commonHelpers2.js.map

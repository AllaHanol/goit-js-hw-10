import{i as A}from"./assets/bi_x-octagon-e8ade62e.js";import{i as s}from"./assets/vendor-77e16229.js";const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE7SURBVHgB3VVbccMwEDwzMAQxaCCYQQPBDGoGNhOFQVsEKYNMESgMHAbXU7OqNBq9nOYn2Zkdj3Wn3ZMtnYgeHV0tgZl7eYzCF6HC8EX4Kfzquu5Mt0CElVCzhxEewTUY1yginr8riQ8QsVysWaaAA4xVFJthvkuJ7xE8pYRrCMQXylRlwP6u4kjQSFC0ES3iyv002oiqOJLGuPriTtgijsR3u2tCcUyc/y2O5KNlNLbkTHLi8v4mnJoMcialynM6NvB7aCi9uj+T2mfh6+H8SAWm+CdnTEribieOqWBfmhyYTIW4LhXpPtPKtx20+jlCkjWwfai5VWD1hhONL5U8oJJ6si/qhDl7agFfO6pxS+Z8u57Zt/WBtoB9v3dY2V84JhjXpZW2XJlKHoPwVej+y1n4LTzIlXmhp8YPl1hG2bHi3osAAAAASUVORK5CYII=";document.querySelector(".form").addEventListener("submit",a);function a(o){o.preventDefault();const t=o.target.delay.value,i=document.querySelector('input[name="state"]:checked').value;new Promise((e,r)=>{setTimeout(()=>{i==="fulfilled"?e(t):r(t)},t)}).then(e=>{s.success({message:`Fulfilled promise in ${e} ms`,messageColor:"#fff",messageSize:"16",messageLineHeight:"24",title:"OK",titleColor:"#fff",titleSize:"16",titleLineHeight:"24",backgroundColor:"#59A10D",position:"topRight",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#326101",iconUrl:l,imageWidth:24})}).catch(e=>{s.error({message:`Rejected promise in ${e}ms`,messageSize:"16",messageColor:"#fff",backgroundColor:"#EF4040",position:"topRight",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#B51B1B",iconUrl:A,imageWidth:24})})}
//# sourceMappingURL=commonHelpers2.js.map
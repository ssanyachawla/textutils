(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){},18:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(8),c=t.n(r),o=(t(17),t(6),t(7),t(18),t(3));function s(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(o.b,{className:"navbar-brand",to:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item active "},n.a.createElement(o.b,{className:"nav-link active",to:"/"},"Home ",n.a.createElement("span",{className:"sr-only"},"(current)"))),n.a.createElement("li",{className:"nav-item "},n.a.createElement(o.b,{className:"nav-link active",to:"/about"},e.about))),n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode")))))}function m(e){const[a,t]=Object(l.useState)(""),[r,c]=Object(l.useState)(0),o=e=>{const a=e.trim();return""===a?0:a.split(/\s+/).filter(e=>e.length>0).length};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement("h3",{className:"mb-2"},e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control",onChange:e=>{const a=e.target.value;t(a),c(o(a))},id:"myBox",value:a,style:{backgroundColor:"dark"===e.mode?"#121212":"white",color:"dark"===e.mode?"white":"#121212"},rows:"8"})),n.a.createElement("button",{disabled:0===a.length,className:"btn btn-primary mx-1 my-1",onClick:()=>{let l=a.toUpperCase();t(l),e.showAlert("Converted to Uppercase","success")}},"Convert to Uppercase"),n.a.createElement("button",{disabled:0===a.length,className:"btn btn-danger mx-2 my-1",onClick:()=>{let l=a.toLowerCase();t(l),e.showAlert("Converted to Lowercase","success")}},"Convert to Lowercase"),n.a.createElement("button",{disabled:0===a.length,className:"btn btn-dark mx-1 my-1",onClick:()=>{let l=a.split(/[ ]+/);t(l.join(" ")),e.showAlert("Extra spaces removed","success")}},"Remove Extra Spaces"),n.a.createElement("button",{disabled:0===a.length,className:"btn btn-success mx-1 my-1",onClick:()=>{t(""),e.showAlert("Text is cleared","success")}},"Clear TextBox"),n.a.createElement("button",{disabled:0===a.length,className:"btn btn-info mx-1 my-1",onClick:()=>{let l="";for(let e=a.length-1;e>=0;e--)l+=a[e];t(l),e.showAlert("Text is Inversed","success")}},"Inverse Text"),n.a.createElement("button",{disabled:0===a.length,className:"btn btn-warning mx-1 my-1",onClick:()=>{let e=new SpeechSynthesisUtterance;e.text=a,window.speechSynthesis.speak(e)}},"Speak"),n.a.createElement("button",{disabled:0===a.length,className:"btn btn-secondary mx-1 my-1",onClick:()=>{var a=document.getElementById("myBox");a.select(),navigator.clipboard.writeText(a.value),document.getSelection().removeAllRanges(),e.showAlert("Text copied to clipboard","success")}},"Copy Text")),n.a.createElement("div",{className:"container my-2"},n.a.createElement("h4",null,"Your text summary"),n.a.createElement("p",null," ",r," words, ",a.length," characters"),n.a.createElement("p",null,.008*r," Minutes read"),n.a.createElement("h5",null,"Preview"),n.a.createElement("p",null,a.length>0?a:"Nothing to preview!")))}function i(e){return n.a.createElement("div",{style:{height:"40px"}},e.alert&&n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,(e=>{const a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)})(e.alert.type)),": ",e.alert.msg))}function d(e){const a={color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"rgb(36 44 55)":"white"};return n.a.createElement("div",{className:"container ",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("h2",{className:"my-3"},"About Us"),n.a.createElement("div",{id:"accordion"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header",style:a,id:"headingOne"},n.a.createElement("h5",{className:"mb-0"},n.a.createElement("button",{className:"btn btn-link ",style:a,"data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},n.a.createElement("strong",null,"Analyse Your Text")))),n.a.createElement("div",{id:"collapseOne",className:"collapse show","aria-labelledby":"headingOne","data-parent":"#accordion"},n.a.createElement("div",{className:"card-body",style:a},"Textutils gives you a way to analyse your text quickly and effeciently. Be it word count, character count, copy your text, translate it and so much more."))),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header",style:a,id:"headingTwo"},n.a.createElement("h5",{className:"mb-0"},n.a.createElement("button",{className:"btn btn-link collapsed",style:a,"data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},n.a.createElement("strong",null,"Free To Use")))),n.a.createElement("div",{id:"collapseTwo",className:"collapse","aria-labelledby":"headingTwo","data-parent":"#accordion"},n.a.createElement("div",{className:"card-body",style:a},"Textutils is a free character counter tool that provides instant character count and word count statistics for a givem text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/character limit."))),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header",style:a,id:"headingThree"},n.a.createElement("h5",{className:"mb-0"},n.a.createElement("button",{className:"btn btn-link collapsed",style:a,"data-toggle":"collapse","data-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},n.a.createElement("strong",null,"Browser Compatible")))),n.a.createElement("div",{id:"collapseThree",className:"collapse ","aria-labelledby":"headingThree","data-parent":"#accordion"},n.a.createElement("div",{className:"card-body",style:a},"This word counter works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.")))))}s.defaultProps={title:"Set title here",about:"About"};var u=t(2);var b=function(){const[e,a]=Object(l.useState)("light"),[t,r]=Object(l.useState)(null);return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,null,n.a.createElement(s,{title:"TextUtils",mode:e,toggleMode:()=>{"light"===e?(a("dark"),document.body.style.backgroundColor="#121212",document.body.style.color="white"):(a("light"),document.body.style.backgroundColor="#e9ecef",document.body.style.color="#121212")}}),n.a.createElement(i,{alert:t}),n.a.createElement("div",{className:"container my-3"},n.a.createElement(u.c,null,n.a.createElement(u.a,{exact:!0,path:"/about",element:n.a.createElement(d,{mode:e})})),n.a.createElement(u.c,null,n.a.createElement(u.a,{exact:!0,path:"/",element:n.a.createElement(m,{showAlert:(e,a)=>{r({msg:e,type:a}),setTimeout(()=>{r(null)},1500)},heading:"Try TextUtils - Word Counter, Character Counter, Remove extra spaces",mode:e})})))))};var h=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,20)).then(a=>{let{getCLS:t,getFID:l,getFCP:n,getLCP:r,getTTFB:c}=a;t(e),l(e),n(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null))),h()},9:function(e,a,t){e.exports=t(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.7fdf1bed.chunk.js.map
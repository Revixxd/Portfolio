(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(55)},28:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){var n={"./Edie-Homepage.jpg":35,"./Recipe-Page.jpg":36,"./to-do-list.jpg":37,"./weather-app.jpg":38,"./windBnB.jpg":39};function r(e){var t=l(e);return a(t)}function l(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=34},35:function(e,t,a){e.exports=a.p+"static/media/Edie-Homepage.531de2ca.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/Recipe-Page.65ddb986.jpg"},37:function(e,t,a){e.exports=a.p+"static/media/to-do-list.388aa91e.jpg"},38:function(e,t,a){e.exports=a.p+"static/media/weather-app.b644ff97.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/windBnB.2fd9d262.jpg"},40:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(11),c=a.n(l),i=a(2),o={basicInfo:{email:"Amyslicki2002@gmail.com",phoneNumber:"668 244 841",desciption:"I am a second-year student of the Wroc\u0142aw University of Technology. Currently, I am developing my skills, creating new website projects, knowledge of C ++ and React. I am characterized by skills such as teamwork, attention to detail and punctuality."},skillsFront:["HTML5","CSS","JavaScript","React"],skillsTech:["C/C++","Figma","Git","Github","Visual Studio Code"],hobbies:{programing:{name:"Programing",imgSource:"https://i.imgur.com/WqeI5hx.jpg",desciption:"programing"},formulaOne:{name:"FormulaOne",imgSource:"https://i.imgur.com/g7LhD0X.jpg",desciption:"formulaOne"}}},s=a(3),m=a.n(s),u=a(4),p=a(12),f=a(13);a(28);var d=function(){var e=o.basicInfo,t=r.a.useState([]),a=Object(i.a)(t,2),n=a[0],l=a[1];function c(){return(c=Object(u.a)(m.a.mark(function e(){var t,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/revixxd");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",l(a));case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}return r.a.useEffect(function(){!function(){c.apply(this,arguments)}()},[]),r.a.createElement("div",{className:"BasicInfoDiv elementStyle"},r.a.createElement("div",{className:"BasicInfoDiv--ImageDiv"},r.a.createElement("img",{alt:"avatar",src:n.avatar_url})),r.a.createElement("div",{className:"BasicInfoDiv--bottomInfo"},r.a.createElement("div",{className:"BasicInfoDiv__bottomInfo--name"},r.a.createElement("h1",null,n.name),r.a.createElement("h4",null,"Future frontend developer ",r.a.createElement("span",{role:"img","aria-label":"faces"},"\ud83d\ude0e\ud83e\udd13"))),r.a.createElement("div",{className:"BasicInfoDiv__bottomInfo--contact"},r.a.createElement("div",{className:"BasicInfoDiv__bottomInfo__contact--element"},r.a.createElement(p.a,null),r.a.createElement("h5",null,e.email)),r.a.createElement("div",{className:"BasicInfoDiv__bottomInfo__contact--element"},r.a.createElement(f.a,null),r.a.createElement("h5",null,e.phoneNumber))),r.a.createElement("div",{className:"BasicInfoDiv__bottomInfo--description"},r.a.createElement("p",null,"I am a first-year student of the Wroc\u0142aw University of Technology. Currently, I am developing my skills, creating new website projects, knowledge of C ++ and React. I am characterized by skills such as teamwork, attention to detail and punctuality."))))};var v=function(e){return r.a.createElement("h4",null,e.item)};a(30);var E=function(e){var t=e.array.map(function(e,t){return r.a.createElement(v,{key:t,item:e})});return r.a.createElement("div",null,r.a.createElement("div",{className:"skillDiv elementStyle"},r.a.createElement("h2",null,e.name.toUpperCase()),r.a.createElement("div",{className:"skillDiv--skills"},t)))};a(32);var h=function(e){var t="".concat(e.array.repo,".jpg");return r.a.createElement("div",{className:"projectElementsDiv elementStyle"},r.a.createElement("div",{className:"projectElementsDiv--imgDiv"},r.a.createElement("img",{className:"projectElementsDiv--img",alt:"projectImg",src:t&&a(34)("./".concat(t))})),r.a.createElement("div",{className:"projectElementsDiv--info"},"HTML"===e.array.language&&r.a.createElement("div",{className:"projectElementsDiv__info--hastag"},r.a.createElement("h6",null,"#HTML"),r.a.createElement("h6",null,"#CSS"),r.a.createElement("h6",null,"#WebResponsive")),"JavaScript"===e.array.language&&r.a.createElement("div",{className:"projectElementsDiv__info--hastag"},r.a.createElement("h6",null,"#React"),r.a.createElement("h6",null,"#StyledComponents"),r.a.createElement("h6",null,"#WebResponsive")),r.a.createElement("div",{className:"projectElementsDiv__info--mainDescription"},r.a.createElement("div",{className:"projectElementsDiv__info__mainDescription--projectName"},r.a.createElement("h2",null,e.array.repo)),r.a.createElement("div",{className:"projectElementsDiv__info__mainDescription--description"},r.a.createElement("p",null,e.array.description," "))),r.a.createElement("div",{className:"projectElementsDiv__info--buttonsDiv"},r.a.createElement("a",{className:"projectElementsDiv__info__buttonsDiv-aElement",target:"_blank",rel:"noopener noreferrer",href:e.array.website},"Demo"),r.a.createElement("a",{className:"projectElementsDiv__info__buttonsDiv-aElement",target:"_blank",rel:"noopener noreferrer",href:e.array.link},"Code"))))};a(40);function g(){return r.a.createElement("div",{className:"loadingContainer"},r.a.createElement("div",{class:"lds-dual-ring"}))}a(42);var b=function(){var e=r.a.useState([]),t=Object(i.a)(e,2),a=t[0],n=t[1],l=r.a.useState(!1),c=Object(i.a)(l,2),o=c[0],s=c[1];function p(){return(p=Object(u.a)(m.a.mark(function e(){var t,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://gh-pinned-repos.egoist.sh/?username=revixxd");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,s(!0),e.abrupt("return",n(a));case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}r.a.useEffect(function(){!function(){p.apply(this,arguments)}()},[]);var f=a.filter(function(e){return!("Portfolio"===e.repo||"C-C--exercises"===e.repo)}),d=f.map(function(e,t){return r.a.createElement(h,{key:t,array:e})});return r.a.createElement("div",{className:"projectsDiv"},r.a.createElement("div",{className:"projectsDiv--titileDiv elementStyle"},r.a.createElement("h3",null,"Projects (",Object.keys(f).length,")")),o?r.a.createElement("div",{className:"projectsDiv--elements"},d):r.a.createElement(g,null))};a(44);var y=function(e){return r.a.createElement("div",{className:"hobbiesElement"},r.a.createElement("div",{className:"hobbiesElement-imgDiv"},r.a.createElement("img",{alt:"img",src:e.array.imgSource})),r.a.createElement("div",{className:"hobbiesElement--infoDiv "},r.a.createElement("h3",null,e.array.name)))};a(46);var j=function(e){return r.a.createElement("div",{className:"hobbiesDiv elementStyle"},r.a.createElement("h2",null,"Hobbies"),r.a.createElement(y,{array:e.array.programing}),r.a.createElement(y,{array:e.array.formulaOne}))};var _,D=function(){return r.a.createElement("footer",null,r.a.createElement("span",null,r.a.createElement("a",{href:"https://github.com/Revixxd",class:"profileName",target:"_blank",rel:"noopener noreferrer"},"Created by ",r.a.createElement("u",null,"Revixxd")))," - ",r.a.createElement("span",null,r.a.createElement("a",{href:"https://devchallenges.io",target:"_blank",rel:"noopener noreferrer"},"devChallenges.io")))},N=(a(48),a(5)),k=a(14),x={body:"#f2f2f2",mainColor:"#4F4F4F",secondColor:"#828282",elementsBackGround:"#FFFFFF",elementsShadow:" 2px 2px 15px -12px rgba(66, 68, 90, 1);"},w={body:"#2C2C2E",mainColor:"#f2f2f2",secondColor:"#bdbaba",elementsBackGround:"#3A3A3C",elementsShadow:" 2px 2px 15px -12px #828282;"},C=Object(N.b)(_||(_=Object(k.a)(["\n    body{\n        background-color: ",";\n        transition-duration: 0.55s;\n        h1,h2,h3,h5,footer, a{\n            color: ","\n        }\n        p,h4,h6{\n            color: ","\n        }\n        .elementStyle{\n            background-color: ",";\n            box-shadow: ",";\n        }\n\n        .accessibilityDiv button{\n            border: solid 1px ",";\n            color: ","\n        }\n    }\n\n    \n"])),function(e){return e.theme.body},function(e){return e.theme.mainColor},function(e){return e.theme.secondColor},function(e){return e.theme.elementsBackGround},function(e){return e.theme.elementsShadow},function(e){return e.theme.mainColor},function(e){return e.theme.mainColor});var I=function(){var e=r.a.useState("light"),t=Object(i.a)(e,2),a=t[0],n=t[1];return r.a.createElement(N.a,{theme:"light"===a?x:w},r.a.createElement(C,null),r.a.createElement("div",{className:"accessibilityDiv"},r.a.createElement("button",{onClick:function(){n("light"===a?"dark":"light")}},"Theme")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"gridContainer"},r.a.createElement(d,null),r.a.createElement(E,{name:"skills",array:o.skillsTech}),r.a.createElement(E,{name:"front-end",array:o.skillsFront}),r.a.createElement(b,null),r.a.createElement(j,{array:o.hobbies})),r.a.createElement(D,null)))};a(53);c.a.createRoot(document.getElementById("root")).render(r.a.createElement(I,null))}},[[18,2,1]]]);
//# sourceMappingURL=main.765b47a4.chunk.js.map
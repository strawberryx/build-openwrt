/**
 *
 * 公共函数 Start
 *
 */

function checkUrl(url) {
  switch (true) {
    case url.includes("ttgame&typeID=1"):
      // 手机游戏数据1
      // do something
      break;
    case url.includes("ttgame&typeID=2"):
      // 手机软件数据2
      // do something
      break;
    case url.includes("ttnews&catid=3"):
      // 咨询列表数据3
      // do something
      break;
    case url.includes("ttnews&catid=4"):
      // 攻略列表数据4
      // do something
      break;
    case url.includes("tsoft&typeID=2"):
      // 手机游戏数据1
      // do something
      break;
    case url.includes("tsoft&typeID=3"):
      // 手机软件数据2
      // do something
      break;
    case url.includes("tgonglue"):
      // 文章列表数据3
      // do something
      break;
    case url.includes("theji"):
      // 合集列表数据4
      // do something
      break;
    case url.includes("tmsoft&typeID=2"):
      // 手机游戏数据1
      // do something
      break;
    case url.includes("tmsoft&typeID=3"):
      // 手机软件数据2
      // do something
      break;
    case url.includes("tmgonglue"):
      // 文章列表数据3
      // do something
      break;
    case url.includes("apgame&typeID=2"):
      // 手机游戏数据1
      // do something
      break;
    case url.includes("apgame&typeID=3"):
      // 手机软件数据2
      // do something
      break;
    default:
  }
}

function loadJS(url) {
  var script = document.createElement("script");
  script.src = url;
  document.head.appendChild(script);
}

function loadCSS(url) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;


  document.head.appendChild(link);
}



/**
 *
 * 公共函数 End
 *
 */

/**
 * 动态加载 Start 
 */
!function(e){e(["jquery"],function(e){return function(){function t(e,t,n){return g({type:O.error,iconClass:m().iconClasses.error,message:e,optionsOverride:n,title:t})}function n(t,n){return t||(t=m()),v=e("#"+t.containerId),v.length?v:(n&&(v=d(t)),v)}function o(e,t,n){return g({type:O.info,iconClass:m().iconClasses.info,message:e,optionsOverride:n,title:t})}function s(e){C=e}function i(e,t,n){return g({type:O.success,iconClass:m().iconClasses.success,message:e,optionsOverride:n,title:t})}function a(e,t,n){return g({type:O.warning,iconClass:m().iconClasses.warning,message:e,optionsOverride:n,title:t})}function r(e,t){var o=m();v||n(o),u(e,o,t)||l(o)}function c(t){var o=m();return v||n(o),t&&0===e(":focus",t).length?void h(t):void(v.children().length&&v.remove())}function l(t){for(var n=v.children(),o=n.length-1;o>=0;o--)u(e(n[o]),t)}function u(t,n,o){var s=!(!o||!o.force)&&o.force;return!(!t||!s&&0!==e(":focus",t).length)&&(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){h(t)}}),!0)}function d(t){return v=e("<div/>").attr("id",t.containerId).addClass(t.positionClass),v.appendTo(e(t.target)),v}function p(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1}}function f(e){C&&C(e)}function g(t){function o(e){return null==e&&(e=""),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s(){c(),u(),d(),p(),g(),C(),l(),i()}function i(){var e="";switch(t.iconClass){case"toast-success":case"toast-info":e="polite";break;default:e="assertive"}I.attr("aria-live",e)}function a(){E.closeOnHover&&I.hover(H,D),!E.onclick&&E.tapToDismiss&&I.click(b),E.closeButton&&j&&j.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&e.cancelBubble!==!0&&(e.cancelBubble=!0),E.onCloseClick&&E.onCloseClick(e),b(!0)}),E.onclick&&I.click(function(e){E.onclick(e),b()})}function r(){I.hide(),I[E.showMethod]({duration:E.showDuration,easing:E.showEasing,complete:E.onShown}),E.timeOut>0&&(k=setTimeout(b,E.timeOut),F.maxHideTime=parseFloat(E.timeOut),F.hideEta=(new Date).getTime()+F.maxHideTime,E.progressBar&&(F.intervalId=setInterval(x,10)))}function c(){t.iconClass&&I.addClass(E.toastClass).addClass(y)}function l(){E.newestOnTop?v.prepend(I):v.append(I)}function u(){if(t.title){var e=t.title;E.escapeHtml&&(e=o(t.title)),M.append(e).addClass(E.titleClass),I.append(M)}}function d(){if(t.message){var e=t.message;E.escapeHtml&&(e=o(t.message)),B.append(e).addClass(E.messageClass),I.append(B)}}function p(){E.closeButton&&(j.addClass(E.closeClass).attr("role","button"),I.prepend(j))}function g(){E.progressBar&&(q.addClass(E.progressClass),I.prepend(q))}function C(){E.rtl&&I.addClass("rtl")}function O(e,t){if(e.preventDuplicates){if(t.message===w)return!0;w=t.message}return!1}function b(t){var n=t&&E.closeMethod!==!1?E.closeMethod:E.hideMethod,o=t&&E.closeDuration!==!1?E.closeDuration:E.hideDuration,s=t&&E.closeEasing!==!1?E.closeEasing:E.hideEasing;if(!e(":focus",I).length||t)return clearTimeout(F.intervalId),I[n]({duration:o,easing:s,complete:function(){h(I),clearTimeout(k),E.onHidden&&"hidden"!==P.state&&E.onHidden(),P.state="hidden",P.endTime=new Date,f(P)}})}function D(){(E.timeOut>0||E.extendedTimeOut>0)&&(k=setTimeout(b,E.extendedTimeOut),F.maxHideTime=parseFloat(E.extendedTimeOut),F.hideEta=(new Date).getTime()+F.maxHideTime)}function H(){clearTimeout(k),F.hideEta=0,I.stop(!0,!0)[E.showMethod]({duration:E.showDuration,easing:E.showEasing})}function x(){var e=(F.hideEta-(new Date).getTime())/F.maxHideTime*100;q.width(e+"%")}var E=m(),y=t.iconClass||E.iconClass;if("undefined"!=typeof t.optionsOverride&&(E=e.extend(E,t.optionsOverride),y=t.optionsOverride.iconClass||y),!O(E,t)){T++,v=n(E,!0);var k=null,I=e("<div/>"),M=e("<div/>"),B=e("<div/>"),q=e("<div/>"),j=e(E.closeHtml),F={intervalId:null,hideEta:null,maxHideTime:null},P={toastId:T,state:"visible",startTime:new Date,options:E,map:t};return s(),r(),a(),f(P),E.debug&&console&&console.log(P),I}}function m(){return e.extend({},p(),b.options)}function h(e){v||(v=n()),e.is(":visible")||(e.remove(),e=null,0===v.children().length&&(v.remove(),w=void 0))}var v,C,w,T=0,O={error:"error",info:"info",success:"success",warning:"warning"},b={clear:r,remove:c,error:t,getContainer:n,info:o,options:{},subscribe:s,success:i,version:"2.1.3",warning:a};return b}()})}("function"==typeof define&&define.amd?define:function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):window.toastr=t(window.jQuery)});
//# sourceMappingURL=toastr.js.map

loadJS('https://fastly.jsdelivr.net/npm/cnchar/cnchar.min.js')
// loadJS('https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/toastr.js/2.1.4/toastr.min.js')
loadCSS('https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/toastr.js/2.1.4/toastr.min.css')

/**
 * 动态加载 END
 */




/**
 *
 * 通知 Start
 *
 */


toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-bottom-left",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

// 兼容函数
function notify(status , title, text, delay = 3000) {
  if (status == 'err') {
    status = 'error'
  }
  toastr[status](text, title)
}








const alertTitle = "提示";
// 替换 alert()
window.alert = function (message) {
  switch (true) {
    case message.includes("已"):
      notify("success", alertTitle, message);
      break;
    case message.includes("成功"):
      notify("success", alertTitle, message);
      break;
    case message.includes("无"):
      notify("error", alertTitle, message);
      break;
    default:
      notify("info", alertTitle, message);
  }
};

console.log = function (...args) {
  notify("info", "Console LOG", JSON.stringify(args));
};

console.warn = function (...args) {
  notify("warn", "Console WARN", JSON.stringify(args));
};
console.error = function (...args) {
  notify("error", "Console ERR", JSON.stringify(args));
};

window.onerror = function (msg, url, lineNo, columnNo, error) {
  notify(
    "error",
    "监测到一个运行错误",
    msg
    /* +
      "\nURL: " +
      url +
      "\nLine: " +
      lineNo +
      "\nColumn: " +
      columnNo +
      "\nStackTrace: " +
      error
      */
  );
  return false;
};

// 测试代码

// notify("success", "注入成功", "函数已放入页面，在本页DOM中可调用");

/**
 *
 * 通知 END
 *
 */

/**
 *
 * 对编辑页面的修改 Start
 *
 */
document.querySelector("#dcMain").style.marginLeft = 0;
document.querySelector("#dcLeft").style.display = "none";

document.body.style.cursor =
  "url('data:image/png;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAv7/////4ODg/1BQUPwAAABsAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIC/f39/f43NzfgAAAAXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3AAAArAAAAEYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALsAAABNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////////////////+Af//+AB///AAP//gAB//4AAf/+AAD//AAA//wAAP/8AAD//gAA//4AAP/+AAH//wAB//8AA//xwAf/8GAf//AP///wA///8AP///AH///wD///8B////A////wP///8P////H////z////8='), auto";

// 创建一个div元素
var div = document.createElement("div");
/*
div.setAttribute(
  "style",
  `  display: flex;
  flex-direction: column;`
);
*/
// 设置div的样式为固定在右下角
div.style.position = "fixed";
div.style.top = "60px";
div.style.left = "20px";

// 创建一个函数，用于创建按钮
function createButton(text, onclick) {
  // 创建一个按钮元素
  var button = document.createElement("button");
  // 设置按钮的文本
  button.innerText = text;
  // 设置按钮的样式 （跟随页面）
  button.setAttribute("class", "btnGraybian");
  button.style.marginBottom = "4px";
  button.style.marginRight = "4px";
  // 设置按钮的点击事件
  button.onclick = onclick;
  // 返回按钮
  return button;
}

// 使用函数创建按钮
var buttonDel = createButton("删除", function () {
  var url = window.location.href;
  url = url.replace("edit", "del");
  window.location.href = url;
});
// 把按钮添加到div中
div.appendChild(buttonDel);

// 使用函数创建游戏推荐按钮
var buttonGame = createButton("游戏推荐", function () {
  taglist(6911, "游戏推荐");

  //获取元素id为typeID的select
  var select = document.getElementById("typeID");
  //更改select的选项为24
  select.value = 24;
});
// 把按钮添加到div中
div.appendChild(buttonGame);

// 使用函数创建软件推荐按钮
var buttonSoft = createButton("软件推荐", function () {
  taglist(6990, "软件推荐");

  //获取元素id为typeID的select
  var select = document.getElementById("typeID");
  //更改select的选项为25
  select.value = 25;
});
// 把按钮添加到div中
div.appendChild(buttonSoft);

// 使用函数创建发布按钮
var buttonPublish = createButton("发布&日期更新", function () {
  try {
    document.getElementsByName("isPublish")[0].checked = true;
    document.getElementsByName("submit")[0].click();

    // 资讯没这个
    document.getElementsByName("isUpdatetime")[0].checked = true;
  } catch (e) {
    alert(e);
  }
});
// 把按钮添加到div中
div.appendChild(buttonPublish);

// 使用函数创建发布按钮
var buttonRecom = createButton("填推荐", function () {
  try {
    // 获取输入框的值
    let input = prompt("请输入内容");
    // 定义正则表达式，匹配句号前面的！!。并转义
    let regex = /[。](?!$)/g;

    // 定义替换后的字符
    let replacement = "，";
    // 使用replace方法替换字符串
    let output = input.replace(regex, replacement);
    // 获取textarea和body元素
    let textarea = document.getElementById("description");

    // 获取iframe元素
    var iframe = document.querySelector(".ke-edit-iframe");
    // 获取iframe的window对象
    var iframeWindow = iframe.contentWindow;
    // 获取iframe的document对象
    var iframeDocument = iframeWindow.document;
    // 获取iframe里的body元素
    var iframeBody = iframeDocument.querySelector(".ke-content");

    // 将替换后的字符串填入元素中
    iframeBody.innerHTML = output;

    textarea.value = output;
  } catch (e) {
    alert(e);
  }
});
// 把按钮添加到div中
div.appendChild(buttonRecom);

// 使用函数创建按钮
var buttonHTMLRegx = createButton("HTMLRegx", function () {
  var url = window.location.href;
  url = url.replace("edit", "del");
  window.location.href = url;
});
// 把按钮添加到div中
div.appendChild(buttonHTMLRegx);

// 使用函数创建按钮
var buttonHejiTitle = createButton("生成合集标题", function () {
  try {
    // 获取输入框的值
    let inputTitle = prompt("[合集] 输入标题（不含“大全”）");

    document.getElementsByName("title")[0].value = inputTitle + "大全";
    document.getElementsByName("ename")[0].value = cnchar.spell(inputTitle,'first', 'low'); // 首字母小写
    document.getElementsByName("seo_title")[0].value =
      inputTitle + "大全-" + inputTitle + "推荐-" + inputTitle + "下载";
  } catch (e) {
    console.error(e);
  }
});
// 把按钮添加到div中
div.appendChild(buttonHejiTitle);

//
document.body.appendChild(div);

/**
 *
 * 对编辑页面的修改 END
 *
 *
 */

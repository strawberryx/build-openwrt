/**
 *
 * 公共函数 Start
 *
 */

function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  if (script.readyState) {
    // IE
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    // Others
    script.onload = function () {
      callback();
    };
  }
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

// 动态引入 css 文件
function loadCSS(url) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}

// 动态引入 css 文件
function loadStyle(url) {
  var link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = url;
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(link);
}

// 使用 style 标签动态引入
function loadCssCode(code) {
  var style = document.createElement("style");
  style.type = "text/css";
  style.rel = "stylesheet";
  try {
    //for Chrome Firefox Opera Safari
    style.appendChild(document.createTextNode(code));
  } catch (ex) {
    //for IE
    style.styleSheet.cssText = code;
  }
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(style);
}

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

/**
 *
 * 公共函数 End
 *
 */

/**
 * 动态加载 Start 
 */

loadScript('https://fastly.jsdelivr.net/npm/cnchar/cnchar.min.js',()=>{console.log('https://fastly.jsdelivr.net/npm/cnchar/cnchar.min.js Loaded!')})
/**
 * 动态加载 END
 */




/**
 *
 * 通知 Start
 *
 */

// 创建一个通知类
class Notification {
  constructor(status, title, text) {
    this.status = status; // 通知图标的url
    this.title = title; // 通知标题
    this.text = text; // 通知文字
    this.element = null; // 通知元素
    this.timeout = null; // 通知消失的定时器
  }

  // 创建通知元素并添加到页面上
  create() {
    // 创建一个div作为通知元素
    this.element = document.createElement("div");
    // 设置通知元素的样式，参考elementUI
    this.element.style.position = "fixed";
    this.element.style.top = "16px";
    this.element.style.right = "16px";
    this.element.style.width = "320px"; //300
    this.element.style.padding = "16px";
    this.element.style.borderRadius = "4px";
    this.element.style.zIndex = 99999;

    // 修改通知元素的背景颜色，使用hex格式

    switch (this.status) {
      case "success":
        this.element.style.backgroundColor = "#43b244";
        break;
      case "failed":
        this.element.style.backgroundColor = "#e83015";
        break;
      case "error":
        this.element.style.backgroundColor = "#e83015";
        break;
      case "warn":
        this.element.style.backgroundColor = "#feba07";
        break;
      default:
        this.element.style.backgroundColor = "#005a9d";
    }

    // 修改通知元素的文字颜色为白色，使用hex格式
    this.element.style.color = "#FFFFFF";

    this.element.style.boxShadow = "0 2px 12px 0 rgba(0,0,0,.1)";
    this.element.style.display = "flex";
    this.element.style.alignItems = "center";
    this.element.style.transition =
      "transform .3s ease-in-out, opacity .3s ease-in-out"; // 设置动效

    // 创建一个div作为通知内容
    let contentElement = document.createElement("div");
    contentElement.style.flexGrow = "1";
    // 创建一个h4作为通知标题
    let titleElement = document.createElement("h4");
    titleElement.textContent = this.title;
    titleElement.style.marginTop = "0";
    titleElement.style.marginBottom = "4px";
    titleElement.style.fontSize = "16px";
    titleElement.style.fontWeight = "bold";
    // 创建一个p作为通知文字
    let textElement = document.createElement("p");
    textElement.textContent = this.text;
    textElement.style.marginTop = "0";
    textElement.style.marginBottom = "0";
    textElement.style.fontSize = "14px";
    textElement.style.lineHeight = "1.5";
    textElement.setAttribute(
      "style",
      `  word-break: break-all;
    word-wrap: break-word;`
    );

    // 将图标、标题、文字添加到内容元素中
    contentElement.appendChild(titleElement);
    contentElement.appendChild(textElement);
    // 将图标和内容添加到通知元素中
    this.element.appendChild(contentElement);

    // 获取页面上已有的通知元素
    let notifications = document.querySelectorAll(".notification");
    // 计算新的通知元素的偏移量，根据已有的通知元素的数量和高度
    let offset = notifications.length * (this.element.offsetHeight + 16);
    // 设置新的通知元素的初始位置，向上偏移一定距离，透明度为0，形成动效的初始状态
    this.element.style.transform = `translateY(-${offset + 20}px)`;
    this.element.style.opacity = "0";
    // 给新的通知元素添加一个类名，方便后续选择
    this.element.classList.add("notification");
    // 将新的通知元素添加到页面上
    document.body.appendChild(this.element);

    // 在添加到页面上之后，再获取新的通知元素的高度，并重新计算偏移量
    offset = notifications.length * (this.element.offsetHeight + 16);

    // 触发重绘，让动效生效
    this.element.offsetHeight;
    // 设置新的通知元素的最终位置，向下偏移一定距离，透明度为1，形成动效的最终状态
    this.element.style.transform = `translateY(${offset}px)`;
    this.element.style.opacity = "1";
  }

  // 销毁通知元素并从页面上移除，并更新其他通知元素的位置
  destroy() {
    if (this.timeout) {
      clearTimeout(this.timeout); // 清除定时器，避免重复销毁
    }
    if (this.element) {
      // 设置通知元素的消失动效，向上偏移一定距离，透明度为0
      this.element.style.transform += `translateY(-20px)`;
      this.element.style.opacity = "0";
      setTimeout(() => {
        // 在动效结束后，从页面上移除通知元素，并将其置为null，释放内存
        document.body.removeChild(this.element);
        this.element = null;
        // 获取页面上剩余的通知元素，并更新它们的位置，使其不重叠在一起
        let notifications = document.querySelectorAll(".notification");
        for (let i = 0; i < notifications.length; i++) {
          let notification = notifications[i];
          let offset = i * (notification.offsetHeight + 16);
          notification.style.transform = `translateY(${offset}px)`;
        }
      }, 300); // 延时300ms，与动效时间一致
    }
  }
}

// 创建一个函数来方便弹出通知，不需要传入index参数了
function notify(status, title, text, delay = 6000) {
  // 创建一个新的通知对象，并调用create方法创建元素并显示在页面上
  let notification = new Notification(status, title, text);
  notification.create();
  // 设置一个定时器，在delay后调用destroy方法销毁元素并从页面上移除，并更新其他通知元素的位置
  notification.timeout = setTimeout(() => {
    notification.destroy();
  }, delay); // 延时delay，如果没有给定则默认为3000ms
}

/* 精简通知

// 创建一个通知元素
function createNotification(type, title, message) {
  // 创建一个div元素，添加alert类和type类
  let notification = document.createElement("div");
  notification.classList.add("alert", type);

  // 创建一个span元素，添加closebtn类，设置onclick属性为关闭通知
  let closebtn = document.createElement("span");
  closebtn.classList.add("closebtn");
  closebtn.innerHTML = "×";
  closebtn.onclick = function () {
    // 设置通知的透明度为0
    notification.style.opacity = "0";
    // 在600毫秒后隐藏通知
    setTimeout(function () {
      notification.style.display = "none";
    }, 600);
  };

  // 创建一个h4元素，设置内容为标题
  let titleElement = document.createElement("h4");
  titleElement.innerHTML = title;

  // 创建一个p元素，设置内容为消息
  let messageElement = document.createElement("p");
  messageElement.innerHTML = message;

  // 将关闭按钮，标题元素和消息元素添加到通知元素中
  notification.appendChild(closebtn);
  notification.appendChild(titleElement);
  notification.appendChild(messageElement);

  // 根据type参数设置通知的文字颜色
  switch (type) {
    case "success":
      notification.style.color = "green";
      break;
    case "error":
      notification.style.color = "red";
      break;
    case "failed":
      notification.style.color = "red";
      break;
    case "warn":
      notification.style.color = "yellow";
      break;
    default:
      notification.style.color = "black";
      break;
  }

  // 返回通知元素
  return notification;
}

// 显示一个通知
function notify(type, title, message, duration) {
  // 获取页面上左下角的容器元素
  let container = document.getElementById("notification-container");

  // 如果容器不存在，创建一个并添加到页面上
  if (!container) {
    container = document.createElement("div");
    container.id = "notification-container";
    container.style.position = "fixed";
    container.style.bottom = "10px";
    container.style.left = "10px";
    document.body.appendChild(container);
  }

  // 创建一个通知元素
  let notification = createNotification(type, title, message);

  // 获取通知元素中的关闭按钮
  let closebtn = notification.querySelector(".closebtn");

  // 将通知元素添加到容器中
  container.appendChild(notification);

  // 设置通知的透明度为1（显示）
  notification.style.opacity = "1";

  // 设置通知的过渡动画
  notification.style.transition = "opacity .6s ease-in-out";

  // 设置关闭按钮的位置为右边
  closebtn.style.float = "right";

  // 如果duration参数存在，设置一个定时器在duration毫秒后关闭通知
  if (duration) {
    setTimeout(function () {
      closebtn.onclick();
    }, duration);
  } else {
    setTimeout(function () {
      closebtn.onclick();
    }, 8000);
  }
}


**/

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
    let inputTitle = prompt("[合集] 输入标题（不含“推荐”）");

    document.getElementsByName("title")[0].value = inputTitle + "大全";
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

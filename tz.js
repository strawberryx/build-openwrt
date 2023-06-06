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

// 替换 alert()
window.alert = function (message) {
  switch (true) {
    case message.includes("成功"):
      notify("success", message, "来自页面alert()");
      break;
    case message.includes("已添加"):
      notify("info", message, "来自页面alert()");
      break;
    default:
      notify("error", message, "来自页面alert()");
  }
};

// 测试代码

notify("success", "注入成功", "函数已放入页面，在本页DOM中可调用");

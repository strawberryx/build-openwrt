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
    this.element.style.width = "300px";
    this.element.style.padding = "16px";
    this.element.style.borderRadius = "4px";

    // 修改通知元素的背景颜色，使用hex格式

    switch (this.status) {
      case "success":
        this.element.style.backgroundColor = "#43b244";
        break;
      case "failed":
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
    // 创建一个img作为通知图标
    let iconElement = document.createElement("img");
    iconElement.src =
      "https://cdn1.iconfinder.com/data/icons/brands-pattern/224/delicious-social-network-brand-logo-512.png";
    iconElement.style.width = "36px";
    iconElement.style.height = "36px";
    iconElement.style.marginRight = "8px";

    // 添加一个onerror事件处理函数，当图片加载失败时，给img元素设置一个默认的宽度和高度
    iconElement.onerror = function () {
      iconElement.style.width = "36px";
      iconElement.style.height = "36px";
    };

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

    // 将图标、标题、文字添加到内容元素中
    contentElement.appendChild(titleElement);
    contentElement.appendChild(textElement);
    // 将图标和内容添加到通知元素中
    this.element.appendChild(iconElement);
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
function notify(status, title, text) {
  // 创建一个新的通知对象，并调用create方法创建元素并显示在页面上
  let notification = new Notification(status, title, text);
  notification.create();
  // 设置一个定时器，在3s后调用destroy方法销毁元素并从页面上移除，并更新其他通知元素的位置
  notification.timeout = setTimeout(() => {
    notification.destroy();
  }, 10000); // 延时3s，与题目要求一致
}

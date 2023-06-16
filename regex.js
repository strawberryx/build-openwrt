/**

函数

**/

function find(str, cha, num) {
  var x = str.indexOf(cha);
  for (var i = 0; i < num; i++) {
    x = str.indexOf(cha, x + 1);
  }
  return x;
}

let html = automaRefData("variables", "html");
let title = automaRefData("variables", "title");

let filters = [
  { regex: / /gm, replace: "" }, // 空格
  { regex: /，(?=[^，]*$)/gm, replace: "。" }, //末尾，->。
  { regex: /属于/gm, replace: "是" }, //属于
  { regex: /《/gm, replace: "" }, //
  { regex: /》/gm, replace: "" }, //
  
  { regex: /\。(?!$)/gm, replace: "，" }, //一句话内。->，
  
  { regex: /\！(?!$)/gm, replace: "，" }, //一句话内！->，
  
  { regex: /<p>\n\t<br \/>\n<\/p>/gmi, replace: "" }, //p br p
  
  { regex: /<div>/g, replace: "" }, //
  
  { regex: /<\/div>/g, replace: "" }, //

  /*
  
  { regex: /<div>\n\t<br \/>\n</div>/gm, replace: "" }, //
  
  { regex: /<h3>\n\t<br \/>\n</h3>/gm, replace: "" }, //
  
  { regex: /<p>\n\t<br\/>\n</p>/gm, replace: "" }, //


  */
  
  { regex: /<br \/>/gm, replace: "" }, //
  
  { regex: /&nbsp;/gm, replace: "" }, //
  
  { regex: /：/gm, replace: "" }, //
  
  { regex: /<h3>\n\t<br\/>\n<\/h3>\n/gm, replace: "" }, //
  
  { regex: /(.+?(?=是))/, replace: title }, //替换“是”前为标题
  
  { regex: /\n<p>\n\t<br \/>\n<\/p>/gi, replace: "" }
  
  
] // 需要过滤或替换的正则表达式

for (let i = 0; i < filters.length; i++) {
  if (filters[i].replace) {
    html = JSON.stringify(json).replace(filters[i].regex, filters[i].replace); // 替换字符串
  } else {
    html = JSON.stringify(json).replace(filters[i].regex, ""); // 过滤字符串
  }
}

if (html.indexOf("<h3>") == -1) {
  let index = find(html, "<p>", 1);

  let newhtml = html.slice(0, index) + "<h3>example</h3>" + html.slice(index);

  let index2 = find(newhtml, "<p>", 4);

  newhtml =
    newhtml.slice(0, index2) + "<h3>example</h3>" + newhtml.slice(index2);
  let index3 = find(newhtml, "<p>", 7);

  newhtml =
    newhtml.slice(0, index3) + "<h3>example</h3>" + newhtml.slice(index3);

  // 扔掉过多的内容

  let indexMax = find(newhtml, "<p>", 10);

  if (indexMax == -1) {
  } else {
    newhtml = newhtml.slice(0, indexMax);
  }

  /* 标序号 */
  //newhtml = newhtml.replace(/\n/g, '');
  //newhtml = newhtml.replace(/\t/g, '');
  newhtml = newhtml.replace(/<p>\n\t\d+、/g, "<p>");
  newhtml = newhtml.replace(/3、\n\t/g, "3、");

  let count = 0;
  newhtml = newhtml.replace(/<p>/g, function (match) {
    count++;
    if (count === 1) {
      return match;
    } else {
      let num = (count - 1) % 3;
      if (num === 0) {
        num = 3;
      }
      return match + num + "、";
    }
  });

  //\n\t
  //newhtml = newhtml.replace(/\n/g, '');
  //newhtml = newhtml.replace(/\t/g, '');

  // 替换末尾的逗号
  const regexComma = /<p>(.*?)<\/p>/g;
  const replacement = "$1".replace(/，$/, "。");
  newhtml = newhtml.replace(regexComma, replacement);

  // 添加缺少的标点符号
  var regMissingPunctuation = /<p>([\s\S]*?)<\/p>/g;

  newhtml = newhtml.replace(regMissingPunctuation, function (match, p1) {
    if (
      p1.trim().charAt(p1.trim().length - 1) !== "？" &&
      p1.trim().charAt(p1.trim().length - 1) !== "。" &&
      p1.trim().charAt(p1.trim().length - 1) !== "；" &&
      p1.trim().charAt(p1.trim().length - 1) !== "！"
    ) {
      return "<p>" + p1.trim() + "。</p>";
    } else {
      return "<p>" + p1.trim() + "</p>";
    }
  });

  automaSetVariable("html", newhtml);
  automaNextBlock();
} else {
  automaNextBlock();
}

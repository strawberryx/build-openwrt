/**

方便函数

**/
function find(str, cha, num) {
    var x = str.indexOf(cha);
    for (var i = 0; i < num; i++) {
      x = str.indexOf(cha, x + 1);
    }
    return x;
  }
  
  
  
  
  let str = automaRefData("variables", "html");
  
  if (str.indexOf("<h3>") == -1) {
    let index = find(str, "<p>", 1);
  
    let newStr = str.slice(0, index) + "<h3>example</h3>" + str.slice(index);
  
    let index2 = find(newStr, "<p>", 4);
  
    newStr = newStr.slice(0, index2) + "<h3>example</h3>" + newStr.slice(index2);
    let index3 = find(newStr, "<p>", 7);
  
    newStr = newStr.slice(0, index3) + "<h3>example</h3>" + newStr.slice(index3);
  
    // 扔掉过多的内容
  
    let indexMax = find(newStr, "<p>", 10);
  
    if (indexMax == -1) {
    } else {
      newStr = newStr.slice(0, indexMax);
    }
  
    /* 标序号 */
    //newStr = newStr.replace(/\n/g, '');
    //newStr = newStr.replace(/\t/g, '');
    newStr = newStr.replace(/<p>\n\t\d+、/g, "<p>");
    newStr = newStr.replace(/3、\n\t/g, "3、");
  
    let count = 0;
    newStr = newStr.replace(/<p>/g, function (match) {
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
    //newStr = newStr.replace(/\n/g, '');
    //newStr = newStr.replace(/\t/g, '');
  
    // 替换末尾的逗号
    const regexComma = /<p>(.*?)<\/p>/g;
    const replacement = "$1".replace(/，$/, "。");
    newStr = newStr.replace(regexComma, replacement);
  
  
    // 添加缺少的标点符号
    var regMissingPunctuation = /<p>([\s\S]*?)<\/p>/g;
  
    newStr = newStr.replace(regMissingPunctuation, function (match, p1) {
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
  
    automaSetVariable("html", newStr);
    automaNextBlock();
  } else {
    automaNextBlock();
  }
  
console.log(document.getElementById("title").value);
try {
  console.log(document.getElementById("desc").value);
} catch (error) {}

try {
  console.log(document.getElementById("seo_title").value);
} catch (error) {
  console.log(document.getElementsByName("seo_title")[0].value);
}

try {
  console.log(document.getElementsByName("description")[0].value);
} catch (error) {}

try {
  console.log(document.getElementById("tags").value);
} catch (error) {
  console.log(document.getElementsByName("tag")[0].value);
}
console.log(document.getElementsByName("tid")[0].value);
console.log(document.getElementsByName("apk_url")[0].value);
console.log(document.getElementsByName("apk_resid")[0].value);

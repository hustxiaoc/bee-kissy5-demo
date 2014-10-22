define("bee-kissy5-demo/index", ["node"], function(require, exports, module) {
var node = require("node");
/*
Wed Oct 22 2014 11:34:04 GMT+0800 (CST)
combined files by KMD:

src/index.js
src/mods/header.js
src/mods/article.js
*/
var beeKissy5DemoModsHeader, beeKissy5DemoModsArticle, beeKissy5DemoIndex;
beeKissy5DemoModsHeader = function (exports) {
  exports = {};
  var $ = node.all;
  exports = {
    init: function () {
      $('header').html('this is header');
    }
  };
  return exports;
}();
beeKissy5DemoModsArticle = function (exports) {
  exports = {};
  var $ = node.all;
  exports = {
    init: function () {
      $('article').html('this is article');
    }
  };
  return exports;
}();
beeKissy5DemoIndex = function (exports) {
  exports = {};
  var header = beeKissy5DemoModsHeader;
  header.init();
  var article = beeKissy5DemoModsArticle;
  article.init();
  return exports;
}();
module.exports = beeKissy5DemoIndex;
});
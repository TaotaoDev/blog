(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{94:function(s,n,a){"use strict";a.r(n);var t=a(0),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"jquery基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery基本使用"}},[s._v("#")]),s._v(" jquery基本使用")]),s._v(" "),a("h2",{attrs:{id:"一-jquery的基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-jquery的基本使用"}},[s._v("#")]),s._v(" 一.jQuery的基本使用")]),s._v(" "),a("p",[s._v("->1.0  2.0  3.0   分别支持ie8  部分支持ie8  全部不支持ie8  开发的时候最常用的是1.几版本\n->分为开发版本和压缩版本  带有min的是压缩版本，一般情况下使用的是开发版本\n->window.onload=function(){}    <=>    $(function(){})   绑定文档加载完成的监听\n->分为两种使用     使用jQuery核心函数或者jQuery核心对象    核心函数$/jQuery   核心对象 执行$()返回的对象")]),s._v(" "),a("h2",{attrs:{id:"二-jquert的两把利器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-jquert的两把利器"}},[s._v("#")]),s._v(" 二.jQuert的两把利器")]),s._v(" "),a("p",[s._v("->jQuery的核心函数,直接可用\n->jQuery的核心对象,执行jQuery函数调用他")]),s._v(" "),a("h2",{attrs:{id:"三-jquery函数的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-jquery函数的使用"}},[s._v("#")]),s._v(" 三.jQuery函数的使用")]),s._v(" "),a("p",[s._v("I.作为一般函数使用:$(param)\n1).  参数为函数  :  当DOM加载完成后，执行此回调函数\n2).  参数为DOM对象  : 将DOM对象封装成jQuery对象\n3).  参数为选择器字符串 : 查找所有匹配的标签，并将他们分装成jQuery对象\n4).  参数为html标签字符串  : (用的少)创建标签对象并分装成jQuery对象")]),s._v(" "),a("p",[s._v("II.作为对象使用:$.xxx()\n1).  $.each() :  隐使遍历数组     回调函数中第一个为key，第二个为value\n2).  $.trim() :  去除两端空格")]),s._v(" "),a("p",[s._v("III. 事件回调函数中   this指向的是 #btn  DOM对象元素")]),s._v(" "),a("h2",{attrs:{id:"四-jquery对象的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-jquery对象的使用"}},[s._v("#")]),s._v(" 四.jQuery对象的使用")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("I. 理解\n\n1).即执行jQuery核心函数返回的对象\n2).jQuery对象内部包含的是dom元素对象的伪数组\n3).jQuery对象拥有很多有用的方法和属性\n\nII. 基本行为\n\n1).size()/length : 包含的DOM元素\n2).[index]/get(index)  :  得到DOM元素对应的下标\n3).each()  :  遍历DOM元素\n4).index()  :  得到DOM元素的下标\n\nIII. 伪数组\n\n1).伪数组是一个对象\n2).伪数组必须有length属性\n3).如果这个对象的length不为0，那么必须要有按照下标存储的数据\n4).没有数组特别的方法 forEach() push() pop() splice()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h2",{attrs:{id:"五-jquery基本选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-jquery基本选择器"}},[s._v("#")]),s._v(" 五.jQuery基本选择器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('1).class   ".b"代表所有的class属性为b的元素\n2).id      "#div"  代表id元素\n3).标签               "div"   代表标签元素\n4).子集               "div.box" 代表class属性为btn中的div元素\n5).并集               "#b,#c"  代表id为c和id为b的元素\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"六-jquery层次选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六-jquery层次选择器"}},[s._v("#")]),s._v(" 六.jQuery层次选择器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("I.查找子元素，后代元素，兄弟元素的选择器\n\n1).  >   是指当前这一代的下一代，不包括下下代\n2).  +   是指当前元素的下一个元素，只包括一个\n3).  ~   是指当前元素的后面所有兄弟姐妹元素(就是不能包括上一级的元素)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"七-jquery过滤选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七-jquery过滤选择器"}},[s._v("#")]),s._v(" 七.jQuery过滤选择器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('I. 选择器\n\n1).  :first  正序\n2).  :last   倒叙\n3).  :not(.box)   选择不包含clss为box的元素\n4).  :lt(3):gt(0)  小于第三个大于第零个\n5).  :contains("name")  选择所有标签的innerHTML内容是name的标签\n6).  :hidden()  选择隐藏的标签\n7).  [title]  选择所有带有title属性的标签体\n8).  [title=hello]  选择title属性为hello的标签\n\nII.  多个选择器不是同时执行，而是以此执行\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"八-jquery隔行换色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#八-jquery隔行换色"}},[s._v("#")]),s._v(" 八.jQuery隔行换色")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1).   odd:偶数       even:奇数    nth-child(2n)偶数\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"九-jquery表单选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#九-jquery表单选择器"}},[s._v("#")]),s._v(" 九.jQuery表单选择器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("I.表单的常用选择器\n\t\n1).  text[disabled]  :选择text文本的不可用输入框\n2).  checkbox:checked  :选择被选中的复选框按钮  \n\nII. :等价于[]   在选择器中等价存在\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"十-jquery-工具方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十-jquery-工具方法"}},[s._v("#")]),s._v(" 十.jQuery_$工具方法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('I.工具方法\n\n1).  $.each()  :  遍历数组对象中的数据\n2).  $.trim()  :  去除字符串两遍的空格\n3).  $.type(obj) : 得到数据类型\n4).  $.isArray(obj) : 判断是否是数组\n5).  $.isFunction(obj) : 判断是否是函数\n6).  $.parseJSON(json) : 解析json字符串转换为js对象\n\nII. JSON\n\n1).  \'{"name":"Tom" , "Age":12 }\'  这是一个json \n2).  \'[{"name":"Tom","Age":12},{"name":"Allen","Age":24}]\'   这是一个json数组\n3).   JSON.parse(jsonString)  json字符串----\x3ejs对象/数组\n4).   JSON.stringify(jsObj/jsArr)  js对象/数组----\x3ejson字符串\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h2",{attrs:{id:"十一-jquery多tab点击切换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十一-jquery多tab点击切换"}},[s._v("#")]),s._v(" 十一.jQuery多tab点击切换")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("I.  设计思路    获取全部的DOM元素，然后通过this获取到这个index()，最后通过操作jQuery对象的下标的方式操作\n\nII.  先获取全部的DOM元素，然后定义一个当前显示的元素的下标，先让这个元素隐藏，在显示当前点击的元素，最后更新下标（效率上更高）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"十二-jquery属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十二-jquery属性"}},[s._v("#")]),s._v(" 十二.jQuery属性")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("I.属性\n\n1).attr()  一个参数代表查看，两个参数代表第二个参数覆盖    但是不能操作布尔值\n2).removeAttr()  移除\n3).addClass()  添加class \n4).html()   标签   有字符串代表->这是标签体\n5).prop()   专门操作属性值为boolean的属性值\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"十三-jquery的css操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十三-jquery的css操作"}},[s._v("#")]),s._v(" 十三.jQuery的CSS操作")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("I.CSS操作\n\n1).css()   一个参数代表查看，两个参数代表第二个参数覆盖  \n2).css({'color':'#ff0011'})可以这是多个值\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"十四-jquery位置操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十四-jquery位置操作"}},[s._v("#")]),s._v(" 十四.jQuery位置操作")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("I.offset 和   position\n\n1).offset().left 和  offset().top  两个可以获取相对于页面的位置\n2).position()  和上面是一样，这个获取的是父元素的位置\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"十五-jquery中的位置滚动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十五-jquery中的位置滚动"}},[s._v("#")]),s._v(" 十五.jQuery中的位置滚动")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("I.常用方法\n\n1).scrollTop()  可以得到元素的滚动高度\n2).scrollLeft()   可以得到x轴滚动距离\n3).上面的两个方法(number)  既可设置滚动的距离\n\nII.如何获取窗体滚动       获取页面的html+body两个滚动条的滚动总量\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"十六-练习-jquery回滚到顶部"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十六-练习-jquery回滚到顶部"}},[s._v("#")]),s._v(" 十六.练习 jQuery回滚到顶部")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("I.瞬间回到顶部   $('html,body').scrollTop(0)\nII.平滑滚动    计算总时间，时间间隔（定时器的时间）总距离 每次移动的距离（总距离除以需要的时间）  然后用定时器执行\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"十七-jquery元素的尺寸"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十七-jquery元素的尺寸"}},[s._v("#")]),s._v(" 十七.jQuery元素的尺寸")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("I.内容尺寸\n\n1).height() :height\n2).width()  :width\n\nII.内部尺寸\n\n1).innerHeight() :height+padding\n2).innerWidth()  :width+padding\n\nIII.外部尺寸\n\n1).outerHeight(false/true)  :height+padding+border  如果是true，加上margin\n1).outerWidth(false/true)  :width+padding+border  如果是true，加上margin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"十八-jquery的筛选"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十八-jquery的筛选"}},[s._v("#")]),s._v(" 十八.jQuery的筛选")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("I.过滤\n\n1).first()  第一个\n2).last()  最后一个\n3).eq()*  指定某一个  参数为number  \n4).filter('[title=hello]')  指定title属性为hello的\n5).not('[title=hello]')   指定不是hello的(还包括没有title属性)\n6).filter('[title][title!=hello]')   交集选择器代表两个条件\n7).has('span')   指向内部标签\n\nII.查找\n\n1).children()  子标签  \n2).find()      后代标签\n3).parent()    父标签\n4).prevAll()   前面的标签\n5).siblings()  兄弟标签\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"十九-jquery文档操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十九-jquery文档操作"}},[s._v("#")]),s._v(" 十九.jQuery文档操作 *")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("I.增删改\n\n1).append(ELement)   向内部最后添加元素\n2).prepend(Element)  向内部最前添加元素\n3).before(Element)   向兄弟前面添加元素\n4).after(ELement)    向兄弟后面添加元素\n5).replaceWith(Element)   替换指定的内部元素\n6).remove(DOM_Element)    移除指定的内部元素\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"二十-jquery事件处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二十-jquery事件处理"}},[s._v("#")]),s._v(" 二十.jQuery事件处理")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("I")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("常用事件\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mouseenter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    鼠标移入\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mouseleave")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    鼠标移出\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("II")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("事件处理\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("eve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      第一个参数代表事件的处理方式\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("off")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("           和第一个相对应，取消时间绑定\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("点击时传入ev \n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("ev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("clientX     到客户端左上角的距离\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("ev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pageX       到页面顶部左上角的距离\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("ev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("offsetX     到相对于事件左上角的距离\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("ev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("stopPropagation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    阻止事件的冒泡\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("ev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("preventDefault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("     阻止事件的默认行为\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("III")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("事件切换\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("     是mouseenter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("mouseleave两个函数的回调函数\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IV")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("区别mouseover与mouseenter\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("mouseover"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("在移入子元素时也会触发"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("对应mouseout\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("mouseenter"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("只在移入当前元素时触发"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("对应mouseleave\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("V")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("事件委托\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("将多个子元素")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("li"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("的事件监听委托给父元素")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ul"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("处理\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("监听回调是加在了父元素上\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("当操作任何一个子元素")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("li"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("时，事件会冒泡到父元素")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ul"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("上\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("父辈元素不会直接处理，而是根据event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("target得到发生事件的子元素")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("li"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("，通过这个子元素调用事件回调函数\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("委托方 ：  业主     li\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("被委托方  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("   中介    ul\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("添加新的子元素，自动由事件响应处理\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("减少事件监听的数量"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("    n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("设置事件委托"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("API")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parentSelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("delegate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("childrenSelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("eventName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("取消事件的委托"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("API")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parentSelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("undelegate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("eventName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("VI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" 事件处理\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("triggler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'data'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("param1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("parma2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br")])]),a("h2",{attrs:{id:"二十一-jquery动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二十一-jquery动画"}},[s._v("#")]),s._v(" 二十一.jQuery动画")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("I.内置动画\n\n1).fadeOut()   淡入   param---\x3enumber  代表存在秒数    \n2).fadeIn()    淡出   参数和上面一样\n3).fadeToggle()  淡入淡出切换   可以传一个回调函数，当切换结束的时候触发\n4).不断改变元素opacity来实现\n5).slideDown()   带动画的展开\n6).sildeUp()     带动画的收缩\n7).sildeToggle()   带动画的切换展开/收缩\n8).不断改变元素height实现\n9).show()     显示\n10).hide()    隐藏\n11).toggle()  切换\n12).不断改变opacity和height和width实现\n\nII.自定义动画\n\n1).animate()    指定自定义动画  参数可以传一个json 分别指定值\n2).animate()    不需要带有单位，还可以进行字符串的加减\n3).stop()       可以阻止动画的继续进行\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h2",{attrs:{id:"二十二-jquery多库共存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二十二-jquery多库共存"}},[s._v("#")]),s._v(" 二十二.jQuery多库共存")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("I.当多个$库同时存在时,需要使用\nII.调用jQuery.noConflict()释放$使用权\nIII.下文需要调用的$时，只能使用jQuery\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"二十三-区别onload与ready"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二十三-区别onload与ready"}},[s._v("#")]),s._v(" 二十三.区别onload与ready")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("I.window.onload\n\n1).包括页面的图片加载完后才会调用(晚)\n2).只能有一个监听回调\n\nII.$(document).ready()\n\n1).等同于$(function(){})\n2).页面加载完就回调(早)\n3).可以有多个监听回调\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"二十四-jquery扩展工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二十四-jquery扩展工具"}},[s._v("#")]),s._v(" 二十四.jQuery扩展工具")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("I.$扩展本身, 使用方式----\x3e$.min()  \n\n1).定义\n$.extend({\n\txx:function(){\n\t\t...\n\t},\n\tyy:function(){\n\t\t...\n\t}\n})\n\nII.$添加新的方法,使用方式-----\x3e$.checkAll()\n\n1).定义 \n$.fn.extend({\n\txx:function(){\n\t\t...\n\t},\n\tyy:function(){\n\t\t...\n\t}\n})\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);
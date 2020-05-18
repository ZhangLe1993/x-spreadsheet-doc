(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{334:function(a,e,t){"use strict";t.r(e);var r=t(33),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"table-类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-类"}},[a._v("#")]),a._v(" Table 类")]),a._v(" "),t("p",[a._v("该类主要负责表格的绘制和渲染")]),a._v(" "),t("h2",{attrs:{id:"实例化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例化"}},[a._v("#")]),a._v(" 实例化")]),a._v(" "),t("p",[a._v("需要传递代理 data_proxy 生成的对象，需要自定义 Element，不是")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" table "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Table")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("el"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"实例属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例属性"}},[a._v("#")]),a._v(" 实例属性")]),a._v(" "),t("h3",{attrs:{id:"el"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#el"}},[a._v("#")]),a._v(" el")]),a._v(" "),t("p",[a._v("为当前 table 挂载的自定义 Element，不是 HTMLElement")]),a._v(" "),t("h3",{attrs:{id:"draw"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#draw"}},[a._v("#")]),a._v(" draw")]),a._v(" "),t("p",[a._v("挂载绘画工具类，为 canvas 构建底层")]),a._v(" "),t("h3",{attrs:{id:"data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[a._v("#")]),a._v(" data")]),a._v(" "),t("p",[a._v("挂载代理 data_proxy 生成的对象")]),a._v(" "),t("p",[t("strong",[a._v("注意")]),a._v("：不是绑定值")]),a._v(" "),t("h2",{attrs:{id:"私有方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#私有方法"}},[a._v("#")]),a._v(" 私有方法")]),a._v(" "),t("h3",{attrs:{id:"renderautofilter-viewrange"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#renderautofilter-viewrange"}},[a._v("#")]),a._v(" renderAutofilter(viewRange)")]),a._v(" "),t("p",[t("strong",[a._v("功能")]),a._v("：渲染自动过滤函数")]),a._v(" "),t("p",[t("code",[a._v("@param viewRange")]),a._v(" 视口范围，Object 类型")]),a._v(" "),t("h3",{attrs:{id:"rendercell-draw-data-rindex-cindex-yoffset-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rendercell-draw-data-rindex-cindex-yoffset-0"}},[a._v("#")]),a._v(" renderCell(draw, data, rindex, cindex, yoffset = 0)")]),a._v(" "),t("p",[t("strong",[a._v("功能")]),a._v("：渲染单元格")]),a._v(" "),t("p",[t("code",[a._v("@param draw")]),a._v(" 绘制 canvas 工具类")]),a._v(" "),t("p",[t("code",[a._v("@param data")]),a._v(" 为 data_proxy 生成的对象")]),a._v(" "),t("p",[t("code",[a._v("@param rindex")]),a._v(" 行坐标, 0 开始")]),a._v(" "),t("p",[t("code",[a._v("@param cindex")]),a._v(" 列坐标, 0 开始")]),a._v(" "),t("p",[t("code",[a._v("@param yoffset")]),a._v(" y 轴偏移量")]),a._v(" "),t("h3",{attrs:{id:"rendercontent-viewrange-fw-fh-tx-ty"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rendercontent-viewrange-fw-fh-tx-ty"}},[a._v("#")]),a._v(" renderContent(viewRange, fw, fh, tx, ty)")]),a._v(" "),t("p",[t("strong",[a._v("功能")]),a._v("：渲染文本")]),a._v(" "),t("p",[t("code",[a._v("@param viewRange")]),a._v(" 视口范围，Object 类型")]),a._v(" "),t("p",[t("code",[a._v("@param fw")]),a._v(" 左边index栏宽度")]),a._v(" "),t("p",[t("code",[a._v("@param fh")]),a._v(" 表格最顶部标题栏高度")]),a._v(" "),t("p",[t("code",[a._v("@param tx")]),a._v(" 表格中如果存有冻结行列，那么 tx 为冻结行宽度总和")]),a._v(" "),t("p",[t("code",[a._v("@param ty")]),a._v(" 表格中如果存有冻结行列，那么 ty 为冻结行高度总和")]),a._v(" "),t("h3",{attrs:{id:"rendercontentgrid-sri-sci-eri-eci-w-h-fw-fh-tx-ty"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rendercontentgrid-sri-sci-eri-eci-w-h-fw-fh-tx-ty"}},[a._v("#")]),a._v(" renderContentGrid({ sri, sci, eri, eci, w, h }, fw, fh, tx, ty)")]),a._v(" "),t("p",[t("strong",[a._v("功能")]),a._v("：渲染网格线")]),a._v(" "),t("p",[t("code",[a._v("@param sri")]),a._v(" 开始行坐标")]),a._v(" "),t("p",[t("code",[a._v("@param sci")]),a._v(" 开始列坐标")]),a._v(" "),t("p",[t("code",[a._v("@param eri")]),a._v(" 结束行坐标")]),a._v(" "),t("p",[t("code",[a._v("@param eci")]),a._v(" 结束列坐标")]),a._v(" "),t("p",[t("code",[a._v("@param w")]),a._v(" 宽度")]),a._v(" "),t("p",[t("code",[a._v("@param h")]),a._v(" 高度")]),a._v(" "),t("p",[t("code",[a._v("@param fw")]),a._v(" 左边index栏宽度")]),a._v(" "),t("p",[t("code",[a._v("@param fh")]),a._v(" 表格最顶部标题栏高度")]),a._v(" "),t("p",[t("code",[a._v("@param tx")]),a._v(" 表格中如果存有冻结行列，那么 tx 为冻结行宽度总和")]),a._v(" "),t("p",[t("code",[a._v("@param ty")]),a._v(" 表格中如果存有冻结行列，那么 ty 为冻结行高度总和")]),a._v(" "),t("h3",{attrs:{id:"renderfixedheaders-type-viewrange-w-h-tx-ty"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#renderfixedheaders-type-viewrange-w-h-tx-ty"}},[a._v("#")]),a._v(" renderFixedHeaders(type, viewRange, w, h, tx, ty)")]),a._v(" "),t("p",[t("strong",[a._v("功能")]),a._v("：渲染标题栏和左侧 index 栏样式")]),a._v(" "),t("p",[t("code",[a._v("@param type")]),a._v(" type: all | left | top")]),a._v(" "),t("p",[t("code",[a._v("@param w")]),a._v(" 宽度")]),a._v(" "),t("p",[t("code",[a._v("@param h")]),a._v("  高度")]),a._v(" "),t("p",[t("code",[a._v("@param tx")]),a._v(" 表格中如果存有冻结行列，那么 tx 为冻结行宽度总和")]),a._v(" "),t("p",[t("code",[a._v("@param ty")]),a._v(" 表格中如果存有冻结行列，那么 ty 为冻结行高度总和")]),a._v(" "),t("h3",{attrs:{id:"renderfixedlefttopcell-fw-fh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#renderfixedlefttopcell-fw-fh"}},[a._v("#")]),a._v(" renderFixedLeftTopCell(fw, fh)")]),a._v(" "),t("p",[t("strong",[a._v("功能")]),a._v("：渲染标题栏和 index 栏左上角交界处单元格")]),a._v(" "),t("p",[t("code",[a._v("@param fw")]),a._v(" 左边index栏宽度")]),a._v(" "),t("p",[t("code",[a._v("@param fh")]),a._v(" 表格最顶部标题栏高度")]),a._v(" "),t("h3",{attrs:{id:"renderfreezehighlightline-fw-fh-ftw-fth"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#renderfreezehighlightline-fw-fh-ftw-fth"}},[a._v("#")]),a._v(" renderFreezeHighlightLine(fw, fh, ftw, fth)")]),a._v(" "),t("p",[t("strong",[a._v("功能")]),a._v("：渲染冻结行列高亮线")]),a._v(" "),t("p",[t("code",[a._v("@param fw")]),a._v(" 左边index栏宽度")]),a._v(" "),t("p",[t("code",[a._v("@param fh")]),a._v(" 表格最顶部标题栏高度")]),a._v(" "),t("p",[t("code",[a._v("@param ftw")]),a._v(" 表格中如果存有冻结行列，那么 ftw 为冻结行宽度总和")]),a._v(" "),t("p",[t("code",[a._v("@param fth")]),a._v(" 表格中如果存有冻结行列，那么 fth 为冻结行高度总和")]),a._v(" "),t("h3",{attrs:{id:"renderselectedheadercell-x-y-w-h"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#renderselectedheadercell-x-y-w-h"}},[a._v("#")]),a._v(" renderSelectedHeaderCell(x, y, w, h)")]),a._v(" "),t("p",[t("strong",[a._v("功能")]),a._v("：渲染选中标题栏和 index 栏样式")]),a._v(" "),t("p",[t("code",[a._v("@param x")]),a._v(" 计算值距离左边的距离")]),a._v(" "),t("p",[t("code",[a._v("@param y")]),a._v(" 计算值距离顶部的距离")]),a._v(" "),t("p",[t("code",[a._v("@param w")]),a._v(" 列宽")]),a._v(" "),t("p",[t("code",[a._v("@param h")]),a._v(" 行高")]),a._v(" "),t("h2",{attrs:{id:"公有方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#公有方法"}},[a._v("#")]),a._v(" 公有方法")]),a._v(" "),t("h3",{attrs:{id:"resetdata-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resetdata-data"}},[a._v("#")]),a._v(" resetData(data)")]),a._v(" "),t("p",[t("strong",[a._v("功能")]),a._v("：刷新数据")]),a._v(" "),t("p",[t("code",[a._v("@param data")]),a._v(" data_proxy 对象")]),a._v(" "),t("h3",{attrs:{id:"render"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[a._v("#")]),a._v(" render()")]),a._v(" "),t("p",[t("strong",[a._v("功能")]),a._v("： 渲染表格")]),a._v(" "),t("p",[a._v("用法：")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" table "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Table")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("el"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\ntable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("render")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h3",{attrs:{id:"clear"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clear"}},[a._v("#")]),a._v(" clear()")]),a._v(" "),t("p",[t("strong",[a._v("功能")]),a._v("： 清除表格绘制画板区域")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" table "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Table")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("el"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\ntable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("clear")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h2",{attrs:{id:"其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[a._v("#")]),a._v(" 其他")]),a._v(" "),t("h3",{attrs:{id:"tablefixedheaderstyle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tablefixedheaderstyle"}},[a._v("#")]),a._v(" tableFixedHeaderStyle()")]),a._v(" "),t("p",[t("strong",[a._v("功能")]),a._v("：获得默认配置的 table 标题栏和 index 栏选中样式")]),a._v(" "),t("h3",{attrs:{id:"tablegridstyle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tablegridstyle"}},[a._v("#")]),a._v(" tableGridStyle")]),a._v(" "),t("p",[a._v("默认网格样式声明")]),a._v(" "),t("h3",{attrs:{id:"cellpaddingwidth"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cellpaddingwidth"}},[a._v("#")]),a._v(" cellPaddingWidth")]),a._v(" "),t("p",[a._v("单元格默认 padding")]),a._v(" "),t("h3",{attrs:{id:"tablefixedheadercleanstyle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tablefixedheadercleanstyle"}},[a._v("#")]),a._v(" tableFixedHeaderCleanStyle")]),a._v(" "),t("p",[a._v("默认填充样式")])])}),[],!1,null,null,null);e.default=s.exports}}]);
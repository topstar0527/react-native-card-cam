function load_js(src=''){
	  var script_elem = document.createElement('script');
	  script_elem.type = 'text/javascript';
	  script_elem.src = src;
	  document.getElementsByTagName('head')[0].appendChild(script_elem);
}

//获取语言类型
let lang=localStorage.getItem("lang_type") || "zh";//en or zh
//加载文件
load_js("langs/lang_"+lang+".js")






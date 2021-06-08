
let buttom;//按钮loading
(function($,window) {
	console.log("进来了公共方法");
	$('.mui-content').scroll({
		scrollY: true, //是否竖向滚动
		scrollX: false, //是否横向滚动
		startX: 0, //初始化时滚动至x
		startY: 0, //初始化时滚动至y
		indicators: true, //是否显示滚动条
		deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
		bounce: true //是否启用回弹
	});
	$ajax = function(options) {
		options = options || {};
		//默认参数
		let dataJson = {
			type: 'get', //get or post
			dataType: 'json',
			data: {},
			loading:true,
			success: function(d) {

			},
		}
		let data = Object.assign(dataJson, options);
		
	
		$.ajax('http://47.245.59.26' + data.url, {
			data: data.data,
			dataType: data.dataType, //服务器返回json格式数据
			type: data.type, //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			// headers: {
			// 	'Content-Type': 'application/json'
			// },
			success: function(d) {
				if (d.code == '0' || d.code == 0) {
					if(data.loading){
						setTimeout(function(){
							$.hideLoading();
						},500);
					}
					
					data.success(d);
				} else {
					$(buttom).button('reset');
					$.hideLoading(function(){
						//隐藏后的回调函数
						$.toast(d.msg);
					});
					
				}

			},
			error: function(xhr, type, errorThrown) {
				//异常处理；
				$.hideLoading();
				console.log(type);
			}
		});
	}

//显示加载框
    $.showLoading = function(message,type) {
        if ($.os.plus && type !== 'div') {
            $.plusReady(function() {
                plus.nativeUI.showWaiting(message);
            });
        } else {
            var html = '';
            html += '<i class="mui-spinner mui-spinner-white"></i>';
            html += '<p class="text">' + (message || "") + '</p>';
 
            //遮罩层
            var mask=document.getElementsByClassName("mui-show-loading-mask");
            if(mask.length==0){
                mask = document.createElement('div');
                mask.classList.add("mui-show-loading-mask");
                document.body.appendChild(mask);
                mask.addEventListener("touchmove", function(e){e.stopPropagation();e.preventDefault();});
            }else{
                mask[0].classList.remove("mui-show-loading-mask-hidden");
            }
            //加载框
            var toast=document.getElementsByClassName("mui-show-loading");
            if(toast.length==0){
                toast = document.createElement('div');
                toast.classList.add("mui-show-loading");
                toast.classList.add('loading-visible');
                document.body.appendChild(toast);
                toast.innerHTML = html;
                toast.addEventListener("touchmove", function(e){e.stopPropagation();e.preventDefault();});
            }else{
                toast[0].innerHTML = html;
                toast[0].classList.add("loading-visible");
            }
        }   
    };
 
    //隐藏加载框
      $.hideLoading = function(callback) {
        if ($.os.plus) {
            $.plusReady(function() {
                plus.nativeUI.closeWaiting();
            });
        } 
        var mask=document.getElementsByClassName("mui-show-loading-mask");
        var toast=document.getElementsByClassName("mui-show-loading");
        if(mask.length>0){
            mask[0].classList.add("mui-show-loading-mask-hidden");
        }
        if(toast.length>0){
            toast[0].classList.remove("loading-visible");
            callback && callback();
        }
      }


})(mui,window);

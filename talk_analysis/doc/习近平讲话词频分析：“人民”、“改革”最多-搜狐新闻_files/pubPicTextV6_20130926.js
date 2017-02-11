(function($){
	$.picText={
  	defaults : {
  		//����������ͼƬ
  		pics : '#contentText img',      //��������ҳ  		
  		pics_slide : '.cont img' , //��������ҳ�õ�Ƭģʽ
  		pics_light : '#contentText img',        //��sohu
  		pics_big : '#contentText .flag_bigP',   //��ͼ
  		pics_small : '#contentText .flag_smallP',  //Сͼ
  		//������˵����ͼƬ
  		titles : '#contentText .tableImg .text-pic-tt',
  		//ͼƬ�ϱ��浽���ĸ���
  		savePicLayer : [
  			'<div style="top:-165px; display:none;" class="conserve-photo" ondragstart="return false;">',
  			'	<div class="comCount">0</div>',
  			'</div>'
  			].join(''),
  		//ͼƬ���ֺ�ı��浽��ᰴť	
  		savePicButton : '&nbsp;<a class="savePicBtn" href="javascript:void(0);">[���浽���]</a>',	
  		loadingLayer : [
  			'<div id="loadingDiv" class="transmit-window picText-loading">',
				'	<div class="transmit-content">',  			
				'		<span>���ڱ��棬���Ժ�..</span>',
				'		<div class="close"></div>',
				'	</div>',
				'</div>'  		
  		].join(''),	
  		//�ɹ�ת�غ���ʾ�Ĳ�	
  		successLayer : [
  			'<div id="successDiv" class="transmit-window">',
				'	<div class="transmit-content">',
				'		<div class="transmit-title"></div>',
				'		<div class="transmit-news"><a href="" target="_blank"></a></div>',
				'		<div class="close"></div>',
				'	</div>',
				'</div>'

  			].join(''),
  		//ת��ʧ�ܺ���ʾ�Ĳ�	
  		errorLayer : [
				'<div id="errorDiv" class="transmit-end-window">',
				'	<div class="transmit-end-content">',
				'		<div class="transmit-end-title"></div>',
				'		<div class="transmit-end-news"><a target="_blank" href="#"></a></div>',
				'		<div class="transmit-end-btn"><a href="javascript:void(0)">ȷ��</a></div>',
				'		<div class="close"></div>',
				'	</div>',
				'</div>'

  			].join(''),
  			iflogin : 'login',
  			transmitHandler : '#successDiv .transmit-news a',
  			blogHandler : '#errorDiv .transmit-end-news a',
  			flag : true,
  			ifFirst : false,
  			look : {
  				47 : 0.045,
  				48 : 0.046,
  				96 : 0.052,
  				93 : 0.054,
  				95 : 0.056,
  				88 : 0.092,
  				91 : 0.094,
  				90 : 0.096,
  				89 : 0.098,
  				45 : 0.102,
  				81 : 0.106,
  				98 : 0.194,
  				78 : 0.198,
  				85 : 0.202,
  				94 : 0.294,
  				77 : 0.298,
  				92 : 0.302,
  				87 : 0.391,	
  				46 : 0.397,
  				83 : 0.403,
  				86 : 0.409,
  				80 : 0.492,
  				44 : 0.508,
  				82 : 0.582,
  				99 : 0.612,
  				84 : 0.622
  			}
  	},
  	init : function(opts){
  		var m = this;
  		var opts = opts == undefined ? {} : opts;
  		var picsObj = opts.from == 'slide' ? $(this.defaults.pics_slide) : $(this.defaults.pics);
  		var titlesObj = $(this.defaults.titles);	
  		var saveButton = this.defaults.savePicButton;
  		var saveLayerHtml = this.defaults.savePicLayer;
  		$.each(titlesObj,function(i){
  			var txt = $.trim($(titlesObj[i]).text());
  			if(txt.length > 0){   //�����ͼƬ����
  				var desc = $.trim($(titlesObj[i]).text()); 
        	$(this).append(saveButton);                     //���ͼƬ���ֺ�ġ����浽��ᡱ��ť
        	var picSrc = $(this).closest(".tableImg").find("tr:first img").attr("src") == undefined ? "" : $(this).closest(".tableImg").find("tr:first img").attr("src");
        	$(this).find(".savePicBtn").attr("picUrl",picSrc); //��ͼƬ��Ϣ�浽�����浽��ᡱ��ť
        	$(this).find(".savePicBtn").attr("desc",desc);
  			}else{                            //û��ͼƬ����
  
  			}
  		});
  		function locatePic(_t){
  			var theTop = $(_t).offset().top + $(_t).height() - $(".conserve-photo").height() - 10;
  			var theLeft = $(_t).offset().left + $(_t).width() - $(".conserve-photo").width() - 10;
  			var obj;
  			if($(_t).parent()[0].tagName == "A"){
  				obj = $(_t).parent().next(".conserve-photo");
  			}else{
  				obj = $(_t).next(".conserve-photo");
  			}
				var picSrc = $(_t).attr("src");
				$(obj).css({top:theTop, left:theLeft});
				$(obj).attr("picUrl",picSrc); //��ͼƬ��Ϣ�浽�����浽��ᡱ����
				var desc = $(_t).closest(".tableImg").find(".text-pic-tt a.savePicBtn").attr("desc") == undefined ? "" : $(_t).closest(".tableImg").find(".text-pic-tt a.savePicBtn").attr("desc");
				$(obj).attr("desc",desc);
  		}
  		$.each(picsObj,function(i){
  			var _t = this;
  			var flag = '';
  			var theSrc = $(_t).attr("src");
  			var obj;
  			if(theSrc.indexOf("http://photocdn.sohu.com/") != -1){
  				if($(_t).parent()[0].tagName == "A"){
  					$(_t).parent().after(saveLayerHtml);
  					obj = $(_t).parent().next(".conserve-photo");
  				}else{
  					$(_t).after(saveLayerHtml);
  					obj = $(_t).next(".conserve-photo");
  				}
  					var imgTime = window.setInterval(function(){
						if($(_t)[0].complete){
								window.clearInterval(imgTime);
								locatePic(_t);
			  				if(($(_t).height() >= 300 && $(_t).width() >= 200) || ($(_t).height() >= 200 && $(_t).width() >= 300)){
			  					$(_t).addClass("flag_bigP");
									$(obj).show();
									$(_t).bind("mouseover",function(e){ 
					  				if(!$(obj).hasClass("conserve-photo-hover")){
					  					$(obj).addClass("conserve-photo-hover");
					  				}
					  			});
					  			$(_t).bind("mouseleave",function(e){
					  				$(obj).removeClass("conserve-photo-hover");
					  			});					
			  				}else if($(_t).height() > 35){
			  					$(_t).addClass("flag_smallP");	
			  					$(obj).addClass("conserve-photo-small");
			  					$(_t).bind("mouseover",function(){
					  				$(obj).show();
					  			});
					  			$(_t).bind("mouseleave",function(){
					  				$(obj).hide();
					  			});
			  				}else{
			  				}	
						
							}else{
								return;	
							}
						},100);  				
  			}
  			$(window).resize(function(){
  				locatePic(_t);
  			});
  		});
 			this.initEvts(opts);
 			function _getCommentAmount(){
 				var time = 0;
 				var commTime = window.setInterval(function(){
 					
 					if((window.eval("window.topic_all_"+newsId) != undefined && window.facelist != undefined) || time > 50){
 						
 						window.clearInterval(commTime);
 						if(time > 50){
 							var commCount = 0;
 							var faceCount = {};
 						}else{
 							var commCount = (window.eval("topic_all_"+newsId) == undefined || window.eval("topic_all_"+newsId).allCount == undefined)? 0 : window.eval("topic_all_"+newsId).allCount;
 							var faceCount = (window.facelist == undefined || window.facelist.faceCount == undefined) ? {} : window.facelist.faceCount; 							
 						}
 						var expressions = 0;   //���鷢������
 						var expMax = 0;        //�����鷢����
 						var expMaxId = 0;      //�����鷢�����ı���id
 						var startAmount = 0;   //��һ��ͼƬ��ת����
 						var path = document.location.pathname;
 						var page = 0;
 						var newsIdStr = newsId + "";
 						var startIdx = path.indexOf(newsIdStr) + newsIdStr.length;
 						var endIdx = path.indexOf(".shtml");
 						var buttonObj = $(".conserve-photo");
 						if(startIdx < endIdx){
 							page = parseInt(path.substring(startIdx+1,endIdx),10);
 						}else{
 							page = 0;
 						}
 						page = page + 1;
 						for(var fId in faceCount){
 							expressions = expressions + faceCount[fId];
 							if(faceCount[fId] > expMax && fId != 79 && fId != 97){
 								expMax = faceCount[fId];
 								expMaxId = fId;
 							}
 						}
 						if(commCount + expressions < 10){                //������+���鷢������С��10
 							var r = Math.floor(Math.random()*2+1);
 							startAmount = commCount + expressions + r;
 						}else if(expMax >= 10){                          //���鷢�����������10 
 							var by = m.defaults.look[expMaxId] == undefined ? 0.044 : m.defaults.look[expMaxId]; 
 							startAmount = (commCount + expressions) * by;
 						}else{                                       //����������\˼���ı��鷢�������������10(�����ޱ�����,��ʱ���鷢�������Ϊ0)
 							startAmount = (commCount + expressions) * 0.044;
 						}
 						startAmount = startAmount / page;
						var ratio = 1/0.798;
						$.each(buttonObj,function(i){
							ratio = ratio * 0.798;
							$(this).find(".comCount").text(Math.round(startAmount * ratio));
						});
 					}else{
 						time++;
 						return;	
 					}
 				},100);
 			}
 			if($(picsObj).length > 0){
 				_getCommentAmount();
 			}
  	},
  	initEvts : function(opts){
  		var bigPicsObj = $(this.defaults.pics_big);
  		var smallPicsObj = $(this.defaults.pics_small);
  		var isMove = false;
  		var px = -1;
  		var py = -1;
  
  		$(".conserve-photo").bind("mouseover",function(){
  			
  			if(!$(this).hasClass("conserve-photo-hover") && !$(this).hasClass("conserve-photo-small")){
  				$(this).addClass("conserve-photo-hover");
  			}else if($(this).hasClass("conserve-photo-small")){
  				$(this).show();
  			}
  		});
  		$(".conserve-photo").bind("mouseout",function(){
  			$(this).removeClass("conserve-photo-hover")
  			
  		});

			function _ifLogin(t,from){                     //�ж��Ƿ��½
				if(!$.cookie("lastdomain") && !$.cookie("ppinf") && !$.cookie("spsession")){     //���ٱ���
					$.picText.defaults.ifFirst = true;
				}
  			if(!$.cookie("ppinf") && !$.cookie("spsession")){
  				$.picText.defaults.iflogin = 'unlogin';
  				$.picText.defaults.me = t;
  				$.CommentLogin.commnetLoginInit($.picText.beforeSavePic,{from:from,url:"http://admin.i.sohu.com/blog/view/232051340.htm"});
  				return false;
  			}else{
  				return true;	
  			}					

			}
			function _count(ty){                        //�������ӿ�
	  		var countUrl = "http://i.sohu.com/a/forward/blog/clicksave.htm?type="+ty+"&jsonp=?";
	  		$.ajax({
	                type: "GET",
	                url: countUrl,
	                dataType: "jsonp",
	                scriptCharset: "utf-8",
                	jsonp:"callback",
	                success:function(data){
	                	
	                }
	      });	
	      	
			}
			function _photoCount(){                    //������������ļ����ӿ�
				var urlRequest = "http://i.sohu.com/a/forward/blog/saveinfo.htm?type=photo&iflogin="+$.picText.defaults.iflogin+"&jsonp=?";
				$.ajax({
					type : "GET",
					url : urlRequest,
					dataType : "jsonp",
					scriptCharset : "utf-8",
					jsonp : "callback",
					success : function(data){} 	
				});
			}
			function _loading(ty){
				$.picText.showResultLayer("loading");
			}
		//	$(".conserve-photo").unbind("click").bind("click",function(event){
		//		event.preventDefault();
		//	});

			$(document).mousemove(function(e){         //�����϶����浽����
				var obj = $.picText.defaults.movedObj;
				if(!isMove){return;};
				var X=e.pageX-parseInt($(obj).width()/2);
				var Y=e.pageY-parseInt($(obj).height()/2);
				$(obj).css({"left":X,"top":Y});
			});

			$(".conserve-photo").unbind("mousedown").bind("mousedown",function(event){
				if(!isMove){
					px = event.pageX;
					py = event.pageY;
				}
				isMove=true;
				$.picText.defaults.movedObj = $(this);
			});
  		$(".conserve-photo").bind("mouseup",function(event){         //��ͼƬ�ϵı��渡����¼�
  			isMove=false;
  			$.picText.defaults.movedObj = null;
  			if((event.pageX == px && event.pageY == py) || typeof(event.pageX) == "undefined" ){
	  			//event.preventDefault();
	  			var t = this;
	  			var imgObj;
	  			
	  			if($(t).prev()[0].tagName == "A"){
	  				imgObj = $(t).prev().children("img");
	  			}else{
	  				imgObj = $(t).prev();
	  			}
	  			photoCollection.collect(imgObj,$(t).attr("desc"))
	  		

	  			if($.picText.defaults.flag){
	  				_count("photo");
	  			}
	  		/*	$.picText.defaults.picSrc = $(t).attr("picUrl");
	  			$.picText.defaults.desc = $(t).attr("desc");	  			
	  			var result = _ifLogin(t,"photo");
	  			if(result){
	  				if(!$.picText.defaults.ifFirst){
	  					_loading("photo");
	  				}
	  				_photoCount();
	  				$.picText.savePic();	
	  			} */ 			
  			}

  		});
  		$(this.defaults.titles).find(".savePicBtn").unbind("click").bind("click",function(event){    //ͼƬ���ֺ�ġ����浽��ᡱ��ť���¼�
  			event.preventDefault();
				var t = this;
				var imgObj = $(t).closest(".tableImg").find("img");
				if($(imgObj).length > 0){
					photoCollection.collect(imgObj,$(t).attr("desc"));
				}
  			if($.picText.defaults.flag){
  				_count("photo");
  			}		
  			/*		
				$.picText.defaults.picSrc = $(t).attr("picUrl");
				$.picText.defaults.desc = $(t).attr("desc");
				var result = _ifLogin(t,"photo");
				if(result){
					if(!$.picText.defaults.ifFirst){
						_loading("photo");
					}
					_photoCount();
					$.picText.savePic();
				}*/
  		});
  		$(".transmit_txt").bind("click",function(event){  //ת��ȫ�İ�ť���¼�
  			event.preventDefault();
  			var t = this;
  			if($.picText.defaults.flag){
  				_count("blog");
  			}  			
  			var result = _ifLogin(t,"blog");

  			if(result){
  				if(!$.picText.defaults.ifFirst){
  					_loading("blog");
  				}
  				$.picText.sendArticle();	
  			}
  		});
  
  	},
  	beforeSavePic : function(){
  		try{			

  			if ($.picText.defaults.me) {
  				$.picText.defaults.flag = false;
  				$($.picText.defaults.me).trigger("click");
  				$.picText.defaults.flag = true;		
  			}
  		}catch(e){}	
  	},
  
  	lookDetail : function(from,iflogin){                //���š�ͼƬת�ؼ����ӿ�
  	  var urlRequest = "http://i.sohu.com/a/forward/blog/lookdetail.htm?type="+from+"&iflogin="+iflogin+"&jsonp=?";
  		$.ajax({
                type: "GET",
                url: urlRequest,
                dataType: "jsonp",
                scriptCharset: "utf-8",
              	jsonp:"callback",
                success:function(data){
                	$("#myForm").submit();
                }
      });		
  	},
  	
  	userCount : function(txt){
  		var timestamp = Date.parse(new Date());
  		//var timestamp = new Date();
  		var urlRequest = "http://cc.i.sohu.com/pv.gif?"+txt+"&ts="+timestamp+"&jsonp=?";
  		$.ajax({
  				type: "GET",
  				url: urlRequest,
  				dataType: "jsonp",
  				jsonp: "callback",
  				cache: true,
  				success: function(data){}	
  		});
  	},
  	
  	savePic : function(){                   //���ô�ͼƬ�Ľӿ�
  		//var savePicUrl = "http://upload.pp.sohu.com/newsPicUpload.do?purl="+$.picText.defaults.picSrc+"&desc="+$.picText.defaults.desc+"&jsonp=?";
  		var savePicUrl = "http://pp.sohu.com/upload_remote?url="+$.picText.defaults.picSrc+"&desc="+encodeURIComponent($.picText.defaults.desc);
  		//var savePicUrl = "http://pp.sohu.com/upload_remote";
  		$.ajax({
                type: "GET",
                url: savePicUrl,
                dataType: "jsonp",
                jsonp:"callback",
                scriptCharset: "utf-8",
                //data: {url:$.picText.defaults.picSrc, desc:$.picText.defaults.desc },
                success:function(data){
                	if(data.code == 0){
                		if($.picText.defaults.ifFirst){
                			$.picText.hideResultLayer();
                			$.CommentLogin.showCommTalkSuccess({from:"photo",link:data.data.folder_url});
                		}else{
                			$.picText.showResultLayer("success");
											$("#successDiv .transmit-title").html("&nbsp;&nbsp;&nbsp;ͼƬ����¼���������");
											$($.picText.defaults.transmitHandler).html("����ǰ�����&gt;&gt;");
											$($.picText.defaults.transmitHandler).attr("iflogin",$.picText.defaults.iflogin);
											$($.picText.defaults.transmitHandler).attr("href",data.data.folder_url);
											$($.picText.defaults.transmitHandler).bind("click",function(){
												var txt = '';
												if($(this).attr("iflogin") == "login"){
													txt = "News_jump_photo";
												}else{
													txt = "News_jump_photo_stranger"
												}
												$.picText.userCount(txt);
												$($.picText.defaults.transmitHandler).attr("iflogin","login");
											});                			
                		}

										$.picText.defaults.iflogin = 'login';
                	}else{
                		$.CommentLogin.showCommTalkSuccess({error:true});
										$.picText.showResultLayer("error");
										$("#errorDiv .transmit-end-news").hide();
										$("#errorDiv .transmit-end-title").css("margin-top",34);
										$("#errorDiv .transmit-end-title").html("&nbsp;&nbsp;&nbsp;����ʧ�ܣ�");                		
                	}
                	$.picText.defaults.ifFirst = false;
                },
                error : function(){
                	$.CommentLogin.showCommTalkSuccess({error:true});
									$.picText.showResultLayer("error");
									$("#errorDiv .transmit-end-news").hide();
									$("#errorDiv .transmit-end-title").css("margin-top",34);
									$("#errorDiv .transmit-end-title").html("&nbsp;&nbsp;&nbsp;����ʧ�ܡ�");  
									$.picText.defaults.ifFirst = false;
                }
      });          	
			$.picText.defaults.me = null;
			
  	},
  	sendArticle : function(){               //����ת�������͵Ľӿ�
			var sendArticleUrl = "http://i.sohu.com/a/forward/blog/save.htm?newsId="+newsId+"&from=0&iflogin="+$.picText.defaults.iflogin+"&jsonp=?";
			 $.ajax({
                type: "GET",
                url: sendArticleUrl,
                dataType: "jsonp",
                scriptCharset: "utf-8",
                jsonp:"callback",
                success:function(data){
									if(data.code == 0){
										if($.picText.defaults.ifFirst){
                			$.picText.hideResultLayer();
                			$.CommentLogin.showCommTalkSuccess({from:"blog",link:data.articleUrl});
                		}else{
											$.picText.showResultLayer("success");
											$("#successDiv .transmit-title").html("&nbsp;&nbsp;&nbsp;��������¼�����Ĳ���");
											$($.picText.defaults.transmitHandler).html("���ھ�ȥ����&gt;&gt;");
											$($.picText.defaults.transmitHandler).attr("iflogin",$.picText.defaults.iflogin); 
											$($.picText.defaults.transmitHandler).attr("href",data.articleUrl);
											$($.picText.defaults.transmitHandler).bind("click",function(){
												var txt = '';
												if($(this).attr("iflogin") == "login"){
													txt = "News_jump_blog";
												}else{
													txt = "News_jump_blog_stranger"
												}
												$.picText.userCount(txt);
												$($.picText.defaults.transmitHandler).attr("iflogin","login");
											});			
											$.picText.defaults.iflogin = 'login';	
										}		
									}else if(data.code == 2){
										$.CommentLogin.showCommTalkSuccess({error:true});
										$.picText.showResultLayer("error");
										$("#errorDiv .transmit-end-title").html("&nbsp;&nbsp;&nbsp;�����±���һ�ξ͹�����");
										$($.picText.defaults.blogHandler).html("ȥ�����ٿ���&gt;&gt;");
										$($.picText.defaults.blogHandler).attr("iflogin",$.picText.defaults.iflogin); 
										$($.picText.defaults.blogHandler).attr("href",data.articleUrl);  
										$($.picText.defaults.blogHandler).bind("click",function(){
											var txt = '';
											if($(this).attr("iflogin") == "login"){
												txt = "News_jump_blog";
											}else{
												txt = "News_jump_blog_stranger"
											}
											$.picText.userCount(txt);
											$($.picText.defaults.blogHandler).attr("iflogin","login");											
										});
										$.picText.defaults.iflogin = 'login';									
									}else if(data.code == 3){
										$.CommentLogin.showCommTalkSuccess({error:true});
										$.picText.showResultLayer("error");
										$("#errorDiv .transmit-end-title").html("&nbsp;&nbsp;&nbsp;����û�в��ͣ�");
										$($.picText.defaults.blogHandler).html("ȥ����һ������&gt;&gt;");
										$($.picText.defaults.blogHandler).attr("iflogin",$.picText.defaults.iflogin); 
										$($.picText.defaults.blogHandler).attr("href",data.articleUrl);  
										$($.picText.defaults.blogHandler).bind("click",function(){
											var txt = '';
											if($(this).attr("iflogin") == "login"){
												txt = "News_jump_blog";
											}else{
												txt = "News_jump_blog_stranger"
											}
											$.picText.userCount(txt);
											$($.picText.defaults.blogHandler).attr("iflogin","login");											
										});
										$.picText.defaults.iflogin = 'login';									
									}else{
										$.CommentLogin.showCommTalkSuccess({error:true});
										$.picText.showResultLayer("error");
										$("#errorDiv .transmit-end-news").hide();
										$("#errorDiv .transmit-end-title").css("margin-top",34);
										$("#errorDiv .transmit-end-title").html("&nbsp;&nbsp;&nbsp;����ʧ�ܣ�");
									}
									$.picText.defaults.ifFirst = false;
                },
                error : function(){
                	$.CommentLogin.showCommTalkSuccess({error:true});
									$.picText.showResultLayer("error");
									$("#errorDiv .transmit-end-news").hide();
									$("#errorDiv .transmit-end-title").css("margin-top",34);
									$("#errorDiv .transmit-end-title").html("&nbsp;&nbsp;&nbsp;����ʧ��.");  
									$.picText.defaults.ifFirst = false;
                }
                
            });   		
			$.picText.defaults.me = null;		
  	},
  	showResultLayer : function(l){       //�㡰���浽��ᡱ��ȫ��ת�ء�����ʾ�Ĳ�
  		var resultLayerHtml = "";
  		var theH = 0;
  		var theW = 0;
  		if(l == "error"){
  			resultLayerHtml = this.defaults.errorLayer;
  		}else if(l == "success"){
  			resultLayerHtml = this.defaults.successLayer;
  		}else{
  			resultLayerHtml = this.defaults.loadingLayer;
  		}
  		if ($("#resultDiv").length == 0) {
  				$(document.body).append('<div id="resultDiv" style="position:absolute"></div>');
  		}	
  		$("#resultDiv").html(resultLayerHtml);	
  		$("#resultDiv .close,#resultDiv .transmit-end-btn a").bind("click",function(){
  				$("#resultDiv").remove();
  		});				
  		if($("#errorDiv").length > 0){
  			theH = $("#errorDiv").height();
  			theW = $("#errorDiv").width();  
  		}else if($("#successDiv").length > 0){
  			theH = $("#successDiv").height();
  			theW = $("#successDiv").width();    
  		}else{
  			theH = $("#loadingDiv").height();
  			theW = $("#loadingDiv").width();    
  		}  		
  		var theTop = ($(window).height() - theH)/2;
  		var theLeft = ($(window).width() - theW)/2;
  		var scrollTop = $(document).scrollTop();
  		var scrollLeft = $(document).scrollLeft(); 
  		$("#resultDiv").css({top:200+scrollTop, left:theLeft+scrollLeft});	
  		$("#conserve-photo").hide();	  		 		
  	},
  	hideResultLayer : function(){
  		$("#resultDiv").remove();
  	}
	};
})(jQuery);
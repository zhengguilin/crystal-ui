/*
 *@Description:
 *@Author: yankaipan
 *@Update: yankaipan(15-02-12)
*/
var dataStatistics = {
		/**
		 * BorderRadius PIE
		 */
	     cssRadius:function(){
			if (window.PIE) {
				$('.rounded').each(function() {
					PIE.attach(this);
				});
			}
		 },
		/**
		 * 右侧悬浮商家反馈及返回顶部
		 */
		scrollTop:function(){
			if($('.fixedRight').length<=0){
				$('body').append('<div class="fixedRight"><div class="feedback"><a href="#"></a><span>商家反馈</span></div><div class="gotop"><a href="javascript:;"></a><span>返回顶部</span></div></div>');
			};
			var H=$(window).height(),
				$top=$('.fixedRight .gotop');
			$(window).scroll(function(){
				$(window).scrollTop()>0?$top.fadeIn(500):$top.fadeOut(500);	
			});
			$top.click(function(){
				$('html,body').animate({'scrollTop':0},300);	
			});
		},
		/**
		 * 公共左侧sidenav
		 */
		sliderNav:function(){
		    $(".sidenav dt").toggle(function(){
				   $(this).siblings().slideUp(200);
				   $(this).parent('dl').removeClass('current');
			  },function(){
				   $(this).siblings().slideDown(200);
				   $(this).parent('dl').addClass('current');
		    });	 
	    },
		/**
		 * 模拟select.likeDrop
		 */
		likeDrop:function(){
		    $('.likeDrop .d-select-head').click(function(e){
				 $('.d-select-option').hide();
				 e.stopPropagation();
			     $(this).next('.d-select-option').show().find('li').unbind('click').click(function(){ //移除重复绑定
					  var _value = $(this).children('a').text();
				      e.stopPropagation();
				      $(this).addClass('current').siblings().removeClass('current');
					  $(this).parents('.d-select-option').prev('.d-select-head').text(_value);
					  $(this).parents('.likeDrop').find('input').val("").val(_value);
					  $(this).parents('.d-select-option').hide();	 
				 });	
			}); 
			$(document).click(function(){ $('.d-select-option').hide()});  
	    },
		/**
		 * 终端指标下拉.ftr-media
		 */
		 mediaDrop:function(){
		    $('.ftr-media .f-select-tip').click(function(e){
				 $(this).next('.f-select-cont').show();
				 $('.f-select-cont').find('.fcs-cont').find('label').click(function(e){ //限制选择指标个数(<=2)
				     var _length = $('.fcs-cont').find("input[name='c-style']:checked").length;
					 if( _length>=2){
					      $(this).siblings().find("input[name='c-style']").not("input:checked").attr('disabled' ,'disabled');
					  }else{
					      $(this).siblings().find("input[name='c-style']").not("input:checked").attr('disabled' ,false);
				     };
			     });
			});
			$('.ftr-media').mouseleave(function(){
				 $(this).children('.f-select-cont').hide();
		    })
		},
		/**
		 * icon帮助 tips
		 */
		 helpSummary:function(){
			 $(".help-icon").hover(function(){
			      $(this).children('.help-sum').show();	 
			  },function(){
			      $(this).children('.help-sum').hide();	 
		    });
	    },
		/**
		 * 流量来源展开收回table子项
		 */
		 downUpTable:function(){
		     $(".fsame-tables .slider-bar a").toggle(function(){
			      $(this).addClass('todown').parents('.m-slider').next('.s-hider').show();
				  $(this).parents('.m-slider').next('.s-hider').find('.report-detail').find('tr').hover(function(){//hover.bgColor
				        $(this).addClass('changebg');
				   },function(){
				        $(this).removeClass('changebg');
			      });
		      },function(){
			      $(this).removeClass('todown').parents('.m-slider').next('.s-hider').hide();
			 });	 
	     },
		/**
		 * 流量来源店内路径
		 */
		 pathShop:function(){  
		     $('.fpa-pmc-table tr:gt(0):odd , .be-visited-table tr:gt(0):odd , .fd-keyWords-table tr:gt(0):odd , .fa-cityArea-table tr:gt(0):odd , .rank-module-table tr:gt(0):odd , .connect-module table.same-nect tr:gt(0):odd').addClass('even');            //table隔行变色
			 $('.fpa-total-model ul.clearfix li').click(function(){
				   var _text = $(this).find('p.ftm-path-name').text(); 
				   var _count = $(this).find('.ftm-path-visit span').text(); 
				   $(this).children('a').addClass('current').parent('li').siblings().children('a').removeClass('current');
				   $(".fpn-visitor-nums .pUrl").text(_text); 
				   $(".fpn-visitor-nums .pVisits span.sp-cout").text(_count); 
				   $('.fpa-pm-cont .laodUrl').show(); //loading show
			 });
			 $(".be-visited-table tr  , .fd-keyWords-table tr , .fa-cityArea-table tr , .fpa-pmc-table tr ,.rank-module-table tr").hover(function(){//hover.bgColor
					$(this).addClass('current');
			   },function(){
					$(this).removeClass('current');
			 });
	     },
		/**
		 * 流量详情关键词详情弹出层
		 */
		 keyDetailModel:function(){
		     $(".openKeyDetail").click(function(){
			       var _docHeight = $(document).height();
				   var _popupHeight = $(".key-chart-model").outerHeight();
				   var _winScrollTop = $(window).scrollTop();
				   var _winHeight = $(window).height();
				   $("body").append("<div class='popup-mask'></div>");
				   $('.popup-mask').height(_docHeight);
				   $(".key-chart-model").show().css({top:(_winHeight-_popupHeight)/2+_winScrollTop});
				   $(".pop-close").click(function(){
				       $('body').find('.popup-mask').remove();
				       $(".key-chart-model").hide();
				   });
			 });
		 },
		/**
		 * 访客特性radio当前高亮
		 */
		styleVisitor:function(){
		    $(".tabLabel-btn label").click(function(){
			    if($(this).children('input').attr('checked') == true){
				     $(this).addClass('current').siblings().removeClass('current');	
				};	
			});
		},
		useDatePlugin:function(){ //调用日历
		   if($(".date12").length>0){
			var obj = $(".date12").spcalendar({daypanel: 2});
			$(".dateTabBtn1 a").bind('click', function () {
				$(this).addClass('current').siblings('a').removeClass('current');
				obj.options.defaultType = $(this).attr('data-mode');
				obj.calendarShow();
			});
		   };
		  if($(".date13").length>0){
			var obj2 = $(".date13").spcalendar({daypanel: 2});
			$(".dateTabBtn2 a").bind('click', function () {
				$(this).addClass('current').siblings('a').removeClass('current');
				obj2.options.defaultType = $(this).attr('data-mode');
				obj2.calendarShow();
			});
		   };
		   if($(".date14").length>0){
			var obj3 = $(".date14").spcalendar({daypanel: 2});
			$(".dateTabBtn3 a").bind('click', function () {
				$(this).addClass('current').siblings('a').removeClass('current');
				obj3.options.defaultType = $(this).attr('data-mode');
				obj3.calendarShow();
			});
		   };
		},
		/**
		 * 商品总览商品全部分类tree形下拉
		 */
		navTreeList:function(){ 
		   $(".rank-choose .Acate-express").click(function(){
		     $(this).next(".hidden-goodslist").show();
			 $(".Li-list-item .classMa").unbind('click').bind('click' , function(){ //1级 click
				if($(this).next('.second-ul').is(':hidden')){
					  $(this).addClass('highColor').next('.second-ul').slideDown(200).find('.classMb').unbind('click').bind('click' , function(){
						   if($(this).next('.third-ul').is(':hidden')){  //2级 click
								$(this).addClass('highColor').next('.third-ul').slideDown(200)
									   .find('a.classMc').unbind('click').bind('click' , function(){//2级 click
										   $('.Acate-express').val($(this).text()); //赋值 
										   $(this).parents('.hidden-goodslist').find('.curColor').removeClass('curColor') 
										   $(this).addClass('curColor')
										});
							}else{
								$(this).removeClass('highColor').next('.third-ul').slideUp(200);
						   };
						   if(!$(this).hasClass('classMb-icon')){
								$('.Acate-express').val($(this).text()); //赋值
								$(this).parents('.hidden-goodslist').find('.curColor').removeClass('curColor') 
								$(this).addClass('curColor')
						   };
					  });
				 }else{
					  $(this).parent('.Li-list-item').find('.highColor').removeClass('highColor');
					  $(this).next('.second-ul').find('.third-ul').slideUp(200);
					  $(this).next('.second-ul').slideUp(200);
				};
			 });
		  });
		
		  $(".Acategories").mouseleave(function(){
			  //$(".hidden-goodslist").find('.highColor').removeClass('highColor');
			  $(".hidden-goodslist").hide();
		  });
		 
		 
		},
		/**
		 * init
		 */
		init: function () {
			this.cssRadius();
			this.scrollTop();
			this.sliderNav();
			this.likeDrop();
			this.mediaDrop();
			this.helpSummary();
			this.downUpTable();
			this.pathShop();
			this.keyDetailModel(); 
			this.styleVisitor();
			this.useDatePlugin(); 
			this.navTreeList(); 
		}
};    

dataStatistics.init();	


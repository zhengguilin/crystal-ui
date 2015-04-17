        $(function () {
            //数据可以动态生成，格式自己定义，cha对应china-zh.js中省份的简称
            var dataStatus = [{ cha: 'HKG', name: '香港', des: '140' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'HAI', name: '海南', des: '140' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'YUN', name: '云南', des: '140' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'BEJ', name: '北京', des: '140' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'TAJ', name: '天津', des: '140' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'XIN', name: '新疆', des: '140' , visitor: '90' , pageView: '1000' , number: '1000' , percent: '80%'},
                             { cha: 'TIB', name: '西藏', des: '140' , visitor: '10000' , pageView: '100000' , number: '1000' , percent: '90%'},
                             { cha: 'QIH', name: '青海', des: '140' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'GAN', name: '甘肃', des: '140' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'NMG', name: '内蒙古', des: '140' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'NXA', name: '宁夏', des: '140' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'SHX', name: '山西', des: '140' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'LIA', name: '辽宁', des: '140' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'JIL', name: '吉林', des: '140' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'HLJ', name: '黑龙江', des: '140' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'HEB', name: '河北', des: '140' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'SHD', name: '山东', des: '140' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'HEN', name: '河南', des: '140' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'SHA', name: '陕西', des: '440' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'SCH', name: '四川', des: '140' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'CHQ', name: '重庆', des: '140' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'HUB', name: '湖北', des: '260' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'ANH', name: '安徽', des: '140' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'JSU', name: '江苏', des: '140' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'SHH', name: '上海', des: '230' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'ZHJ', name: '浙江', des: '140' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'FUJ', name: '福建', des: '140' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'TAI', name: '台湾', des: '140' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'JXI', name: '江西', des: '120' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'HUN', name: '湖南', des: '120' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'GUI', name: '贵州', des: '120' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'GXI', name: '广西', des: '120' , visitor: '1000' , pageView: '1000' , number: '1000' , percent: '1000'},
                             { cha: 'GUD', name: '广东', des: '34000', visitor: '1000' , pageView: '1000' , number: '1000' , percent: '80%'}];
            $('#container').vectorMap({ map: 'china_zh',
                color: "#B4B4B4", //地图颜色
                onLabelShow: function (event, label, code) {//动态显示内容
                    $.each(dataStatus, function (i, items) {
                        if (code == items.cha) {
                            label.html("<h3>"+items.name+"</h3>" + "访客数:"+items.visitor+"<br/>"+ "页面浏览量:"+ items.pageView+"<br/>"+ "成交人数:"+ items.number+"<br/>"+ "转化率:"+ items.percent);
                        }
                    });
                }
            });
        
            var aArray = ["HKG,HAI,YUN,BEJ,TAJ,XIN","TIB,QIH,GAN,NMG,NXA,SHX,LIA,JIL","HLJ,HEB,SHD,HEN,SHA,SCH","CHQ,HUB,ANH,JSU,SHH,ZHJ","FUJ,TAI,JXI,HUN,GUI,GXI,GUD"];
            setMapColor(aArray);
    
        });
        /**
         * 地图颜色设置
         * @param ProvinceAtr  省份数组
         */
        function setMapColor(ProvinceAtr){
            var ColorArr = ['f07870','F39B89','F8C9BA','66A891','ADDBC4']
                 ,mapColorStr = "";
            for(var N = 0; N < ProvinceAtr.length;N++){
                mapColorStr += ProvinceAtr[N].replace(/,/g,":'#"+ ColorArr[N] +"',")+":'#"+ ColorArr[N] +"',";
            }
            $('#container').vectorMap('set', 'colors', eval('({' + mapColorStr.replace(/[,]$/g,"") + '})'));
            return false;
        }

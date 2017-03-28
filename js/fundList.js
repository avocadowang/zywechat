var fundList = fundList||{};

fundList.onload = function () {
    $.ajax({
		     url: "../json/list.json",
			 type:"post",
		     success: function(data){
                 fundList.loadData(data)
          }
	});
}
fundList.loadData = function (data) {
    var listLength = data.list.length;
    for(var i= 0;i<listLength;i++){
        // var  listItem =	'<div class="listItem" onclick="fundList.view('+data.list[i].id+')">'
        //     +'<p class="fundName">'+data.list[i].name+'</p>'
        //     +'<div class="middle" style="border-bottom: 1px solid gray;">'
        //     +'<div class="mid_lef mid">'
        //     +'<p class="newWorth">'+data.list[i].newWorth+'</p>'
        //     +'<p>最新净值(元)</p>'
        //     +'</div>'
        //     +'<div class="mid_rig mid">'
        //     +'<p class="decline">'+data.list[i].decline+'</p>'
        //     +'<p>日涨跌幅%</p>'
        //     +'</div>'
        //     +'</div>'
        //     +'<div class="bottom">'
        //     +'<div class="bot_lef bot">基金代码: '+data.list[i].id+'</div>'
        //     +'<div class="bot_rig bot">'+data.list[i].riskType+'</div>'
        //     +'</div>'
        //     +'</div>';

        var listItem = '<div class="weui-form-preview listItem" onclick="fundList.view('+data.list[i].id+')" style="border-bottom: 1px solid #D9D9D9;">'
                            +'<p class="fundName">'+data.list[i].name+'</p>'
                            +'<div class="weui-form-preview__bd middle"  style="border-bottom: 1px solid #D9D9D9;">'
                            +'<div class="mid">'
                            +'<p class="weui-form-preview__value newWorth">'+data.list[i].newWorth+'</p>'
                            +'<p class="weui-form-preview__value">最新净值</p>'
                            +'</div>'
                            +'<div  class="mid">'
                            +'<p class="weui-form-preview__value decline">'+data.list[i].decline+'</p>'
                            +'<p class="weui-form-preview__value">日涨跌幅</p>'
                            +'</div>'
                            +'</div>'
                            +'<div class="weui-form-preview__bd bottom ">'
                            +'<div class="bot_lef bot">基金代码:'+data.list[i].id+'</div>'
                            +'<div class="bot_rig bot">'+data.list[i].riskType+'</div>'
                            +'</div>'
                           +'</div>'
        $('#fundList').append(listItem);
    }

};
fundList.view = function (id) {
	window.location.href = "fundView.html?"+id;
}

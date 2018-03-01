$(function(){
    var timer = null;
    var timer2 = null;
    var cur = 0;
    var len = $(".active li").length;
    var i=0;
    var colors = ['#c71918','#e8e8e8','#e8e8e8','#e2e5ea','#ee5603','#e8e8e8'];

    $("#bg").hover(function(){
        clearInterval(timer);
    },function(){
        showImg();
    });


    $(".active li").click(function(){
        clearInterval(timer);
        cur = $(this).index();
        $(this).addClass("haha").siblings().removeClass("haha");
        $("#bg img").eq(cur).fadeIn(200).siblings("img").removeClass('show').fadeOut(200);
        $('#ppp').fadeIn(200).css('background-color',colors[cur]);

    });

    $('#lba').hover(function(){
        clearInterval(timer2);
        $('#today img')[0].src ="image/eeee.jpg";
        $('#lba').css('background-color','#00b262');
        $('#lbz').css('background-color','#f1f1f1');
        $('#sjxtext1').html('<span class="glyphicon glyphicon-calendar"></span>伊利安慕希');
        $('#sjxtext2').text('爆款限时降');

    });
    $('#lbz').hover(function(){
        clearInterval(timer2);
        $('#today img')[0].src ="image/400.jpg";
        $('#lba').css('background-color','#f1f1f1')
        $('#lbz').css('background-color','#00b262');
        $('#sjxtext1').html('<span class="glyphicon glyphicon-calendar"></span>限时限量疯抢');
        $('#sjxtext2').html('一元超值疯抢中');
    });


    function showImg(){
        timer = setInterval(function(){
            cur++;
            if( cur>=len ){ cur=0; }
            $("#bg img").eq( cur ).fadeIn(200).siblings("img").removeClass('show').fadeOut(200);
            $(".active li ").eq( cur ).addClass("haha").siblings().removeClass("haha");
            $('#ppp').css('background-color',colors[cur]);
        },5000);
    }
    showImg();
    //假如点击，消除自动
    $('#today').hover(function(){
        clearInterval(timer2);
    },function(){
        showTD();
    });

    //自动
    function showTD(){
        timer2 = setInterval(function(){
            if(i%2==0){
                i++;
                $('#today img')[0].src ="image/eeee.jpg";
                $('#lba').css('background-color','#00b262');
                $('#lbz').css('background-color','#f1f1f1');
                $('#sjxtext1').html('<span class="glyphicon glyphicon-calendar"></span>伊利安慕希');
                $('#sjxtext2').html('爆款限时降');        
            }
            else{
                i++;
                $('#today img')[0].src ="image/400.jpg";
                $('#lba').css('background-color','#f1f1f1')
                $('#lbz').css('background-color','#00b262');
                $('#sjxtext1').html('<span class="glyphicon glyphicon-calendar"></span>限时限量疯抢');
                $('#sjxtext2').html('一元超值疯抢中');
            }
        },5000);
    }
    showTD();
});
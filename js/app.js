// $('button').click(click1);
// function click1(){
//     $('#img1').css('width', '500px');
// }

$("document").ready(function(){
    // $('button').click(function(){
    //     $('#img1').css('width', '500px');
    // });

    // $('button').dblclick(function(){
    //     $('#img1').css('width', '500px');
    // });

    // $('button').mouseenter(function(){
    //     $('#img1').css('width', '500px');
    // });

    // $('button').mouseout(function(){
    //     $('#img1').css('width', '500px');
    // });

    // $('button').mouseleave(function(){
    //     $('#img1').css('width', '500px');
    // });

    // $('#img1').hover(func1, func2);
    // function func1(){
    //     $('#img1').css('width', '500px');
    // }
    // function func2(){
    //     $('#img1').css('width', '250px');
    // }

    // $('#stop').click(function(){
    //     $('#img1').stop();
    // });

    // $('#showbtn').click(function(){
    //     $('#img1').show(3000);
    // });
    // $('#hidebtn').click(function(){
    //     $('#img1').hide(3000);
    // });
    // $('#Togglebtn').click(function(){
    //     $('#img1').toggle(3000);
    // });
    // $('#showbtn').click(function(){
    //     $('#img1').show(3000);
    // });
    // $('#hidebtn').click(function(){
    //     $('#img1').hide(3000);
    // });
    // $('#fade-in').click(function(){
    //     $('#img1').fadeIn(3000);
    // });
    // $('#fade-out').click(function(){
    //     $('#img1').fadeOut(3000);
    // });
    // $('#fade-toggle').click(function(){
    //     $('#img1').fadeToggle(3000);
    // });

    // $('#slide-up').click(function(){
    //     $('#img1').slideUp(3000);
    // });
    // $('#slide-down').click(function(){
    //     $('#img1').slideDown(3000);
    // });
    // $('#slide-toggle').click(function(){
    //     $('#img1').slideToggle(3000);
    // });
    // $('#slide-toggle').click(function(){
    //     $('#img1').slideToggle(3000);
    // });

    $('#animate').click(function(){
        $('#img1').animate({
            marginLeft: '150px',
            height: '400px',
            width: '400px'
        },2000)
    });
});
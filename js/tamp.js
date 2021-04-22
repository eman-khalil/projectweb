var spans=document.querySelectorAll(".count1 span");
var n=0;
var fun =setInterval(function () {
  spans.forEach(function(ele){
  var x = parseInt(ele.textContent);
    x++;
  ele.textContent=x;
  });
  n++;
  if(n==30){
    clearInterval(fun);
  }
}, 70);
//$('.info').css('marginTop',"-"+$('.info').innerHeight()/2+'px')
//$('.slider').innerHeight('500px')
    /*function name(){
        $('.back').toggleClass('translate');
        $('.info h2').addClass('shade');
        setTimeout(function(){
            $('.info h2').removeClass('shade')
        },1000)

    };
    function main(){

        $('.back').toggleClass('hide');
        $('.indicitor span').toggleClass('active');
        setTimeout(name,50);
    }

    setInterval(main,3000);


   $('.indicitor').css('top',$('.info button').offset().top+100+'px');
   //console.log($('.info').offset().top+100+'px');
   $('.indicitor span').on('click',function(){
       var that=$(this).data('back');
       if(!$(this).hasClass('active'))
       {
        main();

       }

   });
*/

$(".openNav").click(function(){
    $("#nav").animate({width:'250px'},50)
    $("#content").animate({maginLeft:'250px'},50)
})
$(".close").click(function(){
    $("#nav").animate({width:'0px'},50)
    $("#content").animate({maginLeft:'0px'},50)
})

$("#nav a").click(function(){
    var secId = $(this).attr("href");
    var sec = $(secId).offset().top;
    $("html,body").animate({scrollTop:sec},1000);
})

$('#duration .title').click(function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});


window.onload = function() {
    countDown("15 september 2022 10:00:00");
}
function countDown(count) {
    let futureDate = new Date(count);
    futureDate = (futureDate.getTime()/1000);
    let now = new Date();
    now = (now.getTime()/1000);
    timeDifference = (futureDate- now); 
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))
    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)
    setInterval(function() {  countDown(count); }, 1000);
}

var maxLength = 100;
$('textarea').keyup(function() {
    var length = $(this).val().length;
    var AmountLeft = maxLength-length;
    if(AmountLeft<=0){
        $("#chars").text("your available character finished");
    }
    else{
        $("#chars").text(AmountLeft);        
    }
});  
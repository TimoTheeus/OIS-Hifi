$(function(){
    $("#yes").on('click',function(e){
            document.getElementById("verstuurdOverzicht").style.left = e.clientX + 'px';
            document.getElementById("verstuurdOverzicht").style.top = e.clientY + 'px';
            $("#verstuurdOverzicht").toggleClass("hidden");
        
    });
});
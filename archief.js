$(function(){
    $("#button1").on('click',function(e){
        document.getElementById("list1").style.left = e.clientX + 'px';
        document.getElementById("list1").style.top = e.clientY + 'px';
        $("#list1").toggleClass("hidden");
        $("#list2").addClass('hidden');
        $("#list3").addClass('hidden');
    });
    $("#button2").on('click',function(e){
        document.getElementById("list2").style.left = e.clientX + 'px';
        document.getElementById("list2").style.top = e.clientY + 'px';
        $("#list2").toggleClass("hidden");
        $("#list1").addClass('hidden');
        $("#list3").addClass('hidden');
    });
    $("#button3").on('click',function(e){
        document.getElementById("list3").style.left = e.clientX + 'px';
        document.getElementById("list3").style.top = e.clientY + 'px';
        $("#list3").toggleClass("hidden");
        $("#list2").addClass('hidden');
        $("#list1").addClass('hidden');
    });
});
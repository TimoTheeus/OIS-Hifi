$(function() {
    var inputActive = false;
    document.getElementById("meeloopdagButton").onclick = function () {
        document.getElementById("meeloopdagTable").classList.toggle("hidden");
    }
    $("#saveMailButton").on('click',function(){
        $("#mailWindow").toggleClass("hidden");
        if($('.savedPopup').hasClass("hidden")) {
            $('.savedPopup').toggleClass("hidden");
            setTimeout(function(){
                document.getElementById("savedPopup").className+= " hidden";
            },2000);
        }
    });
    $(".editButton").on('click',function(e){
        if($("#mailWindow").hasClass("hidden")) {
            $("#mailWindow").toggleClass("hidden");
            document.getElementById("mailWindow").style.left = e.clientX + 'px';
            document.getElementById("mailWindow").style.top = e.clientY + 'px';
        }
    });
    document.getElementById("saveButton").onclick = function () {
        var tr = document.createElement('tr');
        var children = $('#meeloopdagTable tr').children('td');
        for(i=0;i<children.length-1;i++){
            var td = children[i];
            if(td.children[0].value== ""){
                alert("Please fill in all the required fields");
                return;
            }
            var clone = td.cloneNode(true);
            tr.appendChild(clone);
        }
        tr.className+= "success";
        setTimeout(function(){
            tr.classList.remove("success");
        },1500);
        document.getElementById('bestaandeDagenTable').appendChild(tr);
        $("#meeloopdagTable").toggleClass("hidden");
        if($('.savedPopup').hasClass("hidden")){
            $('.savedPopup').toggleClass("hidden");
        }
    }
    document.onclick = function (e) {
        if(e.target.tagName=="INPUT"){
                inputActive = true;
        }
        if(e.target.id=="saveButton"){
            return;
        }
        if(!inputActive &&e.target.tagName!="BUTTON"&& !$('.savedPopup').hasClass("hidden")){
            $('.savedPopup').toggleClass("hidden");
        }
        if(e.target.tagName!="INPUT" &&inputActive){
            if($('.savedPopup').hasClass("hidden")){
            $('.savedPopup').toggleClass("hidden");
                setTimeout(function(){
                    document.getElementById("savedPopup").className+= " hidden";
                },2000);
            }
            inputActive = false;

        }
    }
});
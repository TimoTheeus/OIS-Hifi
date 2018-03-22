$(function() {
    var inputActive = false;
    document.getElementById("meeloopdagButton").onclick = function () {
        document.getElementById("meeloopdagTable").classList.toggle("hidden");
    }
    document.getElementById("saveButton").onclick = function () {
        var tr = document.createElement('tr');
        var children = $('#meeloopdagTable tr').children('td');
        for(i=0;i<children.length-1;i++){
            var td = children[i];
            if(td.children[0].value== ""){
                alert("Please fill in all required fields");
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
        if(!inputActive && !$('.savedPopup').hasClass("hidden")){
            $('.savedPopup').toggleClass("hidden");
        }
        if(e.target.tagName!="INPUT" &&inputActive){
            if($('.savedPopup').hasClass("hidden")){
            $('.savedPopup').toggleClass("hidden");
                }
            inputActive = false;

        }
    }
});
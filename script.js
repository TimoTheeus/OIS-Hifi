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
    $("#sendMailButton").on('click',function(){
        $("#newMailWindow").toggleClass("hidden");
        if($('.sentPopup').hasClass("hidden")) {
            $('.sentPopup').toggleClass("hidden");
            setTimeout(function(){
                document.getElementById("sentPopup").className+= " hidden";
            },2000);
        }
    });
    $(document).on('click','.editButton',function(e){
        if($("#mailWindow").hasClass("hidden")) {
            $("#mailWindow").toggleClass("hidden");
            document.getElementById("mailWindow").style.left = e.clientX + 'px';
            document.getElementById("mailWindow").style.top = e.clientY + 'px';
        }
    });
    $(document).on('click','.mailButton',function(e){
        if($("#newMailWindow").hasClass("hidden")) {
            $("#newMailWindow").toggleClass("hidden");
            document.getElementById("newMailWindow").style.left = e.clientX + 'px';
            document.getElementById("newMailWindow").style.top = e.clientY + 'px';
        }
    });
    document.getElementById("saveButton").onclick = function () {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        var input = document.createElement('input');
        input.type = "checkbox";
        input.name = "checkbox";
        td.appendChild(input);
        tr.appendChild(td);
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
        //add mail buttons
        var editButton = document.createElement('button');
        editButton.className+="editButton";
        editButton.append("Bewerk");
        var td = document.createElement('td');
        td.appendChild(editButton);
        tr.appendChild(td);
        var mailButton = document.createElement('button');
        mailButton.className+="mailButton";
        mailButton.append("Maak mail");
        var td = document.createElement('td');
        td.appendChild(mailButton);
        tr.appendChild(td);

        tr.className+= "success";
        setTimeout(function(){
            tr.classList.remove("success");
        },1500);
        document.getElementById('bestaandeDagenTable').appendChild(tr);
        $("#meeloopdagTable").toggleClass("hidden");
        if($('.savedPopup').hasClass("hidden")){
            $('.savedPopup').toggleClass("hidden");
            setTimeout(function(){
                document.getElementById("savedPopup").className+= " hidden";
            },1500);
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
function toggle(source) {
    checkboxes = document.getElementsByName('checkbox');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
  }

function removeSelected(){
    checkboxes = document.getElementsByName('checkbox');
    for(var i=checkboxes.length-1;i>=0;i--) {
     if(checkboxes[i].checked){
         checkboxes[i].parentElement.parentElement.remove();
     }
    }
}
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
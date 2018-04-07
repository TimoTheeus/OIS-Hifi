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
    $('.trashCan').on('click',function(e){
        if (confirm("Verwijder inschrijving?")) {
            e.target.parentElement.parentElement.parentElement.children[0].innerHTML -= 1;
            e.target.parentElement.remove();
        }
    });
    $("#link1").on('click',function(e){
        document.getElementById("list1").style.left = e.clientX + 'px';
        document.getElementById("list1").style.top = e.clientY + 'px';
        $("#list1").toggleClass("hidden");
        $("#list2").addClass('hidden');
        $("#list3").addClass('hidden');
    });
    $("#link2").on('click',function(e){
        document.getElementById("list2").style.left = e.clientX + 'px';
        document.getElementById("list2").style.top = e.clientY + 'px';
        $("#list2").toggleClass("hidden");
        $("#list1").addClass('hidden');
        $("#list3").addClass('hidden');
    });
    $("#link3").on('click',function(e){
        document.getElementById("list3").style.left = e.clientX + 'px';
        document.getElementById("list3").style.top = e.clientY + 'px';
        $("#list3").toggleClass("hidden");
        $("#list2").addClass('hidden');
        $("#list1").addClass('hidden');
    });
    $(document).on('click','.editButton',function(e){
        if($("#mailWindow").hasClass("hidden")) {
            $("#mailWindow").toggleClass("hidden");
            $("#newMailWindow").addClass('hidden');
            document.getElementById("mailWindow").style.left = e.clientX -250 + 'px';
            document.getElementById("mailWindow").style.top = e.clientY + 'px';
        }
    });
    $(document).on('click','.mailButton',function(e){
        if($("#newMailWindow").hasClass("hidden")) {
            $("#mailWindow").addClass('hidden');
            $("#newMailWindow").toggleClass("hidden");
            document.getElementById("newMailWindow").style.left = e.clientX-340 + 'px';
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
            if(td.children[0].tagName=='SELECT'){
                clone.children[0].value = td.children[0].value;
            }
            tr.appendChild(clone);
        }
        //add inschrijvingen
        var inschrijvingen = document.createElement('td');
        var link = document.createElement('a');
        link.href = 'javascript:void(0);';
        link.append(0);
        inschrijvingen.appendChild(link);
        tr.appendChild(inschrijvingen);
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
        if(e.target.id=="saveButton" || e.target.id == "cancel2"){
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
    if (confirm("Verwijder geselecteerde inschrijvingen?")){
    checkboxes = document.getElementsByName('checkbox');
    for(var i=checkboxes.length-1;i>=0;i--) {
     if(checkboxes[i].checked){
         checkboxes[i].parentElement.parentElement.remove();
     }
    }
    }
}
function cancel(){
    $("#newMailWindow").addClass("hidden");
    $("#mailWindow").addClass("hidden");
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
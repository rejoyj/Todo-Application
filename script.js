$(document).ready(function() {
        $("#add-button").click(function() {
            addTask();
        });
    });

    function addTask() {
        var inputbox = $("#input-box");
        var list = $("#list");

        if (inputbox.val() === "") {
            alert("You must write something!");
        } else {
            var li = $("<li></li>").text(inputbox.val());
            list.append(li);
            var span = $("<span></span>");
            span.text("\u00d7");
            li.append(span);

        }
        $("#input-box").val("");
        savedata();
    }
    $("#list").on("click", "li", function(e) {
        $(this).toggleClass("checked");
        savedata();
    });
    
    $("#list").on("click", "span", function(e) {
        $(this).parent().remove();
        savedata();
    });
    
function savedata(){
        localStorage.setItem("data",list.innerHTML);
}
function showTask(){
        list.innerHTML = localStorage.getItem("data");
}
showTask();
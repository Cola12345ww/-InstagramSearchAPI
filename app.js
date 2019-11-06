$("#hello").click(function(){
    console.log("Hello, jQuery");

    $("#name").addClass("display-1");

    $("#photo").attr("src","images/aaa.jpg");
    
});

$("#getdom").click(function(){
    var name = $("#name").html();
    console.log("name");
    
});

$("setdom").click(function(){
    $("#name").html("New Name");
    
});

$("#addhobby").click(function(){
    var newhobby = $("#newhobby").val()
    $("#hobby").append("<li>" + newhobby + "</li>");
    $("#newhobby").val("");
    
});

$("#clearHobby").click(function(){
    $("#hobby").empty();
});



// function hello(){
//     console.log("Hello, JS");
// }

// function getDOM(){
//     var name = document.getElementById("name").innerHTML;
//     console.log(name);
    
// }

// function setDOM(){
//     document.getElementById("name").innerHTML = "Bangdig";
   
    
// }

// function addHobby(){
//   var newhobby = document.getElementById("newhobby").value;
//     console.log(newhobby);
//     document.getElementById("hobby").innerHTML += "<li>" + newhobby +"</li>";
    
// }

// function clearHobby(){
//     document.getElementById("hobby").innerHTML = "";
//     console.log();
// }
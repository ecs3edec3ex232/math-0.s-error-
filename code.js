function login(){
    player1 = document.getElementById("Username1").value;
    player2 = document.getElementById("Username2").value;

if(player1 ==""  || player2 ==""){
alert("Please fill in your usernames.")
}
else{
    localStorage.setItem("player1",player1);
    localStorage.setItem("player2",player2);

    window.location="2nd page.html";
}
}
function login(){

name_1=document.getElementById("player1_name_input").value;
name_2=document.getElementById("player2_name_input").value;
localStorage.setItem("key1",name_1);
localStorage.setItem("key2",name_2);
window.location="game_page.html";

}
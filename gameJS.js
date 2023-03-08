(function(){

    let loginScene=document.getElementById("loginArea");
    let gameScene=document.getElementById("gameScene");
    let userName=document.getElementById("userName");
    let password=document.getElementById("password");
    let loginButton=document.getElementById("loginButton");
    


    loginScene.style.display="inline";
    gameScene.style.display="none"

    loginButton.addEventListener("click", function(){
     
        loginScene.style.display="none";
        gameScene.style.display="inline";

    })

    


})();
(function(){

    let userName=document.getElementById("userName");
    let password=document.getElementById("password");
    let loginButton=document.getElementById("loginButton");
    let loginScene=document.getElementById("loginArea");
    let gameScene=document.getElementById("gameScene");
    let ballImage=document.getElementById("ball");

  
    


    loginScene.style.display="inline";
    gameScene.style.display="none"

    loginButton.addEventListener("click", function(){
     
        loginScene.style.display="none";
        gameScene.style.display="inline";

    })

    ballImage.addEventListener("click", function(){

        let y=ballImage.offsetTop;

        y=y+50;

        ballImage.style.top=y+'px';
        
    })


    


})();
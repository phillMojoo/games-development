(function(){

    let userName=document.getElementById("userName");
    let password=document.getElementById("password");
    let loginButton=document.getElementById("loginButton");
    let loginScene=document.getElementById("loginArea");
    let gameScene=document.getElementById("gameScene");
    let ball=document.getElementById("ball");

  
    


    loginScene.style.display="inline";
    gameScene.style.display="none"

    loginButton.addEventListener("click", function(){
     
        loginScene.style.display="none";
        gameScene.style.display="inline";

    })

    window.addEventListener('keydown', function(e){

    switch(e.key){

        case 'ArrowUp':
            ball.style.top=ball.offsetTop-5+'px';
            break;
        case 'ArrowDown':
            ball.style.top=ball.offsetTop+5+'px';
            break;
        case 'ArrowLeft':
            ball.style.left=ball.offsetLeft-5+'px';
            break;
        case 'ArrowRight':
            ball.style.left=ball.offsetLeft+5+'px';
            break;
    }
            
    })



})();
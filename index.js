ban= new Array("1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg");
bann=0;
function banner(){
    bann++;
    if(bann==ban.length){
        bann=0;
    }
    document.banne.src=ban[bann];
    setTimeout("banner()",5000);
}
function cook(){
    var a=document.cookie="user"+document.cooke.username;
    var b=document.cookie="pass"+document.cooke.password;
    document.cookie=a+";"+b;
    console.log(document.cookie);
}

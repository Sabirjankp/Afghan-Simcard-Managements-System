let content = '';
function activationCode(code,id){
    content = document.getElementById(id).textContent;
    document.getElementById(id).style.height = '167px' ;
    document.getElementById(id).textContent = code ;
    document.getElementById(id).style.fontSize ="3.3rem";
    document.getElementById(id).style.textAlign = "center";
    document.getElementById(id).style.lineHeight = "160px";
    document.getElementById(id).style.position = "static";
    document.getElementById(id).style.transition = '1.3s';




}

function balanceCode(code , id){
    content = document.getElementById(id).textContent;
    document.getElementById(id).style.height = '167px' ;
    document.getElementById(id).textContent = code ;
    document.getElementById(id).style.fontSize ="3.3rem";
    document.getElementById(id).style.textAlign = "center";
    document.getElementById(id).style.lineHeight = "160px";
    document.getElementById(id).style.position = "static";
    document.getElementById(id).style.transition = '1.3s';


}

function deactivationCode(code){
    content = document.getElementById(id).textContent;
    document.getElementById(id).style.height = '167px' ;
    document.getElementById(id).textContent = code ;
    document.getElementById(id).style.fontSize ="3.3rem";
    document.getElementById(id).style.textAlign = "center";
    document.getElementById(id).style.lineHeight = "160px";
    document.getElementById(id).style.position = "static";
    document.getElementById(id).style.transition = '1.3s';


}




function unCode(id){
    document.getElementById(id).textContent = content ;
    document.getElementById(id).style.fontSize ="large"
    document.getElementById(id).style.textAlign = "justify";
    document.getElementById(id).style.lineHeight = "21px";
    document.getElementById(id).style.transition = '0s';
    

}
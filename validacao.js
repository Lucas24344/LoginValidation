
//window.prompt("Digite seu nome aqui")
//var confirmacao=window.confirm("Continuar?")

/*if(confirmacao){
    window.alert("Welcome!")
}
else{
    window.alert("Bye Bye")
*/
function confirm(event){
    event.preventDefault();
    var qtdcaracteres=6;
    var pass=window.document.getElementById('senha').value;
    var confpass=window.document.getElementById('confirmarsenha').value;
 
    if(pass.length>qtdcaracteres){
        if(pass===confpass){
            document.getElementById('err1').style.display="none"
            document.getElementById("ok").style.display="block";
            document.getElementById("err").style.display='none'   
        }
        else{
            document.getElementById('senha').style.border="1px solid rgb(251, 24, 24)";
            document.getElementById('confirmarsenha').style.border="1px solid rgb(251, 24, 24)"
            document.getElementById('err1').style.display="none"
            document.getElementById("ok").style.display="none";
            document.getElementById("err").style.display='block';
        }
    }
    else{
        document.getElementById('senha').style.border="1px solid rgb(251, 24, 24)"
        document.getElementById("err").style.display='none'; 
        document.getElementById("ok").style.display="none";
        document.getElementById('err1').style.display="block";
    }
}
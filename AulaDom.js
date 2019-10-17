
//alert("Funcionou?")

//Pega o elemento pelo id
//alert(document.getElementById('paragrafo'));

//pegar as informações dos campos e devolve em uma pág.
function pegar_nome(){
    var nome = document.getElementById('nome').value;
    //alert(nome);
    document.write(nome);
}
// Vai abrir uma combo em um alert e retonar o valor na label.
function escrever(){
    var n = prompt("Digite seu nome:");
    document.getElementById('nome').value=n;//Escreve o nome dentro do campo.
}
function tabuada(){
    var nun = document.getElementById('nome').value;
    for(var i=0; i<=10 ;i++){
        document.write(nun +" X " + i + " = " +  nun * i + "<br/>");
    }
}
function somar(){
    var n1= document.getElementById('n1').value;
    var n2= document.getElementById('n2').value;
    
   document.write(parseInt(n1) + parseInt(n2));
   //Oprações com caixa de texto SEMPRE retorna o valor em texto.
   //Tem que fazer a conversão do n1 e o n2 -> parseInt(n1) or parseFloat(n2)
}
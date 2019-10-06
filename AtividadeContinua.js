/*
// Questão 01
function somar(){
    var temp = null;
    var ind;
    var a =(temp == ind);
    var b =(temp === ind);
   return b;  
}
var resultado = somar();
alert(resultado); 

// Questão 02
var cidades = ["São Paulo","Criciuma","Curitiba","Itajai","Rio do sul","Erechim"] 
console.log(cidades)

    for (var i = 0; i < cidades.length; i++){
        // console.log(cidades[i])
        var str = cidades[i];
        // console.log(str)
        // console.log(str.length)

        if(str.length == 8 ){
            document.write(str);
            document.write("|");
        }
    }

// Questão 03
        var r = [2,5,6,8];
        var s = [1,3,4,7,11];
        var x = [0];
        var i;
        for (i = 0; i<=3; i++){
            x[i] = r[i];
        }
        for(i=0; i<=4;i++){
            x[i+4] = s[i];
        }
        document.write(x[8]+"<br/>");
        document.write(i);
        
//Questão 04
function soma(n1,n2){
    return n1+n2;
}
result = soma("3","4");
alert(result);
*/
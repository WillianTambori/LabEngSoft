function dados(){

    var dados = prompt("informe o dado ","");
    if(confirm("deseja verificar o tipo do dado informado")){
        
        alert("O tipo de dado é: "+typeof(dados));
    }
    else{
        alert("Obrigado por visitar esta página!")
    }
}
function primos(){

    let num = parseInt(prompt("Digite um numero: ",""));
    for(var i = 2;i < num; i++){
        if(num % i === 0)
            return alert("O numero não é primo");
    }
    alert("O numero é primo")
}
function pares(){
    let inteiro = parseInt(prompt("Digite um numero: ",""));
    if( inteiro % 2 == 0 ){
        return alert("O numero é par")
    }
    alert("O numero é impar");
}
function fatorial(){
    let fatorial = parseInt(prompt("Digite um numero:",""))
    let soma = 1;
    for(let i = 1; i <= fatorial ; i++){
        soma*= i;

    }
    alert("Soma fatorial é: "+soma);
}
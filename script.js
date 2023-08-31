function dados(){
    var resultado = "";
    var dados = prompt("informe o dado ","");
    if(!isNaN(dados)){
        dados = parseInt(dados);
        resultado = "inteiro";
        if(!Number.isInteger(dados)){
            resultado = "float";
        }
    }else{
        resultado = "string";
    }
    if(confirm("deseja verificar o tipo do dado informado")){
        
        alert("O tipo de dado é: "+ resultado);
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

var array = [];

function listar() {
    var nomes = document.querySelector("#dado").value;
        array.push(nomes);
        array.sort();
        atualizar();
        document.getElementById("dado").value = "";
        document.getElementById("dado").focus();
    
}

function atualizar() {
    var mostrar = document.querySelector("#lista");
    mostrar.innerHTML = ""; 

    for (var i = 0; i < array.length; i++) {
        var item = document.createElement('li');
        var n = document.createTextNode(array[i]);
        item.appendChild(n);
        mostrar.appendChild(item);
    }
}


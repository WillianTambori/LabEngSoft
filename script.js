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
        atualizar(array);
        document.getElementById("dado").value = "";
        document.getElementById("dado").focus();
    
}

function atualizar(array) {
    var mostrar = document.querySelector("#lista");
    mostrar.innerHTML = ""; 

    for (var i = 0; i < array.length; i++) {
        var item = document.createElement('li');
        var n = document.createTextNode(array[i]);
        item.appendChild(n);
        mostrar.appendChild(item);
    }
}

class Pessoa{
    constructor(nome,sobrenome,email,data_nascimento,matricula){
    this.Nome = nome
    this.Sobrenome = sobrenome
    this.Email = email
    this.Data_nascimento = data_nascimento
    this.Matricula = matricula
}


    setNome=function(Nome){
        this.Nome = Nome;
    }
    getNome=function(){
        return this.Nome;
    }
    setMatricula=function(Matricula){
        this.Matricula = Matricula;
    }
    getMatricula=function(){
        return this.Matricula;
    }

    setSobrenome=function(vSobrenome){
        this.Sobrenome = vSobrenome;
    }
    getSobrenome=function(){
        return this.Sobrenome;
    }

    setEmail=function(Email){
        this.Email = Email;
    }
    getEmail=function(){
        return this.Email;
    }

    setData_nascimento=function(Data_nascimento){
        this.Data_nascimento = Data_nascimento;
    }
    getData_nascimento=function(){
        return this.Data_nascimento;
    }

    NomeCompleto=function(){
        return this.Nome + " " + this.Sobrenome;
    }
   
}
class Aluno extends Pessoa{
    constructor(nome,sobrenome,email,data_nascimento,matricula,curso){
        super(nome,sobrenome,email,data_nascimento,matricula)
        this.Curso = curso
    }
    setCurso=function(Curso){
        this.Curso = Curso;
    }
    getCurso=function(){
        return this.Curso;
    }
    Lista=function(){
        
        return {
            nome:this.getNome(),
            sobrenome :this.getSobrenome(),
            email:this.getEmail(),
            data_nascimento:this.getData_nascimento(),
            matricula:this.getMatricula(),
            curso:this.getCurso()
        }
    }
}
class Professor extends Pessoa{
    constructor(nome,sobrenome,email,data_nascimento,matricula,area_atuacao,link_lattes){
        super(nome,sobrenome,email,data_nascimento,matricula)
        this.Area_atuacao = area_atuacao
        this.Link_lattes = link_lattes

    }

    setArea_atuacao=function(Area_atuacao){
        this.Area_atuacao = Area_atuacao;
    }
    getArea_atuacao=function(){
        return this.Area_atuacao;
    }

    setlink_lattes=function(Link_lattes){
        this.Link_lattes = Link_lattes;
    }
    getLink_lattes=function(){
        return this.Link_lattes;
    }
    Lista=function(){
        
        return {
            nome:this.getNome(),
            sobrenome :this.getSobrenome(),
            email:this.getEmail(),
            data_nascimento:this.getData_nascimento(),
            matricula:this.getMatricula(),
            Area_atuacao:this.getArea_atuacao(),
            link_lattes :this.getLink_lattes()
        }
    }

}


function mostrarHeranca(){
    let h = document.querySelector('.formulario');
    let nome = document.querySelector("#nome").value;
    let sobrenome = document.querySelector("#sobrenome").value;
    let email = document.querySelector("#email").value;
    let data = document.querySelector("#data").value;
    let matricula= document.querySelector("#matricula").value;
    const opt1 = document.querySelector("#opt1");
    const opt2 = document.querySelector("#opt2");
    
    if(opt1.checked){

        let curso= document.querySelector("#curso").value;
        var pr = new Aluno(nome,sobrenome,email,data,matricula,curso);
    }
    if(opt2.checked){
        let area= document.querySelector("#area").value;
        let lattes = document.querySelector("#lattes").value;
        var pr = new Professor(nome,sobrenome,email,data,matricula,area,lattes);
        }

    for(let chave in pr.Lista()){
        
            var ar = chave + " : " + pr.Lista()[chave];
            var html = document.createTextNode(ar);
            let p = document.createElement('p');
            p.appendChild(html);
            h.appendChild(p);
            p.setAttribute("style","width : 200px");
        

    }
    
    

}

function criar(){
    const opt1 = document.querySelector("#opt1");
    const opt2 = document.querySelector("#opt2");
    const antes = document.querySelector("#botao");
    let curso= document.querySelector("#curso");
    let area= document.querySelector("#area");
    if(curso==null && area==null){
        
    
        if(opt1.checked){
            let h = document.querySelector('.formulario');
            let pl = document.createElement('label');
            let p = document.createElement('input');
            let plt = document.createTextNode('curso');
            pl.setAttribute("id","lcurso");
            p.setAttribute("id","curso");
            pl.appendChild(plt);
            h.insertBefore(pl,antes);
            h.insertBefore(p,antes);
            
    
        }
        if(opt2.checked){        
            let f = document.querySelector(".formulario");
            let la = document.createElement('label');
            let lb = document.createElement('label');
            let pla = document.createTextNode('area')
            let plb = document.createTextNode('lattes')
            let pa = document.createElement('input');
            let pb = document.createElement('input');
            la.setAttribute("id","larea");
            pa.setAttribute("id","area");
            lb.setAttribute("id","llattes");
            pb.setAttribute("id","lattes");
            la.appendChild(pla);
            lb.appendChild(plb);
            f.insertBefore(la,antes);
            f.insertBefore(pa,antes);
            f.insertBefore(lb,antes);
            f.insertBefore(pb,antes);
            
        }
    
    }
}
/*
function data(){
    const data= new Date();
     let dia = data.getDate();
     let mes = data.getMonth();
     let semana = data.getDay();
     let ano = data.getFullYear();
     var meses = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
     var semanas = ["domingo","segunda","terça-feira","Quarta-feira","quinta-feira","sexta-feira","sabado"];
     var at1 = semanas[semana] + ", " + dia + " de " + meses[mes] + " de " + ano ;
     let d = document.querySelector("#semana3-1");
     let d1 = document.createElement("p");
     let textd = document.createTextNode(at1);
     d1.appendChild(textd);
     d.appendChild(d1);
     
     
         
     
     
    }
function relogin(){
        let data = new Date();
        let hora = "0" + data.getHours();
        hora = hora.slice(-2);
        let min = "0" + data.getMinutes();
        min = min.slice(-2);
        let sec = "0" + data.getSeconds();
        sec = sec.slice(-2);
        let relogio = hora+":"+min+":"+sec;
        const at2 = document.querySelector("#semana3-2")
        at2.innerHTML = relogio;
        
   }
data();
const intervalo = setInterval(relogin,1000);

function palindromo(){
    var palavra = document.querySelector("#palavra").value;
    var reversa = palavra.split(""); //torna um array
    reversa = reversa.reverse();//inverte o array
    reversa = reversa.join("");//junta o arrau em string novamente
    return reversa == palavra;

}
*/
class Carro{
    constructor(marca,modelo,ano,km,fipe,cor){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.km = km;
        this.fipe=  fipe;
        this.cor = cor;
    }
    anosUtilizados() {
        return 2023 - this.ano;
    }
    valorMercado(){
        if(this.km < 30000){
            return this.fipe*1.10;
        }
        else if(this.km > 30000 && this.km < 50000){
            return this.fipe;
        }
        else if(this.km > 50000){
            return this.fipe * 0.90;
        }
    }
    listacar(){
        return{
            marca:this.marca, 
            modelo:this.modelo,
            ano:this.ano,
            km:this.km, 
            fipe:this.fipe, 
            cor:this.cor,
            anos_utilizados: this.anosUtilizados(),
            Valor_de_mercado: this.valorMercado()
        }
    }

}
function Valorfipe(){
    var ca = document.querySelector(".carro");
    var a = document.querySelector("#marca").value;
    var b = document.querySelector("#modelo").value;
    var c = document.querySelector("#ano").value;
    var d = document.querySelector("#km").value;
    var e = document.querySelector("#fipe").value;
    var f = document.querySelector("#cor").value;
    var car =  new Carro(a,b,c,d,e,f);
    for(let i in car.listacar()){

        var escrito = i + " : " + car.listacar()[i];
        var inner = document.createTextNode(escrito);
        var pe = document.createElement('p');
        pe.appendChild(inner);
        ca.appendChild(pe);
        pe.setAttribute("style","width : 200px");
        

    }
}
// PARTE 1 - Condicionais de tempo

let titulo = document.querySelector('h1');

titulo.textContent = 'Vistoria em andamento';
titulo.style.color = 'red';


let saudacao = document.getElementById('saudacao');
let dataAtual = new Date(); // Para mim faltou colocar o Construtor New Date()
let hora = dataAtual.getHours();
if (hora < 12) {
    saudacao.textContent = 'Bom dia !';
}else if ((hora >= 12) && (hora  < 18)) {
    saudacao.textContent = 'Boa tarde !';
} else {
    saudacao.textContent = 'Boa noite !';
}

//PARTE 2 - Relatório de Status

let listaDeObras = [
    {nome: 'Kronolog Extrema I',status:"Em dia"},
    {nome: 'Kronolog Extrema II',status:"Atrasada"},
    {nome: 'Kronolog Extrema III',status:"Em dia"}
];

for(let obras of listaDeObras) {
    if(obras.status === "Atrasada") {
    console.log(`A obra ${obras.nome} está com o status: ${obras.status}`); 
    }
}

//PARTE 3 - Incluindo uma propriedade e avaliando-a

listaDeObras[1].prioridade = "Alta";
listaDeObras[0].prioridade = "Baixa";


for(let obras of listaDeObras) {
    if((obras.status === "Atrasada") && (obras.prioridade === "Alta")) {
    console.log(`A obra ${obras.nome} está com o status: ${obras.status}`); 
    }else {
        console.log(`A obra ${obras.nome} está em dia`); 
    }
}


//PARTE 4 - Modo Escuro

let botao = document.getElementById('btn-theme');
botao.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');    
})
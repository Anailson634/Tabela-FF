const jgs=document.querySelector("#jogadores")
const lista_us=document.querySelector("#lista-De-Usuarios")
jgs.value=''
var list_jgs=[]


lista_us.addEventListener('click', function(event) {
    var kill=document.querySelector("#kills")
    var ponto=document.querySelector("#pontos")
    
    if (event.target.tagName === 'LI') {
        let index = Array.from(lista_us.children).indexOf(event.target)
        list_jgs[index]['Kill']=kill.value
        list_jgs[index]['Pontos']=ponto.value
    }
})

function pontuar(){
    const ls=jgs.value.split('\n')
    for (const v of ls) {
        let item=document.createElement("li")
        list_jgs.push({
            "Nome": v,
            "Kill": 0,
            "Pontos": 0
        })
        item.innerText=v
        lista_us.appendChild(item)
    }
}
function enviar_dados() {
    fetch("http://127.0.0.1:5000", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({'Jogadores': list_jgs, "Quantidade": list_jgs.length})
    })
}



/*// Resetar a classe 'selecionado' de todos os itens
        Array.from(lista_us.children).forEach(item => item.classList.remove('selecionado'));

        // Adicionar a classe 'selecionado' ao item clicado
        event.target.classList.add('selecionado');

        // Exibir o texto do item selecionado no console (você pode fazer o que quiser com essa informação)
        //let nome=event.target.textContent;
        modificar(indice)*/
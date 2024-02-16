const jgs=document.querySelector("#jogadores")
const lista_us=document.querySelector("#lista-De-Usuarios")
jgs.value=''
var list_jgs=[]


lista_us.addEventListener('click', function(event) {
    var kill0=document.querySelector("#kills0").value
    var kill1=document.querySelector("#kills1").value
    var ponto0=document.querySelector("#pontos0").value
    var ponto1=document.querySelector("#pontos1").value
    
    if (event.target.tagName === 'LI') {
        let index = Array.from(lista_us.children).indexOf(event.target)
        list_jgs[index]['Kill']=parseInt(kill0)+parseInt(kill1)
        list_jgs[index]['Pontos']=parseInt(ponto0)+parseInt(ponto1)
    }
    kill0=kill1=ponto0=ponto1 = ''
})

function pontuar(){
    const ls=jgs.value.split('\n')
    for (const v of ls) {
        let item=document.createElement("li")
        list_jgs.push({
            "Nome": v,
            "Kill": 0,
            "Pontos": 0,
        })
        item.innerText=v
        lista_us.appendChild(item)
    }
}
function calcular_win() {
    for (const v of list_jgs) {
        v.Pontos=parseInt(v.Kill)+parseInt(v.Pontos)
    }
    list_jgs.sort((a, b) => b.Pontos - a.Pontos);
}
function enviar_dados() {
    calcular_win()
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
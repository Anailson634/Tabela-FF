var topicos=document.querySelector('.container')
var quantidade=0





function criar_placar(qnt){
    quantidade=qnt

    for (c=1;c<=quantidade;c++) {
        let divTime=document.createElement('div')
        divTime.className='Time'

        let divTabela=document.createElement('div')
        divTabela.className='tabela0'
        divTime.appendChild(divTabela)

        let pPosicao=document.createElement('p')
        pPosicao.id='posicao'
        pPosicao.innerText=`${c}º`
        divTabela.appendChild(pPosicao)

        let divColor=document.createElement('div')
        divColor.className="colorTime"
        divTime.appendChild(divColor)

        let divNome=document.createElement('div')
        divNome.className='tabela1'
        divColor.appendChild(divNome)

        let pName=document.createElement('p')
        pName.innerText="None"
        pName.id=`nomeLine${c}`
        divNome.appendChild(pName)

        let divKills=document.createElement('div')
        divKills.className='tabela1 PtOpt'
        divColor.appendChild(divKills)

        let pkills=document.createElement('p')
        pkills.id=`kills${c}`
        pkills.innerText='00'
        divKills.appendChild(pkills)

        let divPontos=document.createElement('div')
        divPontos.className='tabela1 PtOpt'
        divColor.appendChild(divPontos)

        let pPontos=document.createElement('p')
        pPontos.id=`pontuacao${c}`
        pPontos.innerText="00"
        divPontos.appendChild(pPontos)

        topicos.appendChild(divTime) 
    }
}
function ler_dados() {
    
    fetch("http://127.0.0.1:5000", method=['GET'])
    .then(response => response.json())
    .then(dados => {
        //Manipular dados recebidos
        criar_placar(dados['Quantidade'])
        for (c=0;c<quantidade;c++){
            let nome=document.querySelector(`#nomeLine${c+1}`)
            nome.innerHTML=dados['Jogadores'][c]
        }
    })
}
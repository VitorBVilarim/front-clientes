const botoes = document.querySelectorAll('.item_description')
const botoesColor = document.querySelectorAll('.side_item')



botoes.forEach((botao) => {
    botao.addEventListener('click', () => botaoClicked(botao))
})

botoesColor.forEach((botao) => {
    botao.addEventListener('click', () => botaoColorClicked(botao))
})


function botaoClicked(botao) {
    const conteudoConsulta = document.querySelectorAll('.content')



    conteudoConsulta.forEach((conteudo) => {
        conteudo.classList.remove('show')
    })




    const conteudoId = botao.getAttribute('content-id')
    const content = document.getElementById(conteudoId)


    content.classList.add('show')
}



function botaoColorClicked(botao) {
    const conteudos = document.querySelectorAll('.side_item')

    conteudos.forEach((conteudo) => {
        conteudo.classList.remove('active')
    })

    const conteudoId = botao.getAttribute('id')
    const content = document.getElementById(conteudoId)

    content.classList.add('active')
}

const form = document.querySelector('form')



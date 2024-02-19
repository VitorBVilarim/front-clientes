function buscarCep() {
    let cep = document.getElementById("cep-consultar").value

    if (cep !== '') {
        let url = `https://brasilapi.com.br/api/cep/v1/${cep}`

        let req = new XMLHttpRequest()
        let.open("GET", url)
        req.send()

        req.onload = () => {
            if (req.status === 200) {
                let endereco = JSON.parse(req.response)
                console.log(endereco)
                document.getElementById('rua').value = endereco.street
                document.getElementById('estado').value = endereco.state
                document.getElementById('cidade').value = endereco.city
            }
        }
    }

}

buscarCep('58402060')

window.onload = () => {
    let cepHtml = document.getElementById("cep");
    cepHtml.addEventListener("cnahge", buscarCep())
}



let cepHtml = document.getElementById("cep-consultar");
cepHtml.addEventListener('blur', async () => {

    let cepConsultar = document.getElementById("cep-consultar").value


    if (cepConsultar !== '') {
        let urlCep = `https://brasilapi.com.br/api/cep/v1/${cepConsultar}`

        const dadosEndereco = await axios.get(urlCep)

        const { street, state, city } = dadosEndereco.data

        document.getElementById('rua-consultar').value = street
        document.getElementById('estado-consultar').value = state
        document.getElementById('cidade-consultar').value = city
        console.log(dadosEndereco.data)
    }
})
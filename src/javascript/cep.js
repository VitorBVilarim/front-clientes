


let cepHtml = document.getElementById("cep-cadastro");
cepHtml.addEventListener('blur', async () => {

    let cepCadastro = document.getElementById("cep-cadastro").value

    if (cepCadastro !== '') {
        let urlCep = `https://brasilapi.com.br/api/cep/v1/${cepCadastro}`

        const dadosEndereco = await axios.get(urlCep)

        const { street, state, city } = dadosEndereco.data

        document.getElementById('rua-cadastro').value = street
        document.getElementById('estado-cadastro').value = state
        document.getElementById('cidade-cadastro').value = city
        console.log(dadosEndereco.data)
    }
})
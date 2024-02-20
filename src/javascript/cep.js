


let cepCadastro = document.getElementById("cep-cadastro");
cepCadastro.addEventListener('blur', async () => {

    let cepCadastro = document.getElementById("cep-cadastro").value

    if (cepCadastro !== '') {
        cepCadastro = cepCadastro.replace(/([0-9]{5})(-)([0-9]{3})/, '$1$3')
        console.log(cepCadastro)
        let urlCep = `https://brasilapi.com.br/api/cep/v1/${cepCadastro}`

        const dadosEndereco = await axios.get(urlCep)

        const { street, state, city } = dadosEndereco.data

        document.getElementById('rua-cadastro').value = street
        document.getElementById('estado-cadastro').value = state
        document.getElementById('cidade-cadastro').value = city

    }
})

let cepConsultar = document.getElementById("cep-consultar");
cepConsultar.addEventListener('blur', async () => {

    let cepConsultar = document.getElementById("cep-consultar").value

    if (cepConsultar !== '') {
        cepConsultar = cepConsultar.replace(/([0-9]{5})(-)([0-9]{3})/, '$1$3')
        console.log(cepConsultar)
        let urlCep = `https://brasilapi.com.br/api/cep/v1/${cepConsultar}`

        const dadosEndereco = await axios.get(urlCep)

        const { street, state, city } = dadosEndereco.data

        document.getElementById('rua-consultar').value = street
        document.getElementById('estado-consultar').value = state
        document.getElementById('cidade-consultar').value = city

    }
})
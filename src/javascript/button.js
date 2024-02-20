const buttonCadastrar = document.querySelector('#btn-cadastrar')
const url = 'http://ec2-18-230-201-203.sa-east-1.compute.amazonaws.com:3000'
console.log(url)
buttonCadastrar.addEventListener('click', async (evento) => {
    evento.preventDefault()

    const nome = document.querySelector('#name-cadastro').value
    const telefone = document.querySelector('#number-cadastro').value
    const cpf = document.querySelector('#cpf-cadastro').value
    const cpfFormatado = cpf.replace(/([0-9]{3})(.)([0-9]{3})(.)([0-9]{3})(-)([0-9]{2})/, "$1$3$5$7")
    const email = document.querySelector('#email-cadastro').value
    const cep = document.querySelector('#cep-cadastro').value
    const cepFormatado = cep.replace(/([0-9]{5})(-)([0-9]{3})/, '$1$3')
    const rua = document.querySelector('#rua-cadastro').value
    const cidade = document.querySelector('#cidade-cadastro').value
    const estado = document.querySelector('#estado-cadastro').value



    try {
        await axios.post(url + '/clientes', {
            nome,
            telefone,
            cpf: cpfFormatado,
            email,
            cep: cepFormatado,
            rua,
            cidade,
            estado
        })
    } catch (error) {
        console.log(error.response)
    }

    document.querySelector('#name-cadastro').value = null
    document.querySelector('#number-cadastro').value = null
    document.querySelector('#cpf-cadastro').value = null
    document.querySelector('#email-cadastro').value = null
    document.querySelector('#cep-cadastro').value = null
    document.querySelector('#rua-cadastro').value = null
    document.querySelector('#cidade-cadastro').value = null
    document.querySelector('#estado-cadastro').value = null
})

// BOTAO PESQUISAR / CONSULTAR CLIENTE
const buttonConsultar = document.querySelector('#btn-consultar')
let idClienteComsultado = ''

buttonConsultar.addEventListener('click', async (evento) => {
    evento.preventDefault()

    const clienteCpf = document.querySelector('#cpf-search').value

    const cliente = await axios.get(`${url}/clientes/?cpf=${clienteCpf.replace(/([0-9]{3})(.)([0-9]{3})(.)([0-9]{3})(-)([0-9]{2})/, "$1$3$5$7")}`)

    const { id, nome, telefone, cpf, email, cep, rua, cidade, estado } = cliente.data

    let cpfFormatado = cpf
    let cepFormatado = cep
    if (cpf || cep) {
        cpfFormatado = cpf.replace(/([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})/, '$1.$2.$3-$4')
        cepFormatado = cep.replace(/([0-9]{5})([0-9]{3})/, '$1-$2')
    }

    idClienteComsultado = id
    if (!id) {
        return alert('o Cliente não existe!')
    }

    document.querySelector('#name-consultar').value = nome
    document.querySelector('#number-consultar').value = telefone
    document.querySelector('#cpf-consultar').value = cpfFormatado
    document.querySelector('#email-consultar').value = email
    document.querySelector('#cep-consultar').value = cepFormatado
    document.querySelector('#rua-consultar').value = rua
    document.querySelector('#cidade-consultar').value = cidade
    document.querySelector('#estado-consultar').value = estado
})

// BOTAO SALVAR / ATUALIZAR DADOS 
const buttonSalvar = document.querySelector('#btn-salvar')

buttonSalvar.addEventListener('click', async (evento) => {
    evento.preventDefault()

    const nome = document.querySelector('#name-consultar').value
    const telefone = document.querySelector('#number-consultar').value
    const cpf = document.querySelector('#cpf-consultar').value
    const cpfFormatado = cpf.replace(/([0-9]{3})(.)([0-9]{3})(.)([0-9]{3})(-)([0-9]{2})/, "$1$3$5$7")
    const email = document.querySelector('#email-consultar').value
    const cep = document.querySelector('#cep-consultar').value
    const cepFormatado = cep.replace(/([0-9]{5})(-)([0-9]{3})/, '$1$3')
    const rua = document.querySelector('#rua-consultar').value
    const cidade = document.querySelector('#cidade-consultar').value
    const estado = document.querySelector('#estado-consultar').value

    try {
        await axios.put(`${url}/clientes/${idClienteComsultado}`, {
            nome,
            telefone,
            cpf: cpfFormatado,
            email,
            cep: cepFormatado,
            rua,
            cidade,
            estado
        })

        document.querySelector('#name-consultar').value = null
        document.querySelector('#number-consultar').value = null
        document.querySelector('#cpf-consultar').value = null
        document.querySelector('#email-consultar').value = null
        document.querySelector('#cep-consultar').value = null
        document.querySelector('#rua-consultar').value = null
        document.querySelector('#cidade-consultar').value = null
        document.querySelector('#estado-consultar').value = null
        document.querySelector('#cpf-search').value = null
    } catch (error) {
        console.log(error.response)
    }

})

const buttonDeletar = document.querySelector('#btn-deletar')

buttonDeletar.addEventListener('click', async (evento) => {
    try {
        evento.preventDefault()

        await axios.delete(`${url}/clientes/${idClienteComsultado}`)

    } catch (error) {
        console.log(error.response)
    }
    document.querySelector('#name-consultar').value = null
    document.querySelector('#number-consultar').value = null
    document.querySelector('#cpf-consultar').value = null
    document.querySelector('#email-consultar').value = null
    document.querySelector('#cep-consultar').value = null
    document.querySelector('#rua-consultar').value = null
    document.querySelector('#cidade-consultar').value = null
    document.querySelector('#estado-consultar').value = null
    document.querySelector('#cpf-search').value = null
})
function formatarCelular(parametro) {
    const celular = document.querySelector(`#number-${parametro}`).value

    const celularFormatado = celular.replace(/([0-9]{2})([0-9]{5})([0-9]{4})/, '($1) $2-$3')

    document.querySelector(`#number-${parametro}`).value = celularFormatado
}

function formatarCpf(parametro) {
    const cpf = document.querySelector(`#cpf-${parametro}`).value

    const cpfFormatado = cpf.replace(/([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})/, '$1.$2.$3-$4')

    document.querySelector(`#cpf-${parametro}`).value = cpfFormatado
}
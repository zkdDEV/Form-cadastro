$(document).ready(function()
{
    
    /*Máscaras dos inputs*/
    $('#telefone').mask('(00) 00000-0000')
    $('#numeroCPF').mask('000.000.000-00')
    $('#numeroCEP').mask('00000-000')

    $('form').validate(
    {
        rules:
        {
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: true
            },
            numeroCPF:{
                required: true
            },
            numeroCEP:{
                required: true
            },
            nomeCidade:{
                required: true
            },
            nomeBairro:{
                required: true
            }
        },
        messages:
        {
            nome: 'Por favor, insira o seu nome!',
            telefone: 'Por favor, insira o seu Número de telefone',
            email: 'Por favor, insira o seu E-mail!',
            numeroCPF: 'Por favor, insira o seu CPF!',
            numeroCEP: 'Por favor, insira o seu CEP!',
            nomeCidade: 'Por favor, insira a sua Cidade!',
            nomeBairro: 'Por favor, insira o seu Bairro!'
        }
    })
})
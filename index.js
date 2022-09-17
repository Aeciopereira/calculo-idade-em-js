var anoNascimento = prompt('por favor adicione o ano dos seu Nascimento ?');
while(anoNascimento >= 2018){
 alert('por favor informe corretamente seu ano de Nascimento ');
 anoNascimento = prompt('por favor informe seu ano de Nascimento ');
}
    var anoAtual = prompt('E qual o seu ano atual ?')
    
     var idadeFinal = anoAtual - anoNascimento;
alert('Pronto aqui está a sua idade ;) ' + idadeFinal);
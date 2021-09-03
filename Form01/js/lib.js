function save (){
    nome=document.getElementById("nome").value;
    datanasc=document.getElementById("nasc").value;
    cep=document.getElementById("cep").value;
    sexo=document.querySelector('input[name=sexo]:checked').value;
    tel=document.getElementById("tel").value;
    email=document.getElementById("email").value;
    estadocivil=document.getElementById("civil").value;


    divmostra=document.getElementById("mostra").innerHTML;

    var botoes = document.getElementsByName("mybuttons");

    document.getElementById("mostra").innerHTML = divmostra+nome+";"+datanasc+";"+cep+";"+sexo+";"+tel+";"+email+";"+estadocivil+"<br>";
    
} 
function insereLinhaTabela(){
    tabela= document.getElementById("minhaTabela");
    novaLinha = tabela.insertRow();

    novaCelula = novaLinha.insertCell();
    novaCelula.innerHTML= document.getElementById("nome").value;
    novaCelula = novaLinha.insertCell();
    novaCelula.innerHTML= document.getElementById("nasc").value;
    novaCelula = novaLinha.insertCell();
    novaCelula.innerHTML=document.getElementById("cep").value;
    novaCelula = novaLinha.insertCell();
    novaCelula.innerHTML= document.querySelector('input[name=sexo]:checked').value;
    novaCelula = novaLinha.insertCell();
    novaCelula.innerHTML= document.getElementById("tel").value;
    novaCelula = novaLinha.insertCell();
    novaCelula.innerHTML= document.getElementById("email").value;
    novaCelula = novaLinha.insertCell();
    novaCelula.innerHTML=document.getElementById("civil").value;
}

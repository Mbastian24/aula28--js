const dadosPessoa = {
"nome": "MARIA FERNANDA BASTIAN",
"email": "fernandamariabastian@gmail.com",
"telefone": "42999055262",
"cpf": "00123456789",
"endereco": "Rua dos Douglas",
"numero": 98,
"complemento": "Casa",
"cep": 123456789,
"bairro": "Centro",
"cidade": "Pato Branco",
"estado": "Paraná",
"sexo": "Feminino",
"estadoCivil": "Casada",
"profissao": "Recepcionista",
"dataNascimento": "01/01/2001",
"urls":[
    "https://github.com/Mbastian24",
    "https://www.linkedin.com/in/maria-fernanda-bastian-854571205/"
]
}

// Montagem da div title
const divTitle = document.getElementById("title")

const h1Nome = document.createElement("h1")
h1Nome.textContent = dadosPessoa.nome

divTitle.appendChild(h1Nome)

const spanProfissao = document.createElement("span")
spanProfissao.textContent = dadosPessoa.profissao

divTitle.appendChild(spanProfissao)

// Montagem da div contact
const divContact = document.getElementById("contact")

// lista não ordenada
const listaContato = document.createElement("ul")

// item de lista para o endereço completo
const itemEndereco = document.createElement("li")
itemEndereco.textContent = `${dadosPessoa.endereco},${dadosPessoa.numero}`
listaContato.appendChild(itemEndereco)

// item de lista para o email
const itemEmail = document.createElement("li")
itemEmail.textContent = `${dadosPessoa.email}`
listaContato.appendChild(itemEmail)

// item de lista para o telefone
const itemTelefone = document.createElement("li")
itemTelefone.textContent = `${dadosPessoa.telefone}`
listaContato.appendChild(itemTelefone)

// item de lista com link para cada link da lista de links
for (url of dadosPessoa.urls){
   const itemLink = document.createElement("li")
   const ancora = document.createElement("a")
    ancora.textContent = url
    ancora.setAttribute("href", url)
    itemLink.appendChild(ancora)
   listaContato.appendChild(itemLink)
}

 
divContact.appendChild(listaContato)
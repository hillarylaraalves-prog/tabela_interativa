let productID = 1001;

document.getElementById('productForm').addEventListener('submit', function(e){
  e.preventDefault();//impedir o carregamento da pagina(padrão form)

  //1.captura dos valores: pega o que o usuario digitou

  const name = document.getElementById('name').value;
  const category = document.getElementById('category').value;
  const priceValue = parseFloat(document.getElementById('price').value);
  const qty = parseInt(document.getElementById('qty').value);

  //Formatação: transforma o número em moeda brasileira (R$ 0,00)

  const priceFormatted = priceValue.toLocaleString('pt-BR',{minimumFractionDigits: 2});


  //lógica de status:
  
  let statusLabel, statusClass;

  if (qty === 0){
    statusLabel = "Esgotado";
    statusClass = "esgotado";
   }else if (qty <= 5){
    statusLabel = "Baixo Estoque";
    statusClass = "baixo-estoque";
   }else{
    statusLabel = "Em estoque";
    statusClass = "em-estoque";
  }

  //criação da linha: faz a linha da tabela

  const tableBody = document.querySelector('#productsTable tbody');
  const newRow = document.createElement('tr');

  newRow.innerHTML = `
  <td data-label="ID">#${productID++}</td>
  <td data-label="Produto">${name}</td>
  <td data-label="Categoria">${category}</td>
  <td data-label="Preço" class="price">R${priceFormatted}</td>
  <td data-label="Qtd">${qty}</td>
  <td data-label="Status"><span class="status ${statusClass}"> ${statusLabel} </span> </td>
  
 `;

 //inserção: adiciona a nnova linha da tabela

 tableBody.appendChild(newRow);

 //Limpeza: Reseta os campos da formulario para o proximo cadastro

 this.reset();

});





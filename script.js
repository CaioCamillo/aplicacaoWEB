document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("projeto");
  const tabelaBody = document.getElementById("tabela").querySelector("tbody");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nomeProjeto = document.getElementById("projetonome").value;
    const statusProjeto = document.getElementById("status").value;
    adicionarProjeto(nomeProjeto, statusProjeto);
    form.reset();
  });

  function adicionarProjeto(nome, status) {
    const linha = document.createElement("tr");
    linha.innerHTML = `
          <td>${nome}</td>
          <td>
              <select>
                  <option value="Em progresso" ${
                    status === "Em progresso" ? "selected" : ""
                  }>Em progresso</option>
                  <option value="Aguardando" ${
                    status === "Aguardando" ? "selected" : ""
                  }>Aguardando</option>
                  <option value="Em desenvolvimento" ${
                    status === "Em desenvolvimento" ? "selected" : ""
                  }>Em desenvolvimento</option>
                  <option value="Concluido" ${
                    status === "Concluido" ? "selected" : ""
                  }>Concluido</option>
              </select>
          </td>
          <td><button class="delete">Deletar</button></td>
      `;
    tabelaBody.appendChild(linha);

    linha.querySelector(".delete").addEventListener("click", () => {
      linha.remove();
    });
  }
});

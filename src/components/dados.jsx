import React from 'react'

function Dados(){

    return (
    <div>
        <h1>Teste 2 - Interface</h1>
        <h2>Agenda Semanal</h2>
       
<button>Anterior</button>
<button>Próximo</button>

<table>
  <thead>
    <tr>
      <th>Data do Atendimento</th>
      <th>Nome</th>
      <th>Telefone</th>
      <th>Data de Nascimento</th>
      <th>Ações</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>31/05/2023 10:00</td>
      <td>João da Silva</td>
      <td>(35) 99657-9782</td>
      <td>01/01/1983</td>
      <button>Excluir</button>
    </tr>
    <tr>
     <td>01/06/2023 14:30</td>
     <td>Maria Santos</td>
     <td>(45) 98765-4321</td>
     <td>15/07/1990</td>
     <button>Excluir</button>
</tr>
  </tbody>
  
  <tr>
  <td>05/06/2023 09:15</td>
  <td>Pedro Oliveira</td>
  <td>(55) 99876-1234</td>
  <td>10/03/1985</td>
  <button>Excluir</button>
</tr>
<tr>
  <td>07/06/2023 14:30</td>
  <td>Maria Silva</td>
  <td>(55) 98765-4321</td>
  <td>27/11/1990</td>
  <button>Excluir</button>
</tr>
<tr>
  <td>10/06/2023 11:45</td>
  <td>Lucas Santos</td>
  <td>(55) 97654-3210</td>
  <td>15/07/1993</td>
  <button>Excluir</button>
</tr>
<tr>
  <td>12/06/2023 16:20</td>
  <td>Ana Oliveira</td>
  <td>(55) 96543-2109</td>
  <td>02/04/1988</td>
  <button>Excluir</button>
</tr>
<tr>
  <td>15/06/2023 13:00</td>
  <td>João Santos</td>
  <td>(55) 95432-1098</td>
  <td>19/09/1995</td>
  <button>Excluir</button>
</tr>
<tr>
  <td>20/06/2023 10:30</td>
  <td>Sofia Silva</td>
  <td>(55) 94321-0987</td>
  <td>14/02/1998</td>
  <button>Excluir</button>
</tr>
<tfoot>
  </tfoot>
  <tr>
  <td>15/06/2023 11:30</td>
  <td>Carlos Pereira</td>
  <td>(21) 99876-5432</td>
  <td>05/11/1988</td>
  <button>Excluir</button>
</tr>


</table>


    </div>
    )
}

export default Dados
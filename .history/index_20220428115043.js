/* exemplo de como pegar os valores com id pelo document
var name = document.querySelector("#exampleInputName")
var gender = document.querySelectorAll("#form-user-create [name=gender]:checked")
*/
//traga pra mim todos os campos do form que possui nome
var fields = document.querySelectorAll("#form-user-create [name]");

var user = {}

function addLine(dataUser) {

    var tr = document.createElement("tr");
    tr.innerHTML = '
    <tr>
        <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
             <td>dataUser.name</td>
          <td>dataUser.   dataUser.name</td>
            <td>fulano@hcode.com.br</td>
            <td>Sim</td>
            <td>02/04/2018</td>
            <td>
                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
    </tr >
        ';
    document.getElementById("table-users").appendChild(tr)
}

document.getElementById("form-user-create").addEventListener("submit", (event) => {
    event.preventDefault();
    fields.forEach((field, index) => {

        if (field.name == "gender" && field.checked) {
            user[field.name] = field.value
        } else {
            user[field.name] = field.value
        }

    })

    addLine(user)
})
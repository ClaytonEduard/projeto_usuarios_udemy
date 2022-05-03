class UserController {

    constructor(formId, tableId) {
        //gardar os dados do formulario
        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);
    }

    onSubmit() {


        this.formEl.addEventListener("submit", event => {
            event.preventDefault();
            let user = this.getValues();
            this.addLine(user,)
        })
    }





    //metodo para pegar todo os valores
    getValue() {


        this.formEl.elements.forEach((field, index) => {

            if (field.name == "gender" && field.checked) {
                user[field.name] = field.value
            } else {
                user[field.name] = field.value
            }

        })
        // ja retorna o objeto com os valores
        return new User(
            user.name,
            user.gender,
            user.birth,
            user.country,
            user.email,
            user.password,
            user.photo,
            user.admin
        )

    }

    /// ----------------------------------------------------------------

    addLine(dataUser) {
        console.log(dataUser)
        thista.innerHTML = `
        <tr>
        <td> <img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></img></td>
        <td>${dataUser.name}</td>
        <td>${dataUser.email}</td>
        <td>${dataUser.admin}</td>
        <td>${dataUser.birth}</td>
        <td>
                <button type="button" class="btn b''tn-primary btn-xs btn-flat">Editar</button>
                 <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
         </tr>
      `;
    }

}
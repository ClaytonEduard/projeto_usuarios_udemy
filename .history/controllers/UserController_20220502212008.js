class UserController {

    constructor(formId, tableId) {
        //gardar os dados do formulario
        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);

        this.onSubmit();
    }

    onSubmit() {


        this.formEl.addEventListener("submit", event => {
            event.preventDefault();

            // capturando os dados da foto
            let values = this.getValues();


            this.getPhoto((content) => {

                values.photo = content;
                this.addLine(values)
            })

        })
    }

    ////////////////////////////////
    //metodo ler foto
    getPhoto() {

        return Promise(function (resolve, reject) {
            let fileReader = new FileReader();
            let elements = [...this.formEl.elements].filter(item => {
                if (item.name == 'photo') {
                    return item
                }
            })
            let file = elements[0].files[0]
            fileReader.onload = () => {

                re(fileReader.result)
            }

            fileReader.readAsDataURL(file)
        })


    }




    //metodo para pegar todo os valores
    getValues() {
        let user = {};

        // spread e quando vc esta lendo um array de obejtos para
        // [...] trasforma o objeto e um array de objetos

        [...this.formEl.elements].forEach((field, index) => {

            if (field.name == "gender" && field.checked) {
                user[field.name] = field.value;
            } else {
                user[field.name] = field.value;
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
        this.tableEl.innerHTML = `
        <tr>
        <td> <img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></img></td>
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
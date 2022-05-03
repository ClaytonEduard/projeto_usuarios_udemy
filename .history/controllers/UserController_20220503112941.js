class UserController {

    constructor(formId, tableId) {
        //gardar os dados do formulario
        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);

        this.onSubmit();
    }
    //----------------------------------------------------------------
    onSubmit() {


        this.formEl.addEventListener("submit", event => {
            event.preventDefault();

            // capturando os dados da foto
            let values = this.getValues();

            // limpar dados do form 
            this.formEl.querySelector('[type="submit"]').disabled = true

            this.getPhoto().then((content) => {
                values.photo = content;
                this.addLine(values)
            }, (e) => {
                console.error(e)
            })
        })
    }

    //----------------------------------------------------------------
    //metodo ler foto
    getPhoto() {

        return new Promise((resolve, reject) => {
            let fileReader = new FileReader();
            let elements = [...this.formEl.elements].filter(item => {
                if (item.name == 'photo') {
                    return item
                }
            })
            let file = elements[0].files[0]
            fileReader.onload = () => {

                resolve(fileReader.result)
            }
            fileReader.onerror = (e) => {
                reject(e)
            }

            if (file) {
                fileReader.readAsDataURL(file)
            } else {
                resolve('dist/img/boxed-bg.png')
            }

        })


    }

    //----------------------------------------------------------------


    //metodo para pegar todo os valores
    getValues() {
        let user = {};

        // spread e quando vc esta lendo um array de obejtos para
        // [...] trasforma o objeto e um array de objetos

        [...this.formEl.elements].forEach((field, index) => {

            if (field.name == "gender" && field.checked) {
                user[field.name] = field.value;
            } else if (field.name == "admin") {
                user[field.name] = field.checked;
            }
            else {
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
        let tr = document.createElement('tr')
        tr.innerHTML = `
       
        <td> <img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></img></td>
        <td>${dataUser.name}</td>
        <td>${dataUser.email}</td>
        <td>${(dataUser.admin) ? 'Sim' : 'Não'}</td>
        <td>${dataUser.birth}</td>
        <td>
                <button type="button" class="btn b''tn-primary btn-xs btn-flat">Editar</button>
                 <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
       
      `;
        this.tableEl.appendChild(tr)
    }
}
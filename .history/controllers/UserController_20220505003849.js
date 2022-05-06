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
            let btn = this.formEl.querySelector('[type=submit]')
            // ativando o botao
            btn.disabled = true

            // capturando os dados da foto
            let values = this.getValues();

            // valodacao de dados corrigindo um erro da foto em branco no form
            if (!values) return false;

            this.getPhoto().then((content) => {
                values.photo = content;
                this.addLine(values)
                //limpando o form 
                this.formEl.reset()
                //desativando o botao
                btn.disabled = false
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
        let isValid = true;
        // spread e quando vc esta lendo um array de obejtos para
        // [...] trasforma o objeto e um array de objetos

        [...this.formEl.elements].forEach((field, index) => {
            if (['name', 'email', 'password'].indexOf(field.name) > -1 && !field.value) {
                field.parentElement.classList.add('has-error');
                isValid = false;
            }
            // falidadndo os dados do formulario

            if (field.name == "gender") {
                if (field.checked) {
                    user[field.name] = field.value;
                }
            } else if (field.name == "admin") {
                user[field.name] = field.checked;
            }
            else {
                user[field.name] = field.value;
            }

        })
        /// parando a execusao do formulario
        if (!isValid) {
            return false;
        }

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
        let tr = document.createElement('tr');
        //pegar o objeto string, trasnformar em um Json e depois objeto string

        tr.dataset.user = JSON.stringify(dataUser);

        tr.innerHTML = `
        <td> <img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
        <td>${dataUser.name}</td>
        <td>${dataUser.email}</td>
        <td>${(dataUser.admin) ? 'Sim' : 'Não'}</td>
        <td>${Utils.dateFormat(dataUser.register)}</td>
        <td>
            <button type="button" class="btn btn-primary btn-edit btn-xs btn-flat">Editar</button>
            <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
        </td>
       
      `;

        tr.querySelector(".btn-edit").addEventListener("click", e => {
            console.log(JSON.parse(tr.dataset.user));
        });

        this.tableEl.appendChild(tr);

        this.updateCount();
    }
    //---------------------------------------------------------------- 

    updateCount() {

        let numberUsers = 0;
        let numberAdmin = 0;

        [...this.tableEl.children].forEach(tr => {

           
            let userString = tr.dataset.user;
            let user = !!userString ? JSON.parse(userString) : {};
            if (!!userString) {
                numberUsers++;
                user = JSON.parse(userString);
                if (user._admin) numberAdmin++;
            }
            //let user = JSON.parse(tr.dataset);

            

        });
        //devolvendo os dados para a tela
        document.querySelector("#number-users").innerHTML = numberUsers;
        document.querySelector("#number-users-admin").innerHTML = numberAdmin;
    }
}
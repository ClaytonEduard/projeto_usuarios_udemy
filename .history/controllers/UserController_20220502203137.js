class UserController {

    constructor(formId) {
        //gardar os dados do formulario
        this.formEl = document.getElementById(formId);
    }

    onSubmit() {
         // _this pega os dados do escopo atual tipo um nivel acima
         let _this = this;
        thisformEl.addEventListener("submit", (event) => {
            event.preventDefault();
            _this.getV
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

}
class UserController {

    constructor(formId) {


        //gardar os dados do formulario
        this.formEl = document.getElementById(formId);

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

        var objectUser = new User(
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
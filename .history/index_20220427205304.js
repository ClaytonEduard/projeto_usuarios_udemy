/* exemplo de como pegar os valores com id pelo document
var name = document.querySelector("#exampleInputName")
var gender = document.querySelectorAll("#form-user-create [name=gender]:checked")

//traga pra mim todos os campos do form que possui nome
var fields = document.querySelectorAll("#form-user-create [name]");
fields.forEach((field, index) => {

    if (field.name == "gender" && field.checked) {
        console.log("sim", field)
    } else {
        console.log("Não")
    }
    // console.log(field.name)
})

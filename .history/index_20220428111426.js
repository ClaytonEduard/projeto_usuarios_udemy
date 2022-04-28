/* exemplo de como pegar os valores com id pelo document
var name = document.querySelector("#exampleInputName")
var gender = document.querySelectorAll("#form-user-create [name=gender]:checked")
*/
//traga pra mim todos os campos do form que possui nome
var fields = document.querySelectorAll("#form-user-create [name]");

var user = {}

function addLine(dataUser){
    console.log(user)
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

   addLine
})
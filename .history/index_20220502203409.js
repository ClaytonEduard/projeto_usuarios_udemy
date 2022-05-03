/* exemplo de como pegar os valores com id pelo document
var name = document.querySelector("#exampleInputName")
var gender = document.querySelectorAll("#form-user-create [name=gender]:checked")
*/
//traga pra mim todos os campos do form que possui nome
var fields = document.querySelectorAll("#form-user-create [name]");

var user = {}


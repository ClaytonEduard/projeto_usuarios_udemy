class User {
    //construtor
    constructor(name, gender, birth, country, email, password, photo, admin) {

        this._name = name;
        this._gender = gender;
        this._birth = birth;
        this._country = country;
        this._email = email;
        this._password = password;
        this._photo = photo;
        this._admin = admin;

    }
    get name() { return this._name; }
    get email() { return this._email; }
    get password() { return this._password; }
    get photo() { return this._photo; }
    get admin() { return this._admin; }
    get
}
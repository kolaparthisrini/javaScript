var person = {
    firstName:"Srini",
    lastName: "Kolaparthi",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var myObject = {
    firstName:"Sri",
    lastName: "kolaparthi",
}
person.fullName.call(myObject);
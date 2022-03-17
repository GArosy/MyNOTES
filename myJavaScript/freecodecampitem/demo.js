function object(o) {
    function F() {};
    F.prototype = o;
    return new F();
}

let person = {
    name: "Nicholas",
    friends: ["Tom", "Jerry"]
};

let anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Bob");

let yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

console.log(person.friends);
// ['Tom', 'Jerry', 'Bob', 'Barbie']
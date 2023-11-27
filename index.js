



var persons = [

    { name: "Vagif", surname: "Garayev", age: 19 },
    { name: "Elxan", surname: "Garayev", age: 10 },
    { name: "Nigar", surname: "Garayeva", age: 29 },
    { name: "Arif", surname: "GArayev", age: 15 }

];


var tableHTML =
 "<table border='1'><tr><th>Name</th><th>Surname</th><th>Age</th></tr>";


for (var i = 0; i < persons.length; i++) {
    tableHTML += "<tr><td>" + persons[i].name + "</td><td>" + persons[i].surname + "</td><td>" + persons[i].age + "</td></tr>";
}





tableHTML += "</table>";




document.body.innerHTML = tableHTML;
class Student {
    constructor (name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}
class Bootcamp {
    constructor (name, level, students = new Array(0)) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegister) {
        //const chocDesserts2 = desserts.filter(dessert => dessert.flavor === "chocolate");
        const result = this.students.filter(x => x.email === studentToRegister.email);
        if (result.length == 0)
        {
            this.students.push(studentToRegister);
            console.log(`Okay. The student ${studentToRegister.name} already regigstered!!!`)
        }
        else
            alert(`Sorry! The student ${studentToRegister.name} already regigstered!!!`);
    } 
}
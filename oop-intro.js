class Person {
    // in Python this would be def __init__(self, ...):
    constructor (firstName, lastName, email, hairColor = 'black') {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.hairColor = hairColor;
    }

    sayName() {
        console.log('My name is ' + this.firstName)
    }
}

class Course {
    constructor(name, teacher, day, time) {
        this.name = name;
        this.teacher = teacher;
        this.day = day;
        this.time = time;
    }
}

class Student extends Person {
    constructor(firstName, lastName, email, hairColor) {
        super(firstName, lastName, email, hairColor);

        this.courses = [];
    }

    addCourse(course) {
        this.courses.push(course);
    }
}

const griffin = new Student('Griffin', 'McManus', 'g@m.com');
const morley = new Person('Morley', 'Tatro', 'm@t.com');
const edward = new Person('Edward', 'Im', 'e@i.com');

const mern = new Course('MERN', morley, 'M-F', '9:00 AM');
const java = new Course('Java', edward, 'M-F', '9:00 AM');

griffin.addCourse(java);
griffin.addCourse(mern);

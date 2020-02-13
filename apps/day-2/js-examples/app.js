console.log(this);

function sayHi() {
  console.log('sayHi:', this);
}

const person = {
  name: 'hari',
  email: 'hari@gmail.com',

  show: function () {
    console.log('name:', this.name, ' email:', this.email);
    console.log('person.show():', this);
  }
}

const person2 = {
  name: 'ram',
  email: 'ram@gmail.com'
}

sayHi();
person.show();
var ref = person.show.bind(person2);
ref();




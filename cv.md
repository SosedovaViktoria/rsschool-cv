# **Viktoriia Goriachkina**

<p align="center">
    <img src="./image.jpg" alt="victoria_goriachkina" width="195" height="220" />
</p>

## Contacts
***
> Location: Georgia, Tbilisi

> Email: nvikamail@mail.ru

> GitHub: [SosedovaViktoria][2]

Discord: Viktoriia#0050

## Briefly About Myself
***
I graduated from the technical university in 2022. I spent more time on QA at university, now I want to get more knowledge about the Front-end. I want to gain knowledge and skills that will be enough for employment in the company. Also completed "JS / FRONT-END (RU)" courses at rs-School this year.

## Hard Skills:
***
* HTML
* CSS
* JavaScript
* MSSQL
* Git
* Editors: VSCode, IntelliJ IDEA.

## Soft Skills:
***
* Sociable
* Communication
* Responsibility
* Flexibility

## Code examples
***
Task from CODEWARS: _Define the following classes that inherit from Animal._

_I. Shark
The constructor function for Shark should accept 3 arguments in total in the following order: name, age, status. All sharks should have a leg count of 0 (since they obviously do not have any legs) and should have a species of "shark"._

_II. Cat
The constructor function for Cat should accept the same 3 arguments as with Shark: name, age, status. Cats should always have a leg count of 4 and a species of "cat".
Furthermore, the introduce/Introduce method for Cat should be identical to the original except there should be exactly 2 spaces and the words "Meow meow!" after the phrase._

_III. Dog
The Dog constructor should accept 4 arguments in the specified order: name, age, status, master. master is the name of the dog's master which will be a string. Furthermore, dogs should have 4 legs and a species of "dog".
Dogs have an identical introduce/Introduce method as any other animal, but they have their own method called greetMaster/GreetMaster which accepts no arguments and returns "Hello (insert_master_name_here)" (of course not the literal string but replace the (insert_master_name_here) with the name of the dog's master)._

```
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age);
    this.legs = 0;
    this.species = "shark";
    this.status = status;
  }
}

class Cat extends Animal {
   constructor(name, age, status) {
    super(name, age);
    this.legs = 4;
    this.species = "cat"
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
   constructor(name, age, status, master ) {
    super(name, age);
    this.legs = 4;
    this.species = "dog"
    this.status = status;
    this.master = master;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
```
*** 

Education
===
* University: Bachelor, Saratov State University (2002)
    * Faculty of Computer Science
* Ru.code-basics:
    * HTML
    * CSS
    * JavaScript
* RS School
    * JavaScript/Front-end 2022Q3 (position: 639 / 1259)

## Languages
***
* Russian - Native
* English - Lower-intermediate(B1)


[1]: http://b.org
[2]: https://github.com/SosedovaViktoria
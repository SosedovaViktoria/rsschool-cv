const langChange = {
  "tittle": {
    "en": "CV Goriachkina Viktoriia",
    "ru": "Резюме Горячкиной Виктории"
  },
  "contact": {
    "en": "Contacts",
    "ru": "Контакты"
  },
  "local": {
    "en": "Location: Georgia, Tbilisi",
    "ru": "Место проживания: Грузия, Тбилиси"
  },

  "language": {
    "en": "Language",
    "ru": "Владение языками"
  },
  "rus": {
    "en": "Russian:",
    "ru": "Русский:"
  },
  "rus-level": {
    "en": "⚫⚫⚫⚫⚫ C2 - Native",
    "ru": "⚫⚫⚫⚫⚫ C2 - Носитель языка"
  },
  "eng": {
    "en": "English:",
    "ru": "Английский:"
  },
  "eng-level": {
    "en": "⚫⚫⚪⚪⚪ B1 - Intermediate",
    "ru": "⚫⚫⚪⚪⚪ B1 - Средний"
  },
  "skill": {
    "en": "Skills",
    "ru": "Навыки"
  },
  "design": {
    "en": "Responsive web design",
    "ru": "Адаптивная верстка"
  },
  "json": {
    "en": "Work with json",
    "ru": "Работа c json"
  },
  "name": {
    "en": "Goriachkina Viktoriia",
    "ru": "Горячкина Виктория"
  },
  "career": {
    "en": "Junior Front-end Developer",
    "ru": "Младший Front-end разработчик"
  },
  "titleEducation": {
    "en": "Education:",
    "ru": "Образование:"
  },
  "education": {
    "en": "Bachelor - Saratov State University.  Faculty of Computer Science.",
    "ru": "Степень бакалавра. Саратовский государственный университет. Факультет комьютерных наук и информационных технологий"
  },
  "titleCourses": {
    "en": "Courses:",
    "ru": "Курсы:"
  },
  "rs-school": {
    "en": "RS School: JavaScript/Front-end 2022Q3 (position: 639 / 1259)",
    "ru": "RS School: JavaScript/Front-end 2022Q3 (позиция: 639 / 1259)"
  },
  "titleBriefly": {
    "en": "Briefly About Myself",
    "ru": "Немного oбo мне"
  },
  "aboutMe": {
    "en": "I graduated from the technical university in 2022. I studied a lot of testing at university, and after graduation I started studying Front-end. I have experience with HTML coding and with Figma at RS-School courses. I have a little experience with React. I completed 'JS / FRONT - END(RU)' courses at RS-School this year.",
    "ru": "Я закончила технический университет в 2022 году. В университете я много изучала тестирование, после окончания университета стала изучать Front-end. Есть опыт работы с версткой сайта, а также опыт работы с Figma на курсах RS-School. Есть небольшой опыт с React. В этом году закончила 'JS / FRONT - END(RU)' в RS-School. "
  },
  "titleExamples": {
    "en": "Example task:",
    "ru": "Пример кода:"
  },
  "titleTask": {
    "en": "Task from CODEWARS:",
    "ru": "Задание из CODEWARS:"
  },
  "p1": {
    "en": "Define the following classes that inherit from Animal.",
    "ru": "Определите следующие классы, наследуемые от Animal."
  },
  "p2": {
    "en": "I. Shark. The constructor function for Shark should accept 3 arguments in total in the following order: name, age, status. All sharks should have a leg count of 0 (since they obviously do not have any legs) and should have a species of 'shark'.",
    "ru": "I. Shark. Функция-конструктор для Shark должна принимать всего 3 аргумента в следующем порядке: имя, возраст, статус. Все акулы должны иметь 0 ног (поскольку у них явно нет ног) и должны есть разновидность 'акулы'."
  },
  "p3": {
    "en": "II. Cat. The constructor function for Cat should accept the same 3 arguments as with Shark: name, age, status. Cats should always have a leg count of 4 and a species of 'cat'. Furthermore, the introduce method for Cat should be identical to the original except there should be exactly 2 spaces and the words 'Meow meow!' after the phrase.",
    "ru": "II. Cat. Функция-конструктор для Cat должна принимать те же 3 аргумента, что и для Shark: имя, возраст, статус. У кошек всегда должно быть 4 ноги и вид 'cat'. Кроме того, созданный метод для Cat должен быть идентичен оригиналу, за исключением того, что должно быть ровно 2 пробела и слова 'Meow meow!' после фразы."
  },
  "p4": {
    "en": "III. Dog. The Dog constructor should accept 4 arguments in the specified order: name, age, status, master. Master is the name of the dog's master which will be a string. Furthermore, dogs should have 4 legs and a species of 'dog'.",
    "ru": "III. Dog. Конструктор Dog должен принимать 4 аргумента в указанном порядке: имя, возраст, статус, хозяин. Хозяин — это имя хозяина собаки, которое будет строкой. Кроме того, у собаки должно быть 4 ноги и порода собаки."
  },
  "p5": {
    "en": "Dogs have an identical introduce method as any other animal, but they have their own method called greetMaster/GreetMaster which accepts no arguments and returns 'Hello (insert_master_name_here)' (of course not the literal string but replace the (insert_master_name_here) with the name of the dog's master).",
    "ru": "У Dog так же есть метод, как и у любого другого животного, но они имеют свой собственный метод, называемый greetMaster/GreetMaster, который не принимает никаких аргументов и возвращает 'Hello (insert_master_name_here)' (конечно не буквальную строку, а замените (insert_master_name_here) именем хозяина собаки)."
  },
  "code": {
    "en": "Code:",
    "ru": "Код:"
  },
}
const selectLang = document.querySelector('select');
const allLang = ['en', 'ru'];
selectLang.addEventListener('change', changeUrlLanguage);

function changeUrlLanguage() {
  let lang = selectLang.value;
  window.location.href = `${window.location.pathname}#${lang}`;
  window.location.reload();
}

function changeLang() {
  let hash = window.location.hash;
  hash = hash.substring(1);

  if (!allLang.includes(hash)) {
    window.location.href = `${window.location.pathname}#en`;
    location.reload();
    return;
  }

  selectLang.value = hash;
  document.title = `${langChange['tittle'][hash]}`;

  for (let key in langChange) {
    if (key != 'tittle') {
      let elem = document.getElementsByClassName(`${key}`)[0];

      let children = elem.childNodes;

      for (var i = 0; i < children.length; i++) {
        elem.removeChild(children[i]);
      }
      elem.appendChild(document.createTextNode(langChange[`${key}`][hash]));

    }
  }

}
changeLang();
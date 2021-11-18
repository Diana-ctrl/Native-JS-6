const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = { ...user };

//Проверка:
console.log(user === copyUser) // false
console.log(user.friends === copyUser.friends) //true

//2. Полная (глубокая) копия объекта user
let deepCopyUser = { ...user, friends: [...user.friends] };

//Проверка:
console.log(user === deepCopyUser) //false
console.log(user.friends === deepCopyUser.friends) //false

//3. Поверхностная копия массива students
let copyStudents = [...students];

//Проверка:s
console.log(copyStudents === students) //false
console.log(copyStudents[0] === students[0]) //true

//4*. Полная (глубокая) копия массива students (map)
console.log('hgchgcghc', [...students]); 
let deepCopyStudents = students.map(t => ({ ...t }));
console.log([...deepCopyStudents]); //моя проверка

//Проверка:
console.log(deepCopyStudents === students) //false
console.log(deepCopyStudents[1] === students[1]) //false

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте deepCopyStudents по алфавиту (sort)
let sortByName = deepCopyStudents.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;
    } else if (a.name < b.name) {
        return -1;
    }
    return 0;
});
console.log([...sortByName]);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortByScores = deepCopyStudents.sort(function (a, b) {
    if (a.scores > b.scores) {
        return 1;
    } else if (a.name < b.name) {
        return -1;
    }
    return 0;
});
console.log([...sortByScores]);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = deepCopyStudents.filter(t => t.scores > 100);
console.log(bestStudents);


//6a. Получите массив ("вырежьте") трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = sortByScores.splice(0, 3);
console.log([...topStudents])
console.log([...deepCopyStudents])

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-оператор)
// let newDeepCopyStudents= [...deepCopyStudents, ...topStudents];
// console.log(newDeepCopyStudents)

//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = students.map(t => ({ ...t }));
notMarriedStudents = notMarriedStudents.filter(e => e.isMarried === false);
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = students.map(t => t.name);
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let nameWithSpace = studentsNames.join(' ');
console.log(nameWithSpace)
let namesWithComma = studentsNames.join(', ');;
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map(t => ({ ...t, isStudent: true }));
console.log(trueStudents)

//10. Nick женился. Выполните выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map(t => t.name === 'Nick' ? { ...t, isMarried: true } : t);
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = students.map(t => ({ ...t, isStudent: true }));
ann = ann.find(t => t.name === 'Ann');
console.log(ann);

//12. Найдите студента с самым высоким баллом (reduce)
let bestStudent = students.reduce(function (prev, curr) { return prev.scores > curr.scores ? prev : curr });
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)
let sumScores = students.reduce(function (previousValue, currentValue) { return previousValue + currentValue.scores }, 0);
console.log(sumScores)
// И поднимаем руку!!!!


// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => students.map(main => ({ ...main, friends: (students.filter(cur => cur.name !== main.name)).map(m => m.name)}));
console.log(addFriends(students));










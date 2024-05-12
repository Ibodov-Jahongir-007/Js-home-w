let arr = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.net",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.org",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
  ];
  
   

  let net = []
  let org = []

  let forEach = arr.forEach(item => {
    if(item.email.slice(-3) === 'org') {
        org.push(item)
    } else if (item.email.slice(-3) === 'net') {
        net.push(item)
    }
  })
  console.log('Певое д/з');
  console.log(net);
  console.log(org);

  console.log('Второе д/з');

  let students = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 24 },
    { name: 'David', age: 21 }
  ];
  
  // сохранить средний возраст в переменной totalAge
  let totalAge = 0;
  
  // сохранить старше 22
  let temp = []

  let age = students.reduce((a, b) => a + b.age, 0) / 4
  let age2 = students.filter(item => item.age >= 22 ? temp.push(item):0)
  console.log('Средний возраст',age);
  console.log(age2);

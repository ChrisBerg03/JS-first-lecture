 let news = [
     {
        headline: "Hesh landing on the moon",
        summary: "He landed on the moon!!!"
     },
     {
         headline: "Spaghetti",
         summary: "Spaghetti is raining everywhere!!!"
    },
     {
         headline: "They all died",
        summary: "A man that lived 1000 years ago is now dead"
     }
 ];

 console.log(news);

 let newsContainer = document.querySelector(".news");
 console.log(newsContainer);

 let totalNumbersOfNews = news.length;
 console.log(totalNumbersOfNews);

 for (let i = 0; i < totalNumbersOfNews; i++) {
     console.log(news[i].headline);
     console.log(news[i].summary);

     newsContainer.innerHTML += 
     `
         <div>
             <hr>
            <h1>${news[i].headline}</h1>
             <p>${news[i].summary}</p>
         </div>
     `
};


// let cars = [
//      {
//          type: "bmw",
//          model: "2020"
//      },
//      {
//          type: "audi",
//          model: "2017"
//      },
//      {
//          type: "Vw",
//          model: "2010"
//      }
//  ];

//  console.log(cars);

//  let carContainer = document.querySelector(".news");
//  let totalNumbersOfCars = cars.length;

//  for (let i = 0; i < totalNumbersOfCars; i++) {
//      console.log(cars[i].type);
//      console.log(cars[i].model);

//      carContainer.innerHTML += `
//          <div>
//              <h2>This car is a ${cars[i].type}</h2>
//              <p>The model of the car is ${cars[i].model}</p>
//          </div>
//      `
//  }


const cats = [
    {
        name: "dodo",
        age: 3
    },
    {
        name: "boof",
        age: 5
    },
    {
        name: "doffen",
        age: 6
    }
];
const dogs = [
    {
        name: "dog1",
        age: 3
    },
    {
        name: "dog3",
        age: 5
    },
    {
        name: "dog6",
        age: 6
    }
];

function getName(list) {
    for (let i = 0; i < list.length; i++){
    console.log(list[i].name);
    }
};


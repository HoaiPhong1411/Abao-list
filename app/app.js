

// var array = ['Phan', 'Hoài', 'Phong'];

// var [a, ...rest] = array;   

// var objectTest = {
//     name: 'javascript',
//     price: 1000,
//     children: {
//         name: 'ReactJS'
//     }
// }

// var {name: parentName, children: {name}} = objectTest;

// console.log(name);

// var root = document.querySelector('.root');
// var h1 = document.createElement('h1');

// h1.innerText = "Chao may!";

// root.appendChild(h1);

// Object.assign(h1.style, {
//     color: 'red',
//     backgroundColor: 'black',
// })

// const h1React = React.createElement('h1', {
//     title: 'Hello',
//     className: 'heading'
// }, 'Chao May!')

// console.log(h1React);


// const ulReact = React.createElement(
//     'ul',
//     null,
//     React.createElement('li',null,'Javascript'),
//     React.createElement('li',null,'PHP')
// )


// const divReact = React.createElement(
//     'div',
//     {
//         className: 'post-item'
//     },
//     React.createElement('h2',{ title: 'Học React tại F8' },'Học ReactJS'),
//     React.createElement('p',null, 'Học ReactJS từ cơ bản tới nâng cao')
// )

// const root = document.querySelector('.root')

// // ReactDOM.render(ulReact, root)
// ReactDOM.render(divReact, root)

// // --------------------------- Closure --------------------

// function createStorage(key){

//     const store = JSON.parse(localStorage.getItem(key)) ?? {}

//     const save = () => {
//         localStorage.setItem(key, JSON.stringify(store))
//     }

//     const storage = {
//         get(key) {
//             return store[key]
//         },
//         set(key, value) {
//             store[key] = value
//             save()

//         },
//         delete(key) {
//             delete store[key]
//             save()
//         }
//     }

//     return storage
// }

// const proFileSetting = createStorage('proFile_Setting')

// proFileSetting.delete('name')


// proFileSetting.set('id', '1')
// proFileSetting.set('name', 'Phong')
// proFileSetting.set('age', '22')

// console.log(proFileSetting.get('id'))
// console.log(proFileSetting.get('name'))
// console.log(proFileSetting.get('age'))

// let getElement = document.querySelector('button')

// getElement.onclick = function () {
//     getElement.style.display = 'none';
//     const createH1 = React.createElement(
//         'h1',
//         {
//             className : 'textN'
//         },
//         'FUCK YOU'
//     )
//     const getroot = document.querySelector('.root')
//     ReactDOM.render(createH1,getroot)
// }

// math

// function math(a, b) {
    
//     function sum() {

//         console.log('mej');
//         return a + b;
        
//     }
//     return sum();
// }

/* object constructor */

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// User.prototype.className = 'CD';
// User.prototype.getClassName = function() {
//     return `${this.className}`
// }


// var author = new User('Phong', 'Phan', 'avatar');
// var user = new User('Bao', 'Gia', 'avatar');

// console.log(author.getClassName());
// console.log(user);

/*
    minutes
*/
// var hard = 60;
// setInterval( function() {
//     var date = new Date();
//     var minutes = date.getSeconds();
//     var giay = hard - minutes;
//     var html = `minutes: ${giay}`
//     var root = document.querySelector('.root')
//     ReactDOM.render(html, root);

// },1000)

// switch case

// var date = 'vai noi';

// switch(date) {
//     case 'vai dai':
//         console.log('yes 1');
//         break;
//     case 'vai noi':
//         console.log('yes 2');
//         break;
//     case 'vai teo':
//         console.log('yes 3');
//         break;
//     case 'vai dan':
//         console.log('yes 4');
//         break;
// }

// toan tu 3 ngoi


// var course = {
//     name: 'javascript',
//     coins: 250
// }

// var result = course.coins > 0 ? `${course.coins} Coins` : 'Mien phi';

// console.log(result);

// var course = {
//      name: 'javascript',
//      coins: 250
//  }

//  for (const value of Object.keys(course)) {
//         let html = React.createElement(
//             'li',null,`${course[`${value}`]}`
//         )
        
//         console.log(html);

//         const ulElememnt = document.querySelector('ul')

//         ReactDOM.render(html, ulElememnt)
//  }

// var courses = [
//     {
//         name: 'javascript',
//         coins: 250
//     },
//     {
//         name: 'PHP',
//         coins: 0
//     }
// ]

// var mang = courses.map(function (course) { 
//     return `<li > Khoa hoc: ${course.name} </li>`
// });



// var html = mang.join(' ');

// const ulElememnt = document.querySelector('ul')

// var htmls =ulElememnt.innerHTML = html;


// var array = [1,2,[3,4],5,6,[7,8,9]];

// var arrayFlat = array.reduce(function (acc, curr){
//     return acc.concat(curr);
// }, []);

// var getH1 = document.querySelector('.content')

// var getText = getH1.innerHTML

// console.log(getH1.innerTe);

// getH1.id ='log' 

// var json = '{"name":"Phong","age":19}'


//callback hell

// setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2);
//         setTimeout(() => {
//             console.log(3);
//         }, 1000);
//     }, 1000);
// }, 1000);

// var/let, const

// {
//     var cou = 'Javacript';
//     console.log(cou);
//     var cou = 2;
//     console.log(cou);
   
// }


// tagged template literals

// function hightlight([first,...strings],...values){
//     return values.reduce((acc,curr) => [...acc, `<span>${curr}</span>`,strings.shift()],[first]).join('');
// }

// var brand = 'F8';
// var course = 'Javascript';

// const htmlss = hightlight`Học lập trình ${course} tại ${brand}!`;

// console.log(htmlss);

// var postApi ='https://jsonplaceholder.typicode.com/posts';

// fetch(postApi)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(posts){
//         console.log(posts);
//     })

// console.log(3);


// --------------------------
//     slider show
// -------------------------

const sliderItems = document.querySelectorAll('.item');
const sliderItemWidth = sliderItems[0].offsetWidth + 10;
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const slides = document.querySelector('.slide')
const sliderLenght = sliderItems.length;
console.log(sliderLenght);
let positionX = 0;
let index = 0; 

prevBtn.onclick = function (){
    handleChangeSlide(-1);
}

nextBtn.onclick = function (){
    handleChangeSlide(1);
}





function handleChangeSlide (dir){

    if(dir === 1){
        if (index >= sliderLenght - 5){
            index = sliderLenght - 5;
            return;
        }
        positionX = positionX - sliderItemWidth;
        slides.style.transform = 'translateX('+positionX+'px)';
        index++;
    }else if(dir === -1){
        if (index <= 0) {
            index = 0;
            return;
        }
        positionX = positionX + sliderItemWidth;
        slides.style.transform = 'translateX('+positionX+'px)';
        index--;
    }
}
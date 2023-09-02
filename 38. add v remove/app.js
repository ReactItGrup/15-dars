// // add & remove classList

// const content = document.querySelector("p");

// console.log(content.classList);
// content.classList.add("true");
// content.classList.remove("true");
// content.classList.add("error");

// const para = document.querySelectorAll("p");

// para.forEach((text) => {
//   if (text.textContent.includes("error")) {
//     text.classList.add("error");
//   } else {
//     text.classList.add("true");
//   }
// });

// toggle => class bolsa olib tashlaydi agar class bolmasa o'zi qoshadi

/*--------------- lesson-48 ------------*/
// const article = document.querySelector('article')

// console.log(article.children)

// Array.from(article.children).forEach((child) => {
//   child.classList.add('artilce-child')
// })

const title = document.querySelector("h2");

console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

// chaining
console.log(title.nextElementSibling.parentElement.children);

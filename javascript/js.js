let li0 = document.querySelector('#li0')
let li1 = document.querySelector('#li1')
let li2 = document.querySelector('#li2')
let li3 = document.querySelector('#li3')
let li4 = document.querySelector('#li4')

let ul = document.querySelector('#ul')
let ul1 = document.querySelector('#ul1')
let ul2 = document.querySelector('#ul2')
let ul3 = document.querySelector('#ul3')


li1.addEventListener('click', (e) =>{
    e.preventDefault();
    if (ul.style.display == 'none') {
        ul.style.display = 'block';
        ul1.style.display = 'none';
        ul2.style.display = 'none'; 
        ul3.style.display = 'none';
    } else {
        ul.style.display = 'none';
    }
})
li2.addEventListener('click', (e) =>{
    e.preventDefault()
    if(ul1.style.display == 'none'){
        ul1.style.display = 'block'
        ul.style.display = 'none';
        ul2.style.display = 'none';
        ul3.style.display = 'none';
    }else{
        ul1.style.display = 'none'
    }
})
li3.addEventListener('click', (e) =>{
    e.preventDefault()
    if(ul2.style.display !== 'block'){
        ul2.style.display = 'block'
        ul.style.display = 'none';
        ul1.style.display = 'none';
        ul3.style.display = 'none';
    }else{
        ul2.style.display = 'none'
    }
    
})
li4.addEventListener('click', (e) =>{
    e.preventDefault()
    if(ul3.style.display !== 'block'){
        ul3.style.display = 'block'
        ul2.style.display = 'none'
        ul.style.display = 'none';
        ul1.style.display = 'none';
    }else{
        ul3.style.display = 'none'
    }
})


const scrollIcon = document.getElementById('scroll-Icon');
const firstSection = document.getElementById('section-div');
const secondSection = document.getElementById('section-div2');
const scrollIcons  = document.getElementById('scroll-Icons');



scrollIcon.addEventListener('click', () => {
  firstSection.style.transform = 'translateX(-100%)'; 
  secondSection.style.transform = 'translateX(-100%)';
});

scrollIcons.addEventListener('click', () => {
    firstSection.style.transform = 'translateX(0%)'; 
    secondSection.style.transform = 'translateX(0%)'; 
  });



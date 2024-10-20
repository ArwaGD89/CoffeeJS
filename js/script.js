
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
var data = [
    {
        id: 1,
        title: 'Coffee1',
        text: 'Most beatuiful smell',
        image: 'c2.jpg '
    },
    {
        id: 2,
        title: 'Coffee2',
        text: 'Most beatuiful smell',
        image: 'c3.jpg '
    },
    {
        id: 3,
        title: 'Coffee3',
        text: 'Most beatuiful smell',
        image: 'c4.jpg '
    },
    {
        id: 4,
        title: 'Coffee4',
        text: 'Most beatuiful smell',
        image: 'c5.jpg'
    },
    {
        id: 5,
        title: 'Coffee5',
        text: 'Most beatuiful smell',
        image: 'c6.jpg'
    },
    {
        id: 6,
        title: 'Coffee2',
        text: 'Most beatuiful smell',
        image: 'c7.jpg'
    }

]


 
// cart
var count = document.getElementById('count')
if (localStorage.getItem('Products')) {
    var Products = JSON.parse(localStorage.getItem('Products'))
} else {
    var Products = []
}

count.style.display = 'block'
count.innerHTML = Products.length

y = Products.map((e) => {
    return(
     `<div class="cart-item">
             <span class="fas fa-times"></span>
             <img src="image/${e.image}">
             <div class="content">
                 <h3> ${e.title}</h3>
                 <div class="price">$15.99/-</div>
             </div>
         </div>`)
                
 })
 cartItem.innerHTML += y

function AddToCart(id) {
    cartItem.innerHTML = ''
    var addedProduct = data.find((e) => {
        return e.id == id
    }
    )
    Products = [...Products, addedProduct]

     y=Products.map((e) => {
       return(
        `
        <div class="cart-item">
                <span class="fas fa-times"></span>
                <img src="image/${e.image}">
                <div class="content">
                    <h3> ${e.title}</h3>
                    <div class="price">$15.99/-</div>
                </div>
            </div>
             `)
            
    })
    cartItem.innerHTML += y
 
    
    localStorage.setItem('Products', JSON.stringify(Products))
    count.style.display = 'block'
    count.innerHTML = Products.length

}

// end


window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');

}


document.addEventListener('DOMContentLoaded', () => {
    const btnPopup = document.querySelector('.btnlogin-popup');
    const iconClose = document.querySelector('.icon-close');
    btnPopup.addEventListener('click', () => {
        wrapper.classList.add("active-popup");

    });
    iconClose.addEventListener('click', () => {
        wrapper.classList.remove("active-popup");
    });

    const wrapper = document.querySelector('.wrapper');
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');

    if (registerLink) {
        registerLink.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            wrapper.classList.add("active");
        });
    }

    if (loginLink) {
        loginLink.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            wrapper.classList.remove("active");
        });
    }
});


var userName = document.getElementById('input-name')
var email = document.getElementById('input-email')
var password = document.getElementById('input-pass')
var btnRegister = document.getElementById('btn-register')

btnRegister.addEventListener('click', register)

function register() {
    if (userName.value === '' || email.value === '' || password.value === '') {
        alert('You should fill in all')
    } else {
        // var name = userName.value.trim()
        localStorage.setItem('username', userName.value)
        localStorage.setItem('Email', email.value)
        localStorage.setItem('Password', password.value)

        setTimeout(() => {
            if (registerLink) {
                loginLink.addEventListener('click', (e) => {
                    e.preventDefault(); // Prevent default link behavior
                    wrapper.classList.add("active");
                });
            }

            // if (registerLink) {
            //     registerLink.addEventListener('click', (e) => {
            //         e.preventDefault(); // Prevent default link behavior
            //         wrapper.classList.add("active");
            //     });
            // }
        },10)
    }
}

var emailLog = document.getElementById('input-emai')
var passwordLog = document.getElementById('input-pas')
var btnLogin = document.getElementById('btn-login')
var emailStorage = localStorage.getItem('Email')
var passStorage = localStorage.getItem('Password')

btnLogin.addEventListener('click', login)

function login() {

    const email = emailLog.value;
    const password = passwordLog.value;

    if (email === '' || password === '') {
        alert('You should fill in all fields')
    } 
    else if (email === emailStorage && password === passStorage) {
            alert('OK')
            setTimeout(() => {
               window.location.href = 'index.html'
            },10)
        } else {
            alert('wrong data')
        }
    }



var homeLogin = document.getElementById('home-login')
var myaccount = document.getElementById('my-account')
var user = document.querySelector('#my-account h2')
var logout = document.getElementById('logout')
if(localStorage.getItem('Email')){
    homeLogin.style.display = 'none'
    myaccount.style.display = 'block'
    user.innerHTML= localStorage.getItem('username')
}
logout.addEventListener('click', Out)
function Out (){
  
    localStorage.clear()
    setTimeout(()=> {
        location ='index.html'
    },10)
}



var boxContainer =document.querySelector('.box-container')
function Draw() {
    x = data.map((item) => {
        return (
`  <div class="box">
                <img src="image/${item.image}">
                <h3> ${item.text}</h3>
                <div class="price">$15.99<span> 20.99</span></div>
                <a href="#" class="btn"onclick=AddToCart(${item.id})> add to cart</a>
            </div>`
          
        )

    })

    boxContainer.innerHTML = x
}
Draw()

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.mon-slider', {
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        autoplay: {
            delay: 3000,
        },
    });
})

document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((tab) => {
        tab.classList.remove("tab-active");
      });
  
      document.querySelectorAll(".content").forEach((content) => {
        content.classList.remove("active");
      });
  
      if (tab.classList.contains("tab-auror")) {
        document.querySelector(".auror").classList.add("active");
      }
  
      if (tab.classList.contains("tab-garde")) {
        document.querySelector(".garde").classList.add("active");
      }
  
      if (tab.classList.contains("tab-langue")) {
        document.querySelector(".langue").classList.add("active");
      }
  
      if (tab.classList.contains("tab-magizoo")) {
        document.querySelector(".magizoo").classList.add("active");
      }
  
      tab.classList.add("tab-active");
    });
  });


  let form = document.querySelector('form')

  form.addEventListener('submit', function (event) {
      event.preventDefault()
  
      let errorContainer = document.querySelector('.message-error')
      let errorList = document.querySelector('.message-error ul')
  
      errorList.innerHTML = ""
      errorContainer.classList.remove('visible')
  
      let email = document.querySelector('#email')
      if (email.value === '') {
          errorContainer.classList.add('visible')
          email.classList.remove('success')
  
          let err = document.createElement('li')
          err.innerText = 'Le champ email ne peut pas être vide'
  
          errorList.appendChild(err)
      } else {
          email.classList.add('success')
      }
  
      let pseudo = document.querySelector('#pseudo')
      if (pseudo.value.length < 6 ) {
          errorContainer.classList.add('visible')
          pseudo.classList.remove('success')
  
          let err = document.createElement('li')
          err.innerText = 'Le pseudo ne peut pas être inférieur à 6 caractères.'
  
          errorList.appendChild(err)
      } else {
          pseudo.classList.add('success')
      }
  
      let passCheck = new RegExp(
          "^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[-+_!@#$%^&*.,?]).+$");
  
      let password = document.querySelector('#password')
      if (password.value.length < 10 || passCheck.test(password) ) {
          errorContainer.classList.add('visible')
          password.classList.remove('success')
  
          let err = document.createElement('li')
          err.innerText = 'Le mot de passe ne peut pas être inférieur à 10 caractères, doit contenir au moins une majuscule, un chiffre et un caractère spécial.'
  
          errorList.appendChild(err)
      } else {
          password.classList.add('success')
      }
  
      let passwordConfirm = document.querySelector('#password2')
      if (passwordConfirm.value !== password.value || passwordConfirm.value === '') {
          errorContainer.classList.add('visible')
          passwordConfirm.classList.remove('success')
  
          let err = document.createElement('li')
          err.innerText = 'Les deux mots de passe doivent être identiques.'
  
          errorList.appendChild(err)
      } else {
          passwordConfirm.classList.add('success')
      }
  
      let successContainer = document.querySelector('message-success')
      successContainer.classList.remove('visible')
  
      if (email.classList.contains('success') &&
         pseudo.classList.contains('success') &&
         password.classList.contains('success') &&
         passwordConfirm.classList.contains('success')
         
      ) {
          successContainer.classList.add('visible')
      }
  })

const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(button => {
    button.addEventListener('change', function() {
      radioButtons.forEach(otherButton => {
        if (otherButton !== button) {
          otherButton.checked = false;
        }
      });
      console.log(`Option sélectionnée : ${this.value}`);
    });
  });

const selectButton = document.getElementById('selectButton');
  
selectButton.addEventListener('click', function() {

const selectedValue = selectButton.value;

console.log(`Option sélectionnée : ${selectedValue}`);
});

const DarkMode = document.getElementById('DarkMode');

DarkMode.addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});
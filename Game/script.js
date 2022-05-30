function show_hide_password(target){
	var input = document.getElementById('pass');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}
function show_hide_password_second(target){
	var input = document.getElementById('repPass');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}

$("input#name").on({
    keydown: function(e) {
      if (e.which === 32)
        return false;
    },
    change: function() {
      this.value = this.value.replace(/\s/g, "");
    }
  });

  $("input").on({
    keydown: function(e) {
      if (e.which === 32)
        return false;
    },
    change: function() {
      this.value = this.value.replace(/\s/g, "");
    }
  });
         
$(document).ready(function() {
    $('#repPass').change(function() {
        var pass = $("#pass").val();
        var pass_rep = $("#repPass").val();
       

        
        if (pass != pass_rep) {
            $("#repPass").css('border-bottom', 'red 1px solid');
        }
        if (pass == pass_rep) {
          $("#repPass").css('border-bottom', 'green 1px solid');
      }
      if (pass_rep==="") {
        $("#repPass").css('border-bottom', '#999 1px solid');
    }
    });
});


function noDigits(event) {
    if ("1234567890".indexOf(event.key) != -1)
      event.preventDefault();
  }


const form = document.forms[0];
const text = form.querySelectorAll(`.brise-input`);

let textName = text[0].querySelector(`label`);

let textPass = text[1].querySelector(`label`);

let textDate = text[2].querySelector(`label`);



form.addEventListener(`submit`, (evt) => {
  evt.preventDefault();
   if (form.elements.name.value === '') {
    textName.textContent = `Заполните поле`;
   
    
   }
   else if (form.elements.pass.value === '' ) {
    textPass.textContent = `Заполните поле`;
   }
   
  
   else if (form.elements.date.value === '' ) {
    textDate.textContent = `Заполните поле`;

   }
  
    else {
    document.location.href = "index.html";
   }
});
$('.any-button').on('click', function() {
    $("#repPass").css('border-bottom', '#999 1px solid');
  });


function new_page(){
    this._startBalloon = document.getElementById("name").value;
    this._finishBalloon = document.getElementById("surname").value;
    var len = document.getElementById("result").value;
    localStorage.setItem("flag",true);
    localStorage.setItem("startPoint",this._startBalloon);
    localStorage.setItem("finishPoint",this._finishBalloon);   
}

document.addEventListener("DOMContentLoaded", function() { // событие загрузки страницы

// выбираем на странице все элементы типа textarea и input
document.querySelectorAll('textarea,span,input').forEach(function(e) {
    // если данные значения уже записаны в sessionStorage, то вставляем их в поля формы
    // путём этого мы как раз берём данные из памяти браузера, если страница была случайно перезагружена
    if(e.value === '') e.value = window.sessionStorage.getItem(e.name, e.value);
    // на событие ввода данных (включая вставку с помощью мыши) вешаем обработчик
    e.addEventListener('input,span', function() {
        // и записываем в sessionStorage данные, в качестве имени используя атрибут name поля элемента ввода
        window.sessionStorage.setItem(e.name, e.value);
    })
})

}); 

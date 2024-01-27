/*=====================================PHONE-MASK=====================================*/
/*=====================================PHONE-MASK=====================================*/

$('.phone__mask').mask('+7 (999) 999-99-99');

$.fn.setCursorPosition = function (pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};

$('input[type="tel"]').click(function () {
  $(this).setCursorPosition(4);
});

/*=====================================MATERIALS-ADDING=====================================*/
/*=====================================MATERIALS-ADDING=====================================*/

const addMaterialButton = document.getElementById('material-add')
const materialsForm = document.querySelector('.application__materials')
const materials = []

materialsForm.addEventListener('submit', function (event) {
  event.preventDefault()
  for (let i = 0; i < materialsForm.length; i++) {
    const item = materialsForm[i]
    if (item.type === 'text' || item.type === 'select-one') {
      materials[item.name] = item.value
    }
  }
  addMaterialButton.insertAdjacentHTML("beforebegin", materialsTemplate())
})

function materialsTemplate() {
  return `<div class="add-wrap"><div class="add">${materials.typeMaterial}, 
  ${materials.colorMaterial}, 
  ${materials.thicknessMaterial}, 
  ${materials.colorEdging}
  </div>
  <button class="button remove-button" 
  type="button" id="remove">Удалить</button></div>`
}

/*!!!!!!!!!!!!!!!!!!!!!!!!!ТРЕБУЕТ ДОРАБОТКИ!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*!!!!!!!!!!!!!!!!!!!!!!!!!ТРЕБУЕТ ДОРАБОТКИ!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*!!!!!!!!!!!!!!!!!!!!!!!!!ТРЕБУЕТ ДОРАБОТКИ!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*!!!!!!!!!!!!!!!!!!!!!!!!!ТРЕБУЕТ ДОРАБОТКИ!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/



/*=====================================DETAILS-ADDING=====================================*/
/*=====================================DETAILS-ADDING=====================================*/

const addDetailButton = document.getElementById('details-add')
const detailsForm = document.querySelector('.details__adding')
const details = []

detailsForm.addEventListener('submit', function (event) {
  event.preventDefault()
  for (let i = 0; i < detailsForm.length; i++) {
    const item = detailsForm[i]
    if (item.type === 'text' || item.type === 'select-one' || item.type === 'textarea' || item.type === 'number') {
      details[item.name] = item.value
    }
    console.log(details)
  }
  addDetailButton.insertAdjacentHTML("beforebegin", detailsTemplate())
})

function detailsTemplate() {
  return `<div class="add-wrap"><div class="add">${details.detailsMaterial}, 
  ${details.numberOfDetails}, ${details.rotationOfDetail}, 
  ${details.sizeOfDetailA}, ${details.sizeOfDetailB}, 
  ${details.edgingOfDetailA}, ${details.edgingOfDetailB}, 
  ${details.noteOfDetails}
  </div>
  <button class="button remove-button" 
  type="button" id="remove">Удалить</button></div>`
}


/*!!!!!!!!!!!!!!!!!!!!!!!!!ТРЕБУЕТ ЕЩЕ БОЛЬШЕЙ ДОРАБОТКИ!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*!!!!!!!!!!!!!!!!!!!!!!!!!ТРЕБУЕТ ЕЩЕ БОЛЬШЕЙ ДОРАБОТКИ!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*!!!!!!!!!!!!!!!!!!!!!!!!!ТРЕБУЕТ ЕЩЕ БОЛЬШЕЙ ДОРАБОТКИ!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*!!!!!!!!!!!!!!!!!!!!!!!!!ТРЕБУЕТ ЕЩЕ БОЛЬШЕЙ ДОРАБОТКИ!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

/*=====================================FILE-ADDING=====================================*/
/*=====================================FILE-ADDING=====================================*/

let fields = document.querySelectorAll('.field__file');
Array.prototype.forEach.call(fields, function (input) {
  let label = input.nextElementSibling,
    labelVal = label.querySelector('.field__file-fake').innerText;

  input.addEventListener('change', function (e) {
    let countFiles = '';
    if (this.files && this.files.length >= 1)
      countFiles = this.files.length;

    if (countFiles)
      label.querySelector('.field__file-fake').innerText = 'Выбрано файлов: ' + countFiles;
    else
      label.querySelector('.field__file-fake').innerText = labelVal;
  });
});

/*=====================================MODAL=====================================*/
/*=====================================MODAL=====================================*/

const modal = document.querySelector('#modal');
const btn = document.querySelector('.send__application-button');
const close = document.querySelector('.close');

btn.onclick = function () {
  modal.style.display = 'block';
  setTimeout(function(){
    location.reload();
  }, 3000);
};

close.onclick = function () {
  modal.style.display = 'none';
  location.reload()
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    location.reload()
  }
};
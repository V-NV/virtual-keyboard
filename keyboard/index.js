

    const cont = document.createElement('div');
    cont.classList.add('cont');
    document.body.append(cont);

    const TextField = document.createElement("textarea");
    TextField.classList.add('textarea');
    cont.append(TextField);
    TextField.setAttribute('autofocus', 'true');
    

    const Klava = document.createElement("div");
    Klava.classList.add('keyboard');
    document.body.appendChild(Klava);
   

    const En_Ru = document.createElement("p");
    cont.appendChild(En_Ru);
    En_Ru.classList.add('EnRu');
    En_Ru.innerHTML = 'Не хватает времени, пожалуйста оставьте свой дискорд <br> по нажатию и клику работают только цифры и буквы <br>';


  
const keyboardRu = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,8];
const keyboardRu2 = [1081,1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079,1093, 1098,92];
const keyboardRu3 = [1092, 1099, 1074, 1072, 1087, 1088, 1086,1083, 1076, 1078, 1101]; 
const keyboardRu4 = [1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073,1102,46];

const keyboardEn = [];
const keyboardEn2 = [];
const keyboardEn3 = [];
const keyboardEn4 = [];


/*document.onkeypress = function (event)  {
console.log(event);
keyboard.push(event.charCode);
console.log(keyboard)
}*/
function rukla(){
let out='', out2='', out3= '', out4= '';

for (let i = 0 ; i< keyboardRu.length;i++){
    if(keyboardRu[i] == 8){out+='<p class="backspace"">Backspace</p>'} else{
    out += '<div class="keys" data="'+keyboardRu[i]+'">'+String.fromCharCode(`${keyboardRu[i]}`)+'</div>';
}};
for (let i = 0 ; i< keyboardRu2.length;i++){
    out2 += '<div class="keys" data="'+keyboardRu2[i]+'">'+String.fromCharCode(`${keyboardRu2[i]}`)+'</div>';
};
for (let i = 0 ; i< keyboardRu3.length;i++){
    out3 += '<div class="keys" data="'+keyboardRu3[i]+'">'+String.fromCharCode(`${keyboardRu3[i]}`)+'</div>';
};
for (let i = 0 ; i< keyboardRu4.length;i++){
    out4 += '<div class="keys" data="'+keyboardRu4[i]+'">'+String.fromCharCode(`${keyboardRu4[i]}`)+'</div>';
};
document.querySelector('.keyboard').innerHTML= out+
                 '<p class="tab">Tab</p>'+out2+'<p class="del">Del</p>'+
          '<p class="caps">Caps Lock</p>'+out3+'<p class="enter">Enter</p>'+
          '<p class="shift-l">Shift</p>'+out4+'<p class="up">&#x2191</p>'+'<p class="shift-r">Shift</p>'+
'<p class="ctrl-l">Ctrl</p>'+'<p class="win">Win</p>'+'<p class="alt-l">Alt</p>'+'<p class="space"></p>'+'<p class="alt-r">Alt</p>'+'<p class="ctrl-r">Ctrl</p>'+'<p class="left">&#x2190</p>'+'<p class="down">&#x2193</p>'+'<p class="right">&#x2192</p>';

}
rukla();

/***************lighting letters and numbers on click from keyboard*********************/
document.onkeypress = function (event)  {
   // document.addEventListener('keydown', (event) => {
   //console.log(event.charCode);
    console.log(event.keyCode);
    
    document.querySelector('.keys[data="'+ event.keyCode +'"').classList.add('active');
     

};

document.addEventListener('keyup', (event) => {
    
    document.querySelectorAll('.keyboard .keys').forEach(function(element){
        element.classList.remove('active')
   
})});
/***************letters and numbers on mouse click*********************/
document.onclick = function (event)  {

let keys = document.querySelectorAll('.keys');
let display = document.querySelector('.textarea');
let clear = document.querySelector('.clear');

for (let key of keys) {
  key.onmousedown = function () {
  display.textContent += key.textContent;
  //key.classList.add('active');
  }
}
}







/*
key.onmouseup = function () {
  display.textContent += key.textContent;
  key.classList.remove('active');}


  }
};
clear.onclick = function () {
  display.textContent = '';
};
};
document.addEventListener('onmouseup', (event) => {
    
    document.querySelectorAll('.keyboard .keys').forEach(function(element){
        element.classList.remove('active')


    })})

/********************************lighting-on-mouseclick****************************************/







//document.onkeypress = function (event2)  {
 //   document.querySelector('#keyboard .keys[data="'+event.keyCode+'"]').classList.remove('active');
//

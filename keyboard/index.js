
   

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
    En_Ru.innerHTML = 'Переключение языка левый CTRL + ALT <br> Windows <br>';

    

  
const keyboardRu = [/*1105*/49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,8];
const keyboardRu2 = [1081,1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079,1093, 1098,92];
const keyboardRu3 = [1092, 1099, 1074, 1072, 1087, 1088, 1086,1083, 1076, 1078, 1101]; 
const keyboardRu4 = [1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073,1102,46];

const keyboardEn = [/*96*/49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,8];
const keyboardEn2 = [113,119,101,114,116,121,117,105,111,112,91,93,92];
const keyboardEn3 = [97,115,100,102,103,104,106,107,108,59,39];
const keyboardEn4 = [122,120,99,118,98,110,109,44,46,47];


function rukla(){
    document.querySelector('.textarea').focus();
let out='', out2='', out3= '', out4= '';

for (let i = 0 ; i< keyboardRu.length;i++){
    if(keyboardRu[i] == 8){out+='<p class="backspace">Backspace</p>'} else{
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
document.querySelector('.keyboard').innerHTML= '<p class="ru" id="lang">ё</p>'+out+
                 '<p class="tab">Tab</p>'+out2+'<p class="del">Del</p>'+
          '<p class="caps">Caps Lock</p>'+out3+'<p class="enter">Enter</p>'+
          '<p class="shift-l">Shift</p>'+out4+'<p class="up">&#x2191</p>'+'<p class="shift-r">Shift</p>'+
'<p class="ctrl-l">Ctrl</p>'+'<p class="win">Win</p>'+'<p class="alt-l">Alt</p>'+'<p class="space"></p>'+'<p class="alt-r">Alt</p>'+'<p class="ctrl-r">Ctrl</p>'+'<p class="left">&#x2190</p>'+'<p class="down">&#x2193</p>'+'<p class="right">&#x2192</p>';

}
rukla();

function enkla(){
    document.querySelector('.textarea').focus();
    let out='', out2='', out3= '', out4= '';
    
    for (let i = 0 ; i< keyboardEn.length;i++){
        if(keyboardEn[i] == 8){out+='<p class="backspace">Backspace</p>'} else{
        out += '<div class="keys" data="'+keyboardEn[i]+'">'+String.fromCharCode(`${keyboardEn[i]}`)+'</div>';
    }};
    for (let i = 0 ; i< keyboardEn2.length;i++){
        out2 += '<div class="keys" data="'+keyboardEn2[i]+'">'+String.fromCharCode(`${keyboardEn2[i]}`)+'</div>';
    };
    for (let i = 0 ; i< keyboardEn3.length;i++){
        out3 += '<div class="keys" data="'+keyboardEn3[i]+'">'+String.fromCharCode(`${keyboardEn3[i]}`)+'</div>';
    };
    for (let i = 0 ; i< keyboardEn4.length;i++){
        out4 += '<div class="keys" data="'+keyboardEn4[i]+'">'+String.fromCharCode(`${keyboardEn4[i]}`)+'</div>';
    };
    document.querySelector('.keyboard').innerHTML= '<p class="en" id="lang">`</p>'+out+
                     '<p class="tab">Tab</p>'+out2+'<p class="del">Del</p>'+
              '<p class="caps">Caps Lock</p>'+out3+'<p class="enter">Enter</p>'+
              '<p class="shift-l">Shift</p>'+out4+'<p class="up">&#x2191</p>'+'<p class="shift-r">Shift</p>'+
    '<p class="ctrl-l">Ctrl</p>'+'<p class="win">Win</p>'+'<p class="alt-l">Alt</p>'+'<p class="space"></p>'+'<p class="alt-r">Alt</p>'+'<p class="ctrl-r">Ctrl</p>'+'<p class="left">&#x2190</p>'+'<p class="down">&#x2193</p>'+'<p class="right">&#x2192</p>';
    
    }


   
    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && (event.code === 'AltLeft' && lang.textContent == 'ё')) {
            enkla();
            
        }
        else if (event.ctrlKey && event.code === 'AltLeft'){
            rukla();
           
        }   
        
       

      });
      
    

/***************lighting letters and numbers on click from keyboard*********************/
document.onkeypress = function (event)  {

    //document.querySelector('.textarea').focus();

   // document.addEventListener('keydown', (event) => {
   //console.log(event.charCode);
    console.log(event.keyCode);
    
    document.querySelector('.keys[data="'+ event.charCode +'"').classList.add('active');
     

};

document.addEventListener('keyup', (event) => {
    
    document.querySelectorAll('.keyboard .keys').forEach(function(element){
        element.classList.remove('active')
        
})});
/***************letters and numbers on mouse click*********************/
document.onclick = function (event)  {
   //o event.preventDefault();
    document.querySelector('.textarea').focus();

let keys = document.querySelectorAll('.keys,.ru,.en');
let display = document.querySelector('.textarea');
//let clear = document.querySelector('.clear');

for (let key of keys) {
  key.onmousedown = function () {
  display.textContent += key.textContent;
  key.classList.add('active');
  }
};
document.querySelectorAll('.keys,.ru,.en').forEach(function(element){
    element.classList.remove('active')
})




/*clear.onmousedown = function () {
  display.textContent = '';
};*/
};

/*
document.addEventListener('onmouseup', (event) => {
    
    document.querySelectorAll('.keyboard .keys').forEach(function(element){
        element.classList.remove('active')


    })})

/********************************lighting-on-mouseclick****************************************/
//document.addEventListener('keydown', function (event) {
    /* virtual keyboard animation when using real keyboard */
    /*document.querySelector('.textarea').focus();

    let keycode = event.code;
    if (keycode == 'CapsLock') {
        addCaps();
    }
    else if (keycode == 'ShiftLeft' || keycode == 'ShiftRight') {
        addShift();
        event.target.addEventListener('keyup', removeShift);
    } else {
        if (keycode == 'AltLeft' || keycode == 'AltRight') {
            event.preventDefault();
        }
        if (keycode == 'Tab') {
            addTab();
            event.preventDefault();
        }
        let keyClass = document.querySelector(`.${keycode}`).classList;
        if (!keyClass.contains('keys')) {
            keyClass.add('active');
        } else {
            keyClass.add('active');
        }

        document.addEventListener('keyup', function () {
            if (keyClass.contains('active')) {
                keyClass.remove('active');
            } else {
                keyClass.remove('active');
            }
        });
    }
});*/








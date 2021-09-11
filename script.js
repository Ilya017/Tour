let price;
let a = prompt('Введите страну:');
let hot = confirm("Горячий тур?");
switch(a)
{
   case 'Турция':
    price = 200;
   break;
   case 'Англия':
    price = 500;
     break;
   case 'Венгрия':
       price = 600;
    break;
   case 'Египет':
    price = 1000; break;
   default: price='В нашем турагентсве такой страны нет'
}
if(hot == true) {
    price = price -(price * 0.2);
}
alert(price);
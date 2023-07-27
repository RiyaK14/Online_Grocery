const fruit=["fruit","Apples","Pears","Banana","Oranges","Strawberries","Lychee","Figs","Dates","Guaua","Chikoo","Dragon Fruit","Papaya"];
const snack=["snaks","dairy","Butter","Kurkure","Lays","Milk","bhujiya","Cheese Slices","Cornito","chips","Pringles", "Peppy"];
const kitchen=["kitchen","steel glass","clock","Incense stick","bedsheet", "Container","cookware","Dinner set","container set","Cloth Dryer Stand"];
const vege=["vegetables","Spinach","Bitter Gourd","Lady Finger","Coriander","","Eggplant","Peas","Capcicum","Carrot","Beet","Cucumber","Corn"];
const hygine=["hygine", "Sanitary pads", "Ear buds", "Nucleya Sanitary pads", "floor cleaner","Toothbrush","Vigini cream","Hand rub","feeding bottle","Sanitizer","Garbage bag"];

/*const firebaseConfig = {
  Important to add database
};*/

firebase.initializeApp(firebaseConfig);
var cart = firebase.database().ref('Cart');

//Cart
function tog(){ 
  window.location.href = "cart.html";
} 


//Add to Cart
(function(){
  
    const cartbtn = document.querySelectorAll('.add');
    cartbtn.forEach(function(btn){

        btn.addEventListener("click", function(event){
           //console.log(event.target);
            if(event.target.classList.contains("add"))
            //console.log("hi");
{   
    let fullpath= event.target.parentElement.children[0].src;


    let pos = fullpath.indexOf('img')+47;
    let partpath = fullpath.slice(pos);
   // console.log(partpath);

    const item = {pos};
    item.img= partpath;

    let name=event.target.parentElement.children[2].textContent;

    let price=event.target.parentElement.children[4].textContent;

item.price=price;
item.name=name;
const cartitem= document.createElement('div');
cartitem.classList.add('product');

saveMessage(item.name,item.img,item.price);

}});
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});
})();

const saveMessage = (name,img,price) => {
    var product = cart.push();

    product.set({
       name: name,
       img: img,
       price: price
    })
 }

 function getElementVal(id){
   return document.getElementById(id).value;
 }


 search.addEventListener('keypress', function (e){ 
  if (e.key === 'Enter') {
  window.location.href ="fruits.html";
  const searchitem=e.target.value;
  if(fruit.includes(searchitem)){
    console.log("hiiiiiiiii");
  window.location.href ="fruits.html";
  }
  else if(snack.includes(searchitem)){
    window.location.href ="snacks.html";
  }
  else if(kitchen.includes(searchitem)){
    window.location.href ="kitchen.html";    
  }
  else if(vege.includes(searchitem)){
    window.location.href ="Vegetables.html";   
  }
  else if(hygine.includes(searchitem)){
    window.location.href ="hygine.html";
  }
  }
});


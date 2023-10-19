const btn = document.getElementById('menu');
const close = document.getElementById('close');
const btn1 = document.getElementById('mobile_item');

btn.addEventListener("click", ()=>{
    btn.classList.toggle('btn1');
    btn1.classList.toggle('flex')
    btn1.classList.toggle('hidden')
})

close.addEventListener("click",()=>{
    btn1.classList.toggle('hidden');
})



//Image clicking

const images = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
];
const frame = document.getElementById('change');
const thumbnails = document.querySelectorAll(".thumbnail");
const bordering = document.querySelectorAll(".add");
bordering[0].classList.add('add_border');
thumbnails[0].classList.add('bluring');
let current_index = 0;


thumbnails.forEach((thumbnail,index)=>{
    thumbnail.addEventListener('click' , ()=>{
        
        if(current_index > -1){
            thumbnails[current_index].classList.remove('bluring');
            bordering[current_index].classList.remove('add_border');
        }
        thumbnails[index].classList.add('bluring');
        bordering[index].classList.add('add_border');
        current_index = index;

        const image = images[index];
        const displayImage = new Image();
        displayImage.src = image;
        displayImage.style.borderRadius = "1.5rem";
        frame.innerHTML = "";
        frame.appendChild(displayImage);
    })

})

//cart

const cartClick = document.getElementById('cartclick');
const cartDisplay = document.getElementById('cartview');
cartClick.addEventListener('click', ()=>{
    const hasclass = cartDisplay.classList.contains('cartdisplay');
    if(hasclass){
        cartDisplay.classList.remove('cartdisplay');
    }
    else{
        cartDisplay.classList.add('cartdisplay');
    }
    
})
const probs = document.querySelectorAll(".problem");
probs.forEach((prob,index)=>{
    prob.addEventListener('click',(event)=>{
        event.stopPropagation();
    })
})

document.addEventListener('click',(event)=>{
    if(event.target !== cartDisplay && event.target !== cartClick){
        cartDisplay.classList.add('cartdisplay');
    }
})


// cart items increase and decrease 
const plus = document.getElementById('increment');
const minus = document.getElementById('decrement');
const screen = document.getElementById('values');
var result = 0;
plus.addEventListener('click',()=>{
    result=result+1;
    screen.innerHTML = result;
})
minus.addEventListener('click',()=>{
    if(result>0){
        result=result-1;
        screen.innerHTML = result;
    }
})

const add_to_cart =document.getElementById('add_to_cart');
const cartValue = document.getElementById('cartvalue');
const cartEmpty = document.getElementById('cartempty');
const cartFull = document.getElementById('cartfull');
const items = document.getElementById('items');
var cost = document.getElementById('cost');
const remove = document.getElementById('remove');
add_to_cart.addEventListener('click',()=>{
    if(result>0){
        cartEmpty.classList.add('cartdisplay');
        cartValue.classList.remove('cartdisplay');
        cartFull.classList.remove('cartdisplay');
        items.innerHTML = result;
        cost.innerHTML = result*125;
    }
    else{
        cartValue.classList.add('cartdisplay');
        cartEmpty.classList.remove('cartdisplay');
    }
    cartValue.innerHTML = result;
})
remove.addEventListener('click',()=>{
    cartFull.classList.add('cartdisplay');
    cartEmpty.classList.remove('cartdisplay');
    cartValue.classList.add('cartdisplay');
})




// image slider

const previous = document.getElementById("left_arrow");
const next = document.getElementById("right_arrow");
let i = 0;
next.addEventListener('click',()=>{
    i = i + 1;
    if(i>3){
        i = 0;
    }
    const image = images[i];
    const displayImage = new Image();
    displayImage.src = image;
    frame.innerHTML = "";
    frame.appendChild(displayImage);
})

previous.addEventListener('click',()=>{
    i = i - 1;
    if(i<0){
        i = 3;
    }
    const image = images[i];
    const displayImage = new Image();
    displayImage.src = image;
    frame.innerHTML = "";
    frame.appendChild(displayImage);
})


//model box
const modalbg = document.getElementById('modal_bg');
const modalbox = document.getElementById('modal_box');
// const modalclick = document.getElementById("modalclick");
frame.addEventListener('click',()=>{
    modalbg.classList.remove('cartdisplay');
    modalbox.classList.remove('cartdisplay');
})
const close_modal = document.getElementById('closing');
close_modal.addEventListener('click',()=>{
    modalbg.classList.add('cartdisplay');
    modalbox.classList.add('cartdisplay');
})




const box = document.getElementById('bgimage');
const thumbnails_modal = document.querySelectorAll(".thumbnails");
const bordering_modal = document.querySelectorAll(".adds");
bordering_modal[0].classList.add('add_border');
thumbnails_modal[0].classList.add('bluring');
let currentmodal_index = 0;


thumbnails_modal.forEach((thumbnails,indexs)=>{
    thumbnails.addEventListener('click' , ()=>{
        
        if(currentmodal_index > -1){
            thumbnails_modal[currentmodal_index].classList.remove('bluring');
            bordering_modal[currentmodal_index].classList.remove('add_border');
        }
        thumbnails_modal[indexs].classList.add('bluring');
        bordering_modal[indexs].classList.add('add_border');
        currentmodal_index = indexs;

        const image_modal = images[indexs];
        const displayImage_modal = new Image();
        displayImage_modal.src = image_modal;
        displayImage_modal.style.borderRadius = "1.5rem";
        box.innerHTML = "";
        box.appendChild(displayImage_modal);
    })

})


const previous_modal = document.getElementById("leftmodal_arrow");
const next_modal = document.getElementById("rightmodal_arrow");
let j = 0;
next_modal.addEventListener('click',()=>{
    const k = j;
    j = j + 1;
    if(j>3){
        j = 0;
        thumbnails_modal[k].classList.remove('bluring');
        bordering_modal[k].classList.remove('add_border');

        thumbnails_modal[j].classList.add('bluring');
        bordering_modal[j].classList.add('add_border');
    }
    else{
        thumbnails_modal[k].classList.remove('bluring');
        bordering_modal[k].classList.remove('add_border');

        thumbnails_modal[j].classList.add('bluring');
        bordering_modal[j].classList.add('add_border');
    
    }
    const image = images[j];
    const displayImage = new Image();
    displayImage.src = image;
    displayImage.style.borderRadius = "1.5rem";
    box.innerHTML = "";
    box.appendChild(displayImage);
})

previous_modal.addEventListener('click',()=>{
    const k = j;
    j = j - 1;
    if(j<0){
        j = 3;
        thumbnails_modal[k].classList.remove('bluring');
        bordering_modal[k].classList.remove('add_border');

        thumbnails_modal[j].classList.add('bluring');
        bordering_modal[j].classList.add('add_border');
    }
    else{
        thumbnails_modal[k].classList.remove('bluring');
        bordering_modal[k].classList.remove('add_border');

        thumbnails_modal[j].classList.add('bluring');
        bordering_modal[j].classList.add('add_border');
    
    }
    const image = images[j];
    const displayImage = new Image();
    displayImage.src = image;
    displayImage.style.borderRadius = "1.5rem";
    box.innerHTML = "";
    box.appendChild(displayImage);
})
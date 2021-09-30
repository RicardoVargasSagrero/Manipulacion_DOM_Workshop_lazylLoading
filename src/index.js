/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import {registerImage} from './lazy';

const maximum = 122;
const minimum = 1;
const random = () =>
    Math.floor(Math.random() * (maximum - minimum)) + minimum;

const createImageNode = () =>{
    const container = document.createElement('div');
    container.className = 'p-4';
    
    const imagen = document.createElement("img");
    imagen.className = "mx-auto";
    imagen.width = "320";
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
    container.appendChild(imagen);

    return container;
}

const mountNode = document.getElementById('images');

const addButton = document.getElementById('Agregar-img');
const addImage = () => {
    console.log('Adding images')
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
}
addButton.addEventListener('click', addImage);

const deleteButton = document.getElementById('button-limpiar-id');

const removeAllChildNodes = (parent) =>{
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
const image_container = document.getElementById('images');
deleteButton.addEventListener('click',function(){removeAllChildNodes(image_container);});
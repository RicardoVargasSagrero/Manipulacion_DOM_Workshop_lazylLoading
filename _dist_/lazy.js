const isIntersecting = (entry) => {
    return entry.isIntersecting //True(dentro de la pantalla)
};

const loadImage = (entry) => {
    console.log("Observable");
    const container = entry.target; //container (DIV)
    
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    //Carga de imagen
    imagen.src = url;

    console.log(container.nodeName);
    observer.unobserve(container);
};


const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage)
});

export const registerImage = (imagen) => {
    //Intersection Observer -> Observer(imagen)
    observer.observe(imagen);
}
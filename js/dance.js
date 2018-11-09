const settings = {
    controls : document.querySelectorAll('.carousel__control'), 
    images : [
        'chris-yang-501380-unsplash.jpg', 
        'photo-1508807526345-15e9b5f4eaff.jpg'
        ],   
    imageFolder : 'img/',
    hero : document.querySelector('.hero'),
}


const carousel = function ({ controls, images, imageFolder, hero }) {
    let index = 0;

    const init = () => {
        controls.forEach(
           control => control.addEventListener('click', controlClick)
        )
    }

    const changeBackgroundImage = () => {
        hero.style.backgroundImage = `url('${imageFolder}${images[index]}')`;
    }

    const controlClick = () => {
        index = (index+1)%images.length;
        changeBackgroundImage();
    }

    return {
        init
    }

}(settings);

carousel.init();
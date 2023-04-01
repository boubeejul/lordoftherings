function addEventListenersCard () {
    const cardElements = document.getElementsByClassName('card');

    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

function handleMouseLeave() {
    this.classList.remove('card--hovered');
    document.body.id = '';
}

function handleMouseEnter(){
    this.classList.add('card--hovered');
    document.body.id = `${this.id}--hovered`;
}

document.addEventListener("DOMContentLoaded", addEventListenersCard, false);

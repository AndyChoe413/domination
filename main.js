
//line-through//
const lineOut = () => {
    document.querySelector('ul > li').style.textDecoration = 'line-through'; 
};

lineOut()

//New appended images//
const images = (id, url) => {
    document.getElementById(id).src = url;
};

images('image-1', 'https://i.pinimg.com/originals/f3/5e/48/f35e48e008d5c394be5e152795760b00.jpg');
images('image-2', 'https://www.jplondondesign.com/content/images/thumbs/0001488_space-cat-riding-unicorn.jpeg');
images('image-3','https://i.ytimg.com/vi/frF89eoWCS4/maxresdefault.jpg');
 

//Removing last LI//
const remove = () => {
    const lastLi = document.getElementById('arguments');
    lastLi.removeChild(lastLi.lastChild)
}

remove()
remove()

//Changing font-sizes//
const textChange = (id, size) => {
    document.querySelector(id).style.fontSize = size;
}

textChange('h1', '100px')

//appending child element to parent container
const append = element => {
    const parentContainer = document.querySelector('ul');
    parentContainer.appendChild(element)
}
const newEl = document.createElement('img')
// element.src = 'https://i.pinimg.com/originals/f3/5e/48/f35e48e008d5c394be5e152795760b00.jpg';
append(newEl)
console.log(newEl)

//changing height of images//
const newImg = img => {
    img.style.height = '30px'
}

//resizing images//
const resizedImg = document.querySelector('#image-1')
newImg(resizedImg)

//making elements disappear
const disappear = el => {
    el.className = 'invisible' 
}

const makeDisappear = document.querySelector('h1')
disappear(makeDisappear)

//Adding new text to li//
const newText = text => {
    const newElement = document.createElement('li')
    newElement.innerText = text
    return newElement
}

const addingNewText = newText('WASSSSSUUUUUPPPPP!!!!!')
append(addingNewText)

//New header text size//
const newHeader = (headerSize, text) => {
    const newEl = document.createElement(`h${headerSize}`)
    newEl.innerText = text
    return newEl
}

const header = newHeader('2', 'Holy Smokes!')
append(header)
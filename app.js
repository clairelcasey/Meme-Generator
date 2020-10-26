const form = document.querySelector('form');
const imgInput =document.querySelector('input[name="img"')
const topLineInput =document.querySelector('input[name="top-line"')
const bottomLineInput =document.querySelector('input[name="bottom-line"')
const memeContainer = document.querySelector('#meme-container')

form.addEventListener('submit', function(event) {
    console.log('submitted');
    event.preventDefault();
    const newMeme = makeMeme(imgInput.value, topLineInput.value, bottomLineInput.value);
    memeContainer.appendChild(newMeme);
    imgInput.value = '';
    topLineInput.value = '';
    bottomLineInput.value = '';
});

function makeMeme(img, topLine, bottomLine) {
    const meme = document.createElement('div');
    const memeFlex = document.createElement('div');
    const topLineInput = document.createElement('h4');
    const bottomLineInput =document.createElement('h4');
    const imageInput = document.createElement('IMG');
    const removeContainerInput = document.createElement('div');
    const removeTextInput = document.createElement('h3');

    topLineInput.innerText = topLine;
    topLineInput.classList.add('top-text');
    bottomLineInput.innerText = bottomLine;
    bottomLineInput.classList.add('bottom-text');
    imageInput.src = img;

    removeTextInput.innerText = 'X';
    removeTextInput.classList.add('remove-text');
    removeContainerInput.classList.add('remove-text-container');
    removeContainerInput.append(removeTextInput);

    memeFlex.classList.add('meme-flex');
    meme.classList.add('meme');
    meme.append(imageInput, topLineInput, bottomLineInput, removeContainerInput);
    memeFlex.append(meme);
    return memeFlex
}

memeContainer.addEventListener('click', function(event) {
    event.target.parentElement.parentElement.remove();
})
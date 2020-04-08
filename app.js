
const API_KEY = 'htk1gztHtzOFfTN9J8KSVdU4RGgWzwwu';

const form = document.querySelector('#searchForm');
const input = document.querySelector('#search');
const searchBtn = document.querySelector('#searchBtn');

async function getGIF(keyword){
  try {
    const url = `https://api.giphy.com/v1/gifs/search`;
    const res = await axios.get(url, { params: { q: keyword, api_key: API_KEY } });
    const gifContainer = document.querySelector("#gifContainer");
    const newImg = document.createElement('img');
    const index = Math.floor(Math.random() * res.data.data.length)
    
    newImg.src = res.data.data[index].images.original.url;
    gifContainer.append(newImg);
  } catch(e){
    alert("please enter a search term.")
  }
}

function findGIF(e){
  e.preventDefault();
  getGIF(input.value);
  input.value = '';
}

function removeImages(){
  const removeBtn = document.querySelector('#removeBtn')
  removeBtn.addEventListener('click', function(el){
    while(el.firstChild)
    el.removeChild(el.firstChild);
  })
}

searchBtn.addEventListener('click', findGIF)

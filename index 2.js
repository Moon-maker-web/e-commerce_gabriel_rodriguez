const h1 = document.querySelector ("h1");
h1.innerText = ("productos");


function cards () {
let array = [];

for (let i = 0; i < 10; i++) {
    
    const card =
       ` <div class="card" style="width: 18rm;">
        <a href="#"><img src= "https://imgs.search.brave.com/NlQnWB1LPEIlyTVyEZoFbw-IZ8WIDfVIEPlgnXwL_zM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFsMFQ1RXFhMkwu/X0FDLl9TUjE4MCwy/MzAuanBn"
        <div class="card-body">
          <h5 class="card-title">celulares ${i}</h5>
          <p class="card-text"></p>
          <a href="producto.html" class="btn btn-primary">ver mas</a>
        </div>
      </div> `

      array.push(card);
}

document.querySelector('.container').innerHTML = array.join("");
}
cards();
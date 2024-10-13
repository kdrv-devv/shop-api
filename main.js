fetch("https://fakestoreapi.com/products")
  .then((item) => item.json())
  .then((value) => {
    console.log(value);

    const all__cards = document.querySelector(".all__cards");

    value.forEach((element) => {
      all__cards.innerHTML += `
        <div class="card2">
          <div class="card__img">
            <img src="${element.image}" alt="This is img" />
            <div class="mensen">
              <i class="fa-regular fa-heart"></i>
            </div>
          </div>
  
          <div class="card__text">
            <h2>${element.title}</h2>
            <p>${element.price}</p>
  
            <div class="btn">
              <div class="btnn">
                <button class="btnnn">Buy</button>
              </div>
              <div class="korzinka">
                <i class="fa-solid fa-cart-shopping"></i>
                <div class="start">
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    let mens = document.querySelector(".mens");
    let womens = document.querySelector(".womens");
    let all = document.querySelector(".all")
    let electr = document.querySelector(".electr")
    mens.addEventListener("click", () => {
      all__cards.innerHTML = ""; 

      value.forEach((element) => {
        if (element.category === "men's clothing") {
          all__cards.innerHTML += `
            <div class="card2">
              <div class="card__img">
                <img src="${element.image}" alt="This is img" />
                <div class="mensen">
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
      
              <div class="card__text">
                <h2>${element.title}</h2>
                <p>${element.price}</p>
      
                <div class="btn">
                  <div class="btnn">
                    <button class="btnnn">Buy</button>
                  </div>
                  <div class="korzinka">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <div class="start">
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
        }
      });
    });

    

    
    womens.addEventListener("click", () => {
      all__cards.innerHTML = ""; 
      
      value.forEach((element) => {
        if (element.category === "women's clothing" ||element.category === "jewelery") {
          all__cards.innerHTML += `
            <div class="card2">
              <div class="card__img">
                <img src="${element.image}" alt="This is img" />
                <div class="mensen">
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
      
              <div class="card__text">
                <h2>${element.title}</h2>
                <p>${element.price}</p>
      
                <div class="btn">
                  <div class="btnn">
                    <button class="btnnn">Buy</button>
                  </div>
                  <div class="korzinka">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <div class="start">
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
        }
      });
    });


    electr.addEventListener("click", () => {
      all__cards.innerHTML = ""; 

      value.forEach((element) => {
        if (element.category === "electronics") {
          all__cards.innerHTML += `
            <div class="card2">
              <div class="card__img">
                <img src="${element.image}" alt="This is img" />
                <div class="mensen">
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
      
              <div class="card__text">
                <h2>${element.title}</h2>
                <p>${element.price}</p>
      
                <div class="btn">
                  <div class="btnn">
                    <button class="btnnn">Buy</button>
                  </div>
                  <div class="korzinka">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <div class="start">
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
        }
      });
    });




     
    all.addEventListener("click", () => {
      all__cards.innerHTML = ""; 

      value.forEach((element) => {
          all__cards.innerHTML += `
            <div class="card2">
              <div class="card__img">
                <img src="${element.image}" alt="This is img" />
                <div class="mensen">
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
      
              <div class="card__text">
                <h2>${element.title}</h2>
                <p>${element.price}</p>
      
                <div class="btn">
                  <div class="btnn">
                    <button class="btnnn">Buy</button>
                  </div>
                  <div class="korzinka">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <div class="start">
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
      });
    });




  })
  .catch((error) => console.log("error", error));

window.addEventListener("scroll", function () {
  let scrollElement = document.querySelector(".sort");
  if (window.scrollY >= 300) {
    scrollElement.classList.add("right");
  } else {
    scrollElement.classList.remove("right");
  }
});

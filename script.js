// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container"); //select section
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"; //github with img

for (let i = 1; i <= 1025; i++) {
  //1026 empty img

  const pokemon = document.createElement("div"); //create a div element for new element
  pokemon.classList.add("pokemon"); //add style  { display: inline-block; put in row img} text-align: center; {center text}
  const label = document.createElement("span"); //add a span for the numbers
  label.innerText = `#${i}`; //add number for entry
  const newImg = document.createElement("img"); //create a new img for the img
  newImg.src = `${baseURL}${i}.png`; //add src

  pokemon.appendChild(newImg); //append img after every div
  pokemon.appendChild(label); //append span after every div
  container.appendChild(pokemon); //append div in section

  /**
   * <section>
   *    <div>
   *        <img>
   *        <span></span>
   *    </div>
   *  </section>
   */
}

let chilliText = `<h2 class="text-center">Chilli Con Carne</h2>
<div class="recipe-text">
  <h3 class="text-center">Ingredients</h3>
  <ul class="recipe-ingredients">
    <li>Lorem ipsum dolor sit amet</li>
    <li>consectetur adipisicing elit</li>
    <li>sed do eiusmod tempor incididunt</li>
    <li>ut labore et dolore magna aliqua</li>
    <li>Ut enim ad minim veniam</li>
    <li>quis nostrud exercitation</li>
    <li>ullamco laboris nisi</li>
  </ul>
  <h3 class="text-center">Instructions</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>`;


document.getElementById("recipe-chilli").addEventListener("click", replaceChilli);

function replaceChilli() {
    document.getElementById("recipe-template").innerHTML = chilliText;
}

let felafalText = `<h2 class="text-center">Felafal</h2>
<div class="recipe-text">
  <h3 class="text-center">Ingredients</h3>
  <ul class="recipe-ingredients">
    <li>Lorem ipsum dolor sit amet</li>
    <li>consectetur adipisicing elit</li>
    <li>sed do eiusmod tempor incididunt</li>
    <li>ut labore et dolore magna aliqua</li>
    <li>Ut enim ad minim veniam</li>
    <li>quis nostrud exercitation</li>
    <li>ullamco laboris nisi</li>
  </ul>
  <h3 class="text-center">Instructions</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>`;


document.getElementById("recipe-felafal").addEventListener("click", replaceFelafal);

function replaceFelafal() {
    document.getElementById("recipe-template").innerHTML = felafalText;
}

let pastaText = `<h2 class="text-center">Pasta With Tomato Sauce</h2>
<div class="recipe-text">
  <h3 class="text-center">Ingredients</h3>
  <ul class="recipe-ingredients">
    <li>Lorem ipsum dolor sit amet</li>
    <li>consectetur adipisicing elit</li>
    <li>sed do eiusmod tempor incididunt</li>
    <li>ut labore et dolore magna aliqua</li>
    <li>Ut enim ad minim veniam</li>
    <li>quis nostrud exercitation</li>
    <li>ullamco laboris nisi</li>
  </ul>
  <h3 class="text-center">Instructions</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>`;


document.getElementById("recipe-pasta").addEventListener("click", replacePasta);

function replacePasta() {
    document.getElementById("recipe-template").innerHTML = pastaText;
}

let guacamoleText = `<h2 class="text-center">Guacamole</h2>
<div class="recipe-text">
  <h3 class="text-center">Ingredients</h3>
  <ul class="recipe-ingredients">
    <li>Lorem ipsum dolor sit amet</li>
    <li>consectetur adipisicing elit</li>
    <li>sed do eiusmod tempor incididunt</li>
    <li>ut labore et dolore magna aliqua</li>
    <li>Ut enim ad minim veniam</li>
    <li>quis nostrud exercitation</li>
    <li>ullamco laboris nisi</li>
  </ul>
  <h3 class="text-center">Instructions</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>`;


document.getElementById("recipe-guac").addEventListener("click", replaceGuac);

function replaceGuac() {
    document.getElementById("recipe-template").innerHTML = guacamoleText;
}

let spiceMixText = `<h2 class="text-center">Chilli Spice Mix</h2>
<div class="recipe-text">
  <h3 class="text-center">Ingredients</h3>
  <ul class="recipe-ingredients">
    <li>Lorem ipsum dolor sit amet</li>
    <li>consectetur adipisicing elit</li>
    <li>sed do eiusmod tempor incididunt</li>
    <li>ut labore et dolore magna aliqua</li>
    <li>Ut enim ad minim veniam</li>
    <li>quis nostrud exercitation</li>
    <li>ullamco laboris nisi</li>
  </ul>
  <h3 class="text-center">Instructions</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>`;


document.getElementById("recipe-spicemix").addEventListener("click", replaceSpiceMix);

function replaceSpiceMix() {
    document.getElementById("recipe-template").innerHTML = spiceMixText;
}

document.getElementById("search-button").addEventListener("click", () => {
    const searchInput = document.getElementById("search-input");
    if (searchInput.value == "") {
        showMessage("Write something in the search box first.");
        return;
    }
    searchFoods(searchInput.value);
    searchInput.value = "";
});

const searchFoods = (foodName) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    fetch(url)
        .then(response => response.json())
        .then(json => displayFoods(json.meals));
};

const displayFoods = (foods) => {
    const foodDisplay = document.getElementById("food-display");
    foodDisplay.innerHTML = "";

    if (foods == null) {
        showMessage("No item is found. Try with a different keyword.");
        return;
    }

    foods.forEach(food => {
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
        <div class="card">
            <img src="${food.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${food.strMeal}</h5>
                <p class="card-text">${food.strInstructions}</p>
            </div>
        </div>
        `;
        foodDisplay.appendChild(div);
    });
};

const showMessage = message => {
    const foodDisplay = document.getElementById("food-display");
    foodDisplay.innerHTML = "";

    const p = document.createElement("p");
    p.innerText = message;
    foodDisplay.appendChild(p);
};
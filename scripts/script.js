document.getElementById("search-button").addEventListener("click", () => {
    const searchInput = document.getElementById("search-input");
    searchFoods(searchInput.value);
    searchInput.value = "";
});

const searchFoods = (foods) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foods}`;
    fetch(url)
        .then(response => response.json())
        .then(json => displayFoods(json.meals));
};

const displayFoods = (foods) => {
    const foodDisplay = document.getElementById("food-display");
    foodDisplay.innerHTML = "";

    if (foods == null) return;

    foods.forEach(food => {
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
        <div class="card h-100">
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
const searchBar = document.querySelector(".search-bar");

searchBar.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        searchBar.value = "";
    }
})
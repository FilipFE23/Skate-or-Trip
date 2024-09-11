const newCategory = document.getElementById('newCategory');
const addCategoryBtn = document.getElementById('addCategoryBtn');
const category = document.getElementById('category');

addCategoryBtn.addEventListener("click", ()=>{
    const newOption = document.createElement('option');
    newOption.textContent = newCategory.value;
    category.appendChild(newOption);
    newCategory.value = "";
});
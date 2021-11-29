document.addEventListener('DOMContentLoaded', () => {

  // When the form is submitted, access the data from the form in the form's submit `event` object
  
  
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = (event) => {
  event.preventDefault();

  const repositoriesList = document.querySelector('#repositories-list');
  const repositoriesListItem = createRepositoriesListItem(event.target);
  repositoriesList.appendChild(repositoriesListItem);

  event.target.reset();
}

const createRepositoriesListItem = (form) => {
  
  
  
  // Create a list in HTML
  const repositoriesListItem = document.createElement('li');
  // Add class for accessibility
  repositoriesListItem.classList.add('repositories-list-item');


  // const title = { key: form.title.value, value: h2 }; 
  // const link = form.link.value;
  // const value = form.language.value;

  items = [form.title.value, form.link.value, form.language.value];

  items.forEach((element) => {
    elementItem = document.createElement('h2')
    elementItem.textContent = element;
    repositoriesListItem.appendChild(elementItem);
  })
  
  // // create elements for specific form value 
  // const title = document.createElement('h2');
  // // set the content of element to the input value
  // title.textContent = form.title.value;
  // // Append the submitted data to the list
  // repositoriesListItem.appendChild(title);

  // const link = document.createElement('a');
  // link.href = form.link.value;
  // link.textContent = form.link.value;
  // repositoriesListItem.appendChild(link);

  // const language = document.createElement('p');
  // language.textContent = form.language.value;
  // repositoriesListItem.appendChild(language);

  return repositoriesListItem;
}
// Add a "Delete All" `<button>` which clears all of the list items from the list
const handleDeleteAllClick = function (event) {
  const repositoriesList = document.querySelector('#repositories-list');
  repositoriesList.innerHTML = '';
}

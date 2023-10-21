const content = document.querySelector('#js-categories');
const contentItem = document.querySelectorAll('.js-item');

console.log(`Number of categories: ${contentItem.length}`);

contentItem.forEach(category => {
  const categoryName = category.firstElementChild.textContent;
  const categoryElements = category.lastElementChild.children.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
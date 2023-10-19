const content = document.querySelector('#js-categories');
const contentItem = document.querySelector('.js-item');

console.log(`Number of categories: ${contentItem.length}`);

contentItem.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
document.addEventListener('DOMContentLoaded', () => {
  const categories = document.querySelectorAll('.skills-category');

  categories.forEach(category => {
    category.setAttribute('tabindex', 0);

    category.addEventListener('focus', () => {
      category.style.borderColor = '#222';
      category.style.backgroundColor = '#ececec';
    });

    category.addEventListener('blur', () => {
      category.style.borderColor = '';
      category.style.backgroundColor = '';
    });
  });
});

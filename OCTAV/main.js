document.addEventListener('DOMContentLoaded', function() {
    const categoryButton = document.querySelector('.toggle-sidebar');
    const closeButton = document.getElementById('close-sidebar');
    const sidebar = document.querySelector('.sidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar li a');
  
    categoryButton.addEventListener('click', function() {
      if (sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
      } else {
        sidebar.classList.add('show');
      }
    });
  
    closeButton.addEventListener('click', function() {
      sidebar.classList.remove('show');
    });
  
    sidebarLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        sidebar.classList.remove('show');
      });
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    const cartCount = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let count = 0;
    
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        cartCount.style.backgroundColor = 'red';
        if (count < 10) {
            count++;
        };
        cartCount.textContent = count;
      });
    });
    
});
  
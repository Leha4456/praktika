document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
      button.addEventListener('click', () => {
          const targetTab = button.getAttribute('data-tab');

          tabButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');

          tabContents.forEach(content => {
              if (content.getAttribute('id') === `tab-${targetTab}`) {
                  content.classList.add('active');
              } else {
                  content.classList.remove('active');
              }
          });
      });
  });
});
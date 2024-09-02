const cardsPerPage = 9; // Number of cards to show per page
    const dataContainer = document.getElementById('data-container');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const pageLinksContainer = document.getElementById('page-links');

    const cards = Array.from(dataContainer.getElementsByClassName('s-card'));
    const totalPages = Math.ceil(cards.length / cardsPerPage);
    let currentPage = 1;

    // Function to display cards for a specific page
    function displayPage(page) {
      const startIndex = (page - 1) * cardsPerPage;
      const endIndex = startIndex + cardsPerPage;
      cards.forEach((card, index) => {
        card.style.display = (index >= startIndex && index < endIndex) ? 'block' : 'none';
      });
    }

    // Function to update pagination buttons and page numbers
    function updatePagination() {
      pageLinksContainer.innerHTML = ''; // Clear existing page links

      // Calculate the range of pages to display
      let startPage = Math.max(currentPage - 1, 1);
      let endPage = Math.min(currentPage + 1, totalPages);

      if (currentPage === 1) {
        endPage = Math.min(3, totalPages);
      } else if (currentPage === totalPages) {
        startPage = Math.max(totalPages - 2, 1);
      }

      // Create and append the page links
      for (let page = startPage; page <= endPage; page++) {
        const pageLink = document.createElement('span');
        pageLink.textContent = page;
        pageLink.classList.add('page-link');
        if (page === currentPage) {
          pageLink.classList.add('active-page');
        }
        pageLink.addEventListener('click', () => {
          currentPage = page;
          displayPage(currentPage);
          backToTop();
          updatePagination();
        });
        pageLinksContainer.appendChild(pageLink);
      }

      prevButton.disabled = currentPage === 1;
      nextButton.disabled = currentPage === totalPages;
    }

    // Event listener for "Previous" button
    prevButton.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
         backToTop();
        displayPage(currentPage);
        updatePagination();
      }
    });
    function backToTop(){
      document.documentElement.scrollTop = 140;
    }

    // Event listener for "Next" button
    nextButton.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        backToTop();
        displayPage(currentPage);
        updatePagination();
      }
    });

    // Initial page load
    displayPage(currentPage);
    updatePagination();
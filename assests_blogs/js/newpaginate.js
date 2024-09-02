let cardPerPage = 9;
 const dataContainer = document.getElementById('data-container');
// let card = document.querySelectorAll('.card')

const cards = Array.from(dataContainer.getElementsByClassName('s-card'))

let ulTag = document.querySelector('.pagination-container');
let totalPage = Math.ceil(cards.length / cardPerPage);
let page = 1;


function displayCards(page) {
      const start = (page - 1) * cardPerPage;
      const end = start + cardPerPage;

      cards.forEach((card, index) => {
        if (index >= start && index < end) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }

function paginate(totalPage, page) {
    let liTag = ''
    let activeLI;
    let beforePage = page - 1;
    let afterPage = page + 1;
    if (page > 1) {
        liTag +=` <li class="prev" onClick= paginate(totalPage,${page- 1})><i class="fa-solid fa-arrow-left"></i> </li>`
    }
    if (page > 2) {
        liTag += ` <li class="num" onClick="paginate(totalPage, 1)">1</li>`
        if (page > 3) {
            liTag +=` <li class="dots">...</li>`
        }
    }

   
     // how many pages show after the active
    if (page == 1) {
         afterPage = afterPage + 2;        
    }else if(page == 2) {
         afterPage = afterPage + 1;
    }

     // how many pages show before  active
    if (page == totalPage) {
         beforePage = beforePage - 2;
        
    }else if(page == totalPage-1) {
         beforePage = beforePage - 1;
    }


    for (let pagelenth = beforePage; pagelenth <= afterPage; pagelenth++) {

        if (pagelenth > totalPage) {
            continue;
        }

        if ( pagelenth == 0) {
            pagelenth = pagelenth + 1; 
        }
        if (pagelenth == page) {
            activeLI = 'activeli'
        } else {
            activeLI = " "
        }
           liTag +=` <li class="num ${activeLI}" onClick="paginate(totalPage, ${pagelenth})" >${pagelenth}</li>`     
    }

     if (page < totalPage-1) {
         if (page < totalPage-2) {
             liTag +=` <li class="dots">...</li>`
            }
        liTag += ` <li class="num" onClick="paginate(totalPage, ${totalPage})">${totalPage}</li>`
    }

    if (page < totalPage) {
        liTag +=` <li class="next" onClick= paginate(totalPage,${page + 1})><i class="fa-solid fa-arrow-right"></i></li>`
    }    

    ulTag.innerHTML = liTag
    
    displayCards(page);
}


paginate(totalPage, page)
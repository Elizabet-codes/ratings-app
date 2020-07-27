const ratings = {
    chimamanda: 4.7,
    chika: 3.4,
    chigozie:4.3,
    lola: 3.3,
    akwaeke: 4.6,
    elnathan: 4.1
  }

  const starsTotal = 5;

  //run get ratings when dom loads

  document.addEventListener('DOMContentLoaded', getRatings);

    // Form Elements
    const writerSelect = document.getElementById('writer-select');
    const ratingControl = document.getElementById('rating-control');

     // Init writer
     let writer;




 // writer select change
 writerSelect.addEventListener('change', (e) => {
    writer = e.target.value;
    // Enable rating control
    ratingControl.disabled = false;
    ratingControl.value = ratings[writer];
  });

  // Rating control change
  ratingControl.addEventListener('change', (e) => {
    const rating = e.target.value;

    // Make sure 5 or under
    if (rating > 5) {
      alert('Please rate 1 - 5');
      return;
    }

    // Change rating
    ratings[writer] = rating;

    getRatings();
  });
























      // Get ratings
      function getRatings() {
        for (let rating in ratings) {
          // Get percentage
          const starPercentage = (ratings[rating] / starsTotal) * 100;
  
          // Round to nearest 10
          const starPercentageRounded=`${Math.round(starPercentage/10)*10}%`;
  
          // Set width of stars-inner to percentage
          document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
  
          // Add number rating
          document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
        }
      }
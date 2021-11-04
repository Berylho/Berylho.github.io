let bookNowBtn = document.getElementById("bookNow")
bookNowBtn.addEventListener("click", function(){
    let userName = document.getElementById("userName")
    let userNameVal = userName.value

    let userEmail = document.getElementById("userEmail")
    let userEmailVal = userEmail.value

    let userPax = document.getElementById("userPax")
    let userPaxVal = userPax.value

    let uMovie = document.getElementById("uMovie")
    let uMovieVal = uMovie.value

    let userRemarks = document.getElementById("userRemarks")
    let userRemarksVal = userRemarks.value

    BookNow(userNameVal, userEmailVal, userPaxVal, uMovieVal, userRemarksVal)
})

function BookNow(userName, userEmail, userPax, uMovie, userRemarks){
    let url = 'https://api.sheety.co/9a9caed8a5606c2e414b15a80334954b/movieApp/bookings';
    let body = {
      booking: {
        name: userName,
        email: userEmail,
        pax: userPax,
        movie:uMovie,
        remarks: userRemarks
      }
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
          "Content-Type": "application/json"
      }
    })
    .then((response) => response.json())
    .then(json => {
      // Do something with object
      console.log(json.booking);
      alert(json.booking.name + " added in the list!")
    });
}
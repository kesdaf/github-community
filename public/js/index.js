

if (document.getElementById('avatar')) {
  document.getElementById('avatar').addEventListener("change", function() {
    let reader = new FileReader()
    reader.onload = function (e) {
      document.querySelector('.form-avatar img').src = e.target.result
    };
    reader.readAsDataURL(this.files[0]);
  });
}


if (document.querySelector('.favorite')) {
  document.querySelectorAll('.favorite').forEach(e => {
    e.addEventListener("submit", function(event) {
      event.preventDefault()
      const that = this
      console.log(this.action)
      axios.post(this.action)
        .then(success => {
          this.parentElement.querySelectorAll('.favorite').forEach(forFav => forFav.classList.toggle('hidden'))
        })
        .catch(err => console.log(err))
    })
  })
}
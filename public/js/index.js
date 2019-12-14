if (document.getElementById('avatar')) {
  document.getElementById('avatar').addEventListener("change", function() {
    let reader = new FileReader()
    reader.onload = function (e) {
      document.querySelector('.form-avatar img').src = e.target.result
    };
    reader.readAsDataURL(this.files[0]);
  });
}

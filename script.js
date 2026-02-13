const toggleBtn = document.getElementById("toggleBtn");
const result = document.getElementById("result");

toggleBtn.addEventListener("click", function () {

    // Switch icons
    this.classList.toggle("bi-plus-lg");
    this.classList.toggle("bi-dash-lg");

    // Check which icon is active
    if (this.classList.contains("bi-dash-lg")) {
        result.textContent = "Hello dwduiwiffuiddoifiofefjifefhfiewfweofwofwfifjeifefijeiefjiejfiefefefefiehfcifeccccchichcijcnocjoic jcococciochiechchcicidcicjiejfepfoefpefefejfejfeiofejfoeejfoejfif";
        result.style.backgroundColor = "gray";
        result.style.width = "50rem"
    } else {
        result.textContent = "";
    }
});


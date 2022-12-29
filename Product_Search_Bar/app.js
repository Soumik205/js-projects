const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    //const storeitems = document.getElementById("product-list")
    const product = document.querySelectorAll(".product")
    const pro_name = document.getElementsByTagName("h2")

    for (var i = 0; i < pro_name.length; i++) {
        let match = product[i].getElementsByTagName("h2")[0];

        if (match) {
            let textvalue = match.innerHTML || match.textContent

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            }
            else {
                product[i].style.display = "none";
            }
        }
    }
}
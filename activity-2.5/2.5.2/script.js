function createListElement() {
        var newListItem = document.createElement("li");
        var input = document.getElementById("ideas");
        if ( input.value.length > 0) {
            newListItem.textContent =input.value;
            document.querySelector('ul').appendChild(newListItem);
        }
//ou bien en une seule ligne
        // document.querySelector('ul').appendChild(document.createElement("li").textContent =document.getElementById("ideas").value)

        document.getElementById("ideas").value = "";
    }

document.getElementById("submit").addEventListener("click", createListElement);


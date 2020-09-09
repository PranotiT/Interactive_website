function updateResult(query) {
    let resultList = document.querySelector(".result");
    resultList.innerHTML = "";

    arr.map(function(algo){
        query.split(" ").map(function (word){
            if(algo.toLowerCase().indexOf(word.toLowerCase()) != -1){
                resultList.innerHTML += `<li class="list-group-item">${algo}</li>`;
            }
        })
    })
}
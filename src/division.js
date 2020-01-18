var $ = require("jQuery");

export function solution() {
  var items = document.getElementsByClassName("div-item")[0];

  $.ajax({
    url: "https://swapi.co/api/people/",
    success: function(result) {
      var arr = result.results;

      var result_count = arr.length;
      var result_size = result.count;
      var page = Math.floor(result_size / result_count);

      for (var i = 1; i <= page; i++) {
        $.ajax({
          url: "https://swapi.co/api/people/?page=" + i,
          success: function(result_list) {
            var arr_list = result_list.results;
            console.log(arr_list);
            for (var i = 0; i < arr_list.length; i++) {
              var item_list = document.createElement("div");
              item_list.className = "item_list_" + i;
              item_list.innerHTML = `<h1> ${arr_list[i].name} </h1>`;
              item_list.setAttribute("type", "text");
              items.appendChild(item_list);
            }
          }
        });
      }
    }
  });
}


document.onload;
//step 1
var xhttp = new XMLHttpRequest();

//step 4
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    //console.log(this.responseText);
    var output = JSON.parse(this.responseText);

    let val = '';

    let table = '<table class="table-hover table-responsive-sm-xl" style="border-collapse: collapse;width:75% ">';

    table += `
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Status</th>
              
            </tr>
          </thead>
      
          <tbody>
        `;

    output.forEach(todo => {
      table += `
            <tr>
              <td>${todo.id}</td>
              <td>${todo.title}</td>
              <td><input type="checkbox" ${todo.completed == true ? "checked disabled" : ""}  id="check" record=${todo.id} /></td>
              
              
            </tr>
          `;
    });

    table += `
          </tbody>
        </table>
        `;

    var container = document.getElementById('container');
    container.innerHTML = table;

    const checkBoxes = document.querySelectorAll("input[type='checkbox']");

    var count = [];
    for (var i = 0; i < checkBoxes.length; i++) {
      checkBoxes[i].addEventListener("click", displayCheck);
    }
    function displayCheck(e) {

      var Id = e.target.attributes.record.value;
      if (e.target.checked) {
        count.push(Id);
      } else {
        var index = count.indexOf(Id);
        if (index > -1) {
          count.splice(index, 1);
        }
      }


      var promisecount = new Promise((resolve, reject) => {
        if (count.length == 5) resolve(count);
        else reject(count);
      });

      promisecount.then(v => {
        alert('“ Congrats. 5 Tasks have been Successfully Completed ” ');
      }).catch((err) => {
        return false;
      });


    }


  }
}

//step2
xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);

//step 3
xhttp.send();






















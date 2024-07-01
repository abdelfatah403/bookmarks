var nameinput = document.getElementById("bookname");
var urlinput = document.getElementById("weburl");
var table = document.getElementById("tableBody");
var buttom = document.getElementById("addbtn");
var validRules = document.getElementById("validRules");
var icon = document.getElementById('close')

var site;
if (localStorage.getItem("site") == null) {
  site = [];
} else {
  site = JSON.parse(localStorage.getItem("site"));
}

buttom.addEventListener("click", function () {
  website = {
    name: nameinput.value,
    site: urlinput.value,
  };
  if (
    nameinput.classList.contains("is-valid") &&
    urlinput.classList.contains("is-valid")
  ) {
    site.push(website);
    localStorage.setItem("websitename", JSON.stringify(site));
    displayBody();
  } else {
    validRules.classList.remove("d-none");
    validRules.classList.add("d-block");
  }
});

function displayBody() {
  var cartona = "";
  for (i = 0; i < site.length; i++) {
    cartona += `
        <tr>
         <td>${site[i].name}</td>
        <td> <a href="${site[i].site}"> <button class="btn btn-danger">visit </button></a> </td>
        <td> <button onclick="deleteItem(${i})" class="btn btn-info">delete</button></td>
        
      </tr>
       
        `;
  }
  table.innerHTML = cartona;
}

function deleteItem(index) {
  site.splice(index, 1);
  localStorage.setItem("websitename", JSON.stringify(site));
  displayBody();
}

// function validRule() {
//   var rules = "";
//   rules += ``;

//   validRules.innerHTML = rules;
// }

function validName() {
  var regx = /^[A-Z][a-z]{4,8}$/;
  var isValid = regx.test(nameinput.value);

  nameinput.classList.remove("is-invalid", "is-valid");

  if (isValid) {
    nameinput.classList.add("is-valid");
  } else {
    nameinput.classList.add("is-invalid");
  }
}

function validUrl() {
  var regx = /^(https:\/\/)?(www\.)?[A-Za-z0-9_\.]{1,}\.[a-z]{3}$/;
  var isValid = regx.test(urlinput.value);

  urlinput.classList.remove("is-invalid", "is-valid");

  if (isValid) {
    urlinput.classList.add("is-valid");
  } else {
    urlinput.classList.add("is-invalid");
  }
}


icon.addEventListener('click',
  function () {
    validRules.classList.add("d-none");
    validRules.classList.remove("d-block");
  }
);

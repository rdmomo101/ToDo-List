let input = document.getElementById("input-box");
let tasks = document.getElementById("tasks");
let add = document.querySelector("button");

add.onclick = function mo() {
  if (input.value === "") {
    // alert("You Should Write Something");
    Swal.fire({
      title: "Oops...",
      text: "You Should Write Something !",
      icon: "error",
    });
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    tasks.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = " \u00d7";
    li.appendChild(span);
  }

  input.value = "";
  saveData();
};

tasks.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          e.target.parentElement.remove();
          saveData();
        }
      });
    }
  },
  false
);

function saveData() {
  localStorage.setItem("task", tasks.innerHTML);
}

function showTask() {
  tasks.innerHTML = localStorage.getItem("task");
}

showTask();

// localStorage.clear();

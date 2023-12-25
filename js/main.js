let input = document.getElementById("input-box");
let tasks = document.getElementById("tasks");
let add = document.querySelector("button");

add.onclick = function () {
  if (input.value !== "") {
    // Create  Element
    let li = document.createElement("li");
    li.innerHTML = input.value;
    tasks.appendChild(li);

    // Create Span To Delete Element
    let span = document.createElement("span");
    span.innerHTML = " \u00d7";
    li.appendChild(span);
  } else {
    // SweetAlert2
    Swal.fire({
      title: "Oops...",
      text: "You Should Write Something !",
      icon: "error",
    });
  }

  input.value = "";
  setData();
};

tasks.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      setData();
    } else if (e.target.tagName === "SPAN") {
      // Start SweetAlert2
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
          // Event to remove the parent element
          e.target.parentElement.remove();
          setData();
        }
      });
      // End SweetAlert2
    }
  },
  false
);
//Save (set) Data In localStorage
function setData() {
  localStorage.setItem("task", tasks.innerHTML);
}

//Get Data From localStorage
function getData() {
  tasks.innerHTML = localStorage.getItem("task");
}

getData();

// localStorage.clear();

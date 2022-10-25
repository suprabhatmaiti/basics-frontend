const btn = document.querySelectorAll("button");

btn.forEach((item) => {
  item.addEventListener("click", () => {
    const classList = item.parentNode.classList;
    classList.toggle("collapsed");
    if (classList.contains("collapsed")) {
      item.childNodes[1].classList.remove("fa-times-circle");
      item.childNodes[1].classList.add("fa-chevron-down");
    } else {
      item.childNodes[1].classList.remove("fa-chevron-down");
      item.childNodes[1].classList.add("fa-times-circle");
    }
  });
});

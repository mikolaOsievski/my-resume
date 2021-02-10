const sectionList = document.querySelectorAll(".title-section");

sectionList.forEach((element) => {
  element.addEventListener("click", (event) => {
    const parent = element.parentNode;
    parent.classList.toggle("active");

    const content = element.nextElementSibling;
    if (parent.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = 0;
    }
  });
});

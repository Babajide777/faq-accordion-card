let btns = document.getElementsByTagName("button");

for (i = 0; i < btns.length; i++) {
  let j = i;
  btns[j].addEventListener("click", (e) => {
    const question =
      e.currentTarget.parentElement.parentElement.lastElementChild;
    question.classList.toggle("show-body");
    const arrow = e.currentTarget.parentElement.parentElement.firstElementChild;
    arrow.classList.toggle("rotate-arrow");

    const paragraph = arrow.firstElementChild;
    paragraph.classList.toggle("bolden-para");
  });
}

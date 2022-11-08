const faqs = document.querySelectorAll(".faq");
let activeFaq = undefined;
let currentFaq = undefined;

const toggleVisibility = function (e) {
  try {
    if (activeFaq) {
      activeFaq.children[0].classList.remove("active");
      activeFaq.children[1].classList.add("hide");
    }

    let element = e.srcElement;
    while (element.attributes.class.value !== "faq") {
      element = element.parentElement;
    }

    const pathpath = e.path;
    currentFaq = element;
    currentFaq.children[0].classList.add("active");
    currentFaq.children[1].classList.remove("hide");
    activeFaq = currentFaq;
  } catch {}
};

for (let faq of faqs) {
  faq.addEventListener("click", toggleVisibility);
}

document.querySelector(".faq").click();

import './style.css';

const faqs = document.querySelectorAll('.faq');
let activeFaq = undefined;
let faq = undefined;

const toggleVisibility = function (e) {
  try {
    const pathpath = e.path;

    if (activeFaq) {
      activeFaq.children[0].classList.remove('active');
      activeFaq.children[1].classList.add('hide');
    }

    faq = pathpath[pathpath.length - 7];
    faq.children[0].classList.add('active');
    faq.children[1].classList.remove('hide');
    activeFaq = faq;
  } catch {}
};

for (let faq of faqs) {
  faq.addEventListener('click', toggleVisibility);
}

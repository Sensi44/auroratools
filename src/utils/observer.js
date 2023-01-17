const getId = (link) => link.getAttribute('href').replace('#', '');

export const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav-list__item-link').forEach((link) => {
          link.classList.toggle(
            'nav-list__item-link--active',
            getId(link) === entry.target.id
          );
        });
      }
    });
  },
  {
    threshold: 0.7,
  }
);

export const getObservableObjects = () => {
  document.querySelectorAll('.scrollSlide').forEach((section) => {
    return observer.observe(section);
  });
};

export const handleScrollTo = (e) => {
  if (e.target.classList.contains('nav-list__item-link')) {
    e.preventDefault();

    window.scrollTo({
      top: document.getElementById(getId(e.target)).offsetTop,
      behavior: 'smooth',
    });
  }
};

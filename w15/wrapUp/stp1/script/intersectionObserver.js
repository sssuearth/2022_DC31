let observerOption = {
  root: null,
  rootMargin: "0px 0px -200Px 0px",
  threshold: 0.4,
};

let observerCallback = (observingTargets) => {
  observingTargets.forEach((eachObservingTarget) => {
    if (eachObservingTarget.isIntersecting) {
      //   console.log(
      //     "observerCallback",
      //     eachObservingTarget.target
      //   );
      eachObservingTarget.target.classList.add("triggered");
    } else {
      eachObservingTarget.target.classList.remove("triggered");
    }
  });
};

let observer = new IntersectionObserver(observerCallback, observerOption);

let elems = document.querySelectorAll(".animTrigger");
console.log(elems);

elems.forEach((eachElem) => {
  observer.observe(eachElem);
});

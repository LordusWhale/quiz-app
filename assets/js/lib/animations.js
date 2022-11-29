const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if (e.isIntersecting) e.target.classList.add('in-view');
    })
  }, {
    threshold: 0.5
  })



export function animateCard(card) {
    observer.observe(card);
}

export function animateScores(scores) {
  let delay = 0;
  for (let i = 0; i < scores.length; i++){
    scores[i].style.transitionDelay = `${delay}ms`;
    observer.observe(scores[i]);
    delay += 200;
  }
}
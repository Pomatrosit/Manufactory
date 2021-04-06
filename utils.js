function getBodyScrollTop(){
  return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
}

export function setScrollUnavailable () {
  const body = document.body;
  body.dataset.scrollY = getBodyScrollTop();
  body.style.overflowY="scroll";
  body.style.position="fixed";
  body.style.top="0";
  body.style.right="0";
  body.style.left="0";
  body.style.bottom="0";
  body.style.top = `-${document.body.dataset.scrollY}px`;
}

export function setScrollAvailable () {
  const body = document.body;
  body.style.overflow="auto";
  body.style.position="relative";
  body.style.top = `0px`;
  window.scrollTo(0, document.body.dataset.scrollY);
}

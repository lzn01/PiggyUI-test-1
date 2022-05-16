export const observerDomResize = (dom: Node, callback: () => void) => {
  const _window = window as any;
  const MutationObserver =
    _window.MutationObserver ||
    _window.WebKitMutationObserver ||
    _window.MozMutationObserver;
  const observer = new MutationObserver(callback);

  observer.observe(dom, {
    attributes: true,
    attributeFilter: ['style'],
    attributeOldValue: true,
  });

  return observer;
};

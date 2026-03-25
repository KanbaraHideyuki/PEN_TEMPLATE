export function globalMenu() {
  const header = document.querySelector('.l-header_inner');
  const globalNav = document.querySelector('.l-headerGlobal');
  const triggers = document.querySelectorAll('.js-globalMenu--trigger');
  const targets = document.querySelectorAll('.js-globalMenu--target');
  const closeBtn = document.querySelector('.js-globalMenu--close');

  triggers.forEach(trigger => {
    trigger.addEventListener('mouseover', function () {
      globalNav.classList.add('is-open')
      targets.forEach(target => {
        target.classList.remove('is-view');
      });
      triggers.forEach(trigger => {
        trigger.classList.remove('is-active')
      });
      this.classList.add('is-active');
      const targetId = this.dataset.target;
      const targetEl = document.getElementById(targetId);
      targetEl.classList.add('is-view');
    })
  });

  const close = () => {
    globalNav.classList.remove('is-open');
    targets.forEach(target => {
      target.classList.remove('is-view');
    });
    triggers.forEach(trigger => {
      trigger.classList.remove('is-active')
    });
  }

  header.addEventListener('mouseleave', function() {
    close();
  })

  closeBtn.addEventListener('mouseover', () => {
    close();
  })
}
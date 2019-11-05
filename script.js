const initElements = new InitElements();
initElements.render();

document.body.addEventListener('keydown', (event) => {
  const keydown = document.querySelector(`.${event.code}`);

  if (keydown) {
    if (event.code !== 'CapsLock') {
      keydown.classList.add('keyboard__key-down');
    } else {
      initElements.onCapsLockClick();
    }

    if (event.altKey && event.shiftKey) {
      initElements.changLang();
    }

    if (event.shiftKey) {
      initElements.onShiftClick(event.shiftKey);
    }

    if (!keydown.classList.contains('command')) {
      initElements.onType(keydown.innerHTML);

      if (event.code === 'Tab') {
        event.preventDefault();
        event.stopPropagation();
      }
    }
  }
});

document.body.addEventListener('keyup', (event) => {
  const keyup = document.querySelector(`.${event.code}`);

  if (keyup) {
    if (event.code !== 'CapsLock') {
      keyup.classList.remove('keyboard__key-down');
    }

    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      initElements.onShiftClick(event.shiftKey);
    }
  }
});

let shift = false;
let alt = false;

document.querySelectorAll('.keyboard__key').forEach((el) => {
  el.addEventListener('mousedown', () => {
    if (el.classList.contains('CapsLock')) {
      initElements.onCapsLockClick();
    } else {
      el.classList.add('keyboard__key-down');

      if (el.classList.contains('shift')) {
        shift = !shift;
        initElements.onShiftClick(shift);
      } else if (el.classList.contains('alt')) {
        alt = !alt;
      }
    }
  });

  el.addEventListener('mouseup', () => {
    if (!(el.classList.contains('CapsLock') || (el.classList.contains('alt') && alt) || (el.classList.contains('shift') && shift))) {
      el.classList.remove('keyboard__key-down');
      if (!el.classList.contains('command')) {
        initElements.onType(el.innerHTML);
      }
    }

    if (shift && alt) {
      initElements.changLang();
      shift = false;
      alt = false;
      initElements.onShiftClick(shift);
      document.querySelector('.shift-right').classList.remove('keyboard__key-down');
      document.querySelector('.shift-left').classList.remove('keyboard__key-down');
      document.querySelector('.AltLeft').classList.remove('keyboard__key-down');
      document.querySelector('.AltRight').classList.remove('keyboard__key-down');
    }
  });
});

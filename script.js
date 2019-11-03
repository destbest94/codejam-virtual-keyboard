const initElements = new InitElements();
initElements.render();

const keys = {};

const textarea = document.querySelector('.text');

textarea.addEventListener('keyup', (event) => {
  if (keys[event.code]) {
    keys[event.code].push(event.key);
  } else {
    keys[event.code] = [event.key];
  }
  console.log(event);
});

textarea.addEventListener('click', () => {
  console.log(keys);
});

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


document.querySelectorAll('.keyboard__key').forEach((el) => {
  el.addEventListener('mousedown', () => {
    if (el.classList.contains('CapsLock')) {
      initElements.onCapsLockClick();
    } else {
      el.classList.add('keyboard__key-down');
    }
  });

  el.addEventListener('mouseup', () => {
    if (!el.classList.contains('CapsLock')) {
      el.classList.remove('keyboard__key-down');
    }
  });
});

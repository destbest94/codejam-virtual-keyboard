class InitElements {
  constructor() {
    this.wrapper = document.createElement('div');
    this.textarea = document.createElement('textarea');
    this.keyboard = document.createElement('div');
  }

  createWrapper() {
    this.wrapper.className = 'wrapper';
    document.body.appendChild(this.wrapper);
  }

  createTextarea() {
    this.textarea.className = 'text';
    this.textarea.setAttribute('readonly', '');
    this.wrapper.appendChild(this.textarea);
  }

  createKeyboard() {
    this.keyboard.className = 'keyboard';
    this.wrapper.appendChild(this.keyboard);
  }

  createKeys() {
    for (let i = 0; i < 5; i++) {
      const row = document.createElement('div');
      row.className = 'keyboard--row';
      this.keyboard.appendChild(row);
    }

    this.rows = document.querySelectorAll('.keyboard--row');

    // create keys
    for (let i = 0; i < 14; i++) {
      const key = document.createElement('div');
      key.className = 'keyboard__key';
      this.rows[0].appendChild(key);
    }

    for (let i = 0; i < 15; i++) {
      const key = document.createElement('div');
      key.className = 'keyboard__key';
      this.rows[1].appendChild(key);
    }

    for (let i = 0; i < 13; i++) {
      const key = document.createElement('div');
      key.className = 'keyboard__key';
      this.rows[2].appendChild(key);
    }

    for (let i = 0; i < 13; i++) {
      const key = document.createElement('div');
      key.className = 'keyboard__key';
      this.rows[3].appendChild(key);
    }

    for (let i = 0; i < 9; i++) {
      const key = document.createElement('div');
      key.className = 'keyboard__key';
      this.rows[4].appendChild(key);
    }
  }

  setClasses() {
    const backspace = this.rows[0].querySelector('.keyboard__key:last-child');
    backspace.classList.add('backspace');

    const tab = this.rows[1].querySelector('.keyboard__key:first-child');
    tab.classList.add('tab');

    const del = this.rows[1].querySelector('.keyboard__key:last-child');
    del.classList.add('del');

    const capsLock = this.rows[2].querySelector('.keyboard__key:first-child');
    capsLock.classList.add('capslock');

    const enter = this.rows[2].querySelector('.keyboard__key:last-child');
    enter.classList.add('enter');

    const shiftLeft = this.rows[3].querySelector('.keyboard__key:first-child');
    shiftLeft.classList.add('shift-left');

    const keyUp = this.rows[3].querySelector('.keyboard__key:nth-last-child(2)');
    keyUp.classList.add('control');

    const shiftRight = this.rows[3].querySelector('.keyboard__key:last-child');
    shiftRight.classList.add('shift-right');

    const keys = this.rows[4].querySelectorAll('.keyboard__key');
    keys[0].classList.add('ctrl');
    keys[1].classList.add('win');
    keys[2].classList.add('alt');
    keys[3].classList.add('space');
    keys[4].classList.add('alt');
    keys[5].classList.add('control');
    keys[6].classList.add('control');
    keys[7].classList.add('control');
    keys[8].classList.add('ctrl');
  }

  render() {
    this.createWrapper();
    this.createTextarea();
    this.createKeyboard();
    this.createKeys();
    this.setClasses();
  }
}

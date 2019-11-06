class InitElements {
  constructor() {
    this.wrapper = document.createElement('div');
    this.textarea = document.createElement('textarea');
    this.keyboard = document.createElement('div');
    this.rows = null;
    this.CapsLock = 0;
    this.shift = 0;
    this.lang = 0;

    this.keys = {
      AltLeft: ['Alt', 'Alt', 'Alt', 'Alt'],
      AltRight: ['Alt', 'Alt', 'Alt', 'Alt'],
      ArrowDown: ['▼', '▼', '▼', '▼'],
      ArrowLeft: ['◄', '◄', '◄', '◄'],
      ArrowRight: ['►', '►', '►', '►'],
      ArrowUp: ['▲', '▲', '▲', '▲'],
      Backquote: ['`', '~', 'ё', 'Ё'],
      Backslash: ['\\', '|', '\\', '/'],
      Backspace: ['Backspace', 'Backspace', 'Backspace', 'Backspace'],
      BracketLeft: ['[', '{', 'х', 'Х'],
      BracketRight: [']', '}', 'ъ', 'Ъ'],
      CapsLock: ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
      Comma: [',', '<', 'б', 'Б'],
      ControlLeft: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
      ControlRight: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
      Delete: ['Del', 'Del', 'Del', 'Del'],
      Digit0: ['0', ')', '0', ')'],
      Digit1: ['1', '!', '1', '!'],
      Digit2: ['2', '@', '2', '"'],
      Digit3: ['3', '#', '3', '№'],
      Digit4: ['4', '$', '4', ';'],
      Digit5: ['5', '%', '5', '%'],
      Digit6: ['6', '^', '6', ':'],
      Digit7: ['7', '&', '7', '?'],
      Digit8: ['8', '*', '8', '*'],
      Digit9: ['9', '(', '9', '('],
      Enter: ['Enter', 'Enter', 'Enter', 'Enter'],
      Equal: ['=', '+', '=', '+'],
      KeyA: ['a', 'A', 'ф', 'Ф'],
      KeyB: ['b', 'B', 'и', 'И'],
      KeyC: ['c', 'C', 'с', 'С'],
      KeyD: ['d', 'D', 'в', 'В'],
      KeyE: ['e', 'E', 'у', 'У'],
      KeyF: ['f', 'F', 'а', 'А'],
      KeyG: ['g', 'G', 'п', 'П'],
      KeyH: ['h', 'H', 'р', 'Р'],
      KeyI: ['i', 'I', 'ш', 'Ш'],
      KeyJ: ['j', 'J', 'о', 'О'],
      KeyK: ['k', 'K', 'л', 'Л'],
      KeyL: ['l', 'L', 'д', 'Д'],
      KeyM: ['m', 'M', 'ь', 'Ь'],
      KeyN: ['n', 'N', 'т', 'Т'],
      KeyO: ['o', 'O', 'щ', 'Щ'],
      KeyP: ['p', 'P', 'з', 'З'],
      KeyQ: ['q', 'Q', 'й', 'Й'],
      KeyR: ['r', 'R', 'к', 'К'],
      KeyS: ['s', 'S', 'ы', 'Ы'],
      KeyT: ['t', 'T', 'е', 'Е'],
      KeyU: ['u', 'U', 'г', 'Г'],
      KeyV: ['v', 'V', 'м', 'М'],
      KeyW: ['w', 'W', 'ц', 'Ц'],
      KeyX: ['x', 'X', 'ч', 'Ч'],
      KeyY: ['y', 'Y', 'н', 'Н'],
      KeyZ: ['z', 'Z', 'я', 'Я'],
      Minus: ['-', '_', '-', '_'],
      Period: ['.', '>', 'ю', 'Ю'],
      Quote: ['\'', '"', 'э', 'Э'],
      Semicolon: [';', ':', 'ж', 'Ж'],
      ShiftLeft: ['Shift', 'Shift', 'Shift', 'Shift'],
      ShiftRight: ['Shift', 'Shift', 'Shift', 'Shift'],
      Slash: ['/', '?', '.', ','],
      Space: [' ', ' ', ' ', ' '],
      Tab: ['Tab', 'Tab', 'Tab', 'Tab'],
    };
  }

  render() {
    this.createWrapper();
    this.createTextarea();
    this.createKeyboard();
    this.createKeys();
    this.setClasses();
    this.setValue();
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
    // row 1
    this.rows[0].querySelector('.keyboard__key:nth-child(1)').classList.add('Backquote');
    this.rows[0].querySelector('.keyboard__key:nth-child(2)').classList.add('Digit1');
    this.rows[0].querySelector('.keyboard__key:nth-child(3)').classList.add('Digit2');
    this.rows[0].querySelector('.keyboard__key:nth-child(4)').classList.add('Digit3');
    this.rows[0].querySelector('.keyboard__key:nth-child(5)').classList.add('Digit4');
    this.rows[0].querySelector('.keyboard__key:nth-child(6)').classList.add('Digit5');
    this.rows[0].querySelector('.keyboard__key:nth-child(7)').classList.add('Digit6');
    this.rows[0].querySelector('.keyboard__key:nth-child(8)').classList.add('Digit7');
    this.rows[0].querySelector('.keyboard__key:nth-child(9)').classList.add('Digit8');
    this.rows[0].querySelector('.keyboard__key:nth-child(10)').classList.add('Digit9');
    this.rows[0].querySelector('.keyboard__key:nth-child(11)').classList.add('Digit0');
    this.rows[0].querySelector('.keyboard__key:nth-child(12)').classList.add('Minus');
    this.rows[0].querySelector('.keyboard__key:nth-child(13)').classList.add('Equal');
    this.rows[0].querySelector('.keyboard__key:nth-child(14)').classList.add('backspace', 'Backspace');

    // row 2
    this.rows[1].querySelector('.keyboard__key:nth-child(1)').classList.add('tab', 'Tab');
    this.rows[1].querySelector('.keyboard__key:nth-child(2)').classList.add('KeyQ');
    this.rows[1].querySelector('.keyboard__key:nth-child(3)').classList.add('KeyW');
    this.rows[1].querySelector('.keyboard__key:nth-child(4)').classList.add('KeyE');
    this.rows[1].querySelector('.keyboard__key:nth-child(5)').classList.add('KeyR');
    this.rows[1].querySelector('.keyboard__key:nth-child(6)').classList.add('KeyT');
    this.rows[1].querySelector('.keyboard__key:nth-child(7)').classList.add('KeyY');
    this.rows[1].querySelector('.keyboard__key:nth-child(8)').classList.add('KeyU');
    this.rows[1].querySelector('.keyboard__key:nth-child(9)').classList.add('KeyI');
    this.rows[1].querySelector('.keyboard__key:nth-child(10)').classList.add('KeyO');
    this.rows[1].querySelector('.keyboard__key:nth-child(11)').classList.add('KeyP');
    this.rows[1].querySelector('.keyboard__key:nth-child(12)').classList.add('BracketLeft');
    this.rows[1].querySelector('.keyboard__key:nth-child(13)').classList.add('BracketRight');
    this.rows[1].querySelector('.keyboard__key:nth-child(14)').classList.add('Backslash');
    this.rows[1].querySelector('.keyboard__key:nth-child(15)').classList.add('del', 'Delete');

    // row 3
    this.rows[2].querySelector('.keyboard__key:nth-child(1)').classList.add('command', 'capslock', 'CapsLock');
    this.rows[2].querySelector('.keyboard__key:nth-child(2)').classList.add('KeyA');
    this.rows[2].querySelector('.keyboard__key:nth-child(3)').classList.add('KeyS');
    this.rows[2].querySelector('.keyboard__key:nth-child(4)').classList.add('KeyD');
    this.rows[2].querySelector('.keyboard__key:nth-child(5)').classList.add('KeyF');
    this.rows[2].querySelector('.keyboard__key:nth-child(6)').classList.add('KeyG');
    this.rows[2].querySelector('.keyboard__key:nth-child(7)').classList.add('KeyH');
    this.rows[2].querySelector('.keyboard__key:nth-child(8)').classList.add('KeyJ');
    this.rows[2].querySelector('.keyboard__key:nth-child(9)').classList.add('KeyK');
    this.rows[2].querySelector('.keyboard__key:nth-child(10)').classList.add('KeyL');
    this.rows[2].querySelector('.keyboard__key:nth-child(11)').classList.add('Semicolon');
    this.rows[2].querySelector('.keyboard__key:nth-child(12)').classList.add('Quote');
    this.rows[2].querySelector('.keyboard__key:nth-child(13)').classList.add('enter', 'Enter');

    // row 4
    this.rows[3].querySelector('.keyboard__key:nth-child(1)').classList.add('command', 'shift', 'shift-left', 'ShiftLeft');
    this.rows[3].querySelector('.keyboard__key:nth-child(2)').classList.add('KeyZ');
    this.rows[3].querySelector('.keyboard__key:nth-child(3)').classList.add('KeyX');
    this.rows[3].querySelector('.keyboard__key:nth-child(4)').classList.add('KeyC');
    this.rows[3].querySelector('.keyboard__key:nth-child(5)').classList.add('KeyV');
    this.rows[3].querySelector('.keyboard__key:nth-child(6)').classList.add('KeyB');
    this.rows[3].querySelector('.keyboard__key:nth-child(7)').classList.add('KeyN');
    this.rows[3].querySelector('.keyboard__key:nth-child(8)').classList.add('KeyM');
    this.rows[3].querySelector('.keyboard__key:nth-child(9)').classList.add('Comma');
    this.rows[3].querySelector('.keyboard__key:nth-child(10)').classList.add('Period');
    this.rows[3].querySelector('.keyboard__key:nth-child(11)').classList.add('Slash');
    this.rows[3].querySelector('.keyboard__key:nth-child(12)').classList.add('arrow', 'ArrowUp');
    this.rows[3].querySelector('.keyboard__key:nth-child(13)').classList.add('command', 'shift', 'shift-right', 'ShiftRight');

    const keys = this.rows[4].querySelectorAll('.keyboard__key');
    keys[0].classList.add('command', 'ctrl', 'ControlLeft');
    keys[1].classList.add('command', 'win');
    keys[2].classList.add('command', 'alt', 'AltLeft');
    keys[3].classList.add('space', 'Space');
    keys[4].classList.add('command', 'alt', 'AltRight');
    keys[5].classList.add('arrow', 'ArrowLeft');
    keys[6].classList.add('arrow', 'ArrowDown');
    keys[7].classList.add('arrow', 'ArrowRight');
    keys[8].classList.add('command', 'ctrl', 'ControlRight');
  }

  changLang() {
    if (localStorage.getItem('lang')) {
      if (this.lang === 0) {
        this.lang = 2;
      } else {
        this.lang = 0;
      }
    } else {
      this.lang = 0;
    }

    localStorage.setItem('lang', this.lang);
    this.setValue();
  }

  getLang() {
    this.lang = localStorage.getItem('lang');

    if (this.lang) {
      return this.lang - 0;
    }

    this.changLang();
    return 0;
  }

  onCapsLockClick() {
    if (this.CapsLock) {
      this.CapsLock = 0;
      document.querySelector('.CapsLock').classList.remove('keyboard__key-down');
    } else {
      this.CapsLock = 1;
      document.querySelector('.CapsLock').classList.add('keyboard__key-down');
    }

    this.setValue();
  }

  onShiftClick(isDown) {
    if (!isDown) {
      this.shift = 0;

      if (document.querySelector('.CapsLock').classList.contains('keyboard__key-down')) {
        this.CapsLock = 1;
      } else {
        this.CapsLock = 0;
      }
    } else {
      this.shift = 1;

      if (this.CapsLock) {
        this.CapsLock = -1;
      }
    }

    this.setValue();
  }

  onType(value) {
    let textareaValue = this.textarea.value;

    if (value === 'Backspace') {
      if (this.textarea.selectionStart !== this.textarea.selectionEnd) {
        // Delete selection text;
        textareaValue = this.textarea.value.slice(0, this.textarea.selectionStart);
        textareaValue += this.textarea.value.slice(this.textarea.selectionEnd);
      } else {
        textareaValue = textareaValue.slice(0, -1);
      }
    } else if (value === 'Del') {
      if (this.textarea.selectionStart !== this.textarea.selectionEnd) {
        // Delete selection text;
        textareaValue = this.textarea.value.slice(0, this.textarea.selectionStart);
        textareaValue += this.textarea.value.slice(this.textarea.selectionEnd);
      } else {
        // Todo: detect position and del;
      }
    } else if (value === 'Enter') {
      textareaValue += '\n';
    } else if (value === 'Tab') {
      textareaValue += '\t';
    } else {
      textareaValue += value;
    }

    this.textarea.value = textareaValue;
  }

  setValue() {
    this.lang = this.getLang();

    // row 1
    document.querySelector('.Backquote').innerHTML = this.keys.Backquote[this.lang + this.shift];
    document.querySelector('.Digit1').innerHTML = this.keys.Digit1[this.lang + this.shift];
    document.querySelector('.Digit2').innerHTML = this.keys.Digit2[this.lang + this.shift];
    document.querySelector('.Digit3').innerHTML = this.keys.Digit3[this.lang + this.shift];
    document.querySelector('.Digit4').innerHTML = this.keys.Digit4[this.lang + this.shift];
    document.querySelector('.Digit5').innerHTML = this.keys.Digit5[this.lang + this.shift];
    document.querySelector('.Digit6').innerHTML = this.keys.Digit6[this.lang + this.shift];
    document.querySelector('.Digit7').innerHTML = this.keys.Digit7[this.lang + this.shift];
    document.querySelector('.Digit8').innerHTML = this.keys.Digit8[this.lang + this.shift];
    document.querySelector('.Digit9').innerHTML = this.keys.Digit9[this.lang + this.shift];
    document.querySelector('.Digit0').innerHTML = this.keys.Digit0[this.lang + this.shift];
    document.querySelector('.Minus').innerHTML = this.keys.Minus[this.lang + this.shift];
    document.querySelector('.Equal').innerHTML = this.keys.Equal[this.lang + this.shift];
    document.querySelector('.Backspace').innerHTML = this.keys.Backspace[this.lang + this.shift];

    // row 2
    document.querySelector('.Tab').innerHTML = this.keys.Tab[this.lang + this.shift];
    document.querySelector('.KeyQ').innerHTML = this.keys.KeyQ[this.lang + this.shift + this.CapsLock];
    document.querySelector('.KeyW').innerHTML = this.keys.KeyW[this.lang + this.shift + this.CapsLock];
    document.querySelector('.KeyE').innerHTML = this.keys.KeyE[this.lang + this.shift + this.CapsLock];
    document.querySelector('.KeyR').innerHTML = this.keys.KeyR[this.lang + this.shift + this.CapsLock];
    document.querySelector('.KeyT').innerHTML = this.keys.KeyT[this.lang + this.shift + this.CapsLock];
    document.querySelector('.KeyY').innerHTML = this.keys.KeyY[this.lang + this.shift + this.CapsLock];
    document.querySelector('.KeyU').innerHTML = this.keys.KeyU[this.lang + this.shift + this.CapsLock];
    document.querySelector('.KeyI').innerHTML = this.keys.KeyI[this.lang + this.shift + this.CapsLock];
    document.querySelector('.KeyO').innerHTML = this.keys.KeyO[this.lang + this.shift + this.CapsLock];
    document.querySelector('.KeyP').innerHTML = this.keys.KeyP[this.lang + this.shift + this.CapsLock];
    document.querySelector('.BracketLeft').innerHTML = this.keys.BracketLeft[this.lang + this.shift];
    document.querySelector('.BracketRight').innerHTML = this.keys.BracketRight[this.lang + this.shift];
    document.querySelector('.Backslash').innerHTML = this.keys.Backslash[this.lang + this.shift];
    document.querySelector('.Delete').innerHTML = this.keys.Delete[this.lang + this.shift];

    // row 3
    document.querySelector('.CapsLock').innerHTML = this.keys.CapsLock[this.lang + this.shift];
    document.querySelector('.KeyA').innerHTML = this.keys.KeyA[this.lang + this.shift + this.CapsLock];
    document.querySelector('.KeyS').innerHTML = this.keys.KeyS[this.lang + this.shift + this.CapsLock];
    document.querySelector('.KeyD').innerHTML = this.keys.KeyD[this.lang + this.shift + this.CapsLock];
    document.querySelector('.KeyF').innerHTML = this.keys.KeyF[this.lang + this.shift + this.CapsLock];
    document.querySelector('.KeyG').innerHTML = this.keys.KeyG[this.lang + this.shift + this.CapsLock];
    document.querySelector('.KeyH').innerHTML = this.keys.KeyH[this.lang + this.shift + this.CapsLock];
    document.querySelector('.KeyJ').innerHTML = this.keys.KeyJ[this.lang + this.shift + this.CapsLock];
    document.querySelector('.KeyK').innerHTML = this.keys.KeyK[this.lang + this.shift + this.CapsLock];
    document.querySelector('.KeyL').innerHTML = this.keys.KeyL[this.lang + this.shift + this.CapsLock];
    document.querySelector('.Semicolon').innerHTML = this.keys.Semicolon[this.lang + this.shift];
    document.querySelector('.Quote').innerHTML = this.keys.Quote[this.lang + this.shift];
    document.querySelector('.Enter').innerHTML = this.keys.Enter[this.lang + this.shift];

    // row 4
    document.querySelector('.ShiftLeft').innerHTML = this.keys.ShiftLeft[this.lang + this.shift];
    document.querySelector('.KeyZ').innerHTML = this.keys.KeyZ[this.lang + this.shift + this.CapsLock];
    document.querySelector('.KeyX').innerHTML = this.keys.KeyX[this.lang + this.shift + this.CapsLock];
    document.querySelector('.KeyC').innerHTML = this.keys.KeyC[this.lang + this.shift + this.CapsLock];
    document.querySelector('.KeyV').innerHTML = this.keys.KeyV[this.lang + this.shift + this.CapsLock];
    document.querySelector('.KeyB').innerHTML = this.keys.KeyB[this.lang + this.shift + this.CapsLock];
    document.querySelector('.KeyN').innerHTML = this.keys.KeyN[this.lang + this.shift + this.CapsLock];
    document.querySelector('.KeyM').innerHTML = this.keys.KeyM[this.lang + this.shift + this.CapsLock];
    document.querySelector('.Comma').innerHTML = this.keys.Comma[this.lang + this.shift];
    document.querySelector('.Period').innerHTML = this.keys.Period[this.lang + this.shift];
    document.querySelector('.Slash').innerHTML = this.keys.Slash[this.lang + this.shift];
    document.querySelector('.ArrowUp').innerHTML = this.keys.ArrowUp[this.lang + this.shift];
    document.querySelector('.ShiftRight').innerHTML = this.keys.ShiftRight[this.lang + this.shift];

    // row 5
    document.querySelector('.ControlLeft').innerHTML = this.keys.ControlLeft[this.lang + this.shift];
    document.querySelector('.win').innerHTML = 'Win';
    document.querySelector('.AltLeft').innerHTML = this.keys.AltLeft[this.lang + this.shift];
    document.querySelector('.Space').innerHTML = this.keys.Space[this.lang + this.shift];
    document.querySelector('.AltRight').innerHTML = this.keys.AltRight[this.lang + this.shift];
    document.querySelector('.ArrowLeft').innerHTML = this.keys.ArrowLeft[this.lang + this.shift];
    document.querySelector('.ArrowDown').innerHTML = this.keys.ArrowDown[this.lang + this.shift];
    document.querySelector('.ArrowRight').innerHTML = this.keys.ArrowRight[this.lang + this.shift];
    document.querySelector('.ControlRight').innerHTML = this.keys.ControlRight[this.lang + this.shift];
  }
}

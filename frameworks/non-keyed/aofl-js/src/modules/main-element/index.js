import styles from './template.css';
import template from './template';
import {AoflElement, customElement, property} from '@aofl/element';

const adjectives = [
  'pretty', 'large', 'big', 'small', 'tall', 'short', 'long', 'handsome', 'plain', 'quaint',
  'clean', 'elegant', 'easy', 'angry', 'crazy', 'helpful', 'mushy', 'odd', 'unsightly', 'adorable',
  'important', 'inexpensive', 'cheap', 'expensive', 'fancy'
];

const colours = [
  'red', 'yellow', 'blue', 'green', 'pink', 'brown', 'purple', 'brown', 'white',
  'black', 'orange'
];

const nouns = [
  'table', 'chair', 'house', 'bbq', 'desk', 'car', 'pony', 'cookie', 'sandwich',
  'burger', 'pizza', 'mouse', 'keyboard'
];

let did = 1;

const _random = (max) => {
  return Math.round(Math.random() * 1000) % max;
};

const buildData = (count) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: did++,
      label: `${adjectives[_random(adjectives.length)]} ${colours[_random(colours.length)]} ${nouns[_random(nouns.length)]}`,
      selected: false,
    });
  }
  return data;
};
/**
 * @summary MainElement
 * @extends {AoflElement}
 */
@customElement('main-element')
class MainElement extends AoflElement {
  /**
   * Creates an instance of MainElement.
   */
  constructor() {
    super();
  }
  /**
   * @readonly
   */
  static is = 'main-element';

  selected = -1;

  @property({type: Object, attribute: false})
  data = [];

  add() {
    this.data = [...this.data, ...buildData(1000)];
  }

  run() {
    this.data = buildData(1000);
  }

  runLots() {
    this.data = buildData(10000);
  }

  clear() {
    this.data = [];
  }

  update10th() {
    for (let i = 0; i < this.data.length; i += 10) {
      this.data[i].label += ' !!!';
    }
    this.requestUpdate();
  }

  del(e) {
    e.stopPropagation();
    const index = parseInt(e.currentTarget.dataset.index, 10);
    if (index === this.selected) {
      this.selected = -1;
    }
    this.data = [
      ...this.data.slice(0, index),
      ...this.data.slice(index + 1)
    ];
  }

  select(e) {
    e.stopPropagation();
    const index = parseInt(e.currentTarget.dataset.index, 10);

    if (this.selected > -1) {
      this.data[this.selected] = {
        ...this.data[this.selected],
        selected: false
      };
    }
    this.selected = index;
    this.data = [
      ...this.data.slice(0, index),
      {
        ...this.data[index],
        selected: true
      },
      ...this.data.slice(index + 1)
    ];
  }

  swapRows() {
    if (this.data.length > 998) {
      this.data = [
        ...this.data.slice(0, 1),
        this.data[998],
        ...this.data.slice(2, 998),
        this.data[1],
        ...this.data.slice(999)
      ];
    }
  }
  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

export default MainElement;

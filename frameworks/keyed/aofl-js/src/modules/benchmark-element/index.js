import styles from './template.css';
import template from './template';
import {AoflElement, customElement} from '@aofl/element';

/**
 * @summary BenchmarkElement
 * @extends {AoflElement}
 */
@customElement('benchmark-element')
class BenchmarkElement extends AoflElement {
  /**
   * Creates an instance of BenchmarkElement.
   */
  constructor() {
    super();
  }
  /**
   * @readonly
   */
  static is = 'benchmark-element';
  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

export default BenchmarkElement;

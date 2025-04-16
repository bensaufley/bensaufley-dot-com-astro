import styles from './styles.module.css';

export default class Spoiler extends HTMLElement {
  public static observedAttributes = ['hide'];

  public constructor() {
    super();
  }

  private toggle = () => {
    this.setAttribute('hide', String(this.getAttribute('hide') !== 'true'));
  };

  public connectedCallback() {
    console.log('connected', this);
    const isHidden = this.getAttribute('hide') !== 'false';
    this.setAttribute('hide', String(isHidden));
    this.classList.add(styles.spoiler!);
    this.title = 'Spoiler - click to reveal';

    this.addEventListener('click', this.toggle);
  }

  public disconnectedCallback() {
    this.removeEventListener('click', this.toggle);
  }

  public attributeChangedCallback(name: string, _: string, hide: string) {
    if (name === 'hide') this.classList.toggle(styles.visible!, hide === 'false');
  }

  public static get is() {
    return 'x-spoiler';
  }

  public static register() {
    if (!customElements.get('x-spoiler')) customElements.define('x-spoiler', Spoiler);
  }
}

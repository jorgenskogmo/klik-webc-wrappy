import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('klik-rating')
export class KlikRating extends LitElement {
  render() {
    return html`<div>KlikRating component</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'klik-rating': KlikRating;
  }
}

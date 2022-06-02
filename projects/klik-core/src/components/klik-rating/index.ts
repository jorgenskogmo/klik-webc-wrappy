import { css, html, LitElement } from 'lit';
import { customElement, query, property } from 'lit/decorators.js';

// todo: find a way to dynamically load, or maybe even allow the user to slot an Icon/svg in?!
// based off star-bold.svg
const SVGStar = html`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill="currentColor" d="M4.07512 22.3085L6.21423 14.999L0.476607 10.1393C0.269663 9.96838 0.120233 9.73794 0.0485476 9.4792C-0.0231375 9.22047 -0.0136153 8.94595 0.0758251 8.69282C0.165265 8.43968 0.330304 8.22015 0.548596 8.06394C0.766889 7.90774 1.02789 7.82241 1.29627 7.8195H8.29337L10.7823 0.859942C10.8692 0.60817 11.0324 0.394579 11.2492 0.239984C11.466 0.0853893 11.7256 0 11.9918 0C12.2581 0 12.5177 0.0853893 12.7345 0.239984C12.9513 0.394579 13.1145 0.60817 13.2013 0.859942L15.7103 7.8695H22.7074C22.977 7.87512 23.2384 7.96323 23.4564 8.12197C23.6744 8.28072 23.8386 8.50247 23.9268 8.75737C24.015 9.01227 24.023 9.28809 23.9498 9.54768C23.8765 9.80728 23.7255 10.0382 23.5171 10.2093L17.6195 15.049L19.9086 22.2385C20.0126 22.4941 20.0319 22.7711 19.9638 23.0385C19.8956 23.3058 19.7436 23.5439 19.53 23.7184C19.3164 23.8929 19.0524 23.985 18.7769 23.9984C18.5014 24.0118 18.2289 23.9414 17.9994 23.7884L12.0148 19.7187L6.00432 23.7884C5.78082 23.9337 5.51778 24.0088 5.2514 23.9984C4.98503 23.988 4.72841 23.8907 4.51687 23.7284C4.30534 23.5661 4.14927 23.3431 4.07016 23.0885C3.99105 22.8338 3.99278 22.5621 4.07512 22.3085Z" />
</svg>`;


@customElement(`klik-rating`)
export class KlikRating extends LitElement {
  
  // api:
  @property({ reflect: true }) max: number = 6;
  @property({ reflect: true }) rating: number = 3;
  @property({ reflect: true }) oncolor: string = '#f2a705';
  @property({ reflect: true }) offcolor: string = '#ccc';
  @property() onChange?: (value:number) => void;
  
  // todo: conform to klik api
  @property({ reflect: true }) readonly?: boolean = false;
  @property({ reflect: true }) disabled?: boolean = false;
  @property({ reflect: true }) tooltip?: boolean = false;
  @property({ reflect: true }) fractional?: boolean = false;
  @property({ reflect: true }) size?: 'lg' | 'md' | 'sm';

  // elements:
  @query("main") root!: HTMLElement;

  static styles = css`
    main {
      position: absolute;
    }
    .container {
      position: relative;
      display: inline-flex;
      flex-wrap: nowrap;
      width: fit-content;
      max-height: 24px;
    }
    .container svg {
      width: 24px;
      height: 24px;
      margin-right: 5px;
      display: inline-flex;
      flex-shrink: 0;
    }
    .curtain {
      position: absolute;
      display: inline-flex;
      flex-wrap: nowrap;
      overflow: hidden;
      top: 0;
      bottom: 0;
      left: 0;
      right: 100px;
      // border-bottom: 1px solid #f00;
    }
  `;

  // pre-render the stars
  _filledStarElements = new Array(this.max).fill( SVGStar );

  _dragging: boolean = false;
  _left: number = 0;
  _width: number = 0;
  _prevValue: number = -1;
  
  // lit re-render when a property changes
  @property()_value: number = 50;


  render() {
    return html`<main>
      <div class="container" style="color:${this.offcolor}">        
        ${this._filledStarElements}
        <div class="curtain" style="color:${this.oncolor}; right:${this._value}px">
          ${this._filledStarElements}
        </div>
      </div>
    </main>`;
  }

  setRatingFromPx( px: number){
    if( px === this._prevValue ) return;

    this._prevValue = px;

    // console.log('setRatingFromPx', px, this._width);

    this._value = this._width - px;

    this.onChange && this.onChange(this._value); // todo: should return sth else than the px value...
  }

  // todo: add method that sets the initial _value from the rating @prop
  
  // todo: add clamp-to-whole-star and clamp-to-half-star method


  async firstUpdated() {
    const size = this.root.getBoundingClientRect();
    this._left = size.left;
    this._width = size.width;

    this.root.addEventListener("pointerdown", (e: PointerEvent) => {
      this.setRatingFromPx( Math.round(e.clientX - this._left) );
      this._dragging = true;
    });
    this.root.addEventListener("pointermove", (e: PointerEvent) => {
      if( !this._dragging ) return;
      this.setRatingFromPx( Math.round(e.clientX - this._left) );
    });
    document.addEventListener("pointerup", (_e) => {
        this._dragging = false;
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'klik-rating': KlikRating;
  }
}

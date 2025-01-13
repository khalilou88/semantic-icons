import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-coin-bitcoin-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336zm-4 2.66a1 1 0 0 0 -1 1h-1a1 1 0 0 0 -2 0a1 1 0 1 0 0 2v6a1 1 0 0 0 0 2c0 1.333 2 1.333 2 0h1a1 1 0 0 0 2 0v-.15c1.167 -.394 2 -1.527 2 -2.85l-.005 -.175a3.063 3.063 0 0 0 -.734 -1.827c.46 -.532 .739 -1.233 .739 -1.998c0 -1.323 -.833 -2.456 -2 -2.85v-.15a1 1 0 0 0 -1 -1zm.09 7c.492 0 .91 .437 .91 1s-.418 1 -.91 1h-2.09v-2h2.09zm0 -4c.492 0 .91 .437 .91 1c0 .522 -.36 .937 -.806 .993l-.104 .007h-2.09v-2h2.09z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCoinBitcoinIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}

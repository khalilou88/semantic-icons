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
  selector: 'svg[si-lock-star-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H19.5C20.3284 8 21 8.67157 21 9.5V13H19V10H5V20H13V22H4.5C3.67157 22 3 21.3284 3 20.5V9.5C3 8.67157 3.67157 8 4.5 8H6V7ZM16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16V7ZM20.6399 20.1953L21.145 23.1406L18.5 21.75L15.855 23.1406L16.3601 20.1953L14.2202 18.1094L17.1775 17.6797L18.5 15L19.8225 17.6797L22.7798 18.1094L20.6399 20.1953Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLockStarLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}

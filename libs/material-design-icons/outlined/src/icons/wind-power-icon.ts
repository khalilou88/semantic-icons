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
  selector: 'svg[si-wind-power-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M4 3h6v2H4zM1 7h5v2H1zm2 12h5v2H3z" />
    <svg:path
      d="m22.21 18.61-2.28-4.1a2.05 2.05 0 0 0-1.26-.97l-2.69-.67a2.95 2.95 0 0 0-.37-1.33l3.96-6.59c.65-1.08.3-2.48-.78-3.13a2.288 2.288 0 0 0-2.73.3l-3.43 3.21c-.4.37-.63.9-.63 1.45v3.4c-.47.17-.89.45-1.23.82H3.28a2.279 2.279 0 0 0-.63 4.47l4.51 1.29c.18.05.37.08.55.08.36 0 .72-.1 1.03-.29l2.24-1.34c.29.26.63.47 1.02.61V21c-1.1 0-2 .9-2 2h6c0-1.1-.9-2-2-2v-4.28l4.61 4.61c.45.45 1.03.67 1.61.67.58 0 1.17-.22 1.61-.67.72-.72.88-1.83.38-2.72zM7.72 14.84 3.2 13.55a.279.279 0 0 1-.2-.27c0-.15.13-.28.28-.28h6.73c0 .15.01.3.03.44l-2.32 1.4zM13 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm1-3.86V6.78l3.43-3.21c.05-.05.19-.12.34-.04.13.08.18.25.1.38l-3.74 6.24-.13-.01zm6.42 9.78c-.05.05-.24.16-.4 0l-4.85-4.85c.08-.09.16-.18.24-.28l2.78.69 2.28 4.1c.06.11.04.25-.05.34z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWindPowerIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}

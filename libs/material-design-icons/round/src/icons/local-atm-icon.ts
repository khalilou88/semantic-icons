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
  selector: 'svg[si-local-atm-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 13c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10zm-6-7c.55 0 1-.45 1-1s-.45-1-1-1h-1v-.01c0-.55-.45-1-1-1s-1 .45-1 1V8h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1h-3c-.55 0-1 .45-1 1s.45 1 1 1h1c0 .55.45 1 1 1s1-.45 1-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h3z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLocalAtmIcon implements OnInit {
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

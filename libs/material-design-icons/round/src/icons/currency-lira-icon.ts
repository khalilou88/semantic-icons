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
  selector: 'svg[si-currency-lira-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m9 15.84-1.47.92A.998.998 0 0 1 6 15.91c0-.34.18-.66.47-.85L9 13.48v-2.36l-1.47.92A.998.998 0 0 1 6 11.19c0-.34.18-.66.47-.85L9 8.76V4c0-.55.45-1 1-1s1 .45 1 1v3.51l2.47-1.55a.998.998 0 0 1 1.53.85c0 .34-.18.66-.47.85L11 9.87l.01 2.35 2.46-1.54a.998.998 0 0 1 1.53.85c0 .34-.18.66-.47.85L11 14.59V19c2.47 0 4.52-1.79 4.93-4.15.08-.49.49-.85.98-.85.61 0 1.09.54 1 1.14A7.003 7.003 0 0 1 11 21h-1c-.55 0-1-.45-1-1v-4.16z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCurrencyLiraIcon implements OnInit {
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

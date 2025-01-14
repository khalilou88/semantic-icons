import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bubble-text-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M12.4 2l.253 .005a6.34 6.34 0 0 1 5.235 3.166l.089 .163l.178 .039a6.33 6.33 0 0 1 4.254 3.406l.105 .228a6.334 6.334 0 0 1 -5.74 8.865l-.144 -.002l-.037 .052a5.26 5.26 0 0 1 -5.458 1.926l-.186 -.051l-3.435 2.06a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2.435l-.055 -.026a3.67 3.67 0 0 1 -1.554 -1.498l-.102 -.199a3.67 3.67 0 0 1 -.312 -2.14l.038 -.21l-.116 -.092a5.8 5.8 0 0 1 -1.887 -6.025l.071 -.238a5.8 5.8 0 0 1 5.42 -4.004h.157l.15 -.165a6.33 6.33 0 0 1 4.33 -1.963zm1.6 11h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0 -2m3 -4h-10a1 1 0 1 0 0 2h10a1 1 0 0 0 0 -2"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBubbleTextIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', this.width());
    this.render.setAttribute(svg, 'height', this.height());
    this.render.setAttribute(svg, 'viewBox', this.viewBox());
    this.render.setAttribute(svg, 'fill', this.fill());
  }
}

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
  selector: 'svg[si-car-suv-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M7 14a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 2.995 -2.824m11 0a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 2.995 -2.824m-11 2a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m-3.562 -12a3 3 0 0 1 2.91 2.272l.433 1.728h2.219a3 3 0 0 1 2.995 2.824l.005 .176v3.02l-.01 .117a1 1 0 0 1 -.286 .575l-.107 .091l-.07 .049l-.076 .042l-.106 .046l-.017 .005l-.047 .016l-.108 .025l-.118 .013l-.08 .002l-.122 -.012l-.148 -.033l-.063 -.022a1 1 0 0 1 -.362 -.24l-.08 -.094a4 4 0 0 0 -3.2 -1.6a4 4 0 0 0 -3.2 1.6a1 1 0 0 1 -.8 .4h-3a1 1 0 0 1 -.8 -.4a3.998 3.998 0 0 0 -6.402 .002a1 1 0 1 1 -1.602 -1.198c.493 -.66 1.11 -1.2 1.804 -1.602v-2.792a1 1 0 0 1 .06 -.35l.042 -.1l2.004 -4.007a1 1 0 0 1 .894 -.553zm-12.438 2a1 1 0 0 1 1 1v4a1 1 0 0 1 -2 0v-4a1 1 0 0 1 1 -1m12.438 0h-3.438v2h4.718l-.31 -1.243a1 1 0 0 0 -.97 -.757m-5.438 0h-1.382l-1.001 2h2.383z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCarSuvIcon implements OnInit {
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
    this.render.setAttribute(svg, 'width', this.width().toString());
    this.render.setAttribute(svg, 'height', this.height().toString());
    this.render.setAttribute(svg, 'viewBox', this.viewBox());
    this.render.setAttribute(svg, 'fill', this.fill());
  }
}

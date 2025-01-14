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
  selector: 'svg[si-guitar-pick-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M12 2c-1.613 0 -2.882 .104 -3.825 .323l-.23 .057c-3.019 .708 -4.945 2.503 -4.945 5.62c0 3.367 1.939 8.274 4.22 11.125c.32 .4 .664 .786 1.03 1.158l.367 .36a4.904 4.904 0 0 0 6.752 .011a15.04 15.04 0 0 0 1.41 -1.528c2.491 -3.113 4.221 -7.294 4.221 -11.126c0 -3.025 -1.813 -4.806 -4.71 -5.562l-.266 -.066c-.936 -.25 -2.281 -.372 -4.024 -.372z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGuitarPickIcon implements OnInit {
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

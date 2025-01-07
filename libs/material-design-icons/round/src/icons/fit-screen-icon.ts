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
  selector: 'svg[si-fit-screen-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18 4h2c1.1 0 2 .9 2 2v2c0 .55-.45 1-1 1s-1-.45-1-1V6h-2c-.55 0-1-.45-1-1s.45-1 1-1zM4 8V6h2c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1s1-.45 1-1zm16 8v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c1.1 0 2-.9 2-2v-2c0-.55-.45-1-1-1s-1 .45-1 1zM6 18H4v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 1.1.9 2 2 2h2c.55 0 1-.45 1-1s-.45-1-1-1zM16 8H8c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFitScreenIcon implements OnInit {
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

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
  selector: 'svg[si-do-not-touch-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m13 10.17-2.5-2.5V1H13v9.17zM20 4h-2.5v7h-1V2H14v9.17l6 6V4zM9.5 3H7.01v1.18L9.5 6.67V3zm11.69 18.19L2.81 2.81 1.39 4.22 7 9.83v4.3l-3.32-1.9L2 13.88 9.68 22h9.54l.56.61 1.41-1.42z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDoNotTouchIcon implements OnInit {
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

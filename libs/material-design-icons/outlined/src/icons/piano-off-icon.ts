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
  selector: 'svg[si-piano-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.19 21.19 2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61 1.41-1.42zM8.25 19H5V7.83l2 2v3.67c0 .55.45 1 1 1h.25V19zm1.5 0v-4.5H10c.46 0 .82-.31.94-.73l3.31 3.31V19h-4.5zM11 8.17 5.83 3H19c1.1 0 2 .9 2 2v13.17l-2-2V5h-2v8.5c0 .19-.07.36-.16.51L13 10.17V5h-2v3.17z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPianoOffIcon implements OnInit {
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

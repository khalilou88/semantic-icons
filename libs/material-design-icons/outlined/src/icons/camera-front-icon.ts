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
  selector: 'svg[si-camera-front-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5 20v2h5v2l3-3-3-3v2zm9 0h5v2h-5zM11.99 8C13.1 8 14 7.1 14 6s-.9-2-2.01-2S10 4.9 10 6s.89 2 1.99 2zM17 0H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 16H7v-2h10v2zm0-3.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5V2h10v10.5z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCameraFrontIcon implements OnInit {
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

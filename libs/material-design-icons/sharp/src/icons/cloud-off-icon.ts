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
  selector: 'svg[si-cloud-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M24 15c0-2.64-2.05-4.78-4.65-4.96A7.49 7.49 0 0 0 12 4c-1.33 0-2.57.36-3.65.97l1.49 1.49C10.51 6.17 11.23 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19a2.996 2.996 0 0 1 1.79 5.4l1.41 1.41c1.09-.92 1.8-2.27 1.8-3.81zM4.41 3.86 3 5.27l2.77 2.77h-.42A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h11.73l2 2 1.41-1.41L4.41 3.86zM6 18c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73l8 8H6z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCloudOffIcon implements OnInit {
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

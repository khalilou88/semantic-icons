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
  selector: 'svg[si-image-not-supported-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7.83 5H19v11.17L7.83 5zm8.34 14-2-2H6l3-4 2 2.72.84-1.05L5 7.83V19h11.17z"
      opacity=".3"
    />
    <svg:path
      d="M5.83 3H19c1.1 0 2 .9 2 2v13.17l-2-2V5H7.83l-2-2zm14.66 20.31L18.17 21H5c-1.1 0-2-.9-2-2V5.83L.69 3.51 2.1 2.1l1.49 1.49L5 5l8.11 8.11 2.69 2.69L19 19l1.41 1.41 1.49 1.49-1.41 1.41zM16.17 19l-2-2H6l3-4 2 2.72.84-1.05L5 7.83V19h11.17z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiImageNotSupportedIcon implements OnInit {
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

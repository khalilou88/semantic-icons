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
  selector: 'svg[si-cameraswitch-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14 6h-4L9 7H6v10h12V7h-3l-1-1zm-2 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
    />
    <svg:path
      d="m8.57.51 4.48 4.48V2.04c4.72.47 8.48 4.23 8.95 8.95h2C23.34 3.02 15.49-1.59 8.57.51zm2.38 21.45c-4.72-.47-8.48-4.23-8.95-8.95H0c.66 7.97 8.51 12.58 15.43 10.48l-4.48-4.48v2.95z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCameraswitchIcon implements OnInit {
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

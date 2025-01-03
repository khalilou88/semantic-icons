import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-vuejs-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17.4002 3.44198H17.2619L16.5048 3.44193L14.1378 3.44264L12.0118 6.98493L9.87748 3.44264L7.50818 3.44174L7.50798 3.44141H3.28889V3.4419L2 3.44182L12.026 20.5583L22 3.44212L17.4002 3.44198ZM12.0224 17.008L5.12481 5.23231H7.65324L12.028 12.7604L16.368 5.23231H18.8837L12.0224 17.008Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiVuejsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}
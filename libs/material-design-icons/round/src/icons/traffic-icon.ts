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
  selector: 'svg[si-traffic-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19.96 10.59a.514.514 0 0 0-.5-.59H17V8.86a4.01 4.01 0 0 0 2.96-3.27.514.514 0 0 0-.5-.59H17V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H4.54c-.31 0-.54.28-.5.59A4.01 4.01 0 0 0 7 8.86V10H4.54c-.31 0-.54.28-.5.59A4.01 4.01 0 0 0 7 13.86V15H4.54c-.31 0-.54.28-.5.59A4.01 4.01 0 0 0 7 18.86V20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1.14a4.01 4.01 0 0 0 2.96-3.27.514.514 0 0 0-.5-.59H17v-1.14a4.01 4.01 0 0 0 2.96-3.27zM12 19a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 19zm0-5a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 14zm0-5a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 1 1 0 4z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTrafficIcon implements OnInit {
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

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
  selector: 'svg[si-prisma-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.00341 15.7279C3.79994 15.4069 3.79686 14.9982 3.99548 14.6741L11.4738 2.47545C11.8898 1.79696 12.8941 1.85628 13.2273 2.57901L20.0591 17.3988C20.3126 17.9487 20.0208 18.5957 19.4408 18.7697L8.81343 21.9579C8.38584 22.0862 7.92513 21.9143 7.68611 21.5372L4.00341 15.7279ZM12.3367 6.04224L9.70642 19.1386C9.65096 19.4147 9.9095 19.6506 10.1794 19.57L17.5221 17.3781C17.7364 17.3142 17.8468 17.0774 17.7581 16.8721L13.0456 5.96762C12.9004 5.63163 12.4087 5.68338 12.3367 6.04224Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiPrismaIcon implements OnInit {
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

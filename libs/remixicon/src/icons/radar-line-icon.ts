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
  selector: 'svg[si-radar-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.5065 3.62326L11.4835 5.39501C8.57378 4.51629 5.96968 4.94531 5.07207 6.50001C3.89477 8.53915 5.86239 12.1524 9.75027 14.3971C13.6382 16.6418 17.7512 16.5392 18.9285 14.5C19.8261 12.9453 18.8956 10.4756 16.6797 8.39501L17.7026 6.62326C20.7847 9.33196 22.1654 12.8934 20.6605 15.5C18.8003 18.7221 13.4717 18.8551 8.75027 16.1292C4.0289 13.4033 1.47976 8.72208 3.34002 5.50001C4.84492 2.89344 8.61964 2.30849 12.5065 3.62326ZM15.8842 1.77277L17.6163 2.77277L12.6163 11.433L10.8842 10.433L15.8842 1.77277ZM6.73233 20H17.0003V22H5.01761C4.94008 22.0014 4.86194 21.9938 4.78481 21.9768C4.77025 21.9735 4.7558 21.97 4.74147 21.9662C4.6589 21.944 4.57784 21.9108 4.50028 21.866C4.47106 21.8492 4.44301 21.831 4.41616 21.8118C4.30161 21.7292 4.20524 21.623 4.1342 21.5003C4.06328 21.3772 4.01939 21.2404 4.00518 21.0997C4.00446 21.0924 4.00381 21.085 4.00325 21.0777C3.98786 20.883 4.02924 20.6819 4.13425 20.5L6.38425 16.6029L8.1163 17.6029L6.73233 20Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRadarLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}

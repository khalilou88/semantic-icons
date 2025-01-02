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
  selector: 'svg[si-python-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.5705 9.42859C21.2156 8.07354 20.5703 7.00885 19.2153 7.00885H17.4085V9.13822C17.4085 10.7836 15.9889 12.171 14.4726 12.171H9.66536C8.34257 12.171 7.31015 13.3002 7.31015 14.623V19.1721C7.31015 20.4303 8.43936 21.2046 9.66536 21.6241C11.1495 22.0758 12.6013 22.1725 14.4403 21.6241C15.634 21.2692 16.7955 20.5916 16.7955 19.1721V17.3653H12.0528V16.7846H19.2153C20.5703 16.7846 21.1188 15.8167 21.5705 14.3649C22.0544 12.784 22.0544 11.3321 21.5705 9.42859ZM14.7307 18.4623C15.2146 18.4623 15.634 18.8817 15.634 19.3656C15.634 19.8496 15.2146 20.269 14.7307 20.269C14.2467 20.3013 13.8273 19.8496 13.8273 19.3656C13.795 18.8817 14.2145 18.4623 14.7307 18.4623ZM9.43952 11.558H14.2145C15.5373 11.558 16.5697 10.461 16.5697 9.10596V4.62138C16.5697 3.36312 15.4727 2.39522 14.2145 2.16938C12.6336 1.94354 10.8914 1.94354 9.43952 2.16938C7.40694 2.52428 7.0843 3.26633 7.0843 4.62138V6.42812H11.8593V7.00885H5.34209C3.98704 7.00885 2.76104 7.87996 2.40615 9.42859C1.95446 11.2353 1.95446 12.3645 2.40615 14.2358C2.76104 15.6554 3.53536 16.6555 4.95494 16.6555H6.50357V14.4939C6.4713 12.913 7.85862 11.558 9.43952 11.558ZM9.14915 5.20212C8.6652 5.20212 8.24578 4.7827 8.24578 4.29875C8.24578 3.8148 8.6652 3.39538 9.14915 3.39538C9.63309 3.39538 10.0525 3.8148 10.0525 4.29875C10.0525 4.7827 9.63309 5.20212 9.14915 5.20212Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiPythonIcon implements OnInit {
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

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
  selector: 'svg[si-dependencycheck-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>OWASP Dependency-Check</title>
    <svg:path
      d="M2.357 15.731H.016A13.74 13.74 0 0 0 4.58 24l1.63-1.634a11.452 11.452 0 0 1-3.853-6.635Zm.509 0a10.948 10.948 0 0 0 3.668 6.254l.03.026 1.124-1.126a9.38 9.38 0 0 1-3.206-5.154Zm6.623 3.349h-.084V8.252h4.222c.846 0 1.621.137 2.328.41a5.518 5.518 0 0 1 1.825 1.137c.168.159.318.331.461.508.291.363.535.761.722 1.201a5.37 5.37 0 0 1 .418 2.127v.03c0 .764-.139 1.475-.418 2.135a5.009 5.009 0 0 1-1.183 1.716 5.572 5.572 0 0 1-1.825 1.146 6.309 6.309 0 0 1-2.328.418zm7.01-7.027a3.022 3.022 0 0 0-.513-.738 2.971 2.971 0 0 0-1.028-.673 3.578 3.578 0 0 0-1.331-.24l-1.84.001v6.526h1.84c.484 0 .928-.078 1.331-.232a2.844 2.844 0 0 0 1.028-.665c.283-.288.505-.628.665-1.021.16-.391.24-.829.24-1.314v-.032c0-.473-.08-.913-.24-1.314-.043-.107-.101-.199-.152-.298zm-16.44-.796h2.35c1.635-7.184 7.887-8.654 9.203-8.922V0A13.782 13.782 0 0 0 .059 11.257Zm11.553-8.414a10.98 10.98 0 0 0-8.692 8.414h1.624a9.402 9.402 0 0 1 7.068-6.802Zm4.474.092v1.629a9.38 9.38 0 0 1 4.79 3.101l1.127-1.126a11.039 11.039 0 0 0-5.917-3.604Zm0-2.865v2.352a11.459 11.459 0 0 1 6.267 3.763l1.631-1.636A13.75 13.75 0 0 0 16.086.07z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiDependencycheckIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}

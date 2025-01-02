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
  selector: 'svg[si-invoiceninja-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Invoice Ninja</title>
    <svg:path
      d="M16.247 10.326a1.164 1.164 0 11-2.328 0 1.164 1.164 0 012.328 0zm-6.288 0a1.164 1.164 0 11-2.329 0 1.164 1.164 0 012.329 0zm-.14 13.52c-4.712-.98-8.227-4.257-9.482-8.842-.421-1.537-.421-4.49 0-6.027C1.506 4.709 4.73 1.485 8.997.316c1.538-.421 4.49-.421 6.028 0 4.267 1.169 7.492 4.393 8.66 8.66.24.874.294 1.43.294 3.014 0 1.584-.054 2.14-.293 3.014-1.17 4.271-4.439 7.536-8.661 8.65-1.391.367-3.916.46-5.206.192zm6.64-9.315c-3.047-1.348-4.054-1.737-4.5-1.737-.446 0-1.433.38-4.38 1.684-2.091.926-3.828 1.76-3.86 1.79h16.663zm-9.873-.361c1.621-.729 3.06-1.387 3.196-1.464.258-.145.337-.09-5.285-3.682-.56-.358-1.023-.698-1.025-.65V15.564a790.1 790.1 0 003.114-1.394zm14.078-2.194V8.417c0-.11-1.676.993-3.496 2.12-3 1.854-3.281 2.06-3.004 2.185 1.345.611 6.42 2.862 6.5 2.872zm-8.169.11c.545.125.643.104 1.226-.263.349-.22.655-.419.681-.442.026-.024-.05-.181-.167-.35-.118-.168-.215-.5-.215-.739V9.86l-.569.21c-.726.267-2.28.27-3 .005l-.556-.205.013.452c.007.26-.088.563-.225.715-.232.256-.22.276.45.726.64.432.725.455 1.23.327a2.349 2.349 0 011.132-.002zm-4.23-2.65c-.105-.113-2.97-.954-3.033-.891-.03.03.504.414 1.186.854l1.24.8.34-.344c.186-.188.307-.377.268-.42zm9.76-.373c.473-.306.8-.555.728-.555-.155 0-2.877.804-3.027.894-.057.034.033.229.2.433l.304.37.47-.293c.257-.162.854-.544 1.326-.85zm-1.636-.555c2.11-.59 3.867-1.102 3.904-1.139H3.59c.187.187 7.779 2.195 8.323 2.202.41.005 2.014-.376 4.476-1.063z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiInvoiceninjaIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}

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
  selector: 'svg[si-inbox-arrow-down-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.75 2.75a.75.75 0 0 0-1.5 0v3.69l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V2.75Z"
    />
    <svg:path
      d="M4.784 4.5a.75.75 0 0 0-.701.483L2.553 9h2.412a1 1 0 0 1 .832.445l.406.61a1 1 0 0 0 .832.445h1.93a1 1 0 0 0 .832-.445l.406-.61A1 1 0 0 1 11.035 9h2.412l-1.53-4.017a.75.75 0 0 0-.7-.483h-.467a.75.75 0 0 1 0-1.5h.466c.934 0 1.77.577 2.103 1.449l1.534 4.026c.097.256.147.527.147.801v1.474A2.25 2.25 0 0 1 12.75 13h-9.5A2.25 2.25 0 0 1 1 10.75V9.276c0-.274.05-.545.147-.801l1.534-4.026A2.25 2.25 0 0 1 4.784 3h.466a.75.75 0 0 1 0 1.5h-.466Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiInboxArrowDownIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'aria-hidden', 'true');
    this.render.setAttribute(svg, 'data-slot', 'icon');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 16 16');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}

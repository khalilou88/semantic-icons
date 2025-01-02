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
  selector: 'svg[si-apachesuperset-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Apache Superset</title>
    <svg:path
      d="M6.168 6.045C2.603 6.045 0 8.579 0 12.014c0 3.434 2.603 5.941 6.168 5.941 2.184 0 3.888-1.026 5.775-3.078 1.53 2.033 4.037 3.136 5.89 3.078 3.566 0 6.167-2.503 6.167-5.941 0-3.438-2.601-5.97-6.168-5.97-2.864 0-5.138 2.425-5.771 3.173-.76-.9-1.674-1.665-2.682-2.274-1.019-.588-2.084-.898-3.211-.898Zm2.875 1.303c1.156.595 1.952 1.42 2.639 2.304-.534.63-1.245 1.483-1.739 2.07-.56-.658-1.58-1.907-2.609-2.308ZM6.186 9.703c1.018.027 1.81.458 3.435 2.408-1.158 1.378-2.202 2.244-3.435 2.244-1.51 0-2.41-.99-2.41-2.31s.906-2.382 2.41-2.342zm11.535 0c1.51 0 2.408 1.026 2.408 2.342 0 1.315-.862 2.301-2.402 2.31-.571-.037-1.529-.026-3.442-2.314l.074-.09.002.002c1.122-1.328 2.097-2.25 3.36-2.25zm-3.762 2.738c.61.68 1.795 1.988 2.713 2.24l-1.684 2.016h-.002c-.753-.371-2.031-1.134-2.716-2.215l1.689-2.04z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiApachesupersetIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}

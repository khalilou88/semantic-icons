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
  selector: 'svg[si-deutschewelle-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Deutsche Welle</title>
    <svg:path
      d="M17.143 5.182A6.854 6.854 0 0 0 12 7.493a6.855 6.855 0 0 0-5.143-2.311C3.07 5.182 0 8.234 0 12c0 3.766 3.07 6.818 6.857 6.818A6.855 6.855 0 0 0 12 16.507a6.854 6.854 0 0 0 5.143 2.311C20.929 18.818 24 15.766 24 12c0-3.766-3.07-6.818-6.857-6.818zm-6.04 10.05a5.349 5.349 0 0 1-4.246 2.086c-2.954 0-5.348-2.38-5.348-5.318 0-2.937 2.394-5.318 5.348-5.318 1.731 0 3.27.818 4.247 2.087A5.274 5.274 0 0 1 12.206 12a5.274 5.274 0 0 1-1.102 3.231zm8.88-.641h-1.608l-1.049-2.549-1.025 2.549h-1.605l-1.661-5.182h1.833l.779 2.602.972-2.602h1.434l.973 2.602.778-2.602h1.841zM7.058 9.273H4.083v5.454h2.975c1.534 0 3.107-.878 3.107-2.727 0-1.768-1.434-2.727-3.107-2.727zm-.161 3.874H5.729v-2.318h1.168c1.062 0 1.44.59 1.44 1.159.001.561-.375 1.159-1.44 1.159z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiDeutschewelleIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
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
  selector: 'svg[si-svgdotjs-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>SVG.js</title>
    <svg:path
      d="M24 12 12 0 0 12l12 12 12-12Zm-18.569-.554 4.665-4.665c.335-.601.841-1.258 1.565-1.982a.4798.4798 0 0 1 .678 0c.187.187.187.491 0 .678-1.254 1.254-1.786 2.24-1.836 3.093-.035.59.174 1.1.49 1.573.36.536.854 1.026 1.346 1.518 1.13 1.13 2.206 2.289 2.116 3.826-.015.256-.063.525-.149.808l4.002-4.002a.6147.6147 0 0 1-.073-.293c0-.346.281-.627.627-.627s.627.281.627.627-.281.627-.627.627a.6147.6147 0 0 1-.293-.073l-4.665 4.665c-.335.601-.841 1.258-1.565 1.982a.4798.4798 0 0 1-.678 0 .4798.4798 0 0 1 0-.678c1.254-1.254 1.786-2.24 1.836-3.093.035-.59-.174-1.1-.49-1.573-.36-.536-.854-1.026-1.346-1.518-1.13-1.13-2.206-2.289-2.116-3.826.015-.256.063-.525.149-.808l-4.002 4.002c.047.087.073.187.073.293 0 .346-.281.627-.627.627A.6274.6274 0 0 1 4.511 12c0-.346.281-.627.627-.627.106 0 .206.026.293.073Zm-.293.296c.143 0 .258.115.258.258 0 .143-.115.258-.258.258A.2573.2573 0 0 1 4.88 12c0-.143.115-.258.258-.258Zm13.724 0c.143 0 .258.115.258.258 0 .143-.115.258-.258.258a.2573.2573 0 0 1-.258-.258c0-.143.115-.258.258-.258Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiSvgdotjsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}

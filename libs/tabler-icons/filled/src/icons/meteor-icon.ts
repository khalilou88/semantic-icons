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
  selector: 'svg[si-meteor-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M21.874 3.486l-4.174 7.514h3.3c.846 0 1.293 .973 .791 1.612l-.074 .085l-6.9 7.095a7.5 7.5 0 1 1 -10.21 -10.974l7.746 -6.58c.722 -.614 1.814 .028 1.628 .958l-.577 2.879l7.11 -3.95c.88 -.488 1.849 .481 1.36 1.36m-12.374 7.515a3.5 3.5 0 0 0 -3.495 3.308l-.005 .192a3.5 3.5 0 1 0 3.5 -3.5"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiMeteorIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}

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
  selector: 'svg[si-bone-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M15 2a4 4 0 0 1 3.881 3.03l.016 .072l.08 .019a4 4 0 0 1 2.83 2.65l.057 .193a4 4 0 0 1 -5.847 4.51l-.047 -.029l-3.525 3.525l.042 .07a4 4 0 0 1 .117 3.696l-.102 .197a4 4 0 0 1 -4.386 1.969a3.99 3.99 0 0 1 -2.982 -2.904l-.023 -.095l-.138 -.033a4 4 0 0 1 -2.82 -2.783l-.05 -.199a4 4 0 0 1 5.865 -4.368l.068 .04l3.524 -3.524l-.036 -.061a4 4 0 0 1 -.293 -3.295l.079 -.205a4 4 0 0 1 3.695 -2.47l-.139 .004l.02 -.003z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBoneIcon implements OnInit {
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

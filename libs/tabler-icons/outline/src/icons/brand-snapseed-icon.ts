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
  selector: 'svg[si-brand-snapseed-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M8.152 3.115a.46 .46 0 0 0 -.609 0c-2.943 2.58 -4.529 5.441 -4.543 8.378c0 2.928 1.586 5.803 4.543 8.392a.46 .46 0 0 0 .61 0c2.957 -2.589 4.547 -5.464 4.547 -8.392c0 -2.928 -1.6 -5.799 -4.548 -8.378z"
    />
    <svg:path
      d="M8 20l12.09 -.011c.503 0 .91 -.434 .91 -.969v-6.063c0 -.535 -.407 -.968 -.91 -.968h-7.382"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBrandSnapseedIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
    this.render.setAttribute(svg, 'stroke', 'currentColor');
    this.render.setAttribute(svg, 'stroke-width', '2');
    this.render.setAttribute(svg, 'stroke-linecap', 'round');
    this.render.setAttribute(svg, 'stroke-linejoin', 'round');
  }
}

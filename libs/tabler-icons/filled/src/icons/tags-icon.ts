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
  selector: 'svg[si-tags-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M9.172 5a3 3 0 0 1 2.121 .879l5.71 5.71a3.41 3.41 0 0 1 0 4.822l-3.592 3.592a3.41 3.41 0 0 1 -4.822 0l-5.71 -5.71a3 3 0 0 1 -.879 -2.121v-4.172a3 3 0 0 1 3 -3zm-2.172 4h-.01a1 1 0 1 0 .01 2a1 1 0 0 0 0 -2"
    />
    <svg:path
      d="M14.293 5.293a1 1 0 0 1 1.414 0l4.593 4.592a5.82 5.82 0 0 1 0 8.23l-1.592 1.592a1 1 0 0 1 -1.414 -1.414l1.592 -1.592a3.82 3.82 0 0 0 0 -5.402l-4.592 -4.592a1 1 0 0 1 0 -1.414"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiTagsIcon implements OnInit {
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
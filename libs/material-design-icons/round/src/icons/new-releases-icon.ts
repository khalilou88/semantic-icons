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
  selector: 'svg[si-new-releases-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m22.42 11.34-1.86-2.12.26-2.81c.05-.5-.29-.96-.77-1.07l-2.76-.63-1.44-2.43a.997.997 0 0 0-1.25-.41L12 3 9.41 1.89c-.46-.2-1-.02-1.25.41L6.71 4.72l-2.75.62c-.49.11-.83.56-.78 1.07l.26 2.8-1.86 2.13c-.33.38-.33.94 0 1.32l1.86 2.12-.26 2.82c-.05.5.29.96.77 1.07l2.76.63 1.44 2.42c.26.43.79.61 1.26.41L12 21l2.59 1.11c.46.2 1 .02 1.25-.41l1.44-2.43 2.76-.63c.49-.11.82-.57.77-1.07l-.26-2.81 1.86-2.12c.34-.36.34-.92.01-1.3zM13 17h-2v-2h2v2zm-1-4c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNewReleasesIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}

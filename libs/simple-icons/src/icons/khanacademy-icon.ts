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
  selector: 'svg[si-khanacademy-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Khan Academy</svg:title>
    <svg:path
      d="M21.724 4.973L13.418.328a3.214 3.214 0 0 0-2.828 0L2.276 4.973A3.05 3.05 0 0 0 .862 7.371v9.256a3.05 3.05 0 0 0 1.414 2.4l8.306 4.645a3.214 3.214 0 0 0 2.828 0l8.314-4.645a3.05 3.05 0 0 0 1.414-2.4V7.373a3.05 3.05 0 0 0-1.414-2.4zM12 4.921a2.571 2.571 0 1 1 .001 5.143A2.571 2.571 0 0 1 12 4.92zm3.094 13.627a9.119 9.119 0 0 1-3.103.549 8.972 8.972 0 0 1-3.076-.55 8.493 8.493 0 0 1-5.486-7.987v-.857c4.646.017 8.074 3.823 8.074 8.51v.198h.926v-.197c0-4.688 3.445-8.51 8.056-8.51.026.29.043.582.086.856a8.502 8.502 0 0 1-5.477 7.988z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKhanacademyIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#14BF96');
  }
}

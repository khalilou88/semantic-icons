import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-paint-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M17 2a3 3 0 0 1 2.995 2.824l.005 .176a3 3 0 0 1 3 3a6 6 0 0 1 -5.775 5.996l-.225 .004h-4l.15 .005a2 2 0 0 1 1.844 1.838l.006 .157v4a2 2 0 0 1 -1.85 1.995l-.15 .005h-2a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-4a2 2 0 0 1 1.85 -1.995l.15 -.005v-1a1 1 0 0 1 .883 -.993l.117 -.007h5a4 4 0 0 0 4 -4a1 1 0 0 0 -.883 -.993l-.117 -.007l-.005 .176a3 3 0 0 1 -2.819 2.819l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-2a3 3 0 0 1 2.824 -2.995l.176 -.005h10z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPaintIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', this.width());
    this.render.setAttribute(svg, 'height', this.height());
    this.render.setAttribute(svg, 'viewBox', this.viewBox());
    this.render.setAttribute(svg, 'fill', this.fill());
  }
}

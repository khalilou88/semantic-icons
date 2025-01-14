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
  selector: 'svg[si-cloud-computing-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M9 20a2 2 0 0 1 -2 2h-4a1 1 0 0 1 0 -2h4v-2.997l-.343 .001a1 1 0 0 1 -.117 -.007l-.105 -.001c-2.94 -.11 -5.317 -2.399 -5.43 -5.263l-.005 -.216c0 -2.747 2.08 -5.01 4.784 -5.417l.114 -.016l.07 -.181c.663 -1.62 2.056 -2.906 3.829 -3.518l.244 -.08c2.194 -.667 4.614 -.224 6.36 1.176c1.385 1.108 2.187 2.686 2.25 4.34l.004 .212l.091 .003c2.3 .107 4.143 1.961 4.25 4.27l.004 .211c0 2.478 -1.997 4.487 -4.465 4.487h-1.535v2.996h4a1 1 0 0 1 0 2h-4a2 2 0 0 1 -2 -2v-2.997h-2v3.997a1 1 0 0 1 -2 0v-3.997h-2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCloudComputingIcon implements OnInit {
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
    this.render.setAttribute(svg, 'width', this.width().toString());
    this.render.setAttribute(svg, 'height', this.height().toString());
    this.render.setAttribute(svg, 'viewBox', this.viewBox());
    this.render.setAttribute(svg, 'fill', this.fill());
  }
}

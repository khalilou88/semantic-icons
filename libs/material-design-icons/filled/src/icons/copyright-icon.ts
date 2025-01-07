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
  selector: 'svg[si-copyright-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.88 9.14c1.28.06 1.61 1.15 1.63 1.66h1.79c-.08-1.98-1.49-3.19-3.45-3.19C9.64 7.61 8 9 8 12.14c0 1.94.93 4.24 3.84 4.24 2.22 0 3.41-1.65 3.44-2.95h-1.79c-.03.59-.45 1.38-1.63 1.44-1.31-.04-1.86-1.06-1.86-2.73 0-2.89 1.28-2.98 1.88-3zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCopyrightIcon implements OnInit {
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

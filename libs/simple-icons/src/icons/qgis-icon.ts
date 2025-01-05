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
  selector: 'svg[si-qgis-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Qgis</svg:title>
    <svg:path
      d="M12.879 13.006v3.65l-3.004-3.048v-3.495h3.582l2.852 2.893h-3.43zm10.886 7.606V24h-3.654l-5.73-5.9v-3.55h3.354l6.03 6.062zm-10.828-1.448l3.372 3.371c-1.309.442-2.557.726-4.325.726C5.136 23.26 0 18.243 0 11.565 0 4.92 5.136 0 11.984 0 18.864 0 24 4.952 24 11.565c0 2.12-.523 4.076-1.457 5.759l-3.625-3.725a8.393 8.393 0 0 0 .24-2.005c0-4.291-3.148-7.527-7.1-7.527-3.954 0-7.248 3.236-7.248 7.527s3.33 7.6 7.247 7.6c.548 0 .661.017.88-.03z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiQgisIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#589632');
  }
}

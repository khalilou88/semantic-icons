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
  selector: 'svg[si-glass-full-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M5.004 10.229l-.003 -.186l.001 -.113l.008 -.071l1 -7a1 1 0 0 1 .877 -.853l.113 -.006h10a1 1 0 0 1 .968 .747l.022 .112l1.006 7.05l.004 .091c0 3.226 -2.56 5.564 -6 5.945v4.055h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-4.055c-3.358 -.371 -5.878 -2.609 -5.996 -5.716zm11.129 -6.229h-8.267l-.607 4.258a6.001 6.001 0 0 1 5.125 .787l.216 .155a4 4 0 0 0 4.32 .31l-.787 -5.51z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiGlassFullIcon implements OnInit {
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
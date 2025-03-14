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
  selector: 'svg[si-password-fingerprint-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M17 8c.788 1 1 2 1 3v1" />
    <svg:path d="M9 11c0 -1.578 1.343 -3 3 -3s3 1.422 3 3v2" />
    <svg:path d="M12 11v2" />
    <svg:path
      d="M6 12v-1.397c-.006 -1.999 1.136 -3.849 2.993 -4.85a6.385 6.385 0 0 1 6.007 -.005"
    />
    <svg:path d="M12 17v4" />
    <svg:path d="M10 20l4 -2" />
    <svg:path d="M10 18l4 2" />
    <svg:path d="M5 17v4" />
    <svg:path d="M3 20l4 -2" />
    <svg:path d="M3 18l4 2" />
    <svg:path d="M19 17v4" />
    <svg:path d="M17 20l4 -2" />
    <svg:path d="M17 18l4 2" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPasswordFingerprintIcon implements OnInit {
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

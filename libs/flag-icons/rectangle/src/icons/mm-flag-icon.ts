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
  selector: 'svg[si-mm-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#fecb00" d="M0 0h640v480H0z" />
    <svg:path fill="#34b233" d="M0 160h640v320H0z" />
    <svg:path fill="#ea2839" d="M0 320h640v160H0z" />
    <svg:g transform="translate(320 256.9)scale(176.87999)">
      <svg:path id="mm-a" fill="#fff" d="m0-1 .3 1h-.6z" />
      <svg:use
        xlink:href="#mm-a"
        width="100%"
        height="100%"
        transform="rotate(-144)"
      />
      <svg:use
        xlink:href="#mm-a"
        width="100%"
        height="100%"
        transform="rotate(-72)"
      />
      <svg:use
        xlink:href="#mm-a"
        width="100%"
        height="100%"
        transform="rotate(72)"
      />
      <svg:use
        xlink:href="#mm-a"
        width="100%"
        height="100%"
        transform="rotate(144)"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMmFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}

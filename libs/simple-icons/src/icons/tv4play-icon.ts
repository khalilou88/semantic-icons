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
  selector: 'svg[si-tv4play-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>TV4 Play</svg:title>
    <svg:path
      d="M10.374 15.93V3.718c0-.209-.279-.307-.402-.12L.037 18.289a.199.199 0 0 0-.006.223c.036.072.108.12.192.12h7.331v1.656c0 .113.102.215.222.215h2.376c.12 0 .222-.102.222-.215v-1.656h1.435c.12 0 .222-.096.222-.222v-2.257a.22.22 0 0 0-.224-.222zm-2.826.008H4.795l2.753-4.073zm16.313-3.744L16.704 8.06c-.078-.049-.169.035-.132.12a10.53 10.53 0 0 1 .894 4.26c0 1.512-.317 2.952-.888 4.248-.036.083.053.161.131.12l7.152-4.127a.283.283 0 0 0 0-.487z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTv4playIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'E0001C');
  }
}

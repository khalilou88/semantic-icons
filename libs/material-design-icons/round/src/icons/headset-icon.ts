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
  selector: 'svg[si-headset-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.4 1.02C6.62 1.33 3 5.52 3 10.31V17c0 1.66 1.34 3 3 3h1c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H5v-1.71C5 6.45 7.96 3.11 11.79 3A6.999 6.999 0 0 1 19 10v2h-2c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h1c1.66 0 3-1.34 3-3v-7c0-5.17-4.36-9.32-9.6-8.98z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHeadsetIcon implements OnInit {
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

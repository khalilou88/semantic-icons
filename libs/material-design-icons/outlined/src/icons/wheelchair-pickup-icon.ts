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
  selector: 'svg[si-wheelchair-pickup-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.5 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm5.5 6.95V9c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v6h2v7h3.5v-.11c-1.24-1.26-2-2.99-2-4.89 0-2.58 1.41-4.84 3.5-6.05zM16.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3c0-1.11.61-2.06 1.5-2.58v-2.16c-2.02.64-3.5 2.51-3.5 4.74 0 2.76 2.24 5 5 5s5-2.24 5-5h-2zm3.04-3H15V8h-2v8h5.46l2.47 3.71 1.66-1.11-3.05-4.6z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWheelchairPickupIcon implements OnInit {
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

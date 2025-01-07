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
  selector: 'svg[si-pin-drop-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      d="M5 20h14v2H5v-2zm7-13c-1.1 0-2 .9-2 2s.9 2 2 2a2 2 0 1 0 0-4zm0-5c3.27 0 7 2.46 7 7.15 0 3.12-2.33 6.41-7 9.85-4.67-3.44-7-6.73-7-9.85C5 4.46 8.73 2 12 2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPinDropIcon implements OnInit {
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

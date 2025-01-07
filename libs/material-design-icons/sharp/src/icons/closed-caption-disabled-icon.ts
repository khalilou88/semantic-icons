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
  selector: 'svg[si-closed-caption-disabled-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.83 4H21v14.17L17.83 15H18v-2h-1.5v.5h-.17l-1.83-1.83V10.5h2v.5H18V9h-5v1.17L6.83 4zm12.95 18.61L17.17 20H3V5.83L1.39 4.22 2.8 2.81l18.38 18.38-1.4 1.42zM11 13.83l-.83-.83H9.5v.5h-2v-3h.17L6.17 9H6v6h5v-1.17z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiClosedCaptionDisabledIcon implements OnInit {
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

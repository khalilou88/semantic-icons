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
  selector: 'svg[si-point-of-sale-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19 2H5v6h14V2zm-2 4H7V4h10v2zm5 16H2v-3h20v3zM18 9H6l-4 9h20l-4-9zm-8 7H8v-1h2v1zm0-2H8v-1h2v1zm0-2H8v-1h2v1zm3 4h-2v-1h2v1zm0-2h-2v-1h2v1zm0-2h-2v-1h2v1zm3 4h-2v-1h2v1zm0-2h-2v-1h2v1zm0-2h-2v-1h2v1z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPointOfSaleIcon implements OnInit {
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

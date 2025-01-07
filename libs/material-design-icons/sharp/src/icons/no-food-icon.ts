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
  selector: 'svg[si-no-food-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.35 8.52 11 5h5V1h2v4h5l-1.38 13.79L18 15.17l-6.65-6.65zM21.9 21.9 2.1 2.1.69 3.51l5.7 5.7C3.46 9.83 1 11.76 1 15h11.17l2 2H1v2h15v-.17l4.49 4.49 1.41-1.42zM1 23h15v-2H1v2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNoFoodIcon implements OnInit {
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

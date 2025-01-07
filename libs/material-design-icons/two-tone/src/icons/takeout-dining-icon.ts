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
  selector: 'svg[si-takeout-dining-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m9.83 5-2.8 2.73L7.12 9h9.75l.09-1.27L14.16 5zM7.79 18h8.44l.51-7H7.28z"
      opacity=".3"
    />
    <svg:path
      d="M20.59 6.05 19 7.63l.03-.56L14.98 3H9.02L4.97 7.07l.03.5-1.59-1.56L2 7.44l3.23 3.11.7 9.45h12.14l.7-9.44L22 7.46l-1.41-1.41zM16.23 18H7.79l-.51-7h9.46l-.51 7zm.64-9H7.12l-.09-1.27L9.83 5h4.33l2.8 2.73L16.87 9z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTakeoutDiningIcon implements OnInit {
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

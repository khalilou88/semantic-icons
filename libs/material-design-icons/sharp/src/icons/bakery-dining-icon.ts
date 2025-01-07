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
  selector: 'svg[si-bakery-dining-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m16.36 7.58-.86 9.41H17l3.16-7.89zM3.84 9.1 7 16.99h1.5l-.86-9.41zM10 16.99h4L15 6H9zm10.32-4.24-1.81 4.5 1.95.96 2.06-1.22zM1.48 16.99l2.06 1.22 1.95-.96-1.81-4.5z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBakeryDiningIcon implements OnInit {
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

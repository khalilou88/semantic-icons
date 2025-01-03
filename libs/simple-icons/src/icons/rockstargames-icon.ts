import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-rockstargames-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Rockstar Games</title>
    <svg:path
      d="M5.971 6.816h3.241c1.469 0 2.741-.448 2.741-2.084 0-1.3-1.117-1.576-2.19-1.576H6.748l-.777 3.66Zm12.834 8.753h5.168l-4.664 3.228.755 5.087-4.041-3.07L10.599 24l2.536-5.392s-2.95-3.075-2.947-3.075c-.198-.262-.265-.936-.265-1.226 0-.367.024-.739.049-1.134.028-.451.058-.933.058-1.476 0-1.338-.59-2.038-2.036-2.038H5.283l-1.18 5.525H.026L3.269 0h7.672c2.852 0 5.027.702 5.027 3.936 0 2.276-1.12 3.894-3.592 4.233v.045c1.162.276 1.598 1.062 1.598 2.527 0 .585-.018 1.098-.034 1.581-.015.428-.03.834-.03 1.243 0 .525.137 1.382.48 1.968h.567l3.028-5.06.82 5.096Zm-1.233-2.948-2.187 3.654h-3.457l2.103 2.189-1.73 3.672 3.777-2.218 2.976 2.263-.553-3.731 3.093-2.139h-3.43l-.592-3.69Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiRockstargamesIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
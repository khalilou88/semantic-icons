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
  selector: 'svg[si-seedling-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.998 7V9.5C21.998 13.0899 19.0879 16 15.498 16H12.998V21H10.998V14L11.0169 13.0007C11.2719 9.64413 14.0762 7 17.498 7H21.998ZM5.99805 3C9.0904 3 11.7144 5.00519 12.6408 7.78626C11.1417 9.06119 10.1516 10.9143 10.0144 13.0004L8.99805 13C5.13205 13 1.99805 9.86599 1.99805 6V3H5.99805Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSeedlingFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}

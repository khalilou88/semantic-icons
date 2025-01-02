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
  selector: 'svg[si-arrow-downward-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.7547 20.9888C11.8923 21.1495 12.0966 21.2514 12.3247 21.2514L12.3264 21.2514C12.5188 21.2518 12.7113 21.1786 12.8581 21.0319L18.8583 15.0359C19.1513 14.7431 19.1514 14.2682 18.8586 13.9752C18.5659 13.6822 18.091 13.6821 17.798 13.9749L13.0747 18.6948L13.0747 4.5C13.0747 4.08579 12.7389 3.75 12.3247 3.75C11.9105 3.75 11.5747 4.08579 11.5747 4.5L11.5747 18.6883L6.85829 13.9749C6.5653 13.6821 6.09043 13.6822 5.79763 13.9752C5.50483 14.2682 5.50498 14.7431 5.79796 15.0359L11.7547 20.9888Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiArrowDownwardIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '25');
    this.render.setAttribute(svg, 'height', '25');
    this.render.setAttribute(svg, 'viewBox', '0 0 25 25');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}

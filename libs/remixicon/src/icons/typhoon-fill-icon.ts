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
  selector: 'svg[si-typhoon-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17.6544 1.70001L14.8716 4.23315C16.147 4.62331 17.3453 5.28102 18.3612 6.20626C21.8744 9.40606 21.8744 14.594 18.3612 17.7938C15.7696 20.1542 11.7644 21.6563 6.3456 22.3L9.12838 19.7669C7.85304 19.3767 6.65466 18.719 5.6388 17.7938C2.1256 14.594 2.1048 9.42501 5.6388 6.20626C8.2304 3.84585 12.2356 2.34376 17.6544 1.70001ZM12 8.00001C9.51472 8.00001 7.5 9.79087 7.5 12C7.5 14.2092 9.51472 16 12 16C14.4853 16 16.5 14.2092 16.5 12C16.5 9.79087 14.4853 8.00001 12 8.00001Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTyphoonFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}

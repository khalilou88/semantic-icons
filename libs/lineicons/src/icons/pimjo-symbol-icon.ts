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
  selector: 'svg[si-pimjo-symbol-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.9995 2C7.84954 2 4.49121 5.35833 4.49121 9.50833V22L9.14121 16.4583C10.0162 16.825 10.9912 17.025 11.9995 17.025C16.1495 17.025 19.5079 13.6667 19.5079 9.50833C19.5079 5.35 16.1495 2 11.9995 2ZM11.9995 13.05C10.0495 13.05 8.45788 11.4667 8.45788 9.50833C8.45788 7.55 10.0412 5.96667 11.9995 5.96667C13.9579 5.96667 15.5412 7.55 15.5412 9.50833C15.5412 11.4667 13.9579 13.05 11.9995 13.05Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiPimjoSymbolIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}
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
  selector: 'svg[si-trophy-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16.45 13.29C17.19 13 20.75 11.33 20.75 6.16C20.75 5.75 20.41 5.41 20 5.41H17.72V4C17.72 3.59 17.38 3.25 16.97 3.25H7.03C6.62 3.25 6.28 3.59 6.28 4V5.41H4C3.59 5.41 3.25 5.75 3.25 6.16C3.25 11.33 6.81 13 7.55 13.29C8.45 14.41 9.76 15.17 11.25 15.37V16.66H8.5C8.18 16.66 7.89 16.87 7.79 17.17L6.93 19.76C6.85 19.99 6.89 20.24 7.03 20.44C7.17 20.64 7.4 20.75 7.64 20.75H16.36C16.6 20.75 16.83 20.63 16.97 20.44C17.11 20.25 17.15 19.99 17.07 19.76L16.21 17.17C16.11 16.86 15.82 16.66 15.5 16.66H12.75V15.37C14.24 15.17 15.55 14.41 16.45 13.29ZM15.32 19.25H8.68L9.04 18.16H14.95L15.32 19.25ZM19.22 6.91C19.07 8.72 18.36 9.91 17.63 10.68C17.69 10.36 17.72 10.04 17.72 9.7V6.91H19.22ZM4.78 6.91H6.28V9.7C6.28 10.03 6.31 10.36 6.37 10.68C5.64 9.91 4.94 8.72 4.79 6.91H4.78ZM7.78 9.7V4.75H16.23V9.7C16.23 12.03 14.34 13.92 12.01 13.92C9.68 13.92 7.78 12.03 7.78 9.7Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiTrophy1Icon implements OnInit {
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
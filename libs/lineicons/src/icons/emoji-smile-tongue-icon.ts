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
  selector: 'svg[si-emoji-smile-tongue-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 22C6.49 22 2 17.51 2 12C2 6.49 6.49 2 12 2C17.51 2 22 6.49 22 12C22 17.51 17.51 22 12 22ZM12 3.5C7.31 3.5 3.5 7.31 3.5 12C3.5 16.69 7.31 20.5 12 20.5C16.69 20.5 20.5 16.69 20.5 12C20.5 7.31 16.69 3.5 12 3.5ZM14.81 18.48C14.62 18.48 14.42 18.45 14.23 18.4C13.65 18.24 13.16 17.87 12.86 17.35L12.39 16.53C10.72 16.65 9.1 15.95 8.06 14.64C7.8 14.32 7.85 13.85 8.18 13.59C8.51 13.33 8.98 13.39 9.23 13.71C10.04 14.73 11.39 15.22 12.65 14.99C13.48 14.83 14.24 14.38 14.77 13.71C14.92 13.52 15.16 13.42 15.41 13.43C15.66 13.45 15.88 13.59 16 13.8L16.75 15.1C17.37 16.17 17 17.55 15.93 18.17C15.58 18.37 15.2 18.47 14.81 18.47V18.48ZM13.91 16.17L14.16 16.6C14.26 16.77 14.42 16.9 14.62 16.95C14.81 17 15.01 16.98 15.19 16.87C15.55 16.66 15.67 16.2 15.47 15.85L15.21 15.4C14.82 15.72 14.39 15.98 13.92 16.17H13.91ZM17.32 10.97C17.01 10.97 16.72 10.77 16.61 10.46C16.58 10.37 16.3 9.66 15.58 9.66C14.83 9.66 14.55 10.44 14.55 10.45C14.42 10.84 14 11.06 13.6 10.92C13.21 10.79 13 10.36 13.13 9.97C13.36 9.3 14.13 8.15 15.58 8.15C17.03 8.15 17.8 9.29 18.03 9.97C18.16 10.36 17.95 10.79 17.56 10.92C17.48 10.95 17.4 10.96 17.32 10.96V10.97ZM10.16 10.97C9.85 10.97 9.56 10.77 9.45 10.46C9.42 10.37 9.14 9.66 8.42 9.66C7.67 9.66 7.39 10.44 7.39 10.45C7.26 10.84 6.84 11.06 6.44 10.92C6.05 10.79 5.84 10.36 5.97 9.97C6.2 9.3 6.97 8.15 8.42 8.15C9.87 8.15 10.64 9.29 10.87 9.97C11 10.36 10.79 10.79 10.4 10.92C10.32 10.95 10.24 10.96 10.16 10.96V10.97Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiEmojiSmileTongueIcon implements OnInit {
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

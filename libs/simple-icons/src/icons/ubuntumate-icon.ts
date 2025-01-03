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
  selector: 'svg[si-ubuntumate-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Ubuntu MATE</title>
    <svg:path
      d="M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.628-5.373-12-12-12zm2.005 3.245L18.667 6 14 8.755ZM12 4.66c.342 0 .676.028 1.005.073v1.021A6.327 6.327 0 0 0 6.12 9.63l-.865-.51C6.378 6.503 8.978 4.66 12 4.66Zm0 2.495c.342 0 .677.041 1 .11v1.036a3.866 3.866 0 0 0-1-.13 3.812 3.812 0 0 0-3.672 2.76l-.896-.531A4.855 4.855 0 0 1 12 7.156Zm5.885.464A7.305 7.305 0 0 1 19.34 12a7.308 7.308 0 0 1-1.5 4.437l-.87-.515A6.3 6.3 0 0 0 18.329 12a6.31 6.31 0 0 0-1.313-3.865zm-2.171 1.286a4.81 4.81 0 0 1-.047 6.25l-.891-.526A3.793 3.793 0 0 0 15.828 12c0-.996-.377-1.899-.995-2.578zm-12.209.339L8.167 12 3.5 14.755Zm4.823 3.823A3.809 3.809 0 0 0 12 15.823c.346 0 .681-.047 1-.13v1.041a4.81 4.81 0 0 1-1 .11c-2.106 0-3.906-1.362-4.568-3.25zM6.12 14.37A6.327 6.327 0 0 0 12 18.328c.34 0 .67-.027.995-.078v1.016a7.212 7.212 0 0 1-.995.073c-3.022 0-5.622-1.842-6.745-4.459zm7.88.963 4.661 2.75-4.666 2.756z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiUbuntumateIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
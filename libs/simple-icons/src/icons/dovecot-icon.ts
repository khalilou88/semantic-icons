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
  selector: 'svg[si-dovecot-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Dovecot</title>
    <svg:path
      d="M 8.784 8.39 C 8.581 8.391 8.382 8.458 8.22 8.582 L 0.118 14.772 C -0.04 14.897 -0.04 15.138 0.118 15.262 L 0.457 15.515 C 0.61 15.635 0.825 15.635 0.98 15.515 L 4.998 12.454 C 5.22 12.286 5.526 12.286 5.748 12.454 L 8.407 14.487 C 8.628 14.655 8.934 14.655 9.156 14.487 L 12.671 11.804 C 12.902 11.636 12.902 11.291 12.671 11.122 L 9.349 8.582 C 9.187 8.458 8.988 8.39 8.784 8.39 Z M 18.082 8.39 C 17.878 8.39 17.68 8.458 17.519 8.582 L 9.417 14.778 C 9.255 14.901 9.255 15.144 9.417 15.267 L 9.752 15.522 C 9.908 15.638 10.124 15.638 10.279 15.522 L 14.914 11.989 C 15.136 11.823 15.442 11.823 15.662 11.989 L 20.189 15.441 C 20.41 15.61 20.718 15.61 20.939 15.441 L 23.828 13.228 C 24.057 13.056 24.057 12.712 23.828 12.54 L 18.647 8.582 C 18.485 8.458 18.286 8.39 18.082 8.39 Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiDovecotIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
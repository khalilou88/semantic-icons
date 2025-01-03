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
  selector: 'svg[si-internetcomputer-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Internet Computer</title>
    <svg:path
      d="M18.264 6.24c-2.52 0-5.376 3.024-6.264 3.984-.72-.792-3.696-3.984-6.264-3.984C2.568 6.24 0 8.832 0 12c0 3.168 2.568 5.76 5.736 5.76 2.52 0 5.376-3.024 6.264-3.984.72.792 3.696 3.984 6.264 3.984C21.432 17.76 24 15.168 24 12c0-3.168-2.568-5.76-5.736-5.76ZM5.736 15.384A3.38 3.38 0 0 1 2.352 12a3.395 3.395 0 0 1 3.384-3.384c1.176 0 3.24 1.8 4.68 3.384-.408.456-3.144 3.384-4.68 3.384zm12.528 0c-1.176 0-3.24-1.8-4.68-3.384.408-.456 3.168-3.384 4.68-3.384A3.38 3.38 0 0 1 21.648 12c-.024 1.872-1.536 3.384-3.384 3.384z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiInternetcomputerIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
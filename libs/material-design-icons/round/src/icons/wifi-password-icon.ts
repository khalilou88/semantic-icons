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
  selector: 'svg[si-wifi-password-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18.49 12.13A10.899 10.899 0 0 0 12 10c-2.43 0-4.67.79-6.49 2.13-.72.53-.76 1.6-.13 2.24.53.54 1.37.57 1.98.12A7.925 7.925 0 0 1 12 13c1.73 0 3.33.55 4.64 1.49.62.44 1.45.41 1.98-.12.64-.64.6-1.71-.13-2.24zm4.31-4.24C19.86 5.46 16.1 4 12 4S4.14 5.46 1.2 7.89c-.67.55-.71 1.58-.09 2.21.55.55 1.42.58 2.02.09a13.927 13.927 0 0 1 17.74 0c.6.49 1.47.46 2.02-.09.62-.63.58-1.66-.09-2.21zM12 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm11 3v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWifiPasswordIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}

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
  selector: 'svg[si-libreofficeimpress-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>LibreOffice Impress</svg:title>
    <svg:path
      d="M22 0v7l-7-7h7zm-9 0 9 9v12c0 1.662-1.338 3-3 3H5c-1.662 0-3-1.338-3-3V3c0-1.662 1.338-3 3-3h8zM7 17H6v1h1v-1zm0-2H6v1h1v-1zm0-2H6v1h1v-1zm3 4H8v1h2v-1zm0-2H8v1h2v-1zm0-2H8v1h2v-1zm6-1v-1H8v1h8zm2 1h-7v5h7v-5zm0-4H6v1h12V9zm-4 6.707 1 1 2.207-2.207-.707-.707-1.5 1.5-1-1-2.207 2.207.707.707 1.5-1.5z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLibreofficeimpressIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#D0120D');
  }
}

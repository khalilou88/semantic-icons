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
  selector: 'svg[si-telequebec-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>T&#233;l&#233;-Qu&#233;bec</title>
    <svg:path
      d="M10.054 5.568c-1.105.008-1.99.05-2.655.083L4.483 9.404A42.34 42.34 0 0 1 .322 7.99c.643.665 1.93 1.394 3.646 2.059l-.43.536C2.21 10.155 1.009 9.726 0 9.297c.58.6 1.652 1.265 3.067 1.887l-1.394 1.78c1.716.322 4.482 1.094 7.57 2.253 2.382.922 4.312 1.844 5.77 2.638l.987.579 2.53-3.796c2.51.085 4.376-.172 5.105-.751-1.244.064-2.767.021-4.525-.13l.472-.707c2.166 0 3.775-.3 4.418-.857-1.072.064-2.38.064-3.84-.022l3.24-4.847c-1.352-.3-3.625-.901-6.306-1.309l-3.067-.321a51.668 51.668 0 0 0-3.973-.126zm.4 1.241c.854-.005 1.878.01 3.08.086l2.38.236c2.08.3 3.84.75 4.89.965L18.102 12c-1.866-.171-3.904-.471-6.07-.858a74.896 74.896 0 0 1-6.027-1.33l2.38-2.959c.526-.01 1.213-.037 2.068-.043zm2.72.535c-.493.004-1.03.223-1.464.645-.772.73-.9 1.844-.3 2.445.6.6 1.694.493 2.466-.258.773-.729.901-1.844.3-2.445a1.378 1.378 0 0 0-1.002-.387zm-7.79 3.24c1.951.665 4.29 1.265 6.798 1.737 1.888.343 3.646.558 5.233.665l-.385.557a75.458 75.458 0 0 1-5.384-.879 82.036 82.036 0 0 1-6.649-1.608Zm-.966 1.158c2.06.794 4.611 1.523 7.378 2.06a43.83 43.83 0 0 0 4.569.685l-1.266 1.845-.815-.386c-1.115-.6-2.616-1.287-4.46-1.974-2.381-.857-4.526-1.436-5.856-1.672Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiTelequebecIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
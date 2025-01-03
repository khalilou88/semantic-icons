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
  selector: 'svg[si-fcc-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>FCC</title>
    <svg:path
      d="M21.412 17.587A7.89 7.89 0 0 1 10.268 6.414a7.867 7.867 0 0 1 11.144 0 8 8 0 0 1 .839.996L24 6.116a10.03 10.03 0 0 0-8.16-4.196c-5.19 0-9.458 3.942-9.996 9.002h-3.82V4.328H6.78L8.508 1.92H0v20.16l2.024-1.488V13.08h3.82c.538 5.059 4.806 9 9.996 9A10.03 10.03 0 0 0 24 17.884l-1.749-1.296a8 8 0 0 1-.84.999m-5.57-9.205a3.61 3.61 0 0 1 2.97 1.572l1.752-1.296a5.77 5.77 0 0 0-4.723-2.456c-3.194 0-5.782 2.595-5.782 5.798s2.588 5.796 5.782 5.797a5.77 5.77 0 0 0 4.723-2.455l-1.751-1.296a3.61 3.61 0 1 1-2.972-5.664"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiFccIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
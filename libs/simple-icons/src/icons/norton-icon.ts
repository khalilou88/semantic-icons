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
  selector: 'svg[si-norton-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Norton</title>
    <svg:path
      d="M23.978 12c0 6.617-5.373 12-11.978 12C5.395 24 .022 18.617.022 12S5.395 0 12 0c1.826 0 3.557.41 5.107 1.146l-1.99 2.567A8.787 8.787 0 0 0 12 3.145c-4.657 0-8.484 3.627-8.815 8.21a9.595 9.595 0 0 0-.023.645c0 4.883 3.964 8.855 8.838 8.855 4.874 0 8.838-3.972 8.838-8.855 0-.652-.07-1.29-.205-1.902l2.309-2.979A11.948 11.948 0 0 1 23.978 12m-2.442-7.253L19.518 7.35l-7.082 9.14-5.778-5.175L8.75 8.97l3.27 2.928L17.38 4.98l1.924-2.484a12.08 12.08 0 0 1 2.231 2.25"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiNortonIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}

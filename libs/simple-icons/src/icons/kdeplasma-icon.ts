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
  selector: 'svg[si-kdeplasma-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>KDE Plasma</title>
    <svg:path
      d="M6 0c-.831 0-1.5.669-1.5 1.5S5.169 3 6 3s1.5-.669 1.5-1.5S6.831 0 6 0m10.5 0-3 3L18 7.5 13.5 12l3 3 4.5-4.5 3-3zM2.25 9A2.245 2.245 0 0 0 0 11.25a2.245 2.245 0 0 0 2.25 2.25 2.245 2.245 0 0 0 2.25-2.25A2.245 2.245 0 0 0 2.25 9M9 18c-1.662 0-3 1.338-3 3s1.338 3 3 3 3-1.338 3-3-1.338-3-3-3"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiKdeplasmaIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
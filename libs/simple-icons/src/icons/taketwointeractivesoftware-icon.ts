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
  selector: 'svg[si-taketwointeractivesoftware-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Take-Two Interactive Software</title>
    <svg:path
      d="m17.012 16.776.417-.257 4.155-3.1c1.413-1.248 2.293-2.686 2.293-4.607-.006-3.849-3.037-5.771-6.614-5.771-1.663 0-3.122.447-4.283 1.256V2.852L0 2.86l.007 4.395 3.85-.008.016 13.886 5.355-.008-.016-13.886h1.443a7.97 7.97 0 0 0-.516 2.02l4.518.884c.076-1.376.547-3.102 2.219-3.102 1.101 0 1.753.832 1.753 1.87 0 1.557-1.305 2.653-2.4 3.592l-6.082 4.56.006 4.085 13.642-.016.205-4.371-6.988.015Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiTaketwointeractivesoftwareIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
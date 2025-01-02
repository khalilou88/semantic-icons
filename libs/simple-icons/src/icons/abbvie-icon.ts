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
  selector: 'svg[si-abbvie-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Abbvie</title>
    <svg:path
      d="M23.186 20.17c-1.533 0-2.14-.612-2.347-1.838l-.406-1.74c-.413.72-2.453 3.579-6.945 3.579H8.89C1.94 20.17 0 15.467 0 12c0-3.885 2.347-8.17 8.884-8.17h4.905c5.005 0 7.759 2.853 8.372 6.431.512 2.96 1.839 9.91 1.839 9.91zM13.076 6.378h-3.88c-4.698 0-6.231 2.965-6.231 5.623 0 2.653 1.533 5.618 6.236 5.618h3.875c4.904 0 6.236-3.065 6.236-5.618 0-2.246-1.231-5.618-6.236-5.618z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiAbbvieIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}

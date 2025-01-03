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
  selector: 'svg[si-organicmaps-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Organic Maps</title>
    <svg:path
      d="M22.99476 3.97191c.57344 1.52442-2.49444 5.23073-5.41889 6.18183-5.28984-1.83216-5.46185 1.24474-9.79128 4.16784 5.11784 3.5385 10.4794.7832 10.37901-2.69928-4.02829 2.30771-6.55139 2.55943-7.99932 2.48955 4.87411-.96505 10.1353-3.95804 11.23764-5.21687.001.0559.002.1118.002.16789C21.40392 15.0769 12.11446 24 12.11446 24s-4.86272-4.65635-7.55173-9.51937c-.37589-.005-2.63809.81712-3.47235-.28487-.93184-1.23071 2.5231-5.35664 5.51926-6.58743 5.36147 2.43362 8.3003-3.87413 9.97757-4.22377C11.58413.41946 6.63831 1.6363 6.07916 6.04191c2.78111-1.58044 6.193-2.47552 7.7699-2.40556-4.43003.90522-9.5045 4.18187-11.02408 5.4266C2.82498 4.05756 6.98404 0 12.11445 0c3.03397 0 5.72822 1.41895 7.42346 3.61379.0001 0 3.02726-.98455 3.45728.35812zm-1.0608.4475c-.39846-.54223-1.78554.0911-1.78554.0911.19411.32556.36823.66393.5204 1.01367a8.86 8.86 0 0 1 .39354 1.09643s1.41637-1.45988.8716-2.20117zm-19.814 9.26475c.43072.58597 1.93005-.0985 1.93005-.0985a9.66 9.66 0 0 1-.56258-1.09567 9.575 9.575 0 0 1-.4254-1.18507s-1.5309 1.57801-.94207 2.37928z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiOrganicmapsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
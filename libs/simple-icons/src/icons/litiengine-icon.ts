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
  selector: 'svg[si-litiengine-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>LITIENGINE</title>
    <svg:path
      d="m0 12.018 2.09 2.088L11.987 24l2.146-2.146-9.897-9.893 6.586-6.582-2.09-2.089Zm13.211 6.624 2.08 2.078 5.425-5.422-2.08-2.078zM9.85 2.151l6.606 6.602L9.9 15.306l2.134 2.133 6.555-6.553 3.258 3.257L24 11.993 12 0Zm-3.276 9.853 2.035 2.034 5.453-5.45-2.035-2.035z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiLitiengineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}

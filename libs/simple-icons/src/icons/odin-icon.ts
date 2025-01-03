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
  selector: 'svg[si-odin-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Odin</title>
    <svg:path
      d="M12 0A11.999 11.999 0 0 0 1.607 18c.001 0 .143.279.545.861.456.661.725.939.725.939L14.194.2s-.468-.09-1.17-.158C12.56-.002 12 0 12 0m4.184.755L4.35 21.248a12 12 0 0 0 1.652 1.144c5.734 3.312 13.078 1.342 16.39-4.394 3.31-5.735 1.342-13.08-4.394-16.39 0 0-.42-.236-.926-.479-.403-.193-.891-.373-.891-.373m-5.38 1.317L2.806 15.926A9.98 9.98 0 0 1 3.34 7a9.99 9.99 0 0 1 7.463-4.928M17 3.34c4.78 2.759 6.42 8.88 3.66 13.66-2.758 4.779-8.881 6.42-13.66 3.66z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiOdinIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
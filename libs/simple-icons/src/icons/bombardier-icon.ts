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
  selector: 'svg[si-bombardier-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Bombardier</title>
    <svg:path
      d="m0 23.24 1.823-1.822c1.823-1.823 3.645-2.127 6.076-2.127h5.012c2.43 0 3.707-.152 5.681-1.519h.244l-3.342 3.342c-1.823 1.823-3.646 2.127-6.076 2.127H0ZM5.165 6.533l1.822 1.822c1.823 1.823 3.646 2.127 6.076 2.127h5.013c2.43 0 3.706.152 5.681 1.519-1.975 1.367-3.25 1.519-5.681 1.519h-5.013c-2.43 0-4.253.304-6.076 2.127l-1.822 1.822h9.417c2.43 0 4.254-.303 6.076-2.126L24 12l-3.342-3.342c-1.822-1.823-3.645-2.126-6.076-2.126H5.165ZM0 .759l1.823 1.823C3.646 4.405 5.468 4.71 7.899 4.71h5.012c2.43 0 3.707.152 5.681 1.519h.244l-3.342-3.342C13.67 1.063 11.848.76 9.418.76H0Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBombardierIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
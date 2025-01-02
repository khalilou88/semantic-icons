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
  selector: 'svg[si-tricentis-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Tricentis</title>
    <svg:path
      d="M14.271 10.42 6.86 3.006 9.833.034l4.438 4.438L18.742 0l2.974 2.974ZM9.825 24l-2.973-2.974 7.445-7.445 7.412 7.412-2.974 2.973-4.438-4.437zm-4.567-4.568-2.974-2.974 4.47-4.47-4.437-4.439 2.974-2.974 7.412 7.412Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiTricentisIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}

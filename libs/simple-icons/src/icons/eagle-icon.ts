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
  selector: 'svg[si-eagle-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Eagle</title>
    <svg:path
      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.04 3.858c1.32.019 2.634.335 3.78.989.549.31.957.642 1.238.895a6.912 6.912 0 0 0-2.25 3.04c-.06.165-.123.354-.183.546a6.856 6.856 0 0 0-.252 1.605c-.003.162.002.374.003.578.012.242.05.519.08.789a7.013 7.013 0 0 0 1.753 3.586 6.889 6.889 0 0 0 1.87 1.42 7.792 7.792 0 0 1-2.629 2.166 7.717 7.717 0 0 1-3.846.808 9.16 9.16 0 0 1-.22-.013 7.695 7.695 0 0 1-1.504-.247 8.201 8.201 0 0 1-2.83-1.354 7.056 7.056 0 0 1-1.894-2.1c-.22-.38-1.49-2.644-.769-5.452A7.261 7.261 0 0 1 5.93 8.18a5.513 5.513 0 0 0-2.105 1.082C4.12 8.573 5.306 6 8.217 4.66a8.944 8.944 0 0 1 3.823-.8zm5.702 2.508c.202.126.464.309.736.572.108.103.478.468.82 1.054.413.703.549 1.327.62 1.65a5.52 5.52 0 0 1 .013 2.302 7.133 7.133 0 0 0-2.044-1.688 7.243 7.243 0 0 0-1.551.3 6.834 6.834 0 0 0-1.05.422 6.058 6.058 0 0 1 .267-1.563 5.923 5.923 0 0 1 .806-1.643 6.255 6.255 0 0 1 1.383-1.406Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiEagleIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}

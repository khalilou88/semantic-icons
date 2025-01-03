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
  selector: 'svg[si-fizz-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Fizz</title>
    <svg:path
      d="M5.822 17.813h3.274v-7.228H5.822Zm4.298-7.228v2.841h2.107l-2.243 4.387h6.779v-2.824h-2.24l2.24-4.399h-6.644v-.005zm13.88 0h-6.762v2.841h2.241l-2.24 4.387h6.633v-2.824H21.76ZM6.633 6.966l-1.23 2.736a1.587 1.587 0 0 0-.955-.324c-.56 0-1.012.363-1.012 1.125v.038H5.13v2.858H3.43v4.414H0v-7.804c0-2.292 1.737-3.822 3.895-3.822 1.056 0 2.023.351 2.738.779z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiFizzIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
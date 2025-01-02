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
  selector: 'svg[si-discord-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18.9419 5.55541C17.6473 4.94967 16.263 4.50945 14.8158 4.25879C14.638 4.58013 14.4304 5.01234 14.2872 5.35616C12.7488 5.1248 11.2244 5.1248 9.71431 5.35616C9.57116 5.01234 9.35878 4.58013 9.17947 4.25879C7.73069 4.50945 6.34478 4.95129 5.05016 5.5586C2.43887 9.5046 1.73099 13.3526 2.08493 17.1459C3.81688 18.4393 5.49534 19.225 7.14547 19.7391C7.55291 19.1784 7.91628 18.5823 8.22931 17.9541C7.63313 17.7276 7.06209 17.448 6.52256 17.1235C6.66569 17.0174 6.80572 16.9066 6.94097 16.7925C10.2318 18.3317 13.8074 18.3317 17.0589 16.7925C17.1958 16.9066 17.3358 17.0174 17.4774 17.1235C16.9362 17.4496 16.3637 17.7292 15.7675 17.9557C16.0805 18.5823 16.4423 19.18 16.8513 19.7407C18.503 19.2266 20.1831 18.4409 21.915 17.1459C22.3303 12.7485 21.2056 8.93585 18.9419 5.55541ZM8.67766 14.8131C7.68978 14.8131 6.87963 13.8908 6.87963 12.7678C6.87963 11.6447 7.67247 10.7209 8.67766 10.7209C9.68284 10.7209 10.493 11.6431 10.4757 12.7678C10.4772 13.8908 9.68284 14.8131 8.67766 14.8131ZM15.3223 14.8131C14.3344 14.8131 13.5243 13.8908 13.5243 12.7678C13.5243 11.6447 14.3171 10.7209 15.3223 10.7209C16.3275 10.7209 17.1376 11.6431 17.1203 12.7678C17.1203 13.8908 16.3275 14.8131 15.3223 14.8131Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiDiscordIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}

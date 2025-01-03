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
  selector: 'svg[si-angular-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.3062 12.5484H13.7256L11.9837 8.45161L10.3062 12.5484ZM11.9837 2L2.72559 5.32258L4.1772 17.6452L11.9837 22L19.8546 17.6452L21.274 5.32258L11.9837 2ZM17.7901 17.2258H15.5966L14.4675 14.3226H9.53204L8.3385 17.2258H6.17721L11.9837 4.22581L17.7901 17.2258Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiAngularIcon implements OnInit {
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
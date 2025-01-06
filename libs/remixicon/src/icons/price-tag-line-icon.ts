import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-price-tag-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.00488 6.99972L11.4502 1.36952C11.7861 1.14559 12.2237 1.14559 12.5596 1.36952L21.0049 6.99972V20.9997C21.0049 21.552 20.5572 21.9997 20.0049 21.9997H4.00488C3.4526 21.9997 3.00488 21.552 3.00488 20.9997V6.99972ZM5.00488 8.07009V19.9997H19.0049V8.07009L12.0049 3.40342L5.00488 8.07009ZM12.0049 10.9997C10.9003 10.9997 10.0049 10.1043 10.0049 8.99972C10.0049 7.89515 10.9003 6.99972 12.0049 6.99972C13.1095 6.99972 14.0049 7.89515 14.0049 8.99972C14.0049 10.1043 13.1095 10.9997 12.0049 10.9997Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPriceTagLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}

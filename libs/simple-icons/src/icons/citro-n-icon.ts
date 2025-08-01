import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-citro-n-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Citro&#235;n</svg:title>
    <svg:path
      d="M12 0C6.684 0 2.292 5.38 2.292 12S6.652 24 12 24c5.347 0 9.708-5.38 9.708-12S17.316 0 12 0zM4.106 16.233c-.19-.604-.35-1.241-.414-1.878L12 8.18l8.371 6.175a12.334 12.334 0 0 1-.413 1.878v.032h-.032L12 10.345zm.923 2.101-.032-.032L12 13.114l7.003 5.188v.032c-1.655 2.897-4.202 4.616-6.987 4.616s-5.363-1.751-6.987-4.616zM12 5.347l-8.53 6.335v-.032c.063-2.674.954-5.284 2.61-7.385C7.67 2.324 9.772 1.21 12 1.21c2.228 0 4.36 1.114 5.92 3.055 1.56 1.942 2.515 4.616 2.61 7.417v.032l-.031-.032z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCitroNIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#DA291C');
}

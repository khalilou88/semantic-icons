import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-facetime-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2 8.4972V15.5027C2 17.0323 3.24191 18.2694 4.76672 18.2694H13.1963C14.726 18.2694 15.9631 17.0275 15.9631 15.5027V8.4972C15.9631 6.96758 14.7212 5.73048 13.1963 5.73048H4.77152C3.24191 5.72569 2 6.96758 2 8.4972ZM20.1875 6.62234L17.0132 9.24045C16.7303 9.47538 16.5672 9.82062 16.5672 10.1851V13.8101C16.5672 14.1745 16.7255 14.515 17.0036 14.7499L20.1779 17.4159C20.9019 18.0201 22 17.507 22 16.5672V7.47586C22.0048 6.54086 20.9115 6.023 20.1875 6.62234Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFacetimeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}

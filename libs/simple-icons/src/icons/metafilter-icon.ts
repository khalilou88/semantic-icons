import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-metafilter-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>MetaFilter</svg:title>
    <svg:path
      d="M18.548 5.26l-.87 4.894h3.558l-.519 2.83h-3.592l-1.602 8.639h-2.857l3.586-19.248H24l-.537 2.885h-4.915zm-7.331-2.884L7.19 13.472V2.376H3.581L0 21.624h2.452L5.198 6.728l-.251 14.896h1.421l5.225-14.896-2.786 14.896h2.48l3.581-19.248h-3.651z"
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
export class SiMetafilterIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#065A8F');
}

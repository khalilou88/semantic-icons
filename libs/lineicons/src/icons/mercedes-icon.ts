import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mercedes-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2C6.47742 2 2 6.47742 2 12C2 17.5226 6.47742 22 12 22C17.5226 22 22 17.5226 22 12C22 6.47742 17.5226 2 12 2ZM3.81613 7.3C5.48065 4.40645 8.55484 2.60968 11.8903 2.56774L10.5968 11.1387L3.76129 16.6613C2.12258 13.7516 2.13871 10.1903 3.81613 7.3ZM12.0387 21.4806C8.69355 21.5 5.59355 19.7452 3.88387 16.871L12.0032 13.5097L20.1548 16.8194C18.4645 19.7032 15.371 21.4742 12.0387 21.4806ZM13.3645 11.2516L12.1323 2.56774C13.7645 2.59355 15.3645 3.03871 16.7742 3.86774C18.1839 4.69355 19.3548 5.87097 20.1742 7.28387C21.8484 10.1581 21.8839 13.6903 20.2774 16.6L13.3645 11.2516Z"
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
export class SiMercedesIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}

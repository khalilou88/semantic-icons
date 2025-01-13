import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-app-store-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM8.82258 15.3427L8.03226 16.7137C7.80645 17.1089 7.30242 17.2419 6.90726 17.0161C6.5121 16.7903 6.37903 16.2863 6.60484 15.8911L7.19355 14.875C7.85484 14.6694 8.39516 14.8266 8.82258 15.3427ZM13.2097 8.66129L15.6331 12.8548H17.7742C18.2298 12.8548 18.5968 13.2218 18.5968 13.6774C18.5968 14.1331 18.2298 14.5 17.7742 14.5H16.5847L17.3871 15.8911C17.6129 16.2863 17.4798 16.7863 17.0847 17.0161C16.6895 17.2419 16.1895 17.1089 15.9597 16.7137L12.9194 11.4476C12.2298 10.2581 12.7218 9.06452 13.2097 8.66129ZM13.4879 5.61694C13.8831 5.84274 14.0161 6.34677 13.7903 6.74194L10.2621 12.8508H12.8145C13.6411 12.8508 14.1048 13.8226 13.746 14.496H6.26613C5.81048 14.496 5.44355 14.129 5.44355 13.6734C5.44355 13.2177 5.81048 12.8508 6.26613 12.8508H8.3629L11.0484 8.19758L10.2097 6.74194C9.98387 6.34677 10.1169 5.84677 10.5121 5.61694C10.9073 5.39113 11.4073 5.52419 11.6371 5.91935L11.996 6.55242L12.3629 5.91935C12.5887 5.52419 13.0927 5.39113 13.4879 5.61694Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAppStoreLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}

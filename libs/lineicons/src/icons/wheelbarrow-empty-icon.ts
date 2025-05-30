import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-wheelbarrow-empty-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 5.20703C2 4.79282 2.33579 4.45703 2.75 4.45703H3.43433C4.67697 4.45703 5.68433 5.46439 5.68433 6.70703V7.10621H21.2492C21.5268 7.10621 21.7817 7.25955 21.9118 7.50479C22.0419 7.75003 22.0258 8.04706 21.8701 8.27688L18.5806 13.1323C19.5447 13.7512 20.1835 14.8327 20.1835 16.0634C20.1835 17.9856 18.6252 19.5438 16.7031 19.5438C14.9226 19.5438 13.4544 18.2068 13.2476 16.4821L9.02495 15.3379L8.11546 18.1477C7.84644 18.9788 7.07242 19.5418 6.19885 19.5418C5.08626 19.5418 4.18433 18.6398 4.18433 17.5273V6.70703C4.18433 6.29282 3.84854 5.95703 3.43433 5.95703H2.75C2.33579 5.95703 2 5.62124 2 5.20703ZM7.57545 14.9452L5.68433 14.4328V17.5273C5.68433 17.8114 5.91469 18.0418 6.19885 18.0418C6.42197 18.0418 6.61966 17.898 6.68837 17.6857L7.57545 14.9452ZM13.3983 14.9688C13.8571 13.5829 15.1633 12.583 16.7031 12.583C16.8455 12.583 16.9859 12.5916 17.1238 12.6082L19.8352 8.60621H5.68437V12.8787L13.3983 14.9688ZM16.7031 14.083C15.6093 14.083 14.7227 14.9697 14.7227 16.0634C14.7227 17.1572 15.6093 18.0438 16.7031 18.0438C17.7968 18.0438 18.6835 17.1572 18.6835 16.0634C18.6835 14.9697 17.7968 14.083 16.7031 14.083Z"
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
export class SiWheelbarrowEmptyIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}

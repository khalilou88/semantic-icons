import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-brush-1-rotated-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.8882 2.5301C11.7669 1.65142 13.1915 1.65142 14.0702 2.5301L21.4947 9.9546C22.3733 10.8333 22.3733 12.2579 21.4947 13.1366L14.0702 20.5611C13.1915 21.4397 11.7669 21.4397 10.8882 20.5611L8.7666 18.4395L6.82184 20.3842C5.94316 21.2629 4.51854 21.2629 3.63986 20.3842C2.76118 19.5056 2.76118 18.0809 3.63986 17.2023L5.58462 15.2575L3.4637 13.1366C2.58502 12.2579 2.58502 10.8333 3.4637 9.9546L10.8882 2.5301ZM13.0095 3.59076C12.7166 3.29787 12.2417 3.29787 11.9488 3.59076L6.64531 8.8943L15.1305 17.3795L20.434 12.0759C20.7269 11.783 20.7269 11.3081 20.434 11.0153L16.7214 7.30262L15.4839 8.54006C15.191 8.83295 14.7162 8.83295 14.4233 8.54006C14.1304 8.24716 14.1304 7.77229 14.4233 7.4794L15.6607 6.24196L14.6003 5.18153L11.5951 8.18673C11.3022 8.47962 10.8273 8.47962 10.5344 8.18673C10.2415 7.89384 10.2415 7.41896 10.5344 7.12607L13.5396 4.12087L13.0095 3.59076ZM14.0698 18.4401L5.58465 9.95496L4.52436 11.0153C4.23146 11.3081 4.23146 11.783 4.52436 12.0759L11.9488 19.5004C12.2417 19.7933 12.7166 19.7933 13.0095 19.5004L14.0698 18.4401ZM6.64519 16.3182L4.70052 18.2629C4.40763 18.5558 4.40763 19.0307 4.70052 19.3236C4.99341 19.6165 5.46829 19.6165 5.76118 19.3236L7.70585 17.3789L6.64519 16.3182Z"
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
export class SiBrush1RotatedIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}

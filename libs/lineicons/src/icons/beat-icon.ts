import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-beat-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.4073 3.25026C13.7628 3.25965 14.0627 3.51728 14.1257 3.8672L16.5642 17.4206L18.4564 13.0435C18.5751 12.7689 18.8456 12.5911 19.1448 12.5911H22.0234C22.4377 12.5911 22.7734 12.9269 22.7734 13.3411C22.7734 13.7553 22.4377 14.0911 22.0234 14.0911H19.6377L16.9546 20.2976C16.8234 20.6012 16.5087 20.783 16.1801 20.745C15.8515 20.7071 15.5866 20.4584 15.528 20.1328L13.2901 7.69366L11.239 16.4222C11.1675 16.7267 10.9146 16.9547 10.6044 16.9946C10.2942 17.0344 9.99191 16.8776 9.84581 16.6011L6.82861 10.891L5.4212 13.6791C5.29365 13.9317 5.03472 14.0911 4.75167 14.0911H1.87305C1.45883 14.0911 1.12305 13.7553 1.12305 13.3411C1.12305 12.9269 1.45883 12.5911 1.87305 12.5911H4.29014L6.14387 8.91892C6.27028 8.66849 6.52589 8.50955 6.80641 8.50694C7.08693 8.50432 7.34545 8.65848 7.47651 8.90651L10.2368 14.1302L12.6574 3.82844C12.7388 3.48233 13.0519 3.24088 13.4073 3.25026Z"
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
export class SiBeatIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}

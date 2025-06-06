import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pepsi-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18.0054 4.04065C17.9152 3.97232 17.8296 3.89814 17.7491 3.81856C16.0674 2.63241 14.0593 1.99703 12.0014 2.00001C6.48105 2.00001 2.00587 6.47714 2.00587 12C2.00282 14.1521 2.69673 16.2474 3.98378 17.9723C7.32867 16.9846 10.2469 15.2662 12.7479 12.7826C15.2458 10.3108 17.001 7.38534 18.0054 4.04065Z"
      fill="#323544"
    />
    <svg:path
      d="M12.0016 21.9997C17.5215 21.9997 21.9967 17.522 21.9967 11.9995C21.9967 10.0446 21.4357 8.22179 20.4667 6.68182C20.4412 6.65642 20.4184 6.62856 20.3985 6.59863C20.6019 7.26981 20.7049 7.96737 20.7041 8.66869C20.7041 9.80345 20.4419 10.8774 19.9268 11.8831C19.4175 12.8381 18.7014 13.6674 17.8309 14.3106C17.1323 14.8259 16.2938 15.2626 15.3067 15.6207C14.5211 15.9082 13.4991 16.2055 12.233 16.4932L8.58227 17.3148C7.03022 17.6705 5.61667 18.0511 4.35742 18.4409C6.19078 20.6176 8.93449 21.9997 12.0016 21.9997Z"
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
export class SiPepsiIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-volume-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.0052 4.65867C11.4562 3.36887 13.75 4.39892 13.75 6.34034V17.6598C13.75 19.6012 11.4562 20.6313 10.0052 19.3415L6.80862 16.5001H4.75C3.50736 16.5001 2.5 15.4927 2.5 14.2501V9.75009C2.5 8.50745 3.50736 7.50009 4.75 7.50009H6.80858L10.0052 4.65867ZM12.25 6.34034C12.25 5.6932 11.4854 5.34985 11.0017 5.77978L7.592 8.81064C7.45472 8.93268 7.27742 9.00009 7.09373 9.00009H4.75C4.33579 9.00009 4 9.33587 4 9.75009V14.2501C4 14.6643 4.33579 15.0001 4.75 15.0001H7.09377C7.27745 15.0001 7.45475 15.0675 7.59204 15.1895L11.0017 18.2204C11.4854 18.6503 12.25 18.3069 12.25 17.6598V6.34034Z"
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
export class SiVolumeOffIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}

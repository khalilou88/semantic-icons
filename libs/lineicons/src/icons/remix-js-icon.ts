import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-remix-js-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.932 17.4236C20.1121 19.7344 20.1121 20.8176 20.1121 22H14.7616C14.7616 21.7425 14.7662 21.5068 14.7709 21.268C14.7854 20.5252 14.8005 19.7508 14.6801 18.1868C14.5209 15.8971 13.5342 15.3883 11.7198 15.3883H3.30469V11.2224H11.9745C14.2663 11.2224 15.4122 10.5257 15.4122 8.68124C15.4122 7.05938 14.2663 6.07652 11.9745 6.07652H3.30469V2H12.9294C18.1177 2 20.696 4.4487 20.696 8.36025C20.696 11.286 18.8817 13.194 16.4308 13.512C18.4997 13.9255 19.7093 15.1021 19.932 17.4236Z"
      fill="#323544"
    />
    <svg:path
      d="M3.30469 22V18.8944H8.96203C9.907 18.8944 10.1122 19.5948 10.1122 20.0124V22H3.30469Z"
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
export class SiRemixJsIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}

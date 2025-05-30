import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-playstation-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14.0364 8.05872V12.8718C16.0714 13.8732 17.6543 12.8718 17.6543 10.2876C17.6543 7.63879 16.6852 6.47589 13.9718 5.5068C12.8735 5.15147 10.8707 4.53772 9.48166 4.2793V18.6863L12.7442 19.72V7.67109C12.7442 7.08964 13.0027 6.702 13.4226 6.86352C13.9071 6.96043 14.0364 7.50957 14.0364 8.05872Z"
      fill="#323544"
    />
    <svg:path
      d="M20.4974 14.4224C19.1407 13.9379 17.3963 13.7441 16.0073 13.8733C14.586 14.0025 13.5846 14.3578 13.5846 14.3578L13.3585 14.4547V16.3929L16.8472 15.1654C17.4286 14.9393 18.3008 14.907 18.7853 15.0685C19.2699 15.1977 19.2053 15.5207 18.5915 15.7468L13.3262 17.5558V19.4616L20.4651 16.9097C20.4651 16.9097 21.4342 16.5544 21.8218 16.0376C22.2094 15.6176 22.0479 14.9393 20.4974 14.4224Z"
      fill="#323544"
    />
    <svg:path
      d="M2.37491 15.5207C1.66425 16.0698 1.92267 16.9743 3.5055 17.4265C5.18526 17.9757 6.89731 18.1049 8.51244 17.8465C8.60935 17.8465 8.73856 17.8142 8.83547 17.8142V16.1344L7.18803 16.7159C6.60658 16.942 5.73441 16.9743 5.24986 16.8128C4.76532 16.6836 4.82993 16.3605 5.47598 16.1344L8.83547 14.9392V13.001L4.15156 14.6808C4.18386 14.6485 3.05327 15.0038 2.37491 15.5207Z"
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
export class SiPlaystationIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-podcastindex-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Podcast Index</title>
      <path
        d="M5.0056.0056c-.2362.0208-.4667.1034-.6462.2366C1.7274 2.2537.1728 4.9759.2924 8.289c.1197 3.1949 1.6743 6.2709 4.067 8.0458.2393.1183.4795.2366.7188.2366.3589 0 .7172-.1182.9564-.4732.4786-.5917.3594-1.3013-.2388-1.6563-1.9142-1.3016-3.1105-3.7863-3.1105-6.1529 0-2.4848 1.0767-4.6157 3.1105-6.154.5982-.355.5977-1.183.2388-1.6562-.2243-.3698-.6353-.508-1.029-.4732Zm13.7533 0c-.314.0295-.613.1774-.7924.4732-.3589.4733-.3593 1.3012.2389 1.6562 2.0338 1.5383 3.1105 3.6692 3.1105 6.154 0 2.3666-1.1964 4.8513-3.1105 6.153-.5982.355-.7174 1.0645-.2389 1.6562.2393.355.5987.4732.9576.4732.2393 0 .4784-.1183.7176-.2366 2.5124-1.775 4.067-4.851 4.067-8.0458.1077-3.3131-1.435-6.0353-4.067-8.0468-.2392-.1775-.5687-.2662-.8828-.2366ZM16.4944 3.558c-.3065.0118-.609.1395-.8303.3761-.4546.4733-.4183 1.2307.0602 1.6686 1.5314 1.408 1.6627 3.7978-.0122 5.3716-.4666.4615-.4904 1.2075-.0357 1.6808.4546.4733 1.2078.4965 1.6863.0469 2.7158-2.5559 2.4881-6.5196-.0122-8.827-.2393-.2248-.5495-.3288-.856-.317zm-8.9933.0067c-.305-.0118-.6167.0914-.856.3103-2.5004 2.3074-2.7269 6.2711-.0111 8.827.4785.4496 1.2317.4264 1.6863-.0469.4547-.4733.4306-1.2189-.048-1.6685-1.6749-1.5738-1.5316-3.9647-.0122-5.3728.4785-.4496.5148-1.194.0602-1.6674-.2153-.2426-.514-.3699-.8192-.3817Zm4.499 2.1496a2.5714 2.5714 0 0 0-2.5715 2.5714 2.5714 2.5714 0 0 0 1.193 2.1696L7.7144 24h2.5246l2.8772-13.4018a2.5714 2.5714 0 0 0 1.4553-2.3125A2.5714 2.5714 0 0 0 12 5.7143Z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPodcastindexIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}

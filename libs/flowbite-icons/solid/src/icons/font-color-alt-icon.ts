import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-font-color-alt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="currentColor"
      d="M19.9999 18.0661c0 1.6203-1.3431 2.9339-3 2.9339-1.6568 0-3-1.3136-3-2.9339 0-1.6204 3-6.0661 3-6.0661s3 4.4457 3 6.0661Z"
    />
    <svg:path
      fill="currentColor"
      fill-rule="evenodd"
      d="M10.4817 7.52489 9.12238 10.9817H11.841l-1.3593-3.45681Zm3.7494 4.06961-2.7166-6.90843c-.3694-.93918-1.69627-.93917-2.06558 0L6.76269 11.5173c-.03333.0634-.06004.1309-.07922.2014l-1.28309 3.263h-.41869c-.55229 0-1 .4477-1 1s.44771 1 1 1h2.75c.55228 0 1-.4477 1-1s-.44772-1-1-1h-.18223l.78646-2h4.29158l.3676.9349c.2021.514.7826.7668 1.2966.5647.514-.2021.7668-.7826.5647-1.2966l-.6085-1.5473c-.0053-.0144-.0109-.0287-.0168-.0429Z"
      clip-rule="evenodd"
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
export class SiFontColorAltIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-edit-circle-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16.6256 3.1285L9.29145 10.4626L9.29886 14.7098L13.537 14.7024L20.8682 7.37114C21.5912 8.75438 22 10.3278 22 11.9967C22 17.5196 17.5228 21.9967 12 21.9967C6.47715 21.9967 2 17.5196 2 11.9967C2 6.47386 6.47715 1.9967 12 1.9967C13.6689 1.9967 15.2423 2.40553 16.6256 3.1285ZM20.4853 2.09721L21.8995 3.51142L12.7071 12.7038L11.2954 12.7063L11.2929 11.2896L20.4853 2.09721Z"
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
export class SiEditCircleFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}

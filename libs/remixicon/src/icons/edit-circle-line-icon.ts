import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-edit-circle-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.6844 4.02547C12.4588 4.00646 12.2306 3.9967 12 3.9967C7.58172 3.9967 4 7.57843 4 11.9967C4 16.415 7.58172 19.9967 12 19.9967C16.4183 19.9967 20 16.415 20 11.9967C20 11.7662 19.9902 11.5379 19.9711 11.3123C19.8996 10.4646 19.6953 9.6442 19.368 8.87344L20.8682 7.37114C21.2031 8.01192 21.4706 8.6935 21.6613 9.40649C21.8213 10.0063 21.9258 10.6222 21.9723 11.248C21.9907 11.4952 22 11.7449 22 11.9967C22 17.5196 17.5228 21.9967 12 21.9967C6.47715 21.9967 2 17.5196 2 11.9967C2 6.47386 6.47715 1.9967 12 1.9967C12.2518 1.9967 12.5015 2.00601 12.7487 2.02431C13.3745 2.07081 13.9904 2.17542 14.5898 2.3358C15.3032 2.52609 15.9848 2.79359 16.6256 3.1285L15.1247 4.62934C14.3525 4.30143 13.5321 4.09707 12.6844 4.02547ZM20.4853 2.09721L21.8995 3.51142L12.7071 12.7038L11.2954 12.7063L11.2929 11.2896L20.4853 2.09721Z"
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
export class SiEditCircleLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}

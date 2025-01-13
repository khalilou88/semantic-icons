import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-turn-sharp-left-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m8 6.83.88.88a.996.996 0 1 0 1.41-1.41L7.71 3.71a.996.996 0 0 0-1.41 0L3.71 6.29A.996.996 0 1 0 5.12 7.7L6 6.83V13c0 1.1.9 2 2 2h8v5c0 .55.45 1 1 1s1-.45 1-1v-5c0-1.1-.9-2-2-2H8V6.83z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTurnSharpLeftIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-school-xmark-alt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.65111 11.6306 12 5.04736l5.3489 6.58324c.1899.2337.475.3694.7761.3694H21v1.0646c-.8482-.2477-1.8019-.0371-2.4708.6319-.9763-.9764-2.5592-.9763-3.5355 0-.0357.0356-.0701.0721-.1032.1094.0714-.2564.1095-.5267.1095-.8059 0-1.6568-1.3432-3-3-3-1.6569 0-3.00001 1.3432-3.00001 3 0 1.6569 1.34311 3 3.00001 3 .9389 0 1.777-.4313 2.3271-1.1066-.19.8138.0322 1.7042.6666 2.3386-.7484.7484-.9231 1.8532-.5242 2.768H4c-.55228 0-1-.4477-1-1v-7h2.87499c.30113 0 .58623-.1357.77612-.3694Z"
    />
    <svg:path
      d="M17.4685 14.7571c-.3905-.3905-1.0237-.3905-1.4142 0-.3905.3905-.3905 1.0237 0 1.4142l1.0607 1.0607-1.0607 1.0607c-.3905.3905-.3905 1.0236 0 1.4142.3905.3905 1.0237.3905 1.4142 0l1.0607-1.0607 1.0606 1.0607c.1465.1464.327.2379.5161.2746.0145.0028.0291.0052.0437.0074.3025.0448.6216-.0492.8544-.282.3906-.3906.3906-1.0237 0-1.4142l-1.0606-1.0607L21 16.1754l.004-.0041c.3906-.3905.3906-1.0237 0-1.4142l-.004-.004c-.0403-.0398-.0831-.0756-.128-.1072-.3902-.2749-.9331-.2378-1.2822.1112l-1.0606 1.0607-1.0607-1.0607ZM12 12c-.5523 0-1 .4477-1 1s.4477 1 1 1 1-.4477 1-1-.4477-1-1-1Zm-9.5-2 2.7-3.59999c.18885-.2518.48524-.4.8-.4h2.64902L5.39902 10H2.5Zm12.851-3.99999L18.601 10H21.5l-2.7-3.59999c-.1888-.2518-.4852-.4-.8-.4h-2.649Z"
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
export class SiSchoolXmarkAltIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}

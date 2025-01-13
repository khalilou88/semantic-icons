import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-looker-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Looker</svg:title>
    <svg:path
      d="M11.9475 0c-1.1598.0021-2.0982.944-2.096 2.1038a2.1 2.1 0 00.356 1.166l.895-.8959a.884.884 0 11.565.564l-.895.895c.9593.6478 2.2621.3953 2.91-.564.6478-.9593.3953-2.262-.564-2.91A2.096 2.096 0 0011.9475 0zm-.835 6.1128a3.2629 3.2629 0 00-.653-1.965l-1.164 1.162a1.667 1.667 0 01-.318 2.012l.632 1.5449a3.2819 3.2819 0 001.503-2.754zm-3.2499 1.666h-.03c-.9217.0009-1.6697-.7455-1.6707-1.6673-.001-.9217.7454-1.6697 1.6672-1.6707a1.669 1.669 0 01.9195.275l1.152-1.152c-1.4069-1.141-3.4724-.9257-4.6135.4811s-.9257 3.4723.481 4.6135a3.2799 3.2799 0 002.7275.6652l-.633-1.5439v-.001zm4.1279 1.3359c-.728 0-1.452.106-2.15.315l.922 2.2519c2.6872-.6819 5.4184.9438 6.1002 3.631.6818 2.6873-.9439 5.4184-3.6311 6.1002s-5.4184-.9439-6.1002-3.631c-.5682-2.2394.4655-4.5774 2.5041-5.6643l-.91-2.2449c-3.6908 1.808-5.2173 6.2657-3.4093 9.9567l.0005.001c1.808 3.6909 6.2657 5.2173 9.9567 3.4093l.001-.0005c3.6913-1.8071 5.2187-6.2645 3.4116-9.9558a7.4417 7.4417 0 00-6.6865-4.1696h-.008l-.001.001z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLookerIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#4285F4');
}

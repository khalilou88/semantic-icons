import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-pluscodes-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Plus Codes</svg:title>
    <svg:path
      d="M12 0a2.4 2.4 0 00-2.4 2.4A2.4 2.4 0 0012 4.8a2.4 2.4 0 002.4-2.4A2.4 2.4 0 0012 0zM9.543 9.543v4.914h4.914V9.543zM2.4 9.6A2.4 2.4 0 000 12a2.4 2.4 0 002.4 2.4A2.4 2.4 0 004.8 12a2.4 2.4 0 00-2.4-2.4zm19.2 0a2.4 2.4 0 00-2.4 2.4 2.4 2.4 0 002.4 2.4A2.4 2.4 0 0024 12a2.4 2.4 0 00-2.4-2.4zM12 19.2a2.4 2.4 0 00-2.4 2.4A2.4 2.4 0 0012 24a2.4 2.4 0 002.4-2.4 2.4 2.4 0 00-2.4-2.4z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPluscodesIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#4285F4');
}

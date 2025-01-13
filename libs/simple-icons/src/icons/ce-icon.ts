import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-ce-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>CE</svg:title>
    <svg:path
      d="M24 20.53v-2.59a6 6 0 0 1-.857.06 6 6 0 0 1-5.862-4.714h5.005v-2.571H17.28A6 6 0 0 1 24 6.06V3.47a9 9 0 0 0-.857-.042 8.571 8.571 0 1 0 .857 17.1M0 12a8.57 8.57 0 0 0 9.486 8.524V17.93q-.448.07-.915.07a6 6 0 1 1 .915-11.93V3.477a9 9 0 0 0-.915-.048A8.57 8.57 0 0 0 0 12"
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
export class SiCeIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}

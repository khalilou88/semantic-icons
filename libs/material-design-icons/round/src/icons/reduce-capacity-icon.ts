import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-reduce-capacity-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4.78 3.58A6.95 6.95 0 0 0 18 7c-.67 0-1.31.1-1.92.28.58.55.92 1.32.92 2.15V10h5v-.57c0-.81-.48-1.53-1.22-1.85zM6 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.92 1.28C7.31 7.1 6.67 7 6 7c-.99 0-1.93.21-2.78.58A2.01 2.01 0 0 0 2 9.43V10h5v-.57c0-.83.34-1.6.92-2.15zM10 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6H8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 16 9.43V10zm-1 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6h-8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 21 21.43V22zM5 16c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6H3v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 11 21.43V22zm2.79-9h-1.04v-1.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75V13h-1.04c-.45 0-.67.54-.35.85l1.79 1.79c.2.2.51.2.71 0l1.79-1.79a.5.5 0 0 0-.36-.85z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiReduceCapacityIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

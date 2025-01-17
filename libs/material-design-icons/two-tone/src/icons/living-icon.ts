import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-living-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 20h16V4H4v16zm1-7.5c0-.92.51-1.72 1.25-2.15V9c0-1.66 1.34-3 3-3h5.5c1.66 0 3 1.34 3 3v1.35c.74.43 1.25 1.23 1.25 2.15V16c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-3.5z"
      opacity=".3"
    />
    <svg:path
      d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zM7 18h10c1.1 0 2-.9 2-2v-3.5c0-.92-.51-1.72-1.25-2.15V9c0-1.66-1.34-3-3-3h-5.5c-1.66 0-3 1.34-3 3v1.35C5.51 10.78 5 11.58 5 12.5V16c0 1.1.9 2 2 2zm.75-9c0-.83.67-1.5 1.5-1.5h5.5c.83 0 1.5.67 1.5 1.5v1.03A2.48 2.48 0 0 0 14 12.5v.5h-4v-.5c0-1.3-.99-2.35-2.25-2.47V9zM6.5 12.5c0-.55.45-1 1-1s1 .45 1 1v2h7v-2c0-.55.45-1 1-1s1 .45 1 1V16c0 .28-.22.5-.5.5H7c-.28 0-.5-.22-.5-.5v-3.5z"
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
export class SiLivingIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

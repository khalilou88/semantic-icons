import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-co-present-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="9" cy="10" r="2" opacity=".3" />
    <svg:path
      d="M14.48 18.34C13.29 17.73 11.37 17 9 17c-2.37 0-4.29.73-5.48 1.34-.62.32-.52.94-.52 1.66h12c0-.71.11-1.34-.52-1.66z"
      opacity=".3"
    />
    <svg:path
      d="M21 3H3c-1.1 0-2 .9-2 2v8h2V5h18v16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
    />
    <svg:path
      d="M13 10c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zm-6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm8.39 6.56C13.71 15.7 11.53 15 9 15s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 19.22V22h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM15 20H3c0-.72-.1-1.34.52-1.66C4.71 17.73 6.63 17 9 17c2.37 0 4.29.73 5.48 1.34.63.32.52.95.52 1.66z"
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
export class SiCoPresentIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

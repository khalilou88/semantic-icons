import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-file-tray-full-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M128 128h256v38H128zM112 192h288v38H112z" />
    <svg:path
      d="M448 64H64L32 256v192h448V256Zm-12 192H320a64 64 0 0 1-128 0H76l22-150h316Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFileTrayFullSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}

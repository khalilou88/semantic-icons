import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-toggle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M368 112H144C64.6 112 0 176.6 0 256s64.6 144 144 144h224c79.4 0 144-64.6 144-144s-64.6-144-144-144zm0 256a112 112 0 11112-112 112.12 112.12 0 01-112 112z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiToggleIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}

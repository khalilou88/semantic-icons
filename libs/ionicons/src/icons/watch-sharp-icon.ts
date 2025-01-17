import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-watch-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect x="136" y="136" width="240" height="240" rx="8" ry="8" />
    <svg:path
      d="M384 96h-48V16H176v80h-48a32 32 0 00-32 32v256a32 32 0 0032 32h48v80h160v-80h48a32 32 0 0032-32V128a32 32 0 00-32-32zm8 272a24 24 0 01-24 24H144a24 24 0 01-24-24V144a24 24 0 0124-24h224a24 24 0 0124 24z"
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
export class SiWatchSharpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-lc-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:g fill-rule="evenodd">
      <svg:path fill="#65cfff" d="M0 0h512v512H0z" />
      <svg:path fill="#fff" d="m254.8 44.8 173.5 421.6-344 1L254.7 44.8z" />
      <svg:path fill="#000001" d="m255 103 150 362.6-297.5.8z" />
      <svg:path fill="#ffce00" d="m254.8 256.1 173.5 210.8-344 .5z" />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLcFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}

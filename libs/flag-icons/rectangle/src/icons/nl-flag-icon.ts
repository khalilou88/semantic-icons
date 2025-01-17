import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-nl-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#ae1c28" d="M0 0h640v160H0z" />
    <svg:path fill="#fff" d="M0 160h640v160H0z" />
    <svg:path fill="#21468b" d="M0 320h640v160H0z" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNlFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 480');
}

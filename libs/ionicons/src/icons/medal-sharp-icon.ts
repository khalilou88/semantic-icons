import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-medal-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M80 32L16 160h289.11l80.22-128H80z" />
    <svg:path
      d="M496 144L424 32 298 231.08a128 128 0 00-84 0L189.53 192H43.82l86.66 134.89a128 128 0 10251 0zM256 422a70 70 0 1170-70 70.08 70.08 0 01-70 70z"
    />
    <svg:circle cx="256" cy="352" r="32" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMedalSharpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}

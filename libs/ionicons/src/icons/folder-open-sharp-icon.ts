import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-folder-open-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16.08 189.4l28.58 233.87A28 28 0 0072.52 448h367a28 28 0 0027.86-24.73l28.54-233.87A12 12 0 00484 176H28a12 12 0 00-11.92 13.4zM464 124a28 28 0 00-28-28H244.84l-48-32H76a28 28 0 00-28 28v52h416z"
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
export class SiFolderOpenSharpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}

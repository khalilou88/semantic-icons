import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-lock-closed-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M420 192h-68v-80a96 96 0 1 0-192 0v80H92a12 12 0 0 0-12 12v280a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V204a12 12 0 0 0-12-12m-106 0H198v-80.75a58 58 0 1 1 116 0Z"
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
export class SiLockClosedSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}

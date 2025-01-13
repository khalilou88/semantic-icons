import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-enter-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M160 136v104h153.37l-52.68-52.69a16 16 0 0122.62-22.62l80 80a16 16 0 010 22.62l-80 80a16 16 0 01-22.62-22.62L313.37 272H160v104a56.06 56.06 0 0056 56h208a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56H216a56.06 56.06 0 00-56 56zM48 240a16 16 0 000 32h112v-32z"
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
export class SiEnterIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}

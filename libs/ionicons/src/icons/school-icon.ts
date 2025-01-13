import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-school-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M256 368a16 16 0 01-7.94-2.11L108 285.84a8 8 0 00-12 6.94V368a16 16 0 008.23 14l144 80a16 16 0 0015.54 0l144-80a16 16 0 008.23-14v-75.22a8 8 0 00-12-6.94l-140.06 80.05A16 16 0 01256 368z"
    />
    <svg:path
      d="M495.92 190.5v-.11a16 16 0 00-8-12.28l-224-128a16 16 0 00-15.88 0l-224 128a16 16 0 000 27.78l224 128a16 16 0 0015.88 0L461 221.28a2 2 0 013 1.74v144.53c0 8.61 6.62 16 15.23 16.43A16 16 0 00496 368V192a14.76 14.76 0 00-.08-1.5z"
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
export class SiSchoolIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}

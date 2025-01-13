import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-deepcool-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>DeepCool</svg:title>
    <svg:path
      d="M12 12v3.046H3.046V6h6V0H12v9.046H6.092V12H12Zm8.954 3.046V18h-5.908v6H12v-8.954h8.954Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDeepcoolIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#068584');
}

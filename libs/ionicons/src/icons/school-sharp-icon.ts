import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-school-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M256 370.43 96 279v98.42l160 88.88 160-88.88V279z" />
    <svg:path
      d="M512.25 192 256 45.57-.25 192 256 338.43l208-118.86V384h48V192.14z"
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
export class SiSchoolSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}

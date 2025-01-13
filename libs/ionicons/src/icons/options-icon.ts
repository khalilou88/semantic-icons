import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-options-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M64 144h226.75a48 48 0 0090.5 0H448a16 16 0 000-32h-66.75a48 48 0 00-90.5 0H64a16 16 0 000 32zM448 368h-66.75a48 48 0 00-90.5 0H64a16 16 0 000 32h226.75a48 48 0 0090.5 0H448a16 16 0 000-32zM448 240H221.25a48 48 0 00-90.5 0H64a16 16 0 000 32h66.75a48 48 0 0090.5 0H448a16 16 0 000-32z"
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
export class SiOptionsIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}

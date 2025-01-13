import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-happy-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM328 208a24 24 0 11-24 24 23.94 23.94 0 0124-24zm-144 0a24 24 0 11-24 24 23.94 23.94 0 0124-24zm72.05 176c-45.42 0-83.75-29.49-95.72-69.83C159.29 310.65 158 304 158 304h196s-1.31 6.69-2.33 10.17c-11.78 40.36-50.2 69.83-95.62 69.83z"
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
export class SiHappySharpIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}

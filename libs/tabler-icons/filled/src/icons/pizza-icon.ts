import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pizza-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M12.89 2.542l8.5 16.517a1 1 0 0 1 -.446 1.354a20.1 20.1 0 0 1 -8.945 2.087l-.522 -.007a20.1 20.1 0 0 1 -8.423 -2.08a1 1 0 0 1 -.443 -1.354l8.5 -16.517a1 1 0 0 1 1.778 0m-7.064 14.64l-.96 1.865l.409 .17a18.2 18.2 0 0 0 6.226 1.276l.5 .007a18.1 18.1 0 0 0 6.708 -1.279l.424 -.176l-.89 -1.728a15.9 15.9 0 0 1 -6.046 1.183a15.9 15.9 0 0 1 -6.37 -1.318m5.174 -4.192a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883m2 -2.99a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPizzaIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}

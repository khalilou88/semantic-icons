import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-figma-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5.33317 5.33333C5.33317 3.49238 6.82556 2 8.6665 2H11.9997H11.9998H15.333C17.174 2 18.6663 3.49238 18.6663 5.33333C18.6663 7.17428 17.174 8.66667 15.333 8.66667H11.9998H11.9997L11.9997 12L11.9997 15.3333V18.6667C11.9997 20.5076 10.5073 22 8.66634 22C6.82539 22 5.33301 20.5076 5.33301 18.6667C5.33301 16.8257 6.82539 15.3333 8.66634 15.3333C6.82539 15.3333 5.33301 13.841 5.33301 12C5.33301 10.1591 6.82539 8.66667 8.66634 8.66667H8.6665C6.82555 8.66667 5.33317 7.17428 5.33317 5.33333ZM11.9997 12C11.9997 13.841 13.4921 15.3333 15.333 15.3333C17.174 15.3333 18.6663 13.841 18.6663 12C18.6663 10.1591 17.174 8.66667 15.333 8.66667C13.4921 8.66667 11.9997 10.1591 11.9997 12Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFigmaFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-soap-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14.25 6c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75m0-1.5C13.01 4.5 12 5.51 12 6.75S13.01 9 14.25 9s2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25zm5.75 1c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5M20 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-2-1.5c0 .83-.67 1.5-1.5 1.5S15 3.33 15 2.5 15.67 1 16.5 1s1.5.67 1.5 1.5zM1.94 11.79c-.6.56-.94 1.35-.94 2.18V20c0 1.66 1.34 3 3 3h13.68c.65 0 1.25-.47 1.32-1.12.08-.75-.51-1.38-1.24-1.38H12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h7.18c.65 0 1.25-.47 1.32-1.12.08-.75-.51-1.38-1.24-1.38H12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h8.18c.65 0 1.25-.47 1.32-1.12.08-.75-.51-1.38-1.24-1.38H12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6.18c.65 0 1.25-.47 1.32-1.12.08-.75-.51-1.38-1.24-1.38h-9.9l1.49-2.61a1.065 1.065 0 0 0-.12-1.23l-.42-.45c-.38-.39-1.01-.41-1.41-.03l-6.46 6.11z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSoapIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

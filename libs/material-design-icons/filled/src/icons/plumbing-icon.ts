import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-plumbing-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m19.28 4.93-2.12-2.12c-.78-.78-2.05-.78-2.83 0L11.5 5.64l2.12 2.12 2.12-2.12 3.54 3.54a3.012 3.012 0 0 0 0-4.25zM5.49 13.77c.59.59 1.54.59 2.12 0l2.47-2.47-2.12-2.13-2.47 2.47c-.59.59-.59 1.54 0 2.13z"
    />
    <svg:path
      d="m15.04 7.76-.71.71-.71.71L10.44 6c-.59-.6-1.54-.6-2.12-.01a1.49 1.49 0 0 0 0 2.12l3.18 3.18-.71.71-6.36 6.36c-.78.78-.78 2.05 0 2.83.78.78 2.05.78 2.83 0L16.45 12a.996.996 0 1 0 1.41-1.41l-2.82-2.83z"
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
export class SiPlumbingIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

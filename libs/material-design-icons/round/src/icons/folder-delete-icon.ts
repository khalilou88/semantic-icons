import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-folder-delete-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16.5 15.5h-2v-4h2v4zM20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-1.75 5.5H18v4c0 .83-.67 1.5-1.5 1.5h-2c-.83 0-1.5-.67-1.5-1.5v-4h-.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.75v-.25c0-.41.34-.75.75-.75h.5c.41 0 .75.34.75.75V10h1.75c.41 0 .75.34.75.75s-.34.75-.75.75z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFolderDeleteIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

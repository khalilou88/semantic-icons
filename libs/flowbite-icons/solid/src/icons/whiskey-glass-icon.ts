import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-whiskey-glass-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="currentColor"
      fill-rule="evenodd"
      d="M6 6c-.27965 0-.54652.1171-.73588.32289-.18935.20579-.28389.48147-.26066.76016l.84717 10.16605C5.9802 18.804 7.28 20 8.84027 20h6.31943c1.5603 0 2.8601-1.196 2.9897-2.7509l.8471-10.16605c.0233-.27869-.0713-.55437-.2606-.76016C18.5465 6.1171 18.2797 6 18 6H6Zm1.50347 7L7.0868 8h9.8264l-.4167 5H7.50347Z"
      clip-rule="evenodd"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWhiskeyGlassIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}

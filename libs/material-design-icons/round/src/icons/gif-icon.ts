import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-gif-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.25 9c.41 0 .75.34.75.75v4.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4.5c0-.41.34-.75.75-.75zM10 9.75c0-.41-.34-.75-.75-.75H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-1.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.75h-2v-3h2.75c.41 0 .75-.34.75-.75zm9 0c0-.41-.34-.75-.75-.75H15.5c-.55 0-1 .45-1 1v4.25c0 .41.34.75.75.75s.75-.34.75-.75V13h1.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H16v-1h2.25c.41 0 .75-.34.75-.75z"
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
export class SiGifIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

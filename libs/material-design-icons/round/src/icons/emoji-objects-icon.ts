import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-emoji-objects-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 3c-.46 0-.93.04-1.4.14-2.76.53-4.96 2.76-5.48 5.52-.48 2.61.48 5.01 2.22 6.56.43.38.66.91.66 1.47V19c0 1.1.9 2 2 2h.28a1.98 1.98 0 0 0 3.44 0H14c1.1 0 2-.9 2-2v-2.31c0-.55.22-1.09.64-1.46A6.956 6.956 0 0 0 19 10c0-3.87-3.13-7-7-7zm.5 11h-1v-2.59L9.67 9.59l.71-.71L12 10.5l1.62-1.62.71.71-1.83 1.83V14zm1 5c-.01 0-.02-.01-.03-.01V19h-2.94v-.01c-.01 0-.02.01-.03.01-.28 0-.5-.22-.5-.5s.22-.5.5-.5c.01 0 .02.01.03.01V18h2.94v.01c.01 0 .02-.01.03-.01.28 0 .5.22.5.5s-.22.5-.5.5zm0-2h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5z"
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
export class SiEmojiObjectsIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

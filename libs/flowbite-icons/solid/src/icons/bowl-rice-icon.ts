import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bowl-rice-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="currentColor"
      fill-rule="evenodd"
      d="M12.2605 3.79368c-.281-.22353-.5975-.3898-.9173-.5062-.7024-.25567-1.49918-.30568-2.24095-.18661-1.15818.18592-2.51613.88193-2.97474 2.22764-.40442.04107-.77944.1442-1.12195.31017-.59942.29046-1.02697.73841-1.32274 1.22999C3.11436 7.81349 3 8.97014 3 9.78568c0 .89142.27124 1.65012.76053 2.21432H20.3218c.0101-.0125.0201-.0251.0301-.0379.4919-.6324.6411-1.4185.6479-2.12509.1233-1.32715-.3036-2.47-1.0971-3.27874-.6018-.6132-1.3829-1.00304-2.2193-1.15392-.431-1.19435-1.444-2.10209-2.8973-2.26254-.9135-.10087-1.819.19102-2.5256.65187ZM9 8c0-.55228.44772-1 1-1h.01c.5523 0 1 .44772 1 1s-.4477 1-1 1H10c-.55228 0-1-.44772-1-1Zm4 0c0-.55228.4477-1 1-1h.01c.5523 0 1 .44772 1 1s-.4477 1-1 1H14c-.5523 0-1-.44772-1-1Zm-7 2c0-.55228.44772-1 1-1h.01c.55228 0 1 .44772 1 1 0 .5523-.44772 1-1 1H7c-.55228 0-1-.4477-1-1Zm5 0c0-.55228.4477-1 1-1h.01c.5523 0 1 .44772 1 1 0 .5523-.4477 1-1 1H12c-.5523 0-1-.4477-1-1Zm5 0c0-.55228.4477-1 1-1h.01c.5523 0 1 .44772 1 1 0 .5523-.4477 1-1 1H17c-.5523 0-1-.4477-1-1Z"
      clip-rule="evenodd"
    />
    <svg:path
      fill="currentColor"
      d="M20.6134 14.6222c.1145-.3088-.1249-.6222-.4542-.6222H3.84086c-.32935 0-.56875.3134-.45429.6222.76918 2.0753 2.462 3.7423 4.59004 4.6741V20c0 .5523.44772 1 1 1h6.04679c.5523 0 1-.4477 1-1v-.7037c2.128-.9318 3.8209-2.5988 4.59-4.6741Z"
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
export class SiBowlRiceIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}

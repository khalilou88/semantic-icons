import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-glass-water-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="currentColor"
      fill-rule="evenodd"
      d="M6 2c-.27677 0-.54116.11471-.73024.31682-.18909.20211-.28595.47354-.26754.7497L6.07775 19.1996C6.18281 20.7755 7.49172 22 9.07111 22h5.85779c1.5794 0 2.8883-1.2246 2.9934-2.8004l1.0755-16.13308c.0184-.27616-.0785-.54759-.2676-.7497C18.5412 2.11471 18.2768 2 18 2H6Zm1.2124 4.15264L7.06889 4h9.86221l-.1651 2.47714-.0179.0163c-.133.12056-.3226.28077-.5474.43924-.4853.34209-.9823.56732-1.3743.56732-.2473 0-.3394-.06433-.6919-.4371l-.0272-.02876C13.7466 6.65192 13.1314 6 11.9894 6c-1.1421 0-1.7573.65192-2.11794 1.03414l-.02716.02876c-.35252.37277-.44468.4371-.69195.4371-.24728 0-.33944-.06433-.69196-.4371l-.02716-.02876c-.25189-.26693-.62791-.66541-1.22083-.8815Z"
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
export class SiGlassWaterIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}

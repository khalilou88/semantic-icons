import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-swap-3-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.00008 5.91424L3.70718 8.20714L2.29297 6.79292L7.00008 2.08582L11.7072 6.79292L10.293 8.20714L8.00008 5.91424L8.00007 11H6.00008L6.00008 5.91424ZM12.5001 7.00003C12.5001 9.48531 14.5148 11.5 17.0001 11.5C19.4854 11.5 21.5001 9.48531 21.5001 7.00003C21.5001 4.51475 19.4854 2.50003 17.0001 2.50003C14.5148 2.50003 12.5001 4.51475 12.5001 7.00003ZM21.7072 17.2071L20.293 15.7929L18.0001 18.0858V13H16.0001V18.0858L13.7072 15.7929L12.293 17.2071L17.0001 21.9142L21.7072 17.2071ZM11.0001 14C11.0001 13.4477 10.5524 13 10.0001 13H4.00008C3.44779 13 3.00008 13.4477 3.00008 14L3.00008 20C3.00007 20.5523 3.44779 21 4.00007 21H10.0001C10.5524 21 11.0001 20.5523 11.0001 20V14Z"
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
export class SiSwap3FillIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}

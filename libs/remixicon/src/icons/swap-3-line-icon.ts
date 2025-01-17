import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-swap-3-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.00008 5.91424L3.70718 8.20714L2.29297 6.79292L7.00008 2.08582L11.7072 6.79292L10.293 8.20714L8.00008 5.91424L8.00007 11H6.00008L6.00008 5.91424ZM17.0001 9.50003C18.3808 9.50003 19.5001 8.38074 19.5001 7.00003C19.5001 5.61932 18.3808 4.50003 17.0001 4.50003C15.6194 4.50003 14.5001 5.61932 14.5001 7.00003C14.5001 8.38074 15.6194 9.50003 17.0001 9.50003ZM17.0001 11.5C14.5148 11.5 12.5001 9.48531 12.5001 7.00003C12.5001 4.51475 14.5148 2.50003 17.0001 2.50003C19.4854 2.50003 21.5001 4.51475 21.5001 7.00003C21.5001 9.48531 19.4854 11.5 17.0001 11.5ZM21.7072 17.2071L20.293 15.7929L18.0001 18.0858V13H16.0001V18.0858L13.7072 15.7929L12.293 17.2071L17.0001 21.9142L21.7072 17.2071ZM5.00008 19H9.00007L9.00008 15H5.00008L5.00008 19ZM10.0001 13C10.5524 13 11.0001 13.4477 11.0001 14V20C11.0001 20.5523 10.5524 21 10.0001 21H4.00007C3.44779 21 3.00007 20.5523 3.00008 20L3.00008 14C3.00008 13.4477 3.44779 13 4.00008 13H10.0001Z"
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
export class SiSwap3LineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}

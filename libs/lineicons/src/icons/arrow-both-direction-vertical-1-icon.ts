import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-arrow-both-direction-vertical-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.5781 5.0638L11.5781 19.9403L8.85829 17.2222C8.5653 16.9294 8.09043 16.9295 7.79763 17.2225C7.50483 17.5155 7.50498 17.9904 7.79797 18.2832L11.7978 22.2805C12.0907 22.5732 12.5653 22.5732 12.8581 22.2805L16.8583 18.2832C17.1513 17.9904 17.1514 17.5155 16.8586 17.2225C16.5659 16.9295 16.091 16.9294 15.798 17.2222L13.0781 19.9401L13.0781 5.06363L15.798 7.78174C16.0909 8.07454 16.5658 8.07439 16.8586 7.7814C17.1514 7.48841 17.1513 7.01354 16.8583 6.72074L12.8886 2.75357C12.7512 2.59919 12.551 2.50195 12.3281 2.50195C12.1042 2.50195 11.9031 2.60013 11.7657 2.7558L7.79798 6.72072C7.50498 7.01351 7.50482 7.48838 7.79761 7.78138C8.0904 8.07438 8.56527 8.07454 8.85827 7.78175L11.5781 5.0638Z"
      fill="#323544"
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
export class SiArrowBothDirectionVertical1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}

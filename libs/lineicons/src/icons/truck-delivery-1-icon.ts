import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-truck-delivery-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.25 3.25C3.00736 3.25 2 4.25736 2 5.5V16C2 17.2426 3.00736 18.25 4.25 18.25H4.30197C4.56712 19.6729 5.81527 20.75 7.315 20.75C8.81473 20.75 10.0629 19.6729 10.328 18.25H14.052C14.3171 19.6729 15.5653 20.75 17.065 20.75C18.5647 20.75 19.8129 19.6729 20.078 18.25H22C22.4142 18.25 22.75 17.9142 22.75 17.5C22.75 17.0858 22.4142 16.75 22 16.75V12.4047C22 11.9553 21.8655 11.5163 21.6137 11.1441L19.0674 7.37945C18.6489 6.76072 17.9506 6.39003 17.2037 6.39003H15.75V5.5C15.75 4.25736 14.7426 3.25 13.5 3.25H4.25ZM7.315 14.62C5.94831 14.62 4.79055 15.5145 4.39523 16.75H4.25C3.83579 16.75 3.5 16.4142 3.5 16V5.5C3.5 5.08579 3.83579 4.75 4.25 4.75H13.5C13.9142 4.75 14.25 5.08579 14.25 5.5V16.4706C14.2107 16.5615 14.1757 16.6547 14.1452 16.75H10.2348C9.83945 15.5145 8.68169 14.62 7.315 14.62ZM17.065 14.62C16.5944 14.62 16.1485 14.7261 15.75 14.9156V12.695L20.5 12.695V16.75H19.9848C19.5895 15.5145 18.4317 14.62 17.065 14.62ZM19.8373 11.195L15.75 11.195V7.89003H17.2037C17.4527 7.89003 17.6854 8.01359 17.8249 8.21983L19.8373 11.195ZM15.5 17.685C15.5 16.8207 16.2007 16.12 17.065 16.12C17.9293 16.12 18.63 16.8207 18.63 17.685C18.63 18.5493 17.9293 19.25 17.065 19.25C16.2007 19.25 15.5 18.5493 15.5 17.685ZM5.75 17.685C5.75 16.8207 6.45067 16.12 7.315 16.12C8.17933 16.12 8.88 16.8207 8.88 17.685C8.88 18.5493 8.17933 19.25 7.315 19.25C6.45067 19.25 5.75 18.5493 5.75 17.685Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTruckDelivery1Icon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}

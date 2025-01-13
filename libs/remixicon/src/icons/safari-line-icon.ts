import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-safari-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17.8133 6.50295L13.4152 13.4142L6.50392 17.8123C7.70928 18.9527 9.26918 19.7222 11.001 19.9381V18H13.001V19.9381C14.4617 19.756 15.8001 19.18 16.9066 18.3199L15.5365 16.9497L16.9507 15.5355L18.3208 16.9056C19.181 15.7991 19.7569 14.4607 19.9391 13H18.001V11H19.9391C19.7231 9.2682 18.9536 7.70831 17.8133 6.50295ZM17.498 6.18771C16.2927 5.04733 14.7328 4.27785 13.001 4.06189V6H11.001V4.06189C9.54027 4.24404 8.20186 4.81999 7.09533 5.68014L8.46544 7.05025L7.05123 8.46447L5.68112 7.09436C4.82097 8.20088 4.24502 9.53929 4.06287 11H6.00098V13H4.06287C4.27882 14.7318 5.04831 16.2917 6.18868 17.4971L10.5868 10.5858L17.498 6.18771ZM12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22Z"
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
export class SiSafariLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}

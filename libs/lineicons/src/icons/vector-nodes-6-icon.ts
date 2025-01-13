import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-vector-nodes-6-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.37695 6.5C9.70342 5.34575 10.7647 4.5 12.0234 4.5C13.2822 4.5 14.3435 5.34575 14.6699 6.5H17.5234V5.75C17.5234 5.33579 17.8592 5 18.2734 5H21.2734C21.6877 5 22.0234 5.33579 22.0234 5.75V8.75C22.0234 9.16421 21.6877 9.5 21.2734 9.5H18.2734C17.8592 9.5 17.5234 9.16421 17.5234 8.75V8H14.6699C14.5874 8.29175 14.4579 8.56379 14.2902 8.80745C14.9649 9.00678 15.5533 9.29519 16.0641 9.64928C17.0743 10.3497 17.7359 11.2759 18.1681 12.175C18.5993 13.0719 18.8111 13.9592 18.9163 14.6157C18.9385 14.7538 18.956 14.8825 18.9699 15H19.7734C20.1877 15 20.5234 15.3358 20.5234 15.75V18.75C20.5234 19.1642 20.1877 19.5 19.7734 19.5H16.7734C16.3592 19.5 16.0234 19.1642 16.0234 18.75V15.75C16.0234 15.3358 16.3592 15 16.7734 15H17.4574C17.4507 14.9527 17.4433 14.9037 17.4352 14.8531C17.3451 14.2908 17.1663 13.5531 16.8162 12.825C16.4673 12.0991 15.9569 11.4003 15.2094 10.882C14.468 10.368 13.4485 10 12.0234 10C10.5984 10 9.57886 10.368 8.83749 10.882C8.08995 11.4003 7.57962 12.0991 7.23063 12.825C6.88055 13.5531 6.70175 14.2908 6.61164 14.8531C6.60353 14.9037 6.59617 14.9527 6.58948 15H7.27344C7.68765 15 8.02344 15.3365 8.02344 15.7507V18.75C8.02344 19.1642 7.68765 19.5 7.27344 19.5H4.27344C3.85922 19.5 3.52344 19.1642 3.52344 18.75V15.75C3.52344 15.3358 3.85922 15 4.27344 15H5.07695C5.09086 14.8825 5.10841 14.7538 5.13054 14.6157C5.23575 13.9592 5.44758 13.0719 5.87875 12.175C6.311 11.2759 6.97255 10.3497 7.98282 9.64928C8.49353 9.29519 9.08194 9.00678 9.75666 8.80745C9.58893 8.56379 9.45947 8.29175 9.37695 8H6.52344V8.75C6.52344 9.16421 6.18765 9.5 5.77344 9.5H2.77344C2.35922 9.5 2.02344 9.16421 2.02344 8.75V5.75C2.02344 5.33579 2.35922 5 2.77344 5H5.77344C6.18765 5 6.52344 5.33579 6.52344 5.75V6.5H9.37695ZM13.2734 7.25C13.2734 6.55964 12.7138 6 12.0234 6C11.3331 6 10.7734 6.55964 10.7734 7.25C10.7734 7.94036 11.3331 8.5 12.0234 8.5C12.7138 8.5 13.2734 7.94036 13.2734 7.25ZM17.5234 18H19.0234V16.5H17.5234V18ZM5.02344 18H6.52344V16.5H5.02344V18ZM3.52344 8H5.02344V6.5H3.52344V8ZM19.0234 8H20.5234V6.5H19.0234V8Z"
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
export class SiVectorNodes6Icon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}

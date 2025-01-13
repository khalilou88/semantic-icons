import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-file-cloud-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14.9968 2L21 8L21.0012 12.2606C20.4221 11.7806 19.7434 11.4178 19.0008 11.2074L19 9H14V4H5V20L10.0591 20.0009C10.1761 20.7365 10.4622 21.4172 10.8771 22.0006L3.9934 22C3.48412 22 3.06409 21.6171 3.00669 21.1239L3 21.0082V2.9918C3 2.49363 3.38689 2.06546 3.88533 2.00683L4.00221 2H14.9968ZM17.5 13C19.433 13 21 14.567 21 16.5L20.9985 16.6033C22.1531 16.9285 23 17.9903 23 19.25C23 20.7125 21.8583 21.9084 20.4175 21.995L20.25 22H14.75L14.5825 21.995C13.1417 21.9084 12 20.7125 12 19.25C12 17.99 12.8474 16.9279 14.0034 16.6025L14 16.5C14 14.567 15.567 13 17.5 13ZM17.5 15C16.769 15 16.1602 15.5229 16.027 16.215L16.0069 16.3555L16 16.5V18.12L14.5559 18.5256C14.1558 18.6328 13.9183 19.044 14.0256 19.4441C14.105 19.7405 14.3512 19.9476 14.6362 19.9915L14.7446 20.0002H20.2554C20.5846 19.998 20.8851 19.7775 20.9744 19.4441C21.0817 19.044 20.8442 18.6328 20.4441 18.5256L19.4322 18.2432L19 18.12V16.5L18.9931 16.3555C18.9204 15.5949 18.2797 15 17.5 15Z"
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
export class SiFileCloudLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}

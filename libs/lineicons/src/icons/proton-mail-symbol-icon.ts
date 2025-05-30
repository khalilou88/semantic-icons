import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-proton-mail-symbol-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.09863 16.7854V22H7.75523V17.0079C7.75523 16.531 7.94601 16.0541 8.29577 15.7043C8.64553 15.3545 9.09068 15.1638 9.59943 15.1638H13.3196C15.0684 15.1638 16.7536 14.4642 17.9619 13.2242C19.202 11.9841 19.9015 10.2989 19.9015 8.55008C19.9015 6.80127 19.202 5.11606 17.9619 3.87599C16.7536 2.69952 15.0684 2 13.3196 2H4.09863V8.51828H7.75523V5.43402H13.0652C13.892 5.43402 14.6869 5.75199 15.2592 6.35612C15.8633 6.92846 16.1813 7.72337 16.1813 8.55008C16.1813 9.37679 15.8633 10.1717 15.2592 10.744C14.6869 11.3164 13.892 11.6661 13.0652 11.6661H9.21787C8.55014 11.6661 7.88242 11.7933 7.27828 12.0477C6.67415 12.3021 6.10181 12.6836 5.62486 13.1606C5.14792 13.6375 4.76636 14.2099 4.51199 14.814C4.22582 15.4499 4.09863 16.1176 4.09863 16.7854Z"
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
export class SiProtonMailSymbolIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}

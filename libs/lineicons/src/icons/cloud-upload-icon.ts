import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cloud-upload-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.38688 7.48329C6.45702 4.44302 8.94354 2 12.0007 2C15.0578 2 17.5444 4.44308 17.6144 7.48338C19.1767 7.60666 20.527 8.48325 21.3022 9.74999H19.3543C18.7838 9.26268 18.0434 8.96844 17.2343 8.96844H16.866C16.4518 8.96844 16.116 8.63266 16.116 8.21844V7.6153C16.116 5.34248 14.2735 3.5 12.0007 3.5C9.72784 3.5 7.88536 5.34248 7.88536 7.6153V8.21844C7.88536 8.63266 7.54957 8.96844 7.13536 8.96844H6.76578C4.96214 8.96844 3.5 10.4306 3.5 12.2342C3.5 14.0379 4.96214 15.5 6.76577 15.5H9.75V17H6.76577C4.13371 17 2 14.8663 2 12.2342C2 9.72969 3.93195 7.67638 6.38688 7.48329Z"
      fill="#323544"
    />
    <svg:path
      d="M20.6554 12C20.6554 12.4142 20.3196 12.75 19.9054 12.75L13.3445 12.75C12.9303 12.75 12.5945 12.4142 12.5945 12C12.5945 11.5858 12.9303 11.25 13.3445 11.25H19.9054C20.3196 11.25 20.6554 11.5858 20.6554 12Z"
      fill="#323544"
    />
    <svg:path
      d="M16.0976 14.4664C16.3904 14.1738 16.865 14.1738 17.1578 14.4665L19.3759 16.6831C19.6688 16.9759 19.669 17.4508 19.3762 17.7438C19.0834 18.0368 18.6085 18.0369 18.3155 17.7441L17.3776 16.8068L17.3776 21.251C17.3776 21.6652 17.0418 22.001 16.6276 22.001C16.2134 22.001 15.8776 21.6652 15.8776 21.251L15.8776 16.8067L14.9396 17.7441C14.6466 18.0369 14.1717 18.0368 13.8789 17.7438C13.5861 17.4508 13.5863 16.9759 13.8793 16.6831L16.0976 14.4664Z"
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
export class SiCloudUploadIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}

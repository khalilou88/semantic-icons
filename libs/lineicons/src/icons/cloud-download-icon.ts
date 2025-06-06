import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cloud-download-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.38688 7.48329C6.45702 4.44302 8.94354 2 12.0007 2C15.0578 2 17.5444 4.44308 17.6144 7.48338C19.1767 7.60666 20.527 8.48325 21.3022 9.74999H19.3543C18.7838 9.26268 18.0434 8.96844 17.2343 8.96844H16.866C16.4518 8.96844 16.116 8.63266 16.116 8.21844V7.6153C16.116 5.34248 14.2735 3.5 12.0007 3.5C9.72784 3.5 7.88536 5.34248 7.88536 7.6153V8.21844C7.88536 8.63266 7.54957 8.96844 7.13536 8.96844H6.76578C4.96214 8.96844 3.5 10.4306 3.5 12.2342C3.5 14.0379 4.96214 15.5 6.76577 15.5H9.75V17H6.76577C4.13371 17 2 14.8663 2 12.2342C2 9.72969 3.93195 7.67638 6.38688 7.48329Z"
      fill="#323544"
    />
    <svg:path
      d="M17.1524 18.7846C16.8596 19.0772 16.385 19.0771 16.0922 18.7845L13.8741 16.5678C13.5812 16.275 13.581 15.8002 13.8738 15.5072C14.1666 15.2142 14.6415 15.214 14.9345 15.5068L15.8724 16.4442V12C15.8724 11.5858 16.2082 11.25 16.6224 11.25C17.0366 11.25 17.3724 11.5858 17.3724 12V16.4443L18.3104 15.5068C18.6034 15.214 19.0783 15.2142 19.3711 15.5072C19.6639 15.8002 19.6637 16.275 19.3707 16.5678L17.1524 18.7846Z"
      fill="#323544"
    />
    <svg:path
      d="M12.5945 21.25C12.5945 20.8358 12.9303 20.5 13.3445 20.5H19.9054C20.3196 20.5 20.6554 20.8358 20.6554 21.25C20.6554 21.6642 20.3196 22 19.9054 22H13.3445C12.9303 22 12.5945 21.6642 12.5945 21.25Z"
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
export class SiCloudDownloadIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-megaphone-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22.0234 3.19922C22.0234 2.78501 21.6877 2.44922 21.2734 2.44922C20.8592 2.44922 20.5234 2.78501 20.5234 3.19922V3.45985L10.2331 6.89844H4.27344C3.0308 6.89844 2.02344 7.9058 2.02344 9.14844V12.2498C2.02344 13.4924 3.0308 14.4998 4.27344 14.4998H6.74454L7.18331 17.5949C7.3382 18.6875 8.27348 19.4995 9.37696 19.4995C10.7448 19.4995 11.7858 18.2724 11.5629 16.9229L11.2171 14.829L20.5234 17.9388V18.1992C20.5234 18.6134 20.8592 18.9492 21.2734 18.9492C21.6877 18.9492 22.0234 18.6134 22.0234 18.1992V3.19922ZM20.5234 16.3573L11.1045 13.2099V8.18879L20.5234 5.04138V16.3573ZM9.60449 12.9998H4.27344C3.85922 12.9998 3.52344 12.664 3.52344 12.2498V9.14844C3.52344 8.73422 3.85922 8.39844 4.27344 8.39844H9.60449V12.9998ZM9.64236 14.4998L10.083 17.1673C10.155 17.6032 9.81873 17.9995 9.37696 17.9995C9.02056 17.9995 8.71849 17.7372 8.66846 17.3844L8.25954 14.4998H9.64236Z"
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
export class SiMegaphone1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}

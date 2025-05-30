import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-youtube-music-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.21699 8.2863C9.26499 7.25376 10.5137 6.74329 12 6.74329C13.4863 6.74329 14.7349 7.25377 15.7829 8.28631C16.8306 9.31846 17.345 10.5442 17.345 11.9997C17.345 13.4551 16.8306 14.6809 15.7829 15.713C14.7349 16.7456 13.4863 17.256 12 17.256C10.5137 17.256 9.26498 16.7456 8.21698 15.713C7.16931 14.6809 6.65491 13.4551 6.65491 11.9997C6.65491 10.5442 7.16932 9.31845 8.21699 8.2863ZM15.1945 12.0005L9.99996 14.9102V9.08917L15.1945 12.0005Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.071 18.9662C21.0236 17.0424 21.9999 14.7203 21.9999 11.9997C21.9999 9.27903 21.0237 6.9569 19.0711 5.03314C17.1185 3.10938 14.7615 2.14746 12 2.14746C9.23859 2.14746 6.88162 3.10931 4.92891 5.03314C2.97635 6.9569 2 9.27903 2 11.9997C2 14.7203 2.97635 17.0424 4.92891 18.9662C6.88155 20.8899 9.23859 21.8519 12 21.8519C14.7614 21.8519 17.1184 20.8899 19.071 18.9662ZM12 5.43343C10.1726 5.43343 8.59279 6.07723 7.29768 7.35323C6.00225 8.62948 5.34504 10.1904 5.34504 11.9997C5.34504 13.8089 6.00226 15.3699 7.2977 16.6461C8.59278 17.9221 10.1725 18.5659 12 18.5659C13.8274 18.5659 15.4071 17.9221 16.7022 16.6461C17.9976 15.3699 18.6549 13.8089 18.6549 11.9997C18.6549 10.1904 17.9976 8.62947 16.7022 7.35323C15.4071 6.07723 13.8274 5.43343 12 5.43343Z"
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
export class SiYoutubeMusicIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}

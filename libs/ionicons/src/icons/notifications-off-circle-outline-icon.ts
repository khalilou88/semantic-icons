import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-notifications-off-circle-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
    <svg:path
      d="M220.24 352a4 4 0 00-4 4.42C218.49 375.14 235.11 384 256 384s37.5-8.86 39.73-27.58a4 4 0 00-4-4.42zM352 378a15.93 15.93 0 01-11.84-5.24l-192-212a16 16 0 0123.68-21.52l192 212A16 16 0 01352 378zM174.68 232.21c0 53.33-11.54 61.46-27.87 80.8-6.77 8-.65 23 11.19 23h118.83a4 4 0 002.95-6.7l-98-106.87a4 4 0 00-6.94 2.52c-.1 2.33-.16 4.75-.16 7.25zM365.2 313c-16.33-19.34-27.86-27.47-27.86-80.8 0-48.86-25.78-66.23-47-74.67a11.39 11.39 0 01-6.34-6.68C280.29 138.6 269.88 128 256 128s-24.31 10.6-28 22.86a11.35 11.35 0 01-6.33 6.68c-1.28.51-2.57 1.05-3.88 1.63a4 4 0 00-1.3 6.36L361 323.21a4 4 0 006.94-2.95 12 12 0 00-2.74-7.26z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNotificationsOffCircleOutlineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}

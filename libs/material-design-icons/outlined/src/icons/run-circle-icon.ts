import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-run-circle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
    />
    <svg:path
      d="M13.54 8.97c-.23-.47-.76-.71-1.26-.53L9 9.65V12h1v-1.65l1.54-.57-.96 4.89-2.78-.57-.2.98 3.76.77.52-2.64L13 14.42V18h1v-3.97l-1.32-1.44.41-2.35C13.99 11.46 15.3 12 16 12v-1c-.41 0-1.63-.33-2.46-2.03z"
    />
    <svg:circle cx="13.5" cy="7" r="1" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRunCircleIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

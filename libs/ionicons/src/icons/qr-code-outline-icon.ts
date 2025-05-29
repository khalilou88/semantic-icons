import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-qr-code-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect width="80" height="80" x="336" y="336" rx="8" ry="8" />
    <svg:rect width="64" height="64" x="272" y="272" rx="8" ry="8" />
    <svg:rect width="64" height="64" x="416" y="416" rx="8" ry="8" />
    <svg:rect width="48" height="48" x="432" y="272" rx="8" ry="8" />
    <svg:rect width="48" height="48" x="272" y="432" rx="8" ry="8" />
    <svg:rect width="80" height="80" x="336" y="96" rx="8" ry="8" />
    <svg:rect
      width="176"
      height="176"
      x="288"
      y="48"
      rx="16"
      ry="16"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:rect width="80" height="80" x="96" y="96" rx="8" ry="8" />
    <svg:rect
      width="176"
      height="176"
      x="48"
      y="48"
      rx="16"
      ry="16"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:rect width="80" height="80" x="96" y="336" rx="8" ry="8" />
    <svg:rect
      width="176"
      height="176"
      x="48"
      y="288"
      rx="16"
      ry="16"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32px"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiQrCodeOutlineIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}

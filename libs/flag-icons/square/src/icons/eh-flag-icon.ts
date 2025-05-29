import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-eh-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#000001" d="M0 0h512v256H0z" />
    <svg:path fill="#007a3d" d="M0 256h512v256H0z" />
    <svg:path fill="#fff" d="M0 149.3h512v213.3H0z" />
    <svg:path fill="#c4111b" d="m0 0 256 256L0 512Z" />
    <svg:g stroke-width="1.7" transform="translate(-135 -6.5)scale(1.02539)">
      <svg:circle cx="512" cy="256" r="68.3" fill="#c4111b" />
      <svg:circle cx="537.6" cy="256" r="68.3" fill="#fff" />
      <svg:path
        fill="#c4111b"
        d="m493.7 297.3 29-20.8 29 21.2-10.8-34.2 29-21-35.8-.2-11-34-11.3 33.9-35.7-.1 28.7 21.2z"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEhFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}

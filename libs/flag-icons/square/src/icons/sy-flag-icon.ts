import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-sy-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M0 0h512v512H0Z" />
    <svg:path fill="#fff" d="M0 0h512v341.3H0Z" />
    <svg:path fill="#007a3d" d="M0 0h512v170.7H0Z" />
    <svg:path
      fill="#ce1126"
      d="M26.3 317.9 67.2 192 108 317.9 1 240h132.4m270.5 77.8L445 192l40.8 125.9-107-77.8H511m-295.9 77.8L256 192l40.9 125.9-107-77.8h132.3"
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
export class SiSyFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}

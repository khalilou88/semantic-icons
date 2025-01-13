import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-syncthing-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Syncthing</svg:title>
    <svg:path
      d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm0 2.412c3.115 0 5.885 1.5 7.629 3.815a1.834 1.834 0 0 1 1.564 3.162c.23.818.354 1.68.354 2.57a9.504 9.504 0 0 1-2.166 6.05c.128.281.189.595.162.92a1.854 1.854 0 0 1-2.004 1.678 1.86 1.86 0 0 1-.877-.322A9.486 9.486 0 0 1 12 21.505c-3.84 0-7.154-2.277-8.668-5.552-.3-.01-.601-.092-.879-.254-.858-.51-1.144-1.634-.633-2.513.164-.276.39-.493.653-.643a9.62 9.62 0 0 1-.02-.584c0-5.265 4.282-9.547 9.547-9.547zm0 1.227a8.311 8.311 0 0 0-8.31 8.683c.22.036.439.111.644.23.323.2.564.484.713.805l6.984-.644a1.78 1.78 0 0 1 .787-1.08c.288-.19.612-.286.936-.295.34-.01.68.08.978.254l3.51-2.914a1.82 1.82 0 0 1 .317-1.84A8.3 8.3 0 0 0 12 3.638zm7.027 5.98-3.502 2.91a1.829 1.829 0 0 1-.23 1.719l1.904 2.744c.212-.06.436-.085.668-.066.238.024.46.092.66.193a8.285 8.285 0 0 0 1.793-5.16 8.38 8.38 0 0 0-.265-2.092 1.835 1.835 0 0 1-1.028-.248zm-6.886 4.315-6.975.644a1.8 1.8 0 0 1-.66 1.004A8.312 8.312 0 0 0 12 20.279a8.294 8.294 0 0 0 3.938-.986 1.845 1.845 0 0 1-.075-.69c.028-.341.148-.65.332-.908L14.29 14.95a1.839 1.839 0 0 1-2.148-1.015z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSyncthingIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#0891D1');
}

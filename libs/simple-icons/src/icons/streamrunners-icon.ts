import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-streamrunners-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>StreamRunners</svg:title>
    <svg:path
      d="M23.572 12.737a.854.854 0 0 0 0-1.48l-12.66-7.31c-.695-.4-1.51.292-1.225 1.043l.98 2.587c.106.28-.1.578-.4.578H7.55c-.658 0-1.275.32-1.656.857L3.632 12.21h8.553c.02 0 .034.02.027.04-.847 2.253-1.69 4.508-2.537 6.761-.282.75.532 1.44 1.227 1.04zM.001 17.052a.005.005 0 0 0 0 .006h8.297a.64.64 0 0 0 .612-.452l.656-2.134a.64.64 0 0 0-.613-.83l-6.805.018a.078.078 0 0 0-.067.036C1.386 14.813.694 15.933 0 17.052Z"
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
export class SiStreamrunnersIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#6644F8');
}

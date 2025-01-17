import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-2k-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>2K</svg:title>
    <svg:path
      d="M0 .002v23.997h24V.002H0Zm10.962 5.592c2.36 0 4.443.416 3.799 2.423-.434 1.365-2.017 1.918-3.114 2.109l-2.757.489c-.655.114-1.039.277-1.3.549h6.012l-.818 2.529 3.446-2.529h3.755l-4.091 2.772 2.07 4.402h-3.766l-1.082-2.754-1.197.826-.619 1.928H8.471l1.718-5.374h-6.25C4.874 10.2 6.891 9.36 8.731 8.989l2.264-.457c.387-.07.64-.259.736-.557.136-.416-.32-.581-.994-.581-.784 0-1.604.074-1.984 1.005H5.646c1.009-2.474 3.483-2.805 5.316-2.805Z"
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
export class Si2kIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#DD0700');
}

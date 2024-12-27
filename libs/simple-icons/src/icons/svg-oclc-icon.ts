import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-oclc-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>OCLC</title>
      <path
        d="M19.628 7.117C18.366 2.388 13.69-.691 8.746.133 3.478 1.01-.076 5.97.8 11.214c.605 3.685 3.22 6.52 6.529 7.602a5.34 5.34 0 0 0 2.42 4.304c2.474 1.623 5.809.94 7.419-1.547.142-.219.27-.45.386-.682a7.53 7.53 0 0 0 5.512-5.322c.915-3.35-.592-6.79-3.451-8.465zM7.393 17.863c-2.253-1.057-3.966-3.234-4.417-5.914-.708-4.317 2.086-8.362 6.259-9.045 2.975-.49 5.847.863 7.495 3.247a7.52 7.52 0 0 0-8.14 5.463 7.46 7.46 0 0 0-.076 3.685 5.45 5.45 0 0 0-1.133 2.577zm2.1-3.518c0-.541.077-1.108.23-1.662.916-3.324 4.264-5.321 7.484-4.42 3.22.89 5.1 4.291 4.172 7.641a6.3 6.3 0 0 1-3.503 4.11 5.37 5.37 0 0 0-2.253-5.85 5.34 5.34 0 0 0-6.143.181zm6.477 6.958c-1.287 1.958-3.85 2.538-5.743 1.301s-2.383-3.84-1.095-5.785c1.275-1.958 3.85-2.538 5.744-1.301 1.893 1.25 2.382 3.852 1.094 5.785"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
      color: currentColor;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgOclcIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}

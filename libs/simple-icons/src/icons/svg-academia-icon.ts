import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-academia-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Academia</title>
      <path
        d="M22.033 21.18L13.77.459H7.869l1.049 2.623L1.836 21.18C1.574 22.098.787 22.23 0 22.361v1.18h6.82v-1.18C4.984 22.23 3.934 21.967 4.721 20c.131-.131.656-1.574 1.311-3.41h8.393l1.18 3.016c.131.525.262.918.262 1.311 0 1.049-.918 1.443-2.623 1.443v1.18H24v-1.18c-.918-.13-1.705-.393-1.967-1.18zM6.82 14.361a363.303 363.303 0 0 0 3.279-8.525l3.41 8.525H6.82z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgAcademiaIcon {
  readonly class = input<string>('');
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-twitch-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.77375 2L2.45117 5.45161V19.4839H7.22535V22H9.90277L12.4512 19.4516H16.3221L21.5479 14.2258V2H3.77375ZM19.7415 13.3226L16.7415 16.3226H11.9995L9.45116 18.871V16.3226H5.4189V3.77419H19.7415V13.3226ZM16.7737 7.22581V12.4516H14.9995V7.22581H16.7737ZM11.9995 7.22581V12.4516H10.2254V7.22581H11.9995Z"
        fill="#323544"
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
export class SvgTwitchIcon {
  readonly class = input<string>('');
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-collaboraonline-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Collabora Online</title>
      <path
        d="M8.852 0 3.55 5.303 10.247 12 3.55 18.698 8.852 24l12-12zM3.147 5.706v12.588L9.442 12z"
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
export class SvgCollaboraonlineIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}

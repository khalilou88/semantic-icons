import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-eac-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>EAC</title>
      <path
        d="M2.667 24h2.667v-2.667H2.667v-8h2.667v-2.666H2.667v-8h2.667V0H0v24zm21.334-2.667h-2.668V2.667h2.668V0h-5.333v24h5.333zM13.334 0H8v24h2.667V13.335h2.667V24H16V0Zm0 10.667h-2.667v-8h2.667z"
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
export class SvgEacIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-portswigger-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>PortSwigger</title>
      <path
        d="M0 0v24h10.718v-3.805l3.496-4.272h-3.496v-5.205H4.427l6.291-7.767V0Zm13.282 0v3.884L9.786 8.155h3.496v5.205h6.291l-6.291 7.767V24H24V0Z"
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
export class SvgPortswiggerIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}

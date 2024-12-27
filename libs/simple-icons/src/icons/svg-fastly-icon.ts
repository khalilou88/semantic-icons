import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-fastly-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Fastly</title>
      <path
        d="M13.919 3.036V1.3h.632V0H9.377v1.3h.631v1.749a10.572 10.572 0 00-8.575 10.384C1.433 19.275 6.17 24 12 24c5.842 0 10.567-4.737 10.567-10.567 0-5.186-3.729-9.486-8.648-10.397zm-1.628 15.826v-.607h-.619v.607c-2.757-.158-4.955-2.38-5.101-5.137h.607v-.62h-.607a5.436 5.436 0 015.101-5.089v.607h.62v-.607a5.435 5.435 0 015.137 5.114h-.607v.619h.607a5.444 5.444 0 01-5.138 5.113zm2.26-7.712l-.39-.389-1.979 1.725a.912.912 0 00-.316-.06c-.534 0-.971.448-.971.995 0 .547.437.996.971.996.535 0 .972-.45.972-.996a.839.839 0 00-.049-.304Z"
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
export class SvgFastlyIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}

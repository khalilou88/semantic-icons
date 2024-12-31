import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-trueup-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>TrueUp</title>
      <path
        d="M16.17 4.8a1.2 1.2 0 1 0 .06 2.4 1.2 1.2 0 0 0-.06-2.4Zm-8.4 0a1.2 1.2 0 1 0 .06 2.4 1.2 1.2 0 0 0-.06-2.4ZM10.2 0a6.608 6.608 0 0 0-6.6 6.6v4.8A12.614 12.614 0 0 0 16.2 24h3.6a.599.599 0 0 0 .6-.6V6.6A6.608 6.608 0 0 0 13.8 0Zm0 1.2h3.6a5.33 5.33 0 0 1 2.525.656A6.146 6.146 0 0 0 12 5.631a6.146 6.146 0 0 0-4.325-3.775A5.33 5.33 0 0 1 10.2 1.2ZM6.333 2.844C9.505 3.13 11.4 5.403 11.4 9a.6.6 0 0 0 1.2 0c0-3.597 1.895-5.87 5.067-6.156A5.375 5.375 0 0 1 19.2 6.6v.6c0 3.905-4.423 7.2-7.2 7.2s-7.2-3.295-7.2-7.2v-.6c0-1.404.551-2.752 1.533-3.756ZM4.8 11.068C6.505 13.758 9.681 15.6 12 15.6c1.09 0 2.371-.413 3.6-1.124V16.2c0 2.932.782 5.138 2.316 6.6H16.2A11.413 11.413 0 0 1 4.8 11.4Zm14.4 0v11.25c-1.609-1.21-2.4-3.218-2.4-6.118v-2.523a10.32 10.32 0 0 0 2.4-2.61z"
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
export class SvgTrueupIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-plangrid-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>PlanGrid</title>
      <path
        d="M16.6 0c2.6 0 4.262.009 5.828 1.574C23.99 3.141 24 4.794 24 7.401v9.2c0 2.6-.01 4.261-1.574 5.828C20.859 23.991 19.207 24 16.598 24h-9.2c-2.599 0-4.26-.009-5.827-1.574C.01 20.861 0 19.207 0 16.599v-9.2C0 4.8.01 3.138 1.574 1.572 3.141.01 4.793 0 7.4 0h9.201-.001zm4.398 11.151C20.57 6.578 16.684 3.002 12 3.002c-4.971 0-9 4.027-9 8.998 0 4.801 3.752 8.734 8.485 9h7.136c1.313-.003 2.375-1.066 2.379-2.381v-7.47l-.002.002zm-2.285 8.589c-.564 0-1.023-.46-1.023-1.024 0-.566.459-1.024 1.023-1.024.566 0 1.025.458 1.025 1.024 0 .564-.459 1.024-1.025 1.024zM12 18.949C8.163 18.945 5.055 15.836 5.051 12 5.055 8.164 8.163 5.055 12 5.051c3.836.004 6.945 3.113 6.949 6.949-.004 3.836-3.113 6.945-6.949 6.949z"
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
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPlangridIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}

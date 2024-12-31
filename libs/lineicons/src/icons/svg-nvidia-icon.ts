import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-nvidia-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.45866 9.33038V8.14238C9.58114 8.13014 9.69137 8.13014 9.81384 8.13014C13.0839 8.03216 15.2272 10.947 15.2272 10.947C15.2272 10.947 12.9124 14.1436 10.4262 14.1436C10.0955 14.1436 9.7771 14.0946 9.45866 13.9844V10.3714C10.7324 10.5306 10.9896 11.0818 11.7489 12.3555L13.4513 10.9225C13.4513 10.9225 12.2021 9.29364 10.12 9.29364C9.89957 9.29364 9.67912 9.30589 9.45866 9.33038ZM9.45866 5.38672V7.16259L9.81384 7.1381C14.3576 6.97888 17.3215 10.8613 17.3215 10.8613C17.3215 10.8613 13.9167 15.0132 10.3772 15.0132C10.071 15.0132 9.76485 14.9887 9.45866 14.9274V16.0297C9.70361 16.0542 9.96081 16.0787 10.218 16.0787C13.5126 16.0787 15.9008 14.3886 18.2156 12.4045C18.5952 12.7107 20.1629 13.4578 20.4936 13.7762C18.3013 15.6133 13.1819 17.0952 10.2792 17.0952C9.99755 17.0952 9.74035 17.083 9.47091 17.0462V18.6139H22V5.38672C22 5.38672 9.45866 5.38672 9.45866 5.38672ZM9.45866 13.9966V14.9397C6.40906 14.3886 5.56399 11.2165 5.56399 11.2165C5.56399 11.2165 7.03368 9.59982 9.45866 9.33038V10.3592H9.44642C8.17269 10.1999 7.1684 11.4002 7.1684 11.4002C7.1684 11.4002 7.74403 13.4088 9.45866 13.9966ZM4.04532 11.0818C4.04532 11.0818 5.84568 8.41183 9.45866 8.14238V7.17484C5.45377 7.49327 2 10.8736 2 10.8736C2 10.8736 3.95958 16.5441 9.45866 17.0585V16.0297C5.41702 15.5276 4.04532 11.0818 4.04532 11.0818Z"
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
export class SvgNvidiaIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}

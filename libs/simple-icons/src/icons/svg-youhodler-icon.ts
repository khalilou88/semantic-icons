import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-youhodler-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>YouHodler</title>
      <path
        d="M4.727,15.273L1.091,13.091L1.091,4.364L8.364,0L12,2.182L15.636,0L22.909,4.364L22.909,13.091L19.273,15.273L19.273,19.636L12,24L4.727,19.636L4.727,15.273ZM12,19.636L14.422,18.182L14.422,12.364L19.273,9.455L19.273,6.545L16.85,5.092L12,8L7.15,5.092L4.727,6.545L4.727,9.455L9.578,12.364L9.578,18.182L12,19.636Z"
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
export class SvgYouhodlerIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}

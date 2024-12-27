import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-miraheze-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Miraheze</title>
      <path
        d="m2.677 12.923 3.768.011 1.949 3.369-1.926 3.323H2.666L.727 16.292l1.95-3.369Zm-.004-8.6 3.761.011 1.944 3.367-1.922 3.326H2.662L.727 7.69l1.946-3.367Zm14.882 0 3.768.011 1.95 3.367-1.928 3.326h-3.801L15.606 7.69l1.949-3.367Zm0 8.6 3.768.011 1.95 3.369-1.928 3.323h-3.802l-1.937-3.334 1.949-3.369Zm-7.456 4.373 3.767.011 1.951 3.368L13.889 24h-3.801l-1.939-3.336 1.95-3.368Zm0-17.296 3.767.011 1.951 3.369-1.928 3.324h-3.801L8.149 3.368 10.099 0Zm0 8.628 3.767.011 1.951 3.368-1.928 3.325h-3.801l-1.939-3.336 1.95-3.368Z"
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
export class SvgMirahezeIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}

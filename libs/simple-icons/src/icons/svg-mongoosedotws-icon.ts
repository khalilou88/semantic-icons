import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mongoosedotws-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Mongoose</title>
      <path
        d="M12 0a4.863 4.863 0 0 0-3.456 1.43L1.43 8.545a4.879 4.879 0 0 0-.09 6.804L7.41 9.28a1.454 1.454 0 0 1 .37-1.434 1.471 1.471 0 0 1 2.079 0c.58.58.58 1.512.006 2.085-.37.37-.89.496-1.368.388l-6.099 6.1 6.147 6.146a4.887 4.887 0 0 0 6.911.007l6.243-6.243-2.951-2.951a1.453 1.453 0 0 1-1.434-.37 1.471 1.471 0 0 1 0-2.08 1.474 1.474 0 0 1 2.085-.006c.37.37.496.89.388 1.368l2.963 2.963a4.872 4.872 0 0 0-.185-6.708l-7.108-7.108A4.881 4.881 0 0 0 12 0Zm3.16 7.4c.122-.002.243.012.361.04.257.054.508.185.711.388.185.185.317.412.37.657a1.43 1.43 0 0 1-.364 1.428 1.47 1.47 0 0 1-1.368.388l-1.416 1.416a1.457 1.457 0 0 1-1.756 1.756 1.42 1.42 0 0 1-.71-.388 1.347 1.347 0 0 1-.371-.657A1.43 1.43 0 0 1 10.98 11a1.47 1.47 0 0 1 1.368-.388l1.416-1.416a1.46 1.46 0 0 1 1.396-1.795zm.033.733a.736.736 0 0 0-.52 1.254.737.737 0 0 0 1.046.006.737.737 0 0 0-.006-1.046.732.732 0 0 0-.52-.214zm-6.374.018a.735.735 0 0 0-.52 1.254.737.737 0 0 0 1.046.006.737.737 0 0 0-.006-1.045.733.733 0 0 0-.52-.215zm9.54 3.077a.745.745 0 0 0-.526.22.736.736 0 0 0 1.04 1.04.737.737 0 0 0 .006-1.046.73.73 0 0 0-.52-.214zm-6.329.078a.724.724 0 0 0-.41.119 1.01 1.01 0 0 0-.12.096c-.035.035-.065.077-.095.119a.737.737 0 0 0 .102.926.735.735 0 0 0 1.039-1.04.743.743 0 0 0-.516-.22z"
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
export class SvgMongoosedotwsIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}

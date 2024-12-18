import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bitcoincash-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Bitcoin Cash</title>
      <path
        d="m10.84 11.22-.688-2.568c.728-.18 2.839-1.051 3.39.506.27 1.682-1.978 1.877-2.702 2.062zm.289 1.313.755 2.829c.868-.228 3.496-.46 3.241-2.351-.433-1.666-3.125-.706-3.996-.478zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-6.341.661c-.183-1.151-1.441-2.095-2.485-2.202.643-.57.969-1.401.57-2.488-.603-1.368-1.989-1.66-3.685-1.377l-.546-2.114-1.285.332.536 2.108c-.338.085-.685.158-1.029.256L9.198 5.08l-1.285.332.545 2.114c-.277.079-2.595.673-2.595.673l.353 1.377s.944-.265.935-.244c.524-.137.771.125.886.372l1.498 5.793c.018.168-.012.454-.372.551.021.012-.935.241-.935.241l.14 1.605s2.296-.588 2.598-.664l.551 2.138 1.285-.332-.551-2.153c.353-.082.697-.168 1.032-.256l.548 2.141 1.285-.332-.551-2.135c1.982-.482 3.38-1.73 3.094-3.64z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgBitcoincashIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}

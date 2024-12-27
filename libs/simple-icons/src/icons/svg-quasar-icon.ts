import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-quasar-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Quasar</title>
      <path
        d="M13.7427 11.9996c0 .9622-.78 1.7421-1.742 1.7421s-1.7422-.78-1.7422-1.742c0-.9622.78-1.7421 1.7421-1.7421.962 0 1.742.7799 1.742 1.742zm5.585-1.65 1.2674-.7318a8.9288 8.9288 0 0 0-.8615-2.0836 8.9295 8.9295 0 0 0-1.3684-1.789l-2.014 1.1628a6.7085 6.7085 0 0 0-2.1027-1.2187c-.6876.697-1.2337 1.4754-1.6275 2.3222 2.2419-.1526 4.5572.6588 6.7066 2.3382zm-9.5618 8.8206v1.4635a8.9313 8.9313 0 0 0 2.2351.2957 8.9343 8.9343 0 0 0 2.2337-.2905v-2.3255a6.7085 6.7085 0 0 0 2.1067-1.2117c-.2597-.9439-.6609-1.8062-1.1973-2.5706-.9888 2.0179-2.8492 3.6173-5.3782 4.639zM5.4117 13.208c.9472.247 1.8946.3307 2.8248.2483-1.2531-1.8653-1.708-4.276-1.3285-6.9773l-1.2675-.7318a8.9239 8.9239 0 0 0-1.3738 1.788 8.9294 8.9294 0 0 0-.865 2.0796l2.014 1.1628a6.7071 6.7071 0 0 0-.0041 2.4304zm13.1736.0135a6.7081 6.7081 0 0 0 .004-2.4303c-.9471-.2471-1.8945-.3309-2.8247-.2484 1.253 1.8652 1.708 4.276 1.3284 6.9772l1.2674.732a8.9282 8.9282 0 0 0 1.3738-1.788 8.929 8.929 0 0 0 .8651-2.0797l-2.014-1.1628zm-13.912.428-1.2674.7319c.198.728.4874 1.4281.8615 2.0835a8.9318 8.9318 0 0 0 1.3684 1.789l2.014-1.1628A6.7095 6.7095 0 0 0 9.7524 18.31c.6876-.6968 1.2338-1.4754 1.6274-2.3222-2.2418.1526-4.5571-.6587-6.7066-2.338zm9.5619-8.8205V3.3655A8.9337 8.9337 0 0 0 12 3.0698a8.934 8.934 0 0 0-2.2336.2906V5.686a6.7085 6.7085 0 0 0-2.1068 1.2117c.2597.9439.6608 1.8061 1.1973 2.5705.9889-2.0177 2.8492-3.6171 5.3783-4.639zM24 12c0 6.6274-5.3726 12-12 12S0 18.6274 0 12 5.3726 0 12 0s12 5.3726 12 12zm-1.535 0c0-5.7704-4.6946-10.465-10.465-10.465S1.535 6.2296 1.535 12 6.2296 22.4649 12 22.4649 22.465 17.7704 22.465 12z"
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
export class SvgQuasarIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}

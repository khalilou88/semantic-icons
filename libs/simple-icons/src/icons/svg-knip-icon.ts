import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-knip-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Knip</title>
      <path
        d="M4.5176 0C2.015 0 0 2.0149 0 4.5176v14.9648C0 21.985 2.0149 24 4.5176 24h14.9648C21.985 24 24 21.9851 24 19.4824V4.5176C24 2.015 21.9851 0 19.4824 0Zm12.9659 2.5467a3.4 3.4 0 0 1 .247.008l-5.5895 9.7468a1.935 1.935 0 0 1-.7084.9326c-.3034.1993-.468.1755-.7691.2833a1.08 1.08 0 0 0-.6235.5365l-.1038.3309c-.0933.2952-.2401.5905-.0203.8785.145.1894.4199.2598.7835.2474.3156.0641.6143.1936.8767.3801.2693.1999.4987.4485.6764.7328.5186 1.0066.5533 2.1165-.1739 3.3946-.8005 1.5062-1.9142 2.0284-3.194 2.0094-.8294-.1115-1.3981-.4927-1.7493-1.0958-.5398-.9266-.5312-1.9266-.1804-2.9074.26-.6607.5834-1.2947.9652-1.8933l.9865-2.4726.0964.091 5.1732-9.1073c.9693-1.4047 2.0802-2.0904 3.3073-2.0955M4.7507 7.4368c1.4697-.0032 2.4187.5759 3.0384 1.5236.1578.293.2594.613.2999.9434a2.31 2.31 0 0 1-.096.957c-.191.309-.2655.5828-.1715.8037.142.3332.4715.3512.7743.4158l.339.0729c.131.0057.2622-.012.3871-.0523l-.6167 1.1046-.0216-.0013.0058.0278-.0513.0906-2.559-.3521c-.709.0374-1.42.0057-2.1229-.0947-1.0254-.1774-1.9032-.6698-2.4392-1.59-.349-.5992-.403-1.2871-.0853-2.0598.615-1.1226 1.6225-1.8272 3.319-1.7892M4.7198 8.544a3.2 3.2 0 0 0-1.74.5275c-1.0344.7359-.6694 1.8267.2983 2.4018a2.557 2.557 0 0 0 1.4755.34 3.62 3.62 0 0 0 1.1605-.2512 1.82 1.82 0 0 0 .9709-.8359l-.0008-.0012c.3139-.6248.0415-1.2115-.454-1.6336-.3968-.339-.9306-.5205-1.5866-.5457a3 3 0 0 0-.1238-.0017m18.0086 2.5915c-.5746 1.1979-1.756 1.9016-3.5693 2.0616l-6.9009.005 1.1844-2.0227zm-11.7129.5823a.535.535 0 0 0-.2764.0725.536.536 0 0 0-.1338.8185.5363.5363 0 0 0 .8657-.6243.535.535 0 0 0-.4555-.2668zm-.7458 4.8196a1.822 1.822 0 0 0-1.2068.4308 3.59 3.59 0 0 0-.7912.8854 2.547 2.547 0 0 0-.433 1.45c.0229 1.1254.7918 1.9811 1.9428 1.4458a3.21 3.21 0 0 0 1.3815-1.354c.298-.5895.4042-1.142.3043-1.6558-.1227-.6392-.4978-1.1643-1.196-1.1996z"
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
export class SvgKnipIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}

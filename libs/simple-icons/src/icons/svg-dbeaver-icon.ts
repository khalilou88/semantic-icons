import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-dbeaver-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>DBeaver</title>
      <path
        d="M17.1113 0a3.283 3.283 0 0 0-1.746.5508 8.4362 8.4362 0 0 0-2.7481 2.543 6.7216 6.7216 0 0 1-1.3438 0c-.3202 0-.7887.209-.5742.9628.2146.7538.798 1.4973.75 1.9239a3.6987 3.6987 0 0 0-.0683.8047c-.2979.4714-1.6906 2.743-2.1133 4.5488 0 0 .7957-7.967-1.6446-9.33C5.1828.6406 3.219 1.7271 2.5625 3.5233c-1.4027 3.833.6752 9.8253 3.6055 14.6621 2.9302 4.837 5.7128 5.7083 7.6855 5.795 3.2985.1443 2.3385-.57 3.5235-.6407 1.1848-.0705 1.0116.6411 2.9843.3653 1.438-.2085 1.685-1.1705 1.1407-1.6035-.5445-.433-.3626-1.4832.1562-3.7188.5188-2.2356-.224-6.17-.746-7.1836-.522-1.0136-.4643-1.5298.0897-2.5273a6.2125 6.2125 0 0 0 .8497-2.5059 3.858 3.858 0 0 0 0-1.043.0703.0703 0 0 0 0-.0214v-.0508s-.3439 1.3752-1.0196 1.8691a9.8362 9.8362 0 0 0-.3203.2442c.0673-.2566.3209-1.34-.041-1.9239 0 0-.1508 2.4876-1.4766 2.6192-1.3258.1315-3.202-1.2243-3.7304-1.7696.0385.21.0682.268.1093.4297.044.1514.0957.2998.1563.4453.1857.5999.3837 1.5177.086 2.0918-.4644.911-1.4756 2.313-1.3731 4.3145a8.4896 8.4896 0 0 0 .8027 3.5273c.3907.988.4929 1.8995.416 2.0567-.0768.1571.027.9613-1.8144-.418-1.8414-1.3792-2.338-2.8066-2.338-2.8066a5.9008 5.9008 0 0 0-.3358 2.496 15.5107 15.5107 0 0 0 .7773 3.5606s-2.4149-1.9574-2.543-5.877c-.1217-3.602 1.986-7.7686 2.3223-8.4101.0652.1444.1618.2733.2832.375.1214.1016.2645.1743.418.2129 0 0-.9392-.5175-.254-2.5254.6854-2.0079 2.0667-3.7942 3.463-4.58a3.9939 3.9939 0 0 1 3.871-.1973A3.2807 3.2807 0 0 0 17.377.0059 3.2584 3.2584 0 0 0 17.1113 0Zm-1.3906 1.8652a1.1517 1.1517 0 0 0-.2207.0254c-.3523.077-.5402.49-.2969 1a.8232.8232 0 0 1 .0664.3614.8266.8266 0 0 1-.0957.3554 4.9858 4.9858 0 0 1 .9102-.7168 4.3949 4.3949 0 0 1 1.2168-.4394 1.4291 1.4291 0 0 1-.7246-.2207 1.1402 1.1402 0 0 0-.4922-.3125 1.1424 1.1424 0 0 0-.3633-.0528Zm4.8711.1739c-.5036 0-1.1723.1135-1.6875.3164a1.3396 1.3396 0 0 0-.7617.5625c-.2786.6415 1.4175 1.7047 2.0996 1.5058.3202-.093.7957-.7883 1.0039-1.3945.141-.433.1598-.8185-.0996-.918-.1311-.049-.3258-.0722-.5547-.0722zm.2246 5.33s-.3464 1.1811-.5898 1.7168c-.2114.4747-.2786.4357-.4356.4903a4.3875 4.3875 0 0 0 .1758-.664c.0929-.3914 0-.4942 0-.4942a4.1717 4.1717 0 0 1-.4629 1.2832 1.0077 1.0077 0 0 1-.6406.039c-.2594-.1058-.3047-1.3259-.3047-1.3964a2.5126 2.5126 0 0 0 1.2559-.1915 2.5196 2.5196 0 0 0 1.002-.7832Z"
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
export class SvgDbeaverIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}

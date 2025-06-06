import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-school-exclamation-alt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      d="M19 19c0-.5523.4477-1 1-1h.01c.5523 0 1 .4477 1 1s-.4477 1-1 1H20c-.5523 0-1-.4477-1-1Zm1-7c.5523 0 1 .4477 1 1v3c0 .5523-.4477 1-1 1s-1-.4477-1-1v-3c0-.5523.4477-1 1-1Z"
      clip-rule="evenodd"
    />
    <svg:path
      d="M11 13c0-.5523.4477-1 1-1s1 .4477 1 1-.4477 1-1 1-1-.4477-1-1Z"
    />
    <svg:path
      fill-rule="evenodd"
      d="M12 5.04736 6.65111 11.6306c-.18989.2337-.47499.3694-.77612.3694H3v7c0 .5523.44772 1 1 1h13.1707c-.1105-.3128-.1707-.6494-.1707-1 0-.5464.1461-1.0587.4013-1.5C17.1461 17.0587 17 16.5464 17 16v-3c0-.499.1218-.9696.3374-1.3835L12 5.04736ZM12 10c-1.6569 0-3.00001 1.3432-3.00001 3 0 1.6569 1.34311 3 3.00001 3 1.6568 0 3-1.3431 3-3 0-1.6568-1.3432-3-3-3Z"
      clip-rule="evenodd"
    />
    <svg:path
      d="M20.0095 10H18.601l-3.25-3.99999H18c.3148 0 .6112.1482.8.4L21.5 10h-1.4905Zm-.015 2c-.5498.003-.9945.4495-.9945 1v3c0 .0565.0047.1119.0137.1659.079.4733.4905.8341.9863.8341h.01c.4924-.0049.8997-.3656.9768-.8374.0087-.0529.0132-.1072.0132-.1626v-3c0-.5505-.4447-.997-.9945-1h-.011ZM21 18.8581c-.0013-.0092-.0027-.0183-.0043-.0273-.0803-.4717-.4911-.8308-.9857-.8308H20c-.4958 0-.9073.3608-.9863.8341-.009.054-.0137.1094-.0137.1659 0 .5523.4477 1 1 1h.0056c.5497-.003.9944-.4496.9944-1v-.1419ZM2.5 10l2.7-3.59999c.18885-.2518.48524-.4.8-.4h2.64902L5.39902 10H2.5Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSchoolExclamationAltIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}

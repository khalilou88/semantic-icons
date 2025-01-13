import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-transition-top-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M12 6l.081 .003l.12 .017l.111 .03l.111 .044l.098 .052l.104 .074l.082 .073l3 3a1 1 0 1 1 -1.414 1.414l-1.293 -1.292v4.585h5a4 4 0 1 1 0 8h-12a4 4 0 1 1 0 -8h5v-4.585l-1.293 1.292a1 1 0 0 1 -1.32 .083l-.094 -.083a1 1 0 0 1 0 -1.414l3 -3l.112 -.097l.11 -.071l.062 -.031l.081 -.034l.076 -.024l.118 -.025l.058 -.007zm6 -4a4 4 0 0 1 4 4a1 1 0 0 1 -1.993 .117l-.007 -.117a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2a1 1 0 1 1 -2 0a4 4 0 0 1 4 -4z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTransitionTopIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}

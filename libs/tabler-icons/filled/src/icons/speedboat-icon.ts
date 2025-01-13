import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-speedboat-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M14 7a1 1 0 0 1 .832 .445l1.702 2.555h5.466a1 1 0 0 1 .833 1.554l-3.1 4.66a4 4 0 0 1 -3.333 1.786h-14.4a1 1 0 0 1 -.936 -1.351l1.5 -4a1 1 0 0 1 .936 -.649h1.756l.9 -3h-.156a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 1 -1zm-6.657 5h1.887c.383 0 .762 -.074 1.12 -.219l3.557 -1.418q .186 -.075 .377 -.135l-.82 -1.228h-5.22z"
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
export class SiSpeedboatIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}

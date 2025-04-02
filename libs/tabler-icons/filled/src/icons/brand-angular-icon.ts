import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-brand-angular-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M12.665 2.174l7.4 2.612a2 2 0 0 1 1.316 2.156l-1.323 9.703a2 2 0 0 1 -.99 1.468l-6.076 3.471a2 2 0 0 1 -1.984 0l-6.076 -3.47a2 2 0 0 1 -.96 -1.3l-.03 -.167l-1.322 -9.704a2 2 0 0 1 1.316 -2.156l7.4 -2.613a2 2 0 0 1 1.33 0m.271 4.475c-.324 -.865 -1.548 -.865 -1.872 0l-3 8a1 1 0 0 0 .585 1.287l.111 .035a1 1 0 0 0 1.176 -.62l.506 -1.351h3.113l.508 1.352a1 1 0 0 0 1.176 .62l.111 -.035a1 1 0 0 0 .585 -1.287zm-.937 3.199l.807 2.151h-1.614z"
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
export class SiBrandAngularIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-ankermake-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>AnkerMake</svg:title>
    <svg:path
      d="m12.35 10.462 3.075 3.122c.187.187.187.42 0 .606l-3.122 3.123c-.186.186-.42.186-.606 0L8.575 14.19c-.187-.186-.187-.419 0-.606l3.169-3.122c.186-.186.419-.186.606 0Zm-1.585-1.584c.14.186.14.419-.047.605l-3.122 3.123c-.186.186-.419.186-.606 0l-1.724-1.724v12.675H0V.443h2.33l8.435 8.435ZM21.717.443H24v23.114h-5.266V10.882l-1.724 1.724c-.187.186-.42.186-.606 0l-3.122-3.123c-.187-.186-.187-.419 0-.605L21.717.443Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAnkermakeIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#88F387');
}

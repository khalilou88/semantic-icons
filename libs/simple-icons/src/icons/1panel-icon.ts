import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-1panel-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>1Panel</svg:title>
    <svg:path
      d="m12 0 10.349 6v12L12 24 1.651 18V6zm0 .326L1.897 6.158v11.664L12 23.653l10.103-5.831V6.158zM8.84 20.523l-5.801-3.349V6.826L12 1.653l2.23 1.287-8.925 5.195v7.73l5.792 3.345zm6.299-17.058 5.822 3.361v10.348L12 22.347l-2.274-1.312 8.969-5.17v-7.73l-5.823-3.362zm-2.137 3.35v2.869l.024 7.666-.691.384-2.18-1.249.008-6.801H8.958L8.95 8.351l3.412-1.965z"
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
export class Si1panelIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#0854C1');
}

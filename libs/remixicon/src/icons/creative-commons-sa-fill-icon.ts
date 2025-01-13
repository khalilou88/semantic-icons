import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-creative-commons-sa-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 6C9.82278 6 7.97058 7.66991 7.28433 10.0006L6 10L8.5 13L11 10L9.40123 10.0003C9.91991 8.80452 10.8895 8 12 8C13.6569 8 15 9.79086 15 12C15 14.2091 13.6569 16 12 16C10.8899 16 9.92064 15.1961 9.40181 14.0011L7.28471 14.0007C7.97126 16.3307 9.82318 18 12 18C14.7614 18 17 15.3137 17 12C17 8.68629 14.7614 6 12 6Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCreativeCommonsSaFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-diamonds-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5.16509 4.45923C5.55285 3.71602 6.32162 3.25 7.15991 3.25H16.8414C17.6796 3.25 18.4484 3.71602 18.8362 4.45923L20.9472 8.50541C21.3717 9.31907 21.2595 10.309 20.6637 11.007L12.5711 20.4869C12.4286 20.6539 12.2201 20.75 12.0006 20.75C11.7812 20.75 11.5727 20.6539 11.4302 20.4869L3.33758 11.007C2.74173 10.309 2.62952 9.31907 3.05404 8.50541L5.16509 4.45923ZM6.94479 4.78149L9.03286 8.25816L11.1398 4.75H7.15991C7.08593 4.75 7.01359 4.76089 6.94479 4.78149ZM10.3593 8.96289H13.6419L12.0006 6.23012L10.3593 8.96289ZM15.5285 10.4629L13.5919 16.9808L19.156 10.4629H15.5285ZM10.4093 16.9808L8.47271 10.4629H4.8453L10.4093 16.9808ZM10.0375 10.4629L12.0006 17.0699L13.9637 10.4629H10.0375ZM18.0068 6.11246L16.2949 8.96289H19.494L18.0068 6.11246ZM16.8414 4.75H12.8614L14.9684 8.25816L17.0565 4.78149C16.9877 4.76089 16.9153 4.75 16.8414 4.75ZM7.70637 8.96289L5.99442 6.11246L4.50724 8.96289H7.70637Z"
      fill="#323544"
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
export class SiDiamonds1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}

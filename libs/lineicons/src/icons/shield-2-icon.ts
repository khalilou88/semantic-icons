import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-shield-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.1385 2.29633C11.6899 2.06789 12.3094 2.06789 12.8608 2.29633L19.409 5.00923C20.1849 5.33068 20.7473 6.07313 20.7701 6.95597C20.8871 11.5013 19.4296 17.7631 13.067 21.5139C12.4101 21.9012 11.5955 21.9047 10.9353 21.5237C4.43153 17.7707 3.09402 11.4935 3.22752 6.95318C3.2534 6.07287 3.81392 5.33089 4.59034 5.00922L11.1385 2.29633ZM12.2867 3.68211C12.1029 3.60596 11.8964 3.60596 11.7126 3.68211L5.16447 6.395C4.89602 6.50622 4.73423 6.74708 4.72687 6.99727C4.60224 11.2358 5.84237 16.853 11.685 20.2245C11.8771 20.3354 12.1143 20.3343 12.3052 20.2218C18.0304 16.8467 19.3795 11.223 19.2706 6.99458C19.2642 6.74684 19.1038 6.50643 18.8349 6.39501L12.2867 3.68211Z"
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
export class SiShield2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}

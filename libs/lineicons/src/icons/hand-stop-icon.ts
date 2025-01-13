import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hand-stop-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.59859 3.49501C9.90762 2.65448 10.6463 2 11.616 2C12.5858 2 13.3245 2.65449 13.6335 3.49502C13.8851 3.38177 14.1652 3.31802 14.4678 3.31802C15.7613 3.31802 16.6437 4.48247 16.6437 5.69968V6.13703C16.8528 6.06365 17.0791 6.02338 17.3196 6.02338C18.6131 6.02338 19.4956 7.18783 19.4956 8.40504V14.1096C19.5135 14.8186 19.5172 16.7392 18.6678 18.5107C18.2348 19.4137 17.573 20.2935 16.5699 20.9459C15.565 21.5996 14.2658 21.9935 12.6103 22L12.6074 22C10.7934 22 9.18343 21.1137 8.00738 20.2156C6.81983 19.3087 5.98549 18.3213 5.70771 17.9747C5.64971 17.9023 5.59912 17.8417 5.54755 17.7856L3.20116 15.2304L3.18883 15.2167C2.38497 14.2968 2.38497 12.842 3.18883 11.9221C4.03934 10.9489 5.46177 10.943 6.31921 11.9044L6.58834 12.1788V5.69968C6.58834 4.48247 7.47077 3.31802 8.76424 3.31802C9.06687 3.31802 9.347 3.38177 9.59859 3.49501ZM9.44013 5.69273C9.43702 5.11226 9.04466 4.81802 8.76424 4.81802C8.48271 4.81802 8.08834 5.11461 8.08834 5.69968V14.0146C8.08834 14.3193 7.90403 14.5937 7.62198 14.7089C7.33994 14.8242 7.01621 14.7573 6.80288 14.5398L5.23465 12.9408C5.22459 12.9305 5.21482 12.92 5.20537 12.9092C4.94736 12.6139 4.57632 12.6139 4.31832 12.9092C4.01018 13.2618 4.00849 13.8684 4.31323 14.2238L6.65237 16.771C6.73649 16.8626 6.81079 16.9525 6.87825 17.0367C7.11701 17.3346 7.86479 18.2194 8.91777 19.0235C9.98186 19.8361 11.2702 20.4995 12.6059 20.5C14.0188 20.4942 15.0254 20.1612 15.7521 19.6885C16.4808 19.2145 16.9765 18.5686 17.3152 17.8622C18.0053 16.4231 18.013 14.7999 17.9958 14.1386L17.9956 14.1192L17.9956 8.40504C17.9956 7.81997 17.6012 7.52338 17.3196 7.52338C17.0381 7.52338 16.6437 7.81997 16.6437 8.40504V11.2299C16.6437 11.6441 16.308 11.9799 15.8937 11.9799C15.4795 11.9799 15.1437 11.6441 15.1437 11.2299V5.69968C15.1437 5.11461 14.7494 4.81802 14.4678 4.81802C14.1863 4.81802 13.7919 5.11461 13.7919 5.69968V11.2299C13.7919 11.6441 13.4562 11.9799 13.0419 11.9799C12.6277 11.9799 12.2919 11.6441 12.2919 11.2299V4.38166C12.2919 3.79659 11.8976 3.5 11.616 3.5C11.3345 3.5 10.9401 3.79659 10.9401 4.38166V5.69C10.9401 5.69323 10.9402 5.69646 10.9402 5.69968L10.9401 11.0417C10.9401 11.4559 10.6043 11.7917 10.1901 11.7917C9.77592 11.7917 9.44013 11.4559 9.44013 11.0417V5.69273Z"
      fill="#323544"
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
export class SiHandStopIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}

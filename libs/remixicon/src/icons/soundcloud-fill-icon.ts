import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-soundcloud-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.464 8.59606C10.7291 8.59606 10.944 10.7021 10.944 13.3001L10.9427 13.6511C10.9244 16.0851 10.717 18.0041 10.464 18.0041C10.2079 18.0041 9.99871 16.0392 9.98474 13.564L9.98408 13.2117C9.98889 10.6545 10.2019 8.59606 10.464 8.59606ZM8.8 9.55606C9.05863 9.55606 9.26949 11.3561 9.27962 13.6102V13.9499C9.26949 16.204 9.05863 18.0041 8.8 18.0041C8.5446 18.0041 8.33579 16.2488 8.32086 14.0343L8.3201 13.6949L8.32241 13.3544C8.34666 11.2214 8.55123 9.55606 8.8 9.55606ZM7.136 9.55606C7.3914 9.55606 7.60021 11.3114 7.61515 13.5259L7.6159 13.8652L7.61359 14.2057C7.58934 16.3387 7.38477 18.0041 7.136 18.0041C6.87737 18.0041 6.66651 16.204 6.65638 13.9499V13.6102C6.66651 11.3561 6.87737 9.55606 7.136 9.55606ZM5.472 10.1321C5.7371 10.1321 5.952 11.8943 5.952 14.0681L5.95028 14.4033C5.92954 16.4202 5.72333 18.0041 5.472 18.0041C5.21035 18.0041 4.99759 16.2873 4.99211 14.1525V13.9836C4.99759 11.8488 5.21035 10.1321 5.472 10.1321ZM3.808 11.8601C4.0731 11.8601 4.288 13.2354 4.288 14.9321L4.28738 15.0901C4.27452 16.7133 4.06481 18.0041 3.808 18.0041C3.5429 18.0041 3.328 16.6287 3.328 14.9321L3.32862 14.774C3.34148 13.1508 3.55119 11.8601 3.808 11.8601ZM14.592 7.06006C17.1727 7.06006 19.3129 8.94578 19.71 11.4145C20.0053 11.3295 20.3173 11.2841 20.64 11.2841C22.4957 11.2841 24 12.7884 24 14.6441C24 16.4786 22.5297 17.9698 20.7031 18.0035L20.64 18.0041H12.48C12.0558 18.0041 11.712 17.6602 11.712 17.2361V7.93296C12.5358 7.3816 13.5263 7.06006 14.592 7.06006ZM2.144 11.6681C2.4091 11.6681 2.624 13.0005 2.624 14.6441L2.62336 14.7996C2.6103 16.3709 2.40068 17.6201 2.144 17.6201C1.88311 17.6201 1.67084 16.3296 1.66416 14.7221L1.664 14.6441C1.664 13.0005 1.8789 11.6681 2.144 11.6681ZM0.48 12.6281C0.745097 12.6281 0.96 13.5736 0.96 14.7401L0.959091 14.8711C0.943709 15.9765 0.735093 16.8521 0.48 16.8521C0.214903 16.8521 0 15.9065 0 14.7401L0.000909213 14.609C0.0162906 13.5036 0.224907 12.6281 0.48 12.6281Z"
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
export class SiSoundcloudFillIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}

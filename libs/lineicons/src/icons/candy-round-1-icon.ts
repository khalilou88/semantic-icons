import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-candy-round-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.0008 5.25C14.8152 5.25 17.2272 6.97309 18.24 9.42162L20.8231 7.63336C21.0525 7.47457 21.351 7.4562 21.5981 7.58567C21.8452 7.71513 22 7.97104 22 8.25V15.75C22 16.029 21.8452 16.2849 21.5981 16.4143C21.351 16.5438 21.0525 16.5254 20.8231 16.3666L18.24 14.5784C17.2272 17.0269 14.8152 18.75 12.0008 18.75C9.18601 18.75 6.77381 17.0265 5.76117 14.5775L3.17691 16.3666C2.94755 16.5254 2.64902 16.5438 2.40192 16.4143C2.15482 16.2849 2 16.029 2 15.75V8.25C2 7.97104 2.15483 7.71513 2.40192 7.58567C2.64902 7.4562 2.94755 7.47457 3.17691 7.63336L5.76117 9.42246C6.77381 6.97349 9.18601 5.25 12.0008 5.25ZM12.0008 6.75C9.10184 6.75 6.75156 9.10081 6.75156 12C6.75156 14.8992 9.10184 17.25 12.0008 17.25C14.8997 17.25 17.25 14.8992 17.25 12C17.25 9.10081 14.8997 6.75 12.0008 6.75ZM18.75 13.107L20.5 14.3186V9.68143L18.75 10.893V13.107ZM5.25 13.107L5.25 10.893L3.5 9.68143L3.5 14.3186L5.25 13.107Z"
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
export class SiCandyRound1Icon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}

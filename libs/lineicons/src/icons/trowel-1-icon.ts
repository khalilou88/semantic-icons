import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-trowel-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18.5502 3.11455C20.2963 2.55042 21.9471 4.2012 21.3829 5.9473L18.9427 13.5003C18.4257 15.1006 16.3999 15.5887 15.2107 14.3995L13.1842 12.373L11.653 13.9043C12.1439 14.7634 12.0227 15.8772 11.2893 16.6106L7.55993 20.34C6.68125 21.2186 5.25663 21.2186 4.37795 20.34L4.15901 20.121C3.28033 19.2423 3.28033 17.8177 4.15901 16.939L7.88834 13.2097C8.6209 12.4772 9.73292 12.3553 10.5917 12.8443L12.1236 11.3124L10.0979 9.28676C8.90878 8.09761 9.39692 6.07175 10.9972 5.55474L18.5502 3.11455ZM14.2449 11.3124L16.2714 13.3389C16.6678 13.7353 17.343 13.5726 17.5154 13.0391L19.9556 5.48615C20.1436 4.90412 19.5934 4.35386 19.0113 4.5419L11.4584 6.98209C10.9249 7.15443 10.7622 7.82971 11.1586 8.2261L13.1842 10.2517L14.3728 9.06312C14.6657 8.77023 15.1406 8.77023 15.4335 9.06312C15.7264 9.35601 15.7264 9.83089 15.4335 10.1238L14.2449 11.3124ZM10.0097 14.2704C9.71676 13.9775 9.24189 13.9775 8.949 14.2704L5.21967 17.9997C4.92678 18.2926 4.92678 18.7675 5.21967 19.0604L5.43861 19.2793C5.7315 19.5722 6.20638 19.5722 6.49927 19.2793L10.2286 15.55C10.5215 15.2571 10.5215 14.7822 10.2286 14.4893L10.0097 14.2704Z"
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
export class SiTrowel1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-star-fat-half-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.0817 2.37501C13.0817 2.02645 12.8415 1.72383 12.5021 1.64463C12.1627 1.56543 11.8134 1.73052 11.6591 2.04309L9.00491 7.42111L3.06991 8.28352C2.78739 8.32457 2.55268 8.52245 2.46446 8.79396C2.37625 9.06547 2.44982 9.36352 2.65425 9.56279L6.94886 13.749L5.93504 19.66C5.88678 19.9414 6.00244 20.2258 6.2334 20.3936C6.46436 20.5614 6.77056 20.5835 7.02325 20.4507L12.6807 17.4764C12.9273 17.3467 13.0817 17.0911 13.0817 16.8125V2.37501ZM10.1755 8.43854L11.5817 5.58934V16.3595L7.67034 18.4158L8.49392 13.6139C8.53565 13.3706 8.45499 13.1224 8.27822 12.9501L4.78948 9.5494L9.61081 8.84882C9.85509 8.81333 10.0663 8.6599 10.1755 8.43854Z"
      fill="#323544"
    />
    <svg:path
      d="M17.6405 20.4508L14.5993 18.852V17.1573L16.9934 18.416L16.1698 13.6141C16.1281 13.3708 16.2087 13.1226 16.3855 12.9503L19.8742 9.54957L15.0529 8.84899C14.8754 8.8232 14.7154 8.73515 14.5993 8.60403V5.27443L15.6588 7.42128L21.5938 8.28368C21.8763 8.32474 22.111 8.52262 22.1992 8.79413C22.2875 9.06564 22.2139 9.36368 22.0095 9.56295L17.7149 13.7492L18.7287 19.6602C18.7769 19.9416 18.6613 20.2259 18.4303 20.3937C18.1993 20.5615 17.8931 20.5837 17.6405 20.4508Z"
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
export class SiStarFatHalf2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}

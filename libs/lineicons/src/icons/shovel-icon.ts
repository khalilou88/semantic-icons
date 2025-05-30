import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-shovel-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17.8464 2.21967C17.5535 1.92678 17.0787 1.92678 16.7858 2.21967C15.4475 3.55792 15.298 5.63473 16.3371 7.13805L11.8044 11.6708L9.58765 9.45405C9.29476 9.16115 8.81988 9.16115 8.52699 9.45404L3.85318 14.1279C2.09582 15.8852 2.09581 18.7345 3.85318 20.4918L4.04398 20.6826C5.80133 22.44 8.65058 22.44 10.4079 20.6826L15.0818 16.0088C15.2224 15.8682 15.3014 15.6774 15.3014 15.4785C15.3014 15.2796 15.2224 15.0888 15.0818 14.9481L12.8651 12.7314L17.4125 8.18404C18.9079 9.15709 20.9297 8.98761 22.2417 7.67561C22.5346 7.38272 22.5346 6.90784 22.2417 6.61495L17.8464 2.21967ZM17.8464 6.61495C17.111 5.87952 16.9629 4.77916 17.4022 3.89677L20.5646 7.05917C19.6822 7.49845 18.5819 7.35038 17.8464 6.61495ZM9.1311 14.3441C8.83821 14.637 8.83821 15.1118 9.1311 15.4047C9.424 15.6976 9.89887 15.6976 10.1918 15.4047L11.8044 13.7921L13.4908 15.4785L9.34728 19.622C8.1757 20.7935 6.27621 20.7935 5.10464 19.622L4.91384 19.4312C3.74226 18.2596 3.74226 16.3601 4.91384 15.1885L9.05732 11.045L10.7437 12.7314L9.1311 14.3441Z"
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
export class SiShovelIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}

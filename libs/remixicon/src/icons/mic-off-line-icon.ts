import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-mic-off-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16.4249 17.839L21.1925 22.6066L22.6068 21.1924L2.80777 1.3934L1.39355 2.80761L7.00016 8.41421V10C7.00016 12.7614 9.23873 15 12.0002 15C12.4825 15 12.9489 14.9317 13.3902 14.8042L14.9404 16.3544C14.0464 16.7688 13.0503 17 12.0002 17C8.47368 17 5.55627 14.3923 5.07105 11H3.05509C3.51623 15.1716 6.82854 18.4839 11.0002 18.9451V23H13.0002V18.9451C14.2341 18.8087 15.3929 18.4228 16.4249 17.839ZM11.5528 12.9669C10.2541 12.7727 9.22745 11.7461 9.03328 10.4473L11.5528 12.9669ZM19.3747 15.1604L17.9323 13.7179C18.4407 12.9084 18.788 11.9874 18.9293 11H20.9452C20.7754 12.5366 20.2187 13.9565 19.3747 15.1604ZM16.4658 12.2514L14.9173 10.703C14.9715 10.4775 15.0002 10.2421 15.0002 10V6C15.0002 4.34315 13.657 3 12.0002 3C10.7059 3 9.6031 3.81956 9.18237 4.96802L7.68575 3.47139C8.55427 1.99268 10.1613 1 12.0002 1C14.7616 1 17.0002 3.23858 17.0002 6V10C17.0002 10.8099 16.8076 11.5748 16.4658 12.2514Z"
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
export class SiMicOffLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}

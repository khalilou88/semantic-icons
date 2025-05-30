import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-gatsby-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 2C6.45161 2 2 6.45161 2 12C2 17.5484 6.45161 22 12 22C17.5484 22 22 17.5484 22 12C22 6.45161 17.5484 2 12 2ZM4.12903 12.0968L11.871 19.8387C7.64516 19.8065 4.19355 16.3548 4.12903 12.0968ZM13.7742 19.6452L4.35484 10.2258C5.19355 6.74194 8.25806 4.12903 12 4.12903C14.5806 4.12903 16.9032 5.3871 18.3548 7.35484L17.2581 8.32258C16.129 6.64516 14.1613 5.58065 12 5.58065C9.22581 5.58065 6.87097 7.35484 5.96774 9.80645L14.1935 18.0323C16.1935 17.2903 17.7419 15.6129 18.2258 13.5161H14.8065V12H19.8387C19.871 15.7419 17.2258 18.871 13.7742 19.6452Z"
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
export class SiGatsbyIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}

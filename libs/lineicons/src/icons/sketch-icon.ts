import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sketch-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2.74194 8.22584L2 9.22584H5.64516L5.90323 3.96777L2.74194 8.22584ZM17.6452 3.4839L12.4516 2.96777L17.9355 8.93552L17.6452 3.4839ZM6.19355 10.4516L5.74194 9.58068H2.03226L11.129 20.1613L6.19355 10.4516ZM6.25806 9.22584H17.7419L14.4516 5.64519L12 2.96777L6.25806 9.22584ZM18.2581 9.58068L12.871 20.1936L21.9677 9.61293H18.2581V9.58068ZM18.4516 4.45164L18.0968 3.93552L18.129 4.64519L18.3548 9.22584H22L18.4516 4.45164ZM6.22581 5.45164L6.03226 8.90326L11.5484 2.96777L6.35484 3.4839L6.22581 5.45164ZM17.871 9.58068H6.12903L7.87097 12.9678L12 21.0323L17.871 9.58068Z"
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
export class SiSketchIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}

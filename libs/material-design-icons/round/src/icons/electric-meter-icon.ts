import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-electric-meter-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.73 2C7.05 2.14 3.15 6.03 3 10.71c-.13 4.04 2.42 7.5 6 8.77V21c0 .55.45 1 1 1s1-.45 1-1v-1.06a8.262 8.262 0 0 0 2 0V21c0 .55.45 1 1 1s1-.45 1-1v-1.53c3.49-1.24 6-4.57 6-8.47 0-5.05-4.18-9.15-9.27-9zm1.81 12.71L12 16.25c-.41.41-1.09.41-1.5 0-.41-.41-.41-1.09 0-1.5l.5-.5-.54-.54a.996.996 0 0 1 0-1.41L12 10.75c.41-.41 1.09-.41 1.5 0 .41.41.41 1.09 0 1.5l-.5.5.54.54c.39.39.39 1.03 0 1.42zM15 9H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiElectricMeterIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-shower-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="8" cy="17" r="1" />
    <svg:circle cx="12" cy="17" r="1" />
    <svg:circle cx="16" cy="17" r="1" />
    <svg:path
      d="M13 5.08V3h-2v2.08C7.61 5.57 5 8.47 5 12v2h14v-2c0-3.53-2.61-6.43-6-6.92z"
    />
    <svg:circle cx="8" cy="20" r="1" />
    <svg:circle cx="12" cy="20" r="1" />
    <svg:circle cx="16" cy="20" r="1" />
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
export class SiShowerIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

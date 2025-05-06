import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-notifications-off-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m41.37 64 22.628-22.628L470.627 448l-22.628 22.627zM256 480a80.09 80.09 0 0 0 73.3-48H182.7a80.09 80.09 0 0 0 73.3 48M112 227.47V288l-48 64v48h268.12L115.87 183.75a236.8 236.8 0 0 0-3.87 43.72M448 352l-48-64v-60.53C400 157 372.64 95.61 304 80l-8-48h-80l-8 48a117.5 117.5 0 0 0-41.95 18.17l282 282Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNotificationsOffSharpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}

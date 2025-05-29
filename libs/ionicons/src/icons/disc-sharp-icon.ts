import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-disc-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="256" cy="256" r="32" />
    <svg:path
      d="M414.39 97.61A224 224 0 1 0 97.61 414.39 224 224 0 1 0 414.39 97.61M256 336a80 80 0 1 1 80-80 80.09 80.09 0 0 1-80 80"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDiscSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}

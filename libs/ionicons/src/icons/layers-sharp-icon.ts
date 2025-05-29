import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-layers-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M480 150 256 48 32 150l224 104zM255.71 392.95l-144.81-66.2L32 362l224 102 224-102-78.69-35.3z"
    />
    <svg:path
      d="m480 256-75.53-33.53L256.1 290.6l-148.77-68.17L32 256l224 102z"
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
export class SiLayersSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}

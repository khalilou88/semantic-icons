import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-pin-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M339 99a83 83 0 1 0-102 80.8V464l19 32 19-32V179.8A83.28 83.28 0 0 0 339 99m-59-6a21 21 0 1 1 21-21 21 21 0 0 1-21 21"
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
export class SiPinSharpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-recording-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M384 138a117.93 117.93 0 00-91.84 192h-72.32A118 118 0 10128 374h256a118 118 0 000-236zM54 256a74 74 0 1174 74 74.09 74.09 0 01-74-74zm330 74a74 74 0 1174-74 74.09 74.09 0 01-74 74z"
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
export class SiRecordingSharpIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}

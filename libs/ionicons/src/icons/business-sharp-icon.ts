import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-business-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M320 176V16H32v480h128v-96h32v96h288V176zM112 432H80v-32h32zm0-80H80v-32h32zm0-80H80v-32h32zm0-80H80v-32h32zm0-80H80V80h32zm128-32h32v32h-32zm-48 272h-32v-32h32zm0-80h-32v-32h32zm0-80h-32v-32h32zm0-80h-32V80h32zm80 320h-32v-32h32zm0-80h-32v-32h32zm0-80h-32v-32h32zm0-80h-32v-32h32v32zm176 272H320v-32h32v-32h-32v-48h32v-32h-32v-48h32v-32h-32v-32h128z"
    />
    <svg:path d="M384 400h32v32h-32zM384 320h32v32h-32zM384 240h32v32h-32z" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBusinessSharpIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}

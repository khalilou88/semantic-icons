import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hardware-chip-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M160 160h192v192H160z" />
    <svg:path
      d="M480 198v-44h-32V88a24 24 0 0 0-24-24h-66V32h-44v32h-36V32h-44v32h-36V32h-44v32H88a24 24 0 0 0-24 24v66H32v44h32v36H32v44h32v36H32v44h32v66a24 24 0 0 0 24 24h66v32h44v-32h36v32h44v-32h36v32h44v-32h66a24 24 0 0 0 24-24v-66h32v-44h-32v-36h32v-44h-32v-36Zm-352-70h256v256H128Z"
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
export class SiHardwareChipSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}

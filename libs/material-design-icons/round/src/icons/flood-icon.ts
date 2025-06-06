import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-flood-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18.67 19c-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.1 1-3.34 1-1.24 0-1.38-1-3.33-1-1.54 0-1.96.62-2.67.88-.4.15-.67.52-.67.95 0 .71.72 1.19 1.38.94.77-.29 1.11-.77 1.96-.77 1.24 0 1.38 1 3.33 1 1.95 0 2.1-1 3.34-1 1.22 0 1.4 1 3.33 1 1.93 0 2.1-1 3.33-1 .84 0 1.18.47 1.95.77.66.26 1.38-.23 1.38-.94v-.01c0-.42-.27-.8-.67-.94-.71-.26-1.12-.88-2.66-.88zm-9.99-1.5c1.95 0 2.09-1 3.33-1 1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 .82 0 1.17.46 1.93.76.66.26 1.38-.23 1.38-.94 0-.42-.26-.79-.65-.94-.29-.11-.54-.27-.83-.43l-2.02-7.53 1.17.47a.983.983 0 0 0 1.29-.55.981.981 0 0 0-.57-1.29l-9.24-3.54c-.81-.31-1.72-.06-2.27.61l-6.23 7.7a.982.982 0 0 0 .16 1.4c.43.34 1.06.26 1.39-.17l.78-1 .93 3.48c-.18-.02-.35-.05-.56-.05-1.54 0-1.95.62-2.66.88-.4.17-.67.55-.67.97 0 .7.69 1.19 1.35.95.8-.29 1.18-.78 2-.78 1.19 0 1.42 1 3.33 1zm5.36-7.32 1.42 5.31c-1.34.09-1.47-.99-3.47-.99-.36 0-.65.04-.91.1l-.91-3.39 3.87-1.03z"
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
export class SiFloodIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

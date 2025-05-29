import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-ticket-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m426.24 127.72-10.94 10.94a29.67 29.67 0 0 1-42-42l10.94-10.94L314.52 16l-88 88-4 12.09-12.09 4L16 314.52l69.76 69.76 10.94-10.94a29.67 29.67 0 0 1 42 42l-10.94 10.94L197.48 496l194.4-194.4 4-12.09 12.09-4 88-88Zm-208.56 5.43 21.87-21.87 33 33-21.88 21.87Zm43 43 21.88-21.88 32.52 32.52-21.88 21.88Zm42.56 42.56 21.88-21.88 32.52 32.52-21.84 21.93Zm75.57 75.56-33-33 21.87-21.88 33 33Z"
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
export class SiTicketSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}

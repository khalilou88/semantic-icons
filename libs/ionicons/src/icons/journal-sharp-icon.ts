import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-journal-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M290 32H104a24 24 0 0 0-24 24v400a24 24 0 0 0 24 24h186ZM408 32h-58v448h58a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24"
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
export class SiJournalSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}

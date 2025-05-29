import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-newpipe-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>NewPipe</svg:title>
    <svg:path
      d="M11.988 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.012 0zm-4.38 4.608s1.512.888 3.672 2.16C13.848 8.28 17.304 10.32 20.16 12a5976.548 5976.548 0 0 0-8.736 5.16v-2.675c1.07-.63 2.467-1.455 4.224-2.485-1.296-.768-2.856-1.703-4.032-2.375l-1.68-.985v9.399l-2.328 1.377z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNewpipeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#CD201F');
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-osmand-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>OsmAnd</svg:title>
    <svg:path
      d="M12 0C6.11 0 1.332 4.777 1.332 10.668a10.67 10.67 0 0 0 6.52 9.828c1.927.836 2.667 1.282 3.26 2.467q.085.172.152.326c.189.422.318.711.736.711s.546-.289.736-.71q.069-.155.153-.327c.593-1.186 1.28-1.63 3.26-2.467a10.67 10.67 0 0 0 6.519-9.828C22.668 4.777 17.89 0 12 0m-.443 4.758a5.926 5.926 0 0 1 6.369 5.91 5.926 5.926 0 0 1-11.852 0 5.926 5.926 0 0 1 5.483-5.91"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiOsmandIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FF8800');
}

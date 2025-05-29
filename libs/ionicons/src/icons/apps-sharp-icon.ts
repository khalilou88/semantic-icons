import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-apps-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect width="112" height="112" x="48" y="48" rx="8" ry="8" />
    <svg:rect width="112" height="112" x="200" y="48" rx="8" ry="8" />
    <svg:rect width="112" height="112" x="352" y="48" rx="8" ry="8" />
    <svg:rect width="112" height="112" x="48" y="200" rx="8" ry="8" />
    <svg:rect width="112" height="112" x="200" y="200" rx="8" ry="8" />
    <svg:rect width="112" height="112" x="352" y="200" rx="8" ry="8" />
    <svg:rect width="112" height="112" x="48" y="352" rx="8" ry="8" />
    <svg:rect width="112" height="112" x="200" y="352" rx="8" ry="8" />
    <svg:rect width="112" height="112" x="352" y="352" rx="8" ry="8" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAppsSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}

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
    <svg:rect x="48" y="48" width="112" height="112" rx="8" ry="8" />
    <svg:rect x="200" y="48" width="112" height="112" rx="8" ry="8" />
    <svg:rect x="352" y="48" width="112" height="112" rx="8" ry="8" />
    <svg:rect x="48" y="200" width="112" height="112" rx="8" ry="8" />
    <svg:rect x="200" y="200" width="112" height="112" rx="8" ry="8" />
    <svg:rect x="352" y="200" width="112" height="112" rx="8" ry="8" />
    <svg:rect x="48" y="352" width="112" height="112" rx="8" ry="8" />
    <svg:rect x="200" y="352" width="112" height="112" rx="8" ry="8" />
    <svg:rect x="352" y="352" width="112" height="112" rx="8" ry="8" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAppsSharpIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}

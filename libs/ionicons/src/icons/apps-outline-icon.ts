import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-apps-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect
      width="80"
      height="80"
      x="64"
      y="64"
      rx="40"
      ry="40"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32px"
    />
    <svg:rect
      width="80"
      height="80"
      x="216"
      y="64"
      rx="40"
      ry="40"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32px"
    />
    <svg:rect
      width="80"
      height="80"
      x="368"
      y="64"
      rx="40"
      ry="40"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32px"
    />
    <svg:rect
      width="80"
      height="80"
      x="64"
      y="216"
      rx="40"
      ry="40"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32px"
    />
    <svg:rect
      width="80"
      height="80"
      x="216"
      y="216"
      rx="40"
      ry="40"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32px"
    />
    <svg:rect
      width="80"
      height="80"
      x="368"
      y="216"
      rx="40"
      ry="40"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32px"
    />
    <svg:rect
      width="80"
      height="80"
      x="64"
      y="368"
      rx="40"
      ry="40"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32px"
    />
    <svg:rect
      width="80"
      height="80"
      x="216"
      y="368"
      rx="40"
      ry="40"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32px"
    />
    <svg:rect
      width="80"
      height="80"
      x="368"
      y="368"
      rx="40"
      ry="40"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32px"
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
export class SiAppsOutlineIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}

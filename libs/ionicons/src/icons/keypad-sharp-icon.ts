import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-keypad-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect width="96" height="96" x="80" y="16" rx="8" ry="8" />
    <svg:rect width="96" height="96" x="208" y="16" rx="8" ry="8" />
    <svg:rect width="96" height="96" x="336" y="16" rx="8" ry="8" />
    <svg:rect width="96" height="96" x="80" y="144" rx="8" ry="8" />
    <svg:rect width="96" height="96" x="208" y="144" rx="8" ry="8" />
    <svg:rect width="96" height="96" x="336" y="144" rx="8" ry="8" />
    <svg:rect width="96" height="96" x="80" y="272" rx="8" ry="8" />
    <svg:rect width="96" height="96" x="208" y="272" rx="8" ry="8" />
    <svg:rect width="96" height="96" x="208" y="400" rx="8" ry="8" />
    <svg:rect width="96" height="96" x="336" y="272" rx="8" ry="8" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKeypadSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}

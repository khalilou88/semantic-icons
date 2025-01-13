import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-scissors-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.68347 7.55885L12 9.87538L18.3744 3.50102C19.1554 2.71997 20.4217 2.71997 21.2028 3.50102L21.9099 4.20812L9.68347 16.4346C9.88726 16.9145 10 17.4424 10 17.9967C10 20.2058 8.20914 21.9967 6 21.9967C3.79086 21.9967 2 20.2058 2 17.9967C2 15.7876 3.79086 13.9967 6 13.9967C6.55427 13.9967 7.08222 14.1094 7.56215 14.3132L9.87868 11.9967L7.56215 9.68017C7.08222 9.88397 6.55427 9.9967 6 9.9967C3.79086 9.9967 2 8.20584 2 5.9967C2 3.78756 3.79086 1.9967 6 1.9967C8.20914 1.9967 10 3.78756 10 5.9967C10 6.55098 9.88726 7.07892 9.68347 7.55885ZM6 7.9967C7.10457 7.9967 8 7.10127 8 5.9967C8 4.89213 7.10457 3.9967 6 3.9967C4.89543 3.9967 4 4.89213 4 5.9967C4 7.10127 4.89543 7.9967 6 7.9967ZM6 19.9967C7.10457 19.9967 8 19.1013 8 17.9967C8 16.8921 7.10457 15.9967 6 15.9967C4.89543 15.9967 4 16.8921 4 17.9967C4 19.1013 4.89543 19.9967 6 19.9967ZM15.5346 13.41L21.9099 19.7853L21.2028 20.4924C20.4217 21.2734 19.1554 21.2734 18.3744 20.4924L13.4133 15.5313L15.5346 13.41Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiScissorsFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}

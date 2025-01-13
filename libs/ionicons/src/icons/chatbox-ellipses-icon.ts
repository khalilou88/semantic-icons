import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-chatbox-ellipses-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M408 48H104a72.08 72.08 0 00-72 72v192a72.08 72.08 0 0072 72h24v64a16 16 0 0026.25 12.29L245.74 384H408a72.08 72.08 0 0072-72V120a72.08 72.08 0 00-72-72zM160 248a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiChatboxEllipsesIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-logo-appflow-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M198.626 28.424L8 484.423h114.376L256 164.779l133.624 319.645H504l-190.626-456H198.626z"
    />
    <svg:path
      d="M312 346.039c0 30.928-25.072 56-56 56s-56-25.072-56-56 25.072-56 56-56 56 25.072 56 56z"
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
export class SiLogoAppflowIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}

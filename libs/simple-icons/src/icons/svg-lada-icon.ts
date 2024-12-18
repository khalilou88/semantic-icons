import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-lada-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>LADA</title>
      <path
        d="M11.998 7.312c-5.908 0-10.82 1.669-11.81 3.866a1.974 1.974 0 0 0-.188.831c0 .193.028.508.227.895 1.078 2.156 5.94 3.784 11.775 3.784C18.629 16.688 24 14.588 24 12c0-2.589-5.375-4.688-12.002-4.688Zm-.89.993c.42.383.16 1.217-.642 2.368-.894 1.276-1.752 1.976-2.771 2.233L9.91 8.084h.01c.566-.025.949.005 1.188.22zm5.027 4.7c-.065-.04-.045-.139.03-.154l1-.201a.07.07 0 0 0 .052-.047l.16-.474c.015-.044-.018-.087-.063-.09l-1.866-.103a.305.305 0 0 0-.18.048l-.748.496a.385.385 0 0 0-.17.394c.209 1.09-.202 1.684-2.354 1.942-3.127.373-5.461 0-5.868-.074a.218.218 0 0 0-.234.121l-.213.463c-2.209-.657-3.742-1.653-4.112-2.793 0-.036-.081-.226-.081-.535 0-1.893 3.186-3.49 7.544-3.992h.016s-2.232 4.863-2.612 5.688a.088.088 0 0 0 .08.122h.124c1.31.044 2.892.091 4.87-.396 2.102-.518 3.688-2.005 4.296-3.087.616-1.099.263-1.943.195-2.232 3.878.596 6.359 2.095 6.413 3.84-.014.356-.11.704-.283 1.019-.728 1.214-2.796 2.22-5.55 2.76 1.084-1.188.236-2.27-.446-2.712z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgLadaIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
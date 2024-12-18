import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-unjs-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>UnJS</title>
      <path
        d="M22.686 0H1.29A1.477 1.477 0 0 0 0 1.297V22.68C.085 23.43.711 24 1.484 24h21.014A1.5 1.5 0 0 0 24 22.498V1.484C24 .711 23.412.077 22.686 0zm-4.393 15.05c.52-.011 1.004.113 1.398.514.041.042.077.088.116.131.246.327.353.694.398 1.08.024.209.03.42.031.63.004.883.001 1.768.002 2.652 0 .203-.065.368-.252.468a.445.445 0 0 1-.658-.38c-.004-.214-.002-.428-.002-.641 0-.779.002-1.557-.004-2.336-.002-.282-.056-.556-.213-.799a.937.937 0 0 0-.713-.433c-.62-.071-1.131.133-1.527.617-.17.208-.238.452-.238.718v2.836a.46.46 0 0 1-.61.448c-.178-.056-.295-.232-.3-.453-.002-.086 0-.172 0-.258l-.002-4.131c0-.184.055-.342.215-.443a.43.43 0 0 1 .449-.022c.155.08.236.213.248.387.002.035 0 .072 0 .12.03-.024.053-.04.074-.06.388-.352.839-.583 1.363-.63.076-.007.15-.012.225-.014zm-7.75.151c.235.014.413.226.414.496v1.647c0 .424-.002.847.006 1.271.004.21.054.412.156.598.142.259.36.423.645.5.364.107.753.09 1.107-.047.371-.146.58-.434.649-.82.026-.146.032-.299.033-.448.003-.9.001-1.802.002-2.703 0-.25.12-.422.338-.48.052-.014.109-.01.164-.014.258.044.408.214.408.47-.001 1.024.012 2.047-.018 3.07-.02.696-.333 1.254-.95 1.613-.262.152-.55.234-.85.27-.386.054-.779.03-1.155-.071-.598-.174-1.044-.53-1.283-1.121-.126-.312-.161-.638-.162-.97-.003-.925-.001-1.85 0-2.776 0-.304.205-.502.496-.485z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_computedHostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgUnjsIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}

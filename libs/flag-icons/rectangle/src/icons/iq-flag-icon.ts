import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-iq-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#fff" d="M0 160h640v160H0z" />
    <svg:path fill="#ce1126" d="M0 0h640v160H0z" />
    <svg:path fill="#000001" d="M0 320h640v160H0z" />
    <svg:g fill="#007a3d" transform="translate(-179.3 -92.8)scale(1.75182)">
      <svg:path
        d="m325.5 173.2-1.4-1q-.6-.7 1.2-.2 3.3 1 5.3-.8l1.3-1.1 1.5.7q1.5.8 2 .7c.7-.2 2.1-2 2-2.6 0-.7.6-.5 1 .3.6 1.6-.3 3.5-2 3.9q-1 .3-2.6-.3c-1.4-.5-1.7-.5-2.4 0a5 5 0 0 1-5.9.4m5.8-5.3a8 8 0 0 1-1-4q.1-.9.8-.6c1 .3 1.2 1 1 3q0 2.7-.8 1.6m-67.6-1.9c-.1 1.3 2.4 4.6 3.5 5.2-.8.3-1.7.2-2.4.5-4 4-18.4 18-21 21.4 7.8.2 16.4-.1 23.7-.4 0-5.3 5-5.6 8.4-7.5 1.7 2.7 6 2.5 6.6 6.6v17.6H216a9.7 9.7 0 0 1-12.3 7.5c2-2 5.4-2.8 6.6-5.7 1-6.4-2-10.3-4-14a24 24 0 0 0 7-3.6c-2.3 7 6.2 6.3 12.4 6.1.2-2.4.1-5.2-1.7-5.6 2.3-.9 2.7-1.2 6.6-4.4v9.6l46.1-.1c0-3 .8-7.9-1.6-7.9-2.2 0 0 6.2-1.8 6.2h-35.7v-6c1.5-1.6 1.3-1.5 11.6-11.8 1-1 8.3-7.6 14.6-13.7zm89.1-.3c2.5 1.4 4.5 3.2 7.5 4-.3 1.3-1.5 1.8-1.8 3.1v27c3.4.7 4.2-1.3 5.8-2.3.4 4.3 3.2 8.5 3 12h-14.5zm-19.4 14.5s5.3-4.5 5.3-4.7V199h3.8l-.1-26.3c1.5-1.6 4.6-3.8 5.3-5.4v42h-33.4c-.5-8.7-.6-17.7 9.6-15.8V190c-.3-.6-.9.1-1-.7 1.6-1.6 2.1-2 6.5-5.8l.1 15.5h3.9zm-12.6 18.6c.7 1 3.2 1 3-.8-.3-1.5-3.5-1-3 .8"
      />
      <svg:circle cx="224" cy="214.4" r="2" />
      <svg:path
        d="M287 165.8c2.5 1.3 4.5 3.2 7.6 4-.4 1.2-1.5 1.7-1.8 3v27c3.4.7 4.1-1.2 5.7-2.3.5 4.3 3.2 8.6 3.1 12H287z"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiIqFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 480');
}

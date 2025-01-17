import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-gr-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#0d5eaf" fill-rule="evenodd" d="M0 0h512v57H0z" />
    <svg:path fill="#fff" fill-rule="evenodd" d="M0 57h512v57H0z" />
    <svg:path fill="#0d5eaf" fill-rule="evenodd" d="M0 114h512v57H0z" />
    <svg:path fill="#fff" fill-rule="evenodd" d="M0 171h512v57H0z" />
    <svg:path fill="#0d5eaf" fill-rule="evenodd" d="M0 228h512v56.9H0z" />
    <svg:path fill="#fff" fill-rule="evenodd" d="M0 284.9h512v57H0z" />
    <svg:path fill="#0d5eaf" fill-rule="evenodd" d="M0 341.9h512v57H0z" />
    <svg:path fill="#fff" fill-rule="evenodd" d="M0 398.9h512v57H0z" />
    <svg:path fill="#0d5eaf" d="M0 0h284.9v284.9H0z" />
    <svg:g fill="#fff" fill-rule="evenodd" stroke-width="1.3">
      <svg:path d="M114 0h57v284.9h-57z" />
      <svg:path d="M0 114h284.9v57H0z" />
    </svg:g>
    <svg:path fill="#0d5eaf" fill-rule="evenodd" d="M0 455h512v57H0z" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGrFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}

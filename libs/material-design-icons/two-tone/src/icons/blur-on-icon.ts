import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-blur-on-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="14" cy="10" r="1.5" />
    <svg:circle cx="14" cy="18" r="1" />
    <svg:circle cx="14" cy="14" r="1.5" />
    <svg:circle cx="14" cy="6" r="1" />
    <svg:path
      d="M3 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM14.5 3c0-.28-.22-.5-.5-.5s-.5.22-.5.5.22.5.5.5.5-.22.5-.5zM21 14.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z"
    />
    <svg:circle cx="18" cy="18" r="1" />
    <svg:path
      d="M13.5 21c0 .28.22.5.5.5s.5-.22.5-.5-.22-.5-.5-.5-.5.22-.5.5zM21 10.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z"
    />
    <svg:circle cx="18" cy="14" r="1" />
    <svg:circle cx="18" cy="6" r="1" />
    <svg:circle cx="6" cy="18" r="1" />
    <svg:circle cx="6" cy="14" r="1" />
    <svg:path d="M3.5 14c0-.28-.22-.5-.5-.5s-.5.22-.5.5.22.5.5.5.5-.22.5-.5z" />
    <svg:circle cx="10" cy="6" r="1" />
    <svg:circle cx="6" cy="10" r="1" />
    <svg:circle cx="6" cy="6" r="1" />
    <svg:path d="M9.5 21c0 .28.22.5.5.5s.5-.22.5-.5-.22-.5-.5-.5-.5.22-.5.5z" />
    <svg:circle cx="10" cy="18" r="1" />
    <svg:path d="M10.5 3c0-.28-.22-.5-.5-.5s-.5.22-.5.5.22.5.5.5.5-.22.5-.5z" />
    <svg:circle cx="10" cy="14" r="1.5" />
    <svg:circle cx="10" cy="10" r="1.5" />
    <svg:circle cx="18" cy="10" r="1" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBlurOnIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

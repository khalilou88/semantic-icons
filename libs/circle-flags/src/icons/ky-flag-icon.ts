import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-ky-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#0052b4" d="M256 0h256v512H0V256Z" />
      <svg:path
        fill="#eee"
        d="M0 0v32l32 32L0 96v160h32l32-32 32 32h32v-83l83 83h45l-8-16 8-15v-14l-83-83h83V96l-32-32 32-32V0H96L64 32 32 0Z"
      />
      <svg:path
        fill="#d80027"
        d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128 128 128v-31l-97-97z"
      />
      <svg:circle cx="367.3" cy="144.7" r="44.5" fill="#6da544" />
      <svg:path
        fill="#d80027"
        d="M289.4 133.5h155.8l.1 29-76.9 79.7-79.1-79.7z"
      />
      <svg:path fill="#496e2d" d="M445.2 256zm-155.8 0z" />
      <svg:path
        fill="#ffda44"
        d="M289.4 300.5V345h23.4a77.6 77.6 0 0 0 109 0h23.4v-44.5z"
      />
      <svg:path
        fill="#338af3"
        d="M289.3 193.7v31.2l8 16.6-7.9 14.5c.1 59.6 77.9 78 77.9 78s78-18.4 78-78l-7.7-13.2 7.7-18v-31.1l-78-10.2z"
      />
      <svg:path
        fill="#eee"
        d="M367.3 224.9c-19.5 0-19.5 17.8-39 17.8s-19.4-17.8-39-17.8V256c19.7 0 19.6 17.8 39 17.8s19.5-17.8 39-17.8 19.5 17.8 39 17.8 19.4-17.8 39-17.8v-31.2c-19.6 0-19.6 17.8-39 17.8-19.5 0-19.5-17.8-39-17.8zm0-62.4c-19.5 0-19.5 17.8-39 17.8s-19.4-17.8-39-17.8v31.2c19.7 0 19.6 17.8 39 17.8s19.5-17.8 39-17.8 19.5 17.8 39 17.8 19.4-17.8 39-17.8v-31.2c-19.6 0-19.6 17.8-39 17.8-19.5 0-19.5-17.8-39-17.8z"
      />
    </svg:g>
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
export class SiKyFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}

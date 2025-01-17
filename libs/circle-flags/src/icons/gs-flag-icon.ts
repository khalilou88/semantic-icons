import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-gs-flag-icon]',
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
      <svg:rect
        width="64"
        height="32"
        x="336"
        y="256"
        fill="#6da544"
        rx="16"
        ry="16"
      />
      <svg:circle cx="368" cy="96" r="32" fill="#ff9811" />
      <svg:circle cx="368" cy="144" r="48" fill="#acabb1" />
      <svg:path
        fill="#338af3"
        d="M320 144v77c0 36 48 48 48 48s48-12 48-48v-77z"
      />
      <svg:rect
        width="32"
        height="128"
        x="288"
        y="128"
        fill="#333"
        rx="16"
        ry="16"
      />
      <svg:rect
        width="32"
        height="128"
        x="416"
        y="128"
        fill="#333"
        rx="16"
        ry="16"
      />
      <svg:path fill="#6da544" d="m320 144 48 112 48-112z" />
      <svg:path
        fill="#ffda44"
        d="M288 288v32h32v8h96v-8h32v-32h-32v8h-96v-8z"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGsFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}

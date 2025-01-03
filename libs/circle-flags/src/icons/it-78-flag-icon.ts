import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-it-78-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <svg:mask
        id="a"
        width="512"
        height="512"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <svg:circle cx="256" cy="256" r="256" fill="#fff" />
      </svg:mask>
    </defs>
    <svg:g mask="url(#a)">
      <svg:path fill="#0052b4" d="M0 0h512v512H0V0Z" />
      <svg:circle cx="256" cy="256" r="160" fill="#eee" />
      <svg:path
        fill="#ffda44"
        d="M357.8 357.8a144 144 0 0 1-203.6 0L256 256l101.8 101.8ZM154.2 154.2a144 144 0 0 1 203.6 0L256 256 154.2 154.2Z"
      />
      <svg:path
        fill="#333"
        d="M376 248h-24v-24h-16v24h-24v16h24v24h16v-24h24v-16zm-208 8 8-32h-16l8 32zm0 0 32 8v-16l-32 8zm0 0-8 32h16l-8-32zm0 0-32-8v16l32-8z"
      />
      <svg:path fill="#6da544" d="M248 192h16v24h-16z" />
      <svg:path fill="#496e2d" d="m256 120-32 80h64l-32-80z" />
      <svg:path
        fill="#338af3"
        d="m280 384-48-16v-24h48v40zm-48-48a16 16 0 0 1-16-16h80a16 16 0 0 1-16 16"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiIt78FlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '512');
    this.render.setAttribute(svg, 'height', '512');
  }
}
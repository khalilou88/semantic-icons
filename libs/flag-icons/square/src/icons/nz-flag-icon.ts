import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-nz-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:g id="nz-b">
        <svg:g id="nz-a">
          <svg:path d="M0-.3v.5l1-.5z" />
          <svg:path d="M.2.3 0-.1l1-.2z" />
        </svg:g>
        <use xlink:href="#nz-a" transform="scale(-1 1)" />
        <use xlink:href="#nz-a" transform="rotate(72 0 0)" />
        <use xlink:href="#nz-a" transform="rotate(-72 0 0)" />
        <use xlink:href="#nz-a" transform="scale(-1 1)rotate(72)" />
      </svg:g>
    </svg:defs>
    <svg:path fill="#00247d" fill-rule="evenodd" d="M0 0h512v512H0z" />
    <svg:g transform="translate(-148.7 90.5)scale(.60566)">
      <use
        xlink:href="#nz-b"
        width="100%"
        height="100%"
        fill="#fff"
        transform="translate(900 120)scale(45.4)"
      />
      <use
        xlink:href="#nz-b"
        width="100%"
        height="100%"
        fill="#cc142b"
        transform="matrix(30 0 0 30 900 120)"
      />
    </svg:g>
    <svg:g transform="rotate(82 418.7 105.1)scale(.60566)">
      <use
        xlink:href="#nz-b"
        width="100%"
        height="100%"
        fill="#fff"
        transform="rotate(-82 519 -457.7)scale(40.4)"
      />
      <use
        xlink:href="#nz-b"
        width="100%"
        height="100%"
        fill="#cc142b"
        transform="rotate(-82 519 -457.7)scale(25)"
      />
    </svg:g>
    <svg:g transform="rotate(82 418.7 105.1)scale(.60566)">
      <use
        xlink:href="#nz-b"
        width="100%"
        height="100%"
        fill="#fff"
        transform="rotate(-82 668.6 -327.7)scale(45.4)"
      />
      <use
        xlink:href="#nz-b"
        width="100%"
        height="100%"
        fill="#cc142b"
        transform="rotate(-82 668.6 -327.7)scale(30)"
      />
    </svg:g>
    <svg:g transform="translate(-148.7 90.5)scale(.60566)">
      <use
        xlink:href="#nz-b"
        width="100%"
        height="100%"
        fill="#fff"
        transform="translate(900 480)scale(50.4)"
      />
      <use
        xlink:href="#nz-b"
        width="100%"
        height="100%"
        fill="#cc142b"
        transform="matrix(35 0 0 35 900 480)"
      />
    </svg:g>
    <svg:path fill="#012169" d="M0 0h256v256H0z" />
    <svg:path
      fill="#fff"
      d="M256 0v32l-95 96 95 93.5V256h-33.5L127 162l-93 94H0v-34l93-93.5L0 37V0h31l96 94 93-94z"
    />
    <svg:path
      fill="#c8102e"
      d="m92 162 5.5 17L21 256H0v-1.5zm62-6 27 4 75 73.5V256zM256 0l-96 98-2-22 75-76zM0 .5 96.5 95 67 91 0 24.5z"
    />
    <svg:path fill="#fff" d="M88 0v256h80V0zM0 88v80h256V88z" />
    <svg:path fill="#c8102e" d="M0 104v48h256v-48zM104 0v256h48V0z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNzFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}

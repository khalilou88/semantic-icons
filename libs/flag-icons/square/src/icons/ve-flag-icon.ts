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
  selector: 'svg[si-ve-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:g id="ve-d" transform="translate(0 -36)">
        <svg:g id="ve-c">
          <svg:g id="ve-b">
            <svg:path id="ve-a" fill="#fff" d="M0-5-1.5-.2l2.8.9z" />
            <svg:use
              xlink:href="#ve-a"
              width="180"
              height="120"
              transform="scale(-1 1)"
            />
          </svg:g>
          <svg:use
            xlink:href="#ve-b"
            width="180"
            height="120"
            transform="rotate(72)"
          />
        </svg:g>
        <svg:use
          xlink:href="#ve-b"
          width="180"
          height="120"
          transform="rotate(-72)"
        />
        <svg:use
          xlink:href="#ve-c"
          width="180"
          height="120"
          transform="rotate(144)"
        />
      </svg:g>
    </svg:defs>
    <svg:path fill="#cf142b" d="M0 0h512v512H0z" />
    <svg:path fill="#00247d" d="M0 0h512v341.3H0z" />
    <svg:path fill="#fc0" d="M0 0h512v170.7H0z" />
    <svg:g id="ve-f" transform="translate(256.3 358.4)scale(4.265)">
      <svg:g id="ve-e">
        <svg:use
          xlink:href="#ve-d"
          width="180"
          height="120"
          transform="rotate(10)"
        />
        <svg:use
          xlink:href="#ve-d"
          width="180"
          height="120"
          transform="rotate(30)"
        />
      </svg:g>
      <svg:use
        xlink:href="#ve-e"
        width="180"
        height="120"
        transform="rotate(40)"
      />
    </svg:g>
    <svg:use
      xlink:href="#ve-f"
      width="180"
      height="120"
      transform="rotate(-80 256.3 358.4)"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiVeFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}

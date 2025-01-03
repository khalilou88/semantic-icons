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
  selector: 'svg[si-cm-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#007a5e" d="M0 0h213.3v480H0z" />
    <svg:path fill="#ce1126" d="M213.3 0h213.4v480H213.3z" />
    <svg:path fill="#fcd116" d="M426.7 0H640v480H426.7z" />
    <svg:g fill="#fcd116" transform="translate(320 240)scale(7.1111)">
      <svg:g id="cm-b">
        <svg:path id="cm-a" d="M0-8-2.5-.4 1.3.9z" />
        <use
          xlink:href="#cm-a"
          width="100%"
          height="100%"
          transform="scale(-1 1)"
        />
      </svg:g>
      <use
        xlink:href="#cm-b"
        width="100%"
        height="100%"
        transform="rotate(72)"
      />
      <use
        xlink:href="#cm-b"
        width="100%"
        height="100%"
        transform="rotate(144)"
      />
      <use
        xlink:href="#cm-b"
        width="100%"
        height="100%"
        transform="rotate(-144)"
      />
      <use
        xlink:href="#cm-b"
        width="100%"
        height="100%"
        transform="rotate(-72)"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCmFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}
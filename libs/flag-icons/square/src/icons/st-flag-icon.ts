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
  selector: 'svg[si-st-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#12ad2b" d="M0 0h512v512H0z" />
    <svg:path fill="#ffce00" d="M0 146.3h512v219.4H0z" />
    <svg:path fill="#d21034" d="M0 0v512l192-256" />
    <svg:g id="st-c" transform="translate(276.9 261.5)scale(.33167)">
      <svg:g id="st-b">
        <svg:path
          id="st-a"
          fill="#000001"
          d="M0-200V0h100"
          transform="rotate(18 0 -200)"
        />
        <use
          xlink:href="#st-a"
          width="100%"
          height="100%"
          transform="scale(-1 1)"
        />
      </svg:g>
      <use
        xlink:href="#st-b"
        width="100%"
        height="100%"
        transform="rotate(72)"
      />
      <use
        xlink:href="#st-b"
        width="100%"
        height="100%"
        transform="rotate(144)"
      />
      <use
        xlink:href="#st-b"
        width="100%"
        height="100%"
        transform="rotate(-144)"
      />
      <use
        xlink:href="#st-b"
        width="100%"
        height="100%"
        transform="rotate(-72)"
      />
    </svg:g>
    <use
      xlink:href="#st-c"
      width="100%"
      height="100%"
      x="700"
      transform="translate(-550.9)"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiStFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}

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
  selector: 'svg[si-eh-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="eh-a">
        <svg:path fill-opacity=".7" d="M-158.7 0H524v512h-682.7z" />
      </clipPath>
    </defs>
    <svg:g
      fill-rule="evenodd"
      clip-path="url(#eh-a)"
      transform="translate(148.8)scale(.94)"
    >
      <svg:path fill="#000001" d="M-158.3 0h680.9v255.3h-680.9z" />
      <svg:path fill="#007a3d" d="M-158.3 255.3h680.9v255.3h-680.9z" />
      <svg:path fill="#fff" d="M-158.3 148.9h680.9v212.8h-680.9z" />
      <svg:path fill="#c4111b" d="m-158.3 0 340.4 255.3-340.4 255.3Z" />
      <svg:circle cx="352.3" cy="255.3" r="68.1" fill="#c4111b" />
      <svg:circle cx="377.9" cy="255.3" r="68.1" fill="#fff" />
      <svg:path
        fill="#c4111b"
        d="m334 296.5 29.1-20.7 28.8 21-10.8-34 29-20.9-35.7-.2-11-34-11.2 33.9-35.7-.2 28.7 21.2-11.1 34z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiEhFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}

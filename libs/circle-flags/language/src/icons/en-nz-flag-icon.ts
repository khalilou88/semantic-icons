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
  selector: 'svg[si-en-nz-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#0052b4"
        d="M512 0v512H0l16-34-16-34V336l64-80-64-80V68L68 0h108l80 64 80-64h108l34 16z"
      />
      <svg:path
        fill="#eee"
        d="m0 0 8 22-8 23v23l108 108H0v32l32 48-32 48v32h108L0 444v68L512 0l-23 8-22-8h-23L336 108V0h-32l-48 32-48-32h-32v108L68 0H0zm383 169-11 35h-37l30 21-12 35 30-22 30 22-12-35 30-21h-37l-11-35zm61 72-11 35h-37l30 21-11 35 29-21 30 21-12-35 30-21h-37l-11-35zm-123 10-11 35h-37l30 22-11 35 29-22 30 22-11-35 29-22h-36l-12-35zm59 114-11 35h-37l30 21-11 35 29-21 30 21-11-35 29-21h-36l-12-35z"
      />
      <svg:path
        fill="#d80027"
        d="M0 0v45l131 131h45L0 0zm208 0v208H0v96h208l96-96V0h-96zm259 0L336 131v45L512 0h-45zm-84 194-6 17h-18l15 11-6 17 15-10 15 10-6-17 15-11h-18l-6-17zm61 72-6 18h-18l15 11-6 17 15-11 15 11-6-17 15-11h-18l-6-18zm-123 11-5 17h-19l15 11-6 17 15-11 15 11-6-17 15-11h-18l-6-17zm59 113-5 18h-19l15 10-6 18 15-11 15 11-5-18 14-10h-18l-6-18z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEnNzFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '512');
    this.render.setAttribute(svg, 'height', '512');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}

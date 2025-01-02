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
  selector: 'svg[si-sr-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#377e3f" d="M.1 0h640v480H.1z" />
    <svg:path fill="#fff" d="M.1 96h640v288H.1z" />
    <svg:path fill="#b40a2d" d="M.1 144h640v192H.1z" />
    <svg:path
      fill="#ecc81d"
      d="m320 153.2 56.4 173.6-147.7-107.3h182.6L263.6 326.8z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiSrFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}

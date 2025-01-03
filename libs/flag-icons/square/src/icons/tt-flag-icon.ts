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
  selector: 'svg[si-tt-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#fff" d="M0 0h512v512H0z" style="width:0" />
    <svg:g fill-rule="evenodd">
      <svg:path fill="#e00000" d="M371 512 0 1v510.7zM141 0l371 511V.2z" />
      <svg:path fill="#000001" d="M22.2.2h94.9l374.5 511.3h-97.9z" />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiTtFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
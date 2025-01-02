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
  selector: 'svg[si-jm-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <g fill-rule="evenodd">
      <svg:path fill="#000001" d="m0 0 256 256L0 512zm512 0L256 256l256 256z" />
      <svg:path fill="#090" d="m0 0 256 256L512 0zm0 512 256-256 256 256z" />
      <svg:path fill="#fc0" d="M512 0h-47.7L0 464.3V512h47.7L512 47.7z" />
      <svg:path fill="#fc0" d="M0 0v47.7L464.3 512H512v-47.7L47.7 0z" />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiJmFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}

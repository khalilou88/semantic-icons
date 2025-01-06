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
  selector: 'svg[si-print-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M384 368h24a40.12 40.12 0 0040-40V168a40.12 40.12 0 00-40-40H104a40.12 40.12 0 00-40 40v160a40.12 40.12 0 0040 40h24"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:rect
      x="128"
      y="240"
      width="256"
      height="208"
      rx="24.32"
      ry="24.32"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:path
      d="M384 128v-24a40.12 40.12 0 00-40-40H168a40.12 40.12 0 00-40 40v24"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:circle cx="392" cy="184" r="24" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPrintOutlineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}

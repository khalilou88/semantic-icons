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
  selector: 'svg[si-arrow-up-right-box-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M388.364 242.764v178.691A42.547 42.547 0 01345.818 464H90.546A42.544 42.544 0 0148 421.455V166.182a42.543 42.543 0 0142.546-42.546h178.69M464 180.364V48H331.636M216 296L464 48"
      stroke="currentColor"
      stroke-width="32"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiArrowUpRightBoxOutlineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}

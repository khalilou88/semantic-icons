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
  selector: 'svg[si-gg-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#fff" d="M0 0h640v480H0z" />
    <svg:path fill="#e8112d" d="M256 0h128v480H256z" />
    <svg:path fill="#e8112d" d="M0 176h640v128H0z" />
    <svg:path
      id="gg-a"
      fill="#f9dd16"
      d="m110 286.7 23.3-23.4h210v-46.6h-210L110 193.3z"
    />
    <use
      xlink:href="#gg-a"
      width="36"
      height="24"
      transform="rotate(90 320 240)"
    />
    <use
      xlink:href="#gg-a"
      width="36"
      height="24"
      transform="rotate(-90 320 240)"
    />
    <use
      xlink:href="#gg-a"
      width="36"
      height="24"
      transform="rotate(180 320 240)"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiGgFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}

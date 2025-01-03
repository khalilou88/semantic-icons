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
  selector: 'svg[si-bj-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="bj-a">
        <svg:path fill="gray" d="M67.6-154h666v666h-666z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g clip-path="url(#bj-a)" transform="matrix(.961 0 0 .7207 -65 111)">
      <svg:g fill-rule="evenodd" stroke-width="1pt">
        <svg:path fill="#319400" d="M0-154h333v666H0z" />
        <svg:path fill="#ffd600" d="M333-154h666v333H333z" />
        <svg:path fill="#de2110" d="M333 179h666v333H333z" />
      </svg:g>
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBjFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}

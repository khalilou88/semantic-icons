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
  selector: 'svg[si-us-az-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#d80027"
        d="M71 0 0 34v91l16 35-16 36v60l256 64 256-64v-60l-16-36 16-35V34L441 0h-85l-32 16-32-16h-72l-32 16-32-16Z"
      />
      <svg:path fill="#0052b4" d="M0 256h512v256H0Z" />
      <svg:path
        fill="#ffda44"
        d="m292 0-36 256L356 0h-64zm-36 256L512 34V0h-71L256 256zm0 0 256-60v-71L256 256zm0 0L0 125v71l256 60zm0 0L71 0H0v35l256 221zm0 0L220 0h-64l100 256z"
      />
      <svg:path fill="#ff9811" d="m256 128 83 256-217-159h268L173 384Z" />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiUsAzFlagIcon implements OnInit {
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

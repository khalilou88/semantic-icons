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
  selector: 'svg[si-kn-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#ffda44"
        d="m0 401.9 173.6-225.3L401.9 0H449l63 63-.1 47.3-167.3 223.5L110.3 512H63L0 449z"
      />
      <svg:path fill="#6da544" d="M0 0v401.9L401.9 0z" />
      <svg:path fill="#d80027" d="M512 512V110.3L110.3 512z" />
      <svg:path fill="#333" d="M0 512h63L512 63V0h-63L0 449z" />
      <svg:path
        fill="#eee"
        d="m162.8 302 24 12.2 19-19-4.4 26.5 24 12.2-26.6 4.2-4.2 26.5-12-24L156 345l19-19zM302 162.8l24 12.1 19-19-4.3 26.6 24 12.1-26.6 4.2-4.2 26.5-12.2-23.9-26.5 4.2 19-19z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKnFlagIcon implements OnInit {
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

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
  selector: 'svg[si-cf-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="cf-a">
        <svg:path fill-opacity=".7" d="M0 0h512v512H0z" />
      </clipPath>
    </defs>
    <svg:g fill-rule="evenodd" clip-path="url(#cf-a)">
      <svg:path fill="#00f" d="M-52-.5h768v127H-52z" />
      <svg:path fill="#ff0" d="M-52 383.5h768V512H-52z" />
      <svg:path fill="#009a00" d="M-52 255h768v128.5H-52z" />
      <svg:path fill="#fff" d="M-52 126.5h768V255H-52z" />
      <svg:path fill="red" d="M268 0h128v512H268z" />
      <svg:path
        fill="#ff0"
        d="M109.5 112.3 75.9 89.1l-33.4 23.4 11.6-39.2-32.5-24.6 40.7-1L75.7 8.8l13.5 38.6 40.8.8L97.6 73"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCfFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}

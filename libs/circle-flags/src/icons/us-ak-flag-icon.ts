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
  selector: 'svg[si-us-ak-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#0052b4" d="M0 0h512v512H0z" />
      <svg:path
        fill="#ffda44"
        d="m336.8 199.7 104-75.1h-128l104 75.1-40-122.1zM57 231.7l52-37.4H45l52 37.4-20-60.9zm85.5 31.7 52-37.4h-64l52 37.4-20-60.9zM185 309l52-37.4h-64l52 37.4-20-60.9zm43 47.6 52-37.4h-64l52 37.4-20-60.9zm-5.6 67.1 52-37.4h-64l52 37.4-20-60.9zM356 402.2l52-37.4h-64l52 37.4-20-60.9zm-37.4 53.2 52-37.4h-64l52 37.4-20-60.9z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiUsAkFlagIcon implements OnInit {
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
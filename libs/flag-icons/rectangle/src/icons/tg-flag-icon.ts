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
  selector: 'svg[si-tg-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="tg-a">
        <svg:path fill-opacity=".7" d="M0 0h682.7v512H0z" />
      </clipPath>
    </defs>
    <svg:g fill-rule="evenodd" clip-path="url(#tg-a)" transform="scale(.9375)">
      <svg:path fill="#ffe300" d="M0 0h767.6v512H0z" />
      <svg:path fill="#118600" d="M0 208.1h767.6V311H0zM0 .2h767.6v102.9H0z" />
      <svg:path fill="#d80000" d="M0 .3h306.5v310.6H0z" />
      <svg:path
        fill="#fff"
        d="M134.4 128.4c0-.8 18.9-53 18.9-53l17 52.2s57.4 1.7 57.4.8-45.3 34.3-45.3 34.3 21.4 60 20.5 58.2c-.8-1.7-49.6-36-49.6-36s-49.7 34.3-48.8 34.3c.8 0 18.8-56.5 18.8-56.5l-44.5-33.4z"
      />
      <svg:path fill="#118600" d="M0 409.2h767.6V512H0z" />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiTgFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}

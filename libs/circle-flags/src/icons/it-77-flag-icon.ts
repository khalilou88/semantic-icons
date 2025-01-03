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
  selector: 'svg[si-it-77-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:mask
        id="a"
        width="512"
        height="512"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <svg:circle cx="256" cy="256" r="256" fill="#fff" />
      </svg:mask>
    </svg:defs>
    <svg:g mask="url(#a)">
      <svg:path fill="#0052b4" d="M0 0h512v512H0V0Z" />
      <svg:path
        fill="#eee"
        d="M144 152v141c0 85.6 112 111.4 112 111.4S368 378.7 368 293V152H144Z"
      />
      <svg:path
        fill="#0052b4"
        d="M330.7 224c-10.5 0-16-3.3-20.8-6.2-4.5-2.7-8.3-5-16.6-5s-12 2.3-16.6 5c-4.8 3-10.3 6.2-20.7 6.2s-15.9-3.3-20.7-6.2c-4.5-2.7-8.4-5-16.6-5s-12.1 2.3-16.6 5c-4.9 3-10.3 6.2-20.8 6.2a35.5 35.5 0 0 1-20.7-6.2c-4.5-2.7-8.4-5-16.6-5l-8-4 8-4c10.4 0 15.9 3.3 20.7 6.2 4.5 2.7 8.4 5 16.6 5s12.1-2.3 16.6-5c4.9-3 10.3-6.2 20.8-6.2 10.4 0 15.9 3.3 20.7 6.2 4.5 2.7 8.4 5 16.6 5s12.1-2.3 16.6-5c4.8-3 10.3-6.2 20.7-6.2 10.5 0 16 3.3 20.8 6.2 4.5 2.7 8.3 5 16.6 5s12-2.3 16.6-5c4.8-3 10.3-6.2 20.7-6.2l8 4-8 4c-8.2 0-12.1 2.3-16.6 5-4.8 3-10.3 6.2-20.7 6.2Zm0 24c-10.5 0-16-3.3-20.8-6.2-4.5-2.7-8.3-5-16.6-5s-12 2.3-16.6 5c-4.8 3-10.3 6.2-20.7 6.2s-15.9-3.3-20.7-6.2c-4.5-2.7-8.4-5-16.6-5s-12.1 2.3-16.6 5c-4.9 3-10.3 6.2-20.8 6.2a35.5 35.5 0 0 1-20.7-6.2c-4.5-2.7-8.4-5-16.6-5l-8-4 8-4c10.4 0 15.9 3.3 20.7 6.2 4.5 2.7 8.4 5 16.6 5s12.1-2.3 16.6-5c4.9-3 10.3-6.2 20.8-6.2 10.4 0 15.9 3.3 20.7 6.2 4.5 2.7 8.4 5 16.6 5s12.1-2.3 16.6-5c4.8-3 10.3-6.2 20.7-6.2 10.5 0 16 3.3 20.8 6.2 4.5 2.7 8.3 5 16.6 5s12-2.3 16.6-5c4.8-3 10.3-6.2 20.7-6.2l8 4-8 4c-8.2 0-12.1 2.3-16.6 5-4.8 3-10.3 6.2-20.7 6.2Zm0 24c-10.5 0-16-3.3-20.8-6.2-4.5-2.7-8.3-5-16.6-5s-12 2.3-16.6 5c-4.8 3-10.3 6.2-20.7 6.2s-15.9-3.3-20.7-6.2c-4.5-2.7-8.4-5-16.6-5s-12.1 2.3-16.6 5c-4.9 3-10.3 6.2-20.8 6.2a35.5 35.5 0 0 1-20.7-6.2c-4.5-2.7-8.4-5-16.6-5l-8-4 8-4c10.4 0 15.9 3.3 20.7 6.2 4.5 2.7 8.4 5 16.6 5s12.1-2.3 16.6-5c4.9-3 10.3-6.2 20.8-6.2 10.4 0 15.9 3.3 20.7 6.2 4.5 2.7 8.4 5 16.6 5s12.1-2.3 16.6-5c4.8-3 10.3-6.2 20.7-6.2 10.5 0 16 3.3 20.8 6.2 4.5 2.7 8.3 5 16.6 5s12-2.3 16.6-5c4.8-3 10.3-6.2 20.7-6.2l8 4-8 4c-8.2 0-12.1 2.3-16.6 5-4.8 3-10.3 6.2-20.7 6.2Zm0 24c-10.5 0-16-3.3-20.8-6.2-4.5-2.7-8.3-5-16.6-5s-12 2.3-16.6 5c-4.8 3-10.3 6.2-20.7 6.2s-15.9-3.3-20.7-6.2c-4.5-2.7-8.4-5-16.6-5s-12.1 2.3-16.6 5c-4.9 3-10.3 6.2-20.8 6.2a35.5 35.5 0 0 1-20.7-6.2c-4.5-2.7-8.4-5-16.6-5l-8-4 8-4c10.4 0 15.9 3.3 20.7 6.2 4.5 2.7 8.4 5 16.6 5s12.1-2.3 16.6-5c4.9-3 10.3-6.2 20.8-6.2 10.4 0 15.9 3.3 20.7 6.2 4.5 2.7 8.4 5 16.6 5s12.1-2.3 16.6-5c4.8-3 10.3-6.2 20.7-6.2 10.5 0 16 3.3 20.8 6.2 4.5 2.7 8.3 5 16.6 5s12-2.3 16.6-5c4.8-3 10.3-6.2 20.7-6.2l8 4-8 4c-8.2 0-12.1 2.3-16.6 5-4.8 3-10.3 6.2-20.7 6.2Z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiIt77FlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '512');
    this.render.setAttribute(svg, 'height', '512');
  }
}

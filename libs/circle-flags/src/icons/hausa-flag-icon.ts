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
  selector: 'svg[si-hausa-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#eee" d="M0 0h512v512H0z" />
      <svg:path
        fill="#6da544"
        d="m218 154 38-84 38 84-140 140-84-38 84-38 140 140-38 84-38-84 140-140 84 38-84 38z"
      />
      <svg:path
        fill="#333"
        d="M244.5 29.5c0 40.5-11.2 78.5-30.7 110.8l-49-49a45.1 45.1 0 0 0-63.7 0l-9.9 9.8a45.1 45.1 0 0 0 0 63.7l49.1 49a214.2 214.2 0 0 1-110.8 30.7v23c40.5 0 78.5 11.2 110.8 30.7l-49 49a45.1 45.1 0 0 0 0 63.7l9.8 9.9a45.1 45.1 0 0 0 63.7 0l49-49.1a214.2 214.2 0 0 1 30.7 110.8h23c0-40.5 11.2-78.5 30.7-110.8l49 49a45.1 45.1 0 0 0 63.7 0l9.9-9.8a45.1 45.1 0 0 0 0-63.7l-49.1-49a214.2 214.2 0 0 1 110.8-30.7v-23c-40.5 0-78.5-11.2-110.8-30.7l49-49a45.1 45.1 0 0 0 0-63.7l-9.8-9.9a45.1 45.1 0 0 0-63.7 0l-49 49.1a214.2 214.2 0 0 1-30.7-110.8h-23zM256 92.2a233.8 233.8 0 0 0 27.7 62.6L256 182.5l-27.7-27.7A233.8 233.8 0 0 0 256 92.2zM133 98a25 25 0 0 1 17.6 7.4l52 51.8a215.9 215.9 0 0 1-45.4 45.3l-51.8-51.9a24.7 24.7 0 0 1 0-35.3l9.9-10A25 25 0 0 1 133 98zm246 0c6.4 0 12.8 2.4 17.7 7.4l10 9.9a24.7 24.7 0 0 1 0 35.3l-52 52a215.9 215.9 0 0 1-45.2-45.3l51.9-52A25 25 0 0 1 379 98zm-162.3 73.5 25.2 25.1-45.3 45.3-25.2-25.2a236.7 236.7 0 0 0 45.3-45.3zm78.6 0a236.7 236.7 0 0 0 45.2 45.2l-25.1 25.2-45.3-45.3 25.2-25.1zM256 210.6l45.3 45.3-45.3 45.3-45.3-45.3 45.3-45.3zm-101.2 17.6 27.7 27.7-27.7 27.7A233.8 233.8 0 0 0 92.2 256a233.8 233.8 0 0 0 62.6-27.7zm202.4 0a233.8 233.8 0 0 0 62.6 27.7 233.8 233.8 0 0 0-62.6 27.7L329.5 256l27.7-27.7zM196.6 270l45.3 45.3-25.2 25.1a236.7 236.7 0 0 0-45.3-45.2l25.2-25.2zm118.8 0 25.1 25.2a236.7 236.7 0 0 0-45.2 45.3l-25.2-25.2 45.3-45.3zm-158.1 39.4a215.9 215.9 0 0 1 45.2 45.3l-51.9 51.8a24.7 24.7 0 0 1-35.3 0l-10-9.9a24.7 24.7 0 0 1 0-35.3l52-51.9zm197.4 0 52 51.9a24.7 24.7 0 0 1 0 35.3l-10 10a24.7 24.7 0 0 1-35.3 0l-52-52a215.9 215.9 0 0 1 45.4-45.2zm-98.7 20 27.7 27.7a233.8 233.8 0 0 0-27.7 62.6 233.8 233.8 0 0 0-27.7-62.6l27.7-27.7z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHausaFlagIcon implements OnInit {
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

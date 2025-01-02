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
  selector: 'svg[si-km-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <mask id="a"><svg:circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#a)">
      <svg:path fill="#ffda44" d="M124.4 149.7 512 132.8V0H0z" />
      <svg:path fill="#eee" d="M112.5 132.8H512v122.4l-294.2 16.6z" />
      <svg:path fill="#d80027" d="M512 255.3H234.5l-136 139.8L512 377.7V256z" />
      <svg:path fill="#0052b4" d="M108.2 377.7 0 511.2l512 .8V377.7z" />
      <svg:path fill="#6da544" d="M.8 0 0 511.2l256-256z" />
      <g fill="#eee">
        <svg:path
          d="M67.5 255.3a78 78 0 0 1 61.2-76 78.2 78.2 0 0 0-16.7-2 78 78 0 1 0 16.7 154 78 78 0 0 1-61.2-76z"
        />
        <svg:path
          d="m127.9 188.5 4.1 12.7h13.4l-10.8 8 4.1 12.7-10.8-8-10.9 8 4.2-12.8-10.9-7.9h13.4zm0 33.4 4.1 12.7h13.4l-10.8 8 4.1 12.7-10.8-8-10.9 8 4.2-12.8-10.9-7.9h13.4zm0 33.4L132 268h13.4l-10.8 8 4.1 12.6-10.8-7.8-10.9 7.8 4.2-12.7-10.9-7.9h13.4zm0 33.3 4.1 12.8h13.4l-10.8 8 4.1 12.6-10.8-7.8L117 322l4.2-12.7-10.9-7.9h13.4z"
        />
      </g>
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiKmFlagIcon implements OnInit {
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

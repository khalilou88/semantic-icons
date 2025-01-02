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
  selector: 'svg[si-mn-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <mask id="a"><svg:circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#a)">
      <svg:path
        fill="#a2001d"
        d="M0 0h167l84.9 45L345 0h167v512H345l-87.7-48.1L167 512H0z"
      />
      <svg:path fill="#0052b4" d="M167 0h178v512H167z" />
      <g fill="#ffda44">
        <svg:path d="M122.4 256h22.3v89h-22.3zm-89 0h22.3v89H33.4z" />
        <svg:circle cx="89" cy="289.4" r="22.3" />
        <svg:circle cx="89" cy="211.5" r="11.1" />
        <svg:path
          d="M66.8 322.8h44.5V345H66.8zm0-89h44.5V256H66.8zM89 133.5l8 24.2h25.4l-20.6 15 7.9 24.3L89 182l-20.6 15 7.9-24.3-20.6-15h25.5z"
        />
      </g>
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiMnFlagIcon implements OnInit {
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

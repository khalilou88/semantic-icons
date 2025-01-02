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
  selector: 'svg[si-ad-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <mask id="a"><svg:circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#a)">
      <svg:path fill="#0052b4" d="M0 0h144.7l36 254.6-36 257.4H0z" />
      <svg:path fill="#d80027" d="M367.3 0H512v512H367.3l-29.7-257.3z" />
      <svg:path fill="#ffda44" d="M144.7 0h222.6v512H144.7z" />
      <svg:path
        fill="#d80027"
        d="M256 354.5V256h66.8v47.3zm-66.8-165.3H256V256h-66.8z"
      />
      <svg:path
        fill="#ff9811"
        d="M289.4 167a22.3 22.3 0 0 0-33.4-19.3 22.1 22.1 0 0 0-11.1-3c-12.3 0-22.3 10-22.3 22.3H167v111.3c0 41.4 32.9 65.4 58.7 77.8a22.1 22.1 0 0 0-3 11.2 22.3 22.3 0 0 0 33.3 19.3 22.1 22.1 0 0 0 11.1 3 22.3 22.3 0 0 0 19.2-33.5c25.8-12.4 58.7-36.4 58.7-77.8V167zm22.3 111.3c0 5.8 0 23.4-27.5 40.9a136.5 136.5 0 0 1-28.2 13.3c-7-2.4-17.8-6.7-28.2-13.3-27.5-17.5-27.5-35.1-27.5-41v-77.9h111.4z"
      />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiAdFlagIcon implements OnInit {
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

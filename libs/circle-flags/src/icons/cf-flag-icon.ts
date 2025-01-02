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
    <mask id="a"><svg:circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#a)">
      <svg:path
        fill="#ffda44"
        d="m0 378.4 252.9-28.8L512 378.4V512H322.8L256 481l-66.8 31H0z"
      />
      <svg:path fill="#6da544" d="m0 256 249.8-28L512 256v122.4H0z" />
      <svg:path fill="#eee" d="m0 133.6 255.3-28.3L512 133.6V256H0z" />
      <svg:path fill="#0052b4" d="M0 0h189.2L256 30l66.8-30H512v133.6H0z" />
      <svg:path
        fill="#ffda44"
        d="m137.7 55.7 6.9 21.2H167L148.9 90l6.9 21.3-18.1-13.1-18 13.1 6.8-21.3-18-13h22.3z"
      />
      <svg:path fill="#d80027" d="M189.2 0h133.6v512H189.2z" />
    </g>
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
    this.render.setAttribute(svg, 'width', '512');
    this.render.setAttribute(svg, 'height', '512');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}

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
  selector: 'svg[si-et-si-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#496e2d" d="M0 0h512v149H0Z" />
      <svg:path fill="#eee" d="M0 149h512v32H0z" />
      <svg:path fill="#d80027" d="M0 363h512v149H0Z" />
      <svg:path fill="#eee" d="M0 331h512v32H0z" />
      <svg:path fill="#0052b4" d="M0 181h512v150H0Z" />
      <svg:path
        fill="#eee"
        d="m312 317 104-75H288l104 75-40-122zm-203-32 49-36H98l49 36-19-58zm64 32 49-36h-60l49 36-19-58Zm0-64 49-36h-60l49 36-19-58Z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiEtSiFlagIcon implements OnInit {
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

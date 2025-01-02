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
  selector: 'svg[si-us-nc-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <mask id="a"><svg:circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#a)">
      <svg:path fill="#0052b4" d="M0 0h232l64 256-64 256H0Z" />
      <svg:path fill="#d80027" d="M232 0h280v256l-140 64-140-64Z" />
      <svg:path fill="#eee" d="M232 256h280v256H232Z" />
      <svg:path fill="#0052b4" d="M0 0h232v512H0z" />
      <svg:path fill="#eee" d="m91 294 65-47H76l65 47-25-76z" />
      <svg:path
        fill="#ffda44"
        d="M24 224h40v64H24zm144 0h40v64h-40zM64 92v16H24v32h40v-16h104v16h40v-32h-40V92H64zm0 328v-16H24v-32h40v16h104v-16h40v32h-40v16z"
      />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiUsNcFlagIcon implements OnInit {
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

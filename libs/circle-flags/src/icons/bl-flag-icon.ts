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
  selector: 'svg[si-bl-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#eee" d="M0 0h512v512H0z" />
      <svg:path
        fill="#acabb1"
        d="M167 178a28 28 0 0 0-28 28H55a28 28 0 0 0 28 28 28 28 0 0 0 28 28 28 28 0 0 0 28 28h234a28 28 0 0 0 28-28 28 28 0 0 0 28-28 28 28 0 0 0 28-28h-84a28 28 0 0 0-28-28z"
      />
      <svg:path
        fill="#ffda44"
        d="M123 357h44v44h-44zm222 0h44v44h-44zm-178 11h178v44H167zm67-268v33.5L223 145l-12-6v-17h-44v56l89 14 89-14v-56h-44v17l-12 6-11-11.5V100z"
      />
      <svg:path
        fill="#0052b4"
        d="M167 178v112c0 68 89 88.5 89 88.5s89-20.4 89-88.5V178z"
      />
      <svg:path fill="#d80027" d="M167 222.1h178v69H167z" />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBlFlagIcon implements OnInit {
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
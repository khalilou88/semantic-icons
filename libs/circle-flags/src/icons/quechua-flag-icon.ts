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
  selector: 'svg[si-quechua-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <mask id="a"><svg:circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#a)">
      <svg:path fill="#4a1f63" d="M0 512h512v-70l-256-32L0 442Z" />
      <svg:path fill="#0052b4" d="M0 442h512v-70l-256-32L0 372Z" />
      <svg:path fill="#d80027" d="M0 0h512v70l-256 32L0 70Z" />
      <svg:path fill="#ffda44" d="M0 70h512v70l-256 32L0 140Z" />
      <svg:path
        fill="#eee"
        d="M0 140h512v70l-32 46 32 46v70H0v-70l32-46-32-46Z"
      />
      <svg:path fill="#496e2d" d="M0 210h512v92H0z" />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiQuechuaFlagIcon implements OnInit {
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

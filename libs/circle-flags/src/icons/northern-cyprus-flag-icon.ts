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
  selector: 'svg[si-northern-cyprus-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#eee"
        d="M0 0v48l32 24L0 96v320l32 24-32 24v48h512v-48l-32-24 32-24V96l-32-24 32-24V0Z"
      />
      <svg:path
        fill="#d80027"
        d="M0 464h512v-48H0ZM0 48v48h512V48Zm270 255v-94l55 76-89-29 89-29z"
      />
      <svg:path
        fill="#d80027"
        d="M185 167a89 89 0 1 0 62 153 72 72 0 0 1-34 8 72 72 0 1 1 34-136 89 89 0 0 0-62-25Z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNorthernCyprusFlagIcon implements OnInit {
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

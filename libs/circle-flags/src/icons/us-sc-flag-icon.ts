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
  selector: 'svg[si-us-sc-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#0052b4" d="M0 0h512v512H0Z" />
      <svg:circle cx="118" cy="118" r="54" fill="#eee" />
      <svg:circle cx="104.5" cy="104.5" r="38.5" fill="#0052b4" />
      <svg:path fill="#eee" d="m238 439 12-221h24l12 221z" />
      <svg:path
        fill="#eee"
        d="M292 220c26-11 36-19 76-18-34-15-65-20-91 0 8-20 15-40 42-59-46 8-61 24-65 51-11-27-38-29-76-29 42 23 33 20 54 44-27-4-58 8-88 42 41-22 61-15 88-11a76 76 0 0 0-35 72c30-38 26-27 65-61 15 34 34 42 41 73 8-31 0-65-15-77 30 12 57 20 72 42-7-53-42-60-68-69z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiUsScFlagIcon implements OnInit {
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
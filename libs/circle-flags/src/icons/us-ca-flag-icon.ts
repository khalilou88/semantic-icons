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
  selector: 'svg[si-us-ca-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#eee" d="M0 0h512v416l-256 32L0 416Z" />
      <svg:path fill="#6da544" d="m396 280-132-10-140 14-8 12h299z" />
      <svg:path
        fill="#584528"
        d="m389 273-19-77-55-31-95-4-75 27-16 35 11 19 26 1 10-11 24-4-12 31-19 25 17 2 19-12 26-24 22 11-13 17 26-2 9-16-4-19 21 4 1 23-14 8 1 6h26l34-30 27 16-6 8 1 5h17l10-7zM84 340h178v32H84Z"
      />
      <svg:path fill="#d80027" d="M0 416h512v96H0Z" />
      <svg:path fill="#584528" d="M288 340h140v32H288Z" />
      <svg:path fill="#d80027" d="m71 182 69-50H55l69 50-26-81z" />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiUsCaFlagIcon implements OnInit {
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

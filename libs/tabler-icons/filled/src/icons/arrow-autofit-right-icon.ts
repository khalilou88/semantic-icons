import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-arrow-autofit-right-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M3 14a1 1 0 0 0 1 1h11.001v-.092a3 3 0 0 1 5.12 -2.03a.515 .515 0 0 0 .879 -.363v-6.515a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3z"
    />
    <svg:path
      d="M3 18a1 1 0 0 0 1 1h14.584l-1.291 1.293a1 1 0 0 0 -.083 1.32l.083 .094a1 1 0 0 0 1.414 0l3 -3q .054 -.053 .097 -.112l.071 -.11l.054 -.114l.035 -.105l.03 -.149l.006 -.117l-.003 -.075l-.017 -.126l-.03 -.111l-.044 -.111l-.052 -.098l-.067 -.096l-.08 -.09l-3 -3a1 1 0 0 0 -1.414 1.414l1.293 1.293h-14.586a1 1 0 0 0 -1 1"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiArrowAutofitRightIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', this.width().toString());
    this.render.setAttribute(svg, 'height', this.height().toString());
    this.render.setAttribute(svg, 'viewBox', this.viewBox());
    this.render.setAttribute(svg, 'fill', this.fill());
  }
}

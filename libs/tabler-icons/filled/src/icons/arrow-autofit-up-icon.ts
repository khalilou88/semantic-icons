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
  selector: 'svg[si-arrow-autofit-up-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M14 21a1 1 0 0 0 1 -1v-11.001h-.092a3 3 0 0 1 -2.03 -5.12a.515 .515 0 0 0 -.363 -.879h-6.515a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3z"
    />
    <svg:path
      d="M18 21a1 1 0 0 0 1 -1v-14.584l1.293 1.291a1 1 0 0 0 1.32 .083l.094 -.083a1 1 0 0 0 0 -1.414l-3 -3a1 1 0 0 0 -.112 -.097l-.11 -.071l-.114 -.054l-.105 -.035l-.149 -.03l-.117 -.006l-.075 .003l-.126 .017l-.111 .03l-.111 .044l-.098 .052l-.096 .067l-.09 .08l-3 3a1 1 0 1 0 1.414 1.414l1.293 -1.293v14.586a1 1 0 0 0 1 1"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiArrowAutofitUpIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}

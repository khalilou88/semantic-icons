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
  selector: 'svg[si-soup-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M20 10a2 2 0 0 1 2 2v.5c0 1.694 -2.247 5.49 -3.983 6.983l-.017 .013v.504a2 2 0 0 1 -1.85 1.995l-.15 .005h-8a2 2 0 0 1 -2 -2v-.496l-.065 -.053c-1.76 -1.496 -3.794 -4.965 -3.928 -6.77l-.007 -.181v-.5a2 2 0 0 1 2 -2z"
    />
    <svg:path
      d="M11.417 3.188a1 1 0 1 1 1.166 1.624c-.375 .27 -.593 .706 -.583 1.209a1.4 1.4 0 0 0 .583 1.167a1 1 0 1 1 -1.166 1.624a3.38 3.38 0 0 1 -1.417 -2.791a3.4 3.4 0 0 1 1.417 -2.833"
    />
    <svg:path
      d="M15.417 3.188a1 1 0 1 1 1.166 1.624c-.375 .27 -.593 .706 -.583 1.209a1.4 1.4 0 0 0 .583 1.167a1 1 0 1 1 -1.166 1.624a3.38 3.38 0 0 1 -1.417 -2.791a3.4 3.4 0 0 1 1.417 -2.833"
    />
    <svg:path
      d="M7.417 3.188a1 1 0 1 1 1.166 1.624c-.375 .27 -.593 .706 -.583 1.209a1.4 1.4 0 0 0 .583 1.167a1 1 0 1 1 -1.166 1.624a3.38 3.38 0 0 1 -1.417 -2.791a3.4 3.4 0 0 1 1.417 -2.833"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSoupIcon implements OnInit {
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

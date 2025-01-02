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
  selector: 'svg[si-ss-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#078930" d="M0 358.4h512V512H0z" />
    <svg:path fill="#fff" d="M0 153.6h512v204.8H0z" />
    <svg:path fill="#000001" d="M0 0h512v153.6H0z" />
    <svg:path fill="#da121a" d="M0 179.2h512v153.6H0z" />
    <svg:path fill="#0f47af" d="m0 0 433 256L0 512z" />
    <svg:path
      fill="#fcdd09"
      d="M209 207.8 64.4 256l144.8 48.1-89.5-126v155.8z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiSsFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}

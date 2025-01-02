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
    <svg:path fill="#078930" d="M0 336h640v144H0z" />
    <svg:path fill="#fff" d="M0 144h640v192H0z" />
    <svg:path fill="#000001" d="M0 0h640v144H0z" />
    <svg:path fill="#da121a" d="M0 168h640v144H0z" />
    <svg:path fill="#0f47af" d="m0 0 415.7 240L0 480z" />
    <svg:path
      fill="#fcdd09"
      d="M200.7 194.8 61.7 240l139 45.1L114.9 167v146z"
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
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}

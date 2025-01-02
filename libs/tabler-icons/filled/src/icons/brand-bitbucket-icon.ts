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
  selector: 'svg[si-brand-bitbucket-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M3.661 3l16.68 .007c.484 -.005 .946 .203 1.262 .57c.316 .368 .454 .856 .364 1.396l-3.338 14.651a1.64 1.64 0 0 1 -1.629 1.376h-10.01c-.906 -.009 -1.678 -.668 -1.82 -1.517l-3.148 -14.576a1.64 1.64 0 0 1 1.639 -1.907m11.339 5h-6a1 1 0 0 0 -.986 1.164l1 6a1 1 0 0 0 .986 .836h4a1 1 0 0 0 .986 -.836l1 -6a1 1 0 0 0 -.986 -1.164"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBrandBitbucketIcon implements OnInit {
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

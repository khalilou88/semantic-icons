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
  selector: 'svg[si-typo3-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>TYPO3</title>
    <svg:path
      d="M18.08 16.539c-.356.105-.64.144-1.012.144-3.048 0-7.524-10.652-7.524-14.197 0-1.305.31-1.74.745-2.114C6.56.808 2.082 2.177.651 3.917c-.31.436-.497 1.12-.497 1.99C.154 11.442 6.06 24 10.228 24c1.928 0 5.178-3.168 7.852-7.46M16.134 0c3.855 0 7.713.622 7.713 2.798 0 4.415-2.8 9.765-4.23 9.765-2.549 0-5.72-7.09-5.72-10.635C13.897.31 14.518 0 16.134 0"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiTypo3Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
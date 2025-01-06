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
  selector: 'svg[si-subway-wifi-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13 3V12H21V18C21 19.1046 20.1046 20 19 20H17.2L19 21.5V22H5V21.5L6.8 20H5C3.89543 20 3 19.1046 3 18V7C3 4.79086 4.79086 3 7 3H13ZM7.5 15C6.67157 15 6 15.6716 6 16.5C6 17.3284 6.67157 18 7.5 18C8.32843 18 9 17.3284 9 16.5C9 15.6716 8.32843 15 7.5 15ZM16.5 15C15.6716 15 15 15.6716 15 16.5C15 17.3284 15.6716 18 16.5 18C17.3284 18 18 17.3284 18 16.5C18 15.6716 17.3284 15 16.5 15ZM11 5H7C5.94564 5 5.08183 5.81588 5.00549 6.85074L5 7V12H11V5ZM18.5 1C20.9853 1 23 3.01472 23 5.5C23 7.98528 20.9853 10 18.5 10C16.0147 10 14 7.98528 14 5.5C14 3.01472 16.0147 1 18.5 1ZM18.4998 6.16667C18.0089 6.16667 17.5593 6.34354 17.2113 6.63704L17.0856 6.75245L18.4998 8.16667L19.9131 6.7515C19.5512 6.39013 19.0516 6.16667 18.4998 6.16667ZM18.4998 3.5C17.2966 3.5 16.1998 3.95536 15.3722 4.70316L15.199 4.86781L16.1428 5.80964C16.746 5.20643 17.5794 4.83333 18.4998 4.83333C19.3436 4.83333 20.1141 5.14684 20.7013 5.66372L20.8569 5.80964L21.7997 4.86684C20.9552 4.02233 19.7885 3.5 18.4998 3.5Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSubwayWifiFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}

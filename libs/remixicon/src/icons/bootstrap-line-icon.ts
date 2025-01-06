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
  selector: 'svg[si-bootstrap-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M1 11L1 13C1 13 3 13 3 17V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V17C21 13 23 13 23 13V11C23 11 21 11 21 7V6C21 4.34315 19.6569 3 18 3L6 3C4.34315 3 3 4.34315 3 6V7C3 11 1 11 1 11ZM20.6742 12C20.6446 12.0278 20.6151 12.0564 20.5858 12.0858C19.5784 13.0931 19 14.6917 19 17V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V17C5 14.6917 4.42157 13.0931 3.41421 12.0858C3.38486 12.0564 3.35539 12.0278 3.32582 12C3.35539 11.9722 3.38486 11.9436 3.41421 11.9142C4.42157 10.9069 5 9.30829 5 7V6C5 5.44772 5.44772 5 6 5L18 5C18.5523 5 19 5.44772 19 6V7C19 9.30829 19.5784 10.9069 20.5858 11.9142C20.6151 11.9436 20.6446 11.9722 20.6742 12ZM8.5 7V17H13.5C15.1569 17 16.5 15.6569 16.5 14C16.5 12.9377 15.9479 12.0044 15.115 11.4714C15.3601 11.0366 15.5 10.5347 15.5 10C15.5 8.34315 14.1569 7 12.5 7L8.5 7ZM10.5 11V9H12.5C13.0523 9 13.5 9.44772 13.5 10C13.5 10.5523 13.0523 11 12.5 11H10.5ZM10.5 13H13.5C14.0523 13 14.5 13.4477 14.5 14C14.5 14.5523 14.0523 15 13.5 15H10.5V13Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBootstrapLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}

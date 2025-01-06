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
  selector: 'svg[si-mouse-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.1411 4C9.5587 4 8.75361 4.16876 8.01266 4.56502C7.38342 4.90155 6.90155 5.38342 6.56502 6.01266C6.16876 6.75361 6 7.5587 6 9.14111V14.8589C6 16.4413 6.16876 17.2464 6.56502 17.9873C6.90155 18.6166 7.38342 19.0985 8.01266 19.435C8.75361 19.8312 9.5587 20 11.1411 20H12.8589C14.4413 20 15.2464 19.8312 15.9873 19.435C16.6166 19.0985 17.0985 18.6166 17.435 17.9873C17.8312 17.2464 18 16.4413 18 14.8589V9.14111C18 7.5587 17.8312 6.75361 17.435 6.01266C17.0985 5.38342 16.6166 4.90155 15.9873 4.56502C15.2464 4.16876 14.4413 4 12.8589 4H11.1411ZM11.1411 2H12.8589C14.8728 2 15.9528 2.27848 16.9305 2.8014C17.9083 3.32432 18.6757 4.09169 19.1986 5.06946C19.7215 6.04724 20 7.12721 20 9.14111V14.8589C20 16.8728 19.7215 17.9528 19.1986 18.9305C18.6757 19.9083 17.9083 20.6757 16.9305 21.1986C15.9528 21.7215 14.8728 22 12.8589 22H11.1411C9.12721 22 8.04724 21.7215 7.06946 21.1986C6.09169 20.6757 5.32432 19.9083 4.8014 18.9305C4.27848 17.9528 4 16.8728 4 14.8589V9.14111C4 7.12721 4.27848 6.04724 4.8014 5.06946C5.32432 4.09169 6.09169 3.32432 7.06946 2.8014C8.04724 2.27848 9.12721 2 11.1411 2ZM11 6H13V11H11V6Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMouseLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}

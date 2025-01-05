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
  selector: 'svg[si-googlecardboard-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Google Cardboard</svg:title>
    <svg:path
      d="M3.087 4.235a3.07 3.07 0 0 0-2.183.91A3.133 3.133 0 0 0 0 7.35v9.296a3.13 3.13 0 0 0 .903 2.206 3.066 3.066 0 0 0 2.184.913h4.28a3.078 3.078 0 0 0 2.713-1.645l1.209-2.276a.785.785 0 0 1 .703-.42.783.783 0 0 1 .701.42l1.21 2.276a3.08 3.08 0 0 0 2.718 1.645h4.292a3.07 3.07 0 0 0 2.184-.913A3.13 3.13 0 0 0 24 16.646V7.35c0-.825-.324-1.618-.904-2.205a3.065 3.065 0 0 0-2.183-.91zm3.495 5.656c1.138 0 2.06.937 2.06 2.092 0 1.157-.922 2.093-2.06 2.093-1.139 0-2.061-.936-2.061-2.093 0-1.155.922-2.092 2.06-2.092zm10.832 0c1.139 0 2.061.937 2.061 2.092 0 1.157-.922 2.093-2.06 2.093-1.14 0-2.063-.936-2.063-2.093 0-1.155.923-2.092 2.062-2.092z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGooglecardboardIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'FF7143');
  }
}

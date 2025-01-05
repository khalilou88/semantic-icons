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
  selector: 'svg[si-scipy-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>SciPy</svg:title>
    <svg:path
      d="M15.697 13.496c-.784-1.072-1.982-1.519-3.694-1.88l-1.592-.375-1.201-.515c-.631-.446-1.17-1.634-1.017-2.681a3 3 0 0 1 3.386-2.526 2.962 2.962 0 0 1 1.962 1.155L15.35 9.05c1.033 1.33 2.195 1.727 3.459 1.098l.637-.27a.22.22 0 0 1 .278.087l.127.19a.311.311 0 0 0 .156.131.326.326 0 0 0 .33-.058l1.467-1.384c.257-.22.182-.422.182-.422l-.354-.806s-.097-.193-.431-.149l-1.968.181a.327.327 0 0 0-.27.411l.071.227c.014.047.014.1-.005.148a.219.219 0 0 1-.124.125l-.556.235c-.582.341-1.244.123-1.686-.417l-.505-.67-1.438-1.91a4.421 4.421 0 0 0-2.929-1.72C9.355 3.733 7.095 5.42 6.741 7.84c-.179 1.22.187 2.375.855 3.302.485.674 1.373 1.06 1.854 1.18l1.262.36 1.208.277c.166.04.634.155.91.255.256.092.845.31 1.324.701.572.582.875 1.413.746 2.284a2.744 2.744 0 0 1-4.897 1.255l-1.726-2.292a2.294 2.294 0 0 0-1.514-.89 2.31 2.31 0 0 0-1.708.439l-3.632 2.71A11.002 11.002 0 0 1 0 12C0 5.798 5.133.768 11.465.768c4.715 0 8.761 2.788 10.523 6.77l.581-.27.393-1.072.411.144-.353.96.98.337-.148.402-1.095-.382-.603.277c.5 1.262.778 2.632.778 4.066 0 6.203-5.135 11.232-11.467 11.232a11.526 11.526 0 0 1-9.26-4.61l3.721-2.788a.855.855 0 0 1 1.163.19l1.826 2.455a4.186 4.186 0 0 0 2.673 1.502c2.302.322 4.439-1.273 4.773-3.563a4.14 4.14 0 0 0-.664-2.922"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiScipyIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#8CAAE6');
  }
}

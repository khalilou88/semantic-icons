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
  selector: 'svg[si-jameson-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Jameson</svg:title>
    <svg:path
      d="M14.35 0a.01.01 0 0 1 .012.007l.014.052a.01.01 0 0 1-.004.01c-.594.406-1.168 1.487-.837 2.726l1.259 4.71 1.82 6.808c.373 1.398.892 2.173 1.611 2.28a.01.01 0 0 1 .008.006l.02.055a.01.01 0 0 1-.003.01c-.373.365-.678 1.27-1.064 2.102-.044.094-.084.19-.126.285-.444 1.036-1.388 3.244-4.223 4.331-3.415 1.308-6.886.483-8.35-1.94-.958-1.58-.729-3.739.827-4.614 1.35-.757 2.806-.26 3.354.86.532 1.085.165 2.242-.274 2.623-.09.08-.002.232.204.37.91.629 1.945.595 2.945.065 1.28-.677 1.735-1.84 1.071-4.323L9.278 3.94C8.947 2.7 7.91 2.05 7.194 1.998a.01.01 0 0 1-.008-.007l-.014-.052a.01.01 0 0 1 .007-.012zm1.142.288c.01-.003.017.008.01.015-.386.438-.643 1.101-.35 2.196L18.2 13.894c.534 1.997 1.44 2.106 1.869 2.233.014.004.019.021.009.032-.223.226-.78 1.574-1.043 2.227-.412 1.027-1.157 2.176-1.895 2.764-.009.006-.02-.004-.014-.013.673-1.065 1.271-2.549 1.68-3.579.195-.494.383-.937.552-1.151a.634.634 0 0 1 .056-.064c.012-.012.005-.032-.011-.033a1.228 1.228 0 0 1-.128-.016c-.35-.073-.71-.352-.97-.715-.265-.37-.491-.882-.666-1.535L14.631 2.8c-.327-1.222.144-2.287.861-2.511ZM8.715 16.25c.608.206 1.14.649 1.504 1.401a3.31 3.31 0 0 1 .165 2.502.02.02 0 0 1-.015.013.849.849 0 0 1-.533-.08.059.059 0 0 1-.029-.071c.272-.76.287-1.731-.153-2.638a2.818 2.818 0 0 0-.947-1.11c-.01-.006-.003-.02.008-.017z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiJamesonIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '004027');
  }
}

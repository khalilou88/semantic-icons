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
  selector: 'svg[si-justgiving-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>JustGiving</svg:title>
    <svg:path
      d="M23.716 9.925H15.33l-4.898 4.919h6.727c-.885 1.975-2.865 3.061-5.16 3.061-3.104 0-5.639-2.67-5.639-5.771C6.36 9.02 8.896 6.42 12 6.42c1.134 0 2.189.295 3.061.871l4.542-4.561C17.541 1.031 14.893 0 12 0 5.37 0 0 5.367 0 12c0 6.623 5.37 12 12 12s12-5.115 12-11.738c0-.896-.103-1.35-.284-2.337z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiJustgivingIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'AD29B6');
  }
}

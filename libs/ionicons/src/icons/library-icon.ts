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
  selector: 'svg[si-library-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M64 480H48a32 32 0 01-32-32V112a32 32 0 0132-32h16a32 32 0 0132 32v336a32 32 0 01-32 32zM240 176a32 32 0 00-32-32h-64a32 32 0 00-32 32v28a4 4 0 004 4h120a4 4 0 004-4zM112 448a32 32 0 0032 32h64a32 32 0 0032-32v-30a2 2 0 00-2-2H114a2 2 0 00-2 2z"
    />
    <svg:rect x="112" y="240" width="128" height="144" rx="2" ry="2" />
    <svg:path
      d="M320 480h-32a32 32 0 01-32-32V64a32 32 0 0132-32h32a32 32 0 0132 32v384a32 32 0 01-32 32zM495.89 445.45l-32.23-340c-1.48-15.65-16.94-27-34.53-25.31l-31.85 3c-17.59 1.67-30.65 15.71-29.17 31.36l32.23 340c1.48 15.65 16.94 27 34.53 25.31l31.85-3c17.59-1.67 30.65-15.71 29.17-31.36z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLibraryIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}

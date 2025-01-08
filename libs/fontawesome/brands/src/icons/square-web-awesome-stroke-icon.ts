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
  selector: 'svg[si-square-web-awesome-stroke-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm235 81.6L288 224l52.2-10.4c-2.6-3.9-4.2-8.5-4.2-13.6c0-13.3 10.7-24 24-24s24 10.7 24 24c0 13-10.3 23.6-23.2 24L304.5 349.1c-5.2 11.5-16.6 18.9-29.2 18.9l-102.6 0c-12.6 0-24-7.4-29.2-18.9L87.2 224C74.3 223.6 64 213 64 200c0-13.3 10.7-24 24-24s24 10.7 24 24c0 5-1.5 9.7-4.2 13.6L160 224l53.1-46.4c-8.9-4.1-15-13.1-15-23.6c0-14.4 11.6-26 26-26s26 11.6 26 26c0 10.5-6.2 19.5-15.1 23.6z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSquareWebAwesomeStrokeIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 448 512');
  }
}

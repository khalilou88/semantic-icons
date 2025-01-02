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
  selector: 'svg[si-bs-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="bs-a">
        <svg:path fill-opacity=".7" d="M-12 0h640v480H-12z" />
      </clipPath>
    </defs>
    <g fill-rule="evenodd" clip-path="url(#bs-a)" transform="translate(12)">
      <svg:path fill="#fff" d="M968.5 480h-979V1.8h979z" />
      <svg:path fill="#ffe900" d="M968.5 344.5h-979V143.3h979z" />
      <svg:path
        fill="#08ced6"
        d="M968.5 480h-979V320.6h979zm0-318.7h-979V2h979z"
      />
      <svg:path
        fill="#000001"
        d="M-11 0c2.3 0 391.8 236.8 391.8 236.8L-12 479.2z"
      />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBsFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}

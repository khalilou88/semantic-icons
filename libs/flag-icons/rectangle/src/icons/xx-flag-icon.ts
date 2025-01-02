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
  selector: 'svg[si-xx-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="#fff"
      fill-rule="evenodd"
      stroke="#adb5bd"
      stroke-width="1.1"
      d="M.5.5h638.9v478.9H.5z"
    />
    <svg:path
      fill="none"
      stroke="#adb5bd"
      stroke-width="1.1"
      d="m.5.5 639 479m0-479-639 479"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiXxFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}

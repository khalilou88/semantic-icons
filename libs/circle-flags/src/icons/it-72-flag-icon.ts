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
  selector: 'svg[si-it-72-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <svg:mask
        id="a"
        width="512"
        height="512"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <svg:circle cx="256" cy="256" r="256" fill="#fff" />
      </svg:mask>
    </defs>
    <svg:g mask="url(#a)">
      <svg:path fill="#0052b4" d="M0 0h512v512H0V0Z" />
      <svg:path
        fill="#eee"
        d="m176 152-32 32v109c0 85.6 112 111.4 112 111.4s40.6-9.3 73-35.5l29.2-34.7A88.6 88.6 0 0 0 368 293V152H176Z"
      />
      <svg:path
        fill="#d80027"
        d="M358.2 334.2 176 152h-32v32l185 185a110 110 0 0 0 29.2-34.8Z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiIt72FlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '512');
    this.render.setAttribute(svg, 'height', '512');
  }
}
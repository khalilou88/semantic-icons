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
  selector: 'svg[si-it-57-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:mask
        id="a"
        width="576"
        height="576"
        x="-32"
        y="-32"
        maskUnits="userSpaceOnUse"
      >
        <svg:circle cx="256" cy="256" r="256" fill="#fff" />
      </svg:mask>
    </svg:defs>
    <svg:g mask="url(#a)">
      <svg:path fill="#eee" d="M0 0h512v512H0V0Z" />
      <svg:path
        fill="#496e2d"
        d="M256 544c-77 0-149.3-30-203.6-84.4C-2 405.3-32 333-32 256S-2 106.7 52.4 52.4C106.7-2 179-32 256-32S405.3-2 459.6 52.4C514 106.7 544 179 544 256s-30 149.3-84.4 203.6A286.1 286.1 0 0 1 256 544Zm0-512c-59.8 0-116 23.3-158.4 65.6C55.3 140 32 196.2 32 256s23.3 116 65.6 158.4C140 456.7 196.2 480 256 480s116-23.3 158.4-65.6C456.7 372 480 315.8 480 256s-23.3-116-65.6-158.4A222.5 222.5 0 0 0 256 32Z"
      />
      <svg:path
        fill="#333"
        d="M363.9 146.4a32.4 32.4 0 0 0-35.5 7.2l-76.2 76.9 46 46 20.8-21V305l-89-89v-31a35.5 35.5 0 1 0-69.5-15.2L116.7 208h44.6v125.5a34.4 34.4 0 1 0 68.7 0v-12.1a74.4 74.4 0 0 0 89-3.6v16a32.5 32.5 0 1 0 65 0V176.4c0-13.2-8-25-20.1-30ZM195.4 151a25.6 25.6 0 1 1 0 51.1 25.6 25.6 0 0 1 0-51.1Zm-52 47.2 17-15 .9 3.2v11.8h-18ZM217 333.6c0 12-9.4 21.4-21.4 21.4s-21.3-9.5-21.3-21.4V208.1h5a35.3 35.3 0 0 0 37.7-3.4v4.7a74.4 74.4 0 0 0 0 100.8v23.4Zm82-18.2-43.3-43.3-9.2 9.2 38.8 38.9c-2.3.5-4.7.8-7 1l-35.9-35.8-9.2 9.2 25.4 25.5a61.7 61.7 0 0 1-37.8-94.7l85.7 85.7a62 62 0 0 1-7.5 4.3Z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiIt57FlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '512');
    this.render.setAttribute(svg, 'height', '512');
  }
}

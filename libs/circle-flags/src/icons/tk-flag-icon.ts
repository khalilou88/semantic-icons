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
  selector: 'svg[si-tk-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#0052b4" d="M0 0h512v512H0z" />
      <svg:path
        fill="#eee"
        d="m188 133.6 5.6 17h17.9L197 161l5.5 17-14.4-10.5-14.5 10.5 5.5-17-14.4-10.5h17.8zM115.5 256l7 21.3h22.3l-18 13 6.8 21.4-18-13.2-18.1 13.2 6.9-21.3-18.1-13.1h22.3zm0-178 7 21.2h22.3l-18 13.1 6.8 21.3-18-13.2-18.1 13.2 6.9-21.3-18.1-13.1h22.3zM59.8 178l6.9 21.3H89l-18 13.2 6.9 21.2-18.1-13.1-18.1 13.1 7-21.2-18.2-13.2H53z"
      />
      <svg:path
        fill="#eee"
        d="m188 133.6 5.6 17h17.9L197 161l5.5 17-14.4-10.5-14.5 10.5 5.5-17-14.4-10.5h17.8zM115.5 256l7 21.3h22.3l-18 13 6.8 21.4-18-13.2-18.1 13.2 6.9-21.3-18.1-13.1h22.3zm0-178 7 21.2h22.3l-18 13.1 6.8 21.3-18-13.2-18.1 13.2 6.9-21.3-18.1-13.1h22.3zM59.8 178l6.9 21.3H89l-18 13.2 6.9 21.2-18.1-13.1-18.1 13.1 7-21.2-18.2-13.2H53z"
      />
      <svg:path
        fill="#ffda44"
        d="M411.8 122.4 144.7 345h361.7v-35.8a167.4 167.4 0 0 1-97.9-152.3c0-11.7 1-23.5 3.3-34.5zm94.6 244.9H144.7v33.4h361.7z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiTkFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '512');
    this.render.setAttribute(svg, 'height', '512');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
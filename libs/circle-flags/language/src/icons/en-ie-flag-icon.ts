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
  selector: 'svg[si-en-ie-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <mask id="a"><svg:circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#a)">
      <svg:path
        fill="#eee"
        d="m167 0-32 172 32 173 121-57 57-121 32-84-32-83Z"
      />
      <svg:path fill="#6da544" d="M0 0v512l115-52 52-115V0Z" />
      <svg:path fill="#ff9811" d="M345 0v167l115-52L512 0Z" />
      <svg:path
        fill="#eee"
        d="M512 0 0 512l23-8 22 8h23l54-32 54 32h32l48-32 48 32h32l54-32 54 32h68l-8-22 8-23v-23l-32-54 32-54v-32l-32-48 32-48v-32l-32-54 32-54z"
      />
      <svg:path
        fill="#d80027"
        d="m304 208-96 96v208h96V304h208v-96ZM176 336 0 512h45l131-131Zm160 0 176 176v-45L381 336Z"
      />
      <svg:path
        fill="#0052b4"
        d="M512 68 404 176h108ZM404 336l108 108V336Zm-228 68L68 512h108zm160 0v108h108z"
      />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiEnIeFlagIcon implements OnInit {
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

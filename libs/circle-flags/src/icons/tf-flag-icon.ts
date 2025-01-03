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
  selector: 'svg[si-tf-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#0052b4" d="M256 0h256v512H0V256Z" />
      <svg:path fill="#eee" d="M0 0h256v256H0z" />
      <svg:path fill="#0052b4" d="M0 0h75v224H0z" />
      <svg:path fill="#d80027" d="M149 0h75v224h-75z" />
      <svg:path
        fill="#eee"
        d="m323 158 13 21h36v71l-27-43-37 59h18l19-34 39 70 39-70 19 34h18l-37-59-27 43v-39h16l12-20h-28v-12h36l13-21zm43 88h-40v14h40zm76 0h-40v14h40z"
      />
      <svg:path
        fill="#eee"
        d="m301 181 13 38-34-23h42l-34 23zm166 0 13 38-34-23h42l-34 23zM339 282l13 38-34-23h42l-34 23zm90 0 13 38-34-23h42l-34 23zm-45 34 13 38-34-23h42l-34 23z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiTfFlagIcon implements OnInit {
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

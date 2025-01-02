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
  selector: 'svg[si-emoji-expressionless-flat-eyes-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.09302 14.2384C7.67881 14.2384 7.34302 14.5742 7.34302 14.9884C7.34302 15.4026 7.67881 15.7384 8.09302 15.7384H15.907C16.3212 15.7384 16.657 15.4026 16.657 14.9884C16.657 14.5742 16.3212 14.2384 15.907 14.2384H8.09302Z"
      fill="#323544"
    />
    <svg:path
      d="M6.69186 9.16744C6.69186 8.75323 7.02765 8.41744 7.44186 8.41744H9.72744C10.1417 8.41744 10.4774 8.75323 10.4774 9.16744C10.4774 9.58166 10.1417 9.91744 9.72744 9.91744H7.44186C7.02765 9.91744 6.69186 9.58166 6.69186 9.16744Z"
      fill="#323544"
    />
    <svg:path
      d="M14.2856 8.41744C13.8714 8.41744 13.5356 8.75323 13.5356 9.16744C13.5356 9.58166 13.8714 9.91744 14.2856 9.91744H16.5581C16.9724 9.91744 17.3081 9.58166 17.3081 9.16744C17.3081 8.75323 16.9724 8.41744 16.5581 8.41744H14.2856Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiEmojiExpressionlessFlatEyesIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}

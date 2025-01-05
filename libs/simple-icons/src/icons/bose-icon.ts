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
  selector: 'svg[si-bose-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Bose</svg:title>
    <svg:path
      d="M14.052 10.589a.69.69 0 0 0-.588.332l-.54.915c-.114.19.036.399.235.399h1.873l-.336.568a.274.274 0 0 1-.24.139h-.29a.113.113 0 0 1-.102-.164c.035-.062.112-.19.112-.19h-1.699l-.246.418c-.115.194.038.405.232.405h3.174a.692.692 0 0 0 .598-.34c.12-.206.405-.69.527-.896.123-.205-.032-.41-.228-.41h-1.873l.347-.586a.276.276 0 0 1 .231-.123h.292c.095 0 .135.102.105.155-.03.053-.117.199-.117.199h1.696l.254-.43c.094-.16-.023-.392-.24-.392h-3.18.003zm-1.344 0H9.537c-.23 0-.47.12-.592.329-.124.207-1.13 1.911-1.24 2.096-.109.185.042.397.236.397h3.177c.255 0 .48-.141.592-.33.111-.188 1.13-1.915 1.237-2.094.106-.18-.03-.4-.24-.4v.002zm-1.598.636c-.045.076-.89 1.505-.936 1.585a.276.276 0 0 1-.236.134h-.295c-.094 0-.138-.102-.102-.163l.94-1.592a.274.274 0 0 1 .235-.13h.296c.085 0 .143.091.097.167l.001-.001zm-2.919-.636H4.61l-1.39 2.354H0v.47h6.598a.69.69 0 0 0 .596-.336l.41-.697c.085-.145-.004-.331-.164-.379a.703.703 0 0 0 .583-.329c.115-.193.298-.506.402-.682a.266.266 0 0 0-.234-.4v-.001zM6.29 12.402l-.243.411a.267.267 0 0 1-.233.132h-.9l.419-.708h.857a.11.11 0 0 1 .099.166zm.694-1.178-.242.41a.266.266 0 0 1-.233.131h-.9l.418-.708h.858c.09 0 .14.093.098.167h.001zm11.194-.635-1.667 2.823h4.042l.276-.469h-2.345l.418-.707h2.345l.278-.47H19.18l.418-.709H24v-.468h-5.822z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBoseIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#000000');
  }
}

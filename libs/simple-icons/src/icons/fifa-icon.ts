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
  selector: 'svg[si-fifa-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>FIFA</title>
    <svg:path
      d="M0 8.064v7.872h2.486v-2.843h1.728l.671-1.72H2.486V9.775h2.92l.637-1.711zm6.804 0L6.8 15.936h2.457V8.064zm4.15 0v7.872h2.484v-2.843h1.726l.677-1.72h-2.403V9.775h2.922L17 8.064zm7.658 0l-2.83 7.872h2.375l.306-1.058h2.769l.32 1.058H24l-2.837-7.872zm1.235 2.023l.981 3.277h-1.927z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiFifaIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}

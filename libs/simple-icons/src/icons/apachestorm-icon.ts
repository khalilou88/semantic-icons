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
  selector: 'svg[si-apachestorm-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Apache Storm</title>
    <svg:path
      d="m3.95 12.021 2.196.03c3.08.043 4.486-.147 5.866-.79.788-.367 1.333-.858 1.65-1.483.212-.417.243-.591.211-1.184-.096-1.826-1.412-2.807-3.77-2.807-1.775 0-3.558.456-6.276 1.604-.702.296-1.289.526-1.305.51-.064-.063 4.824-4.72 5.773-5.5.895-.734 1.831-1.282 2.722-1.591.694-.242.894-.266 2.235-.269 1.248-.003 1.592.031 2.253.221 3.16.91 5.022 3.453 4.129 5.639-.062.151-.007.172.462.172 1.502 0 3.023.904 3.585 2.131.805 1.76.035 3.89-1.73 4.785-.924.468-1.55.562-4.085.615l-2.356.049-1.27.947-1.271.947 3.43.049 3.43.049-.54.414-3.892 3.008a1411.35 1411.35 0 0 1-4.204 3.243l-.85.649H9.41c-.524 0-.92-.04-.902-.09.018-.05 1.581-1.297 3.474-2.773 4.2-3.275 3.97-3.092 3.97-3.163 0-.032-1.528-.07-3.397-.084l-3.398-.026 1.017-.778c.56-.427 1.86-1.45 2.89-2.274l1.873-1.496 2.643-.037c2.42-.033 2.692-.055 3.218-.25 1.174-.435 1.778-1.195 1.78-2.24.003-.875-.374-1.452-1.23-1.886-.773-.393-1.46-.512-2.963-.512l-1.152-.001.392-.605c.463-.716.62-1.213.619-1.948-.002-.721-.281-1.319-.901-1.93-1.588-1.562-4.46-1.977-6.579-.95-.777.376-3.271 2.348-2.714 2.145.108-.039.793-.093 1.521-.12 2.099-.076 3.333.277 4.357 1.245 1.315 1.243 1.713 3.22.958 4.754-.787 1.597-2.703 2.581-5.658 2.906-.605.066-2.566.097-5.104.079L0 13.395l1.325-1.035c.728-.57 2.104-1.64 3.057-2.38l1.733-1.346h2.197L3.95 12.021z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiApachestormIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}

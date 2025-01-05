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
  selector: 'svg[si-actix-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Actix</svg:title>
    <svg:path
      d="M4.583 3.895c-.27.22-.788.078-1.164-.334-.156.156-.269.298-.411.454.411.334.596.866.376 1.114-.22.27-.752.22-1.163-.113-.114.156-.22.333-.334.489.454.298.674.752.518 1.057s-.674.334-1.163.078c-.079.192-.192.376-.27.518.489.22.752.596.631.944-.113.298-.596.411-1.085.269-.078.192-.114.376-.156.568.489.156.816.489.752.787-.078.334-.518.518-1.008.454-.028.192-.028.412-.078.596.49.078.866.334.866.674 0 .341-.412.568-.894.596v.596c.49 0 .894.22.944.518.028.298-.298.631-.788.709.028.192.078.412.114.596.489-.078.893.078.972.376.078.298-.192.674-.632.816.078.192.114.376.192.568.454-.156.894-.029 1.007.22.114.298-.078.674-.518.943.078.192.192.334.298.518.412-.22.866-.192 1.008.078.191.27 0 .674-.334.972.114.156.22.333.376.489.376-.269.816-.297 1.007-.078.22.22.114.674-.191 1.008.156.156.298.298.454.411.333-.333.752-.454 1.007-.269.249.191.22.631-.028 1.057.156.113.333.22.489.333.298-.376.674-.567.944-.411s.333.596.114 1.057c.191.113.376.191.517.269.22-.411.596-.674.894-.567.298.113.412.567.298 1.007.192.078.376.114.568.192.156-.454.489-.752.787-.71.298.078.49.49.454.972.192.029.412.078.596.078.078-.489.334-.865.674-.816.334 0 .568.412.596.944h.596c0-.49.22-.894.518-.944.333-.028.631.334.752.816.191-.028.411-.078.596-.113-.114-.49.078-.944.376-1.057.333-.078.709.22.865.752.192-.078.376-.114.568-.192-.192-.489-.114-.972.191-1.114.298-.142.752.156.972.632.192-.078.376-.192.518-.27-.269-.454-.269-.972 0-1.163.298-.192.788.028 1.086.489.156-.113.333-.22.489-.376-.376-.411-.454-.943-.191-1.163.269-.22.787-.078 1.163.333.156-.156.298-.298.412-.411-.455-.376-.596-.866-.412-1.114.22-.27.752-.22 1.192.156l.028.028c.114-.156.27-.333.376-.489-.489-.298-.752-.752-.596-1.086.192-.298.71-.333 1.192-.028l.029.028c.113-.191.191-.376.269-.567h-.028c-.518-.192-.866-.632-.752-.972.113-.348.674-.454 1.192-.22.028 0 .028.028.078.028.078-.191.156-.411.191-.596h-.078c-.567-.113-.972-.489-.894-.815.078-.334.596-.518 1.164-.412.028 0 .078 0 .113.029.029-.22.078-.412.114-.632h-.114c-.567-.028-1.007-.333-1.007-.674 0-.34.489-.631 1.057-.596H24v-.631h-.114c-.567.078-1.057-.192-1.085-.518-.028-.333.376-.674.972-.752h.156c-.028-.22-.078-.411-.113-.631-.029 0-.078.028-.157.028-.567.156-1.085 0-1.163-.333-.113-.334.27-.752.816-.894.028 0 .113-.029.156-.029-.078-.22-.156-.411-.22-.596-.028.029-.078.029-.156.078-.518.22-1.057.156-1.192-.156-.156-.333.156-.787.674-1.007.078-.028.114-.028.192-.078-.114-.192-.192-.376-.298-.568-.029.029-.078.078-.156.114-.49.298-1.008.333-1.242.028-.191-.298.028-.787.518-1.114.028-.028.113-.078.156-.078-.113-.191-.27-.333-.411-.517-.029.028-.078.078-.114.113-.411.376-.972.49-1.192.22s-.078-.787.334-1.163c.028-.029.113-.079.156-.114-.156-.156-.298-.298-.49-.454-.028.028-.078.078-.113.156-.376.454-.866.631-1.164.412-.269-.22-.22-.752.156-1.192.029-.029.078-.114.114-.156-.192-.114-.334-.27-.518-.376-.028.028-.028.113-.078.156-.298.489-.752.752-1.086.596-.298-.192-.333-.71-.028-1.192.028-.029.078-.114.114-.156-.192-.114-.376-.192-.596-.298 0 .028-.029.113-.029.156-.191.518-.631.865-.972.752-.347-.114-.454-.674-.22-1.192.029-.028.029-.114.078-.156-.191-.078-.411-.114-.631-.192 0 .029 0 .078-.028.156-.114.568-.49.972-.816.894-.334-.078-.518-.596-.412-1.163 0-.029.029-.114.029-.156-.22-.029-.412-.078-.632-.078v.113c-.028.568-.333 1.008-.674 1.008-.333 0-.631-.49-.595-1.057V.078h-.632v.114c.078.567-.191 1.057-.518 1.085-.333.028-.674-.376-.752-.972V.192c-.191.028-.411.078-.596.113 0 .028 0 .028.029.078.156.568 0 1.086-.334 1.164-.333.113-.752-.27-.894-.816V.653c-.191.078-.376.156-.596.22 0 0 0 .028.029.028.22.518.156 1.057-.156 1.192-.334.156-.788-.156-1.008-.674V1.39c-.191.114-.376.192-.518.298.298.49.334 1.008.029 1.242-.298.191-.788-.028-1.114-.518-.156.114-.333.27-.489.376.333.369.439.887.177 1.107m-.518 6.491c-.454-.156-.709-.631-.568-1.085.157-.454.632-.71 1.086-.568.454.156.709.631.567 1.086-.113.446-.631.709-1.085.567m.78 8.194c-2.17-2.391-3.114-5.725-1.837-6.889 1.241-1.113 4.044.49 6.257 2.881 2.171 2.39 3.554 5.313 2.277 6.477-1.269 1.135-4.526-.107-6.697-2.469m9.138 2.171c-.49.113-.944-.192-1.057-.674-.114-.49.191-.944.674-1.057.489-.114.943.191 1.057.674.085.511-.213.95-.674 1.057m6.073-12.798c1.603.518 2.17 3.93 1.191 7.002s-3.412 5.555-5.015 5.065c-1.604-.518-1.604-3.788-.632-6.86.965-3.036 2.852-5.746 4.456-5.207m-1.384-2.029c.334.376.298.894-.078 1.241-.376.348-.894.298-1.241-.078-.348-.376-.298-.894.078-1.241.376-.298.943-.256 1.241.078m-4.909 4.498c.894.971.816 2.468-.156 3.362s-2.469.816-3.363-.156-.816-2.469.156-3.363c.958-.901 2.469-.822 3.363.157M9.946 2.554c3.143-.674 6.513.191 6.889 1.837s-2.469 3.257-5.612 3.966c-3.143.674-6.399.412-6.746-1.241-.384-1.682 2.319-3.881 5.469-4.562"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiActixIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '000000');
  }
}

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
  selector: 'svg[si-ticket-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M426.24 127.72l-10.94 10.94a29.67 29.67 0 01-42-42l10.94-10.94L314.52 16l-88 88-4 12.09-12.09 4L16 314.52l69.76 69.76 10.94-10.94a29.67 29.67 0 0142 42l-10.94 10.94L197.48 496l194.4-194.4 4-12.09 12.09-4 88-88zm-208.56 5.43l21.87-21.87 33 33-21.88 21.87zm43 43l21.88-21.88 32.52 32.52-21.88 21.88zm42.56 42.56l21.88-21.88 32.52 32.52-21.84 21.93zm75.57 75.56l-33-33 21.87-21.88 33 33z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTicketSharpIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}

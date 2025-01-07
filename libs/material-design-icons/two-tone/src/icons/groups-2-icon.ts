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
  selector: 'svg[si-groups-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15.43 15.48c-1.1-.49-2.26-.73-3.43-.73-1.18 0-2.33.25-3.43.73-.23.1-.4.29-.49.52h7.85a.978.978 0 0 0-.5-.52zm-2.49-6.69C12.86 8.33 12.47 8 12 8s-.86.33-.94.79l-.2 1.21h2.28l-.2-1.21z"
      opacity=".3"
    />
    <svg:path
      d="M10.27 12h3.46a1.5 1.5 0 0 0 1.48-1.75l-.3-1.79a2.951 2.951 0 0 0-5.82.01l-.3 1.79c-.15.91.55 1.74 1.48 1.74zm.79-3.21c.08-.46.47-.79.94-.79s.86.33.94.79l.2 1.21h-2.28l.2-1.21zm-9.4 2.32c-.13.26-.18.57-.1.88.16.69.76 1.03 1.53 1h1.95c.83 0 1.51-.58 1.51-1.29 0-.14-.03-.27-.07-.4-.01-.03-.01-.05.01-.08.09-.16.14-.34.14-.53 0-.31-.14-.6-.36-.82-.03-.03-.03-.06-.02-.1.07-.2.07-.43.01-.65a1.12 1.12 0 0 0-.99-.74.09.09 0 0 1-.07-.03C5.03 8.14 4.72 8 4.37 8c-.3 0-.57.1-.75.26-.03.03-.06.03-.09.02a1.24 1.24 0 0 0-1.7 1.03c0 .02-.01.04-.03.06-.29.26-.46.65-.41 1.05.03.22.12.43.25.6.03.02.03.06.02.09zm14.58 2.54c-1.17-.52-2.61-.9-4.24-.9-1.63 0-3.07.39-4.24.9A2.988 2.988 0 0 0 6 16.39V18h12v-1.61c0-1.18-.68-2.26-1.76-2.74zM8.07 16a.96.96 0 0 1 .49-.52c1.1-.49 2.26-.73 3.43-.73 1.18 0 2.33.25 3.43.73.23.1.4.29.49.52H8.07zm-6.85-1.42A2.01 2.01 0 0 0 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58zm21.56 0A6.95 6.95 0 0 0 20 14c-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57c0-.81-.48-1.53-1.22-1.85zM22 11v-.5c0-1.1-.9-2-2-2h-2c-.42 0-.65.48-.39.81l.7.63c-.19.31-.31.67-.31 1.06 0 1.1.9 2 2 2s2-.9 2-2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGroups2Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}

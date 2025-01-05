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
  selector: 'svg[si-rescuetime-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>RescueTime</svg:title>
    <svg:path
      d="m24 7.626v8.749c0 .597-.485 1.092-1.091 1.092h-5.447v5.452c0 .596-.485 1.092-1.091 1.092h-8.742c-.596 0-1.091-.486-1.091-1.092v-5.452h-5.447c-.596 0-1.091-.485-1.091-1.092v-8.749c0-.597.485-1.092 1.091-1.092h5.447v-5.452c0-.596.485-1.092 1.091-1.092h8.742c.596 0 1.091.485 1.091 1.092v5.452h5.447c.596 0 1.091.495 1.091 1.092zm-3.325 4.339-2.192-1.649.333 1.042-4.891-.344c.152.304.243.638.243.992 0 .343-.081.667-.213.95l4.871-.364-.323 1.022zm-7.579.03-.495-8 1.021.324-1.647-2.185-1.647 2.195 1.04-.334-.454 8c0 .597.485 1.093 1.091 1.093.596 0 1.091-.486 1.091-1.093z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRescuetimeIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '161A3B');
  }
}

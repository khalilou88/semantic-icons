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
  selector: 'svg[si-backup-table-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 7v13h13c.55 0 1 .45 1 1s-.45 1-1 1H4c-1.1 0-2-.9-2-2V7c0-.55.45-1 1-1s1 .45 1 1z"
    />
    <svg:path
      d="M6 4v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2zm9 7h5v5h-5v-5zm-7 0h5v5H8v-5zm0-7h12v5H8V4z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBackupTableIcon implements OnInit {
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

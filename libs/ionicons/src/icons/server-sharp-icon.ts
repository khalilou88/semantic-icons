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
  selector: 'svg[si-server-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M125.295 40.728C159.804 25.158 206.27 16 256.5 16c50.23 0 96.466 9.159 130.748 24.748C420.143 55.706 448 80 448 112v.03c-.011 5.533-3.098 13.89-12.295 24.22-8.995 10.102-22.617 20.658-40.273 30.264C360.162 185.702 310.794 200 256 200c-54.794 0-104.162-14.298-139.432-33.486-17.656-9.606-31.278-20.162-40.273-30.264C67.081 125.901 64 117.532 64 112c0-32.428 28.246-56.36 61.295-71.272z"
    />
    <svg:path
      d="M410.724 194.623c14.213-7.731 26.834-18.379 37.276-29.599V258c0 5.532-3.081 11.901-12.295 22.25-8.995 10.102-22.617 20.658-40.273 30.264C360.162 329.702 310.794 344 256 344c-54.794 0-104.162-14.298-139.432-33.486-17.656-9.606-31.278-20.162-40.273-30.264C67.081 269.901 64 263.532 64 258v-92.976c10.442 11.22 23.063 21.868 37.276 29.599C141.286 216.39 195.918 232 256 232c60.082 0 114.714-15.61 154.724-37.377z"
    />
    <svg:path
      d="M64 309.024V400c0 32.224 28.004 56.169 60.928 71.134C159.297 486.756 205.653 496 256 496c50.347 0 96.703-9.244 131.072-24.866C419.996 456.169 448 432.224 448 400v-90.976c-10.442 11.22-23.063 21.868-37.276 29.599C370.714 360.39 316.082 376 256 376c-60.082 0-114.714-15.61-154.724-37.377-14.213-7.731-26.834-18.379-37.276-29.599z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiServerSharpIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}

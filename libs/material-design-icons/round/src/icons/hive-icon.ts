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
  selector: 'svg[si-hive-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m14.09 7.51 1.2-2c.19-.32.19-.71 0-1.03l-1.2-2c-.18-.3-.51-.48-.86-.48h-2.45a.99.99 0 0 0-.86.49l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.17.3.5.48.85.48h2.45c.36 0 .69-.18.87-.49zM9.91 9.49l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.18.3.51.49.86.49h2.46c.35 0 .68-.18.86-.49l1.2-2c.19-.32.19-.71 0-1.03l-1.2-2a.99.99 0 0 0-.86-.49h-2.46a.99.99 0 0 0-.86.49zm7.1 2.02h2.45c.35 0 .68-.18.86-.49l1.2-2c.19-.32.19-.71 0-1.03l-1.2-2c-.18-.3-.51-.49-.86-.49h-2.45a.99.99 0 0 0-.86.49l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.19.31.51.49.86.49zm2.46 1h-2.46a.99.99 0 0 0-.86.49l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.18.3.51.49.86.49h2.46c.35 0 .68-.18.86-.49l1.2-2c.19-.32.19-.71 0-1.03l-1.2-2c-.18-.3-.51-.49-.86-.49zM7.84 11.03l1.2-2c.19-.32.19-.71 0-1.03l-1.2-2c-.18-.3-.5-.49-.85-.49H4.53c-.35 0-.68.19-.86.49l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.18.3.51.49.86.49h2.45c.36-.01.68-.19.86-.49zm-.85 1.48H4.53a.99.99 0 0 0-.86.49l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.18.3.51.49.86.49h2.46c.35 0 .68-.18.86-.49l1.2-2c.19-.32.19-.71 0-1.03l-1.2-2c-.19-.3-.51-.49-.86-.49zm2.92 3.98-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.18.3.51.49.86.49h2.46c.35 0 .68-.18.86-.49l1.2-2c.19-.32.19-.71 0-1.03l-1.2-2c-.18-.3-.51-.49-.86-.49h-2.46a.99.99 0 0 0-.86.49z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHiveIcon implements OnInit {
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

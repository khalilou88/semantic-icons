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
  selector: 'svg[si-ryanair-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Ryanair</svg:title>
    <svg:path
      d="M9.847.008c-.718.047-1.464.288-1.986.81-.796.996-1.692 1.891-2.787 2.488a.3.3 0 0 1-.396 0c-.1-.299.198-.497.198-.696.1-.398.2-.895 0-1.393C4.478.72 3.583.62 2.886.72c-.298 0-.596.1-.994.2-.1 0-.3.098-.3.297.1.398-.098.897-.198 1.195-.1.2 0 .298 0 .597-.1 0 0 .099-.099.099 0 .497.697.298.995.596 0 .1.1.2.1.3.099.099.098.298.098.398C1.991 5.198.6 5.694.201 6.092-.396 6.888.7 7.187.7 7.585v.198c0 .497.198.797.198 1.195.398.995.994 1.89 1.591 2.885.2.299.4.696.698 1.193.1.2.197.398.396.498 1.99 1.99 4.676 3.183 6.467 5.172l1.195 1.493c.597.796 1.193 1.592 1.69 2.487.299.398.498.896.896 1.294.299-.1.1-.497.1-.696.099 0-.1-.001 0-.1-.1-.399-.3-.796-.4-1.194-.099-.1-.098-.198-.098-.198-.1-.497-.299-.995-.498-1.492-.398-.796-.695-1.692-1.193-2.487-.497-.796-1.193-1.593-2.089-2.19a5.537 5.537 0 0 1-1.593-1.394c-.597-.795-1.094-1.69-1.591-2.586-.2-.398-.298-.894-.597-1.292-.497-.696-1.59-1.095-1.69-1.89.1-.995.497-1.791 1.094-2.587 1.094-1.492 2.984-2.29 4.974-2.19 2.09-.1 4.08.797 6.368.896 1.193.1 2.486-.1 3.58-.398l.896-.298a9.874 9.874 0 0 0 2.686-1.393c.199-.1.198-.299.198-.398-.1-.1-.198 0-.297 0-.697.1-1.195.398-1.89.398h-1.095c-1.691-.199-3.284-.596-4.776-1.094C14.129.92 12.437.322 10.546.024a4.011 4.011 0 0 0-.7-.016zm.264 4.685c-.303.056-.51.28-.659.504a18.378 18.378 0 0 0-1.492 5.671c0 .2.001.498.2.597 0 .1.198.1.198 0 .796-1.89 1.195-3.78 2.29-5.57.099-.3.496-.598.197-.996-.099-.1-.199-.2-.398-.2a.88.88 0 0 0-.336-.006zm2.922.504c-.199 0-.197.1-.297.2-1.094 1.79-1.89 3.878-2.487 5.868-.299.895-.498 1.89-.3 2.786 0 .1.101.1.2.1.1 0 .2-.1.2-.199.596-2.387 1.988-4.577 3.083-6.766.199-.597.597-1.093.497-1.79-.199-.198-.597-.2-.896-.2zm6.568 0c-.398.1-.697.498-.797.796-.994 2.487-2.387 4.775-3.482 7.163-.795 2.188-1.79 4.279-1.89 6.666 0 .2 0 .398.2.597.1 0 .198.1.198 0 .299-.498.398-1.096.597-1.693.696-1.89 1.392-3.78 2.487-5.57 1.293-2.09 2.886-4.08 3.682-6.368.1-.398.298-.696.1-1.094-.2-.298-.597-.398-1.095-.497zm-3.284.099c-.398.1-.597.399-.796.697-.498 1.095-1.094 1.99-1.592 3.084-1.194 2.189-1.79 4.477-2.089 6.964 0 .299 0 .696.1.995.099 0 .299 0 .299-.1.199-.696.397-1.392.596-1.989.896-3.084 2.986-5.571 4.279-8.456.1-.2.298-.697 0-.896-.199-.1-.498-.2-.797-.3z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRyanairIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '073590');
  }
}

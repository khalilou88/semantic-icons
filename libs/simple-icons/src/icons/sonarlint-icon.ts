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
  selector: 'svg[si-sonarlint-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>SonarLint</svg:title>
    <svg:path
      d="M12 0C5.412 0 0 5.342 0 12c0 6.66 5.411 12 12 12 6.59 0 12-5.41 12-12 0-6.658-5.41-12-12-12zm0 2.22A9.77 9.77 0 0 1 21.78 12 9.768 9.768 0 0 1 12 21.78 9.77 9.77 0 0 1 2.22 12 9.771 9.771 0 0 1 12 2.22zM5.203 9.988c-.763 0-1.179.763-1.456 1.387 0 0-.208.555-.347.763-.07.277-.486 1.18-.14 1.665.209.277.486-.139.694-.347.139-.208.418-.833.418-.833.346-.555.485-.832.831-.832.347 0 .555.278.832.902.347.625.695 1.388 1.458 1.388s1.179-.763 1.456-1.388c.278-.555.485-.902.832-.902s.556.278.833.902c.347.625.694 1.388 1.457 1.388.763 0 1.179-.763 1.456-1.388.278-.555.485-.902.832-.902s.556.278.833.902c.347.625.694 1.388 1.457 1.388.763 0 1.179-.763 1.456-1.388.277-.555.486-.902.833-.902s.555.278.832.902c0 0 .139.277.347.624.07.138.416.693.693.693.278 0 .347-.832.07-1.525-.278-.625-.485-1.11-.485-1.11-.347-.624-.694-1.387-1.457-1.387-.763 0-1.18.763-1.458 1.387-.277.555-.485.901-.831.901-.347 0-.555-.277-.832-.9-.347-.625-.695-1.388-1.458-1.388s-1.179.763-1.456 1.387c-.278.555-.485.901-.832.901s-.556-.277-.833-.9c-.347-.625-.694-1.388-1.457-1.388-.763 0-1.179.763-1.456 1.387-.278.555-.485.901-.832.901s-.556-.277-.833-.9c-.347-.625-.694-1.388-1.457-1.388z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSonarlintIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'CB2029');
  }
}

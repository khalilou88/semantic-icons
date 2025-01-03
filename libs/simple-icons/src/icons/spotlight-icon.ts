import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-spotlight-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Spotlight</title>
    <svg:path
      d="M15.126 6.408c.008.101.008.194 0 .295-.034.589-.295 1.027-.656 1.388a2.093 2.093 0 0 1-1.464.606 2.106 2.106 0 0 1-1.498-.572 2.126 2.126 0 0 1-.126-2.996l.101-.101c.353-.345.757-.547 1.372-.606a2.112 2.112 0 0 1 1.582.555c.396.37.64.884.69 1.431zm8.465 7.288l-.631 1.22a3.73 3.73 0 0 0-.37 1.144l-.21 1.363a3.692 3.692 0 0 1-2.003 2.752l-1.229.614c-.362.185-.69.421-.976.707l-.968.985a3.703 3.703 0 0 1-3.24 1.052l-1.355-.227a3.625 3.625 0 0 0-1.203 0l-1.355.227a3.71 3.71 0 0 1-3.24-1.052l-.968-.985a3.669 3.669 0 0 0-.976-.707l-1.229-.614a3.71 3.71 0 0 1-2.003-2.752l-.21-1.363a3.58 3.58 0 0 0-.37-1.144l-.64-1.22a3.68 3.68 0 0 1 0-3.4l.631-1.22a3.73 3.73 0 0 0 .37-1.144l.21-1.363a3.692 3.692 0 0 1 2.003-2.752l1.229-.614c.362-.185.69-.421.976-.707l.968-.976a3.703 3.703 0 0 1 3.24-1.052l1.355.227c.396.067.808.067 1.203 0l1.355-.227a3.71 3.71 0 0 1 3.24 1.052l.968.976c.286.286.614.53.976.707l1.229.614a3.71 3.71 0 0 1 2.003 2.752l.21 1.363c.059.404.185.791.37 1.144l.631 1.22a3.703 3.703 0 0 1 .008 3.4zm-7.287-7.33a3.045 3.045 0 0 0-.345-1.296 3.38 3.38 0 0 0-3.223-1.826c-.135.017-.252.025-.37.042a3.316 3.316 0 0 0-1.868 1.052 3.255 3.255 0 0 0-.841 2.44c.076.926.488 1.717 1.086 2.23.438.379.993.715 1.691.816 1.338.202 2.365-.328 3.029-1.052a3.24 3.24 0 0 0 .841-2.407zm-9.736 6.766c.244-.135.48-.278.715-.412-.084-.968-.16-2.011-.236-2.903.985-.412 1.683-1.212 1.994-2.339.252-.909.143-1.977-.32-2.575a1.533 1.533 0 0 0-.597-.488c-.404-.151-.892-.034-1.229.109a2.902 2.902 0 0 0-.522.303c-.32.227-.614.48-.884.774.286 2.491.572 5.108.85 7.657.076-.034.151-.076.227-.126zm.126-7.153c.017-.076.202-.185.269-.236a.857.857 0 0 1 .429-.16c.463-.017.572.379.597.825.017.236.017.471 0 .707-.059.783-.429 1.287-1.043 1.54-.05-.488-.084-1.077-.143-1.641-.025-.227-.059-.53-.093-.799-.008-.076-.017-.151-.017-.236zm-1.136 6.278a6.08 6.08 0 0 0-.421-1.212 4.559 4.559 0 0 1-.37-1.237c-.067-.597.05-1.119.429-1.397-.143-.463-.261-.917-.404-1.372-.825.438-1.397 1.229-1.397 2.407 0 .724.269 1.195.53 1.717.177.345.328.698.446 1.069.118.396.227.833.194 1.245-.067.791-.396 1.346-.825 1.818-.042.05-.185.168-.185.202.025.059.05.109.084.16.168.353.32.656.488 1.001.025.05.05.151.084.168s.101-.067.143-.118c.143-.151.278-.311.404-.48.698-.968 1.119-2.474.799-3.972zm2.777 1.674c.345-.976.673-1.986.926-3.012.076-.303.168-.614.227-.926.008-.034.034-.109 0-.126-.446.135-.909.252-1.346.396-.185 1.523-.64 2.878-1.153 4.148s-1.144 2.44-1.801 3.559c.808.875 1.834 1.54 2.962 2.095.202-.337.421-.665.614-1.01-.69-.421-1.405-.825-1.994-1.346a39.617 39.617 0 0 0 1.565-3.778zm2.625-2.684c-.286-.194-.64-.337-.951-.505-.623 2.39-1.456 4.594-2.255 6.833.278.151.547.32.833.471.539-1.043.867-2.163 1.296-3.299.21-.555.387-1.128.564-1.708s.353-1.186.513-1.792zm2.424 6.993v-.993c0-.227-.008-.48-.017-.875-.597.076-1.203.126-1.792.21-.025.328-.025.673-.042 1.018.261.017.673-.034.934-.034 0 .488 0 .909.008 1.321 0 .16.025.32-.017.454-.059.202-.269.328-.539.303-.311-.034-.555-.353-.69-.614-.463-.909-.311-2.407-.126-3.416a5.324 5.324 0 0 1 .732-1.927c.345-.547.816-1.001 1.489-1.195 0-.278-.017-.656-.034-.968-.008-.143 0-.32-.034-.396-.008-.008-.025.008-.034.008a3.66 3.66 0 0 0-1.128.64 4.8 4.8 0 0 0-1.22 1.414 5.505 5.505 0 0 0-.286.589c-.362.808-.53 1.742-.631 2.777-.076.791-.084 1.515.034 2.23.042.227.109.454.194.673.295.774.867 1.422 2.028 1.262.446-.059.808-.236 1.186-.396 0-.74-.017-1.515-.017-2.087zm3.559-4.477a22.049 22.049 0 0 1-.109-1.691c-.025-.783 0-1.54.042-2.322 0-.008 0-.008-.008-.008-.303.236-.648.48-.976.715a.418.418 0 0 0-.126.118.853.853 0 0 0 0 .202c-.008 1.128.059 2.322.084 3.332-.278.118-.555.269-.833.379a88.942 88.942 0 0 1-.261-3.408c-.37.126-.707.278-1.069.412.076.555.151 1.086.202 1.599.093.816.135 1.632.143 2.449 0 .236 0 .471-.017.707-.034.496-.025 1.001-.059 1.498-.076.959-.067 1.986-.067 2.895.194-.084.379-.194.572-.286.194-.084.379-.185.564-.295 0-.362.017-.648.025-.959.034-1.186.067-2.179.025-3.231.32-.151.64-.303.976-.446.227 1.355.682 2.541 1.094 3.753.345-.261.64-.572.968-.858a22.97 22.97 0 0 1-.614-1.919 13.182 13.182 0 0 1-.555-2.634zm2.583-3.787c.194-.076.37-.194.555-.286s.362-.194.539-.303c-.337-.968-.757-1.851-1.338-2.609a10.081 10.081 0 0 0-1.977-1.986c0-.017-.025 0-.025.008a7.414 7.414 0 0 0-.513.724c-.034.059-.151.21-.143.269.05.067.109.126.177.177.067.067.135.118.185.168.303.311.555.589.833.926.042.05.143.16.143.21a1.388 1.388 0 0 1-.076.269c-.135.48-.227.951-.311 1.456a12.46 12.46 0 0 0-.151 2.962c.076 1.052.278 2.003.505 2.928.109.454.244.909.412 1.346.126.328.252.656.396.951.05.101.076.219.16.295.286-.37.589-.724.867-1.094-.421-.749-.707-1.666-.926-2.617a6.908 6.908 0 0 1-.177-1.01c-.126-1.372-.177-2.861.194-4.157.295.429.522.892.673 1.372z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiSpotlightIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
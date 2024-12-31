import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-lamborghini-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Lamborghini</title>
      <path
        d="M22.192 13.826c-.032.02-.232.114-.288.136-.406.18-.772.152-1.18-.088-.294-.172-.566-.552-.672-.684-.084-.106-.186-.244-.332-.374-.272-.244-.638-.404-1.272-.392a.3.3 0 0 1-.146-.036c-.64-.338-1.746-.752-2.8-.7-.21.016-.24-.136-.31-.306a3.866 3.866 0 0 0-.46-.936c-.168-.238-.24-.24-.378-.278-.152-.042-.32-.06-.42-.236-.012-.022-.062-.116-.006-.182.14-.164.528-.388-.056-.718-.356-.2-.196-.33-.138-.36a.614.614 0 0 1 .392-.042 1 1 0 0 1 .56.36c.19.222.832 1.264 1.222 2.054.006.01.014.066.086.074.108.01.296.01.334.014.06.004.06-.044.054-.064-.552-1.836-1.19-4.124-2.296-5.714-.02-.046-.002-.094.068-.088.988.1 1.276 1.51 1.856 2.434.744 1.19 1.18.724 1.252-.08.048-.56-.1-1.272-.49-1.672-.092-.114-.258-.256-.326-.34-.024-.032-.028-.082.038-.1a.446.446 0 0 1 .118-.006c.458.034 1.092.404 1.36.816.546.846.506 1.3.43 1.6-.128.512-.368.806-.07 1.618.588 1.604.434 1.268.1 2.278-.03.076.018.134.084.128.77-.072 1.004.104 1.17.192.018.01.032.024.044.02.03-.01.04-.048.044-.098.064-.432-.026-.616-.124-.87-.06-.15-.124-.32-.146-.484a.8.8 0 0 1 .07-.488c.131-.274.16-.587.084-.882-.194-.856-.896-2.264-1.344-3.076-.13-.245-.26-.49-.392-.734-.032-.06-.02-.128.006-.184l.054-.136c.108-.274.164-.48.196-.72.104-.766-.098-1.312-.652-1.768-.516-.424-1.432-.612-2.654-.544l-.26.016c-1.148.066-2.452.14-3.434.06-.95-.08-1.504-.23-1.696-.46a.332.332 0 0 1-.076-.262A.844.844 0 0 1 9.74.96c.17-.13.37-.2.514-.18.254.012.536.156.86.322.29.15.62.32 1.004.428a3 3 0 0 0 .952.124c.29-.012.576-.072.846-.18a.892.892 0 0 0 .232-.132c.02-.016.026-.048.004-.08-.014-.016-.03-.016-.09-.016a4.5 4.5 0 0 1-1-.12c-.256-.064-.28-.124-.276-.148.006-.056.14-.108.294-.114.752-.034 1.328.006 1.71.034.161.017.323.022.486.016.022-.002.03-.016.032-.022a.04.04 0 0 0-.012-.04c-.264-.22-1.126-.55-2.11-.724-1.582-.28-2.642-.05-3.252.192a3.103 3.103 0 0 0-.714.4c-.306.238-.476.496-.508.77-.04.364.224.836 1.72 1.01 1.586.184 3.068.158 4.374.136l.402-.008c.828-.012 1.528.188 1.83.522.289.34.393.798.28 1.228-.03.115-.078.224-.14.324-.094.13-.2.168-.39.118-.612-.162-1.704-.52-2.232-.7-.472-.16-.844-.284-1.16-.362-.936-.23-1.228-.078-1.858.32-.152.096-.306.2-.484.322-.26.176-.55.376-.94.62-.285.172-.575.337-.868.494-.332.18-.674.37-1.01.572-1.076.632-1.248 1.48-1.448 2.46-.14.696-.3 1.484-.832 2.284-.058.086-.52.646-.616.804-.366.586-.56 1.092-.484 1.94.06.636-.16 1.188-.37 1.722-.164.42-.32.82-.346 1.244-.02.264-.01.51 0 .748.014.394.02.788-.1 1.128-.092.26-.328.52-.42.772a3.874 3.874 0 0 0-.198 1.212c-.006.36-.272.622-.554.9-.248.246-.508.504-.602.84-.014.044-.02.078-.038.104-.024.04-.06.064-.11.1a.962.962 0 0 0-.336.408c-.096.253-.089.533.02.78.016.028.058.096.122.104.044.004.088-.02.13-.07 0 0 .276-.318.382-.412a.086.086 0 0 1 .108-.008c.032.022.038.06.02.1-.012.024-.178.32-.274.568l-.002.008c-.014.034-.03.08-.006.114.022.036.076.056.17.06.04.004.08.004.12.004.508 0 .776-.136.914-.254a.342.342 0 0 0 .08-.124l.02-.04c.1-.272.168-.588.178-.824 0-.1.028-.128.096-.196.268-.272.268-.628.268-.974 0-.32 0-.648.21-.906.57-.64.866-1.384 1.152-2.104.296-.744.6-1.514 1.208-2.154.154-.158.302-.244.4-.228.05.008.088.04.116.094.13.24.09.562.052.874-.042.354-.082.686.104.904.126.162.16.334.098.494-.08.256-.324 1.032-.902 1.376a2.44 2.44 0 0 0-.216.164.404.404 0 0 0-.064.094.473.473 0 0 1-.312.262.964.964 0 0 0-.536.346c-.22.331-.314.73-.264 1.124.01.06.03.138.088.214.034.048.074.076.116.082a.132.132 0 0 0 .1-.028c.046-.04.088-.084.126-.132.08-.09.178-.204.3-.296.04-.03.08-.022.104-.006.02.016.032.04.024.06a.85.85 0 0 1-.094.174c-.06.094-.134.21-.192.348-.016.03-.018.06-.006.084.016.04.06.056.07.06.37.118.92-.022 1.23-.312a.762.762 0 0 0 .228-.59.36.36 0 0 1 .098-.228c.216-.186.306-.476.4-.784l.072-.222c.098-.317.287-.6.542-.812.406-.38.59-.74.706-.96.118-.238.144-.37.23-.508.17-.268.742-.32.954-.194.088.052.106.124.058.214-.032.058-.334.546-.476.88-.07.164-.228.226-.32.28-.568.332-.672.956-.688 1.212-.006.08.002.186.044.246a.14.14 0 0 0 .09.06.136.136 0 0 0 .106-.028c.032-.026.34-.336.376-.368.052-.044.096-.036.12-.016.022.02.032.062 0 .11-.04.062-.254.382-.228.452.04.118.162.116.282.116.974-.08 1.318-.774 1.318-.774.024-.04.052-.094.036-.238-.028-.26-.088-1.16.432-1.72.154-.172.246-.056.28.02.064.14.156.378.21.498.112.254.188.44.32.692.216.424.546.482.952.432.526-.066.888-.024 1.24.01.3.026.466.046.688-.156.12-.11.35-.31.504-.53.1-.138.128-.226.104-.44-.072-1.082.49-2.022 1.504-2.514.152-.062.32-.044.424.096.228.336.756 1.2.756 1.934a.746.746 0 0 1-.058.234c-.072.2-.16.45.004.79.012.294-.098.524-.194.728-.138.288-.246.516.13.74.141.08.293.14.45.18a.074.074 0 0 0 .04-.012.048.048 0 0 0 .024-.034c.01-.086.02-.38.036-.448.006-.028.02-.06.052-.064.03 0 .06.022.068.046.03.072.106.36.128.404.018.04.04.066.068.076.15.042.356-.216.432-.35.132-.274.078-.68-.138-1.036a.304.304 0 0 1-.036-.158.974.974 0 0 0-.04-.66 1.452 1.452 0 0 1-.088-.344c-.06-.508.254-2.12.282-2.284.054-.3.098-.514.116-.734a.856.856 0 0 0-.216-.62c-.136-.146-.3-.28-.46-.408a4.603 4.603 0 0 1-.378-.33.87.87 0 0 1-.228-.512c0-.02.004-.034.012-.04a.045.045 0 0 1 .026-.006c.24.018.434.176.676.38.22.18.466.384.81.536.684.304 1.332.26 1.984-.136.276-.196.362-.366.376-.388.018-.03-.008-.116-.088-.07ZM7.054 11.124c.04-.316.272-.65.374-1.044.146-.444.186-1.22.266-1.836.04-.308.156-.436.378-.464.146-.014.3.114.378.548.272 1.774.804 2.02 1.114 2.49a.328.328 0 0 1 .016.026c.08.148.104.284-.02.384-.072.06-.316.146-.728-.104-.496-.298-.57-.62-1.392.038 0 0-.11.084-.214.108-.09.02-.188-.014-.172-.146Zm4.3 6.51c-.03.02-.064.006-.112-.024-.326-.21-1.23-.374-1.992-.068-.786.314-1.504.76-1.552-.018-.01-.688.136-.988-.104-1.396l-.02-.032c-.02-.032.004-.04.012-.04 1.102-.086 1.398-.43 1.466-.55.014-.028-.004-.056-.032-.06-.254-.028-1.518-.066-2.024.008-.894.13-1.494 1.474-1.61 1.602-.134.146-.304.034-.304-.1 0-.224.134-1.314.22-1.692.14-.598.332-1.04.916-1.132.408-.062 1.412-.168 1.344-.44a2.388 2.388 0 0 1-.088-.5c0-.132.068-.16.202-.128.1.02.232.08.404.12 1.26.298 1.908.06 2.66-.274l.318-.144a.168.168 0 0 1 .23.222c-.04.086-.094.126-.21.236-.248.24-1.174 1-.616 2.284.434 1 .56 1.26.87 1.942.05.112.058.16.02.184h.002Zm2.346 1.732c-.062.096-.158.164-.34.164-.228 0-.388-.068-.484-.17a.758.758 0 0 1-.174-.688c.03-.12.1-.198.18-.22.032-.012.05-.008.068.014.034.054.156.248.184.288a.342.342 0 0 0 .142.108c.092.038.21.07.272.098.19.082.234.278.152.406Zm3.638-3.54c-.024.04-.046.046-.078.06-1.142.432-2.052 1.6-1.886 3a.338.338 0 0 1-.09.246s-.24.244-.39.348c-.052.036-.11.064-.244.056l-.51-.032c-.08-.014-.046-.084-.04-.1a.34.34 0 0 0 .016-.05c.044-.21.012-.504-.284-.614-.042-.024-.016-.064-.01-.076.126-.314.286-.7.412-1.242.09-.313.023-.65-.18-.906l-.18-.24c-.052-.058-.038-.12.034-.144l.254-.066c.06-.02.056-.114-.004-.13l-.13-.04a.61.61 0 0 1-.256-.228.57.57 0 0 1-.1-.226l-.014-.074c-.002-.038-.06-.04-.088-.012a.62.62 0 0 0-.114.754c.206.344.198.31.38.57.06.084.098.154.118.24.029.21.008.425-.06.626l-.208.632c-.126.28-.266.214-.344.16-.104-.068-.2-.244-.25-.432 0 0-.144-.526-.14-1.228-.008-.084-.066-.222-.25-.1l-.49.404c-.068.038-.188.018-.164-.142 0 0 .352-1.57.73-2.454.284-.72-.032-1.126-.408-1.572-.618-.788-.756-1.846.68-1.266.386.176.524-.052 1-.094.34-.028.452.11.48.168a.422.422 0 0 1 .04.14c0 .012-.004.02-.02.02-.804.048-1.764.716-1.02 1.766.726 1.028 2.73 1.372 3.626.392.012-.012.014-.042-.004-.056a.044.044 0 0 0-.046-.008 2.9 2.9 0 0 1-.556.16c-.428.07-1.334.02-1.76-.47-.246-.28-.24-.602.174-.652.23-.018.344.024.444.026.258-.004.31-.26.258-.38a.976.976 0 0 0-.292-.364c-.134-.094-.06-.194.026-.192.828.048 1.62.192 1.92 1.186.012.038.032.164.064.21.064.096.174.168.298.274.3.262.57.73-.344 2.152Zm1.076-.616c.146-.304.344-.1.44.234.12.426.136 1.108.084 1.46-.064.46-.28.368-.396.204-.184-.258-.38-.6-.52-.836a.294.294 0 0 1-.01-.022c-.064-.134-.074-.24-.006-.336.068-.106.34-.564.408-.704Z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgLamborghiniIcon {
  readonly class = input<string>('');
}

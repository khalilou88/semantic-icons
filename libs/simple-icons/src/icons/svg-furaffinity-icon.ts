import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-furaffinity-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Fur Affinity</title>
      <path
        d="M5.7 22.086c-.43-.11-1.068-.505-1.193-.74-.113-.21-.02-1.356.116-1.44.113-.07.113-.265 0-.444-.069-.109-.235-.081-.801.132-.89.335-1.195.336-1.839.01C1.348 19.282.7 18.557.273 17.69c-.45-.914-.388-1.097.518-1.538.392-.19.932-.485 1.2-.655l.485-.31-.049-.724-.05-.725.492-.525.492-.526-.185-.285-.438-.671c-.212-.323-.234-.424-.132-.615.158-.295.095-.347-.256-.213-.157.06-.33.108-.384.108-.133 0-.124-.387.016-.648.158-.296.036-.373-.221-.14-.157.141-.245.162-.331.076-.299-.299.627-2.522 1.193-2.867l.351-.214h-.447c-.247 0-.448-.04-.448-.09 0-.302 1.386-.99 2.37-1.175l.678-.128 1.169-1.878c.643-1.033 1.235-1.932 1.316-2 .313-.26.532-.028 1.471 1.548.524.879.982 1.628 1.018 1.664.037.037.371-.164.743-.446.83-.627 3.339-2.091 4.391-2.562.588-.262.817-.32.949-.237.142.09.206.518.355 2.364.1 1.24.18 2.61.177 3.045-.007 1.202.004 1.37.09 1.367.043 0 .265-.262.493-.58.702-.981.523-.945 2.491-.508l1.731.384 1.197 1.007c1.127.949 1.378 1.217 1.253 1.342-.03.029-.758.063-1.62.076-1.845.028-2.937.289-3.567.852-.328.294-.366.386-.377.907-.007.319-.009.612-.004.65.005.04.445-.114.977-.342.532-.227 1.042-.413 1.135-.413.092 0 .582.416 1.089.926l.921.925-.55 1.06-.552 1.06.5.57c.274.313.485.622.47.686-.044.179-1.023.99-1.195.99-.083 0-.151-.036-.152-.079 0-.043-.09-.228-.202-.41l-.201-.33-.718.199c-.956.265-1.105.253-1.456-.114-.358-.373-.478-.33-.478.173 0 .512-.368 1.125-.83 1.381-.409.227-2.396.944-3.438 1.24a7.784 7.784 0 0 0-1.13.43c-1.05.528-1.072.256-.089-1.108.608-.842.946-1.18 2.002-2.007.698-.547 1.29-1.068 1.316-1.16.025-.09.153-.944.284-1.896l.238-1.732-.52-.983c-.518-.978-.52-.984-.34-1.298.098-.173.16-.315.137-.315-.038 0-.784.414-.887.492-.023.018.085.132.24.255.323.253.724.99.904 1.659.137.507.04 2.034-.113 1.792-.057-.09-.09.025-.09.314-.003.465-.376 1.495-.542 1.495-.051 0-.093-.095-.093-.21 0-.117-.048-.212-.106-.212-.065 0-.081.16-.042.41l.066.41-.685-.015c-.502-.01-.738.032-.881.159-.287.253-2.584 1.447-3.396 1.766-1.069.419-1.14.494-1.498 1.602-.176.545-.389 1.096-.473 1.226-.34.521-1.547.87-2.326.67zm1.11-.594c.18-.204.327-.309.327-.231a.447.447 0 0 1-.125.265c-.068.069-.092.158-.051.198.1.1.344-.254.502-.734.153-.463.299-.61.226-.228-.027.143-.025.26.005.26.148 0 .537-.872.724-1.622.28-1.122.361-1.259 1.283-2.13.63-.596.816-.842.91-1.212.192-.748.233-.814.32-.516.044.145.055.382.025.527-.08.403.11.163.607-.763.543-1.011.668-1.105.617-.467l-.038.484.351-.338c.465-.447 1.386-1.672 1.387-1.845 0-.075-.13-.257-.289-.405-.276-.255-.231-.269.25-.075.139.056.156.023.091-.184-.424-1.372-.948-2.169-2.166-3.296-1-.925-1.51-1.273-2.411-1.645l-.727-.299-.658.386c-.614.36-3.89 3.406-3.89 3.617 0 .558 2.683-1.523 3.953-3.064.326-.397.607-.64.74-.64.392-.002 1.555.78 2.428 1.632 1.001.978 1.359 1.584 1.28 2.171-.06.442-.456 1.3-.691 1.495-.13.107-.146.075-.103-.215.027-.189.034-.343.014-.343-.02 0-.181.155-.36.343-.285.303-.317.315-.271.105.063-.289.046-.29-.729-.022a25.67 25.67 0 0 1-1.628.47c-1.125.287-1.701.505-2.13.81-.346.246-.372.402-.065.402.124 0 .388.172.586.383l.362.383.165-.236c.155-.221.728-.53.983-.53.063 0-.006.158-.153.35-.24.315-.267.443-.258 1.239.009.824-.03.993-.543 2.363-.303.811-.665 1.628-.804 1.815-.339.455-1.1.887-1.678.952-.444.05-.462.064-.303.24.284.314.759.464 1.05.331.209-.095.243-.088.194.038-.117.306.364.154.69-.219zm-1.664-.97a4.035 4.035 0 0 0-.251-.386c-.144-.192-.154-.188-.225.095-.08.317.047.47.39.473.147.001.166-.038.086-.183zm1.443-.68c.194-.194.152-.355-.127-.482-.326-.15-.387-.078-.255.3.118.338.191.372.382.182zm-3.1-.35c.21-.087.381-.178.381-.201 0-.175-1.24-.886-2.034-1.165a38.388 38.388 0 0 1-1.158-.421c-.306-.131.179.609.8 1.22.714.703 1.294.867 2.01.567zm-1.279-.127c-.158-.056-.177-.345-.023-.345.11 0 .269.295.195.359-.022.018-.1.012-.172-.014zm-.734-.688c-.2-.26-.242-.381-.149-.439.128-.08.664.352.588.474-.085.138-.32.12-.44-.035zm3.975.296c.813-.147.928-.198 1.245-.557.563-.638.986-1.455.948-1.834-.052-.525-.448-.75-1.425-.805-.451-.026-1.02.006-1.262.072-.582.157-1.206.863-1.45 1.64l-.184.583.276.47c.296.506.547.706.798.637.087-.024.561-.116 1.054-.206zm.1-.96c-.11-.134-.106-.192.03-.328.21-.21.397-.099.397.234 0 .293-.22.342-.426.094zm-.953-.638c-.27-.326.26-.736.594-.459.224.186.19.288-.152.465-.273.141-.32.14-.442-.006zm1.226-.526c-.161-.161-.162-.193-.013-.343.183-.182.338-.09.395.237.047.268-.162.326-.382.106zm4.412 1.437c.425-.182.99-.798.855-.932-.1-.1-1.189.63-1.3.873-.145.319-.157.317.445.06zm-8.732-.641c-.46-.23-.879-.458-.929-.508-.05-.05.19-.122.546-.163.7-.079 1.748-.36 1.662-.447-.03-.03-.426.017-.88.105-1.457.28-1.653.294-1.5.109.074-.089.363-.277.642-.418.544-.276.68-.42.236-.251-.602.229-1.204.657-1.204.857 0 .136.77.61 1.44.885.932.383.926.298-.013-.169zm10.603-.325c.972-.547.98-.556.391-.48-.636.084-1.04.274-1.04.49a.49.49 0 0 1-.127.299c-.218.218-.023.14.776-.309zm8.076-1.603c.037-.565-.019-.588-.69-.283-.496.225-.491.213-.34.761l.11.39.444-.189c.422-.179.446-.212.476-.679zm-5.436-.145c.046-.392-.033-.972-.179-1.32-.045-.107-.031-.185.032-.185.117 0 .546 1.053.546 1.342 0 .14.026.149.13.044.247-.246.077-1.808-.293-2.703-.169-.407.257.05.481.515l.208.433-.035-.527c-.062-.934-.38-1.46-1.203-1.993-1.042-.673-1.089-.759-.417-.753.563.004 1.724-.433 1.985-.747.099-.12.085-.133-.077-.071-.12.046-.042-.085.196-.33.518-.533.535-.822.026-.433-.445.338-.466.277-.08-.229.267-.349.293-.47.327-1.494.036-1.091.033-1.11-.165-.932-.123.111-.24.145-.3.086-.23-.227-.43.18-.615 1.258-.105.609-.253 1.258-.33 1.442-.143.347-.665.751-1.323 1.025l-.38.157-.58-.933-.582-.932.32-.064c.297-.06.306-.075.128-.205-.18-.131-.171-.146.113-.209.309-.068.85-.456.761-.545-.026-.026-.2-.005-.384.048-.39.112-.44-.006-.098-.234.13-.087.397-.453.593-.813.327-.603.338-.65.132-.585-.178.056-.246.014-.33-.206a1.805 1.805 0 0 1-.105-.53c0-.182-.045-.237-.157-.194-.222.085-.298-.192-.175-.637.057-.208.082-.378.055-.378-.118 0-1.311.811-1.962 1.334-.79.634-.854.828-.55 1.67.083.231.152.428.153.438 0 .01-.07.006-.158-.007-.088-.013-.337-.196-.553-.407-.573-.557-1.494-.93-2.448-.992-.83-.053-.883.098-.083.233.863.146.47.26-.896.26-1.059 0-1.615.052-2.222.207-.99.253-1.374.438-.732.353.554-.074 1.637.055 1.556.185-.033.054-.2.098-.373.098-.573 0-1.49.4-1.95.853-.402.394-1.07 1.528-.963 1.634.025.025.254-.07.509-.213.66-.366 1.57-.708 1.57-.59 0 .055-.102.154-.226.22-.53.285-1.46 1.31-1.46 1.611 0 .027.25-.018.553-.099.305-.08.673-.147.82-.148.248-.001.264.029.232.447l-.034.447.237-.316c.395-.528 2.1-2.244 2.853-2.872.39-.325.697-.604.682-.619-.015-.015-.204.013-.42.061-.609.138-.461-.06.214-.285l.606-.202-.395-.075c-.676-.127-.433-.245.304-.146 1.468.197 2.966 1.002 4.336 2.33 1.051 1.02 1.635 1.917 2.014 3.097l.311.972-.5.766c-.659 1.007-.906 1.438-.848 1.48.051.037 1.375.473 1.485.489.037.005.088-.167.113-.382zm-9.664-.727l1.053-1.013-.422.068-.421.068.263-.211c.312-.251.258-.269-.224-.072-.195.08-.474.182-.619.225-.262.08-.262.079-.063-.145.438-.49.006-.183-.76.54-.446.42-1 .92-1.232 1.108-.366.298-.387.336-.158.289.145-.03.5-.012.79.039.29.05.575.098.634.105.058.007.58-.444 1.159-1zm-1.747-.388c.327-.297.423-.452.375-.606-.068-.212-.262-.287-.262-.1a.106.106 0 0 1-.106.105c-.058 0-.105-.118-.105-.263 0-.34-.14-.335-.414.014-.276.351-.28.5-.008.355.249-.134.273-.017.056.27-.167.221-.22.718-.068.66.05-.019.29-.215.532-.435zm15.769-.113c.443-.196.754-.388.69-.427-.135-.084-1.518.504-1.573.669-.055.163-.008.15.883-.242zm-15.231-1.64c-.06-.112-.11-.35-.11-.527 0-.344-.173-.437-.283-.151-.07.183.254.882.41.882.05 0 .043-.092-.017-.204zm.38-.272c.063-.164-.127-.473-.291-.473-.108 0-.126.459-.023.562.117.117.25.08.314-.089zm4.212-.492l.347-.262c.023-.018-.078-.126-.225-.242-.319-.25-.641-.998-.552-1.28.087-.272-.09-.25-.445.056-.252.216-.295.33-.289.768.009.626.309 1.19.634 1.19.124 0 .363-.104.53-.23zm-4.962-1.33c-.078-.078-.396.107-.447.26-.02.058.072.155.204.214.211.095.244.077.275-.15.018-.142.004-.288-.032-.324zm5.232.016c.106-.096.192-.231.192-.3 0-.208-.378-.484-.564-.413-.203.078-.234.574-.047.76.163.164.189.161.419-.047zm5.653-1.38c.377-.361.427-.476.583-1.344.094-.521.244-1.517.334-2.213a87.1 87.1 0 0 1 .262-1.89c.055-.345.082-.644.06-.666-.021-.021-.261.616-.533 1.417-.272.8-.52 1.527-.552 1.614-.033.089.062.047.22-.098.152-.14.277-.216.277-.167 0 .271-.39 1.314-.599 1.601-.28.385-.317.542-.083.347.433-.36.226.322-.27.887-.304.345-.318.554-.017.254.238-.239.14.15-.103.41-.378.402-.023.274.421-.152zm-4.133-2.467c-.191-.273-.227-.183-.055.138.063.117.139.188.17.158.03-.03-.022-.163-.115-.296zm-.64-1.149c.16-.31.156-.343-.125-.817-.208-.352-.303-.44-.33-.31-.047.23-.22.235-.532.016-.24-.167-.24-.166-.172.2.038.201.025.394-.028.427-.054.033-.339-.103-.634-.302l-.537-.362-.069.314c-.038.173-.11.314-.16.314-.137 0-.419-.442-.419-.656 0-.331-.148-.201-.599.525l-.44.71.322.034c.177.02.373-.016.435-.079.187-.186 1.744-.127 2.337.089.729.265.763.261.952-.103zm1.1 14.733l-.47-.237v-1.264l.79-.394c.435-.216.824-.394.865-.395.106-.002.61.881.61 1.07 0 .159-1.114 1.457-1.25 1.457-.042 0-.287-.106-.545-.237zm-1.154-.657c-.196-.202-.335-.386-.31-.41.025-.024.223-.117.44-.207l.395-.164v.574c0 .316-.038.574-.084.574-.047 0-.245-.165-.44-.367zm2.876-1.33c-.278-.42-.282-.448-.097-.558.107-.063.51-.316.894-.561.691-.441.962-.54.962-.354 0 .116-1.2 1.748-1.356 1.845-.061.038-.243-.13-.403-.373z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgFuraffinityIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}

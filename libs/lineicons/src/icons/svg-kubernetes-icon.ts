import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-kubernetes-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.003 13.1211L12.6083 12.8321L12.746 12.1856L12.3332 11.6628H11.6591L11.2464 12.1856L11.3977 12.8321L12.003 13.1211Z"
        fill="#323544"
      />
      <path
        d="M16.2954 12.7908C16.3384 12.3255 16.3058 11.8563 16.1991 11.4014C16.089 10.9199 15.9102 10.4796 15.6763 10.0944L14.0117 11.594C13.9704 11.6352 13.9428 11.6903 13.9291 11.7453C13.8879 11.9379 13.9979 12.1306 14.1905 12.1856L16.2954 12.7908Z"
        fill="#323544"
      />
      <path
        d="M13.2137 10.5484L15.016 9.26899C14.3494 8.60179 13.4766 8.1799 12.5396 8.07201L12.6634 10.3145C12.6772 10.3693 12.6911 10.4247 12.7322 10.4659C12.856 10.6172 13.0624 10.6447 13.2137 10.5484Z"
        fill="#323544"
      />
      <path
        d="M11.2464 8.0995C11.1742 8.11325 11.102 8.12699 11.0263 8.14073C10.2421 8.31957 9.54052 8.70491 8.97643 9.26899L10.8061 10.5758C10.8474 10.6033 10.9162 10.6171 10.9712 10.6171C11.1776 10.6171 11.329 10.452 11.3427 10.2594L11.4665 8.05827C11.3908 8.07201 11.3186 8.08576 11.2464 8.0995Z"
        fill="#323544"
      />
      <path
        d="M9.95317 11.5526L8.31605 10.0943C7.82076 10.906 7.61444 11.8553 7.69698 12.7908L9.82939 12.1717C9.89819 12.1579 9.95317 12.1166 9.99448 12.0616C10.1183 11.9103 10.1045 11.6764 9.95317 11.5526Z"
        fill="#323544"
      />
      <path
        d="M10.1321 13.4511L7.94454 13.8226C8.27473 14.7305 8.89388 15.4872 9.66429 15.9825L10.5035 13.9602C10.531 13.8914 10.531 13.8225 10.5173 13.74C10.476 13.5612 10.3109 13.4373 10.1321 13.4511Z"
        fill="#323544"
      />
      <path
        d="M12.003 16.6704C12.3332 16.6704 12.6497 16.6291 12.9661 16.5603C13.027 16.5421 13.0879 16.5265 13.1476 16.5112C13.2228 16.492 13.296 16.4733 13.365 16.4503L12.3057 14.5379C12.2609 14.4774 12.2049 14.426 12.1406 14.3867C11.9893 14.3041 11.8104 14.3591 11.7004 14.483L10.6136 16.4503C11.0538 16.5879 11.5216 16.6704 12.003 16.6704Z"
        fill="#323544"
      />
      <path
        d="M14.3281 15.9825C14.8508 15.6386 15.3048 15.1983 15.6488 14.6481C15.8276 14.3867 15.9652 14.1115 16.0478 13.8089L13.8466 13.4373C13.7778 13.4373 13.709 13.4511 13.654 13.4786C13.4889 13.5612 13.4201 13.74 13.4614 13.9051L14.3281 15.9825Z"
        fill="#323544"
      />
      <path
        d="M12.003 2.29395C12.1957 2.29395 12.3883 2.33518 12.5671 2.41772L19.5284 5.73328C19.8861 5.91212 20.1612 6.24231 20.2438 6.62756L21.9634 14.0978C22.0597 14.4968 21.9634 14.9095 21.7021 15.2259L16.887 21.2105C16.6393 21.5268 16.2541 21.7057 15.8552 21.7057H8.13722C7.73822 21.7057 7.35306 21.5268 7.10541 21.2105L2.29034 15.2259C2.0427 14.9095 1.94633 14.4968 2.02896 14.0978L3.74863 6.62756C3.84492 6.22857 4.1063 5.89838 4.46398 5.73328L11.4254 2.40406C11.6042 2.33526 11.8104 2.29395 12.003 2.29395ZM18.9643 13.5062C18.9506 13.5062 18.9368 13.5062 18.9368 13.4925C18.9231 13.4925 18.9094 13.4891 18.8956 13.4856C18.8819 13.4822 18.8681 13.4787 18.8543 13.4787C18.8421 13.477 18.8301 13.4753 18.8183 13.4735C18.737 13.4617 18.665 13.4513 18.5929 13.4513C18.5516 13.4513 18.5104 13.4513 18.4553 13.4374H18.4416C18.1527 13.4099 17.9188 13.3825 17.6986 13.3136C17.6024 13.2724 17.5748 13.2173 17.5473 13.1623C17.5473 13.1554 17.5438 13.152 17.5404 13.1486C17.537 13.1451 17.5335 13.1417 17.5335 13.1348L17.3547 13.0798C17.4392 12.4327 17.4066 11.7756 17.2584 11.1399C17.1082 10.499 16.8475 9.88916 16.488 9.33771L16.6256 9.21393V9.18645C16.6256 9.11764 16.6393 9.04884 16.6943 8.98004C16.8523 8.83523 17.048 8.71567 17.2815 8.57305C17.2921 8.5666 17.3027 8.5601 17.3135 8.55355C17.334 8.53983 17.3546 8.52953 17.3752 8.51923C17.3959 8.5089 17.4166 8.49856 17.4372 8.48475C17.5198 8.44352 17.5886 8.40229 17.6711 8.34723C17.6768 8.34152 17.6849 8.33582 17.6944 8.32913C17.7077 8.31971 17.7238 8.30833 17.7399 8.29225C17.7452 8.28696 17.7505 8.28369 17.755 8.2809C17.7622 8.27641 17.7674 8.27316 17.7674 8.26468C17.96 8.09959 18.0013 7.82446 17.8637 7.64553C17.7949 7.54924 17.6711 7.49427 17.5473 7.49427C17.4373 7.49427 17.341 7.5355 17.2447 7.6043L17.2172 7.63179C17.2034 7.63866 17.1931 7.64899 17.1828 7.65932C17.1724 7.66965 17.1621 7.67998 17.1484 7.68685L17.1471 7.68808C17.0789 7.75631 17.0242 7.81104 16.9695 7.87943C16.9608 7.88813 16.9521 7.89822 16.943 7.90881C16.9233 7.93169 16.9015 7.95694 16.8732 7.97572C16.6806 8.18213 16.5017 8.34723 16.3229 8.47101C16.2817 8.4985 16.2404 8.51232 16.1991 8.51232C16.1716 8.51232 16.1441 8.51232 16.1166 8.4985H16.0891L15.9239 8.60861C15.7451 8.41603 15.5525 8.25094 15.3599 8.08584C14.5306 7.43763 13.5326 7.04128 12.4846 6.94392L12.4708 6.76508L12.4433 6.73759C12.4383 6.73253 12.433 6.72747 12.4276 6.72231C12.3892 6.68535 12.3454 6.64325 12.3332 6.55876C12.3204 6.35375 12.3434 6.12492 12.3689 5.87225C12.3707 5.85357 12.3726 5.83476 12.3745 5.81583V5.80208C12.3745 5.76077 12.3883 5.70579 12.402 5.66448C12.4158 5.58201 12.4295 5.49938 12.4433 5.40309V5.27931C12.4433 5.03167 12.2507 4.82534 12.0169 4.82534C11.9067 4.82534 11.7967 4.88032 11.7142 4.96287C11.6317 5.04541 11.5904 5.15545 11.5904 5.27931V5.38935C11.5904 5.48564 11.6041 5.56819 11.6316 5.65073C11.639 5.6731 11.6425 5.69544 11.6462 5.71997C11.6494 5.74075 11.6528 5.76309 11.6591 5.78834V5.80208C11.6647 5.85842 11.6709 5.91361 11.677 5.96764C11.7006 6.17748 11.7223 6.36994 11.7004 6.54501C11.6884 6.62939 11.6446 6.67149 11.6062 6.70842C11.6008 6.71363 11.5955 6.71874 11.5904 6.72385L11.5629 6.75134L11.549 6.93018C11.3014 6.95767 11.0538 6.98515 10.8061 7.04021C9.74684 7.27411 8.81133 7.81071 8.08223 8.58104L7.94463 8.48475H7.91714C7.90339 8.48475 7.88963 8.48819 7.87586 8.49162C7.8621 8.49506 7.84833 8.4985 7.83459 8.4985C7.79328 8.4985 7.75204 8.48475 7.71073 8.45726C7.53189 8.33348 7.35305 8.15456 7.16047 7.94823C7.15177 7.93953 7.14307 7.92945 7.13393 7.91885C7.11419 7.89598 7.09241 7.87073 7.06418 7.85194C7.00912 7.78314 6.95406 7.72808 6.88525 7.65936C6.87954 7.65362 6.87146 7.6479 6.86199 7.6412C6.84867 7.63178 6.8326 7.62042 6.81653 7.6043C6.81128 7.59905 6.80603 7.59581 6.80155 7.59304C6.7943 7.58855 6.78905 7.58531 6.78905 7.57681C6.70381 7.50639 6.59691 7.4675 6.48634 7.46669C6.36248 7.46669 6.2387 7.52175 6.1699 7.61804C6.03229 7.79688 6.07361 8.07201 6.26619 8.23711C6.27306 8.23711 6.2765 8.24057 6.27993 8.24402C6.28337 8.24748 6.28681 8.25094 6.29368 8.25094C6.30742 8.25781 6.31775 8.26812 6.32808 8.27842C6.33841 8.28873 6.34874 8.29904 6.36248 8.30591C6.44503 8.36089 6.51383 8.4022 6.59638 8.44352C6.6377 8.45726 6.67893 8.48475 6.72024 8.51232C6.7305 8.51859 6.74068 8.52481 6.75079 8.53098C6.98483 8.6739 7.18105 8.79372 7.33931 8.9388C7.40811 9.00752 7.40811 9.07633 7.40811 9.14513V9.17262L7.54563 9.29648C7.53743 9.30878 7.52923 9.31987 7.52139 9.33046C7.50296 9.35538 7.48653 9.37759 7.47683 9.40652C6.78896 10.4934 6.52758 11.7728 6.70641 13.0385L6.52758 13.0935C6.52758 13.1004 6.52412 13.1039 6.52067 13.1073C6.51725 13.1108 6.51383 13.1142 6.51383 13.121C6.48634 13.176 6.44503 13.2311 6.36248 13.2723C6.15615 13.3411 5.90851 13.3687 5.61964 13.3962H5.60581C5.56458 13.3962 5.50952 13.3962 5.46829 13.4099C5.39621 13.4099 5.32414 13.4204 5.24291 13.4322C5.23111 13.4339 5.21912 13.4357 5.2069 13.4374C5.19317 13.4374 5.17943 13.4409 5.16569 13.4443C5.15192 13.4478 5.13815 13.4513 5.12435 13.4513C5.11061 13.4513 5.09687 13.4513 5.08304 13.465C4.8354 13.52 4.68405 13.7539 4.72536 13.9739C4.76668 14.1666 4.94551 14.2905 5.16559 14.2905C5.2069 14.2905 5.23439 14.2905 5.2757 14.2766C5.31694 14.2766 5.34442 14.2492 5.38566 14.2492C5.48203 14.2217 5.55083 14.1942 5.63338 14.1529C5.65391 14.146 5.67443 14.1358 5.69496 14.1255C5.71568 14.1151 5.73641 14.1048 5.75716 14.0979H5.77091C6.03229 14.0015 6.26619 13.919 6.48634 13.8915H6.51383C6.59082 13.8915 6.6439 13.9273 6.68415 13.9545C6.68706 13.9565 6.6899 13.9584 6.69267 13.9603C6.69954 13.9603 6.70298 13.9637 6.70641 13.9672C6.70985 13.9706 6.71329 13.974 6.72016 13.974L6.91283 13.9465C7.24302 14.9645 7.87582 15.8725 8.71504 16.5329C8.90762 16.6842 9.10021 16.808 9.30662 16.9319L9.22407 17.1107C9.22407 17.1176 9.22753 17.1211 9.23097 17.1245C9.2344 17.1279 9.23781 17.1313 9.23781 17.1382C9.2653 17.1932 9.29279 17.262 9.2653 17.3583C9.18284 17.5647 9.05897 17.771 8.90762 18.0049V18.0187C8.89384 18.0394 8.88005 18.0566 8.86627 18.0739C8.85256 18.091 8.83886 18.1082 8.82516 18.1287C8.78431 18.1798 8.75103 18.2308 8.71409 18.2875C8.70124 18.3072 8.68794 18.3276 8.67373 18.3489C8.65998 18.3626 8.64624 18.3901 8.63249 18.4177C8.63249 18.4314 8.61875 18.4452 8.61875 18.4452C8.50871 18.6791 8.59126 18.9405 8.79759 19.0367C8.85256 19.0642 8.90762 19.0781 8.96268 19.0781C9.12778 19.0781 9.29287 18.9679 9.37542 18.8166C9.37542 18.8028 9.38916 18.7891 9.38916 18.7891C9.40291 18.7616 9.41665 18.7341 9.4304 18.7203C9.45798 18.656 9.47327 18.604 9.48857 18.5519C9.49619 18.526 9.50381 18.5001 9.51294 18.4727L9.55426 18.3489C9.5654 18.317 9.57617 18.2859 9.5867 18.2555C9.66721 18.0232 9.73368 17.8313 9.84313 17.661C9.88661 17.5957 9.9388 17.5735 9.98592 17.5534C9.99837 17.5481 10.0105 17.5429 10.022 17.5371C10.0357 17.5371 10.0357 17.5371 10.0495 17.5234L10.1458 17.3446C10.7512 17.5785 11.4115 17.7022 12.0718 17.7022C12.4708 17.7022 12.8836 17.661 13.2688 17.5647C13.5112 17.5105 13.7501 17.4416 13.9842 17.3583L14.0666 17.5097C14.0805 17.5097 14.0805 17.5097 14.0942 17.5234C14.163 17.5371 14.218 17.5647 14.273 17.6473C14.3744 17.8247 14.4524 18.0372 14.5394 18.2739C14.5468 18.2941 14.5543 18.3145 14.5619 18.3351V18.3489L14.6032 18.4727C14.6124 18.5002 14.62 18.5277 14.6277 18.5552C14.6429 18.6102 14.6582 18.6653 14.6857 18.7203C14.6926 18.734 14.6994 18.7443 14.7063 18.7546C14.7132 18.7649 14.7201 18.7753 14.727 18.7891C14.727 18.8028 14.7408 18.8166 14.7408 18.8166C14.8233 18.9817 14.9884 19.0781 15.1535 19.0781C15.2085 19.0781 15.2636 19.0642 15.3186 19.0367C15.4149 18.9818 15.4974 18.8991 15.525 18.7891C15.5525 18.6791 15.5525 18.5552 15.4975 18.4452C15.4975 18.4383 15.494 18.4349 15.4906 18.4314C15.4871 18.428 15.4837 18.4245 15.4837 18.4177C15.4699 18.3902 15.4562 18.3627 15.4424 18.3489C15.4011 18.2663 15.3462 18.1975 15.2911 18.1287C15.2774 18.1081 15.2636 18.0909 15.2499 18.0737C15.2361 18.0566 15.2224 18.0394 15.2086 18.0188V18.0049C15.2002 17.992 15.1919 17.9791 15.1836 17.9663C15.0421 17.7481 14.9158 17.5533 14.8509 17.3583C14.8291 17.2821 14.8418 17.2318 14.8548 17.18C14.8583 17.1663 14.8617 17.1526 14.8646 17.1382C14.8646 17.1314 14.8681 17.1279 14.8715 17.1245C14.8749 17.1211 14.8784 17.1176 14.8784 17.1107L14.8096 16.9457C15.5387 16.5192 16.1578 15.9138 16.6256 15.1709C16.8732 14.7857 17.0658 14.3592 17.2033 13.9327L17.3684 13.9602C17.3754 13.9602 17.3788 13.9567 17.3823 13.9533C17.3857 13.9499 17.3891 13.9465 17.3959 13.9465C17.4097 13.9396 17.4226 13.9319 17.4355 13.9241C17.4742 13.9009 17.5129 13.8777 17.5749 13.8777H17.6023C17.8225 13.9052 18.0563 13.9877 18.3178 14.0841H18.3315C18.3521 14.0909 18.3727 14.1012 18.3933 14.1115C18.4139 14.1218 18.4346 14.1322 18.4553 14.139C18.5378 14.1804 18.6067 14.2078 18.7029 14.2354C18.7167 14.2354 18.7304 14.2388 18.7442 14.2423C18.7579 14.2457 18.7717 14.2492 18.7855 14.2492C18.7992 14.2492 18.813 14.2492 18.8267 14.2629C18.868 14.2766 18.8955 14.2766 18.9368 14.2766C19.1432 14.2766 19.322 14.1391 19.3771 13.9603C19.3771 13.7952 19.2257 13.575 18.9781 13.5062H18.9643Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_computedHostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgKubernetesIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}

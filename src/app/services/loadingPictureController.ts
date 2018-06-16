declare var $: any;

export class LoadingPictureController {

  public static startLoadingPicture() {
    $('#spinnerball').removeClass();
  }

  public static stopLoadingPicture() {
    $('#spinnerball').addClass('no_display');
  }

}

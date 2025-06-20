export class IncomesView {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;

        this.deleteBtn();
    }

    deleteBtn() {
        let modal = $('#modal');

       $('.btn-delete').click(function () {
           modal.show();
           $('body').css('background', 'gray');

           $('.btn-close-popup').click(function () {
               modal.hide();
               $('body').css('background', 'white');

           });
       })
    }
}
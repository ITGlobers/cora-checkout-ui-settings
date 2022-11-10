let termsAndConditions = {
  init: function () {
    const orderForm = Object.assign(window.vtexjs.checkout.orderForm)

    $('.container.container-main').prepend(`<h1 style="font-size:20px !important" class="cart-header">Cosul tau
    (${orderForm.items.length} produs)</h1>`)

    const summaryTemplate = $('.summary-template-holder')

    $('.v-custom-product-item-wrap .product-price').attr('id', 'cart_product--price')
    // Remove all visible table headings
    $('.table.cart-items').find('.product').remove()
    $('.table.cart-items').find('.product-price').remove()
    $('.table.cart-items').find('.quantity').remove()

    $('input#cart-coupon').attr('placeholder', 'XXXXXXX')

    // Add title to cupon section
    $('.forms.coupon-column').prepend(`<div class="coupon_title"><h1>Cod promotional</h1></div>`)

    // Adding terms and conditions section
    summaryTemplate.append(`<div class="terms_and_conditions">
    <div class="main_column">
      <div class="text_wrapper">
        <h3 class="termns_title"><strong>Informatii de retinut:</strong></h3>
        <ul class="terms_list">
        <li><strong>Subtotalul din cos trebuie sa depaseasca cu 50 de lei valoarea totala a reducerilor acordate</strong> pentru a finaliza comanda.</li>
        <li>Comanda minima este de <strong>50 lei</strong>. Pentru plata online sunt acceptate cardurile <strong>Edenred Ticket Restaurant, Edenred cadou si Up Romania</strong></li>
        <li><strong><a tabindex="0" href="https://www.cora.ro/excluderi-promotii/" target="_blank" rel="noopener">Categorii de produse excluse din promotiile online</a>: alcool</strong> (alcoolul definit ca fiind bauturile spirtoase; nu intra in aceasta categorie vinul si berea), <strong>tutun,</strong> <strong>carduri cadou, servicii, taxe, formule de lapte pentru sugari de pana la 12 luni, cereale pentru sugari de pana la 6 luni.</strong></li>
        <li><strong>Recomandam clientilor care au facturi pe persoana juridica sa utilizeze plata cu cardul pentru a evita emiterea chitantelor in mod incorect.</strong></li>
        <li>Pentru serviciul de livrare la domiciliu, limita este de <strong>100kg/comanda,</strong> din care maxim <strong>36l de apa</strong>, iar <strong>taxa de transport este de 20 lei</strong>.</li>
        <li>Odata finalizata comanda, nu poti reveni asupra ei pentru a schimba modalitatea de plata/ridicare/livrare) sau pentru a adauga/elimina produse.</li>
        <li><strong>Poti anula direct din contul tau comanda plasata</strong> si reface o alta comanda cu un singur click.</li>
        <li><strong>Reducerea utilizata nu revine automat in cont in cazul anularii comenzii</strong>. Pentru suport, te rugam sa ne scrii pe comenzionline@cora.ro.</li>
        <li>Atentie! Din momentul plasarii comenzii pana in momentul in care comanda este pregatita pentru ridicare/livrare, pot surveni modificari legate de disponibilitatea unor produse deoarece stocurile acestora nu sunt rezervate.</li>
        </ul>
      </div>
      <div class="button_wrapper">
        <div class="button_container flex-justify-center">
          <a class="terms_action_btn" href="https://www.cora.ro/termeni-si-conditii">
            <span>Detalii aici</span>
          </a>
        </div>
      </div>
    </div>
    </div>`)
  },
}

let emptyCart = {
  init: function () {
    const tableHead = $('.cart-items thead tr')

    // Create icon to remove all items
    if (window?.vtexjs?.checkout?.orderForm?.items.length > 0) {
      tableHead.append(`
      <th class="remove-all">
        <div class="icon-container" style="display:flex">
          <span class="trash-icon"></span><span class="removeall-text">Sterge tot cosul</span>
        </div>
      <th>`)

      $('div.icon-container').on('click', function () {
        window.vtexjs.checkout.removeAllItems()
      })
    }
  },
}

$(document).on('ready', function () {
  if (window.location.hash === '#/cart') {
    setTimeout(() => {
      termsAndConditions.init()
      emptyCart.init()
    }, 1000)
  }
})

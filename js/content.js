

const doc = document;
const  numero = 'https://wa.me/573046295775?text=Buenas, estoy interesado/a en una cuenta';

const preciosNetflix =  
[ { 'unaPantalla': '1 Pantalla: $10.000',
    'dosPantallas': '2 Pantallas: $20.000',
    'tresPantallas': '3 Pantallas: $30.000',
    'cuatroPantallas': '4 Pantallas: $35.000',
    'meses': 'PROMOCION <br> 3 Meses 1 Pantalla: $20.000' } ]

const preciosDisney =  
    [ { 'unaPantalla': '1 Pantalla: $10.000',
        'dosPantallas': '2 Pantallas: $15.000',
        'tresPantallas': '3 Pantallas: $20.000',
        'meses': 'PROMOCION <br> 3 Meses 1 Pantalla: $20.000' } ]

const preciosHbo =  
    [ { 'unaPantalla': '1 Pantalla: $10.000',
        'dosPantallas': '2 Pantallas: $15.000',
        'tresPantallas': '3 Pantallas: $20.000',
        'meses': 'PROMOCION <br> 3 Meses 1 Pantalla: $20.000' } ]
 
const preciosPrime =  
    [ { 'unaPantalla': '1 Pantalla: $10.000',
            'dosPantallas': '2 Pantallas: $15.000',
            'tresPantallas': '3 Pantallas: $20.000',
            'meses': 'PROMOCION <br> 3 Meses 1 Pantalla: $20.000' } ]  

const preciosStars =  
    [ { 'unaPantalla': '1 Pantalla: $10.000',
        'dosPantallas': '2 Pantallas: $15.000',
        'tresPantallas': '3 Pantallas: $20.000',
        'meses': 'PROMOCION <br> 3 Meses 1 Pantalla: $20.000' } ]
        

const preciosCrunchy =  
    [ { 'Completa': 'Completa: $15.000',
    'meses': 'PROMOCION <br> 3 Meses completa: $25.000'} ]  

const preciosParamount =  
    [ { 'Completa': 'Completa: $15.000',
        'meses': 'PROMOCION <br> 3 Meses Completa: $25.000'} ]  

const preciosYoutube =  
    [ { 'Completa': 'Completa: $13.000',
        'meses': 'PROMOCION <br> 3 Meses completa: $30.000'  } ]        


const preciosSpotify =  
[ { 'Completa': 'Completa: $10.000'
    ,'meses': 'PROMOCION <br> 3 Meses completa: $20.000'  } ]  

const preciosDeezer =  
[ { 'Completa': 'Completa: $10.000',
    'meses': 'PROMOCION <br> 3 Meses completa: $20.000'        } ]        
          
          


let netflixBox = doc.getElementById('netflix');
let disneyBox = doc.getElementById('disney');
let hboBox = doc.getElementById('hbo');
let primeBox = doc.getElementById('prime');
let starsBox = doc.getElementById('star');
let crunchyBox = doc.getElementById('crunchy');
let paramountBox = doc.getElementById('paramount');
let youtubeBox = doc.getElementById('youtube');
let spotifyBox = doc.getElementById('spotify');
let deezerBox = doc.getElementById('deezer');


 const  cargarPeliculas =  () => {
 
    preciosNetflix.forEach(netflix => {
        netflixBox.innerHTML += `
        <div class="card" style="width: 100%; height: 100%; background-image: url(img/papel.jpg); background-position: center; background-size: cover;">
        <div class="card-header border-0">
          <img src="img/n.png" class="card-img-top" alt="...">
        </div>
        <div class="card-footer text-center border-0">
          <!-- Collapse -->
          <p>  <a class="btn btn-outline-primary" style="font-weight: bold;" data-bs-toggle="collapse" href="#ne" role="button" aria-expanded="false" aria-controls="collapseExample">
              Plan Mensual </a> </p>

          <div class="collapse" id="ne">
            <div class="card card-body" style="background-image: url(img/papel.jpg);">

              <!-- Table -->
              <table class="table text-center">
                <thead id="precio_netflix">
                    <tr> <th  scope="col">${netflix.unaPantalla}</th></tr>
                    <tr> <th  scope="col">${netflix.dosPantallas}</th></tr>
                    <tr> <th  scope="col">${netflix.tresPantallas}</th></tr>
                    <tr> <th  scope="col">${netflix.cuatroPantallas}</th></tr>
                    <tr class="promo"> <th  scope="col">${netflix.meses}</th></tr>
                </thead>
              </table>

            </div>
          </div>
         </div>
         <div class="card-footer text-center border-0">
          
            <a class="btn btn-success" style="text-decoration: none; width: 100px;" href="${numero}"  target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
            </a>
          
        </div>
      </div>`
      
    });
    
    preciosDisney.forEach(disney => {
       disneyBox.innerHTML = `
       <div class="card" style="width: 100%; height: 100%; background-image: url(img/papel.jpg); background-position: center; background-size: cover;">
       <div class="card-header border-0">
         <img src="img/d.png" class="card-img-top" alt="...">
       </div>
       <div class="card-footer text-center border-0">
         <!-- Collapse -->
         <p><a class="btn btn-outline-primary" style="font-weight: bold;" data-bs-toggle="collapse" href="#di" role="button" aria-expanded="false" aria-controls="collapseExample">
             Plan Mensual</a>
          </p> <div class="collapse" id="di">
           <div class="card card-body" style="background-image: url(img/papel.jpg);">
             <!-- Table -->
             <table  class="table text-center">
               <thead>
               <tr> <th  scope="col">${disney.unaPantalla}</th></tr>
               <tr> <th  scope="col">${disney.dosPantallas}</th></tr>
               <tr> <th  scope="col">${disney.tresPantallas}</th></tr>
               <tr class="promo"> <th  scope="col">${disney.meses}</th></tr>
               </thead>
             </table>
           </div>
         </div>
       </div>
       <div class="card-footer text-center border-0">
           <a class="btn btn-success" style="text-decoration: none; width: 100px;" href="${numero}"  target="_blank">
             <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
               <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
             </svg>
           </a>
         
       </div>
     </div>
       `
      
    });

    preciosHbo.forEach(hbo => {
        hboBox.innerHTML = `
        <div class="card" style="width: 100%; height: 100%; background-image: url(img/papel.jpg); background-position: center; background-size: cover;">
        <div class="card-header border-0">
          <img src="img/h.png" class="card-img-top" alt="...">
        </div>
        <div class="card-footer text-center border-0">
          <!-- Collapse -->
          <p><a class="btn btn-outline-primary" style="font-weight: bold;" data-bs-toggle="collapse" href="#hb" role="button" aria-expanded="false" aria-controls="collapseExample">
              Plan Mensual</a>
           </p> <div class="collapse" id="hb">
            <div class="card card-body" style="background-image: url(img/papel.jpg);">
              <!-- Table -->
              <table  class="table text-center">
                <thead>
                <tr> <th  scope="col">${hbo.unaPantalla}</th></tr>
                <tr> <th  scope="col">${hbo.dosPantallas}</th></tr>
                <tr> <th  scope="col">${hbo.tresPantallas}</th></tr>
                <tr class="promo"> <th  scope="col">${hbo.meses}</th></tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
        <div class="card-footer text-center border-0">
            <a class="btn btn-success" style="text-decoration: none; width: 100px;" href="${numero}"  target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
            </a>
          
        </div>
      </div>
        `
       
     });

     preciosPrime.forEach(prime => {
         primeBox.innerHTML = `
         <div class="card" style="width: 100%; height: 100%; background-image: url(img/papel.jpg); background-position: center; background-size: cover;">
         <div class="card-header border-0">
           <img src="img/pv.png" class="card-img-top" alt="...">
         </div>
         <div class="card-footer text-center border-0">
           <!-- Collapse -->
           <p>
             <a class="btn btn-outline-primary" style="font-weight: bold;" data-bs-toggle="collapse" href="#pv" role="button" aria-expanded="false" aria-controls="collapseExample">
               Plan Mensual
             </a>
            
           </p>
           <div class="collapse" id="pv">
             <div class="card card-body" style="background-image: url(img/papel.jpg);">

              
               <table  class="table text-center">
                 <thead>
                  
                 <tr> <th  scope="col">${prime.unaPantalla}</th></tr>
                 <tr> <th  scope="col">${prime.dosPantallas}</th></tr>
                 <tr> <th  scope="col">${prime.tresPantallas}</th></tr>
                 <tr class="promo"> <th  scope="col">${prime.meses}</th></tr>
                 
                 </thead>
               </table>

             </div>
           </div> 
         </div>

         <div class="card-footer text-center border-0">
           
             <a class="btn btn-success" style="text-decoration: none; width: 100px;" href="${numero}" target="_blank">
               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                 <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
               </svg>
             </a>
           
         </div>
       </div>
         `
     })
  
     preciosStars.forEach(stars => {
        starsBox.innerHTML = `
        <div class="card" style="width: 100%; height: 100%; background-image: url(img/papel.jpg); background-position: center; background-size: cover;">
        <div class="card-header border-0">
          <img src="img/s.png" class="card-img-top" alt="...">
        </div>
        <div class="card-footer text-center border-0">
          <!-- Collapse -->
          <p>
            <a class="btn btn-outline-primary" style="font-weight: bold;" data-bs-toggle="collapse" href="#pv" role="button" aria-expanded="false" aria-controls="collapseExample">
              Plan Mensual
            </a>
           
          </p>
          <div class="collapse" id="pv">
            <div class="card card-body" style="background-image: url(img/papel.jpg);">

             
              <table  class="table text-center">
                <thead>
                 
                <tr> <th  scope="col">${stars.unaPantalla}</th></tr>
                <tr> <th  scope="col">${stars.dosPantallas}</th></tr>
                <tr> <th  scope="col">${stars.tresPantallas}</th></tr>
                <tr class="promo"> <th  scope="col">${stars.meses}</th></tr>
                </thead>
              </table>

            </div>
          </div> 
        </div>

        <div class="card-footer text-center border-0">
          
            <a class="btn btn-success" style="text-decoration: none; width: 100px;" href="${numero}"  target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
            </a>
          
        </div>
      </div>
        `
    })

    preciosCrunchy.forEach(crunchy => {
        crunchyBox.innerHTML = `
        <div class="card" style="width: 100%; height: 100%; background-image: url(img/papel.jpg); background-position: center; background-size: cover;">
                          <div class="card-header border-0">
                            <img src="img/cr.png" class="card-img-top" alt="...">
                          </div>
                          <div class="card-footer text-center border-0">
                            <!-- Collapse -->

                            <p>
                              <a class="btn btn-outline-primary" style="font-weight: bold;" data-bs-toggle="collapse" href="#cr" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Plan Mensual
                              </a>
                             
                            </p>
     
                            <div class="collapse" id="cr">
                              <div class="card card-body" style="background-image: url(img/papel.jpg);">

                                <!-- Table -->
                                <table  class="table text-center">
                                  <thead>
                                    <tr> <th scope="col">${crunchy.Completa}</th>  </tr>
                                    <tr class="promo"> <th  scope="col">${crunchy.meses}</th></tr>
                                    
                                  </thead>
                                </table>

                              </div>
                            </div>
                           
                            
                            
                          </div>

                          <div class="card-footer text-center border-0">
                            
                              <a class="btn btn-success" style="text-decoration: none; width: 100px;" href="${numero}"  target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                </svg>
                              </a>
                            
                          </div>
                        </div>
        `
    })
    
    preciosParamount.forEach(paramount => {
        paramountBox.innerHTML = `
        <div class="card" style="width: 100%; height: 100%; background-image: url(img/papel.jpg); background-position: center; background-size: cover;">
                          <div class="card-header border-0">
                            <img src="img/pa.png" class="card-img-top" alt="...">
                          </div>
                          <div class="card-footer text-center border-0">
                            <!-- Collapse -->

                            <p>
                              <a class="btn btn-outline-primary" style="font-weight: bold;" data-bs-toggle="collapse" href="#pa" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Plan Mensual
                              </a>
                             
                            </p>
     
                            <div class="collapse" id="pa">
                              <div class="card card-body" style="background-image: url(img/papel.jpg);">

                                <!-- Table -->
                                <table  class="table text-center">
                                  <thead>
                                    <tr> <th scope="col">${paramount.Completa}</th>  </tr>
                                    <tr class="promo"> <th  scope="col">${paramount.meses}</th></tr>
                                    
                                  </thead>
                                </table>

                              </div>
                            </div>
                           
                            
                            
                          </div>

                          <div class="card-footer text-center border-0">
                            
                              <a class="btn btn-success" style="text-decoration: none; width: 100px;" href="${numero}"  target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                </svg>
                              </a>
                            
                          </div>
                        </div>
        `
    })

    preciosYoutube.forEach(youtube => {
        youtubeBox.innerHTML += `
        <div class="card" style="width: 100%; height: 100%; background-image: url(img/papel.jpg); background-position: center; background-size: cover;">
                          <div class="card-header border-0">
                            <img src="img/yt.png" class="card-img-top" alt="...">
                          </div>
                          <div class="card-footer text-center border-0">
                            <!-- Collapse -->
                            <p>
                              <a class="btn btn-outline-primary" style="font-weight: bold;" data-bs-toggle="collapse" href="#yt" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Plane mensual
                              </a>
                             
                            </p>
                            <div class="collapse" id="yt">
                              <div class="card card-body" style="background-image: url(img/papel.jpg);">

                               
                                <table  class="table text-center">
                                  <thead>
                                  <tr> <th scope="col">${youtube.Completa}</th>  </tr>
                                  <tr class="promo"> <th  scope="col">${youtube.meses}</th></tr>
                                  
                                  </thead>
                                </table>

                              </div>
                            </div> 
                          </div>

                          <div class="card-footer text-center border-0">
                            
                              <a class="btn btn-success" style="text-decoration: none; width: 100px;" href="${numero}"  target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                </svg>
                              </a>
                            
                          </div>
                        </div>`
    })

    preciosSpotify.forEach(spotify => {
        spotifyBox.innerHTML += `
        <div class="card" style="width: 100%; height: 100%; background-image: url(img/papel.jpg); background-position: center; background-size: cover;">
        <div class="card-header border-0">
          <img src="img/sfp.png" class="card-img-top" alt="...">
        </div>
        <div class="card-footer text-center border-0">
          <!-- Collapse -->

          <p>
            <a class="btn btn-outline-primary" style="font-weight: bold;" data-bs-toggle="collapse" href="#sfp" role="button" aria-expanded="false" aria-controls="collapseExample">
              Plan Mensual
            </a>
           
          </p>

          <div class="collapse" id="sfp">
            <div class="card card-body" style="background-image: url(img/papel.jpg);">

              <!-- Table -->
              <table  class="table text-center">
                <thead>
                <tr> <th scope="col">${spotify.Completa}</th>  </tr>
                <tr class="promo"> <th  scope="col">${spotify.meses}</th></tr>
                </thead>
              </table>

            </div>
          </div>
         
          
          
        </div>

        <div class="card-footer text-center border-0">
          
            <a class="btn btn-success" style="text-decoration: none; width: 100px;" href="${numero}"  target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
            </a>
          
        </div>
      </div>
        `
    })
    
    preciosDeezer.forEach(deezer => {
        deezerBox.innerHTML += `
        <div class="card" style="width: 100%; height: 100%; background-image: url(img/papel.jpg); background-position: center; background-size: cover;">
                          <div class="card-header border-0">
                            <img src="img/dz.png" class="card-img-top" alt="...">
                          </div>
                          <div class="card-footer text-center border-0">
                            <!-- Collapse -->

                            <p>
                              <a class="btn btn-outline-primary" style="font-weight: bold;" data-bs-toggle="collapse" href="#dz" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Plan mensual
                              </a>
                             
                            </p>
     
                            <div class="collapse" id="dz">
                              <div class="card card-body" style="background-image: url(img/papel.jpg);">

                                <!-- Table -->
                                <table  class="table text-center">
                                  <thead>
                                  <tr> <th scope="col">${deezer.Completa}</th>  </tr>
                                  <tr class="promo"> <th  scope="col">${deezer.meses}</th></tr>
                                    
                                  </thead>
                                </table>

                              </div>
                            </div>
                           
                            
                            
                          </div>

                          <div class="card-footer text-center border-0">
                            
                              <a class="btn btn-success" style="text-decoration: none; width: 100px;" href="${numero}"  target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                </svg>
                              </a>
                            
                          </div>
                        </div>
        `
    })
    
    
    

 }

 
    
    

    window.addEventListener('DOMContentLoaded', (event) => {
        cargarPeliculas();
     
    });

// doOnLoad
addEventListener("desiteload", async function (event) {
    var heute = new Date().toLocaleString();

    // spApiModell = await desiteAPI.getRootNodeByModel((await desiteAPI.getModelListByName('SP_API', 'res'))[0]);
    console.log( window.localStorage.getItem('user'),
    window.localStorage.getItem('token')    )
    handleRedirectInfoHub() 

    if(!window.location.href.toString().includes('swienholz')){
        await loginInfoHub()

    } else {
        await desiteAPI.redirectUrl('https://swienholz.github.io/desite.modules/indexNEW.html','file:///C:/BIM4CE/BIM4CE/desite.modules/indexNEW.html') 
    }

   console.log( window.localStorage.getItem('user'),
   window.localStorage.getItem('token')    )

});

$(document).ready(function() {
    $('.sensor-type').click(function() {
        $('.sensor-type, .sensor-item').removeClass('highlight-type highlight-sensor');
        $(this).addClass('highlight-type');
        $(this).find('.sensor-item').addClass('highlight-type');
    });
    
    $('.sensor-item').click(function(event) {
        event.stopPropagation();
        $('.sensor-type, .sensor-item').removeClass('highlight-type highlight-sensor');
        $(this).addClass('highlight-sensor');
        $('#sensor-info').text('Details about sensor ' + $(this).data('id'));
    });
});

async function loginInfoHub() {
	window.location.href = "https://swienholz.github.io/desite.modules/indexNEW.html?token=" + sessionStorage.getItem("token");

}
// handleRedirectInfoHub() 
function handleRedirectInfoHub() {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    // const token = params.get("token");

    var user  = $('#iptUser').val()
    // var token = JSON.parse(response.responseText)['token']
    console.log(JSON.stringify(params), token)
    console.log(window.location.search);

    // var queryString = window.location.search;
        
      var  urlParams = new URLSearchParams(queryString);
        
        var redir   = urlParams.get("redirect")
        var userid  = urlParams.get("userid")
        
        // if( redir != undefined ) {
        //     service_url.redirect = redir
        // } else {
        //     service_url.redirect = null
        // }
        
        
        //
        // if user was sent in URL set user to input field ...

        if ( userid == null || userid == '' ) {
            userid = ''            
        } 
        
        console.log("user id: " + userid )

       
                
        user  = window.localStorage.getItem('user')
       var token = window.localStorage.getItem('token')   

        console.log(JSON.stringify(window.sessionStorage))

        console.log(window.location.href);

    if (token) {
        // Token speichern
        var sessionStorage
        sessionStorage.setItem('accessToken', token);
        sessionStorage.setItem("user", params.get("user_id"));

        // Token aus der URL entfernen
        params.delete('token');
        params.delete("user_id");

        // URL ohne Token aktualisieren
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.replaceState({}, document.title, newUrl);

        // ✅ Ändere die URL auf den lokalen Server
        window.location.href = "https://swienholz.github.io/desite.modules/indexNEW.html";
    }
}

function getTokenFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("token");
}

const token = getTokenFromUrl();
if (token) {
    console.log('token',token)
    sessionStorage.setItem("token", token); // Speichert den Token wieder im sessionStorage
}

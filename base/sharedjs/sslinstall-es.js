//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/sslinstall.js
// Generated: /usr/local/cpanel/base/sharedjs/sslinstall-es.js
// Module:    legacy_shared/sslinstall-es
// Locale:    es
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"A user-defined description for the certificate.":"Una descripción definida por el usuario para el certificado.","Cancel":"Cancelar","Certificate":"Certificado","Certificate Authority Bundle":"Paquete de entidad de certificación","Certificates that do not have a domain associated with your account are not listed here.":"Los certificados que no tienen un dominio asociado a su cuenta no figuran aquí.","Choose a certificate to install.":"Elegir un certificado para instalar.","Choose a domain.":"Elija un dominio.","Choose a service.":"Elija un servicio.","Choose the account or Apache domain that contains the desired certificate to install. Then, select the certificate.":"Elija la cuenta o el dominio de Apache que contenga el certificado que desea instalar. Luego, seleccione el certificado.","Description":"Descripción","Domain":"Dominio","Domain names on the certificate.":"Nombres de dominio en el certificado.","Domains":"Dominios","Enter a valid IP address.":"Escriba una dirección IP válida.","Expiration":"Vencimiento","For more information, read our [output,url,_1,SSL Installation Workflow] documentation.":"For more information, read our [output,url,_1,SSL Installation Workflow] documentation.","Hide":"Ocultar","IP":"IP","Installing …":"Instalando…","Issuer":"Emisor","Issuer organization name.":"Nombre de la organización del emisor.","Key":"Clave","Loading certificates for “[output,strong,_1]” …":"Cargando certificados para “[output,strong,_1]”…","Loading installed Apache certificates …":"Cargando certificados Apache instalados…","OK":"Aceptar","Provide or retrieve a certificate.":"Proporcione o recupere un certificado.","Provide or retrieve a key.":"Proporcione o recupere una clave.","SSL Certificate List":"Lista de Certificado SSL","SSL Certificate Successfully Updated":"Se actualizó correctamente el certificado SSL.","SSL Host Successfully Installed":"Se instaló correctamente el anfitrión SSL.","SSL is installed; “[_1]” ([numerate,_2,alias,aliases] [list_and,_3]) is primary.":"SSL está instalado; “[_1]” ([numerate,_2,alias,alias] [list_and,_3]) es el primario.","SSL is installed; “[_1]” is primary.":"SSL está instalado; “[_1]” es el primario.","Select a certificate below:":"Seleccione un certificado más abajo:","Self-Signed":"Autofirmado","Service":"Servicio","Show":"Mostrar","The CA bundle does not match the certificate.":"El paquete de CA no coincide con el certificado.","The CA bundle is invalid.":"El paquete de CA no es válido.","The IP address “[_1]” is not available, or you do not have permission to use it.":"La dirección IP “[_1]” no está disponible o no tiene permiso para usarla.","The SSL certificate also supports [numerate,_1,this domain,these domains], but [numerate,_1,this domain does,these domains do] not refer to the SSL website mentioned above:":"El certificado SSL también admite [numerate,_1,este dominio,estos dominios], pero [numerate,_1,este dominio hace,estos dominios hacen] no refiere al sitio web SSL que se mencionó anteriormente:","The SSL website is also accessible via [numerate,_1,this domain,these domains], but the certificate does not support [numerate,_1,it,them]. Web browsers will show a warning when accessing [numerate,_1,this domain,these domains] via HTTPS:":"También se puede acceder al sitio web SSL a través de [numerate,_1,este dominio,estos dominios], pero el certificado no admite [numerate,_1,esto,ellos]. Los navegadores web mostrarán una alerta cuando accedan a [numerate,_1,este dominio,estos dominios] a través de HTTPS:","The SSL website is now active and accessible via HTTPS on [numerate,_1,this domain,these domains]:":"El sitio web SSL ahora está activo y se puede acceder a través de HTTPS en [numerate,_1,este dominio,estos dominios]:","The certificate does not match your selected domain.":"El certificado no coincide con el dominio seleccionado.","The certificate information could not be retrieved because of an error: [_1]":"La información del certificado no pudo recuperarse debido a un error: [_1]","The certificate is not valid.":"El certificado no es válido.","The certificate list could not be retrieved because of an error: [_1]":"La lista de certificado no pudo recuperarse debido a un error: [_1]","The certificate’s expiration date":"La fecha de vencimiento del certificado","The key does not match the certificate.":"La clave no coincide con el certificado.","The key is invalid.":"La clave no es válida.","The lookup failed because of an error: [_1]":"Falló la búsqueda debido a un error: [_1]","This SSL certificate was already installed.":"Este certificado SSL ya se instaló.","This account does not have any installable certificates.":"Esta cuenta no tiene ningún certificado instalable.","This is not a valid domain.":"Este no es un dominio válido.","To give website clients the best experience, ensure that each [asis,SSL] website’s certificate matches every domain on the website.":"To give website clients the best experience, ensure that each [asis,SSL] website’s certificate matches every domain on the website.","Use Certificate":"Utilice el certificado","We recommend that users manage individual subdomains (e.g., “[_1]”, “[_2]”) instead of a single wildcard subdomain (e.g., “[_3]”).":"Recomendamos que los usuarios administren varios subdominios individuales (por ejemplo, “[_1]”, “[_2]”) en vez de un solo subdominio comodín (por ejemplo, “[_3]”).","When you install a valid certificate onto a website, the system also configures email, calendar, web disk, and [asis,cPanel]-related services to use that certificate for all of the website’s domains that match the certificate. Requests to these services from [asis,SNI]-enabled clients via the matching domains will receive the installed certificate.":"When you install a valid certificate onto a website, the system also configures email, calendar, web disk, and [asis,cPanel]-related services to use that certificate for all of the website’s domains that match the certificate. Requests to these services from [asis,SNI]-enabled clients via the matching domains will receive the installed certificate.","You can manage all of your saved certificates on the [output,url,_1,“Certificates” page].":"Puede administrar todos los certificados guardados en la [output,url,_1,página “Certificados”].","You have successfully configured SSL.":"Configuró SSL correctamente.","You have successfully updated the SSL website’s certificate.":"Actualizó el certificado SSL del sitio web correctamente."};

    if (!this.LEXICON) {
        this.LEXICON = {};
    }

    for(var item in newLex) {
        if(newLex.hasOwnProperty(item)) {
            var value = newLex[item];
            if (typeof(value) === "string" && value !== "") {
                // Only add it if there is a value.
                this.LEXICON[item] = value;
            }
        }
    }
})();
//~~END-GENERATED~~
let button = document.getElementById("obter-url");

button.addEventListener("click", obtendoURL);

function obtendoURL(){
    
    let resultadoURL = document.querySelector(".made-url");

    let urlSite = document.getElementById('url-site').value;
    let campaignSource = document.getElementById('campaign-source').value;
    let campaignMedium = document.getElementById('campaign-medium').value;
    let campaignName = document.getElementById('campaign-name').value

    const regex = /\s/g;
    const regex2 =  /\b\w/g;
    campaignName = campaignName.replace(regex, "+");
    campaignName = campaignName.replace(regex2, function(match){
        return match.toUpperCase()
    })
   
    resultadoURL.innerHTML = `https://${urlSite}?utm_source=%5BNZ%5D+${campaignSource}&utm_medium=${campaignMedium}&utm_campaign=${campaignName}`
}





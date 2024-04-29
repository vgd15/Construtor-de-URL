let copyButton = document.querySelector(".copy-button");
copyButton.addEventListener("click", copyText);

document.getElementById('campaign-name').addEventListener('change', obtendoURLOuvinte)

function obtendoURLOuvinte(){
    obtendoURL()
}

function obtendoURL() {

    var resultadoURL = document.querySelector(".made-url");
    var urlSite = document.getElementById('url-site').value;
    var campaignSource = document.getElementById('campaign-source').value;
    var campaignMedium = document.getElementById('campaign-medium').value;
    var campaignName = document.getElementById('campaign-name').value;
    var painel = document.querySelector(".painel-url")
    var textoFooter = document.querySelector(".text-footer")


    if(urlSite != "" && campaignSource != "" && campaignMedium != "" && campaignName !=  "" ){

        const regex = /\s/g;
        const regex2 =  /\b\w/g;
        const regex3 = /[\u0300-\u036f]/g
    
        campaignName = campaignName.replace(regex, "+");
        campaignName = campaignName.normalize("NFD").replace(regex3,"");
        campaignName = campaignName.replace(regex2, function(match){
            return match.toUpperCase()
        }) 
        painel.classList.add("active");
        textoFooter.classList.add("none");
        resultadoURL.innerHTML = `${urlSite}?utm_source=${campaignSource}&utm_medium=${campaignMedium}&utm_campaign=%5BNZ%5D+${campaignName}`
        limparCampos();
    }else{
        alert("Preencha todos os campos");
        limparCampos();
        painel.classList.remove("active");
        textoFooter.classList.remove("none");
    }
};


function copyText(){
    let text = document.getElementById("text-to-copy").innerText;

    navigator.clipboard.writeText(text)

    .then(() => {
        
    })
    .catch(() => {
        alert("erro");
    });
    
}

function limparCampos(){
    
    urlSite = document.getElementById('url-site').value="";
    campaignSource = document.getElementById('campaign-source').value="";
    campaignMedium = document.getElementById('campaign-medium').value="";
    campaignName = document.getElementById('campaign-name').value="";
    
}


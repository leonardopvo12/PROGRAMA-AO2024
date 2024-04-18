const dataAtual=new date();
let dataObjetivo=prompt("Data final ano-mes-dia ex:2024-04-10");
dataObejetivo=newDate(DataObejetivo+"T23:59:59")
let diasQuefaltam=Math.floor((dataObjetivo-dataAtual)/86400000);
document.querySelector("#dias_restantes").textContent=diasQuefaltam;
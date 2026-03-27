let F_SHOWN_ALERTS = false
let V_ACTIVE_ALERTS = 0

document.addEventListener("DOMContentLoaded",(e)=>{
  document.querySelector(".btn-primary").addEventListener("click",(e)=>{
    makeAlert("primary","This is a primary alert.")
  })
  document.querySelector(".btn-secondary").addEventListener("click",(e)=>{
    makeAlert("secondary","This is a secondary alert.")
  })
  document.querySelector(".btn-success").addEventListener("click",(e)=>{
    makeAlert("success","This is a success alert.")
  })
  document.querySelector(".btn-danger").addEventListener("click",(e)=>{
    makeAlert("danger","This is a danger alert.")
  })
  document.querySelector(".btn-warning").addEventListener("click",(e)=>{
    makeAlert("warning","This is a warning alert.")
  })
})

function makeAlert(type,text){
  if (!F_SHOWN_ALERTS){
    F_SHOWN_ALERTS = true;
    document.querySelector("#alerts-list").classList.remove("hidden")
  }

  V_ACTIVE_ALERTS++

  let alert_div = document.createElement("div")
  let alert_div_text = document.createElement("div")
  let alert_div_button = document.createElement("button")

  alert_div.classList.add("alert", "alert-dismissable", `alert-${type}`, "d-flex", "justify-content-between", "align-items-start")
  alert_div.role="alert"
  
  alert_div_text.textContent = text
  
  alert_div_button.type = "button"
  alert_div_button.classList.add("btn-close")
  alert_div_button.dataset.bsDismiss="alert"
  alert_div_button.ariaLabel="Close"
  alert_div_button.addEventListener("click",(e)=>{
    V_ACTIVE_ALERTS--
    if (V_ACTIVE_ALERTS <= 0 ){
      V_ACTIVE_ALERTS = 0
      F_SHOWN_ALERTS = false;
      document.querySelector("#alerts-list").classList.add("hidden")
    }

  })
  
  alert_div.append(alert_div_text)
  alert_div.append(alert_div_button)  
  document.querySelector("#alerts-list").append(alert_div)
}
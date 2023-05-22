const ROLE_USER = localStorage.getItem("ROLE_USER");

if (
  !ID_USER ||
  ID_USER === "null" ||
  ID_USER === "undefined" ||
  (ROLE_USER == 3 || ROLE_USER == 2 || ROLE_USER == 1)
) {
  location.replace(`${URLROOT}user`);
} else {
  const addConfigAlert = document.getElementById("addConfigAlert");
  const conditionAlert = document.getElementById("conditionAlert");
  const valueLimitCondition = document.getElementById("valueLimitCondition");
  const user_id_input = document.getElementById("user_id_input");
  
  const error_conditionAlert = document.getElementById("error_conditionAlert");
  const error_messageAlert = document.getElementById("error_messageAlert");

  user_id_input.value = ID_USER;

  fetch(`${BACK_URLROOT}Alertes/getConditionAlerte`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      if (data.message == "Conditions Alerte Isset") {
        var options = `<option value=" ">Condition Alert</option>`;
        for (let i = 0; i < data.result.length; i++) {
          options += `<option value="${data.result[i]
            .id_condition_alerte}">${data.result[i].condition_alerte}</option>`;
        }
        conditionAlert.innerHTML = options;
      }
    });
  conditionAlert.addEventListener("change", function() {
    var conditionAlertValue = conditionAlert.value;
    if (conditionAlertValue == "") {
      valueLimitCondition.style.display = "none";
    } else {
      fetch(
        `${BACK_URLROOT}Alertes/getConditionAlerteById/${conditionAlertValue}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
        .then(res => res.json())
        .then(data => {
          if (data.message == "Condition Alerte Isset") {
            var result = data.result;
            if (result.value_condition_alerte_ou_non == 1) {
              valueLimitCondition.style.display = "block";
              valueLimitCondition.innerHTML = `<label for="valueLimitCondition">La Valeur Limite De Condition</label>
                                            <input name="valueLimitCondition" type="number" placeholder ="La Valeur Limite De Condition" value="0" required id ="valueLimitConditionCheck">
                                            <span class="error_success" id="error_valueLimitCondition">La Valeur Limite De Condition Est 0</span>`;

              const valueLimitConditionCheck = document.getElementById("valueLimitConditionCheck");
              const error_valueLimitCondition = document.getElementById("error_valueLimitCondition");

              valueLimitConditionCheck.addEventListener("input", () => {
                if (valueLimitConditionCheck.value < 0 || valueLimitConditionCheck.value == "") {
                  valueLimitConditionCheck.value = 0;
                }
                error_valueLimitCondition.innerText = `La Valeur Limite De Condition Est ${valueLimitConditionCheck.value}`
              });
            } else {
              valueLimitCondition.style.display = "none";
              valueLimitCondition.innerHTML = ``;
            }
          }
        });
    }
  });

  addConfigAlert.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(addConfigAlert);
    const data = Object.fromEntries(formData);
    var messageAlert = data.messageAlert
    var conditionAlert = data.conditionAlert
    
    var messageAlertLength = messageAlert.length
    var messageAlertValueLength=''
    for (let i = 0; i < messageAlertLength; i++) {
        messageAlertValueLength += ' '
    }

    var error_conditionAlert_check = 0
    var error_messageAlert_check = 0
    if (conditionAlert == ' ') {
        error_conditionAlert . innerText = "Condition Alert Ne Peut Pas Être Vide"
        error_conditionAlert . setAttribute ('class','error_danger')
        error_conditionAlert_check = 1
    }else{
        error_conditionAlert . innerText = "Condition Alert Ètait Choisit"
        error_conditionAlert . setAttribute ('class','error_success')
        error_conditionAlert_check = 0
    }
    if (messageAlert === messageAlertValueLength) {
        error_messageAlert . innerText = "Message Alert Ne Peut Pas Être Vide"
        error_messageAlert . setAttribute ('class','error_danger')
        error_messageAlert_check = 1
    }else{
        error_messageAlert . innerText = "Message Alert Ètait Choisit"
        error_messageAlert . setAttribute ('class','error_success')
        error_messageAlert_check = 0
    }
    if (error_conditionAlert_check == 0 && error_messageAlert_check == 0) {
        fetch(`${BACK_URLROOT}Alertes/AddConfigAlerte`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          })
            .then(res => res.json())
            .then(data => {
              if (data.message == "Condition Added") {
                location.replace(`${URLROOT}users/dashboard`);
              }
            });
    }
  });
}

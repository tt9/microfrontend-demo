
const template = `
<div class="estimator">

<form id="estimator-form">

    <div>
        <label>Enter amount you want to pay</label>
        <input id="input-estimator-amount" name="amount" />
    </div>

    <button type="submit" id="btn-estimator-submit">Submit</button>

    <h3 id="result"></h3>
</form>
</div>
`

class EstimatorMicrofrontend extends HTMLElement {

    constructor() {
        super();
        this.innerHTML = template;
    }

    connectedCallback() {
        this.amountInput = this.querySelector('#input-estimator-amount');
        this.submitButton = this.querySelector('#btn-estimator-submit');
        this.form = this.querySelector('#estimator-form');
        this.resultDisplay = this.querySelector('#result')

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.resultDisplay.innerHTML = this.amountInput.value * 10;

        })
        
    }

}

customElements.define('sample-estimator', EstimatorMicrofrontend);
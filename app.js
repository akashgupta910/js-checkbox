class Bucket {
    constructor(title) {
        this.title = title;
    }

    DisplayTitleToUI(id) {
        let parentElementToAppend = document.querySelector('#main .card');
        let createdElement = document.createElement('div');
        createdElement.className = 'box';
        createdElement.id = `inp-${id}`;
        let html = `
                    <div class="check-box">
                        <input type="checkbox" class='checkbox-input' id='${id}' onchange='Strike(id);'>
                    </div>
                    <span>${this.title}</span>`;

        createdElement.innerHTML = html;
        parentElementToAppend.appendChild(createdElement);
    }

    static StrikeTitleToUI(id) {
        let getTitleElement = document.querySelector(`#main #inp-${id} span`);
        let createStrikeElement = document.createElement('strike');

        createStrikeElement.innerText = getTitleElement.innerText;
        createStrikeElement.style.opacity = '0.7';
        getTitleElement.replaceWith(createStrikeElement);
    }

    static RemoveStrikeTitleToUI(id) {
        let getTitleElement = document.querySelector(`#main #inp-${id} strike`);
        let createStrikeElement = document.createElement('span');

        createStrikeElement.innerText = getTitleElement.innerText;
        getTitleElement.replaceWith(createStrikeElement);
    }
}

(function Main() {
    let titles = ['Layout for feature pages', 'Customer testimonial', 'Pickup keys', 'Wrap papers', 'Send mail to customers'];

    let id = 0;
    titles.forEach(title => {
        new Bucket(title).DisplayTitleToUI(id);
        id++;
    });
}());

function Strike(id) {
    if (document.querySelector(`#main #inp-${id} input`).checked)
        Bucket.StrikeTitleToUI(id);
    else
        Bucket.RemoveStrikeTitleToUI(id);
}
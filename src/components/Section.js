export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._containerSelector = document.querySelector(containerSelector);
    }

    addItem(element, method) {

        if(method === 'append')
        {
            this._containerSelector.append(element);
        }
        else if (method === 'prepend')
        {
            this._containerSelector.prepend(element);
        }
    }

    renderItems(items, method) {
        this._items = items;
        this._items.forEach(item => {
            this._renderer(item, method);
        })
    }

}

import { LightningElement, track } from 'lwc';

const items = [
    {
        label: 'Asia Pacific Sales',
        name: 'Asia Pacific Sales',
        items: [
            {
                label: 'Asia Sales',
                name: 'Asia Sales',
                items: [],
            },
        ],
    },
    {
        label: 'Europe Sales',
        name: 'Europe Sales',
        items: [
            {
                label: 'UK Sales',
                name: 'UK Sales',
                items: [],
            },
            {
                label: 'EU Sales',
                name: 'EU Sales',
                items: [],
            },
        ],
    },
    {
        label: 'Americas',
        name: 'Americas',
        items: [
            {
                label: 'Northern America Sales',
                name: 'Northern America Sales',
                items: [
                    {
                        label: 'United States Sales',
                        name: 'United States Sales',
                        items: [],
                    },
                ],
            },
        ],
    },
];

export default class BasicLightningTree extends LightningElement {
    @track treeList = items;
    @track selected = '';
    @track selectedItemValue;

    handleOnselect() {
        const item = this.findNested(this.items, 'name', event.detail.name);

        this.selectedItemValue = item.label;
    }

    // Searches the object for the item containing a key of the provided name that contains the value provided
    findNested(obj, key, value) {
        // Base case
        if (obj[key] === value) {
            return obj;
        }

        // otherwise
        const objKeys = Object.keys(obj);
        objKeys.forEach(objKey => {
            let found;
            if (typeof obj[objKey] === 'object' || Array.isArray(obj[objKey])) {
                found = this.findNested(obj[objKey], objKey, value);
            }
            return found;
        });

        return null;
    }
}
// the idea of this is that you can just add class tab index to all elements you want to tab to, and this will automatically add +1 incremented tab indexes to those elements in the order in which they appear which is hopefully better for accessibility and usability instead of setting everything to tabindex 0 or incrementing them all manually
export default function tabIndex() {
    // function for adding the tabindex class to all of a specified element:
    function addIndex(all) {
        if (all) {
            all.forEach((element) => {
                element.classList.add('tabindex');
            });
        }
    }

    // this bit adds the class to all links as they should be indexed anyway:
    const hrefs = document.querySelectorAll('a');
    addIndex(hrefs);

    // same again for buttons:
    const btns = document.querySelectorAll('button');
    addIndex(btns);

    // this adds the actual index:
    const tabElement = document.querySelectorAll('.tabindex');
    if (tabElement) {
        let tabIndex = 0;
        tabElement.forEach((element) => {
            tabIndex++;
            element.tabIndex = tabIndex;
        });
    }
}
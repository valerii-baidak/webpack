export default (text = 'Hello 🎉🎉🎉 word') => {
    const element = document.createElement('div');

    element.innerHTML = text;

    return element;
};

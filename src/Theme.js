export function getSharedBackgroundColor() {
    return getComputedStyle(document.documentElement)
        .getPropertyValue('--primary-background')
        .trim(); // Gets the value from global.css
}

export function setSharedBackgroundColor(color) {
    document.documentElement.style.setProperty('--primary-background', color);
}

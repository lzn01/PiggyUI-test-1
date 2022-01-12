const ELEMENT_FACTORS = [
    "letter-spacing",
    "line-height",
    "padding-top",
    "padding-bottom",
    "font-family",
    "font-weight",
    "font-size",
    "text-rendering",
    "text-transform",
    "width",
    "text-indent",
    "padding-left",
    "padding-right",
    "border-width",
    "box-sizing"
];

export const calculateNodeHeight = (node: HTMLTextAreaElement) => {
    const hiddenElement = getHiddenElement() as HTMLTextAreaElement;
    const value = node.value;
    const placeholder = node.placeholder;
    const style = window.getComputedStyle(node);

    ELEMENT_FACTORS.forEach(key => {
        hiddenElement.style[key as any] = style.getPropertyValue(key);
    });
    hiddenElement.value = value || placeholder || "";
    return hiddenElement.scrollHeight;
};

const getHiddenElement = () => {
    if (document.querySelector(".pui-hidden-textarea")) {
        return document.querySelector(".pui-hidden-textarea");
    }
    const textarea = document.createElement("textarea");
    textarea.className = "pui-hidden-textarea";
    document.body.append(textarea);
    return textarea;
};
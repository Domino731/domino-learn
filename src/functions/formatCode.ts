
const beautifyHtml = require('js-beautify').html
const beautifyCss = require('js-beautify').css
const beautifyJs = require('js-beautify').js;

const width = window.innerWidth;

/** function that returns the number of code characters after which the code will wrap */
const getWrapLength = (): number => {
    if (width > 1440) {
        return 50;
    } else if (width <= 425) {
        return 44;
    } else if (width <= 768) {
        return 50;
    } else if (width <= 1024) {
        return 46;
    } else if (width <= 1440) {
        return 45;
    } else {
        return 16;
    }
};


/**
 * this function is formating the code by beautifyCss module
 * @param type - programing language - css, html, js
 * @param code - string that you want to be formatted
 */
export const formatCode = (type: "css" | "html" | "js", code: string): string => {
    switch (type) {
        case "css":
            return beautifyCss(code, {indent_size: 1, space_in_empty_paren: false, wrap_line_length: 50});
        case "html":
            return beautifyHtml(code, {indent_size: 1, space_in_empty_paren: true, wrap_line_length: getWrapLength()});
        case "js":
            return beautifyJs(code, {indent_size: 1, space_in_empty_paren: false, wrap_line_length: 50});
    }
}
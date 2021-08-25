const beautifyHtml = require('js-beautify').html
const beautifyCss = require('js-beautify').css
const beautifyJs = require('js-beautify').js;

// This function formats the code
export const formatCode = (type: "css" | "html" | "js", code: string) : string => {
    switch (type){
        case "css":
            return beautifyCss(code, {indent_size: 1, space_in_empty_paren: false, wrap_line_length: "auto"})
        case "html":
            return beautifyHtml(code, {indent_size: 1, space_in_empty_paren: false, wrap_line_length: "auto"})
        case "js":
            return beautifyJs(code, {indent_size: 1, space_in_empty_paren: false, wrap_line_length: "auto"})
    }
}
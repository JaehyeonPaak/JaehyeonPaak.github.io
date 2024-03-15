const slugify = function (text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^a-zA-Z0-9가-힣-]+/g, '') // Remove all non-word chars except Korean characters and hyphens
        .replace(/--+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
}

// Example usage:
// slugify("Web Design 한글 Test") => web-design-한글-test

module.exports = { slugify }
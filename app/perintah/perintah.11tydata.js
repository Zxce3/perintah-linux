const path = require('path');
const fs = require('fs');
const matter = require('gray-matter');
const files = fs.readdirSync(__dirname);

module.exports = {
    permalink: 'c/{{ page.fileSlug }}/index.html',
    layout: 'perintah.liquid',
    tags: ['perintah'],
    eleventyComputed: {
        title: data => {
            const file = files.find(file => file === data.page.fileSlug + '.md');
            return file ? path.basename(file, '.md').replace(/-/g, ' ') : '';
        },
        description: data => {
            const file = files.find(file => file === data.page.fileSlug + '.md');
            if (!file) return '';
            
            const fileContents = fs.readFileSync(path.join(__dirname, file), 'utf8');
            const { content } = matter(fileContents);
            const paragraphs = content.split('\n\n');
            const firstParagraph = paragraphs.find(paragraph => !paragraph.startsWith('#'));
            
            return firstParagraph ? firstParagraph.trim() : '';
        }
    }
};


// the explanation is like this
// 1. we get the file name from the directory
// 2. we find the file name that matches the file slug
// 3. we get the file name without the extension
// 4. we replace the hyphen with a space
// 5. we return the result


# img-alt-tag-check

> 11ty plugin to check and validate images have alt tags

## Get Started

Install the package

```bash
npm install -D @garrettbland/image-alt-tag-check
```

Then add the plugin to your `.eleventy.js` file

```javascript
// .eleventy.js
module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(require('@garrettbland/image-alt-tag-check'))
}
```

## Usage

No need to do anything else. The plugin will check every image for a `alt` tag. If its missing, it will throw an error in your console and let you know what file is missing the the `alt` tag.

## How does it work

This plugin uses `jsdom` to analyze the rendered `html` pages and then checks to see if the `alt` tag is present within an `<img/>` element. If it's not, then it complains, helping you avoid missing accessability tags.

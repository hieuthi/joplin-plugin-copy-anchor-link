# Copy Anchor Link

This plugin an icon next to each heading of the rendered note. Copy Joplin markdown link of the specific heading to clipboard when click on the icon.

![Preview](https://raw.githubusercontent.com/hieuthi/joplin-plugin-copy-anchor-link/main/docs/preview.png)


## Usage

The usage should be self-explanatory as it is quite a common feature.
Optionally, you can hide the link icons by default and only show them when mouse is hovering over the headings by adding follow CSS to your `userstyle.css`:

```css
h1 span.copy-anchor-icon, h2 span.copy-anchor-icon, h3 span.copy-anchor-icon {
	visibility: hidden;
}
h1:hover span.copy-anchor-icon, h2:hover span.copy-anchor-icon, h3:hover span.copy-anchor-icon {
	visibility: visible;
}
```

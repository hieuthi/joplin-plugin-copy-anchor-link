# Copy Anchor Link

This plugin add several icons next to the note headings that you can click on to copy markdown link of the specific heading.

![Preview](https://raw.githubusercontent.com/hieuthi/joplin-plugin-copy-anchor-link/main/docs/preview.png)


## Usage

Click on the icon to copy link to the particular heading.

### Enable different types of link format
From version 1.1.0 and above, this plugin supports 7 different formats for link but they are all hidden by default. With `O` is Only-Link, `L` is Local, `G` is Global, `I` is ID, `H` is Heading, `F` is Full:

- `OI`: `#welcome-to-joplin`
- `OF`: `:/524d6874790f4e33a1dd2f5b2463c6cb#welcome-to-joplin`
- `LI`: `[welcome-to-joplin](#welcome-to-joplin)`
- `LH`: `[Welcome to Joplin!](#welcome-to-joplin)`
- `GI`: `[welcome-to-joplin](:/524d6874790f4e33a1dd2f5b2463c6cb#welcome-to-joplin)`
- `GH`: `[Welcome to Joplin!](:/524d6874790f4e33a1dd2f5b2463c6cb#welcome-to-joplin)`
- (Default) `GF`: `[1. Welcome to Joplin! # Welcome to Joplin!](:/524d6874790f4e33a1dd2f5b2463c6cb#welcome-to-joplin)`

To enable any or all of them, you need to add their respectable css to `userstyle.css`
```
.cai-oi { display: inline; }
.cai-of { display: inline; }
.cai-li { display: inline; }
.cai-lh { display: inline; }
.cai-gi { display: inline; }
.cai-gh { display: inline; }
```

If you want to hide the default GF format add the following line:
```
.cai-gf { display: none; }
```

### Hide the icons until mouse hovering
Optionally, you can hide the link icons by default and only show them when mouse is hovering over the headings by adding follow CSS to your `userstyle.css`:

```css
h1 span.copy-anchor-icon, h2 span.copy-anchor-icon, h3 span.copy-anchor-icon {
  display: none;
}
h1:hover span.copy-anchor-icon, h2:hover span.copy-anchor-icon, h3:hover span.copy-anchor-icon {
  display: inline;
}
```

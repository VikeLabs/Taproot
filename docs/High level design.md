# High level design
This stuff is mostly just ideas which have yet to be tested. Much of this will probably change.

### Content vs. structure
Taproot strives to keep its information as decoupled from its structure as possible. Content does not inherently exist on pages. Instead, pages must reference or embed content. This allows for the same content to be used by multiple pages, and for different pages to be created to satisfy different needs of the user. 

A page, which is a structural component, does not necessarily reference any content, and a snippet, which is a type of content component, is not necessarily referenced by any pages.

### The problem of content organization across pages
The Wikipedia page [plant nutrition](https://en.wikipedia.org/wiki/Plant_nutrition) shares much of the same information as the [page plant nutrients in soil](https://en.wikipedia.org/wiki/Plant_nutrients_in_soil), though the latter deals more specifically with soil. Finally, the [soil](https://en.wikipedia.org/wiki/Soil) page also has an in-depth section on nutrients which had to be re-written from the other two pages. There is a significant overlap in content between these three pages. When new information becomes available or new contributions are made to any of them, there is a good chance that the each of the others will need to be updated separately. If it were possible to separate content from page structure it might be possible to have content on a specific topic only written once. It is necessary, though, that the content be organized such that different levels of detail can be included by different structural components according to their needs. It needs to be modular enough that designing a structural component becomes like “painting” with pre-written content.

# Content components
How to create and manage modular content. Snippets are text-based modular types that also store information like a title and possibly links to images they might want to include. These extra fields can be optionally included by the author of the structural page that embeds the snippet.

### Info snippets
All of the text-based information on the site consists of Info Snippets. They contain information about things but not about how to do things. They are typically short and are meant to be easily referenced by and embedded in Structural Components. Each snippet has an excerpt, a thumbnail photo, and some tags. Almost every item of topic, such as plants, will have one or more Info Snippets about them. Items for which a lot of information is available may have different Info Snippets about different aspects of it.

### How-to snippets
Similar to Info Snippets, except containing information about how to do things. The separation of “active” information about how to do things from the more “passive” information about things will help Taproot fulfill its primary purpose as a guide (as opposed to an encyclopedia). The line between active and passive information is not clear cut and understanding how to do something may require a good deal of information about that thing. For this reason, How-To Snippets may contain some information about the nature of things and Info Snippets may contain some information about how to do a thing. The important thing is that the snippets can be independent of each other. If you’re just interested in nasturtiums from a botanical point of view you’d find everything you need in an Info Snippet. Likewise, if you only care about growing nasturtiums then you’d be entirely satisfied by a How-To Snippet. 

### Data types
These include tabular data and individual data points with labels. They can embedded in the text-based modular types (snippets). There may also be other ways to structure data such as collections (of data points) or, perhaps, the structuring of data will be left entirely to the structural components. There may or may not be a need for graphs and charts that are generated dynamically from data. We certainly want graphs but they may be stored as images instead.

### Images, videos, and audio
Images are the primary media type which Taproot will have to manage. All media types can just be stuck in a giant bucket (the database) and labelled so that editors can find them easily. Pages and other structural components should decide which images to associate with the content they contain as well as where to place them. It would probably make sense for snippets to be able to store links to images in hidden fields, though, in order to recommend certain images to the structural editors.

### Interlinking of snippets
Snippets certainly ought to include links to other pages on occasion, though these, along with some other features of snippets, may be enabled or disabled by the authors of structural components.

### In-situ links
It might be very interesting to interlink snippets with other snippets directly such that they could be expanded and collapsed in-situ without ever leaving the structural component that the original snippet is embedded in (never clicking a link and opening a new page) similar to this [linear algebra textbook](http://linear.ups.edu/fcla/section-MM.html). Try clicking some of the links in that book — it’s very interesting and seems to make a lot of sense. I would really like to have a feature like this though I’m not exactly sure how it would work. It’s similar to Wikipedia’s “page previews” feature which I like very much and which is accessed by hovering your mouse over a link within a page.

### Embedding of snippets
It may often be necessary for info and how-to snippets to embed data snippets. Imagine describing something and needing to use a table to do so. This would only be possible if data snippets can be embedded.

### Sources
How are sources cited and displayed?

# Structural components
How to _present_ modular content.

### Pages
These are the primary structural component that Taproot uses to organize and display its content. These are also pages in the traditional sense (i.e. web pages) and they each have their own URL. They organize content by embedding snippets. Each snippet in a page would have its own heading and its own section. Where a traditional Wiki page might have an introductory section, a section on history, geography, etc., a Taproot Page will embed an introductory snippet, a snippet on history, geography, and so on. This will produce a typical-looking page from the user’s point of view, but it will allow more flexibility and modularity of the content.

### Courses
These are curated series’ of pages that may focus on how to do something, may be more informational in nature, or a combination of both, but they always grouped with a single focus in mind. They have some special UI that indicates how far along a the user is in the series. The most distinctive feature of courses is that they answer broad questions for users who don't know exactly what they're looking for and want to be exposed to new ideas. 

Courses probably shouldn't have overlapping content very much. They probably should have a syllabus on their first page.
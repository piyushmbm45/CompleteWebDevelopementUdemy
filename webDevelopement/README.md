# Hi there,

    - In this course we have learnt about Html 
    - I've created my personal web site using only html 


# This is the List of Lectures 

## vscode extensions

    - ESLint
    - Color Highlight
    - EJS language support
    - Auto Close Tag
    - Prettier - Code formatter
    - stylelint-plus

## Html - Hypertext Markup Language 

### Date : 1-7-2021

## Lecture 1. 

        - Introduction To HTML
        - Markup language - we mark on data to present in specific manner
                - for eg. In any book or ads we see some *(star mark) 
                - it means see bottom of the page or t&c applied.
                - so we marked the things to perform some specific task

                - other markup language
                - XML - extensible Markup language
                - GML - Geography Markup language 

        - headings h1 to h6
        - <> angular bracket
        - / forward slash
        - <br> line break - didn't require closing Tag

        - codepen.io
        - devdocs.io


## Lecture 2. 

        - Anatomy of HTML Tag
        - start tag and ending tag depends on html elements
        - some of the html elements does not have any content like <br>
        - <br> known as self closing tag
        - <hr> - horizontal line
        - to change the by default values of line we need attributes
        - <hr size="3"> so it creates a horizontal line of 3px (by default 1px) - size="3" is html attribute.

### Date : 2-7-2021

## Lecture 3.

        - Starting a web developement course
        - Boilerplate - fix code that used by every html file
        - Doctype - sets the type of file to html or we can say that it tells the browser that its execute as a html file
        - html tag have two elements
        - one is head and another one body
        - Head
                - it includes all necessary information about html file
                - Title of the file
                - meta data tells browser that use this format
                        - character sets
                        - description - shows in google search below the website.
                        - viewport etc.


## Lecture 4. 

        - adding heading to personal site h1
        - paragrapgh - <p>
        - how to italics - <i>
        - difference between <em> tag and <i> tag
                - <i> its a style tag - just make italics
                - but <em> tag emphasize the content in it which we wanted from html
        - diff between <strong> and <b> (bold)
                - same as above


### Date 3-7-2021

## Lecture 5.

        - ordered and unordered list
        - nesting of list - list inside list
        - for ordered list we define how it will start by using type
                - <ol type="i"></ol> 
                - for roman start of list

        - Hyperlink - we can link bunch of document to a specific text.    
        - href - hyplink reference
        - adding pages to html file by using <a> tag.
                - creating pages in same folder
               

## Lecture 6. 

        - learn about creating table
        - html - structure
        - css - styling
        - js - behaviour
        - learnig about table
                - tr
                - td
                - thead
                - tbody
                - tfoot

## Lecture 7. 

        - html forms
                - input type 
                        - text
                        - password
                        - email
                        - range
                        - radio
                        - submit
                        - number
                        - Date
                        etc.
        - Hosting Personal Site using Github page
        - HTML completed.

### Date 4-7-2021

# CSS - Cascade Style Sheet

## Lecture 8.

        - in line css
        - not a good idea 
        - if we want to change multiple items using same style then we need to copy paste again and again

        - so better to use internal css
        - before applying any css by us browser applies by default css to every element
        - learnt about border properties

## Lecture 9.

- external css
- changing the color of text/background
- selecting color form colorhunt.co
- finding error in code by using inspect or developer tool for css file
- priority of css 

        - inline
        - internal
        - external

## Lecture 10.

- More about external css
- format of any css style 
***selector{property:value}***
- try to put all properties in alphabetical order it will help you to debug code easiy
- use class and ids to change specific element
- id is unique
- many elements can have same class
- some pseudo classess are already defined to perform specific task
- like h1:hover

### Date 4-7-2021

## Lexture 11.

- start creating a professional personal site
- add favicon to your site
- use css debug tool(chrome extension) to see layout of site
- use control + hover to see the details of element
- Box Model
        - 1.margin 2.border 3.padding  4.width/height of element


## Lecture 12.

- Display Property

        * display has 4 property

                * block
                * inline
                * inline-block
                * none

- some of elements like

        * headers
        * forms
        * paragraph
        * div
        * list and list items
- always displayed in block level (These are also known as block level element)
- these takes full width of the screen
- blocking element

- if we set display as inline ----- then we can't adjust the width of the block.
- if we set display as block ------ then we can't show the content side by side.

        - so its a problem 
        - to remove this use inline-block

- images are by default inline-block

- display : none - hide the element from site
- visibility : hidden - hide the element from site but place is present


## Lecture 13.

- css positioning
- position

        - static -> by default all elements are static
        - relative -> position of element relative to its current position(static - default)
        - absolute
        - none

- relative positioning means that you are adding a margin relative to where the element should have been.

- absolute position means that you are adding a margin to its parent element

## Date 6-7-2021

## Lecture 14.

- So just to recap, text-align center inside the container, or the parent element, will center everything inside that doesn't have a width set. Now if it is a block element and it has a width set, then you're going to have to center it using this auto value in the margin.

        - like this 
                .h1 {
                width: 10%;
                margin: 0 auto 0 auto;
                }

- font family

        - embed google fonts into our html site
        - dyanmically change in font size
        - 1em = 100% = 16px
        - % and em are inherited property of parent 
                - if parent font is 2em and child font is 3em then you will see child font 6em.
        - to remove this use rem

- Use rem always

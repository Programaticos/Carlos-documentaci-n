export const cssJson = [
  {
    titulo: "Selector",
    descripcion:
      "CSS selectors are used to 'find' (or select) the HTML elements you want to style. We can divide CSS selectors into five categories: Simple selectors (select elements based on name, id, class).",
    ejemplos: [
      {
        titulo: "Simple Selector",
        descripcion:
          "The CSS element selector selects elements based on the element name.",
      },
      {
        titulo: "ID Selector",
        descripcion:
          "The CSS id selector matches an element based on the value of its id attribute. Each id value must be unique within the HTML document.",
      },
      {
        titulo: "Class Selector",
        descripcion:
          "The CSS class selector selects elements with a specific class attribute. To select elements with a specific class, write a period (.) character, followed by the class name.",
      },
    ],
  },
  {
    titulo: "Color",
    descripcion:
      "The color property is used to set the color of the text. The color is specified by: a color name - like 'red', a HEX value - like '#ff0000', an RGB value - like 'rgb(255,0,0)', Look at CSS Color Values for a complete list of possible color values.",
    ejemplos: [
      {
        titulo: "Text Color",
        descripcion:
          "The color property is used to set the color of the text. With CSS, a color is most often specified by: a valid color name - like 'red', a HEX value - like '#ff0000', an RGB value - like 'rgb(255,0,0)', Look at CSS Color Values for a complete list of possible color values.",
      },
      {
        titulo: "Background Color",
        descripcion:
          "The background-color property specifies the background color of an element. The background of an element is the total size of the element, including padding and border (but not the margin).",
      },
      {
        titulo: "Border Color",
        descripcion:
          "The border-color property is used to set the color of the four borders. The color can be set by: name - specify a color name, like 'red', HEX - specify a HEX value, like '#ff0000', RGB - specify an RGB value, like 'rgb(255,0,0)', transparent - specify 'transparent' to make the border transparent.",
      },
    ],
  },
  {
    titulo: "Text",
    descripcion:
      "The text-align property is used to set the horizontal alignment of a text. A text can be left or right aligned, centered, or justified. The text-align property is used to set the horizontal alignment of a text.",
    ejemplos: [
      {
        titulo: "Text Align",
        descripcion:
          "The text-align property is used to set the horizontal alignment of a text. A text can be left or right aligned, centered, or justified. The text-align property is used to set the horizontal alignment of a text.",
      },
      {
        titulo: "Text Decoration",
        descripcion:
          "The text-decoration property is used to set or remove decorations from text. The text-decoration property is mostly used to remove underlines from links.",
      },
      {
        titulo: "Text Transformation",
        descripcion:
          "The text-transform property is used to specify uppercase and lowercase letters in a text. It can be used to turn everything into uppercase or lowercase letters, or capitalize the first letter of each word.",
      },
    ],
  },
  {
    titulo: "Box Model",
    descripcion:
      "The CSS Box Model is a set of rules that define the spacing and layout of an element. It consists of: content, padding, border, and margin.",
    ejemplos: [
      {
        titulo: "Content",
        descripcion:
          "The content area is the actual content of the element, where text and images appear.",
      },
      {
        titulo: "Padding",
        descripcion:
          "Padding is the space between the content and the element's border.",
      },
      {
        titulo: "Border",
        descripcion:
          "The border surrounds the padding and content area and can have a specified width, style, and color.",
      },
      {
        titulo: "Margin",
        descripcion:
          "The margin is the space outside the border, between the border and other elements.",
      },
    ],
  },
  {
    titulo: "Font",
    descripcion:
      "The font property is used to specify the font family, size, weight, style, and variant.",
    ejemplos: [
      {
        titulo: "Font Family",
        descripcion:
          "The font-family property specifies the font family for text.",
      },
      {
        titulo: "Font Size",
        descripcion: "The font-size property specifies the size of the font.",
      },
      {
        titulo: "Font Weight",
        descripcion:
          "The font-weight property specifies the weight (or boldness) of the font.",
      },
      {
        titulo: "Font Style",
        descripcion:
          "The font-style property specifies the style (normal, italic, or oblique) of the font.",
      },
    ],
  },
  {
    titulo: "Layout",
    descripcion:
      "CSS Layout is used to control the position of elements on a web page. It can be done using floats, flexbox, grid, or positioning.",
    ejemplos: [
      {
        titulo: "Floats",
        descripcion:
          "The float property specifies whether or not an element should float.",
      },
      {
        titulo: "Flexbox",
        descripcion:
          "Flexbox is a layout model that allows elements to align and distribute space within a container.",
      },
      {
        titulo: "Grid",
        descripcion:
          "CSS Grid Layout is a two-dimensional layout system for the web that allows you to create grid structures for layout, similar to tables.",
      },
      {
        titulo: "Positioning",
        descripcion:
          "The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).",
      },
    ],
  },
  {
    titulo: "Display",
    descripcion:
      "The display property specifies the display behavior (the type of rendering box) of an element.",
    ejemplos: [
      {
        titulo: "Block",
        descripcion:
          "A block-level element always starts on a new line and takes up the full width available.",
      },
      {
        titulo: "Inline",
        descripcion:
          "An inline-level element does not start on a new line and only takes up as much width as necessary.",
      },
      {
        titulo: "Inline-Block",
        descripcion:
          "An inline-block element is similar to an inline element, but it can have a width and height.",
      },
      {
        titulo: "None",
        descripcion:
          "The element is completely removed from the document and doesn't take up any space.",
      },
    ],
  },
  {
    titulo: "Animation",
    descripcion:
      "CSS Animations allows animation of most HTML elements without using JavaScript or Flash.",
    ejemplos: [
      {
        titulo: "Keyframes",
        descripcion:
          "Keyframes are used to specify the values for the animating properties at various points during the animation.",
      },
      {
        titulo: "Duration",
        descripcion:
          "The duration property specifies how long an animation should take to complete one cycle.",
      },
      {
        titulo: "Timing Function",
        descripcion:
          "The timing-function property specifies the speed curve of the animation.",
      },
      {
        titulo: "Delay",
        descripcion:
          "The delay property specifies a delay for the start of an animation.",
      },
    ],
  },
  {
    titulo: "Transform",
    descripcion:
      "The transform property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.",
    ejemplos: [
      {
        titulo: "Rotate",
        descripcion:
          "The rotate() function rotates an element around a fixed point on the 2D plane.",
      },
      {
        titulo: "Scale",
        descripcion:
          "The scale() function increases or decreases the size of an element.",
      },
      {
        titulo: "Translate",
        descripcion:
          "The translate() function moves an element from its current position, horizontally and/or vertically.",
      },
      {
        titulo: "Skew",
        descripcion:
          "The skew() function tilts or slants an element in the horizontal or vertical direction.",
      },
    ],
  },
  {
    titulo: "Transition",
    descripcion:
      "CSS Transitions allows you to change property values smoothly (over a given duration) between two defined states.",
    ejemplos: [
      {
        titulo: "Property",
        descripcion:
          "The property property specifies the name of the CSS property you want to add transition effects to.",
      },
      {
        titulo: "Duration",
        descripcion:
          "The duration property specifies how many seconds (s) or milliseconds (ms) a transition effect takes to complete.",
      },
      {
        titulo: "Timing Function",
        descripcion:
          "The timing-function property specifies the speed curve of the transition effect.",
      },
      {
        titulo: "Delay",
        descripcion:
          "The delay property specifies when the transition effect will start.",
      },
    ],
  },
  {
    titulo: "Pseudo-classes",
    descripcion:
      "Pseudo-classes are used in CSS to define the special state of an element. For example, :hover can be used to change the style of an element when the user hovers over it.",
    ejemplos: [
      {
        titulo: "Hover",
        descripcion:
          "The :hover pseudo-class is used to apply styles when an element is being hovered over by the mouse pointer.",
      },
      {
        titulo: "Active",
        descripcion:
          "The :active pseudo-class is used to apply styles when an element is being activated by the user.",
      },
      {
        titulo: "Focus",
        descripcion:
          "The :focus pseudo-class is used to apply styles when an element has received focus (is selected).",
      },
    ],
  },
  {
    titulo: "Media Queries",
    descripcion:
      "Media queries are a way to apply CSS rules based on the characteristics of the device the site is being displayed on, such as screen size, orientation, or resolution.",
    ejemplos: [
      {
        titulo: "Screen Size",
        descripcion:
          "Media queries can be used to apply different styles based on the width of the screen.",
      },
      {
        titulo: "Orientation",
        descripcion:
          "Media queries can be used to apply different styles based on the orientation of the device (landscape or portrait).",
      },
      {
        titulo: "Resolution",
        descripcion:
          "Media queries can be used to apply different styles based on the resolution of the device.",
      },
    ],
  },
  {
    titulo: "CSS Variables",
    descripcion:
      "CSS variables are entities defined by CSS authors that contain specific values to be reused throughout a document.",
    ejemplos: [
      {
        titulo: "Declaration",
        descripcion:
          "CSS variables are declared using the -- prefix followed by a name and value.",
      },
      {
        titulo: "Usage",
        descripcion:
          "CSS variables can be used by referencing them with the var() function.",
      },
      {
        titulo: "Scope",
        descripcion:
          "CSS variables can have global or local scope, depending on where they are declared.",
      },
    ],
  },
  {
    titulo: "Flexbox",
    descripcion:
      "Flexbox is a layout model in CSS that provides an efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown or dynamic.",
    ejemplos: [
      {
        titulo: "Container Properties",
        descripcion:
          "Flex containers have properties to control the layout of their children.",
      },
      {
        titulo: "Item Properties",
        descripcion:
          "Flex items have properties to control their size, order, and alignment within the flex container.",
      },
      {
        titulo: "Alignment",
        descripcion:
          "Flexbox provides properties to align items along the main axis and the cross axis.",
      },
    ],
  },
  {
    titulo: "Grid Layout",
    descripcion:
      "CSS Grid Layout is a two-dimensional layout system for the web that allows you to create grid structures for layout, similar to tables, but more flexible.",
    ejemplos: [
      {
        titulo: "Grid Container",
        descripcion:
          "The grid container is the parent element that contains grid items.",
      },
      {
        titulo: "Grid Items",
        descripcion:
          "Grid items are the children of the grid container and are placed within the grid cells.",
      },
      {
        titulo: "Grid Lines",
        descripcion:
          "Grid lines are the horizontal and vertical lines that divide the grid into rows and columns.",
      },
    ],
  },
  {
    titulo: "Overflow",
    descripcion:
      "The overflow property specifies what should happen if content overflows an element's box.",
    ejemplos: [
      {
        titulo: "Visible",
        descripcion:
          "Content is not clipped, and it may be rendered outside the content box.",
      },
      {
        titulo: "Hidden",
        descripcion:
          "Content that overflows the element's box is hidden, and the rest of the content is not rendered.",
      },
      {
        titulo: "Scroll",
        descripcion:
          "The overflow is clipped, and a scrollbar is added to see the rest of the content.",
      },
    ],
  },
  {
    titulo: "Filters",
    descripcion:
      "CSS filters are a way of processing an element’s rendering before it is displayed in the document.",
    ejemplos: [
      {
        titulo: "Grayscale",
        descripcion:
          "The grayscale filter converts the element's colors to shades of gray.",
      },
      {
        titulo: "Blur",
        descripcion: "The blur filter applies a Gaussian blur to the element.",
      },
      {
        titulo: "Brightness",
        descripcion:
          "The brightness filter adjusts the brightness of the element.",
      },
    ],
  },
  {
    titulo: "Counter",
    descripcion:
      "CSS counters allow you to increment or decrement a counter value each time an element is displayed.",
    ejemplos: [
      {
        titulo: "Increment",
        descripcion:
          "The counter-increment property increments the value of a counter.",
      },
      {
        titulo: "Reset",
        descripcion:
          "The counter-reset property resets the value of a counter.",
      },
      {
        titulo: "Display",
        descripcion:
          "The counter() function is used to insert the value of a counter into content.",
      },
    ],
  },
];

# verify

This was based on a [video](https://www.youtube.com/watch?v=tkoJDk8ejsY) droped by [@wesbos](https://twitter.com/wesbos) about handling multiple input in vannila JavaScript (If you don't know vannilla JavaScript: This is probably not for you 👀).

The also dropped 3 challenges to the version he did the code along on the [video](https://www.youtube.com/watch?v=tkoJDk8ejsY).

- select the text when the next input is focused
- Auto submit the form if all fields are filled after a paste
- support for backspacing from 1 input to another

I will write a blog post on how I was able to accomplish the 3 challenges and more about my love for Vannila flavours(JavaScript alone). 

Here is a link to the [Implementation](https://paste.oluwasetemi.dev/). 

Some of the notable feature of this project includes

- Handling of on `paste` event which allow you to paste value into the input for faster and ease when you encounter a verification like this.
- Handling of the Back Space works like magic
- Forms are submitted after the `paste` event - harder than I thought 💭 😴 
- Form `submit` event is triggered when you fill in the last input

TODO: handle the clearing of form inputs after the submitting of the form. DONE #84087b

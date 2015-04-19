# CSS-FORM-UI
Styling CSS Forms - Dropdown (Select), Checkbox and Radio in CSS!

Available as [CSS](//github.com/scazzy/CSS-FORM-UI/blob/master/css/formui.css), and [LESS](//github.com/scazzy/CSS-FORM-UI/blob/master/css/less/formui.less) files.

##Dropdown

```
<div class="formui-dropdown">
    <span class="text">&nbsp;</span>
    <select>
        <option>Select </option>
        <option>Option </option>
        <option>Option 2</option>
    </select>
</div>
```

##Radio

```
<label class="formui-radio option">
    <input type="radio" name="radio" value="a"/>
    Option a
</label>

<label class="formui-radio option">
    <input type="radio" name="radio" value="b"/>
    Option b
</label>
```

##Checkbox

```
<label class="formui-checkbox option">
    <input type="checkbox" name="checkbox[]" value="a"/>
    Option a
</label>

<label class="formui-checkbox option">
    <input type="checkbox" name="checkbox[]" value="b"/>
    Option b
</label>

<label class="formui-checkbox option">
    <input type="checkbox" name="checkbox[]" value="c"/>
    Option c
</label>
```

> ###How it works?
> It's extremely simple.

> We create a single wrapper around our non-stylable form elements (Dropdown, Checkbox & Radio).


> **The magic!** : We hide the real DOM element in such a way that it exists but remains invisible. This allows any clicks or action on that element (in all 3 cases) to function naturally. 

> **For Checkbox/Radio**: Only javascript required is to add a "checked" class to the wrapper". 

>> Whole CSS is completely customizable, and you can use it as part of your code instead of a library. It just shows a way how to style your Form Elements. Feel free to change class name, and everything else. 

> This minimal and still natural method allows all UI elements to work naturally, for getting or changing data. No specific library calls for those. (Textboxes, textareas, buttons - are always stylable, hence not added in this lib)


>> Want more? - If you want it as a library with more functionalities, feel free to create an issue on the github.



### Author
[@eltonjain](http://twitter.com/eltonjain)

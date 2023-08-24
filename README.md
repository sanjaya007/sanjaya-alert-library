# Sanjaya Alert Library

ALERT Demo - [https://sanjaya-alert-library.netlify.app/](https://sanjaya-alert-library.netlify.app/)

## CSS - CDN Link

Add CSS to head.

```js
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sanjaya007/sanjaya-alert-library@1.0/dist/css/alert.min.css" crossorigin="anonymous" referrerpolicy="no-referrer">
```

## JS (Vanilla/Core) - CDN Link

Add JS to head or body. If you are working in jQuery, you can use Jquery based alert link.

```js
<script src="https://cdn.jsdelivr.net/gh/sanjaya007/sanjaya-alert-library@1.0/dist/js/alert.min.js"></script>
```

## jQuery - CDN Link

Use this alert link if you want to use jQuery based alert.

```js
<script src="https://cdn.jsdelivr.net/gh/sanjaya007/sanjaya-alert-library@1.0/dist/jq/alert.min.js"></script>
```

## Font Awesome - CDN Link

Add Font Awesome link to head. (This is for required icons.)

```js
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
```

## How To Use

Initialize Alert in your JS file like:

- Initialization

  ```javascript
  ALERT.init();
  ```

- With status

  ```javascript
  ALERT.init("success");
  ```

  ##### Note: You can use status like: (success - info - warning - error)

- With message

  ```javascript
  ALERT.init("success", "This is Sanjaya alert.");
  ```

- With extra parameters ( Position / TimeOut )

  If you use three parameters, you can add Position or Timeout in third parameter. For Example:

  ##### With Position

  ```javascript
  ALERT.init("success", "This is Sanjaya alert.", "topRight");
  ```

  ##### With Timeout

  ```javascript
  ALERT.init("success", "This is Sanjaya alert.", 5);
  ```

  If you use four parameters, you can add Position and Timeout in third and fourth parameter respectively. For Example:

  ##### With Position and Timeout

  ```javascript
  ALERT.init("success", "This is Sanjaya alert.", "topRight", 5);
  ```

  ##### Note: You can use positions like: (topRight - topLeft - topCenter - bottomRight - bottomLeft - bottomCenter)

  ##### Note: Use timeout as second. In above example, "5" is used for five seconds. You can use any time interval.

## Default Value

If you don't use Position and Timeout parameters, it will take default value "topRight" and "5" for position and timeout respectively.

For Example: If you need different position and timeout in your whole website, you can set default Alert config.

```javascript
ALERT.setDefault({
  position: "topLeft",
  timeOut: "3",
});

// If you set default config like this, you can use with two parameters.
ALERT.init("success", "This is Sanjaya alert.");

// Now you don't need to use like this cause you set default value above.
ALERT.init("success", "This is Sanjaya alert.", "topLeft", 3);
```

## Other full config

Full default config:

```javascript
ALERT.setDefault({
  icon: "<i class='fa-solid fa-circle-info'></i>",
  message: "This is Sanjaya alert.",
  position: "topLeft",
  timeOut: "3",
});

// If you want your own icon and message which are supposed to be used as same in multiple places.
ALERT.init("default");
```

## Custom Alert - Coming Soon

Make your own design - (Custom Alert Design)

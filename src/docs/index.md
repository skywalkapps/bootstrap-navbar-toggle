---
layout: default
title: Bootstrap Navbar Toggle
name: Navbar Toggle
description: Did you know that hamburger menu is not very <a href="https://lmjabreu.com/post/why-and-how-to-avoid-hamburger-menus/">user friendly</a>? Improve your mobile experience with Navbar Toggle component.

---

### Navbar Toggle Label

Bootstrap Navbar component is designed for  <a href="http://www.lukew.com/ff/entry.asp?933">mobile first</a> approach. Therefore, the navbar renders as collapsed on mobile devices. It can be toggled by a <a href="https://en.wikipedia.org/wiki/Hamburger_button">hamburger button</a>. Unfortunately, hamburger icons are proved to be less efficient and <a href="http://exisweb.net/menu-eats-hamburger">not very usable</a>.

Navbar Toggle component extends the default `.navbar-toggle` element and adds label to increase usability. You can also leave out `.navbar-toggle-icon` completely.

<div class="sw-example" id="navbar-toggle">
  <nav class="navbar navbar-default">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#sw-example-navbar-collapse-1" data-label-expanded="Close" aria-expanded="false">
      <span class="navbar-toggle-label">Menu</span>
      <span class="sr-only">(toggle)</span>

      <span class="navbar-toggle-icon">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </span>
    </button>

    <div class="collapse navbar-collapse" id="sw-example-navbar-collapse-1">
    </div>
  </nav>
</div>

~~~html
<nav class="navbar navbar-default">
  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" data-label-expanded="Close" aria-expanded="false">
    <span class="navbar-toggle-label">Menu</span>
    <span class="sr-only">(toggle)</span>

    <span class="navbar-toggle-icon">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </span>
  </button>
</nav>
~~~

You don't always want to have the toggle button on the right side. Add `.navbar-toggle-left` to the `navbar-toggle` element to change its position on mobile devices.

<div class="sw-example" id="navbar-toggle-2">
  <nav class="navbar navbar-default">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#sw-example-navbar-collapse-2" data-label-expanded="Close" aria-expanded="false">
      <span class="navbar-toggle-label">Menu</span>
      <span class="sr-only">(toggle)</span>

      <span class="navbar-toggle-icon">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </span>
    </button>

    <div class="collapse navbar-collapse" id="sw-example-navbar-collapse-2">
    </div>
  </nav>
</div>

~~~html
<nav class="navbar navbar-default">
  <button type="button" class="navbar-toggle navbar-toggle-left collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2" data-label-expanded="Close" aria-expanded="false">
    <span class="navbar-toggle-label">Menu</span>
    <span class="sr-only">(toggle)</span>

    <span class="navbar-toggle-icon">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </span>
  </button>
</nav>
~~~

### Inversed Theme

Bootstrap navbar component comes in two color variants. Navbar toggle can be used with both of them.

<div class="sw-example" id="navbar-toggle">
  <nav class="navbar navbar-inverse">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#sw-example-navbar-collapse-3" data-label-expanded="Close" aria-expanded="false">
      <span class="navbar-toggle-label">Menu</span>
      <span class="sr-only">(toggle)</span>

      <span class="navbar-toggle-icon">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </span>
    </button>

    <div class="collapse navbar-collapse" id="sw-example-navbar-collapse-3">
    </div>
  </nav>
</div>

~~~html
<nav class="navbar navbar-inverse">
  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#sw-example-navbar-collapse-3" data-label-expanded="Close" aria-expanded="false">
    <span class="navbar-toggle-label">Menu</span>
    <span class="sr-only">(toggle)</span>

    <span class="navbar-toggle-icon">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </span>
  </button>

  <div class="collapse navbar-collapse" id="sw-example-navbar-collapse-3">
  </div>
</nav>
~~~


## Navbar Toggle Overview

### <span class="text-muted">Module: </span>Navbar Toggle

This table gives you a quick overview of elements and variables.

<div class="table-responsive sw-table">
  <table class="table table-bordered">
    <thead>
     <tr>
       <th style="width: 200px">Name</th>
       <th style="width: 200px">Class</th>
       <th>Usage</th>
     </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Toggle Button</strong></td>
        <td><code>.navbar-toggle</code></td>
        <td>
          <p>Default Bootstrap toggle button.</p>
          <strong>Variables:</strong>
          <ul>
            <li><code>@navbar-toggle-uppercase: true;</code><br><span class="text-muted">If set to TRUE, navbar toggle label will be uppercase</span></li>
            <li><code>@navbar-toggle-font-size: @font-size-base;</code><br><span class="text-muted">Option to override default font-size </span></li>
            <li><code>@navbar-toggle-default-border: @navbar-default-border;</code><br><span class="text-muted">Option to change default border color</span></li>
            <li><code>@navbar-toggle-inverse-border: @navbar-inverse-border;</code><br><span class="text-muted">Option to change inverse border color</span></li>
          </ul>
        </td>
      </tr>

      <tr>
        <td><strong>Toggle Label</strong></td>
        <td><code>.navbar-toggle-label</code></td>
        <td>Wrapper for the button label.</td>
      </tr>

      <tr>
        <td><strong>Toggle Icon</strong></td>
        <td><code>.navbar-toggle-icon</code></td>
        <td>Wrapper for the hamburger icon.</td>
      </tr>

    </tbody>
  </table>
</div>

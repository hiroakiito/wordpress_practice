<?php
function my_styles() {
  wp_enqueue_style( 'style', get_template_directory_uri() . '/style.css', array(), '1.0.3' );
}
function my_scripts() {
  wp_enqueue_script( 'main', get_template_directory_uri() . '/main.js', array( 'jquery' ), '1.0.2', true );
}
add_action( 'wp_enqueue_scripts', 'my_styles' );
add_action( 'wp_enqueue_scripts', 'my_scripts' );
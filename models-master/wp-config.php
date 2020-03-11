<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'prestige' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'K},Xn^8F;-bTg%R[9bkT[jv}@0=jLW*~*d)i 9!U#Zu})wn-1|oBb,,C-td=[!<M' );
define( 'SECURE_AUTH_KEY',  '$`c@YZIDqq5ko{LwXlem@(J:[2@;*|93A9,9L^_v0mRBa,3xhX-8WHIfxSTXU%dU' );
define( 'LOGGED_IN_KEY',    '2GdVU?K}NGGL_#ZT=ZP;Jpf4Ro+Qi7Myp!ROZeW6j7R#DZAI}X8vY^+B-?Duig1g' );
define( 'NONCE_KEY',        '9wW@vk[u67q!14eE67~.&]tEL+`{W!q{t}zp0s*zV-@DI/nW]c&6XQI8V1e`%]<}' );
define( 'AUTH_SALT',        '!p<@}&I>PQAI/iHm =1<|$PCrT9:H8NA{u&@Do,,P4ciu7i>Zi(.z<*7>_S<t@I]' );
define( 'SECURE_AUTH_SALT', 'iOVc8Ro!(/2|UIsyj6(K409f}2z;52dNxuZ.]OK/A{&cKB^DT-_*Q44uX<QE9oaK' );
define( 'LOGGED_IN_SALT',   'aTK@<Fwqvr>EcGCVj+Zsj7/sYy=(aU`ORMwb3*h2)<|DFL/y0vZ*i3{mm:%UQYq^' );
define( 'NONCE_SALT',       '4*zj^w9b=,>urU5q$T5}Y5fDF{`p}@4Wz&+!Ys-3Rd{!r$cFy90fF2nUz%=cm3?:' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );

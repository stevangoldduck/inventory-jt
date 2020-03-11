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
define( 'DB_NAME', 'infodong' );

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
define( 'AUTH_KEY',         'c5=7t0U)oVJq|AW)yv9urJqV}iBB(T{S^&9f,wBw!c4t8#}ti0I<%={vf@Co6Yg2' );
define( 'SECURE_AUTH_KEY',  'OtYylrc^[daj37@DYVi=mN6(wjuORpil.8jA<k[T9Xaxq/?[)eWk.*Xw4 U/$n,[' );
define( 'LOGGED_IN_KEY',    'C@)u]U`r 2^j#lK$)bhA@L;aaZh#Z`f.P(kJ*){YH!+`&W$KMf0muo0@#+Q-,XZS' );
define( 'NONCE_KEY',        '~6+Yx8Txqj5J4W{2N4z|tn=Ml_pKX3~0+032!Y?}MUmVEAKC$4lz_AEb5[Q)S?j6' );
define( 'AUTH_SALT',        'gIdYa6H^+Jyo?.V&s8Wz$))Unnz//hcKXq`%R5Meq.].-Tlo%[L?%k,,4+rp>I(2' );
define( 'SECURE_AUTH_SALT', 'I0%$v+$RK91e5^$mrJfmwAgm5cp%d#L0=(?X;RUQ^n&;3pQvz,Fz>pZ_:X(OA3vU' );
define( 'LOGGED_IN_SALT',   'Z2qt;Q.Kd?Dr4M9qP-c@iDmn?][*MHZ>kmA&z36zEJt4$P=gU[~9FD`_Yp,Uajvt' );
define( 'NONCE_SALT',       'LAs&|f9^wI#.[T DDK=hJ.wz!DtX(`t;u+@Nx1|lFx.Xtc)4F2%(_fXChO93s0Rh' );

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

<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'sevenzia' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ze+i+Lm33 h{7:PB(M]sbl`QUwhSSZQE{e8]#R]]RcNi5jp{&Ljd/FXWw2]~yQ!n' );
define( 'SECURE_AUTH_KEY',  '.wo)2vIUbgu5BLiFrw^=3lu(~zuW-F.j$p6G0C*&f:gI>6FozFd.GMWtl@cEb/_B' );
define( 'LOGGED_IN_KEY',    'Tn(Lz3zX#.FP{,=bO[(m]N=.[[wXkAi4m%E77I`,:-If)8iS&6}Y^pF2SmrQ6caI' );
define( 'NONCE_KEY',        '}et,<-!!k[s-dWf5639S Tfn0S60^2v`BylCKoQ7T<OH1|jHg3TC9*gLjN9[?k}o' );
define( 'AUTH_SALT',        'yIy|B0cY`VW<Y#L4C{U>.XLG<`n.yAY]byCrv{T:}#E1Wq[X5tBoxxxjB_e,D|h-' );
define( 'SECURE_AUTH_SALT', 'Oy8J+|F{[6Cn1]$cdT{wg4namm?,T9]1??&-|Qzhw^dPBwjlBAy+ #IU.b<[8:pm' );
define( 'LOGGED_IN_SALT',   'D`&D^%UKJj[QxhyLvG|x{a7UUF+yH^U%rZpPJ<:yQUo-)k@s,4`<+Od0q/O]RbXT' );
define( 'NONCE_SALT',       'LzEneAt5t@:~_)Aad&lF42K+b]RxPoptwMI[9=4m>tJ.jR#Hc.!cVL68T<ounk-h' );

/**#@-*/

/**
 * WordPress database table prefix.
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
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

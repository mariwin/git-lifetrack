<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitd7498df2ad3a12cd409f69927d8fea36
{
    public static $prefixLengthsPsr4 = array (
        's' => 
        array (
            'server\\' => 7,
        ),
        'P' => 
        array (
            'PHPRouting\\' => 11,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'server\\' => 
        array (
            0 => __DIR__ . '/../..' . '/server',
        ),
        'PHPRouting\\' => 
        array (
            0 => __DIR__ . '/..' . '/mc17uulm/php-routing',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd7498df2ad3a12cd409f69927d8fea36::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd7498df2ad3a12cd409f69927d8fea36::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}

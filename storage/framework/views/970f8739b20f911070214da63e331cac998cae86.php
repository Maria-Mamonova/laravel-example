<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/css/reset.css">
    <link rel="stylesheet" href="/css/my.css">
    <title><?php echo $__env->yieldContent('title-block'); ?></title>
</head>
<body>
<header>
    <nav>
        <div class="logo">
            <h3><a href="index.php">Natalia Kruglova</a></h3>
        </div>
        <ul class="menu">
            <li><a href="index.php" class="active">ГЛАВНАЯ</a></li>
            <li><a href="index.php#works">ПОРТФОЛИО</a></li>
            <li><a href="price.php">ПРАЙС</a></li>
            <li><a href="about.php">ОБО МНЕ</a></li>
            <li><a href="info.php">КОНТАКТЫ</a></li>
        </ul>
    </nav>
</header>
<?php echo $__env->yieldContent('content'); ?>
<footer>
    <div class="footer-content">
        <div class="footer-one">
            <p>E-MAIL:</p>
            <p>maria.orlowets@yandex.ru</p>
        </div>
        <div class="footer-two">
            <p>МОИ СОЦ.СЕТИ:</p>
            <div class="social_network">
                <a href="https://t.me/Mari_Mamonova" title="Telegram">
                    <img src="icon/icon-telegram.png" alt="telegram">
                </a>
                <a href="https://t.me/Mari_Mamonova" title="ВКонтакте">
                    <img src="icon/icon-vk.png" alt="vk">
                </a>
                <a href="https://t.me/Mari_Mamonova" title="Instagram">
                    <img src="icon/icon-instagram.png" alt="instagram">
                </a>
                <a href="https://t.me/Mari_Mamonova" title="WhatsApp">
                    <img src="icon/icon-whatsapp.png" alt="whatsapp">
                </a>
            </div>
        </div>
        <div class="footer-three">
            <p>АДРЕС:</p>
            <p>Санкт-Петербург, Россия</p>
        </div>
        <div class="footer-four">
            <p>ТЕЛЕФОН:</p>
            <p>+1(111)111 11 11</p>
        </div>
    </div>
    <div class="footer-bottom">
        &copy; 2024 Photographer's Website. Все права защищены.
    </div>
</footer>
</body>
</html>
<?php /**PATH E:\OpenServer\OSPanel\domains\htdocs\laravel.test\resources\views/blocks/header.blade.php ENDPATH**/ ?>
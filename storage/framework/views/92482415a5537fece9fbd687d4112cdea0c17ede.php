

<?php $__env->startSection('title-block'); ?>
    Обо мне
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<div id="content">
    <div class="about_page">
        <div class="about_page_picture">
            <img src="picture/avtor.jpg" alt="автор">
            <p class="phrase_1">“  Мне близки гармония </p>
            <p class="phrase_2">и чувства в каждом кадре ”</p>
        </div>
        <div class="about_page_txt">
            <h4>Привет!</h4><br>
            <p>Меня зовут Наталья Круглова. Занимаюсь фотографией больше 4 лет. В своих фотографиях Я стремлюсь совместить чистоту кадра и эмоциональность момента.</p><br>
            <p>Естественность, красота, искренняя радость, моменты, когда мы чувствуем себя красивыми и любимыми, семья, которая рядом с нами, объятия друзей, смех и слезы радости — чаще всего нам хочется остановить именно эти мгновения нашей жизни и именно их хочется вспоминать долго.</p><br>
            <p>Мне близки гармония и чувства в кадре. В фотографии больше всего ценю воздух, естественность и красивые детали. Люблю видеть в кадре счастливых и гармоничных людей, их доброту, красоту, чувственность и нежность</p><br>
            <p>Если Вы разделяете мои представления и Вам нравятся мои фотографии, то Я с радостью помогу сохранить в памяти Ваш неповторимый день!</p><br><br>
            <div><button onclick="document.location='info.php'" class="about_sign_up">Записаться  ———></button></div>
        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layots.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\OpenServer\OSPanel\domains\htdocs\laravel.test\resources\views/about.blade.php ENDPATH**/ ?>